import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit{
  @Input()text: String="";
  @Output()btnClick= new EventEmitter();

  constructor(){}
  
  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }

}
