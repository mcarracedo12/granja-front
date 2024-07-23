import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { GranjaServiceService } from '../../services/granja-service.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-comprar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  comprarForm!: FormGroup;

  constructor(private fb: FormBuilder, private granjaService: GranjaServiceService) { }

  ngOnInit(): void {
    this.comprarForm = this.fb.group({
      inputNombre: ['Nombre', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]], // Solo letras y espacios
      inputFecha: [this.getDateFormatted(this.getTodayDate()), Validators.required], // Validar que no esté vacío
      edadEnDiasAlIngresar: [0, [Validators.required, Validators.min(0)]], // Números positivos
      inputTipoCompra: [1, [Validators.required, Validators.min(1)]], // Números positivos
      inputCantidadCompra: [1, [Validators.required, Validators.min(1)]] // Números positivos mayor que 0
    });
  }

  getTodayDate(): Date {
    return new Date(); // Retorna la fecha de hoy como objeto Date
  }

  getDateFormatted(fecha: Date): string {
    // Formato dd-MM-yyyy
    const day = String(fecha.getDate()).padStart(2, '0');
    const month = String(fecha.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = fecha.getFullYear();
    return `${day}-${month}-${year}`;
  }

  comprar(): void {
    if (this.comprarForm.valid) {
      console.log("Form is valid");
      const fecha: Date = this.comprarForm.value.inputFecha;
 
      this.granjaService.postCompra(
        this.comprarForm.value.inputNombre ?? '',
        fecha,
        this.comprarForm.value.edadEnDiasAlIngresar ?? 0,
        this.comprarForm.value.inputTipoCompra ?? 0,
        this.comprarForm.value.inputCantidadCompra ?? 0
      );

      alert("Compra de Tipos Component");
      console.log(this.comprarForm.value);
    }
    else {
      console.log("Form is not valid");
      alert("Hay valores en la compra que no cumplen los requerimientos");
      // this.comprarForm.markAllAsTouched();

    }

  }
}
