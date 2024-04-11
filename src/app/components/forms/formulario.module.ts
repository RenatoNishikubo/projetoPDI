import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDadosDeclaranteComponent } from './form-dados-declarante/form-dados-declarante.component';
import { FormEnderecoComponent } from './form-endereco/form-endereco.component';
import { FormDependentesComponent } from './form-dependentes/form-dependentes.component';
import { FormPropriedadesComponent } from './form-propriedades/form-propriedades.component';

@NgModule({
  declarations: [
    FormDadosDeclaranteComponent,
    FormEnderecoComponent,
    FormDependentesComponent,
    FormPropriedadesComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [ 
    FormDadosDeclaranteComponent,
    FormEnderecoComponent,
    FormDependentesComponent,
    FormPropriedadesComponent

  ]
})
export class FormularioModule { }
