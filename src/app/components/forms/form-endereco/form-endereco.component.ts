import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-form-endereco',
  templateUrl: './form-endereco.component.html',
  styleUrl: './form-endereco.component.css'
})
export class FormEnderecoComponent implements OnInit{
  @Output() formCompleted = new EventEmitter<any>();

  declare endereco: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(){
    this.endereco = this.formBuilder.group({
      cep: ["", Validators.required],
      rua: ["", Validators.required],
      numero: [0, Validators.required],
      complemento: [null, Validators.required],
      bairro: ["", Validators.required],
      cidade: ["", Validators.required],
      estado: ["", Validators.required]
    });

    this.endereco.statusChanges.pipe(
      debounceTime(2000),).subscribe(status => {
      if (status === 'VALID') {
        this.formCompleted.emit(this.endereco.value);
      }
    });
  } 
}
