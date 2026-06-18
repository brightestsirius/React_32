import { useNavigate } from "react-router"
import { Button } from "@/components/ui/button"
import { useDeletePost } from "@/hooks/usePosts"
import type { Post } from "@/api/posts"

type PostDetailsProps = {
  post: Post
  onEdit: () => void
}

export function PostDetails({ post, onEdit }: PostDetailsProps) {
  const navigate = useNavigate()
  const deletePost = useDeletePost()

  const onDelete = () => {
    deletePost.mutate(post.id, {
      onSuccess: () => navigate("/posts"),
    })
  }

  return (
    <div>
      <h1 className="mb-3 text-2xl font-bold">{post.title}</h1>
      <p className="mb-6 leading-relaxed text-muted-foreground">{post.body}</p>
      <div className="flex gap-2">
        <Button onClick={onEdit}>Edit</Button>
        <Button variant="destructive" onClick={onDelete} disabled={deletePost.isPending}>
          {deletePost.isPending ? "Deleting..." : "Delete"}
        </Button>
      </div>
    </div>
  )
}
