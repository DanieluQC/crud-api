import { Categoria } from "./categoria.model";

export interface Product {
    id: number;
    tittle: string;
    price: number;
    description: string,
    images: string[],
    creationAt: Date,
    updateAt: Date,
    category: Categoria,
}