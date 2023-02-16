import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  onSearch(event: Event) {
    event.preventDefault();
    // TODO: implement search functionality
  }
}
