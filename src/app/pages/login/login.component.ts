import { Component } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import { FormularioModule } from '../../components/forms/formulario.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, FormularioModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
