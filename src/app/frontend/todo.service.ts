 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './Todo';
import { Subject, Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url:string="http://localhost:2403/todos";
  sTodos:Subject<Todo[]>= new Subject<Todo[]>();
  sTodos$=this.sTodos.asObservable();// rendre sTodos un observable
  constructor( private httpclient:HttpClient) { }
  getTodos(){
    this.httpclient.get(this.url).subscribe(
     (r:Todo[])=>{
       this.sTodos.next(r);
     });
     return this.sTodos;

    


  }
  // getTodos(){
  
  //   this.httpclient.get(this.url).subscribe((r:Todo[])=>{
  //     let data = r;
  //     this.sTodos.next(data);
  //   });
  //   return this.sTodos$;    
  // }
  // getTodo(id:string){
  //   this.httpclient.get<Todo>(this.url+"/"+id);
  //   // .subscribe(data => 
      
  //   //   {
  //   //      return data; 
  //   //   });
  // }

  // saveTodo(todo:Todo){
    
  //   this.httpclient.post(this.url,todo);
  //   // .subscribe(data  => 
  //   // console.log("POST Request is successful ", data));
  // }
  // deleteTodo(todo:Todo){
  //   return this.httpclient.delete(this.url+"/"+todo.id);
  //   // .subscribe(() =>  console.log("deleted"))

  // }
  getTodo(id:string){
    return this.httpclient.get(this.url+'/'+id);    
  }

  saveTodo(todo:Todo){
    return this.httpclient.post(this.url,todo);    
  }

  deleteTodo(todo:Todo){
    return this.httpclient.delete(this.url+'/'+todo.id);    
  }

}
