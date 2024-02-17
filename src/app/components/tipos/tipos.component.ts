import { Component , OnInit, Input} from '@angular/core';
import { AnimalesComponent } from '../animales/animales.component';
import { AppComponent } from '../../app.component';
import { ButtonComponent } from '../button/button.component';
import { TIPOS } from '../../mock-granja';
import { tipo } from '../../tipo';


@Component({
  selector: 'app-tipos',
  standalone: true,
  imports: [AnimalesComponent, AppComponent, ButtonComponent, TiposComponent],
  templateUrl: './tipos.component.html',
  // styleUrl: './tipos.component.css'
})
export class TiposComponent implements OnInit{
  tipo: tipo[] = []


  // constructor(private TaskService: TaskService) { }



  ngOnInit(): void {
    //Like promisse
    // this.TaskService.getTasks().subscribe(tasks => [
      // this.tasks = tasks
    // ]);
  }


  eliminarTipo(){
    alert("EliminarTipo");
  }

  
  modificarTipo(){
    alert("ModificarTipo");
  }
}
