import { tipo } from "./tipo";
export interface animal {
   id?: number,
   fechaIngresoAGranja: Date,
   edadEnDiasAlIngresar: number,
   // nacimiento: Date,
   // fechaExpiracion: Date,
   precioCompra: number,
   precioVenta: number,
   // tiempoDeReproduccionByTipo: number,
   // diasExpiracionByTipo: number,
   // precioCompraByTipo: number,
   // cantidadMaximaByTipo: number,
   // precioVentaByTipo: number,
   // edadActual: number,
   tipoId: number
   

   // tipo: tipo,
   compraId: number,
   ventaId?: number
   // animalByTipo: string
}
