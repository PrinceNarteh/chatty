import { Request, Response } from "express";
import { loginDto } from "./auth.dto";
import User from "../users/user.model";

export const login = async (
  req: Request<{}, {}, loginDto["body"]>,
  res: Response
) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
export const register = async (req: Request<{}, {}, {}>) => {};
