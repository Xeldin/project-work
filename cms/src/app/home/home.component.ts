import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Utente } from 'src/model/utente';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loggedUser$!: Observable<Utente | null>;
  isLogged$!: Observable<boolean>;
  isNotLogged$!: Observable<boolean>;

  form = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  constructor(private authService: AuthService) { }

    ngOnInit(): void {
      this.loggedUser$ = this.authService.loggedUser$;
      this.isLogged$ = this.authService.isLogged$;
      // this.isNotLogged$ = this.isLogged$.pipe(map((logged) => !logged));
    }



  onLogin() {
    if (this.form.invalid) {
      alert('Inserire tutti i campi richiesti!');
      return;
    }

    const { username, password } = this.form.getRawValue();

    const logged = this.authService.login(username, password);

    // Flip dell'if
    if (!logged) {
      alert('Credenziali errate!');
    }
  }

    onLogout() {
    this.authService.logout();
  }
}


