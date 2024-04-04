import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/all.service';

@Component({
  selector: 'app-our-organic-products',
  templateUrl: './our-organic-products.component.html',
  styleUrls: ['./our-organic-products.component.css']
})
export class OurOrganicProductsComponent implements OnInit  {

  products: any[] = []; // Initialize products as an empty array
  // searchQuery: string = ''; // Property to store search query
  // searchResults: any[] = []; // Property to store search results
  // errorMessage: string = ''; // Property to store error message
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

  

  // onSearch() {
  //   this.searchProducts(this.searchQuery); // Call searchProducts with the current search query
  // }

  // searchProducts(query: string) {
  //   this.productService.searchProducts(query).subscribe(
  //     (response) => {
  //       if (response.products.length === 0) {
  //         this.errorMessage = 'No products found.'; // Display error message if no products found
  //       } else {
  //         this.searchResults = response.products; // Store the search results
  //         console.log(this.searchResults); // Logging the response for demonstration
  //         this.errorMessage = ''; // Clear error message if products found
  //         // Handle response as needed
  //       }
  //     },
  //     (error) => {
  //       console.error('Error fetching search results:', error);
  //       this.errorMessage = 'Error fetching search results. Please try again later.'; // Display error message
  //     }
  //   );
  // }

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
  



  // Search function to filter products based on search term


