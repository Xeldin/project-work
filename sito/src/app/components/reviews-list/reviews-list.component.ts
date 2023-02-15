import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/reviews.service';
import { Review } from '../../Reviews';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css'],
})
export class ReviewsListComponent implements OnInit {
  review: Review[] = [];

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.reviewService
      .getReview()
      .subscribe((review) => (this.review = review));
  }

  color(score: number) {
    let colore: string;
    if (score <= 3) {
      return (colore = 'red');
    } else if (score >= 7) {
      return (colore = 'green');
    } else {
      return (colore = 'yellow');
    }
  }
}
