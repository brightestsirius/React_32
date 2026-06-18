import { useRouteError } from "react-router";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Home, AlertTriangle } from "lucide-react";

export default function ErrorRoute() {
  const error = useRouteError();

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardContent className="pt-10 pb-8 px-8">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-destructive/10 p-4">
              <AlertTriangle className="size-10 text-destructive" />
            </div>
          </div>

          <p className="text-7xl font-bold tracking-tighter text-destructive mb-2">
            {error?.status ?? "!"}
          </p>

          <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>

          <p className="text-muted-foreground text-sm mb-6">
            {error?.statusText ?? error?.message ?? "An unexpected error occurred."}
          </p>

          <Separator className="mb-6" />

          <Button asChild size="lg" className="w-full">
            <Link to="/">
              <Home />
              Back to Home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
