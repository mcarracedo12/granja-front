import { Component } from '@angular/core';
// import { ButtonComponent } from '../../components/button/button.component';
import{FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { GranjaServiceService } from '../../services/granja-service.service';

@Component({
  selector: 'app-tiposF',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './tipos.component.html',
  styleUrl: './tipos.component.css'
})
export class TiposForm {

  agregarTipoForm = new FormGroup({
    nombre: new FormControl('Ej. Vaca'),
    cantidad: new FormControl(0),
    expectativa: new FormControl(0),
    reproduccion: new FormControl(0),
    precioCompra: new FormControl(0.0),
    precioVenta: new FormControl(0.0),
    imagen: new FormControl('http...')
  })

  
  constructor(private granjaService: GranjaServiceService ) { 
  }


  postTipoAnimal(){
    this.granjaService.postTipoAnimal(
      this.agregarTipoForm.value.nombre ?? '',
      this.agregarTipoForm.value.cantidad ?? 0,
      this.agregarTipoForm.value.expectativa ?? 0,
      this.agregarTipoForm.value.reproduccion ?? 0,
      this.agregarTipoForm.value.precioCompra ?? 0,
      this.agregarTipoForm.value.precioVenta ?? 0,
      this.agregarTipoForm.value.imagen ?? ''
    );
   alert("PostTipoAnimal de TiposForm Component");
  }



}
