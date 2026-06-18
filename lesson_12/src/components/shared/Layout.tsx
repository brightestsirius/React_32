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
