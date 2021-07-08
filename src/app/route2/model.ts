import { SortOrder } from "./enum/route2.enum";

export interface Product {
    id: number;
    name: string;
    price: number;
}
export interface SortOption {
    label: string;
    value: SortOrder
}