import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { News } from '../../News';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css'],
})
export class NewsDetailsComponent {
  news$!: Observable<News>;

  constructor(private newsService: NewsService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      const _id = params['_id'];
      this.news$ = this.newsService.getSingleNews(_id);
    });
  }
}
