import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-usuario-login',
  templateUrl: './form-usuario-login.component.html',
  styleUrl: './form-usuario-login.component.css'
})
export class FormUsuarioLoginComponent implements OnInit{

  declare formLogin: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(){
    this.formLogin = this.formBuilder.group({
      email: ["", Validators.required],
      senha: ["", Validators.required]
    });
  }
  irParaCadastro(){
    this.router.navigateByUrl('/cadastro')
  } 
}
