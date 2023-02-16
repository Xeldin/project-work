import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Review } from '../../Reviews';
import { ReviewService } from '../../services/reviews.service';

@Component({
  selector: 'app-reviews-details',
  templateUrl: './reviews-details.component.html',
  styleUrls: ['./reviews-details.component.css'],
})
export class ReviewsDetailsComponent {
  review$!: Observable<Review>;

  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      const _id = params['_id'];
      this.review$ = this.reviewService.getSingleReview(_id);
    });
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
