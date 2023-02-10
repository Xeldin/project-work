import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recensione } from 'src/app/model/recensione';

@Injectable({ providedIn: 'root'})
export class RecensioniService {
	private apiUrl = 'https://project-works-rest-api.onrender.com/api/v1/GROUP-IV/review'

	constructor(private http: HttpClient) {}

	getRecensioni(): Observable<Recensione[]> {
		return this.http.get<Recensione[]>(this.apiUrl);
	}

	getRecensione(id: string): Observable<Recensione> {
		return this.http.get<Recensione>(this.apiUrl + '/' + id);
	}

	createRecensione(recensione: Recensione): Observable<Recensione> {
		return this.http.post<Recensione>(this.apiUrl, recensione);
	}

	updateRecensione(id: string, recensione: Recensione): Observable<Recensione> {
		return this.http.put<Recensione>(this.apiUrl + '/' + id, recensione);
	}

	deleteRecensione(id: string): Observable<void> {
		return this.http.delete<void>(this.apiUrl + '/' + id);
	}
}