import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-endereco',
  templateUrl: './form-endereco.component.html',
  styleUrl: './form-endereco.component.css'
})
export class FormEnderecoComponent implements OnInit{

  declare endereco: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(){
    this.endereco = this.formBuilder.group({
      cep: ["", Validators.required],
      rua: ["", Validators.required],
      numero: ["", Validators.required],
      complemento: [null],
      bairro: ["", Validators.required],
      cidade: ["", Validators.required],
      estado: ["", Validators.required]
    });
  } 
}
