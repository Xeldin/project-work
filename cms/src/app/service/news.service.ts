import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/model/news';

@Injectable({ providedIn: 'root'})
export class NewsService {
	private apiUrl = 'https://project-works-rest-api.onrender.com/api/v1/GROUP-IV/news'

	constructor(private http: HttpClient) {}

	getAllNews(): Observable<News[]> {
		return this.http.get<News[]>(this.apiUrl);
	}

	getNews(id: string): Observable<News> {
		return this.http.get<News>(this.apiUrl + '/' + id);
	}

	createNews(news: News): Observable<News> {
		return this.http.post<News>(this.apiUrl, news);
	}

	updateNews(id: string, news: News): Observable<News> {
		return this.http.put<News>(this.apiUrl + '/' + id, news);
	}

	deleteNews(id: string): Observable<void> {
		return this.http.delete<void>(this.apiUrl + '/' + id);
	}
}