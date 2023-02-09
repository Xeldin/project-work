import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Ruolo, Utente } from '../model/account';

@Component({
  selector: 'app-pannello-moderatori',
  templateUrl: './pannello-moderatori.component.html',
  styleUrls: ['./pannello-moderatori.component.css']
})
export class PannelloModeratoriComponent implements OnInit {

  users!: Utente[];

  currentUser!: Utente | null;

  change = false;

  constructor(private auth: AuthService, router: Router, route: ActivatedRoute) { }

  ngOnInit(): void {
    this.users = this.auth.getUsers();
    this.auth.loggedUser$.subscribe((user) => this.currentUser = user)
  }

  delete(id: number) {
    this.auth.delete(id);
  }

  deleteCheck(utente: Utente) {

    //?? serve per dire che se currentUser.ruolo è nullo gli da come valore user
    return this.auth.deleteCheck(utente.ruolo, this.currentUser?.ruolo ?? "user") && (utente.id != this.currentUser?.id);
  }

  idToChange = -1;

  toggleChange(id:number) {
    this.change = true;
    this.idToChange = id;
  }

  changeCheck() {
    return this.auth.changeCheck(this.currentUser?.ruolo ?? "user");
  }

  form = new FormGroup({
    newRuolo: new FormControl<Ruolo>('user', {
      nonNullable: true,
      validators: Validators.required,
    })
  });
  
  changeRuolo(r: any) {
    this.newRuolo?.setValue(this.currentUser!.ruolo, {
      onlySelf: true,
    });
  }

  get newRuolo() {
    return this.form.get('newRuolo');
  }

  onChange() {

      if (this.form.invalid) {
        alert('Inserire il nuovo ruolo');
        return;
      }
  
    const {newRuolo} = this.form.getRawValue();

    this.auth.change(this.idToChange, newRuolo);
  }

}

