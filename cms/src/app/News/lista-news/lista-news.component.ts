import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/model/news';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-lista-news',
  templateUrl: './lista-news.component.html',
  styleUrls: ['./lista-news.component.css'],
})
export class ListaNewsComponent implements OnInit {
  news!: News[];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe((news: News[]) => {
      this.news = news;
    });
  }

  onClickElimina(_id: string) {
    this.newsService.deleteNews(_id);
  }
}
