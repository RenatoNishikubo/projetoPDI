import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuario-cadastro',
  templateUrl: './form-usuario-cadastro.component.html',
  styleUrl: './form-usuario-cadastro.component.css'
})
export class FormUsuarioCadastroComponent implements OnInit{

  declare formCadastro: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(){
    this.formCadastro = this.formBuilder.group({
      nomeUsuario:["", Validators.required],
      email: ["", Validators.required],
      senha: ["", Validators.required],
      confirmarSenha: ["", Validators.required]
    });
  } 

}
