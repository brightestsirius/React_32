import { Button } from "@/components/ui/button"

type PostsPaginationProps = {
  page: number
  totalPages: number
  isPlaceholderData: boolean
  onPageChange: (page: number) => void
}

export function getPages(current: number, total: number): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const pages: (number | "...")[] = [1]

  if (current > 3) pages.push("...")

  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
    pages.push(i)
  }

  if (current < total - 2) pages.push("...")

  pages.push(total)

  return pages
}

export function PostsPagination({ page, totalPages, isPlaceholderData, onPageChange }: PostsPaginationProps) {
  const pages = getPages(page, totalPages)

  return (
    <div className="mt-6 flex items-center justify-center gap-1">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        ←
      </Button>

      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`ellipsis-${i}`} className="px-2 text-muted-foreground">...</span>
        ) : (
          <Button
            key={p}
            variant={p === page ? "default" : "outline"}
            size="sm"
            onClick={() => onPageChange(p)}
            disabled={isPlaceholderData && p !== page}
          >
            {p}
          </Button>
        )
      )}

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages || isPlaceholderData}
      >
        →
      </Button>
    </div>
  )
}
