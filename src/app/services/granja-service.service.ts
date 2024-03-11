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
  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  // constructor() { }

  async obtenerDatos(): Promise<granja> {
    // const data = await fetch(`${this.url1}`); // funciona
    const data = await fetch(`${this.apiUrl}/granja`); // funciona con @CrossOrigin(origins = "http://localhost:4200") en Controller
    return await data.json() ?? {};
  }


  granja: any = {};
  dineroEnCaja: number = 0;
  tipos: tipo[] = [];


  obtenerGranja(): Observable<granja> {
    // const data = this.http.get<granja>(`${this.url1}`);
    const data = this.http.get<granja>(`${this.apiUrl}/granja`);
    this.granja = data;
    this.dineroEnCaja = this.granja.dineroEnCaja;
    this.tipos = this.granja.tipos;
    return data;
  }
  obtenerTipos(): Observable<tipo[]> {
    // const tipos = this.http.get<tipo[]>(`${this.apiUrl}/granjas/1/tipos`);
    const tipos = this.http.get<tipo[]>(`${this.apiUrl}/tipos`);
    return tipos;
  }


  obtenerCompras(): Observable<compra[]> {
    const compras = this.http.get<compra[]>(`${this.apiUrl}/compras`);
    return compras;
  }

  obtenerVentas(): Observable<venta[]> {
    const ventas = this.http.get<venta[]>(`${this.apiUrl}/ventas`);
    return ventas;
  }


  postTipoAnimal(animal: string, cantidadMaxima: number, diasExpiracion: number, tiempoDeReproduccion: number, precioCompra: number, precioVenta: number, imagen: string) {
    let animales: any = [];
    console.log(animal);
    let nuevo = { animal, cantidadMaxima, diasExpiracion, tiempoDeReproduccion, precioCompra, precioVenta, imagen, animales };
    console.log(nuevo);
    this.http.post(`${this.apiUrl}/tipos`, nuevo).subscribe();
  }

  postCompra(inputNombre: string, inputFecha: string, inputTipoCompra: number, inputCantidadCompra: number) {
    console.log(inputTipoCompra);
    let productos: any = [];
    let disponibles: any = this.http.get<tipo>(`${this.apiUrl}/tipos/${inputTipoCompra}/animales`);
    console.log(disponibles);
    let tipo : any = this.http.get<tipo>(`${this.apiUrl}/tipos/${inputTipoCompra}`);
    let plata = this.granja.dineroEnCaja;
    alert("Hay en la granja $...");
    alert(plata);
    if ((tipo.precioCompra * inputCantidadCompra) < plata) {
      alert("Hay en la granja $...");
      alert(plata);
      alert("Precio: ");
      alert(disponibles[0].id);
    //   alert("Se puede Comprar!");
    // for (let i: number = 1; i <= inputCantidadCompra; i++) {
    //   console.log("El precio es: " + disponibles[0].precioCompraByTipo);
    //   this.http.delete(`${this.apiUrl}/animales/${i}`).subscribe();
    //   alert("Eliminado");
    // }
      // console.log("El precio es: " + disponibles[0].precioCompraByTipo);
  }

      let nuevo = { inputNombre, inputFecha, productos };
      console.log(nuevo);
      this.http.post(`${this.apiUrl}/compras`, nuevo).subscribe();
      
    
  }

  postVenta(inputTipoVenta: string, inputCantidadVenta: number) {
    console.log(inputTipoVenta);
  }


  eliminarTipo(tipo:tipo){
    return this.http.delete<tipo>(`${this.apiUrl}/tipos/${tipo.id}`).subscribe();
  }

  eliminarVenta(venta:venta){
    return this.http.delete<venta>(`${this.apiUrl}/ventas/${venta.id}`).subscribe();
  }

  eliminarCompra(compra:compra){
    return this.http.delete<compra>(`${this.apiUrl}/compras/${compra.id}`).subscribe();
  }



}
