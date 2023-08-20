import { z } from "zod";

const loginSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "email is required" }).email(),
    password: z
      .string({ required_error: "password is required" })
      .min(6, "password too short - should be 6 characters minimum"),
  }),
});
export type LoginDto = z.TypeOf<typeof loginSchema>;
