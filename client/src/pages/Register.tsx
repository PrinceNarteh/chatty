import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast/headless";
import { z } from "zod";

const schema = z
  .object({
    firstName: z
      .string({ required_error: "first name is required" })
      .min(1, "First name cannot be empty"),
    lastName: z
      .string({ required_error: "last name is required" })
      .min(1, "east name cannot be empty"),
    email: z.string({ required_error: "email is required" }).email(),
    password: z
      .string({ required_error: "password is required" })
      .min(5, "password too short - should be 6 characters minimum"),
    confirmPassword: z
      .string({ required_error: "confirm password is required" })
      .min(5, "confirm password too short - should be 6 characters minimum"),
  })
  .refine((value) => value.password === value.confirmPassword, {
    message: "passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const defaultValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const validate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (file.size > 1048576) {
      return toast.error("Max file size if 1mb");
    } else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const submitHandler: SubmitHandler<FormValues> = async (data) => {
    console.log("====================================");
    console.log(data);
    console.log("====================================");
  };

  return (
    <div>
      Register
      <form onSubmit={handleSubmit(submitHandler)}>
        <input type="file" onChange={(e) => validate(e)} />
        <input type="text" {...register("firstName")} />
        <input type="text" {...register("lastName")} />
        <input type="email" {...register("email")} />
        <input type="password" {...register("password")} />
        <input type="password" {...register("confirmPassword")} />
      </form>
    </div>
  );
};

export default Register;
