import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallAPIService {
  
  private apiUrl = "https://pipedream.com/apps/swapi" ;

  constructor( private http:HttpClient) { }

  getCharacters():Observable<any>{
    return this.http.get(`${this.apiUrl}/people/`)
  }

  getCharacterDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/people/${id}`);
  }

  getMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/films/`);
  }

  getSpecies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/species/`);
  }
  getVehicle(): Observable<any> {
    return this.http.get(`${this.apiUrl}/vehicles/`);
  }
  getStarship(): Observable<any> {
    return this.http.get(`${this.apiUrl}/starships/`);
  }

  getCharacterByUrl(url: string): Observable<any> {
    return this.http.get(url);
  }

}
