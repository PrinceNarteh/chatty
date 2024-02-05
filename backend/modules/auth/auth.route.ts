import { Router } from "express";
import { login, register } from "./auth.controller";

const authRoute = Router();

authRoute.post("/login", login);
authRoute.post("/signup", register);

export default authRoute;
