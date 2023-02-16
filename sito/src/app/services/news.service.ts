import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../News';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl =
    'https://project-works-rest-api.onrender.com/api/v1/GROUP-IV/news';

  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }

  getSingleNews(_id: string): Observable<News> {
    return this.http.get<News>(this.apiUrl + '/' + [_id]);
  }
}
