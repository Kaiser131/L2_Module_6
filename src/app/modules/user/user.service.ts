import { IUser } from "./user.interface";
import User from "./user.model";



// Post Users Data
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const userInfo = await new User(payload);
    await userInfo.save();
    return userInfo;
};


// All Users Data
export const getUsersFromDB = async () => {
    const users = await User.find();
    return users;
};


// findOne and Filter
export const getUserByIdFromDB = async (payload: number): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, { role: 1 });
    return user;
};
