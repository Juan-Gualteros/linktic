import { Reservation } from "../../../Linktik-prueba/src/app/interface/reservation";
import ReservationModel from "../models/reservation";
import RoomsModel from "../models/rooms";
import StatusModel from "../models/status";
import TypeRoomModel from "../models/typeRoom";

const insertReservation = async (reservation: Reservation) => {
  console.log(reservation)
  const responseInsert = await ReservationModel.create(reservation);
  return responseInsert;
};

const getAllReservations = async () => {
  const responseInsert = await ReservationModel.find({});
  return responseInsert;
};

const getOneReservation = async (id: string) => {
  const responseInsert = await ReservationModel.findOne({ _id: id });
  return responseInsert;
};

const updateAReservation = async (id: string, data: Reservation) => {
  const responseInsert = await ReservationModel.findOneAndUpdate(
    { _id: id },
    data,
    { new: true }
  );
  return responseInsert;
};

const deleteAReservation = async (id: string) => {
  const responseInsert = await ReservationModel.deleteOne({ _id: id });
  return responseInsert;
};

const getAllRooms = async () => {
  const responseInsert = await RoomsModel.find({});
  return responseInsert;
};
const getTypeOfRooms = async () => {
  const responseInsert = await TypeRoomModel.find({});
  return responseInsert;
};
const getStatuses = async () => {
  const responseInsert = await StatusModel.find({});
  return responseInsert;
};

export {
  insertReservation,
  getAllReservations,
  getOneReservation,
  updateAReservation,
  deleteAReservation,
  getAllRooms,
  getTypeOfRooms,
  getStatuses
};
