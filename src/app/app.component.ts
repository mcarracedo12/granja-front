import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: '../styles.css'
})
export class AppComponent{
    title = 'granja';
    // miGranja: any;

    // constructor(private datosMiGranja: miGranjaService){}

    // ngOnInit(): void {
    //   this.datosMiGranja.obtenerDatos().subscribe(data  => {
    //     console.log(data);
    //   this.datosMiGranja=data;
    // });
    // }
}

