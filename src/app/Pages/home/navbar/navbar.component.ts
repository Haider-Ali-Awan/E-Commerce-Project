import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  

  constructor(private authService: AuthServiceService,  private router : Router) {}


   // Function to check if the current route is active
   isActive(route: string): boolean {
    return this.router.url === route;
  }

  // Function to check if user is logged in
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn(); // Check if user is logged in
  }

  logout(): void {
    localStorage.removeItem('authToken');
     
        // Redirect user to the /home route
        this.router.navigate(['/cart']);
  }

}
