import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GranjaServiceService {

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any>{
    return this.http.get('./assets/data/data.json');
  }

  postTipoAnimal(nombre : string, cantidad : number, expectativa: number, reproduccion: number, precioCompra: number, precioVenta: number, imagen: String){
    console.log(nombre); 
  }

}
