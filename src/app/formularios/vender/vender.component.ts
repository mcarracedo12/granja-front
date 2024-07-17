import { Component, OnInit } from '@angular/core';
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
export class VenderComponent implements OnInit{

  

constructor(private granjaService: GranjaServiceService, private formBuilder: FormBuilder){}


ngOnInit(): void {
  
}



vender(){
  this.granjaService.postVenta(
    this.venderForm.value.inputNombre ?? '',
    this.venderForm.value.inputFecha ?? '',
    this.venderForm.value.inputTipoVenta ?? 0,
    this.venderForm.value.inputCantidadVenta ?? 0
  );
  console.log(this.getInputCantidadVenta())
 alert("Venta de Tipos Component");
}


venderForm = new FormGroup({
  inputNombre: new FormControl(''),
  inputFecha: new FormControl('dd-mm-yyyy'),
  inputTipoVenta: new FormControl(0),
  inputCantidadVenta: new FormControl(0)
  
})


getInputTipoVenta(){
  return this.venderForm.get('inputTipoVenta');
}

getInputCantidadVenta(){
  return this.venderForm.get('inputCantidadVenta');
}

}
