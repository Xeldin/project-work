import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/model/news';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-lista-news',
  templateUrl: './lista-news.component.html',
  styleUrls: ['./lista-news.component.css']
})
export class ListaNewsComponent implements OnInit{
  news$!: Observable<News[]>;

  constructor (private newsService: NewsService){}

  ngOnInit(): void {
    this.news$=this.newsService.getAllNews();
  }

  onClickElimina(_id:string){
    this.newsService.deleteNews(_id).subscribe(()=>{
      this.news$=this.newsService.getAllNews();
    });
  }
  
}
