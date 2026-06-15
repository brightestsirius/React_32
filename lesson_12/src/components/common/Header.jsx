import { useAuthStore } from "../../store/authStore";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Header() {
  const user = useAuthStore((state) => state.user);

  const initials = user?.name
    ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : user?.email?.[0]?.toUpperCase() ?? "U";

  return (
    <header className="h-14 bg-white border-b border-border flex items-center justify-between px-6 shrink-0">
      <div />
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar className="size-8">
            <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="hidden sm:block">
            <p className="text-sm font-medium leading-tight">
              {user?.name ?? "User"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
