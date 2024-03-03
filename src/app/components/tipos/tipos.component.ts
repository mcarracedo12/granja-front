import { Component , OnInit, Input, Output} from '@angular/core';
import { AnimalesComponent } from '../animales/animales.component';
import { AppComponent } from '../../app.component';
import { ButtonComponent } from '../button/button.component';
import { tipo } from '../../tipo';
import { GranjaServiceService } from '../../services/granja-service.service';
import { animal } from '../../animal';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tipos',
  standalone: true,
  imports: [AnimalesComponent, AppComponent, ButtonComponent, TiposComponent, CommonModule],
  templateUrl: './tipos.component.html',
  // styleUrl: './tipos.component.css'
})
export class TiposComponent implements OnInit{
  @Input()tipo: any;
 @Output()animales: animal[]=[];
 animal:any;
  constructor(private granjaService: GranjaServiceService) {  }

  ngOnInit(): void {
    this.granjaService.obtenerGranja().subscribe(data=>{ 
  });
this.animales=this.tipo.animales;
   
  }


 

  agregarTipo(){
    this.granjaService.postTipoAnimal('MArina', 3, 21, 21, 45, 54, 'http.. ');
  }


  eliminarTipo(){
    alert("EliminarTipo");
  }

  
  modificarTipo(){
    alert("ModificarTipo");
  }


}
