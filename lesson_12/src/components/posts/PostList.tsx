import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { useDeletePost } from "@/hooks/usePosts"
import type { Post } from "@/api/posts"

type PostListProps = {
  posts: Post[]
}

export function PostList({ posts }: PostListProps) {
  const deletePost = useDeletePost()

  return (
    <ul className="flex flex-col gap-3">
      {posts.map((post) => (
        <li key={post.id} className="flex items-start justify-between gap-4 rounded-lg border p-4">
          <div className="min-w-0">
            <Link to={`/posts/${post.id}`} className="font-medium hover:underline">
              {post.title}
            </Link>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{post.body}</p>
          </div>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => deletePost.mutate(post.id)}
            disabled={deletePost.isPending}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  )
}
