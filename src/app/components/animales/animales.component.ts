import { Component, Input, OnInit, Output } from '@angular/core';
import { TiposComponent } from '../tipos/tipos.component';
import { CommonModule } from '@angular/common';
import { animal } from '../../animal';
import { VentasComponent } from '../ventas/ventas.component';
import { ComprasComponent } from '../compras/compras.component';
import { GranjaServiceService } from '../../services/granja-service.service';
import { tipo } from '../../tipo';

@Component({
  selector: 'app-animales',
  standalone: true,
  imports: [TiposComponent, CommonModule, VentasComponent, ComprasComponent],
  templateUrl: './animales.component.html',
  styleUrl: './animales.component.css',
  providers:[GranjaServiceService]
})
export class AnimalesComponent implements OnInit{
@Input() animal:any;
@Input() producto:any;
@Input() animales:animal[]=[];
productos:animal[]=[];
constructor(private granjaService: GranjaServiceService){}

ngOnInit(): void {
  for (this.animal in this.animales){
    console.log(this.animal.id);
  }
}
}
