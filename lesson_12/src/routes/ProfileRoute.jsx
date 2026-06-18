import EditProfileForm from "../components/profile/EditProfileForm";
import ChangePasswordForm from "../components/profile/ChangePasswordForm";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuthStore } from "../store/authStore";
import { getInitials } from "@/lib/utils";

export default function ProfileRoute() {
  const user = useAuthStore((state) => state.user);
  const initials = getInitials(user);

  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div>
        <h1 className="text-xl font-bold">Profile</h1>
        <p className="text-sm text-muted-foreground">Manage your personal information</p>
      </div>

      <div className="bg-white rounded-xl border border-border p-6">
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="size-16">
            <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{user?.name ?? "User"}</p>
            <p className="text-sm text-muted-foreground">Admin</p>
            <div className="flex flex-col gap-0.5 mt-1">
              {user?.email && (
                <p className="text-xs text-muted-foreground">{user.email}</p>
              )}
              {user?.phone && (
                <p className="text-xs text-muted-foreground">{user.phone}</p>
              )}
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        <p className="text-sm font-semibold mb-4">Edit Profile</p>
        <EditProfileForm />
      </div>

      <div className="bg-white rounded-xl border border-border p-6">
        <p className="text-sm font-semibold mb-4">Password</p>
        <Separator className="mb-4" />
        <ChangePasswordForm />
      </div>
    </div>
  );
}
