import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/model/categoria';

@Injectable({ providedIn: 'root'})
export class CategorieService {
	private apiUrl = 'https://project-works-rest-api.onrender.com/api/v1/GROUP-IV/category'

	constructor(private http: HttpClient) {}

	getCategorie(): Observable<Categoria[]> {
		return this.http.get<Categoria[]>(this.apiUrl);
	}

	getCategoria(id: string): Observable<Categoria> {
		return this.http.get<Categoria>(this.apiUrl + '/' + id);
	}

	createCategoria(categoria: Omit<Categoria, "id">): Observable<Categoria> {
		return this.http.post<Categoria>(this.apiUrl, categoria);
	}

	updateCategoria(id: string, categoria: Omit<Categoria, "id">): Observable<Categoria> {
		return this.http.put<Categoria>(this.apiUrl + '/' + id, categoria);
	}

	deleteCategoria(id: string): Observable<void> {
		return this.http.delete<void>(this.apiUrl + '/' + id);
	}
}