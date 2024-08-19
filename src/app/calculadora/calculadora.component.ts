import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  formCalculadora: FormGroup = this.fb.group({
    number: ['', Validators.required],
    numberDos: ['', Validators.required],
  });

  resultado: number | string | null = null;

  constructor(private fb: FormBuilder) {}

  get number() {
    return this.formCalculadora.get('number');
  }

  get numberDos() {
    return this.formCalculadora.get('numberDos');
  }

  get isNumberValid() {
    return this.number?.valid || this.number?.pristine;
  }

  get isNumberDosValid() {
    return this.numberDos?.valid || this.numberDos?.pristine;
  }

  multiplicar() {
    const number1 = parseFloat(this.number?.value);
    const number2 = parseFloat(this.numberDos?.value);
    this.resultado = number1 * number2;
  }

  dividir() {
    const number1 = parseFloat(this.number?.value);
    const number2 = parseFloat(this.numberDos?.value);
    if (number2 === 0) {
      this.resultado = 'Error: División por cero';
    } else {
      this.resultado = number1 / number2;
    }
  }

}
