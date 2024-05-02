import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './Pages/admin/cart/cart.component';
import { LoginComponent } from './Pages/admin/login/login.component';
import { ProductsComponent } from './Pages/admin/products/products.component';
import { LandingComponent } from './Pages/home/landing/landing.component';
import { CheckOutComponent } from './Pages/admin/check-out/check-out.component';
import { NavbarComponent } from './Pages/home/navbar/navbar.component';
import { ModalSearchComponent } from './Pages/home/modal-search/modal-search.component';
import { HeroComponent } from './Pages/home/hero/hero.component';
import { FeaturesComponent } from './Pages/home/features/features.component';
import { OurOrganicProductsComponent } from './Pages/home/our-organic-products/our-organic-products.component';
import { HomeComponent } from './Pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewCartComponent } from './Pages/admin/view-cart/view-cart.component';
import { ProfileUserComponent } from './Pages/admin/profile-user/profile-user.component';
import { ShopComponent } from './Pages/admin/shop/shop.component';
import { ShopDeteilsComponent } from './Pages/admin/shop-deteils/shop-deteils.component';
import { ContactUsComponent } from './Pages/admin/contact-us/contact-us.component';
import { DummyApiComponent } from './Pages/admin/dummy-api-messgae/dummy-api.component';
import { FooterComponent } from './Pages/admin/footer/footer.component';
import { TestimonialComponent } from './Pages/admin/testimonial/testimonial.component';
import { DummyAddToCartMessageComponent } from './Pages/admin/dummy-add-to-cart-message/dummy-add-to-cart-message.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LoginComponent,
    ProductsComponent,
    LandingComponent,
    CheckOutComponent,
    NavbarComponent,
    ModalSearchComponent,
    HeroComponent,
    FeaturesComponent,
    OurOrganicProductsComponent,
    HomeComponent,
    ViewCartComponent,
    ProfileUserComponent,
    ShopComponent,
    ShopDeteilsComponent,
    ContactUsComponent,
    DummyApiComponent,
    FooterComponent,
    TestimonialComponent,
    DummyAddToCartMessageComponent,
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
