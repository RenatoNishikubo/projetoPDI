import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorOperacoesComponent } from './editor-operacoes.component';

describe('EditorOperacoesComponent', () => {
  let component: EditorOperacoesComponent;
  let fixture: ComponentFixture<EditorOperacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorOperacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditorOperacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
