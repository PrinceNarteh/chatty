import { Request, Response } from "express";
import { CreateUserDto } from "./user.schema";
import User from "./user.model";

export async function createUser(createUserDto: CreateUserDto) {
  try {
    const user = await User.create(createUserDto.body);
    return user;
  } catch (error: any) {
    let msg: string;
    if (error.code === 11000) {
      msg = "Email already in use";
    } else {
      msg = error.message;
    }
    return msg;
  }
}
