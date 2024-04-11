import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes {}
