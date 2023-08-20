import { Router } from "express";
import validateResource from "../../utils/validateResource";
import { createUserSchema } from "../users/user.schema";
import { login, register } from "./auth.controller";

const authRouter = Router();

authRouter.post("/login", login);
authRouter.post("/register", validateResource(createUserSchema), register);

export default authRouter;
