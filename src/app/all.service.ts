import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  productsUrl = 'https://dummyjson.com/products';
  private apiUrl = 'https://dummyjson.com/products/search?q='; // Define API URL here




  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.productsUrl);
  }


  searchProducts(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${query}`);
  }
  

 
  


  
  
}
