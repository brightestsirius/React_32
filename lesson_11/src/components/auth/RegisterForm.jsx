import { useForm } from "react-hook-form";
import { useRegister } from "../../hooks/useRegister";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "../../schemas/authSchemas";

const CUSTOM_USER = {
  name: `Taras Sheva`,
  email: `sheva@example.com`,
  password: `12345678`,
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: CUSTOM_USER.name,
      email: CUSTOM_USER.email,
      password: CUSTOM_USER.password,
    },
  });

  const registerMutation = useRegister();

  const onSubmit = (data) => {
    registerMutation.mutate(data);
  };

  return (
    <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name <input type="text" {...register("name")} />
        <p className="auth__form--error">{errors.name?.message}</p>
      </label>
      <label>
        Email <input type="email" {...register("email")} />
        <p className="auth__form--error">{errors.email?.message}</p>
      </label>
      <label>
        Password <input type="password" {...register("password")} />
        <p className="auth__form--error">{errors.password?.message}</p>
      </label>
      {registerMutation.isError && (
        <p className="auth__form--error">
          Error: {registerMutation.error.message}
        </p>
      )}
      <button disabled={registerMutation.isPending}>
        {registerMutation.isPending ? `Registerring...` : `Register`}
      </button>
    </form>
  );
}
