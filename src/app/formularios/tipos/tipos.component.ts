import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-tiposF',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './tipos.component.html',
  styleUrl: './tipos.component.css'
})
export class TiposForm {

  displayFormComprar(){
    alert("Comprar");

  }

  displayFormVender(){
    alert("Vender");

  }

  postTipoAnimal(){
    alert("PostTipoAnimal");
  }

}
