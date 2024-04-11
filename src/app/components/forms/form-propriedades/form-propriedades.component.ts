import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-propriedades',
  templateUrl: './form-propriedades.component.html',
  styleUrl: './form-propriedades.component.css'
})
export class FormPropriedadesComponent implements OnInit{

  declare propriedades: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(){
    this.propriedades = this.formBuilder.group({
      tipoPropriedade: ["", Validators.required],
      anoCompra: ["", Validators.required],
      anoVenda: ["", Validators.required],
      valorCompra: ["", Validators.required],
      valorVenda: ["", Validators.required],
    });
  } 

}
