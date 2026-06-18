import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NavigateBtn({ path = -1, children, showArrow = false, className }) {
  const navigate = useNavigate();

  return (
    <Button variant="ghost" size="sm" onClick={() => navigate(path)} className={cn("gap-1.5 text-muted-foreground hover:text-foreground", className)}>
      {showArrow && <ArrowLeft className="size-4" />}
      {children}
    </Button>
  );
}
