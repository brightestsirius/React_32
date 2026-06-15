import { useSearchParams } from "react-router";
import { Search } from "lucide-react";

export default function LocationSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const handleChange = (event) => {
    const params = new URLSearchParams(searchParams);
    if (event.target.value) {
      params.set("search", event.target.value);
    } else {
      params.delete("search");
    }
    setSearchParams(params);
  };

  return (
    <div className="flex items-center gap-2 flex-1">
      <Search className="size-4 text-muted-foreground shrink-0" />
      <input
        type="text"
        placeholder="Search location..."
        value={search}
        onChange={handleChange}
        className="flex-1 text-sm bg-transparent outline-none placeholder:text-muted-foreground"
      />
    </div>
  );
}
