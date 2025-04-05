import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const userInfo = await new User(payload);
    await userInfo.save();
    return userInfo;
};

export const getUsersFromDB = async () => {
    const users = await User.find();
    return users;
}


