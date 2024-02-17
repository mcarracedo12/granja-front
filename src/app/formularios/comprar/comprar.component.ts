import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-comprar',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './comprar.component.html',
  styleUrl: './comprar.component.css'
})
export class ComprarComponent {
  comprar(){
    alert("Comprar!");
  }

}
