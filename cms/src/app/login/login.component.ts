import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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

  constructor(private authService: AuthService) {}

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
}
