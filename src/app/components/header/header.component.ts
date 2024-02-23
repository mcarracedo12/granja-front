import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { AppComponent } from '../../app.component';
import { granja } from '../../granja';
import { GranjaServiceService } from '../../services/granja-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, AppComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [GranjaServiceService]
})
export class HeaderComponent implements OnInit {

  granja: any = {};

  constructor(private granjaService: GranjaServiceService) {
    this.granjaService.obtenerGranja().subscribe(data => {
      this.granja = data;
    });
  }

  ngOnInit(): void {

  }

 

}
