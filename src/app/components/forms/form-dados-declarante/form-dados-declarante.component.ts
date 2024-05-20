import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-form-dados-declarante',
  templateUrl: './form-dados-declarante.component.html',
  styleUrl: './form-dados-declarante.component.css'
})
export class FormDadosDeclaranteComponent implements OnInit {
  @Output() formCompleted = new EventEmitter<any>();

  declare dadosDeclarante: FormGroup;
  formArray: FormArray;

  constructor(
    private fb: FormBuilder,
  ) {
    this.formArray = this.fb.array([this.createFormGroup()]);
  }

  ngOnInit() {
    this.createFormGroup();

    this.dadosDeclarante.statusChanges.pipe(
      debounceTime(2000),).subscribe(status => {
      if (status === 'VALID') {
        this.formCompleted.emit(this.dadosDeclarante.value);
      }
    });
  }

  createFormGroup(): FormGroup {
    return this.dadosDeclarante = this.fb.group({
      nome: ["", Validators.required],
      cpf: ["", Validators.required],
      nascimento: ["", Validators.required],
      telefone: ["", Validators.required],
      email: ["", Validators.required],
      profissao: ["", Validators.required],
      contaBancaria: ["", Validators.required]
    });
  }
}
