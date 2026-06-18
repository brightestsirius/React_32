import { useCounterStore } from "@/stores/useCounterStore"
import { Button } from "@/components/ui/button"

export function HomePage() {
  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((state) => state.increment)

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-2xl font-bold">Home</h1>
      <p className="text-muted-foreground">Count: {count}</p>
      <Button onClick={increment}>Increment</Button>
    </div>
  )
}
