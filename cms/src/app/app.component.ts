import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isLogged!: boolean;
  isLoggedSubscription!: Subscription;

  constructor(private authService: AuthService) {}


  ngOnInit(): void {
    console.log('App componente inizializzato');
    this.isLogged = this.authService.isLogged;
    // Ad componente interessa sapere in tempo reale del cambio di stato login
    // perché deve mostrare/nascondere dei link di navigazione
    this.isLoggedSubscription = this.authService.isLoggedChange.subscribe(
      (newState) => (this.isLogged = newState)
    );
   
  }
  ngOnDestroy(): void {
    this.isLoggedSubscription.unsubscribe();
  }
  title = 'cms';
}
