import { Component, OnInit } from '@angular/core';
// import { ButtonComponent } from '../../components/button/button.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GranjaServiceService } from '../../services/granja-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tiposF',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './tipos.component.html',
  styleUrl: './tipos.component.css'
})
export class TiposForm implements OnInit {

  agregarTipoForm!: FormGroup; 


  constructor(private fb: FormBuilder, private granjaService: GranjaServiceService) {
  }


  ngOnInit(): void {
    this.agregarTipoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]], // Solo letras y espacios
      cantidad: [0, Validators.required], // Validar que no esté vacío
      expectativa: [0, [Validators.required, Validators.min(1)]], // Números positivos
      reproduccion: [0, [Validators.required, Validators.min(1)]], // Números positivos
      precioCompra: [0, [Validators.required, Validators.min(0)]], // Números positivos
      precioVenta: [0, [Validators.required, Validators.min(0)]], // Números positivos
      imagen: ['Imagen', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]] // Números positivos mayor que 0
    });
  }



  postTipoAnimal(): void {
    if (this.agregarTipoForm.valid) {
      console.log("Valid Form");

      this.granjaService.postTipoAnimal(
        this.agregarTipoForm.value.nombre,
        this.agregarTipoForm.value.cantidad,
        this.agregarTipoForm.value.expectativa,
        this.agregarTipoForm.value.reproduccion,
        this.agregarTipoForm.value.precioCompra,
        this.agregarTipoForm.value.precioVenta,
        this.agregarTipoForm.value.imagen
      );
      alert("PostTipoAnimal de TiposForm Component");
    }
    else {
      console.log("Form is not valid");
      alert("Hay valores en la compra que no cumplen los requerimientos");
      // this.comprarForm.markAllAsTouched();

    }
  }
}




