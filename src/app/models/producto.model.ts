import { Categoria } from "./categoria.model";

export interface Producto {
    id: number;
    title: string;
    price: number;
    description: string,
    images: string[],
    creationAt: Date,
    updateAt: Date,
    category: Categoria,
}