# TypeScript Basics

TypeScript — це JavaScript з типами.

## 1. Базові типи

const name: string = "John"; 
const age: number = 25; 
const isAdmin: boolean = false; 
const value: null = null; 
const data: undefined = undefined;

## 2. Масиви

const ids: string[] = ["1", "2", "3"]; 
const ratings: number[] = [4.5, 4.8, 5];

## 3. Об'єкти

type User = { 
    id: string; 
    name: string; 
    email: string; 
    phone?: string; 
};

const user: User = { 
    id: "1", 
    name: "John", 
    email: "john@example.com"
};

## 4. Union Types

Union дозволяє обмежити значення.

type LocationType = "branch" | "locker" | "pickup";

const type: LocationType = "branch";
const type: LocationType = "office"; // error

## 5. Типізація функцій

function sum(a: number, b: number): number { 
    return a + b; 
}

Функція без return:

function logMessage(message: string): void { 
    console.log(message);
}

## 6. Типізація props у React

type FavoriteButtonProps = { locationId: string; };

export default function FavoriteButton({ locationId }: FavoriteButtonProps) { 
    return <button>{locationId}</button>; 
}

## 7. Типізація children

import type { ReactNode } from "react"; 
type CardProps = { children: ReactNode; }; 

export default function Card({ children }: CardProps) { 
    return <div>{children}</div>;
}

## 8. Типізація API response

type Location = { id: string; name: string; address: string; rating: number; };

async function getLocations(): Promise<Location[]> { 
    const response = await fetch("/locations"); 
    return response.json(); 
}

## 9. Generics

Generic — це тип, який передається як параметр.

const locations: Location[] = [];

У React Query:

useQuery<Location[]>({ 
    queryKey: ["locations"], 
    queryFn: getLocations
});

## 10. type vs interface

У React-проєктах можна використовувати обидва варіанти.

type User = { 
    id: string; 
    email: string; 
};

interface User { 
    id: string; 
    email: string; 
}

## 11. any

any вимикає користь TypeScript.

const data: any = {};