import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged$!: Observable<boolean>;
  router: any;

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.isLogged$ = this.authService.isLogged$;
  }

  onLogout() {
    this.authService.logout();
    
  }


}




