import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  productsUrl = 'https://dummyjson.com/products';
  private apiUrl = 'https://dummyjson.com/products/search?q='; // Define API URL here
  private UserCart = "https://dummyjson.com/carts/user/15"
  private reviewUrl = 'http://localhost:3000/posts';





  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.productsUrl);
  }


  searchProducts(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${query}`);
  }
  
  // Method to fetch cart data
  getCartData(): Observable<any> {
    return this.http.get<any>(this.UserCart);
  }
 

  postComment(commentData: any): Observable<any> {
    return this.http.post<any>(this.reviewUrl, commentData);
  }
  


  
  
}
