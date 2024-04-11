import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDadosDeclaranteComponent } from './form-dados-declarante.component';

describe('FormDadosDeclaranteComponent', () => {
  let component: FormDadosDeclaranteComponent;
  let fixture: ComponentFixture<FormDadosDeclaranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDadosDeclaranteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDadosDeclaranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
