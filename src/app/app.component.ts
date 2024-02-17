import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import{TiposComponent} from './components/tipos/tipos.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { TiposForm } from './formularios/tipos/tipos.component';
import { ButtonComponent } from './components/button/button.component';
import { ComprarComponent } from './formularios/comprar/comprar.component';
import { VenderComponent } from './formularios/vender/vender.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TiposComponent, AnimalesComponent, TiposForm, ButtonComponent, ComprarComponent, VenderComponent],
  templateUrl: './app.component.html',
  styleUrl: '../styles.css'
  
})
export class AppComponent {
  displayFormComprar(){
    alert("Comprar");

  }

  displayFormVender(){
    alert("Vender");

  }
}

