import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/all.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartData: any[] = [];

  constructor(private apiService: AllService) { }

  ngOnInit(): void {
   
  }

}
