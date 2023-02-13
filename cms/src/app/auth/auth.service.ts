import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Subject, tap } from 'rxjs';
import { Ruolo, Utente } from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: Utente[] = [
    {
      id:0,
      username: 'admin',
      password: '1234',
      ruolo: 'admin',
    },
    {
      id:1,
      username: 'moderator',
      password: '5678',
      ruolo: 'moderatore'
    }
  ];

  getUsers() {
    return this.users.slice();
  }


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
    map((logged) => logged?.ruolo === 'admin')
  );

  readonly isModeratore$ = this.loggedUser$.pipe(
    map((logged) => logged?.ruolo === 'moderatore' || logged?.ruolo === 'admin')
  );



  constructor(private router: Router) { }

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

  deleteCheck(ruolo: Ruolo, ruoloCorrente: Ruolo) {
    if (ruoloCorrente == 'admin') {
      return true;
    }
    else if (ruoloCorrente == 'moderatore') {
      if (ruolo == 'admin') {
        return false;
      }
      else { return true }
    }
    return false;
  }

  delete(id:number) {
    return this.users = this.users.filter((utente) => utente.id != id);
  }

  changeCheck(ruoloCorrente: Ruolo) {
    if (ruoloCorrente == 'admin') {
      return true;
    }
    return false;
  }

  change(id:number, ruoloChanged: Ruolo) {
    const userChanged = this.users.find((u) => u.id == id);

    if(userChanged) {
      userChanged.ruolo = ruoloChanged;
    }
  }
}

