import { useAuthStore } from "../../store/authStore";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const logout = useAuthStore((state) => state.logout);

  return (
    <Button
      variant="ghost"
      className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10"
      onClick={logout}
    >
      <LogOut className="size-4" />
      Logout
    </Button>
  );
}
