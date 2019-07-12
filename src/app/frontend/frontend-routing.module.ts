import { TodoFormComponent } from './todo-form/todo-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationService } from '../backend/authentification.service';

const routes: Routes = [
  {
    path:'edit/:id',
    component:TodoFormComponent,
    outlet:'editOutlet',
    canActivate:[AuthentificationService]// user allowed to active the component
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),    
  ],
  exports:[
    RouterModule
  ]

})
export class FrontendRoutingModule { }

