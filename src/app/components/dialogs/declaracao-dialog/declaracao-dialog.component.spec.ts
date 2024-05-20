import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclaracaoDialogComponent } from './declaracao-dialog.component';

describe('DeclaracaoDialogComponent', () => {
  let component: DeclaracaoDialogComponent;
  let fixture: ComponentFixture<DeclaracaoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeclaracaoDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeclaracaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
