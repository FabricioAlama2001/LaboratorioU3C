import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import {FormsModule} from "@angular/forms";
import {JsonPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    NgIf
  ],
  templateUrl: './formulario-reactivo.component.html',
  styleUrl: './formulario-reactivo.component.css'
})
export class FormularioReactivoComponent {



  formUser= this.fb.group({
    'name':['', Validators.required],
    'email':['', Validators.required,Validators.email],
  })


  constructor(private fb: FormBuilder) {

  }

  procesar(){
    console.log(this.formUser.value)
  }
  get name(){
    return this.formUser.get('name') as FormControl;
  }
  get email(){
    return this.formUser.get('email') as FormControl;
  }
  // formUser = new FormGroup({
  // name: new FormControl('', [Validators.required]),
  // email: new FormControl('', [Validators.required,Validators.email]),
  // });

  // name= new FormControl('',Validators.required);
  // email= new FormControl('',[Validators.required,Validators.email]);

}
