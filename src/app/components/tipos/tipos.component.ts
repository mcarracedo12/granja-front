import { Component } from '@angular/core';
import { AnimalesComponent } from '../animales/animales.component';
import { AppComponent } from '../../app.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-tipos',
  standalone: true,
  imports: [AnimalesComponent, AppComponent, ButtonComponent],
  templateUrl: './tipos.component.html',
  styleUrl: './tipos.component.css'
})
export class TiposComponent {

  eliminarTipo(){
    alert("EliminarTipo");
  }

  
  modificarTipo(){
    alert("ModificarTipo");
  }
}
