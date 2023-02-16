import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // I guard possono anche restituire direttamente gli observable
    // e le logiche di come permette l'accesso rimarranno identiche
    // solo che si baserà su un valore asincrono che verrà gestito direttamente dal guard
    return this.authService.isAdmin$;
    // Notiamo che al guard basta anche solo l'observable per gestire i permessi di passaggio
    // se l'observable emette valori false, non passa, altrimenti sì.
  }
}


  

