import { Component, OnInit } from '@angular/core';
import { VideogamesService } from '../../services/videogames.service';
import { Videogame } from '../../Videogames';

@Component({
  selector: 'app-videogames-list',
  templateUrl: './videogames-list.component.html',
  styleUrls: ['./videogames-list.component.css'],
})
export class VideogamesListComponent implements OnInit {
  videogame: Videogame[] = [];

  constructor(private videogamesService: VideogamesService) {}

  ngOnInit(): void {
    this.videogamesService
      .getVideogame()
      .subscribe((videogame) => (this.videogame = videogame));
  }
}
