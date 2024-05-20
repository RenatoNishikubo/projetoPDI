import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorOperacoesComponent } from './monitor-operacoes.component';

describe('MonitorOperacoesComponent', () => {
  let component: MonitorOperacoesComponent;
  let fixture: ComponentFixture<MonitorOperacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorOperacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitorOperacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
