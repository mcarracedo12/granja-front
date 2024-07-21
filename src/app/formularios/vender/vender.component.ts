import { Component, OnInit } from '@angular/core';
//import { ButtonComponent } from '../../components/button/button.component';
import { GranjaServiceService } from '../../services/granja-service.service';
import{FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-vender',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './vender.component.html',
  styleUrl: './vender.component.css'
})


export class VenderComponent implements OnInit{

venderForm!: FormGroup;

constructor(private fb: FormBuilder, private granjaService: GranjaServiceService) {}


ngOnInit(): void {
  this.venderForm = this.fb.group({
    inputNombre: ['', Validators.required],
    inputFecha: [this.getDateFormatted(this.getTodayDate()), Validators.required],
    inputTipoVenta: [0, Validators.required],
    inputCantidadVenta: [0, Validators.required]
  });
}

getTodayDate(): Date {
  return new Date(); // Retorna la fecha de hoy como objeto Date
}
getDateFormatted(fecha: Date): string {
  // const today = new Date();
  const day = String(fecha.getDate()).padStart(2, '0');
  const month = String(fecha.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = fecha.getFullYear();
  return `${day}-${month}-${year}`;
}


vender():void{
  const fecha: Date = this.venderForm.value.inputFecha;
  this.granjaService.postVenta(
    this.venderForm.value.inputNombre ?? '',
    fecha,
    this.venderForm.value.inputTipoVenta ?? 0,
    this.venderForm.value.inputCantidadVenta ?? 0
  );
  console.log(fecha);
 alert("Venta de Tipos Component");
}




// getInputTipoVenta(){
//   return this.venderForm.get('inputTipoVenta');
// }

// getInputCantidadVenta(){
//   return this.venderForm.get('inputCantidadVenta');
// }

}
