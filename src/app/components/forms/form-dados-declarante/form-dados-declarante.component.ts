import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-dados-declarante',
  templateUrl: './form-dados-declarante.component.html',
  styleUrl: './form-dados-declarante.component.css'
})
export class FormDadosDeclaranteComponent implements OnInit{

  declare dadosDeclarante: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ){}
  
 ngOnInit(){
  this.dadosDeclarante = this.formBuilder.group({
    nomeCompleto: ["", Validators.required],
    cpf: ["", Validators.required],
    dataNascimento: ["", Validators.required],
    telefone: ["", Validators.required],
    email: ["", Validators.required],
    profissao: ["", Validators.required],
    numeroContaBancaria: ["", Validators.required]
  });
 } 
}
