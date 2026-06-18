import { createBrowserRouter } from "react-router"
import { Layout } from "@/components/shared/Layout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { HomePage } = await import("@/pages/HomePage")
          return { Component: HomePage }
        },
      },
      {
        path: "posts",
        lazy: async () => {
          const { PostsPage } = await import("@/pages/PostsPage")
          return { Component: PostsPage }
        },
      },
      {
        path: "posts/:id",
        lazy: async () => {
          const { PostPage } = await import("@/pages/PostPage")
          return { Component: PostPage }
        },
      },
    ],
  },
])
