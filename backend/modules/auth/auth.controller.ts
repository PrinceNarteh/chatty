import { Request, Response } from "express";

export const login = async (req: Request<{}, {}, {}>, res: Response) => {
  res.send("Login Successful");
};
export const register = async (req: Request<{}, {}, {}>) => {};
