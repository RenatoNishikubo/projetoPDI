import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-form-dependentes',
  templateUrl: './form-dependentes.component.html',
  styleUrl: './form-dependentes.component.css'
})
export class FormDependentesComponent implements OnInit {
  @Output() formCompleted = new EventEmitter<any>();

  declare dependentes: FormGroup;

  constructor(private fb: FormBuilder,) {
    this.dependentes = this.fb.group({
      formArray: this.fb.array([])
    });
  }

  get formArray(): FormArray {
    return this.dependentes.get('formArray') as FormArray;
  }

  ngOnInit() {
    this.addFormGroup();

    this.dependentes.statusChanges.pipe(
      debounceTime(2000),).subscribe(status => {
        if (status === 'VALID') {    
          this.formCompleted.emit(this.dependentes.value.formArray);

        }else{
          this.formArray.markAllAsTouched();
        }
    });
  }

  addFormGroup() {
    const newFormGroup = this.fb.group({
      tipoDependente: ["", Validators.required],
      nomeCompleto: ["", Validators.required],
      cpf: ["", Validators.required],
      nascimento: ["", Validators.required],
    });
    this.formArray.push(newFormGroup);
  }

  removeFormGroup(index: number) {
    this.formArray.removeAt(index);
  }

}
