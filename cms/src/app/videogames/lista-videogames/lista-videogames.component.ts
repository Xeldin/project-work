import { Component, OnInit } from '@angular/core';
import { Videogioco } from 'src/app/model/videogioco';
import { VideogiochiService } from 'src/app/service/videogiochi.service';


@Component({
  selector: 'app-lista-videogames',
  templateUrl: './lista-videogames.component.html',
  styleUrls: ['./lista-videogames.component.css']
})
export class ListaVideogamesComponent implements OnInit {
  videogiochi!: Videogioco[];

  constructor (private videogiochiService: VideogiochiService){}

  ngOnInit(): void {
    this.videogiochiService.getVideogiochi().subscribe((videogiochi:Videogioco[])=>{
      this.videogiochi=videogiochi;
    })
  }

  onClickElimina(_id:string){
    this.videogiochiService.deleteVideogioco(_id);
  }

}

