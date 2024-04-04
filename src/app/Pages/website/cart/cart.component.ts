import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/all.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartData: any; // Variable to store cart data

  constructor(private cartService: AllService) { }

  ngOnInit(): void {
    this.getCart();
  }

  // Method to fetch cart data
  getCart(): void {
    this.cartService.getCartData().subscribe(
      (data) => {
        this.cartData = data;
        console.log(this.cartData); // For testing purpose
      },
      (error) => {
        console.error('Error fetching cart data:', error);
      }
    );
  }
}
