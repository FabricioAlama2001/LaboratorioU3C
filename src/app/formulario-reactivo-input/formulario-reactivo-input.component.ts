import {Component, EventEmitter, Input, Output, output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-formulario-reactivo-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './formulario-reactivo-input.component.html',
  styleUrl: './formulario-reactivo-input.component.css'
})
export class FormularioReactivoInputComponent {

  @Input() title?: string;

  @Output() titleChange = new EventEmitter<string>();

  emitTitleChange(){
   this.titleChange.emit(this.title);
  }
}
