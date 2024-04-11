import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDependentesComponent } from './form-dependentes.component';

describe('FormDependentesComponent', () => {
  let component: FormDependentesComponent;
  let fixture: ComponentFixture<FormDependentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDependentesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDependentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
