import { animal } from "./animal";
export interface tipo
{
    id?: number,
    animal: string,
    diasExpiracion: number,
    cantidadMaxima: number,
    tiempoDeReproduccion: number,
    precioCompra: number,
    precioVenta: number,
    imagen: string,
    animales: animal[],
    granja_id: number,
}
