import { Observable } from 'rxjs';
import { RecensioniService } from '../../service/recensioni.service';
import { Recensione } from '../../model/recensione';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-recensioni',
  templateUrl: './lista-recensioni.component.html',
  styleUrls: ['./lista-recensioni.component.css'],
})
export class ListaRecensioniComponent implements OnInit {
  recensioni$!: Observable<Recensione[]>;
  constructor(private recensioniService: RecensioniService) { }
  
  ngOnInit(): void {
    this.recensioni$=this.recensioniService.getRecensioni();
    }

  onClickElimina(_id: string) {
    this.recensioniService.deleteRecensione(_id).subscribe(() => {
      this.recensioni$ = this.recensioniService.getRecensioni();
    });
  }
  }



