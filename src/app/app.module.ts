import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { DeclaranteService } from './services/declarante.service';


@NgModule({
    declarations: [],
    imports: [ 
        BrowserModule, 
        AppRoutes, 
        HttpClientModule,
    ],
    providers: [DeclaranteService], // Adicione o serviço aqui, se necessário
})
export class AppModule { }