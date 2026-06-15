# TypeScript Migration Guide для Logistics Dashboard

## Мета

Додати TypeScript у вже існуючий React-проєкт поступово, без повного переписування всіх файлів.

## Крок 1. Встановити TypeScript

bash pnpm add -D typescript @types/react @types/react-dom @types/node

## Крок 2. Перевірити tsconfig.json

У корені проєкту має бути:

{ 
"compilerOptions": { 
    "target": "ES2020", 
    "module": "ESNext", 
    "moduleResolution": "Bundler", 
    "jsx": "react-jsx", 
    "strict": true, 
    "baseUrl": ".", 
    "paths": { 
        "@/_": ["./src/_"] } 
    }, 
    "include": ["src"] 
}

## Крок 3. Додати папку types

txt src 
    └── types 
        ├── user.ts 
        ├── location.ts 
        ├── auth.ts 
        └── analytics.ts

## Крок 4. Створити types/user.ts

export type User = { id: string; name: string; email: string; phone?: string; };

## Крок 5. Створити types/location.ts

export type LocationType = "branch" | "locker" | "pickup"; export type Location = { id: string; name: string; address: string; type: LocationType; rating: number; shipments: number; lat: number; lng: number; monthlyStats: number[]; description?: string; workingHours?: string; };

## Крок 6. Створити types/auth.ts

import type { User } from "./user"; export type AuthState = { user: User | null; accessToken: string | null; isAuthenticated: boolean; setAuth: (user: User, accessToken?: string) => void; logout: () => void; };

## Крок 7. Створити types/analytics.ts

export type KpiData = { totalLocations: number; totalShipments: number; averageRating: number; }; export type ChartDataItem = { name: string; value: number; };

## Крок 8. Перейменувати API-файли

Почати з API:

txt api/locationsApi.js → api/locationsApi.ts api/usersApi.js → api/usersApi.ts api/axios.js → api/axios.ts

## Крок 9. Типізувати locationsApi.ts

import { api } from "./axios";
import type { Location } from "../types/location"; 
export const locationsApi = { getAll: async (): Promise<Location[]> => { const { data } = await api.get<Location[]>("/locations"); return data; }, getById: async (id: string): Promise<Location> => { const { data } = await api.get<Location>(`/locations/${id}`); return data; }, };

## Крок 10. Типізувати hooks

hooks/useLocations.js → hooks/useLocations.ts hooks/useLocation.js → hooks/useLocation.ts

ts import { useQuery } from "@tanstack/react-query"; import { locationsApi } from "../api/locationsApi"; import type { Location } from "../types/location"; export function useLocations() { return useQuery<Location[]>({ queryKey: ["locations"], queryFn: locationsApi.getAll, }); }

ts import { useQuery } from "@tanstack/react-query"; import { locationsApi } from "../api/locationsApi"; import type { Location } from "../types/location"; export function useLocation(id?: string) { return useQuery<Location>({ queryKey: ["location", id], queryFn: () => locationsApi.getById(id as string), enabled: Boolean(id), }); }

## Крок 11. Типізувати компоненти локацій

txt LocationCard.jsx → LocationCard.tsx LocationList.jsx → LocationList.tsx FavoriteButton.jsx → FavoriteButton.tsx

Приклад:

tsx import type { Location } from "../../types/location"; type LocationCardProps = { location: Location; }; export default function LocationCard({ location }: LocationCardProps) { return ( <li> <h4>{location.name}</h4> <p>{location.address}</p> <p>{location.type}</p> <p>{location.rating}</p> </li> ); }

## Крок 12. Типізувати форми через Zod

tsx import { z } from "zod"; import { useForm } from "react-hook-form"; import { loginSchema } from "../../schemas/authSchemas"; type LoginFormValues = z.infer<typeof loginSchema>; const form = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema), });

## Крок 13. Типізувати Zustand поступово

Почати з favoritesStore.

ts type FavoritesState = { favoriteIds: string[]; addFavorite: (id: string) => void; removeFavorite: (id: string) => void; toggleFavorite: (id: string) => void; };

## Крок 14. Що не потрібно типізувати одразу

На першому етапі не обовʼязково типізувати:

- всі route-компоненти;
- всі Recharts-компоненти;
- Leaflet bounds;
- усі stores;
- усі форми.