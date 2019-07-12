import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../Todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()//propriete d'entre 
  todo:Todo;
  constructor(private todoService:TodoService,private router: Router) { }

  ngOnInit() {
  }

  edit(todo:Todo){
    this.router.navigate([{outlets:{editOutlet:['edit',todo.id]}}]);
  }
  
  delete(todo:Todo){
    this.todoService.deleteTodo(todo).subscribe(()=>{
      this.todoService.getTodos();    // reactiver les observateurs et les abonnes vont 
                                      // mis a jour  
    });
  }
}
