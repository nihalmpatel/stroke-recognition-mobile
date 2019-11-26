import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  predictStroke(body) {
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post(environment.apiURL + '/stroke/predict', body, { headers: headers });
  }
}
