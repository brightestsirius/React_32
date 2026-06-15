import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordSchema } from "../../schemas/profileSchemas";
import { useChangePassword } from "../../hooks/useChangePassword";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

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
      onSuccess: () => reset(),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h3 className="text-sm font-semibold">Password</h3>
      <Separator />

      <div className="space-y-1.5">
        <Label htmlFor="currentPassword">Current password</Label>
        <div className="flex items-center gap-3">
          <Input
            id="currentPassword"
            type="password"
            className="flex-1"
            {...register("currentPassword")}
            aria-invalid={!!errors.currentPassword}
          />
          <Button type="button" variant="link" size="sm" className="text-primary shrink-0 px-0">
            Change password
          </Button>
        </div>
        {errors.currentPassword && (
          <p className="text-xs text-destructive">{errors.currentPassword.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="newPassword">New password</Label>
        <Input
          id="newPassword"
          type="password"
          {...register("newPassword")}
          aria-invalid={!!errors.newPassword}
        />
        {errors.newPassword && (
          <p className="text-xs text-destructive">{errors.newPassword.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="confirmPassword">Confirm password</Label>
        <Input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
          aria-invalid={!!errors.confirmPassword}
        />
        {errors.confirmPassword && (
          <p className="text-xs text-destructive">{errors.confirmPassword.message}</p>
        )}
      </div>

      {changePasswordMutation.isError && (
        <p className="text-xs text-destructive">{changePasswordMutation.error.message}</p>
      )}
      {changePasswordMutation.isSuccess && (
        <p className="text-xs text-green-600">Password changed successfully</p>
      )}

      <Button type="submit" disabled={changePasswordMutation.isPending}>
        {changePasswordMutation.isPending ? "Changing..." : "Save changes"}
      </Button>
    </form>
  );
}
