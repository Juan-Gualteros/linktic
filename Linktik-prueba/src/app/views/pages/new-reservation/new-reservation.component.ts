import { Component} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReservationService } from '../../../core/services/reservation.service';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import Notiflix from 'notiflix';
function endTimeAfterStartTimeValidator(): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const startTime = formGroup.get('start_time')?.value;
    const endTime = formGroup.get('end_time')?.value;

    if (startTime && endTime && endTime <= startTime) {
      return { endTimeBeforeStartTime: true };
    }
    return null;
  };
}

function maxOccupancyValidator(rooms: any[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.parent) {
      return null;
    }

    const numberOfPeople = control.value;
    const selectedRoomId = control.parent.get('id_room')?.value;
    const selectedRoom = rooms.find((r: { _id: any; }) => r._id === selectedRoomId);

    if (selectedRoom && numberOfPeople > selectedRoom.max_occupancy) {
      return { exceedsMaxOccupancy: true };
    }
    return null;
  };
}
@Component({
  selector: 'app-new-reservation',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule],
  templateUrl: './new-reservation.component.html',
  styleUrl: './new-reservation.component.scss'
})
export class NewReservationComponent {

  form: FormGroup;
  room: any
  typeRoom: any
  status: any[] =[]
  minEndDate: Date = new Date();
  today: Date = new Date();
  filteredRooms: any[] = [];
  roomStates: { [key: string]: string } = {};
  totalPrice: number = 0;
  isEditing: boolean = false;
  itemId: string | undefined ;
  itemData: any;
  selectedStatus: string | null = null;

  constructor(private fb: FormBuilder, private reservationSrv: ReservationService, private router: Router, private route : ActivatedRoute) {
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      start_time: [null, Validators.required],
      end_time: [null, Validators.required],
      total_price: [{value:null, disabled: true}],
      id_room:[null, Validators.required],
      id_status: [{value: null, disabled: false}, Validators.required],
      number_of_people: [ null, [Validators.required, Validators.min(1)]],
      state: [1]
    },{
      validators: endTimeAfterStartTimeValidator()
    });
    this.getRooms()
    this.getTypeRoom()
    this.getStatus()
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditing = true;
        this.loadItemData(id);
      }
    });
    this.form.get('start_time')?.valueChanges.subscribe(startTime => {
      const endPicker = this.form.get('end_time');
      if (startTime) {
        this.minEndDate = new Date(startTime);
        this.minEndDate.setDate(this.minEndDate.getDate() + 1);

        if (endPicker && endPicker.value) {
          if (new Date(endPicker.value) <= new Date(startTime)) {
            endPicker.setValue(null);
            endPicker.setErrors({ endTimeBeforeOrEqualStartTime: true });
          } else {
            endPicker.updateValueAndValidity();
          }
        }
      }
      this.calculateTotalPrice();
    });
    this.form.get('end_time')?.valueChanges.subscribe(() => {
      this.calculateTotalPrice();
    });

    this.form.get('id_room')?.valueChanges.subscribe(roomId => {
      if (roomId) {
        const selectedRoom = this.room.find((r: { _id: any; }) => r._id === roomId);
        if (selectedRoom) {
          this.selectedStatus = selectedRoom.id_status;
          console.log(selectedRoom.state)
          console.log(this.selectedStatus)
          this.form.get('id_status')?.setValue(selectedRoom.id_status);
          this.form.get('id_status')?.disable();
          this.form.get('number_of_people')?.setValidators([
            Validators.required,
            Validators.min(1),
            maxOccupancyValidator(this.room)
          ]);
          this.form.get('number_of_people')?.updateValueAndValidity();
        }
      } else {
        this.selectedStatus = null;
        this.form.get('id_status')?.enable();
      }
      this.calculateTotalPrice();
    });



    this.form.get('number_of_people')?.valueChanges.subscribe(() => {
      this.form.updateValueAndValidity();
      this.calculateTotalPrice();
    });
  }
  loadItemData(id: string) {
    this.itemId = id
    this.reservationSrv.getReservationById(id).subscribe(data => {
      this.form.patchValue({
        name: data.name,
        email: data.email,
        phone: data.phone,
        start_time: new Date(data.start_time),
        end_time: new Date(data.end_time),
        total_price: data.total_price,
        id_room: data.id_room,
        id_status: data.id_status,
        number_of_people: data.number_of_people,
        state: data.state
      });
      this.calculateTotalPrice();
    });
  }
  getMaxOccupancy(): number | null {
    const selectedRoomId = this.form.get('id_room')?.value;
    const selectedRoom = this.filteredRooms.find((r: { _id: any; }) => r._id === selectedRoomId);
    return selectedRoom ? selectedRoom.max_occupancy : null;
  }

  goBack() {
    this.router.navigate(['/list']);
  }
  getRooms() {
    this.reservationSrv.getRooms().subscribe((res: any[]) => {
      this.room = res;
      this.filteredRooms = this.room.filter((r: { state: boolean; }) => r.state === true);
    });
  }

  getTypeRoom(){
    this.reservationSrv.getTypeRoom().subscribe(res=>{
      this.typeRoom=res
    })
  }

  getStatus() {
    this.reservationSrv.getStatus().subscribe(res => {
      this.status = res;
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const startTime = this.form.get('start_time')?.value;
      const endTime = this.form.get('end_time')?.value;

      if (startTime) {
        this.form.get('start_time')?.setValue(new Date(startTime).toISOString());
      }
      if (endTime) {
        this.form.get('end_time')?.setValue(new Date(endTime).toISOString());
      }

      const formValue = {
        ...this.form.value,
        total_price: this.totalPrice,
        id_status: this.form.get('id_status')?.value
      };
      console.log(formValue);

      if (this.isEditing) {
        this.reservationSrv.updateReservation(this.itemId!, formValue).subscribe({
          next: (res: any) => {
            Notiflix.Notify.success('Reserva actualizada con éxito');
            this.goBack();
          },
          error: (err) => {
            console.error('Error al actualizar la reserva:', err);
            Notiflix.Notify.failure('Error al actualizar la reserva');
          }
        });
      } else {
        this.reservationSrv.newReservation(formValue).subscribe({
          next: (res: any) => {
            Notiflix.Notify.success('Reserva creada con éxito');
            this.goBack();
          },
          error: (err) => {
            console.error('Error al crear la reserva:', err);
            Notiflix.Notify.failure('Error al crear la reserva');
          }
        });
      }
    } else {
      Notiflix.Notify.failure('Formulario no válido. Por favor, revise los campos.');
    }
  }
  calculateTotalPrice() {
    const startTime = this.form.get('start_time')?.value;
    const endTime = this.form.get('end_time')?.value;
    const selectedRoomId = this.form.get('id_room')?.value;
    const numberOfPeople = this.form.get('number_of_people')?.value;
    const selectedRoom = this.filteredRooms.find((r: { _id: any; }) => r._id === selectedRoomId);

    if (startTime && endTime && selectedRoom && numberOfPeople) {
      const diffTime = new Date(endTime).getTime() - new Date(startTime).getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));
      this.totalPrice = selectedRoom.price * diffDays * numberOfPeople;
      this.form.get('total_price')?.setValue(this.totalPrice, { emitEvent: false });
    } else {
      this.totalPrice = 0;
      this.form.get('total_price')?.setValue(this.totalPrice, { emitEvent: false });
    }
  }
  get buttonText(): string {
    return this.isEditing ? 'Editar' : 'Guardar';
  }
}
