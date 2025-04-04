import User from "./user.model";

export const createUserToDb = async () => {
    const userInfo = await new User({
        id: 499,
        role: 'student',
        contact: 148575
    });
    await userInfo.save();
    console.log(userInfo);
};


