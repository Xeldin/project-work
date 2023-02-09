import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recensione } from 'src/app/model/recensione';

@Injectable({ providedIn: 'root'})
export class RecensioneService {
	private apiUrl = 'https://project-works-rest-api.onrender.com/api/v1/GROUP-IV/review'

	constructor(private http: HttpClient) {}

	getRecensioni(): Observable<Recensione[]> {
		return this.http.get<Recensione[]>(this.apiUrl);
	}

	getRecensione(id: string): Observable<Recensione> {
		return this.http.get<Recensione>(this.apiUrl + '/' + id);
	}
}