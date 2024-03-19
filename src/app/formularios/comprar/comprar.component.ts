import { Component, OnInit } from '@angular/core';
//import { ButtonComponent } from '../../components/button/button.component';
import { GranjaServiceService } from '../../services/granja-service.service';
import{FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-comprar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './comprar.component.html',
  styleUrl: './comprar.component.css'
})
export class ComprarComponent implements OnInit{
  granja: any = {};
  dineroEnCaja: number = 0;

  comprarForm = new FormGroup({
    inputNombre: new FormControl(''),
    inputFecha: new FormControl('yyyy-mm-dd'),
    inputTipoCompra: new FormControl(0),
    inputCantidadCompra: new FormControl(0)
    
  })

  constructor(private granjaService: GranjaServiceService ) { 
    this.granjaService.obtenerGranja().subscribe(data => {
      this.granja = data;
      this.dineroEnCaja = this.granja.dineroEnCaja;
    });
  }

  
  comprar(){
    this.granjaService.postCompra(
      this.comprarForm.value.inputNombre ?? '',
      this.comprarForm.value.inputFecha ?? '',
      this.comprarForm.value.inputTipoCompra ?? 0,
      this.comprarForm.value.inputCantidadCompra ?? 0
    );
   alert("Compra de Comprar Component");
   alert(this.dineroEnCaja);
  

  }
  ngOnInit(): void {
    
  }


  

}
