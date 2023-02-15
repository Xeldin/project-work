import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Videogame } from '../Videogames';

@Injectable({
  providedIn: 'root',
})
export class VideogamesService {
  private apiUrl =
    'https://project-works-rest-api.onrender.com/api/v1/GROUP-IV/videogame';

  constructor(private http: HttpClient) {}

  getVideogame(): Observable<Videogame[]> {
    return this.http.get<Videogame[]>(this.apiUrl);
  }
}
