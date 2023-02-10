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

  loggedUser$!: Observable<Utente | null>;
  isLogged$!: Observable<boolean>;
  isNotLogged$!: Observable<boolean>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {

    this.loggedUser$ = this.authService.loggedUser$;
    this.isLogged$ = this.authService.isLogged$;

    this.isNotLogged$ = this.isLogged$.pipe(map((logged) => !logged));
  }

  ngOnDestroy(): void {

  }

  onLogout() {
    this.authService.logout();
  }
}

