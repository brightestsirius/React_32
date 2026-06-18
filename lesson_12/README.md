# React Starter Template

React 19 + TypeScript + Vite + shadcn/ui + TailwindCSS v4 + React Router v8 + TanStack Query v5 + Zustand v5

## Стек

| Категорія | Бібліотека |
|---|---|
| Роутинг | `react-router` v8 |
| Глобальний стан | `zustand` v5 |
| Серверний стан | `@tanstack/react-query` v5 |
| HTTP | `axios` |
| Форми | `react-hook-form` + `zod` |
| UI | `shadcn/ui` + `radix-ui` + `tailwindcss` v4 |
| Тести | `vitest` + `@testing-library/react` |
| Оптимізація | React Compiler |

---

## Налаштування з нуля

### 1. Встановлення

```bash
pnpm dlx shadcn@latest init -t vite
```

```bash
pnpm add axios @tanstack/react-query zustand react-router react-hook-form @hookform/resolvers zod react-error-boundary leaflet react-leaflet recharts @fontsource-variable/geist lucide-react
```

```bash
pnpm add -D @rolldown/plugin-babel babel-plugin-react-compiler
```

---

### 2. Змінні середовища

Скопіювати `.env.example` і заповнити значення:

```bash
cp .env.example .env
```

`.env.example`:

```
VITE_API_URL=https://your-api-url.com
```

> `.env` — не комітити (вже в `.gitignore`). `.env.example` — комітити як шаблон.

---

### 3. Структура папок

```bash
mkdir -p src/{api,pages,router,stores,hooks,components/shared}
```

---

### 4. `src/api/client.ts`

```ts
import axios from "axios"

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})
```

---

### 5. `src/pages/HomePage.tsx`

```tsx
export function HomePage() {
  return <h1>Home</h1>
}
```

---

### 6. `src/components/shared/Layout.tsx`

```tsx
import { Outlet, NavLink } from "react-router"

export function Layout() {
  return (
    <div className="min-h-svh">
      <nav className="border-b px-8 py-3">
        <ul className="flex gap-6 text-sm">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => isActive ? "font-medium" : "text-muted-foreground hover:text-foreground"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              className={({ isActive }) => isActive ? "font-medium" : "text-muted-foreground hover:text-foreground"}
            >
              Posts
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
```

---

### 7. `src/schemas/post.ts`

Спільна zod-схема для форм створення і редагування. Тип `PostForm` виводиться автоматично з схеми — одне джерело правди.

```ts
import { z } from "zod"

export const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  body: z.string().min(1, "Body is required"),
})

export type PostForm = z.infer<typeof postSchema>
```

---

### 8. `src/router/index.tsx`

Маршрути з lazy loading — кожна сторінка завантажується окремим JS-чанком тільки при переході на неї.

```tsx
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
```

---

### 9. `src/stores/useCounterStore.ts`

```ts
import { create } from "zustand"

type CounterStore = {
  count: number
  increment: () => void
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))
```

---

### 10. `src/api/posts.ts`

```ts
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
```

---

### 11. `src/hooks/usePosts.ts`

```ts
import { useQuery, useMutation, useQueryClient, keepPreviousData } from "@tanstack/react-query"
import { getPosts, getPost, createPost, updatePost, deletePost, type PostPayload } from "@/api/posts"

export const POSTS_PER_PAGE = 10

export const usePosts = (page: number) =>
  useQuery({
    queryKey: ["posts", page],
    queryFn: () => getPosts(page, POSTS_PER_PAGE),
    placeholderData: keepPreviousData, // показує попередню сторінку поки нова завантажується
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
```

---

### 12. Оновити `src/main.tsx`

```tsx
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "@/components/theme-provider"
import { router } from "@/router"
import "./index.css"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
)
```

### 13. Видалити `src/App.tsx`

---

## Підсумкова структура

