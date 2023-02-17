import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/model/categoria';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-lista-categorie',
  templateUrl: './lista-categorie.component.html',
  styleUrls: ['./lista-categorie.component.css']
})
export class ListaCategorieComponent implements OnInit{
categories$!:Observable<Categoria[]>;

constructor(private categorieService: CategorieService){}

ngOnInit(): void {
  this.categories$=this.categorieService.getCategorie();
}

onClickElimina(_id:string){
  this.categorieService.deleteCategoria(_id).subscribe(()=>{
    this.categories$=this.categorieService.getCategorie();
  });
}
}
