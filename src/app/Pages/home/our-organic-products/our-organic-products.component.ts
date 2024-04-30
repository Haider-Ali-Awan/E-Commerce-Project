import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/all.service';

@Component({
  selector: 'app-our-organic-products',
  templateUrl: './our-organic-products.component.html',
  styleUrls: ['./our-organic-products.component.css']
})
export class OurOrganicProductsComponent implements OnInit  {

  products: any[] = []; // define the products array
  filteredProducts: any[] = []; // Define the filteredProducts array
  searchTerm: string = ''; // Define the searchTerm variable
  activeCategory: string = 'All'; // Track the active category, initialized to 'All'


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



  filterProductsByCategory(category: string): void {
    this.activeCategory = category; // Update the active category
    if (category === 'All') {
      this.filteredProducts = this.products; // If 'All' category selected, show all products
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.category.toLowerCase().includes(category.toLowerCase())
      ); // Filter products by the selected category
    }
  }

  searchProducts(): void {
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      product.category.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
  





