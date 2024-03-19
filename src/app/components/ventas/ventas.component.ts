import { Component, OnInit, Output, Input } from '@angular/core';
import { GranjaServiceService } from '../../services/granja-service.service';
import { animal } from '../../animal';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';
import { AnimalesComponent } from '../animales/animales.component';
import { venta } from '../../venta';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [AnimalesComponent, AppComponent, CommonModule, VentasComponent, ButtonComponent],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css',
  providers: [GranjaServiceService]
})
export class VentasComponent implements OnInit {

  
  @Input() venta: any;
  @Output() animales: animal[] = [];
   animal: any;
  
  constructor(private granjaService: GranjaServiceService) { }

  ngOnInit(): void {
    this.granjaService.obtenerVentas().subscribe(ventas => { });
    // console.log(this.venta);
    this.animales = this.venta.productos;
    console.log(this.animales);
    
    for (let animal of this.animales) {
      console.log(animal.id);
      console.log(animal);
    }

  }

  
  eliminarVenta() {
    alert("EliminarVenta");
    console.log(this);
    this.granjaService.eliminarVenta(this.venta);
  }


}

