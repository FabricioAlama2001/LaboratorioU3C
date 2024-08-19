import {Component,Input, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{Calculator} from './Calculator'
import {FormularioComponent} from "./formulario/formulario.component";
import {FormularioReactivoComponent} from "./formulario-reactivo/formulario-reactivo.component";
import {FormularioReactivoInputComponent} from "./formulario-reactivo-input/formulario-reactivo-input.component";
import {FormsModule} from "@angular/forms";
import {FormularioRepasoComponent} from "./formulario-repaso/formulario-repaso.component";
import {CalculadoraComponent} from "./calculadora/calculadora.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioComponent, FormularioReactivoComponent, FormularioReactivoInputComponent, FormsModule, FormularioRepasoComponent, CalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  ngOnInit() {
    let calculator = new Calculator();
    let resultado = calculator.multiply(3,3);
    console.log(resultado);
    let calculator2 = new Calculator();
    let resultado2 = calculator2.divide(6,3)
    console.log(resultado2);

  }
  title = 'Lab1U3';
}
