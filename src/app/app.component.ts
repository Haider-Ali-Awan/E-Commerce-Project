import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // showHeroBanner: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  
  }

  isHomeRoute(): boolean {
    return this.router.url === '/home';
  }
}
