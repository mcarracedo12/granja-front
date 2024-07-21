import { tipo } from "./tipo";
export interface animal {
   id?: number,
   fechaIngresoAGranja: string,
   edadEnDiasAlIngresar: number,
   // nacimiento: Date,
   // fechaExpiracion: Date,
   // precioCompra: 0.0,
   precioVenta: number,
   // tiempoDeReproduccionByTipo: number,
   // diasExpiracionByTipo: number,
   // precioCompraByTipo: 10.0,
   // cantidadMaximaByTipo: 10000,
   // precioVentaByTipo: number,
   // edadActual: number,
   tipoId: number
   

   // tipo: tipo,
   // compraId: number,
   // ventaId?: number
   // animalByTipo: string
}
