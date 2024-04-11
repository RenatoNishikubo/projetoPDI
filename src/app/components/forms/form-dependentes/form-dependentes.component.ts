import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-dependentes',
  templateUrl: './form-dependentes.component.html',
  styleUrl: './form-dependentes.component.css'
})
export class FormDependentesComponent implements OnInit{

  declare dependentes: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(){
    this.dependentes = this.formBuilder.group({
      tipoDependente: ["", Validators.required],
      nomeCompleto: ["", Validators.required],
      cpf: ["", Validators.required],
      dataNascimento: ["", Validators.required],
    });
  } 

}
