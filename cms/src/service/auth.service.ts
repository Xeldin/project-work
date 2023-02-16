import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Utente } from '../model/utente';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private users: Utente[] = [
    {
      username: 'admin',
      password: '1234',
      roulo: 'admin',
    },
    {
      username: 'pippo',
      password: 'pluto',
      roulo: 'user',
    },
  ];

 private loggedUserSubject = new BehaviorSubject<Utente | null>(null);

  readonly loggedUser$ = this.loggedUserSubject.asObservable();

  readonly isLogged$ = this.loggedUser$.pipe(

    tap((valore) => console.log('Primo tap', valore)),

    map((loggedUser) => {
      if (loggedUser === null) {
        return false;
      } else {
        return true;
      }
      
    }),
    tap((valore) => console.log('Secondo tap', valore))

  );

  readonly isAdmin$ = this.loggedUser$.pipe(
    map((logged) => logged?.roulo === 'admin')
  );

  constructor(private router: Router) {}

  login(username: string, password: string) {
const existingUser = this.users.find(
      (u) => u.username === username && u.password === password
    );

    this.loggedUserSubject.next(existingUser!);
return !!existingUser;
  }

  logout() {
this.loggedUserSubject.next(null);
  }
}
