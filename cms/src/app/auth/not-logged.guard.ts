import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotLoggedGuard implements CanActivate {
  constructor(private authService: AuthService) {}

 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
 
    return this.authService.isLogged$.pipe(
      map((logged) => {
        if (logged) return false;
        return true;
      })
    );
  }
}