```
src/
├── api/
│   ├── client.ts
│   └── posts.ts
├── components/
│   ├── posts/
│   │   ├── PostCreateForm.tsx
│   │   ├── PostDetails.tsx
│   │   ├── PostEditForm.tsx
│   │   ├── PostList.tsx
│   │   ├── PostsPagination.tsx
│   │   └── __tests__/
│   │       ├── getPages.test.ts
│   │       └── PostsPagination.test.tsx
│   ├── shared/
│   │   └── Layout.tsx
│   └── ui/                    ← shadcn компоненти
├── hooks/
│   └── usePosts.ts
├── pages/
│   ├── HomePage.tsx
│   ├── PostsPage.tsx          ← список + створення + пагінація
│   └── PostPage.tsx           ← деталі + редагування + видалення
├── router/
│   └── index.tsx
├── schemas/
│   └── post.ts
├── stores/
│   └── useCounterStore.ts
├── index.css
├── main.tsx
└── setupTests.ts
```

---

## Тестування

### Встановлення

```bash
pnpm add -D vitest @testing-library/react @testing-library/user-event @testing-library/jest-dom jsdom
```

### Конфігурація

**`vite.config.ts`** — додати секцію `test`:

```ts
test: {
  environment: "jsdom",      // симулює браузер
  setupFiles: ["./src/setupTests.ts"],
  globals: true,             // describe/it/expect без імпортів
}
```

**`src/setupTests.ts`**:

```ts
import "@testing-library/jest-dom"
```

### Запуск

```bash
pnpm test        # watch режим — перезапускає при змінах
pnpm test:run    # один прогін
```

### Два типи тестів

**1. Unit test — чиста функція**

```ts
// __tests__/getPages.test.ts
import { describe, it, expect } from "vitest"
import { getPages } from "../PostsPagination"

describe("getPages", () => {
  it("показує всі сторінки якщо їх 7 або менше", () => {
    expect(getPages(1, 5)).toEqual([1, 2, 3, 4, 5])
  })

  it("показує еліпсис в кінці на першій сторінці", () => {
    expect(getPages(1, 10)).toEqual([1, 2, "...", 10])
  })

  it("показує еліпсис з обох боків на середній сторінці", () => {
    expect(getPages(5, 10)).toEqual([1, "...", 4, 5, 6, "...", 10])
  })
})
```

**2. Component test — рендер і взаємодія**

```tsx
// __tests__/PostsPagination.test.tsx
import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { PostsPagination } from "../PostsPagination"

const defaultProps = {
  page: 1,
  totalPages: 5,
  isPlaceholderData: false,
  onPageChange: vi.fn(),
}

describe("PostsPagination", () => {
  it("рендерить кнопки всіх сторінок", () => {
    render(<PostsPagination {...defaultProps} />)
    expect(screen.getByText("1")).toBeInTheDocument()
    expect(screen.getByText("5")).toBeInTheDocument()
  })

  it("кнопка ← задизейблена на першій сторінці", () => {
    render(<PostsPagination {...defaultProps} page={1} />)
    expect(screen.getByText("←")).toBeDisabled()
  })

  it("викликає onPageChange при кліку на номер сторінки", async () => {
    const onPageChange = vi.fn()
    render(<PostsPagination {...defaultProps} page={3} totalPages={10} onPageChange={onPageChange} />)

    await userEvent.click(screen.getByText("4"))

    expect(onPageChange).toHaveBeenCalledWith(4)
  })
})
```

### Ключові методи

| Метод | Що робить |
|---|---|
| `render(<Component />)` | рендерить компонент у віртуальний DOM |
| `screen.getByText("...")` | знаходить елемент по тексту |
| `screen.getByRole("button")` | знаходить елемент по ролі |
| `userEvent.click(element)` | симулює реальний клік користувача |
| `vi.fn()` | mock-функція для перевірки викликів |
| `expect(...).toBeInTheDocument()` | елемент є в DOM |
| `expect(...).toBeDisabled()` | елемент задизейблений |
| `expect(...).toHaveBeenCalledWith(4)` | функція викликана з аргументом |

### Де зберігати тести

Тести живуть поруч з компонентами у папці `__tests__`:

```
src/components/posts/
├── PostsPagination.tsx
└── __tests__/
    ├── getPages.test.ts          ← unit тест чистої функції
    └── PostsPagination.test.tsx  ← component тест
```

