import { Component, OnInit, Input, Output } from '@angular/core';
import { AnimalesComponent } from '../animales/animales.component';
import { AppComponent } from '../../app.component';
import { ButtonComponent } from '../button/button.component';
import { tipo } from '../../tipo';
import { GranjaServiceService } from '../../services/granja-service.service';
import { animal } from '../../animal';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';


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
  subscription! : Subscription;
  tipos: tipo[] = [];
  // @Input() tipo: Tipo;
  constructor(private granjaService: GranjaServiceService) { }

  ngOnInit(): void {
    this.subscription =  this.granjaService.obtenerTipos().subscribe(data => {
    });
    this.animales = this.tipo.animales;
  }


  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }
 

  eliminarTipo(): void {
    alert("EliminarTipo");
    console.log(this);
    // this.granjaService.eliminarTipo(this.tipo);
    this.granjaService.eliminarTipo(this.tipo).subscribe(() => {
      this.tipos = this.tipos.filter(t => t.id !== this.tipo.id);
    });
  }


  modificarTipo() {
    alert("ModificarTipo");
  }


}
