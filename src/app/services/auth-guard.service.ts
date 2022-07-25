import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userRole:any;
  constructor(private router:Router, private userService:UserService) { }

  canActivate(next: ActivatedRouteSnapshot, state:RouterStateSnapshot) {
    
    var roleFromRoute = next.url;
    this.userRole = localStorage.getItem('role');
    var strRouteRole = roleFromRoute.toString().toUpperCase();
    if(this.userRole==strRouteRole){
      return true;
    }else{
      this.userService.logoutUser();
      return false;
    }
  }
}
