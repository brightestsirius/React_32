import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NavigateBtn({ path = -1, children, showArrow = false }) {
  const navigate = useNavigate();

  return (
    <Button variant="ghost" size="sm" onClick={() => navigate(path)} className="gap-1.5 text-muted-foreground hover:text-foreground">
      {showArrow && <ArrowLeft className="size-4" />}
      {children}
    </Button>
  );
}
