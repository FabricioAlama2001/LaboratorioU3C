import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";

interface UserEntry {
  name: string;
  lastname: string;
  nrc: string;
  email: string;
  fecha: string;
}
@Component({
  selector: 'app-formulario-repaso',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './formulario-repaso.component.html',
  styleUrl: './formulario-repaso.component.css'
})
export class FormularioRepasoComponent {

  formUser= this.fb.group({
    'name':['', Validators.required],
    'lastname':['', Validators.required],
    'nrc':['', Validators.required],
    'email':['', [Validators.required,Validators.email]],
    'fecha': ['', Validators.required]  // Agregando el campo de fecha con validación requerida

  })
  entries: UserEntry[] = [];

  constructor(private fb: FormBuilder) {

  }

  procesar() {
    if (this.formUser.valid) {
      this.entries.push(this.formUser.value as UserEntry);
      this.formUser.reset();
    }
  }
  get name(){
    return this.formUser.get('name') as FormControl;
  }
  get lastname(){
    return this.formUser.get('lastname') as FormControl;
  }
  get nrc(){
    return this.formUser.get('nrc') as FormControl;
  }
  get email(){
    return this.formUser.get('email') as FormControl;
  }
  get fecha() {
    return this.formUser.get('fecha') as FormControl;
  }

}
