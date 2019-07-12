import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './backend/login/login.component';
import { MainComponent } from './frontend/main/main.component';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full' },    
    {path:'login',component:LoginComponent},
    {path:'main',component:MainComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),  
    RouterModule  
  ],
  exports:[
    RouterModule
  ]


})
export class RoutingModule { }
