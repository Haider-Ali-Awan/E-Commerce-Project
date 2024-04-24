import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/all.service';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartData: any; // Variable to store cart data
  isLoggedIn: boolean = false; // Flag to track login status
  subtotal: number = 0; // Initialize subtotal to 0
  total: number = 0; // Initialize total to 0

  constructor(private cartService: AllService, private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    console.log('Is logged in:', this.isLoggedIn); // Add this line
    this.getCart();
  }

  // Method to fetch cart data
  getCart(): void {
    this.cartService.getCartData().subscribe(
      (data) => {
        this.cartData = data;
        console.log(this.cartData); // For testing purpose
        this.calculateSubtotal(); // Calculate subtotal
        this.calculateTotal(); // Calculate total
      },
      (error) => {
        console.error('Error fetching cart data:', error);
      }
    );
  }

  updateQuantity(index: number, change: number): void {
    const newQuantity = this.cartData.carts[0].products[index].quantity + change;
    if (newQuantity >= 0) {
      this.cartData.carts[0].products[index].quantity = newQuantity;
      this.calculateSubtotal(); // Recalculate subtotal
      this.calculateTotal(); // Recalculate total
    } else {
      this.cartData.carts[0].products[index].quantity = 0;
    }
  }

  hideRow(index: number): void {
    this.cartData.carts[0].products[index].isHidden = true;
    this.calculateSubtotal(); // Recalculate subtotal
    this.calculateTotal(); // Recalculate total
  }

  calculateSubtotal(): void {
    this.subtotal = 0;
    this.cartData.carts[0].products.forEach((product: any) => {
      if (!product.isHidden) {
        this.subtotal += product.price * product.quantity;
      }
    });
  }

  calculateTotal(): void {
    this.total = this.subtotal + 3; // Add flat rate shipping
  }

}
