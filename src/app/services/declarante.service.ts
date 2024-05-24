import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Declarante {
  cpf: string,
  nome: string,
  nascimento: string,
  telefone: string,
  email: string,
  profissao: string,
  contaBancaria: string,
  created_at: string,
  updated_at: string
}

export interface Endereco{
  cep: string,
	numero: number,
	complemento: string,
	rua: string,
	bairro: string,
	cidade: string,
	estado: string
}

export interface Denpendente{
  tipo:string,
  nome:string,
  documento: string,
  nascimento : string
}

export interface Propriedade{
  tipo: string,
  anoCompra:string,
  anoVenda :string,
  valorCompra :string,
  valorVenda : string
}

export interface Declaracao {
  cpf: string,
  nome: string,
  nascimento: string,
  telefone: string,
  email: string,
  profissao: string,
  contaBancaria: string,
  endereco: Endereco[],
  dependente:Denpendente[],
  propriedade:Propriedade[]
}


@Injectable({
  providedIn: 'root'
})
export class DeclaranteService {
  header = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) { }

  public getAllDeclarantes(): Observable<Declarante[]> {
    return this.httpClient.get<Declarante[]>('http://127.0.0.1:8000/api/declarantes/')
  }

  public getDeclaranteById(documento:string): Observable<Declaracao> {
    return this.httpClient.get<Declaracao>('http://127.0.0.1:8000/api/declarantes/'+ documento)
  }

  public addDeclaracao(declaracao: Declaracao){
    this.httpClient.post<Declaracao>('http://127.0.0.1:8000/api/declaracoes/create', 
    declaracao, {headers: this.header})
    .subscribe( res => {
      // console.log(res); 
    });
  }
}
