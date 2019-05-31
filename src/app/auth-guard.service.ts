import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild
  } from '@angular/router';
  import { Observable } from 'rxjs';
  import { Injectable } from '@angular/core';
  import { AuthService } from './auth/auth.service';
  
  @Injectable()
  
  
  export class AuthGuard implements CanActivate, CanActivateChild {
    
    constructor(private authService: AuthService, private router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
       if(this.authService.isAuthenticated()){
        return true
      }else{
        return this.router.navigate(['/']);
      }
      
    }
  
    canActivateChild(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.canActivate(route, state);
    }
  }
  