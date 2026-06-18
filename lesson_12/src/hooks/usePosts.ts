import { useQuery, useMutation, useQueryClient, keepPreviousData } from "@tanstack/react-query"
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  type PostPayload,
} from "@/api/posts"

export const POSTS_PER_PAGE = 10

export const usePosts = (page: number) =>
  useQuery({
    queryKey: ["posts", page],
    queryFn: () => getPosts(page, POSTS_PER_PAGE),
    placeholderData: keepPreviousData,
  })

export const usePost = (id: number) =>
  useQuery({ queryKey: ["posts", id], queryFn: () => getPost(id) })

export const useCreatePost = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: PostPayload) => createPost(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  })
}

export const useUpdatePost = (id: number) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: PostPayload) => updatePost(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
      queryClient.invalidateQueries({ queryKey: ["posts", id] })
    },
  })
}

export const useDeletePost = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => deletePost(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  })
}
