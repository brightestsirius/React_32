import { useLogin } from "../../hooks/useLogin";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const schema = zod
  .object({
    email: zod.string().min(1, "Email is required").email("Invalid email"),
    password: zod.string().min(6, "Password must be at least 6 characters"),
  })
  .required();

export default function LoginForm() {
  const loginMutation = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: `john@example.com`,
      password: `12345678`,
    },
  });

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email <input type="email" {...register("email")} />
        <p className="auth__form--error">{errors.email?.message}</p>
      </label>
      <label>
        Password <input type="password" {...register("password")} />
        <p className="auth__form--error">{errors.password?.message}</p>
      </label>
      {loginMutation.isError && (
        <p className="auth__form--error">
          Error: {loginMutation.error.message}
        </p>
      )}
      <button disabled={loginMutation.isPending}>{loginMutation.isPending ? `Logging in...` : `Log in`}</button>
    </form>
  );
}
