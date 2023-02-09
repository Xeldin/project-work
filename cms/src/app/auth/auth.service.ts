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

  // un behavior subject è banalmente un subject che viene costruito a partire da un valore iniziale
  // appena qualcuno effettua la subscription riceverà quel valore
  // nonostante non sia stato emesso alcun valore tramite .next()
  private loggedUserSubject = new BehaviorSubject<Utente | null>(null);
  // readonly, come dice il nome, fa in modo che la proprietà sia accessibile solo in lettura
  // è praticamente il final di Java (è solo lato TS)
  readonly loggedUser$ = this.loggedUserSubject.asObservable();

  // .pipe ricava un nuovo tubo a partire da uno esistente
  // all'interno del metodo pipe posso passare una SERIE di OPERATORI
  // che possono potenziamente modificare i valori che passano tramite il TUBO
  readonly isLogged$ = this.loggedUser$.pipe(
    // tap è un altro operatore, che a differenza di map, NON ALTERA IL VALORE CHE GLI ARRIVA
    // Serve solitamente ad eseguire funzioni che si basano sul valore che passa tramite la pipe
    tap((valore) => console.log('Primo tap', valore)),
    // map è un OPERATORE che modifica i valori che passano dal tubo emettendone uno diverso
    map((loggedUser) => {
      if (loggedUser === null) {
        return false;
      } else {
        return true;
      }
      // (loggedUser) => loggedUser !== null
    }),
    tap((valore) => console.log('Secondo tap', valore))
    // tap((logged) => {
    //   // Per esempio possiamo sfruttare il tap per fare un operazione di navigazione a seconda
    //   // del valore booleano che passa, quando è loggato lo mandiamo sulla home, altrimenti
    //   // lo rimandiamo sul login
    //   if (logged) {
    //     console.log('Utente loggato, vado sulla home');
    //     this.router.navigateByUrl('/');
    //   } else {
    //     console.log('Utente sloggato, vado sul login');
    //     this.router.navigateByUrl('/login');
    //   }
    // })
  );

  readonly isAdmin$ = this.loggedUser$.pipe(
    map((logged) => logged?.ruolo === 'admin')
  );

  readonly isModeratore$ = this.loggedUser$.pipe(
    map((logged) => logged?.ruolo === 'moderatore' || logged?.ruolo === 'admin')
  );



  constructor(private router: Router) { }

  login(username: string, password: string) {
    // Vado a tirare fuori l'utente che suddisfa i requisiti del login
    // Mi potrebbe essere utile dopo, per esempio quando voglio conoscerne il ruolo
    const existingUser = this.users.find(
      (u) => u.username === username && u.password === password
    );

    // il metodo find in realtà restituisce un undefined e non un null
    // a noi cambia poco, usiamo direttamente il bang operator
    this.loggedUserSubject.next(existingUser!);
    // Ogni volta che l'utente effettua il login, tramite il subject emettiamo il valore

    // !existingUser =>
    // se existingUser == undefined => true
    // se existingUser != undefined => false
    // !!existingUser
    // se existingUser == undefined => false
    // se existingUser != undefined => true
    return !!existingUser;
  }

  logout() {
    // Il logout lo gestirò direttamente facendo un next di un valore null
    // sul subject, il resto verrà gestito tramite la serie di pipe con rxjs
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

