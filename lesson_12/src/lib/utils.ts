import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(user: { name?: string; email?: string } | null): string {
  if (user?.name) {
    return user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  }
  return user?.email?.[0]?.toUpperCase() ?? "U";
}
