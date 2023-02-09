import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = false;

  isLoggedChange = new Subject<boolean>();

  // Metodo che gestisce l'autenticazione con i due dati di accesso
  login(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      this.isLogged = true;
    }

    this.isLoggedChange.next(this.isLogged);

    return this.isLogged;
  }

  
}

