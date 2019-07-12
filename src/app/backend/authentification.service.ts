import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Todo } from '../frontend/Todo';
import { User } from './user';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService implements CanActivate{

   url:string='http://localhost:2403/users';
  constructor(private httpClient:HttpClient) {

   }
   login(username:string,password:string){
     this.url+="?userName="+username+"&password="+password;
     return this.httpClient.get(this.url).pipe(
      map((res: any[])=>{
        
          let user:{};
          if(res.length>0){
            user=res[0];
            localStorage.setItem("currentUser",JSON.stringify(user));
          }else{
            throw new Error("Auth Error");
          }
          return user;
          
      })
      );
      
  
   }

   canActivate() {
    let user:User = JSON.parse(localStorage.getItem('currentUser')) as User;
    let res = false;

    if(user.userName == 'admin'){
      res = true;
    }

    return res;
  }
   
}
