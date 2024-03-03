import { Component, OnInit, Output } from '@angular/core';
import { GranjaServiceService } from '../../services/granja-service.service';
import { compra } from '../../compra';
import { Input } from '@angular/core';
import { animal } from '../../animal';

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [ComprasComponent],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css', 
  providers:[GranjaServiceService]
})
export class ComprasComponent implements OnInit {
  @Input()compra: any; 
  @Output()animales:animal[]=[];
  animal:any;

  constructor(private granjaService: GranjaServiceService){}

  
  ngOnInit(): void {
    this.granjaService.obtenerCompras().subscribe(compras=>{});
    console.log(this.compra);
    this.animales = this.compra.productos;
    console.log(this.animales);
    
  }

}
