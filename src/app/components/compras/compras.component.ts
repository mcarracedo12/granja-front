import { Component, OnInit } from '@angular/core';
import { GranjaServiceService } from '../../services/granja-service.service';
import { compra } from '../../compra';
import { Input } from '@angular/core';

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

  constructor(private granjaService: GranjaServiceService){}

  
  ngOnInit(): void {
    this.granjaService.obtenerCompras().subscribe(compra=>{ 
      console.log(compra);
  });

  }

}
