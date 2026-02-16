import { StaticImageData } from "next/image";

export interface Meal {
    id: number;
    name: string;
    slug?: string;
    description?: string;
    image: StaticImageData
    price: number
    available?: boolean
    stock?: number
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    description?: string;
    image?: StaticImageData;
    isActive: boolean;
    meals: Meal[];
}

export interface Company {
    id: number;
    name: string;
    slug: string;
    logo: string;
    theme: string;
    description: string;
    isOpen: boolean;
    hours: string;
    offers: Offer[];
    branches: Branch[];
    categories?: Category[];
    meals: Meal[]
}
export interface Offer {
    id: number;
    title: string;
    description: string;
    image: string;
    discount: number;
    expiresAt: string;
}
export interface Branch {
    id: number;
    name: string;
    address: string;
    phone: string;
    hours: string;
    isOpen: boolean;
}
