import { MapPin } from "lucide-react";

export default function LocationCard({ location }) {
  if (!Object.keys(location).length) return null;

  return (
    <div className="flex items-center gap-3">
      <div className="bg-gray-100 rounded-lg size-10 flex items-center justify-center shrink-0">
        <MapPin className="size-4 text-muted-foreground" />
      </div>
      <div>
        <p className="font-medium text-sm">{location.name}</p>
        <p className="text-xs text-muted-foreground">{location.address}</p>
      </div>
    </div>
  );
}
