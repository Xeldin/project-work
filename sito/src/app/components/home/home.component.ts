import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../News';
import { ReviewService } from '../../services/reviews.service';
import { Review } from '../../Reviews';
import { VideogamesService } from '../../services/videogames.service';
import { Videogame } from '../../Videogames';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  news: News[] = [];
  review: Review[] = [];
  videogame: Videogame[] = [];

  constructor(
    private newsService: NewsService,
    private reviewService: ReviewService,
    private videogamesService: VideogamesService
  ) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((news) => (this.news = news));
    this.reviewService
      .getReview()
      .subscribe((review) => (this.review = review));
    this.videogamesService
      .getVideogame()
      .subscribe((videogame) => (this.videogame = videogame));
  }
}
