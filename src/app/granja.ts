import { tipo } from "./tipo";

export interface granja
{
    id?: number,
    dineroEnCaja: number,
    nombre: string,
    ultimaActualizacion: Date,
    tipos: tipo[],
    // animales: [],
    compras: [],
    ventas:[]
}
