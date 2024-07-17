import { animal } from "./animal";


export interface venta
{
    id?: number,
    nombrePersona: string,
    fecha: string,
    productosVendidos: animal[]
    
}
