import { Reservation } from "../interfaces/reservation";
import { Schema, Types, model, Model } from "mongoose";

const ReservationScheme = new Schema<Reservation>(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    id_status: {
      type: String,
      required: true,
    },
    id_room: {
        type: String,
        required: true,
      },
    start_time: {
      type: Date,
      required: true,
    },
    end_time: {
      type: Date,
      required: true,
    },
    total_price: {
      type: Number,
      required: true,
    },
    state: {
      type: Number,
    },
    number_of_people: {
        type: Number,
        required: true
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ReservationModel = model("reservations", ReservationScheme);
export default ReservationModel;
