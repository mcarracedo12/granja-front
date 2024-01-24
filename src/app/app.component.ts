import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import{TiposComponent} from './components/tipos/tipos.component';
import { AnimalesComponent } from './components/animales/animales.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TiposComponent, AnimalesComponent],
  templateUrl: './app.component.html',
  styleUrl: '../styles.css'
  
})
export class AppComponent {
  title = 'Trabajo-Final';
}

