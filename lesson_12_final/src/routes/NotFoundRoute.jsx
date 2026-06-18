import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Home, SearchX } from "lucide-react";

export default function NotFoundRoute() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardContent className="pt-10 pb-8 px-8">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-muted p-4">
              <SearchX className="size-10 text-muted-foreground" />
            </div>
          </div>

          <p className="text-7xl font-bold tracking-tighter text-primary mb-2">404</p>

          <h1 className="text-2xl font-semibold mb-2">Page not found</h1>

          <p className="text-muted-foreground text-sm mb-6">
            The page you're looking for doesn't exist or has been moved.
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
