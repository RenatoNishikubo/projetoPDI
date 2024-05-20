import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuario-login',
  templateUrl: './form-usuario-login.component.html',
  styleUrl: './form-usuario-login.component.css'
})
export class FormUsuarioLoginComponent implements OnInit{

  declare formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(){
    this.formLogin = this.formBuilder.group({
      email: ["", Validators.required],
      senha: ["", Validators.required]
    });
  } 
}
