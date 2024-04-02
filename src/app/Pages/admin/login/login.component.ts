import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthServiceService) { }

  login(): void {
    const username = "kminchelle";
    const password = "0lelplR";
    this.authService.login(username, password).subscribe(
      (response) => {
        console.log("Login successful:", response);
        this.authService.saveToken(response.token); // Save token to localStorage
        // Redirect user or perform other actions
      },
      (error) => {
        console.error("Login error:", error);
        // Display error message or perform other actions
      }
    );
  }


  logout(): void {
    localStorage.removeItem('authToken');
  }
  
  

}
