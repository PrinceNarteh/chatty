import { z } from "zod";

export const createUserSchema = z.object({
  body: z
    .object({
      firstName: z
        .string({ required_error: "first name is required" })
        .min(1, "first name cannot be empty"),
      lastName: z
        .string({ required_error: "last name is required" })
        .min(1, "last name cannot be empty"),
      email: z.string({ required_error: "email is required" }).email(),
      password: z
        .string({ required_error: "password is required" })
        .min(6, "password too short - should be 6 characters minimum"),
      confirmPassword: z
        .string({ required_error: "confirm password is required" })
        .min(6, "confirm password too short - should be 6 characters minimum"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "passwords do not match",
      path: ["confirmPassword"],
    }),
});

export type CreateUserDto = z.TypeOf<typeof createUserSchema>;
