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
import { tipo } from './tipo';
import { compra } from './compra';
import { venta } from './venta';
import { ComprasComponent } from './components/compras/compras.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { Observable } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, HeaderComponent, TiposComponent, AnimalesComponent, TiposForm, ButtonComponent, ComprarComponent, VenderComponent, HttpClientModule, ComprasComponent, VentasComponent],
  providers: [GranjaServiceService],
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css']
  
})
export class AppComponent implements OnInit{

  showContent = true;

  // @Input()tipos: tipo[] = [];
  // @Output() tipo: any;
  granja$!: Observable<granja>;
  tipos$!: Observable<tipo[]>;
  compras$!: Observable<compra[]>;
  ventas$!: Observable<venta[]>;
  // animales: animal[]=[];
  // @Input()compras: compra[]=[];
  // @Input()ventas: venta[]=[];

  constructor(private granjaService: GranjaServiceService){

  }


  ngOnInit(): void{
    this.granja$ = this.granjaService.obtenerGranja();
    this.tipos$ = this.granjaService.obtenerTipos();
    this.compras$ = this.granjaService.obtenerCompras();
    this.ventas$ = this.granjaService.obtenerVentas();
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

