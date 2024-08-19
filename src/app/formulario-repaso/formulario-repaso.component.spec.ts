import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRepasoComponent } from './formulario-repaso.component';

describe('FormularioRepasoComponent', () => {
  let component: FormularioRepasoComponent;
  let fixture: ComponentFixture<FormularioRepasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioRepasoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioRepasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
