import { Component, OnInit, Output, inject, Input } from '@angular/core';
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
import { ComprasComponent } from './components/compras/compras.component';
import { VentasComponent } from './components/ventas/ventas.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TiposComponent, AnimalesComponent, TiposForm, ButtonComponent, ComprarComponent, VenderComponent, HttpClientModule, CommonModule, ComprasComponent, VentasComponent],
  providers: [GranjaServiceService],
  templateUrl: './app.component.html',
  styleUrl: '../styles.css'
  
})
export class AppComponent {
  @Input()tipos: tipo[] = [];
  data: any={};
  granja: any;
  animales: animal[]=[];
  @Input()compras: compra[]=[];
  @Input()ventas: venta[]=[];
  // granjaService: GranjaServiceService = inject(GranjaServiceService);

  constructor(private granjaService: GranjaServiceService){
    console.log("Inicio app Component");

    // this.granja= granjaService.obtenerGranja(); // Me da un observable

    this.granjaService.obtenerGranja().subscribe(data=>{
    this.granja= data;
    this.tipos= this.granja.tiposAnimales;
    this.animales = this.granja.animales;
    console.log(this.tipos);
  
  });
    
    
  this.granjaService.obtenerCompras().subscribe(compras=>{
    this.compras = compras;
    // for(let compra of compras){
    //   console.log(compra.nombrePersona);
    // } 
  });

  this.granjaService.obtenerVentas().subscribe(ventas=>{
    this.ventas = ventas
  });

   

  }

  actualizarGranja() {
    alert("ActualizarGranja");
  }

  actualizarPrecios() {
    alert("ActualizarPrecios");
  }

  displayFormComprar(){
    alert("Comprar");

  }

  displayFormVender(){
    alert("Vender");

  }
}

