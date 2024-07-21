// import { Component, OnInit } from '@angular/core';
// //import { ButtonComponent } from '../../components/button/button.component';
// import { GranjaServiceService } from '../../services/granja-service.service';
// import{FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

// @Component({
//   selector: 'app-comprar',
//   standalone: true,
//   imports: [ReactiveFormsModule],
//   templateUrl: './comprar.component.html',
//   styleUrl: './comprar.component.css'
// })
// export class ComprarComponent implements OnInit{
//   granja: any = {};
//   dineroEnCaja: number = 0;
//   fecha: Date = new Date();

//   comprarForm = new FormGroup({
//     inputNombre: new FormControl(''),
//     inputFecha: new FormControl(this.fecha),
//     edadEnDiasAlIngresar: new FormControl(0),
//     inputTipoCompra: new FormControl(0),
//     inputCantidadCompra: new FormControl(0)
    
//   })

//   constructor(private granjaService: GranjaServiceService ) { 
//     this.granjaService.obtenerGranja().subscribe(data => {
//       this.granja = data;
//       this.dineroEnCaja = this.granja.dineroEnCaja;
//     });
//   }

  
//   comprar(){
//     this.granjaService.postCompra(
//       this.comprarForm.value.inputNombre ?? '',
//       this.fecha,
//       this.comprarForm.value.edadEnDiasAlIngresar ?? 0,
//       this.comprarForm.value.inputTipoCompra ?? 0,
//       this.comprarForm.value.inputCantidadCompra ?? 0
//     );
//    alert("Compra de Comprar Component");
//    alert(this.dineroEnCaja);
  

//   }
//   ngOnInit(): void {
    
//   }


//   getTodayDateFormatted(): string {
//     const today = new Date();
//     const day = String(today.getDate()).padStart(2, '0');
//     const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
//     const year = today.getFullYear();
//     return `${day}-${month}-${year}`;
//   }
  

// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GranjaServiceService } from '../../services/granja-service.service';

@Component({
    selector: 'app-comprar',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './comprar.component.html',
    styleUrl: './comprar.component.css'
})
export class ComprarComponent implements OnInit {
  comprarForm!: FormGroup;

  constructor(private fb: FormBuilder, private granjaService: GranjaServiceService) {}

  ngOnInit(): void {
    this.comprarForm = this.fb.group({
      inputNombre: ['', Validators.required],
      inputFecha: [this.getDateFormatted(this.getTodayDate()), Validators.required],
      edadEnDiasAlIngresar: [0, Validators.required],
      inputTipoCompra: [0, Validators.required],
      inputCantidadCompra: [0, Validators.required]
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

  comprar(): void {
    const fecha: Date = this.comprarForm.value.inputFecha;

    this.granjaService.postCompra(
      this.comprarForm.value.inputNombre ?? '',
      fecha,
      this.comprarForm.value.edadEnDiasAlIngresar ?? 0,
      this.comprarForm.value.inputTipoCompra ?? 0,
      this.comprarForm.value.inputCantidadCompra ?? 0
    );
    
    console.log(this.comprarForm.value.inputCantidadCompra);
    alert("Compra de Tipos Component");
  }
}
