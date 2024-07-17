import { Injectable, input } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { promises } from 'dns';
import { tipo } from '../tipo';
import { compra } from '../compra';
import { granja } from '../granja';
import { animal } from '../animal';
import { venta } from '../venta';
import { get } from 'http';
import { log } from 'console';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//      'access-control-allow-origin': '*'
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class GranjaServiceService {

  url0 = 'http://localhost:3000/0';
  url1 = 'http://localhost:3000/1';
  apiUrl = 'http://localhost:8080/granja/';

  granja_id = 1;
  constructor(private http: HttpClient) { }
  // constructor() { }

  async obtenerDatos(): Promise<granja> {
    // const data = await fetch(`${this.url1}`); // funciona
    const data = await fetch(`${this.apiUrl}`); // funciona con @CrossOrigin(origins = "http://localhost:4200") en Controller
    return await data.json() ?? {};
  }


  granja: any = {};
  dineroEnCaja: number = 0;
  tipos: tipo[] = [];
  tipo: any;


  obtenerGranja(): Observable<granja> {
    // const data = this.http.get<granja>(`${this.url1}`);
    const data = this.http.get<granja>(`${this.apiUrl}${this.granja_id}`);
    this.granja = data;
    this.dineroEnCaja = this.granja.dineroEnCaja;
    this.tipos = this.granja.tipos;
    return data;
  }

  obtenerTipos(): Observable<tipo[]> {
    // const tipos = this.http.get<tipo[]>(`${this.apiUrl}/granja/1/tipos`);
    const tipos = this.http.get<tipo[]>(`${this.apiUrl}${this.granja_id}/tipos`);
    return tipos;
  }


  obtenerTipo(id: number): Observable<tipo> {
    // const tipos = this.http.get<tipo[]>(`${this.apiUrl}/granjas/1/tipos`);
    const tipo = this.http.get<tipo>(`${this.apiUrl}${this.granja_id}/tipos/${id}`);
    return tipo;
  }

  obtenerCompras(): Observable<compra[]> {
    const compras = this.http.get<compra[]>(`${this.apiUrl}${this.granja_id}/compras`);
    return compras;
  }

  obtenerVentas(): Observable<venta[]> {
    const ventas = this.http.get<venta[]>(`${this.apiUrl}${this.granja_id}/ventas`);
    return ventas;
  }


  postTipoAnimal(animal: string, cantidadMaxima: number, diasExpiracion: number, tiempoDeReproduccion: number, precioCompra: number, precioVenta: number, imagen: string) {
    let animales: any = [];
    console.log(animal);
    let nuevo = { animal, cantidadMaxima, diasExpiracion, tiempoDeReproduccion, precioCompra, precioVenta, imagen, animales };
    console.log(nuevo);
    this.http.post(`${this.apiUrl}${this.granja_id}/tipos`, nuevo).subscribe();
  }

  postCompra(nombrePersona: string, inputFecha: string, edadEnDiasAlIngresar: number, inputTipoCompra: number, inputCantidadCompra: number) {
    console.log(inputTipoCompra);
    let id = 0;
    let animales: animal[];
    let animal: animal;
    let productosComprados: animal[] = [];
    this.obtenerTipo(inputTipoCompra).subscribe(data => {
      console.log(data);
      let tipo = data;
      console.log(tipo);
      //ASI no me deja hacer el POST
      // let now: Date = new Date();
      // let fecha: Date = now.toLocaleDateString();
      let fecha: string = inputFecha;
      // FALTA VER SI HAY SUFICIENTE DINERO EN CAJA
      let nuevaCompra: compra = { id, nombrePersona, fecha, productosComprados };
      console.log("nuevaCompra");
      console.log(nuevaCompra);
      this.http.post(`${this.apiUrl}${this.granja_id}/compras`, nuevaCompra).subscribe();
      let compraId = nuevaCompra.id;
      // for (let i = 0; i < inputCantidadCompra; i++) {
        let fechaIngresoAGranja: string = fecha;
        let tipoId = inputTipoCompra;
        console.log(tipoId);
        console.log("Era el tipito");
        console.log(tipo);
        // let precioCompra = this.tipo.precioCompra;
        let precioVenta: number = 0;
        let ventaId: number = 0;
        animal = { id, fechaIngresoAGranja, edadEnDiasAlIngresar, tipoId, precioVenta, ventaId };
        // animal.tipoId  = this.tipo.id;
        this.http.post(`${this.apiUrl}${this.granja_id}/tipos/${inputTipoCompra}/animales/${inputCantidadCompra}`, animal).subscribe();
        // console.log(animal);
        console.log(tipo.id);
        console.log("Agregado!");
        console.log(nuevaCompra);
      // }
  }
  );
}



postVenta(inputNombre: string, inputFecha: string, inputTipoVenta: number, inputCantidadVenta: number) {

  console.log(inputTipoVenta);
  let id: number = 0;
    let animales: animal[];
    let animal: animal;
    let productosVendidos: animal[] = [];
  let tipo: tipo;
  let nombrePersona: string = inputNombre;
  // let now: Date = new Date();
  let fecha: string = inputFecha;
  this.obtenerTipo(inputTipoVenta).subscribe(data => {
    console.log(data);
    tipo = data;
    console.log(tipo);
    console.log(tipo.animales.length);
    console.log(tipo.precioVenta);
    if (tipo.animales.length >= inputCantidadVenta) {
      alert("Hay suficientes");
      let nuevaVenta: venta = { id, nombrePersona, fecha, productosVendidos };
      console.log("nueva Venta");
      console.log(nuevaVenta);
      this.http.post(`${this.apiUrl}${this.granja_id}/ventas`, nuevaVenta).subscribe();
      // let ventaId: number = nuevaVenta.id;
      alert("Se puede Vender!");
      let precioTotal: number = 0;
       animales = tipo.animales;
      for (let i: number = 1; i <= inputCantidadVenta; i++) {
        console.log("El precio es: " + tipo.precioVenta);
       
       
        for(let count = 0; count < inputCantidadVenta; count++ ){
          let animal : animal = animales[count];
          console.log(animal);
          this.http.delete(`${this.apiUrl}${this.granja_id}/animales/${animal.id}`).subscribe();
          alert("Eliminado");
        }
        
      }
    
      alert("El precio es: " + tipo.precioVenta * inputCantidadVenta);
      


    }
    else {
      alert("No hay suficiente cantidad");
    }
  }

  );

}


eliminarTipo(tipo: tipo) {
  return this.http.delete<tipo>(`${this.apiUrl}${this.granja_id}/tipos/${tipo.id}`).subscribe();
}

eliminarAnimal(animal: animal) {
  return this.http.delete<animal>(`${this.apiUrl}${this.granja_id}/animales/${animal.id}`).subscribe();
}

eliminarVenta(venta: venta) {
  return this.http.delete<venta>(`${this.apiUrl}${this.granja_id}/ventas/${venta.id}`).subscribe();
}

eliminarCompra(compra: compra) {
  return this.http.delete<compra>(`${this.apiUrl}${this.granja_id}/compras/${compra.id}`).subscribe();
}



}
