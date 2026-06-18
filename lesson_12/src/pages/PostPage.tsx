import { useState } from "react"
import { useParams, Link } from "react-router"
import { usePost } from "@/hooks/usePosts"
import { PostDetails } from "@/components/posts/PostDetails"
import { PostEditForm } from "@/components/posts/PostEditForm"

export function PostPage() {
  const { id } = useParams<{ id: string }>()
  const [isEditing, setIsEditing] = useState(false)
  const { data: post, isPending, isError } = usePost(Number(id))

  if (isPending) return <p className="p-8 text-muted-foreground">Loading...</p>
  if (isError) return <p className="p-8 text-destructive">Post not found.</p>

  return (
    <div className="mx-auto max-w-2xl p-8">
      <Link to="/posts" className="mb-6 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        ← Back to Posts
      </Link>

      {isEditing
        ? <PostEditForm post={post} onCancel={() => setIsEditing(false)} />
        : <PostDetails post={post} onEdit={() => setIsEditing(true)} />
      }
    </div>
  )
}
