import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  title: String = 'La Chacrita de Marina';
  caja: number= 10003;
  constructor() { }


  ngOnInit(): void {
  }

  actualizarGranja(){
    alert("ActualizarGranja");
  }

  actualizarPrecios(){
    alert("ActualizarPrecios");
  }

}
