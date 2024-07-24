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
import { response } from 'express';

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

  // url0 = 'http://localhost:3000/0';
  // url1 = 'http://localhost:3000/1';
  apiUrl = 'http://localhost:8080/granja/';

  granja_id = 1;

  constructor(private http: HttpClient) { }

  data!: any;
  granja$!: granja;
  nombre$!: string;
  dineroEnCaja$!: number;
  ultimaActualizacion$!: Date;
  tipos$!: tipo[];
  compras$!: compra[];
  ventas$!: venta[];


  obtenerGranja(): Observable<granja> {
    this.data = this.http.get<granja>(`${this.apiUrl}${this.granja_id}`);
    this.granja$ = this.data;
    // this.dineroEnCaja$ = this.granja$.dineroEnCaja;
    // this.tipos$ = this.granja$.tipos;
    return this.data;
  }

  obtenerTipos(): Observable<tipo[]> {
    this.data = this.http.get<tipo[]>(`${this.apiUrl}${this.granja_id}/tipos`);
    this.tipos$ = this.data;
    return this.data;
  }


  obtenerTipo(id: number): Observable<tipo> {
    const tipo = this.http.get<tipo>(`${this.apiUrl}${this.granja_id}/tipos/${id}`);
    return tipo;
  }

  obtenerCompras(): Observable<compra[]> {
    this.data = this.http.get<compra[]>(`${this.apiUrl}${this.granja_id}/compras`);
    this.compras$ = this.data;
    return this.data;
  }

  obtenerVentas(): Observable<venta[]> {
    this.data = this.http.get<venta[]>(`${this.apiUrl}${this.granja_id}/ventas`);
    this.ventas$ = this.data;
    return this.data;
  }


  postTipoAnimal(animal: string, cantidadMaxima: number, diasExpiracion: number, tiempoDeReproduccion: number, precioCompra: number, precioVenta: number, imagen: string) {
    let animales: any = [];
    let nuevo = { animal, cantidadMaxima, diasExpiracion, tiempoDeReproduccion, precioCompra, precioVenta, imagen, animales };
    this.http.post(`${this.apiUrl}${this.granja_id}/tipos`, nuevo).subscribe();
  }

  postCompra(nombrePersona: string, fecha: Date, edadEnDiasAlIngresar: number, inputTipoCompra: number, inputCantidadCompra: number) {
    let id = 0;
    let productosComprados: animal[] = [];
    this.obtenerTipo(inputTipoCompra).subscribe(tipo => {
      console.log(tipo);
      let nuevaCompra: compra = { id, nombrePersona, fecha, productosComprados };
      // Realizar la primera solicitud HTTP para crear la compra
      this.http.post<compra>(`${this.apiUrl}${this.granja_id}/compras`, nuevaCompra).subscribe(compraAgregada => {
        console.log(compraAgregada);
        if (compraAgregada && compraAgregada.id !== undefined) {
          let fechaIngresoAGranja: Date = fecha;
          let tipoId = inputTipoCompra;
          let precioVenta: number = 0;
          let precioCompra: number = tipo.precioCompra;
          let ventaId: number = 0;
          let compraId: number = compraAgregada.id;
          for (let i = 0; i < inputCantidadCompra; i++) {
            let animal: animal = { id, fechaIngresoAGranja, edadEnDiasAlIngresar, precioCompra, precioVenta, tipoId, compraId, ventaId };
            // Realizar la segunda solicitud HTTP para añadir los animales a la compra
            this.http.post(`${this.apiUrl}${this.granja_id}/tipos/${inputTipoCompra}/animales`, animal).subscribe(() => {
              console.log("Animal agregado");
            }, error => {
              console.error("Error al agregar el animal", error);
            });
          }
        } else {
          console.error("Error: compraAgregada.id es undefined");
        }
      }, error => {
        console.error("Error al crear la compra", error);
      });
    });
  }


  postVenta(inputNombre: string, inputFecha: Date, inputTipoVenta: number, inputCantidadVenta: number) {
    console.log(inputTipoVenta);
    let id: number = 0;
    let animales: animal[] = [];
    let productosVendidos: animal[] = [];
    let nombrePersona: string = inputNombre;
    let fecha: Date = inputFecha;
    this.obtenerTipo(inputTipoVenta).subscribe(data => {
      console.log(data);
      let tipo = data;
      if (!tipo) {
        console.error("Error al obtener el tipo");
        alert("El tipo no se encontró");
      }
      else {
        if (tipo.animales && tipo.animales.length >= inputCantidadVenta) {
          alert("Hay suficientes animales del tipo " + tipo.animal);
          // Obtener los animales del tipo seleccionado
          animales = tipo.animales;
          // Seleccionar los animales que se van a vender
          for (let count = 0; count < inputCantidadVenta; count++) {
            let animal: animal = animales[count];
            productosVendidos.push(animal);
          }
          // Crear la nueva venta
          let nuevaVenta: venta = { id, nombrePersona, fecha, productosVendidos };
          // Enviar la nueva venta al backend
          this.http.post<venta>(`${this.apiUrl}${this.granja_id}/ventas`, nuevaVenta).subscribe(ventaAgregada => {
            console.log(ventaAgregada);
           
          }
          );
          alert("Venta realizada con éxito");
          console.log(nuevaVenta);
        }
        else {
          alert("No hay suficiente cantidad");
        }
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

  getDateFormatted(fecha: Date): string {
    // const today = new Date();
    const day = String(fecha.getDate()).padStart(2, '0');
    const month = String(fecha.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = fecha.getFullYear();
    return `${day}-${month}-${year}`;
  }

}
