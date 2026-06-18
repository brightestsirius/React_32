import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { useUpdatePost } from "@/hooks/usePosts"
import type { Post } from "@/api/posts"
import { postSchema, type PostForm } from "@/schemas/post"

type PostEditFormProps = {
  post: Post
  onCancel: () => void
}

export function PostEditForm({ post, onCancel }: PostEditFormProps) {
  const updatePost = useUpdatePost(post.id)

  const { register, handleSubmit, formState: { errors } } = useForm<PostForm>({
    resolver: zodResolver(postSchema),
    values: { title: post.title, body: post.body },
  })

  const onSubmit = (data: PostForm) => {
    updatePost.mutate(data, { onSuccess: onCancel })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <input
          {...register("title")}
          className="rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        {errors.title && <p className="text-xs text-destructive">{errors.title.message}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <textarea
          {...register("body")}
          rows={5}
          className="rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        {errors.body && <p className="text-xs text-destructive">{errors.body.message}</p>}
      </div>
      <div className="flex gap-2">
        <Button type="submit" disabled={updatePost.isPending}>
          {updatePost.isPending ? "Saving..." : "Save"}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  )
}
