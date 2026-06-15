import { useForm } from "react-hook-form";
import { useLogin } from "../../hooks/useLogin";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "../../schemas/authSchemas";

const CUSTOM_USER = {
  email: `john@example.com`,
  password: `12345678`,
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: CUSTOM_USER.email,
      password: CUSTOM_USER.password,
    },
  });

  const loginMutation = useLogin();

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
