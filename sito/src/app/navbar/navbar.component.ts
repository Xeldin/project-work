import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router) {}

  homeRoute() {
    return this.router.url === '/';
  }

  newsRoute() {
    return this.router.url === '/news';
  }

  videogameRoute() {
    return this.router.url === '/videogames';
  }

  reviewRoute() {
    return this.router.url === '/reviews';
  }
}
