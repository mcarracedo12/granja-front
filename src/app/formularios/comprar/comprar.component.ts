import { Component } from '@angular/core';
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
export class ComprarComponent {

  comprarForm = new FormGroup({
    inputTipoCompra: new FormControl(''),
    inputCantidadCompra: new FormControl(0)
    
  })

  constructor(private granjaService: GranjaServiceService ) { 
  }

  comprar(){
    this.granjaService.postCompra(
      this.comprarForm.value.inputTipoCompra ?? '',
      this.comprarForm.value.inputCantidadCompra ?? 0
    );
   alert("Compra de Tipos Component");
  }

}
