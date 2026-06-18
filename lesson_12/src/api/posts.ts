import { client } from "./client"

export type Post = {
  id: number
  title: string
  body: string
  userId: number
}

export type PostPayload = Pick<Post, "title" | "body">

export type PostsResponse = {
  posts: Post[]
  total: number
}

export const getPosts = async (page = 1, limit = 10): Promise<PostsResponse> => {
  const response = await client.get<Post[]>("/posts", {
    params: { _page: page, _limit: limit },
  })
  return {
    posts: response.data,
    total: Number(response.headers["x-total-count"]),
  }
}

export const getPost = (id: number) =>
  client.get<Post>(`/posts/${id}`).then((r) => r.data)

export const createPost = (data: PostPayload) =>
  client.post<Post>("/posts", data).then((r) => r.data)

export const updatePost = (id: number, data: PostPayload) =>
  client.put<Post>(`/posts/${id}`, data).then((r) => r.data)

export const deletePost = (id: number) =>
  client.delete(`/posts/${id}`)
