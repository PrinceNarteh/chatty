import { Router } from "express";
import { login, register } from "./auth.controller";
import validateResource from "../../utils/validateResources";
import { loginSchema } from "./auth.dto";

const authRoute = Router();

authRoute.post("/login", validateResource(loginSchema), login);
authRoute.post("/signup", register);

export default authRoute;
