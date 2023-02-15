import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../Reviews';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private apiUrl =
    'https://project-works-rest-api.onrender.com/api/v1/GROUP-IV/review';

  constructor(private http: HttpClient) {}

  getReview(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl);
  }
}
