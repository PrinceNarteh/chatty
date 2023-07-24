import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLoginMutation } from "../redux/services/appApi";
import { useNavigate } from "react-router-dom";

type FormValue = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const submit: SubmitHandler<FormValue> = async (data) => {
    const toastId = toast.loading("Loading...");
    try {
      const res: any = await login(data);
      toast.dismiss(toastId);
      if (res.data) {
        toast.success("Login successful!");
        navigate("/");
      } else {
        toast.error(res.error.data);
      }
    } catch (error: any) {
      toast.dismiss(toastId);
      toast.error(error.response.data);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center space-y-5 items-center text-white max-w-sm mx-auto text-center">
      <img src="/images/logo.png" alt="" className="w-10 mb-10" />
      <h3 className="text-4xl">Login</h3>
      <p className="text-gray-500">
        Please enter your email and password to login and continue
      </p>
      <form onSubmit={handleSubmit(submit)} className="w-9/12 space-y-5">
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
  );
};

export default Login;
