
export interface animal
{
    id?: number,
    fechaIngresoAGranja :  Date,
    edadEnDiasAlIngresar : number,
    nacimiento :  Date ,
    fechaExpiracion :  Date ,
 precioCompra : 0.0,
 precioVenta : 0.0,
    tiempoDeReproduccionByTipo : number,
    diasExpiracionByTipo : number,
  precioCompraByTipo : 10.0,
 cantidadMaximaByTipo : 10000,
 precioVentaByTipo : number,
    edadActual: number,
    tipoId: number,
    animalByTipo:  string 
}
