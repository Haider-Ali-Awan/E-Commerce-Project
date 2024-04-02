import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllService } from './all.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  userLoginUrl = "https://dummyjson.com/auth/login";

  
  

  constructor(private http: HttpClient) { }


   login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.userLoginUrl, { username, password });
  }

  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }
 
}
