import { useSearchParams } from "react-router";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function ResetFiltersBtn() {
  const [searchParams, setSearchParams] = useSearchParams();
  const hasFilters = searchParams.toString() !== "";

  if (!hasFilters) return null;

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setSearchParams({})}
      className="text-muted-foreground h-7 px-2"
    >
      <X className="size-3.5" />
      Reset
    </Button>
  );
}
