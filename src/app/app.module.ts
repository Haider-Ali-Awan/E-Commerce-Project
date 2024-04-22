import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './Pages/website/cart/cart.component';
import { CategoriesComponent } from './Pages/admin/categories/categories.component';
import { CustomerComponent } from './Pages/admin/customer/customer.component';
import { LayoutComponent } from './Pages/admin/layout/layout.component';
import { LoginComponent } from './Pages/admin/login/login.component';
import { OrderComponent } from './Pages/admin/order/order.component';
import { ProductsComponent } from './Pages/admin/products/products.component';
import { LandingComponent } from './Pages/home/landing/landing.component';
import { CategoryProductsComponent } from './Pages/website/category-products/category-products.component';
import { CustomerCartComponent } from './Pages/website/customer-cart/customer-cart.component';
import { CheckOutComponent } from './Pages/website/check-out/check-out.component';
import { CustomerOrdersComponent } from './Pages/website/customer-orders/customer-orders.component';
import { NavbarComponent } from './Pages/home/navbar/navbar.component';
import { ModalSearchComponent } from './Pages/home/modal-search/modal-search.component';
import { HeroComponent } from './Pages/home/hero/hero.component';
import { FeaturesComponent } from './Pages/home/features/features.component';
import { OurOrganicProductsComponent } from './Pages/home/our-organic-products/our-organic-products.component';
import { HomeComponent } from './Pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VegitableShopComponent } from './Pages/home/vegitable-shop/vegitable-shop.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CategoriesComponent,
    CustomerComponent,
    LayoutComponent,
    LoginComponent,
    OrderComponent,
    ProductsComponent,
    LandingComponent,
    CategoryProductsComponent,
    CustomerCartComponent,
    CheckOutComponent,
    CustomerOrdersComponent,
    NavbarComponent,
    ModalSearchComponent,
    HeroComponent,
    FeaturesComponent,
    OurOrganicProductsComponent,
    HomeComponent,
    VegitableShopComponent,
    ViewCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,// Add FormsModule here
    HttpClientModule, BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
