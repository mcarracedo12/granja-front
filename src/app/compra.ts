import { animal } from "./animal";

export interface compra
{
    id?: number,
    nombrePersona: string,
    fecha: Date,
    productosComprados: animal[],
    
}
