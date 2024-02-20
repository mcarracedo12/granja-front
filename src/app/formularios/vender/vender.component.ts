import { Component } from '@angular/core';
//import { ButtonComponent } from '../../components/button/button.component';
import { GranjaServiceService } from '../../services/granja-service.service';
import{FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-vender',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './vender.component.html',
  styleUrl: './vender.component.css'
})
export class VenderComponent {

  venderForm = new FormGroup({
    inputTipoVenta: new FormControl(''),
    inputCantidadVenta: new FormControl(0)
    
  })

constructor(private granjaService: GranjaServiceService){}

vender(){
  this.granjaService.postVenta(
    this.venderForm.value.inputTipoVenta ?? '',
    this.venderForm.value.inputCantidadVenta ?? 0
  );
 alert("Venta de Tipos Component");
}

}
