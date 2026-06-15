import { useForm } from "react-hook-form";
import { useRegister } from "../../hooks/useRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../schemas/authSchemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="John Doe"
          {...register("name")}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register("email")}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          {...register("password")}
          aria-invalid={!!errors.password}
        />
        {errors.password && (
          <p className="text-xs text-destructive">{errors.password.message}</p>
        )}
      </div>

      {registerMutation.isError && (
        <p className="text-xs text-destructive">
          {registerMutation.error.message}
        </p>
      )}

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={registerMutation.isPending}
      >
        {registerMutation.isPending ? "Registering..." : "Create account"}
      </Button>
    </form>
  );
}
