import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { changePasswordSchema } from "../../schemas/profileSchemas";
import { useChangePassword } from "../../hooks/useChangePassword";

export default function ChangePasswordForm() {
  const changePasswordMutation = useChangePassword();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    changePasswordMutation.mutate(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Change Password</h3>

      <label>
        Current password:{" "}
        <input type="password" {...register("currentPassword")} />
        {errors.currentPassword && (
          <p className="auth__form--error">{errors.currentPassword.message}</p>
        )}
      </label>

      <label>
        New password: <input type="password" {...register("newPassword")} />
        {errors.newPassword && (
          <p className="auth__form--error">{errors.newPassword.message}</p>
        )}
      </label>

      <label>
        Confirm password:{" "}
        <input type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && (
          <p className="auth__form--error">{errors.confirmPassword.message}</p>
        )}
      </label>

      {changePasswordMutation.isError && (
        <p className="auth__form--error">
          {changePasswordMutation.error.message}
        </p>
      )}

      {changePasswordMutation.isSuccess && (
        <p className="auth__form--success">Password changed successfully</p>
      )}

      <button disabled={changePasswordMutation.isPending}>
        {changePasswordMutation.isPending ? "Changing..." : "Change password"}
      </button>
    </form>
  );
}
