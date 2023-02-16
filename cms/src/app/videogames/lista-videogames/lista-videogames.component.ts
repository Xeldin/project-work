import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Videogioco } from 'src/app/model/videogioco';
import { VideogiochiService } from 'src/app/service/videogiochi.service';

@Component({
  selector: 'app-lista-videogames',
  templateUrl: './lista-videogames.component.html',
  styleUrls: ['./lista-videogames.component.css']
})
export class ListaVideogamesComponent implements OnInit {
  videogames$!: Observable<Videogioco[]>;

  constructor (private videogiochiService: VideogiochiService){}

  ngOnInit(): void {
    this.videogames$= this.videogiochiService.getVideogioco();
  }

}
