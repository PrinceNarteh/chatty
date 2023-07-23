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
      const res = await login(data);
      toast.dismiss(toastId);
      toast.success("Login successful!");
      console.log(res);
      navigate("/");
    } catch (error: any) {
      toast.dismiss(toastId);
      toast.error(error.response.data);
    }
  };

  return (
    <div>
      Login
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          {errors["email"] && <p>{errors["email"].message}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} />
          {errors["password"] && <p>{errors["password"].message}</p>}
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
