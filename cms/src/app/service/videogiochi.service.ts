import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Videogioco } from 'src/app/model/videogioco';

@Injectable({ providedIn: 'root'})
export class RecensioneService {
	private apiUrl = 'https://project-works-rest-api.onrender.com/api/v1/GROUP-IV/videogame'

	constructor(private http: HttpClient) {}

	getVideogiochi(): Observable<Videogioco[]> {
		return this.http.get<Videogioco[]>(this.apiUrl);
	}

	getVideogioco(id: string): Observable<Videogioco> {
		return this.http.get<Videogioco>(this.apiUrl + '/' + id);
	}

	createVideogioco(videogioco: Videogioco): Observable<Videogioco> {
		return this.http.post<Videogioco>(this.apiUrl, videogioco);
	}

	updateVideogioco(id: string, videogioco: Videogioco): Observable<Videogioco> {
		return this.http.put<Videogioco>(this.apiUrl + '/' + id, videogioco);
	}

	deleteVideogioco(id: string): Observable<void> {
		return this.http.delete<void>(this.apiUrl + '/' + id);
	}
}