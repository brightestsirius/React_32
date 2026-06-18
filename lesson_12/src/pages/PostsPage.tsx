import { useState } from "react"
import { useSearchParams } from "react-router"
import { usePosts, POSTS_PER_PAGE } from "@/hooks/usePosts"
import { PostCreateForm } from "@/components/posts/PostCreateForm"
import { PostList } from "@/components/posts/PostList"
import { PostsPagination } from "@/components/posts/PostsPagination"
import { Button } from "@/components/ui/button"

export function PostsPage() {
  const [showForm, setShowForm] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get("page") ?? 1)

  const setPage = (newPage: number) => {
    setSearchParams({ page: String(newPage) })
  }

  const { data, isPending, isError, isPlaceholderData } = usePosts(page)

  const totalPages = data ? Math.ceil(data.total / POSTS_PER_PAGE) : 0

  if (isPending) return <p className="p-8 text-muted-foreground">Loading...</p>
  if (isError) return <p className="p-8 text-destructive">Something went wrong.</p>

  return (
    <div className="mx-auto max-w-2xl p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Posts</h1>
        <Button onClick={() => setShowForm((v) => !v)}>
          {showForm ? "Cancel" : "New Post"}
        </Button>
      </div>
      {showForm && <PostCreateForm onSuccess={() => setShowForm(false)} />}

      <div className={`transition-opacity ${isPlaceholderData ? "opacity-50" : "opacity-100"}`}>
        <PostList posts={data.posts} />
      </div>

      <PostsPagination
        page={page}
        totalPages={totalPages}
        isPlaceholderData={isPlaceholderData}
        onPageChange={setPage}
      />
    </div>
  )
}
