import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/all.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit  {

  products: any[] = []; // define the products array
  filteredProducts: any[] = []; // Define the filteredProducts array
  searchTerm: string = ''; // Define the searchTerm variable
  activeCategory: string = 'All'; // Track the active category, initialized to 'All'
   // Other existing properties...
   currentPage: number = 1; // Track current page
   itemsPerPage: number = 6; // Items per page


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
    this.currentPage = 1; // Reset current page to 1
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


  totalPages(): number[] {
    const totalProducts = this.filteredProducts.length;
    const totalPages = Math.ceil(totalProducts / this.itemsPerPage);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }



  scrollToTarget() {
    const element = document.getElementById('scrollTarget');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


}
