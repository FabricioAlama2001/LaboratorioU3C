import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        CalculadoraComponent // Importando como un módulo standalone
      ],
      providers: [FormBuilder] // Asegúrate de proveer FormBuilder si es necesario
    }).compileComponents();

    // Crear una instancia del componente usando TestBed
    component = TestBed.createComponent(CalculadoraComponent).componentInstance;
  });

  it('debería crear una instancia', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar el formulario con dos campos', () => {
    expect(component.formCalculadora.contains('number')).toBeTrue();
    expect(component.formCalculadora.contains('numberDos')).toBeTrue();
  });

  it('debería calcular la multiplicación correctamente', () => {
    component.formCalculadora.controls['number'].setValue('10');
    component.formCalculadora.controls['numberDos'].setValue('20');
    component.multiplicar();
    expect(component.resultado).toEqual(200);
  });

  it('debería manejar la división por cero', () => {
    component.formCalculadora.controls['number'].setValue('10');
    component.formCalculadora.controls['numberDos'].setValue('0');
    component.dividir();
    expect(component.resultado).toEqual('Error: División por cero');
  });

  it('debería calcular la división correctamente', () => {
    component.formCalculadora.controls['number'].setValue('20');
    component.formCalculadora.controls['numberDos'].setValue('10');
    component.dividir();
    expect(component.resultado).toEqual(2);
  });
});
