import {Schema, Types, model, Model} from "mongoose"
import { Rooms } from "../interfaces/rooms"

const RoomsSchema = new Schema<Rooms>(
    {
        room_number: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        price:{
            type: Number,
            required: true
        },
        max_occupancy: {
            type: Number
        },
        id_type_room:{
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }

)

const RoomsModel = model('rooms', RoomsSchema)
export default RoomsModel