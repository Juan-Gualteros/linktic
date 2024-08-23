import {Schema, Types, model, Model} from "mongoose"

import { TypeRoom } from "../interfaces/typeRoom"

const TypeRoomSchema = new Schema<TypeRoom>(
    {
        beds: {
            type: Number,
        },
        typeBed: {
            type: String,
        },
        class:{
            type: String,
        },

    },
    {
        timestamps: true,
        versionKey: false,
    }

)

const TypeRoomModel = model('typeRoom', TypeRoomSchema)
export default TypeRoomModel