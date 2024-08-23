import {Schema, Types, model, Model} from "mongoose"
import { User } from '../interfaces/user.interface';

const UserScheme = new Schema<User>(
    {
        name: {
            type: String,
            required : true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }

)

const UserModel = model('users', UserScheme)
export default UserModel