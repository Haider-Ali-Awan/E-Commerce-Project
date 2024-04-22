import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/all.service';
import { AuthServiceService } from 'src/app/auth-service.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartData: any; // Variable to store cart data
  carts: any [];

  constructor(private cartService: AllService, private authService: AuthServiceService) { 

    this.carts = [{
      products: [
        { title: 'Product 1', price: 999, quantity: 3, thumbnail: 'product1.jpg', isHidden: false },
        { title: 'Product 2', price: 1249, quantity: 2, thumbnail: 'product2.jpg', isHidden: false },
      ]
    }];
  }
  isLoggedIn: boolean = false; // Flag to track login status


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
    } else {
      this.cartData.carts[0].products[index].quantity = 0;
    }
  }
  

  hideRow(index: number): void {
    this.cartData.carts[0].products[index].isHidden = true;
  }

  calculateSubtotal(): number {
    let subtotal = 0;
    this.cartData.carts[0].products.forEach((product: { price: number; quantity: number; }) => {
      subtotal += product.price * product.quantity;
    });
    return subtotal;
  }

  calculateTotal(): number {
    return this.calculateSubtotal() + 3; // Flat rate shipping
  }
}
