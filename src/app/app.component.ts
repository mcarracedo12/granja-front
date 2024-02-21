import { Component, OnInit, Output, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TiposComponent} from './components/tipos/tipos.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { TiposForm } from './formularios/tipos/tipos.component';
import { ButtonComponent } from './components/button/button.component';
import { ComprarComponent } from './formularios/comprar/comprar.component';
import { VenderComponent } from './formularios/vender/vender.component';
import { granja } from './granja';
import { GranjaServiceService } from './services/granja-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { animal } from './animal';
import { tipo } from './tipo';
import { compra } from './compra';
import { venta } from './venta';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TiposComponent, AnimalesComponent, TiposForm, ButtonComponent, ComprarComponent, VenderComponent, HttpClientModule, CommonModule],
  providers: [GranjaServiceService],
  templateUrl: './app.component.html',
  styleUrl: '../styles.css'
  
})
export class AppComponent {

  data: any={};
  tipos: any=[];
  animales: any=[];
  compras: any=[];
  ventas: any=[];
  // granjaService: GranjaServiceService = inject(GranjaServiceService);

  constructor(private granjaService: GranjaServiceService){
    console.log("Inicio app Component");

    granjaService.obtenerGranja(); // Me da un observable



    this.data= this.granjaService.obtenerDatos();
    console.log(this.data);
    
    this.tipos= this.granjaService.obtenerTipos();
    console.log(this.tipos);

    this.animales= this.granjaService.obtenerAnimales();
    console.log(this.animales);

    this.compras= this.granjaService.obtenerCompras();
    console.log(this.compras);

    this.ventas= this.granjaService.obtenerVentas();
    console.log(this.ventas);


  }

  

  displayFormComprar(){
    alert("Comprar");

  }

  displayFormVender(){
    alert("Vender");

  }
}

