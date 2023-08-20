import { Request, Response } from "express";
import { CreateUserDto } from "./user.schema";
import User from "./user.model";

export async function createUser(
  req: Request<{}, {}, CreateUserDto["body"]>,
  res: Response
) {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    let msg: string;
    if (error.code === 11000) {
      msg = "Email already in use";
    } else {
      msg = error.message;
    }
    res.status(400).json(msg);
  }
}
