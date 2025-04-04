import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
});

const User = model<IUser>('User', userSchema);
export default User;