---

## React Compiler

React Compiler — інструмент від команди React, який автоматично мемоізує компоненти і значення під час білду. Він замінює ручне використання `memo`, `useMemo` і `useCallback`.

### Встановлення

```bash
pnpm add -D @rolldown/plugin-babel babel-plugin-react-compiler
```

### Конфігурація у `vite.config.ts`

```ts
import react, { reactCompilerPreset } from "@vitejs/plugin-react"
import babel from "@rolldown/plugin-babel"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  // ...
})
```

> `defineConfig` імпортується з `vitest/config` — це важливо, якщо в проекті є секція `test`. Імпорт з `vite` не розуміє поле `test` і дасть TypeScript-помилку.

### Що це дає

Без компілятора мемоізацію треба додавати вручну:

```tsx
const filtered = useMemo(() => posts.filter(fn), [posts])
const handleClick = useCallback(() => { ... }, [id])
export default memo(PostCard)
```

З компілятором — пишемо звичайний код, компілятор сам визначає де потрібна оптимізація:

```tsx
const filtered = posts.filter(fn)
const handleClick = () => { ... }
export default function PostCard() { ... }
```

Перевірити роботу компілятора можна у React DevTools — оптимізовані компоненти матимуть значок `✨ Memo`.

---

## Ключові концепції

### TypeScript — що дає

| Концепція | Приклад |
|---|---|
| Базовий тип | `type Post = { id: number; title: string }` |
| Утиліти | `type PostPayload = Pick<Post, "title" \| "body">` |
| Інференс | `type PostForm = z.infer<typeof postSchema>` |
| Дженерики | `useParams<{ id: string }>()` |
| Пропси | `type PostListProps = { posts: Post[] }` |

### TanStack Query — пагінація

- `queryKey: ["posts", page]` — кожна сторінка кешується окремо
- `placeholderData: keepPreviousData` — без "мигання" при переході між сторінками
- `isPlaceholderData` — флаг для блокування UI під час завантаження
- Загальна кількість записів береться із заголовку відповіді `X-Total-Count`
- `useSearchParams` — зберігає поточну сторінку в URL (`/posts?page=2`)

### TanStack Query — інвалідація кешу

Після кожної мутації (create / update / delete) викликається `invalidateQueries` — це примушує TanStack Query зробити новий запит і оновити UI.

### React Router — lazy loading

```ts
lazy: async () => {
  const { PostsPage } = await import("@/pages/PostsPage")
  return { Component: PostsPage }
}
```

Vite автоматично розбиває код на окремі JS-файли. Кожна сторінка завантажується тільки при першому переході на неї, при повторному — з кешу браузера.

### Zustand — селектори

```ts
const count = useCounterStore((state) => state.count)
```

Підписуємось тільки на потрібне поле — компонент не ре-рендериться при зміні інших полів стору.

---

## Додавання shadcn компонентів

```bash
pnpm dlx shadcn@latest add button
```

---

## Concurrent Rendering

Механізм React 18+, який дозволяє браузеру переривати рендеринг і пріоритизувати важливіші оновлення. До цього React рендерив синхронно — почав, не зупиняється поки не закінчить. Це могло блокувати UI.

**Головна ідея:** не весь рендеринг однаково терміновий. Клік по кнопці — терміново, оновлення списку при пошуку — може почекати.

### `Suspense`

Показує fallback поки компонент або дані завантажуються:

```tsx
<Suspense fallback={<p>Loading...</p>}>
  <PostsPage />
</Suspense>
```

Найприродніше місце — lazy routes. `RouterProvider` можна обгорнути у `Suspense`, і він автоматично показуватиме fallback поки завантажується JS-чанк сторінки:

```tsx
// main.tsx
<Suspense fallback={<p>Loading...</p>}>
  <RouterProvider router={router} />
</Suspense>
```

### `useTransition`

Позначає оновлення стану як "не термінове" — UI залишається responsive поки React завершує рендеринг у фоні:

```tsx
const [isPending, startTransition] = useTransition()

const setPage = (newPage: number) => {
  startTransition(() => {
    setSearchParams({ page: String(newPage) })
  })
}
```

