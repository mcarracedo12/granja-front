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
  venderForm: FormGroup;

  // venderForm = new FormGroup({
  //   inputTipoVenta: new FormControl(''),
  //   inputCantidadVenta: new FormControl(0)
    
  // })

  

constructor(private granjaService: GranjaServiceService, private formBuilder: FormBuilder){

this.venderForm= this.formBuilder.group({
  inputTipoVenta:['', [Validators.required]],
  inputCantidadVenta: [0,[Validators.required]]
});
}

ngOnInit(): void {
  
}

// vender(){
//   this.granjaService.postVenta(
//     this.venderForm.value.inputTipoVenta ?? '',
//     this.venderForm.value.inputCantidadVenta ?? 0
//   );
//  alert("Venta de Tipos Component");
// }


vender(){
  this.granjaService.postVenta(
    this.venderForm.value.inputTipoVenta ?? '',
    this.venderForm.value.inputCantidadVenta ?? 0
  );
  console.log(this.getInputCantidadVenta())
 alert("Venta de Tipos Component");
}



getInputTipoVenta(){
  return this.venderForm.get('inputTipoVenta');
}

getInputCantidadVenta(){
  return this.venderForm.get('inputCantidadVenta');
}

}
