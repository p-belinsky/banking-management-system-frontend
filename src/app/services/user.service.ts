import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedInBool: boolean = false;

  constructor(private http:HttpClient, private router:Router) { }

  loginUser(token:any) {
    localStorage.setItem('token', token);
  }

  isLoggedIn() {
    var token = localStorage.getItem('token')
  
    if(token == null || token == '' || token == undefined) {
      this.isLoggedInBool = false;
      return false;
    }
    else {
      this.isLoggedInBool = true;
      return true;
    }
  }

  logoutUser(){
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    this.isLoggedInBool = false;
    this.router.navigate([('/login')])
   
    
  }

  getTokenByUsernameAndPassword(form:any){
    return this.http.post('http://localhost:8080/token', form)
  }

  loadUserByUsername(form:any){
    return this.http.post('http://localhost:8080/loadUser', form)
  }
  
}