`isPending` — `true` поки перехід не завершився, можна використати для візуального індикатора замість `isPlaceholderData`.

### `useDeferredValue`

Відкладає оновлення значення поки є важливіша робота. Підходить для пошуку — фільтрація списку не блокує введення тексту:

```tsx
const [search, setSearch] = useState("")
const deferredSearch = useDeferredValue(search)

// список фільтрується по deferredSearch
// введення тексту реагує на search — без затримок
const filtered = posts.filter((p) => p.title.includes(deferredSearch))
```

### Різниця між інструментами

**`useTransition`** — розробник явно контролює яку дію позначити як non-urgent: конкретний `setState` загортається у `startTransition`. Підходить коли є чіткий момент початку переходу: клік на сторінку пагінації, перехід між вкладками.

**`useDeferredValue`** — передається значення, React сам вирішує коли його оновлювати. Підходить коли значення приходить ззовні (пропс, стан з іншого місця) і немає прямого контролю над моментом його зміни. Типовий кейс — пошуковий рядок: `search` оновлюється при кожному натисканні клавіші, `deferredSearch` — коли браузер вільний.

Практичне правило: якщо `setState` викликається безпосередньо — `useTransition`, якщо потрібно реагувати на зовнішнє значення — `useDeferredValue`.

---

## Що далі — GraphQL і Next.js

### GraphQL / Apollo

**Що це:** GraphQL — мова запитів до API замість REST. Apollo — бібліотека для роботи з GraphQL у React (аналог TanStack Query, тільки для GraphQL).

**Проблема яку вирішує:**

З REST надсилається кілька запитів і у відповідь приходить або забагато, або замало даних:
```
GET /users/1        → { id, name, email, address, phone, ... }  ← зайве
GET /users/1/posts  → окремий запит
GET /users/1/avatar → ще один запит
```

З GraphQL — один запит, де описується саме те що потрібно:
```graphql
query {
  user(id: 1) {
    name
    posts { title }
    avatar { url }
  }
}
```

**Коли підключати:** коли бекенд підтримує GraphQL. Якщо API — REST (як JSONPlaceholder), GraphQL не потрібен. На практиці зустрічається в продуктових компаніях, де бекенд і фронтенд узгоджують схему даних.

**Місце в стеку:** замінює або доповнює TanStack Query + Axios. Apollo має свій кеш і хуки (`useQuery`, `useMutation`) — концептуально схоже на те, що ми вже вивчили.

---

### Next.js

**Що це:** фреймворк над React. React — бібліотека для UI, Next.js — повноцінний фреймворк з роутингом, рендерингом на сервері, оптимізацією зображень, API routes.

**Проблема яку вирішує:**

Чистий React — це SPA (Single Page Application): браузер завантажує порожній `index.html` і JavaScript будує сторінку на клієнті.

Проблеми SPA:
- **SEO** — пошукові боти бачать порожню сторінку
- **Перша завантаження** — користувач чекає поки JS завантажиться і виконається
- **Немає бекенду** — треба окремий сервер для API

Next.js вирішує це через:

| Режим | Як працює |
|---|---|
| **SSR** (Server Side Rendering) | сторінка рендериться на сервері при кожному запиті |
| **SSG** (Static Site Generation) | сторінка генерується один раз при білді |
| **ISR** (Incremental Static Regeneration) | SSG але з автоматичним оновленням |

**Коли підключати:** коли важливе SEO (блог, маркетинговий сайт, інтернет-магазин) або потрібна швидка перша завантаження. Для внутрішніх дашбордів, адмінок і додатків за авторизацією — Next.js зазвичай не потрібен.

**Місце в стеку:** Next.js не замінює React — він його розширює. Весь React-код (компоненти, хуки, zustand, форми) залишається, додається тільки серверний шар.

---

### Коротко: що і коли

```
Vite + React          → SPA, дашборди, додатки за авторизацією
Next.js               → SEO-важливі сторінки, публічний контент
GraphQL / Apollo      → коли бекенд надає GraphQL API
REST + TanStack Query → все інше (більшість проектів)
```