import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Utente } from '../model/account';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  // loggedUser: Utente | null = null;
  // loggedUserSubscription!: Subscription;

  // Utilizziamo un altro approccio, faccio in modo da avere direttamente un Observable
  // perché a noi serve soltanto per la visualizzazione, sul template possiamo "utilizzare direttamente"
  // un Observable
  loggedUser$!: Observable<Utente | null>;
  isLogged$!: Observable<boolean>;
  isNotLogged$!: Observable<boolean>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // this.loggedUserSubscription = this.authService.loggedUser$.subscribe(
    //   (nuovoUtenteLoggato) => {
    //     console.log('Valore arrivato', nuovoUtenteLoggato);
    //     return (this.loggedUser = nuovoUtenteLoggato);
    //   }
    // );

    // Quando viene inizializzato il componente vado banalmente a recuperare il valore
    // Observable dal service che lo gestisce
    this.loggedUser$ = this.authService.loggedUser$;
    this.isLogged$ = this.authService.isLogged$;
    // Ho ricavato un altro tubo a partire da isLogged$
    // Posso farlo senza problemi anche solo nel componente (Potrebbe essere un observable)
    // che serve solo in questo specifico componente
    // i valori che passano dal tubo isLogged$ vengono manipolati dalla funzione map
    // andando a ribaltare il suo valore "originale"
    this.isNotLogged$ = this.isLogged$.pipe(map((logged) => !logged));
  }

  ngOnDestroy(): void {
    // this.loggedUserSubscription.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}

