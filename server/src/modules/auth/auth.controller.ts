import { Request, Response } from "express";
import { createUser } from "../users/user.controller";
import User from "../users/user.model";
import { CreateUserDto } from "../users/user.schema";
import { LoginDto } from "./auth.dto";

export async function login(
  req: Request<{}, {}, LoginDto["body"]>,
  res: Response
) {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    user.status = "online";
    user.save();
    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
}

export async function register(
  req: Request<{}, {}, CreateUserDto["body"]>,
  res: Response
) {
  try {
    const user = await createUser({ body: req.body });
    return user;
  } catch (error: any) {
    res.status(400).json(error.message);
  }
}
