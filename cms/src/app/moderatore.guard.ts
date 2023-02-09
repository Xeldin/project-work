import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth/auth.service";

@Injectable({
    providedIn: 'root'
  })
  export class ModeratoreGuard implements CanActivate {
  
    constructor(private authService: AuthService) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean 
      | UrlTree> 
      | Promise<boolean 
      | UrlTree> 
      | boolean
      | UrlTree {
      return this.authService.isModeratore$;
    }
    
  }