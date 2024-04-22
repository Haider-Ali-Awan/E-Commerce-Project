import { Component, Input, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { AllService } from 'src/app/all.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm! : FormGroup;

  constructor(private fb : FormBuilder ,private serviceLogin : AllService, private router : Router ,private authService: AuthServiceService) { 
    
  }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onSubmit() {
    const username = "kminchelle";
    const password = "0lelplR";
    this.authService.login(username, password).subscribe(
      (response) => {
        console.log("Login successful:", response);
        this.authService.saveToken(response.token); // Save token to localStorage
        
        // Redirect user to the /home route
        this.router.navigate(['/cart']);
      },
      (error) => {
        console.error("Login error:", error);
        // Display error message or perform other actions
      }
    );
  }

  logout(): void {
    localStorage.removeItem('authToken');
     
        // Redirect user to the /home route
        this.router.navigate(['/cart']);
  }


  @Input() isLoggedIn(): boolean {
    return this.authService.isLoggedIn(); // Check if user is logged in
  }
  
  

}
