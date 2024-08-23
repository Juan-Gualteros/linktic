import { CommonModule } from '@angular/common';
import { ReservationService } from './../../../core/services/reservation.service';
import { Component, ViewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import Notiflix from 'notiflix';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-list-reservations',
  standalone: true,
  imports: [MatTableModule, MatInputModule, CommonModule, MatButtonModule, MatIconModule, MatPaginatorModule, MatTooltipModule],
  templateUrl: './list-reservations.component.html',
  styleUrl: './list-reservations.component.scss',
})
export class ListReservationsComponent {
  displayedColumns: string[] = [
    'Nombre',
    'Telefono',
    'Correo',
    'Inicio',
    'Fin',
    'Precio',
    'Cuarto',
    'Disponibilidad',
    'Acciones'
  ];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;
  rooms: any;
  room: any;
  typeRoom: any;
  status: any;
  constructor(private reservationSrv: ReservationService, private router: Router) {}
  ngOnInit() {
    this.getReservations();
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }

    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  getReservations() {
    this.reservationSrv.getRooms().subscribe(rooms => {
      this.rooms = rooms;

      this.reservationSrv.getStatus().subscribe(statuses => {
        this.status = statuses;

        this.reservationSrv.getReservations().subscribe((reservations: any[]) => {


          const reservationsWithDetails = reservations.map((reservation) => {
            const room = this.rooms.find((room: { _id: any; }) => room._id === reservation.id_room);
            const status = this.status.find((status: { _id: any; }) => status._id === reservation.id_status);

            return {
              ...reservation,
              room_number: room ? room.room_number : 'Cuarto no encontrado',
              status_name: status ? status.name_status : 'Estado no encontrado'
            };
          });

          this.dataSource.data = reservationsWithDetails;
          if (this.paginator) {
            this.dataSource.paginator = this.paginator;
          }

          if (this.sort) {
            this.dataSource.sort = this.sort;
          }
        });
      });
    });
  }

  applyFilter(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    this.dataSource.filter = input.value.trim().toLowerCase();
  }

  edit(element: any) {
    this.router.navigate(['/edit', element._id], );
  }

  delete(element: any) {
    this.reservationSrv.deleteReservation(element._id).subscribe({next: (res)=>{
      Notiflix.Notify.success(`Reserva con id: ${element._id}, eliminada con exito`)
      this.getReservations()
    },
  error: (err)=> {
    console.log('Eliminar', element);
    Notiflix.Notify.failure(`Error eliminando el id: ${element._id}, ${err}`)
  }
  })

  }
  navigateToNew() {
    this.router.navigate(['/new']);
  }
}
