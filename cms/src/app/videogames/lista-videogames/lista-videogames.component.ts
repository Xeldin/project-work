import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Videogame } from 'src/app/model/videogioco';

@Component({
  selector: 'app-lista-videogames',
  templateUrl: './lista-videogames.component.html',
  styleUrls: ['./lista-videogames.component.css']
})
export class ListaVideogamesComponent implements OnInit {
  videogames$!: Observable<Videogame[]>;

  constructor (private videogiochiService: VideogiochiService){}

  ngOnInit(): void {
    this.videogames$= this.videogiochiService.getVideogioco();
  }

}
