import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormularioModule } from '../../components/forms/formulario.module';
import { CommonModule } from '@angular/common';
import { DeclaranteService } from '../../services/declarante.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: 
    [MatCardModule, MatButtonModule, FormularioModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  
  dadosDeclarante: any;
  dadosDependetes:any;
  dadosEndereco:any;
  dadosPropriedades:any;


  constructor(private declaranteService : DeclaranteService){}

  AvancarForm(){
    if(this.dadosDeclarante && this.dadosEndereco){
      const declaracao = this.dadosDeclarante;
      declaracao.endereco = [this.dadosEndereco];
      declaracao.dependentes = !this.dadosDependetes ? [] : this.dadosDependetes;
      declaracao.propriedades = !this.dadosPropriedades ? [] : this.dadosPropriedades;
      this.declaranteService.addDeclaracao(declaracao);
      }
      
  }

  onFormDadosDeclarante(data:any){
    this.dadosDeclarante = data;
  }
  onFormDependentes(data:any){
    this.dadosDependetes = data;
  }
  onFormEndereco(data:any){
    this.dadosEndereco = data;
  }
  onFormPropriedades(data:any){
    this.dadosPropriedades = data;
  }
}
