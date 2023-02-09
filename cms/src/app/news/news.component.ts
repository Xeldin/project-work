import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { news } from './news.module';
import { NewsService } from './service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  dati$!: Observable<news[]>;
  newNews = '';

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.dati$ = this.newsService.getNews();
  }

  onAddNews() {
    const newNews = {
      news: this.newNews,
      completed: false,
    };
    this.newsService.AddNews(newNews).subscribe(() => {
      this.dati$ = this.newsService.getNews();
    });
  }
  onClickElimina(id: string) {
    this.newsService.deleteNews(id).subscribe(() => {
      this.dati$ = this.newsService.getNews();
    });
  }
}
