import { Request, Response } from "express";
import { CreateUserDto } from "./user.schema";
import User from "./user.model";

export async function createUser(
  req: Request<{}, {}, CreateUserDto["body"]>,
  res: Response
) {
  const user = await User.create(req.body);
}
