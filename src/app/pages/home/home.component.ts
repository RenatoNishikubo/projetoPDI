import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormularioModule } from '../../components/forms/formulario.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: 
    [MatCardModule, MatButtonModule, FormularioModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{



  ngOnInit(){
    
  }
}
