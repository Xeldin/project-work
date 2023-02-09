import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categorie!: any[]
  constructor (private categorie : CategorieService) {}

  ngOnInit(): void {
    this.categorie = this.categorie.getCategorie()
  }

  Elimina(id: string) {
    this.categorie.deleteCategoria(id)
  }


}


