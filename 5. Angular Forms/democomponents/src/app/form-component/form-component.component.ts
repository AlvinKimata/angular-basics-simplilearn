import { Component, OnInit } from '@angular/core';
import {enableProdMode} from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})

export class FormComponentComponent {
  ngOnInit(){
  }
  submit(){
    debugger
    console.log("Form submitted");
  }
  
}




enableProdMode();
