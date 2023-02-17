import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Utente } from './model/utente';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cms';

  loggedUser$!: Observable<Utente | null>;
  isLogged$!: Observable<boolean>;
  isNotLogged$!: Observable<boolean>;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loggedUser$ = this.authService.loggedUser$;
    this.isLogged$ = this.authService.isLogged$;
  }


}
