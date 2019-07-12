import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
//import {BrowserModule, CommonModule} from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FrontendRoutingModule } from './frontend-routing.module';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';

@NgModule({
  declarations: [ MainComponent, TodoListComponent, TodoItemComponent, TodoFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FrontendRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FrontendModule { }
