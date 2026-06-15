import { NavLink } from "react-router";
import { Map, BarChart2, Star, User } from "lucide-react";
import { cn } from "@/lib/utils";

const menu = [
  { path: "/dashboard/map", name: "Map", icon: Map },
  { path: "/dashboard/analytics", name: "Analytics", icon: BarChart2 },
  { path: "/dashboard/favorites", name: "Favorites", icon: Star },
  { path: "/dashboard/profile", name: "Profile", icon: User },
];

export default function SidebarNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-0.5 px-2">
        {menu.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-accent text-primary"
                      : "text-muted-foreground hover:bg-gray-100 hover:text-foreground"
                  )
                }
              >
                <Icon className="size-4 shrink-0" />
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
