import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { useCreatePost } from "@/hooks/usePosts"
import { postSchema, type PostForm } from "@/schemas/post"

type PostCreateFormProps = {
  onSuccess: () => void
}

export function PostCreateForm({ onSuccess }: PostCreateFormProps) {
  const createPost = useCreatePost()

  const { register, handleSubmit, reset, formState: { errors } } = useForm<PostForm>({
    resolver: zodResolver(postSchema),
  })

  const onSubmit = (data: PostForm) => {
    createPost.mutate(data, {
      onSuccess: () => {
        reset()
        onSuccess()
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-6 flex flex-col gap-3 rounded-lg border p-4">
      <div className="flex flex-col gap-1">
        <input
          {...register("title")}
          placeholder="Title"
          className="rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        {errors.title && <p className="text-xs text-destructive">{errors.title.message}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <textarea
          {...register("body")}
          placeholder="Body"
          rows={3}
          className="rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        {errors.body && <p className="text-xs text-destructive">{errors.body.message}</p>}
      </div>
      <Button type="submit" disabled={createPost.isPending}>
        {createPost.isPending ? "Creating..." : "Create"}
      </Button>
    </form>
  )
}
