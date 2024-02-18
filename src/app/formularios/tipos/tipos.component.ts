import { Component } from '@angular/core';
// import { ButtonComponent } from '../../components/button/button.component';
import{FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { GranjaServiceService } from '../../services/granja-service.service';


@Component({
  selector: 'app-tiposF',
  standalone: true,
  imports: [ ReactiveFormsModule, GranjaServiceService],
  templateUrl: './tipos.component.html',
  styleUrl: './tipos.component.css'
})
export class TiposForm {

  agregarTipoForm = new FormGroup({
    nombre: new FormControl(''),
    cantidad: new FormControl(''),
    expectativa: new FormControl(''),
    reproduccion: new FormControl(''),
    precioCompra: new FormControl(''),
    precioVenta: new FormControl(''),
    imagen: new FormControl('')
  })
  constructor(private granjaService: GranjaServiceService ) { 
  }


  postTipoAnimal(){
    this.granjaService.postTipoAnimal(
      this.agregarTipoForm.value.nombre ?? '',
      this.agregarTipoForm.value.cantidad ?? '',
      this.agregarTipoForm.value.expectativa ?? '',
      this.agregarTipoForm.value.reproduccion ?? '',
      this.agregarTipoForm.value.precioCompra ?? '',
      this.agregarTipoForm.value.precioVenta ?? '',
      this.agregarTipoForm.value.imagen ?? ''
    );
   alert("PostTipoAnimal de Tipos Component");
  }

}
