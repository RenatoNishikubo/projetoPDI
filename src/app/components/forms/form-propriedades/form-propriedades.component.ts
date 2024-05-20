import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-form-propriedades',
  templateUrl: './form-propriedades.component.html',
  styleUrl: './form-propriedades.component.css'
})
export class FormPropriedadesComponent implements OnInit{
  @Output() formCompleted = new EventEmitter<any>();

  declare propriedades: FormGroup;

  constructor(private fb: FormBuilder) {
    this.propriedades = this.fb.group({
      formArray: this.fb.array([])
    });
  }

  get formArray(): FormArray {
    return this.propriedades.get('formArray') as FormArray;
  }

  ngOnInit() {
    this.addFormGroup();

    this.propriedades.statusChanges.pipe(
      debounceTime(2000),).subscribe(status => {
      if (status === 'VALID') {
        this.formCompleted.emit(this.propriedades.value.formArray);

      }else{
        this.formArray.markAllAsTouched();
      }
    });
  }

  addFormGroup(){
    const newFormGroup = this.fb.group({
      tipoPropriedade: ["", Validators.required],
      anoCompra: ["", Validators.required],
      anoVenda: ["", Validators.required],
      valorCompra: ["", Validators.required],
      valorVenda: ["", Validators.required],
    });
    this.formArray.push(newFormGroup);
  }

  removeFormGroup(index: number) {
    this.formArray.removeAt(index);
  }

}
