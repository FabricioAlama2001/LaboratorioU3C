import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{
  persona = {
    nombre:'',
    edad:''
  }

  constructor() {
  }
  ngOnInit() {
  }

  procesar(){
    console.log(this.persona);
  }
}
