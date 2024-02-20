import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import{TiposComponent} from './components/tipos/tipos.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { TiposForm } from './formularios/tipos/tipos.component';
import { ButtonComponent } from './components/button/button.component';
import { ComprarComponent } from './formularios/comprar/comprar.component';
import { VenderComponent } from './formularios/vender/vender.component';
import { granja } from './granja';
import { GranjaServiceService } from './services/granja-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TiposComponent, AnimalesComponent, TiposForm, ButtonComponent, ComprarComponent, VenderComponent, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: '../styles.css'
  
})
export class AppComponent {


  // data: any;
  // granjaService: GranjaServiceService = inject(GranjaServiceService);

  constructor(){
    console.log("Inicio app Component");
    // this.granjaService.obtenerDatos().then((data: any)=>{
    //   this.data =  data;
    // });

  }


  displayFormComprar(){
    alert("Comprar");

  }

  displayFormVender(){
    alert("Vender");

  }
}

