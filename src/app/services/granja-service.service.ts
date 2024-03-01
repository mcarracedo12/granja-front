import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { promises } from 'dns';
import { tipo } from '../tipo';
import { compra } from '../compra';
import { granja } from '../granja';
import {animal} from '../animal';
import { venta } from '../venta';

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

 async obtenerDatos(): Promise <granja>{
  // const data = await fetch(`${this.url1}`); // funciona
    const data = await fetch(`${this.apiUrl}/granja`); // funciona con @CrossOrigin(origins = "http://localhost:4200") en Controller
    return await data.json()??{};
  }

  

obtenerGranja(): Observable<granja> {
  // const data = this.http.get<granja>(`${this.url1}`);
  const data = this.http.get<granja>(`${this.apiUrl}/granja`);
  return data;
}



  obtenerCompras(): Observable<compra[]> {
    const compras = this.http.get<compra[]>(`${this.apiUrl}/granjas/1/compras`);
    return compras;
  }

  obtenerVentas(): Observable<venta[]> {
    const ventas = this.http.get<venta[]>(`${this.apiUrl}/granjas/1/ventas`);
    return ventas;
  }


  postTipoAnimal(nombre : string, cantidad : number, expectativa: number, reproduccion: number, precioCompra: number, precioVenta: number, imagen: String){
    console.log(nombre); 
   const nuevo = {nombre, cantidad, expectativa, reproduccion, precioCompra, precioVenta, imagen};
   console.log(nuevo);
    // this.http.post(`${this.apiUrl}/tipos`, nuevo);
  }

  postCompra(inputTipoCompra: string, inputCantidadCompra: number){
    console.log(inputTipoCompra);
  }

  postVenta(inputTipoVenta: string, inputCantidadVenta: number){
    console.log(inputTipoVenta);
  }

  
}
