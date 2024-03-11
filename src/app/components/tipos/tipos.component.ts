import { Component, OnInit, Input, Output } from '@angular/core';
import { AnimalesComponent } from '../animales/animales.component';
import { AppComponent } from '../../app.component';
import { ButtonComponent } from '../button/button.component';
import { tipo } from '../../tipo';
import { GranjaServiceService } from '../../services/granja-service.service';
import { animal } from '../../animal';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tipos',
  standalone: true,
  imports: [AnimalesComponent, AppComponent, ButtonComponent, TiposComponent, CommonModule],
  templateUrl: './tipos.component.html',
  // styleUrl: './tipos.component.css'
})
export class TiposComponent implements OnInit {
  @Input() tipo: any;
  @Output() animales: animal[] = [];
  animal: any;
  constructor(private granjaService: GranjaServiceService) { }

  ngOnInit(): void {
    this.granjaService.obtenerTipos().subscribe(data => {
    });
    this.animales = this.tipo.animales;

    // for (let animal of this.animales) {
    //   console.log(animal.id);
    //   console.log(animal);
    // } // Imprime bien en consola

  }


 

  eliminarTipo() {
    alert("EliminarTipo");
    console.log(this);
    this.granjaService.eliminarTipo(this.tipo);
  }


  modificarTipo() {
    alert("ModificarTipo");
  }


}
