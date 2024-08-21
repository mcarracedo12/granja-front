import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]], 
      cantidad: [0, [Validators.required, Validators.min(1)]], 
      expectativa: [0, [Validators.required, Validators.min(1)]], 
      reproduccion: [0, [Validators.required, Validators.min(1)]], 
      precioCompra: [0, [Validators.required, Validators.min(0)]], 
      precioVenta: [0, [Validators.required, Validators.min(0)]], 
      imagen: ['Imagen', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]] 
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




