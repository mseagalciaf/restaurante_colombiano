import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginInterface } from '../interfaces/login-interface';
import { RegisterInterface } from '../interfaces/register-interface';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  url:string="http://mike.com/api_restaurante/public/api/"
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })
  constructor(private http:HttpClient, private router:Router) { }

  register(dataForm:RegisterInterface):Observable<any>{
    let customUrl = this.url + "register";
    return this.http.post(customUrl, dataForm, {headers: this.headers})
  }

  login(credentials:LoginInterface):Observable<any>{
    let customUrl = this.url + "login";
    return this.http.post(customUrl,credentials, {headers: this.headers})
  }

  logout(){
    let customUrl = this.url+"logout";
    let currentUser=localStorage.getItem("currentUser");
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
    
    return this.http.post(customUrl,currentUser, {headers: this.headers});
       
  }

  userInfo():Observable<any>{
    let customUrl = this.url+"userinfo";
    return this.http.post(customUrl,null,{headers: this.headers});

    
  }

  //--------------Localstorage----------------------
  setToken(token:string):void {
    let token_string=JSON.stringify(token);
    localStorage.setItem("accessToken",token_string)
  }

  setCurrentUser(user:any){
    let user_string= JSON.stringify(user);
    localStorage.setItem("currentUser",user_string)
  }

  //---------------Routing Roles-------------------------
  roleRoute(roleId: number):void{
    switch (roleId) {
      case 1:
        this.router.navigate(['admin'])
        
        break;
      case 2:
        this.router.navigate(['admin'])
        break;
      case 3:
        this.router.navigate(['home'])
        
        break;
          
      default:
        break;
    }
  }

}
