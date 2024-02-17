import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-vender',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './vender.component.html',
  styleUrl: './vender.component.css'
})
export class VenderComponent {
vender(){
  alert("Vender!");
}
}
