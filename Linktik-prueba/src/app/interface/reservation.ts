export interface Reservation {
  name: string,
  phone: number,
  email: string,
  start_time: Date,
  end_time: Date,
  id_status: string,
  id_room: string,
  total_price: number,
  state: number
}
