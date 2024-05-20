import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router){}

  irParaCadastro(){
    this.router.navigateByUrl('/cadastro')
  }
  irParaMonitorOperacoes(){
    this.router.navigateByUrl('/monitor')
  }
  sair(){
    this.router.navigateByUrl('/login')
  }
}
