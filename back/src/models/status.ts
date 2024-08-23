import {Schema, Types, model, Model} from "mongoose"
import { Status } from "../interfaces/status.interface"


const StatusSchema = new Schema<Status>(
    {
       name_status: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }

)

const StatusModel = model('status', StatusSchema)
export default StatusModel