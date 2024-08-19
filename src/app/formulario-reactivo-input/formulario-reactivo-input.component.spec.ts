import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReactivoInputComponent } from './formulario-reactivo-input.component';

describe('FormularioReactivoInputComponent', () => {
  let component: FormularioReactivoInputComponent;
  let fixture: ComponentFixture<FormularioReactivoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioReactivoInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioReactivoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
