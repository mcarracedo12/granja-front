import { Component, OnInit, Output, Input } from '@angular/core';
import { GranjaServiceService } from '../../services/granja-service.service';
import { compra } from '../../compra';
import { animal } from '../../animal';
import { AnimalesComponent } from '../animales/animales.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [ComprasComponent, AnimalesComponent, CommonModule, AppComponent],
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
    console.log("this.animales");
    console.log(this.animales);
    for(let animal of this.animales){
      console.log(animal);
    }
   
  }

}
