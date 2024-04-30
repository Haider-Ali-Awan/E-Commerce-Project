import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/all.service';

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.component.html',
  styleUrls: ['./modal-search.component.css']
})
export class ModalSearchComponent implements OnInit {

  products: any[] = []; // define the products array
  filteredProducts: any[] = []; // Define the filteredProducts array
  searchTerm: string = ''; // Define the searchTerm variable

  constructor(private productService: AllService) { }


  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data: any) => {
        if (data && Array.isArray(data.products)) {
          this.products = data.products;
          this.filteredProducts = this.products; // Initialize filteredProducts with all products
          console.log(this.products);
        } else {
          console.error('Error: Expected an array of products but received:', data);
        }
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }



  searchProducts(): void {
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      product.category.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


 
}
