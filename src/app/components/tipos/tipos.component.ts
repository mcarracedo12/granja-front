import { Component } from '@angular/core';
import { AnimalesComponent } from '../animales/animales.component';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-tipos',
  standalone: true,
  imports: [AnimalesComponent, AppComponent],
  templateUrl: './tipos.component.html',
  styleUrl: './tipos.component.css'
})
export class TiposComponent {

}
