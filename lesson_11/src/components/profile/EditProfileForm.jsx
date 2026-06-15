import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { profileSchema } from "../../schemas/profileSchemas";
import { useProfile } from "../../hooks/useProfile";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";

export default function EditProfileForm() {
  const { data: profile, isLoading, isError } = useProfile();

  const updateProfileMutation = useUpdateProfile();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  useEffect(() => {
    if (profile) {
      reset({
        name: profile.name || "",
        email: profile.email || "",
        phone: profile.phone || "",
      });
    }
  }, [profile, reset]);

  const onSubmit = (data) => {
    updateProfileMutation.mutate(data);
  };

  if (isLoading) {
    return <p>Loading profile...</p>;
  }

  if (isError) {
    return <p>Failed to load profile</p>;
  }

  return (
    <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Edit Profile</h3>

      <label>
        Name: <input {...register("name")} />{" "}
        {errors.name && (
          <p className="auth__form--error">{errors.name.message}</p>
        )}
      </label>

      <label>
        Email: <input {...register("email")} />{" "}
        {errors.email && (
          <p className="auth__form--error">{errors.email.message}</p>
        )}
      </label>

      <label>
        Phone: <input {...register("phone")} />{" "}
        {errors.phone && (
          <p className="auth__form--error">{errors.phone.message}</p>
        )}
      </label>

      {updateProfileMutation.isError && (
        <p className="auth__form--error">
          {updateProfileMutation.error.message}
        </p>
      )}

      {updateProfileMutation.isSuccess && (
        <p className="auth__form--success">Profile updated successfully</p>
      )}

      <button disabled={updateProfileMutation.isPending}>
        {updateProfileMutation.isPending ? "Saving..." : "Save changes"}
      </button>
    </form>
  );
}
