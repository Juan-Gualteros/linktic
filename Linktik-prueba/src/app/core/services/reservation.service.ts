import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reservation } from '../../interface/reservation';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private appUrl: string
  private apiUrl: string
  constructor(private http: HttpClient ) {
    this.appUrl = environment.apiUrl
    this.apiUrl = 'reservation'
   }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.appUrl}${this.apiUrl}` )
  }
  getReservationById(id: string): Observable<any> {

    return this.http.get<any>(`${this.appUrl}${this.apiUrl}/${id}`);
  }

  newReservation(reservation: Reservation): Observable<any> {

    return this.http.post(`${this.appUrl}${this.apiUrl}`, reservation)
  }
  updateReservation(id: string, reservation: Reservation): Observable<any> {

    return this.http.put(`${this.appUrl}${this.apiUrl}/${id}`, reservation)
  }
  deleteReservation(id: string): Observable<any> {
    return this.http.delete(`${this.appUrl}${this.apiUrl}/${id}`)
  }
  getRooms(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.appUrl}${this.apiUrl}/rooms` )
  }
  getTypeRoom(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.appUrl}${this.apiUrl}/typeRoom` )
  }
  getStatus(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.appUrl}${this.apiUrl}/status` )
  }
}
