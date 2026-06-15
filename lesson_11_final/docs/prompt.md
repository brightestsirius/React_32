You are a senior frontend developer. Style a React + React Router dashboard application 
using Tailwind CSS v4 and shadcn/ui. The app is a logistics tracking system with the 
following routes: /login, /register, /dashboard/map, /dashboard/analytics, 
/dashboard/favorites, /dashboard/profile, /dashboard/location/:id.

Apply the following design system consistently across all files:

GLOBAL SETUP (src/index.css):
- Use `@import "tailwindcss"` (Tailwind v4 syntax — no config file needed)
- Add `@import "@fontsource-variable/geist"` and set `--font-sans: 'Geist Variable', sans-serif`
- Define CSS custom properties for color tokens using oklch(): --primary, --muted, 
  --muted-foreground, --border, --card, --background, --foreground, --destructive, --radius
- Add a .dark class with matching dark-mode token overrides

LAYOUTS:
- AuthLayout: split-screen — left half `bg-gradient-to-br from-blue-600 to-blue-800` 
  with centered logo + icon illustration, right half `bg-gray-50` with centered `max-w-md` form
- DashboardLayout: `flex h-screen` app shell — fixed `w-56` sidebar on left, 
  right side has a `h-14` header bar + `flex-1 overflow-auto p-6` main area

SIDEBAR:
- Logo: colored rounded square `bg-primary p-1.5` with a MapPin icon, bold app name
- NavLinks: use NavLink with `cn()` — active state `bg-accent text-primary`, 
  inactive `text-muted-foreground hover:bg-gray-100 hover:text-foreground`
- Each link has a lucide icon + label, `rounded-lg px-3 py-2 text-sm font-medium`
- Logout button pinned to bottom, use Separator between logo / nav / logout sections

HEADER: `h-14 bg-white border-b border-border`, user avatar (shadcn Avatar) with 
initials on the right, `bg-primary text-primary-foreground`

FORMS (Login, Register, EditProfile, ChangePassword):
- Use shadcn `<Input>`, `<Label>`, `<Button>` components
- `space-y-4` between fields, `space-y-1.5` between label and input
- Validation errors: `<p className="text-xs text-destructive">`
- Submit button: `w-full size="lg"` on auth forms

CONTENT CARDS pattern: `bg-white rounded-xl border border-border p-5` or `p-6`

ANALYTICS PAGE:
- KPI cards: 3-column grid, value `text-3xl font-bold`, trend in `text-green-600` 
  with TrendingUp icon from lucide
- Tabs using shadcn Tabs component for chart switching (Overview / Locations / Types)
- Charts from recharts, colors using CSS var references

FAVORITES PAGE:
- Grid of cards with `h-36` photo placeholder `bg-gray-100`, badges for type, 
  star rating in amber, outline button to navigate to details

LOCATION DETAILS PAGE:
- 3-column grid: main content (2 cols) + map (1 col)
- Info row with 4 StatItem components: icon + label + value
- Badges: shadcn Badge `variant="secondary"` for type, custom `bg-green-100 text-green-700` 
  for Active status
- Back button with ArrowLeft icon

ICONS: Use lucide-react throughout — MapPin, Map, BarChart2, Star, User, Truck, 
Package, Clock, Phone, Building2, TrendingUp, ArrowLeft, Eye, LogOut

COLOR PALETTE (oklch):
- Primary: oklch(0.546 0.215 262.88) — blue
- Accent: oklch(0.94 0.05 262.88) — light blue tint
- Muted foreground: oklch(0.556 0 0) — gray text
- Border: oklch(0.922 0 0) — light gray border
- Destructive: oklch(0.577 0.245 27.325) — red

Style every component, route and layout. Do not add unnecessary abstractions.
Use Tailwind utility classes directly on JSX elements. Do not create custom CSS classes 
unless absolutely necessary. Keep the design clean, minimal, and professional.