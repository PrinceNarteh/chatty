import { z } from "zod";

export const loginSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "Email is required." }).email(),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, "password too short - should be 6 characters minimum"),
  }),
});

export type loginDto = z.TypeOf<typeof loginSchema>;
