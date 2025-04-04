import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = environment.apiUrl;
  private backendApiUrl = environment.backendApiUrl;

  constructor(private http: HttpClient) { }

  getAllCountryFlags(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getAllCountries(): Observable<any> {
    return this.http.get<any>(this.backendApiUrl);
  }

  getCountryDetailsByName(name : string): Observable<any> {
    return this.http.get<any>(this.backendApiUrl + '/' + name);
  }
}
