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
    <div>
      Register
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <img
            src={imagePreview || "/images/user-placeholder.png"}
            alt=""
            className="w-20 h-20 rounded-full"
          />
          <input type="file" onChange={(e) => validate(e)} />
        </div>

        <div>
          <input type="text" {...register("firstName")} className="border" />
          {errors["firstName"] && (
            <span className="text-red-500 text-xs">
              {errors["firstName"].message}
            </span>
          )}
        </div>
        <div>
          <input type="text" {...register("lastName")} className="border" />
          {errors["lastName"] && (
            <span className="text-red-500 text-xs">
              {errors["lastName"].message}
            </span>
          )}
        </div>
        <div>
          <input type="email" {...register("email")} className="border" />
          {errors["email"] && (
            <span className="text-red-500 text-xs">
              {errors["email"].message}
            </span>
          )}
        </div>
        <div>
          <input type="password" {...register("password")} className="border" />
          {errors["password"] && (
            <span className="text-red-500 text-xs">
              {errors["password"].message}
            </span>
          )}
        </div>
        <div>
          <input
            type="password"
            {...register("confirmPassword")}
            className="border"
          />
          {errors["confirmPassword"] && (
            <span className="text-red-500 text-xs">
              {errors["confirmPassword"].message}
            </span>
          )}
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
