import SidebarNav from "./SidebarNav";
import LogoutButton from "../auth/LogoutButton";
import { MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2.5 px-5 py-5">
        <div className="bg-primary rounded-lg p-1.5">
          <MapPin className="size-4 text-white" />
        </div>
        <div className="leading-tight">
          <p className="text-[10px] text-muted-foreground font-medium">Logistics</p>
          <p className="text-sm font-bold">Dashboard</p>
        </div>
      </div>

      <Separator />

      <div className="flex-1 py-3">
        <SidebarNav />
      </div>

      <Separator />

      <div className="p-3">
        <LogoutButton />
      </div>
    </div>
  );
}
