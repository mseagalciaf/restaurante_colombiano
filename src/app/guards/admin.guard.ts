import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigService } from '../config/config.service';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor( private router : Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUser(route);
  }

  checkUser(route:ActivatedRouteSnapshot){
    let currentUser:UserInterface = JSON.parse(localStorage.getItem(ConfigService.currentUserName));
    if (currentUser) { 
      let roles = currentUser.roles.map((role) => role.id);
      if (roles.includes(route.data.roles[0]) || roles.includes(route.data.roles[1]) ) {
        console.log("permitido");
           
        return true;
      }else{
        this.router.navigate(['/home']);
        return false;
      }

    }else{
      console.log("no permitido");
      
      this.router.navigate(['/auth']);
      return false;
    }
  }

}
