import { Request, Response } from "express";
import { loginDto } from "./auth.dto";
import User from "../users/user.model";

export const login = async (
  req: Request<{}, {}, loginDto["body"]>,
  res: Response
) => {
  const { email, password } = req.body;
  const user = await User.findByCredentials(email, password);
  res.status(200).json(user);
};
export const register = async (req: Request<{}, {}, {}>) => {};
