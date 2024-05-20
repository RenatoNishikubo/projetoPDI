import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MonitorOperacoesComponent } from './pages/monitor-operacoes/monitor-operacoes.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    {path: 'login', component: LoginComponent},
    {path: 'cadastro', component: HomeComponent},
    {path: 'monitor', component: MonitorOperacoesComponent},
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes {}
