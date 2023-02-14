import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Videogioco } from 'src/app/model/videogioco';

@Injectable({ providedIn: 'root'})
export class VideogiochiService {
	private apiUrl = 'https://project-works-rest-api.onrender.com/api/v1/GROUP-IV/videogame'

	constructor(private http: HttpClient) {}

	getVideogiochi(): Observable<Videogioco[]> {
		return this.http.get<Videogioco[]>(this.apiUrl);
	}

	getVideogioco(_id: string): Observable<Videogioco> {
		return this.http.get<Videogioco>(this.apiUrl + '/' + _id);
	}

	createVideogioco(videogioco: Omit<Videogioco, "_id">): Observable<Videogioco> {
		return this.http.post<Videogioco>(this.apiUrl, videogioco);
	}

	updateVideogioco(_id: string, videogioco: Omit<Videogioco, "_id">): Observable<Videogioco> {
		return this.http.put<Videogioco>(this.apiUrl + '/' + _id, videogioco);
	}

	deleteVideogioco(_id: string): Observable<void> {
		return this.http.delete<void>(this.apiUrl + '/' + _id);
	}
}