import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Language, Videogioco } from 'src/app/model/videogioco';
import { VideogiochiService } from 'src/app/service/videogiochi.service';

@Component({
  selector: 'app-card-videogames',
  templateUrl: './card-videogame.component.html',
  styleUrls: ['./card-videogame.component.css']
})
export class CardVideogamesComponent {
  @Input() title?: string;
  @Input()  releaseDate?: string;
  @Input()  genre?: string;
  @Input()  softwareHouse?: string;
  @Input()  publisher?: string;
  @Input()  numberOfPlayers?: number;
  @Input()  languages?: Language[];
  @Input()  coverImage?: string;

  constructor(private videogiochiService: VideogiochiService) {}

  videogames$!: Observable<Videogioco[]>;

  onClickElimina(id:string){
    this.videogiochiService.deleteVideogioco(id).subscribe(()=>{
      this.videogames$=this.videogiochiService.getVideogiochi();
    });
  }

}
