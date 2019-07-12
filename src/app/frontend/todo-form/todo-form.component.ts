import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Todo } from '../Todo';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoForm:FormGroup;  
  todo:Todo;
  
  constructor(private fb:FormBuilder,
    private route: ActivatedRoute
    ,private todoService:TodoService,
    private router: Router) { }

  ngOnInit() {
    this.createForm();    
    this.route.params.subscribe(params =>{//recuperer parametre
      let id:string = params['id'];
      this.todoService.getTodo(id).subscribe(todo => {
           this.todo = todo as Todo;
           this.todoForm.setValue({
             id:this.todo.id,
             action:this.todo.action,
             dueDate:this.todo.dueDate
           });
      });
    } );
  }

  createForm(){
    this.todoForm = this.fb.group({
      'id':'',
      'action':'',
      'dueDate':''
    });    
  }

  onSubmit(){
    this.todoService.saveTodo(this.todoForm.value).subscribe(()=>{
      this.todoService.getTodos();
      this.router.navigate([{ outlets: { editOutlet: null }}]);//outlet disparait
    });
  }

}
