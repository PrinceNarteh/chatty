import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";
import { FormValues } from "../types";
import uploadImage from "../utils/uploadImage";
import { useRegisterMutation } from "../redux/services/appApi";

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

const defaultValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [image, setImage] = useState<File | undefined>(undefined);
  const [imagePreview, setImagePreview] = useState("");
  const [uploadingImg, setUploadingImg] = useState<boolean>(false);
  const [registerUser] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const validate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      setImage(undefined);
      setImagePreview("");
      return;
    } else {
      const file = e.target.files[0];
      if (!file) return;
      if (file.size > 1048576) {
        toast.error("Max file size if 1mb");
        return;
      } else {
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
      }
    }
  };

  const submitHandler: SubmitHandler<FormValues> = async (data) => {
    const toastId = toast.loading("Registering user...");
    try {
      if (!image) {
        return toast.error("Please upload your profile image");
      }
      const url = await uploadImage({ image, setUploadingImg });
      const user = await registerUser({ ...data, profileUrl: url });
      console.log(user);
      toast.dismiss(toastId);
    } catch (error) {
      setUploadingImg(false);
    }
  };

  // console.log({ image, imagePreview });

  return (
    <div className="min-h-screen text-white flex items-center justify-center">
      <div className="flex flex-col justify-center items-center space-y-3 w-full max-w-xl mx-auto">
        <img src="/images/logo.png" alt="" className="w-10 mb-10" />
        <h3 className="text-4xl">Login</h3>
        <p className="text-gray-500 w-10/12 text-center">
          Please enter your email and password to login and continue
        </p>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="w-9/12 space-y-5"
        >
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <div className="w-full">
              <input
                type="firstName"
                placeholder="First Name"
                {...register("firstName")}
                className="bg-transparent border border-light-green p-2 rounded-md w-full"
              />
              {errors["firstName"] && <p>{errors["firstName"].message}</p>}
            </div>
            <div className="w-full">
              <input
                type="lastName"
                placeholder="Last Name"
                {...register("lastName")}
                className="bg-transparent border border-light-green p-2 rounded-md w-full"
              />
              {errors["lastName"] && <p>{errors["lastName"].message}</p>}
            </div>
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="bg-transparent border border-light-green p-2 rounded-md w-full"
            />
            {errors["email"] && <p>{errors["email"].message}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="bg-transparent border border-light-green p-2 rounded-md w-full"
            />
            {errors["password"] && <p>{errors["password"].message}</p>}
          </div>
          <input
            type="submit"
            value="Login"
            className="bg-dark-green w-full py-2 rounded-md cursor-pointer font-bold"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
