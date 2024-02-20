import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { promises } from 'dns';
import { tipo } from '../tipo';
import { compra } from '../compra';
import { granja } from '../granja';
import {animal} from '../animal';
import { venta } from '../venta';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GranjaServiceService {
  
  url0 = 'http://localhost:3000/0';
  url1 = 'http://localhost:3000/1';
  apiUrl = 'http://localhost:8080';

  // constructor(private http: HttpClient) { }
  constructor() { }

//  async obtenerDatos(): Promise <any>{
//     const data = await fetch(`${this.url1}`);
//     //  /granjas/{id});;
//     return await data.json()??{};
//   }

// obtenerGranja(): Observable<any> {
//   // return this.http.get<any>(`${this.apiUrl}/granjas/1`, httpOptions);
//   return this.http.get<any>(`${this.url1}`, httpOptions);
// }

// // obtenerTipos(): Observable<tipo[]>{
// //    return this.http.get<tipo[]>(`${this.apiUrl}/granjas/1/tipos`, httpOptions);
  
// // }

// // obtenerAnimales(): Observable<animal[]>{
// //   //return this.http.get<animal[]>(`${this.apiUrl}/animales`, httpOptions);

// //    let path:string="http://localhost:8080/animales/allow-cors"
// //   return this.http.get<animal[]>(path, httpOptions);

// // }


  postTipoAnimal(nombre : string, cantidad : number, expectativa: number, reproduccion: number, precioCompra: number, precioVenta: number, imagen: String){
    console.log(nombre); 
    //this.http.post('')
  }

  postCompra(inputTipoCompra: string, inputCantidadCompra: number){
    console.log(inputTipoCompra);
  }

  postVenta(inputTipoVenta: string, inputCantidadVenta: number){
    console.log(inputTipoVenta);
  }

  
}
