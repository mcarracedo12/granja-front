import { Component, OnInit } from '@angular/core';
import { GranjaServiceService } from '../../services/granja-service.service';
import { Input } from '@angular/core';
import { animal } from '../../animal';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css',
  providers: [GranjaServiceService]
})
export class VentasComponent implements OnInit {
  @Input() venta: any;
  productos: animal[] = [];
  animal: any;
  constructor(private granjaService: GranjaServiceService) { }

  ngOnInit(): void {
    this.granjaService.obtenerVentas().subscribe(ventas => { });
    console.log(this.venta);
    this.productos = this.venta.productos;
    console.log(this.productos);
    for (let animal of this.productos) {
      console.log(animal.id);
      console.log(animal.edadActual);
    }

  }

}
