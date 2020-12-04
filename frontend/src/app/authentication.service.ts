import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  loginUser(userCredentials): Observable<any>{
    return this.http.post<any>(`${this.url}/login-user`, userCredentials);
  }

  addLoginUser(data): Observable<any> {
    return this.http.post<any>(`${this.url}/login`,data );
  }
}
