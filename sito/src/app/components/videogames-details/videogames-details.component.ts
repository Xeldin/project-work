import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Videogame } from '../../Videogames';
import { VideogamesService } from '../../services/videogames.service';

@Component({
  selector: 'app-videogames-details',
  templateUrl: './videogames-details.component.html',
  styleUrls: ['./videogames-details.component.css'],
})
export class VideogamesDetailsComponent {
  videogame$!: Observable<Videogame>;

  constructor(
    private videogameService: VideogamesService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      const _id = params['_id'];
      this.videogame$ = this.videogameService.getSingleVideogame(_id);
    });
  }
}
