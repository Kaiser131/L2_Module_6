import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUserByIdFromDB, getUsersFromDB } from "./user.service";

export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    const data = req.body;
    const user = await createUserToDB(data);
    res.status(200).json({
        status: "Success",
        data: user
    });
};


export const getUsers = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    const user = await getUsersFromDB();
    res.status(200).json({
        status: "Success",
        data: user
    });
};


export const getUserById = async (
    req: Request,
    res: Response
) => {
    const id = parseFloat(req.params.id);
    const user = await getUserByIdFromDB(id);
    res.status(200).json({
        status: 'Success',
        data: user
    });
};


// Pattern
// route-> controller -> service