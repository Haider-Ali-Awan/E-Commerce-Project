import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/admin/login/login.component';

import { HomeComponent } from './Pages/home/home.component';
import { CheckOutComponent } from './Pages/admin/check-out/check-out.component';
import { CartComponent } from './Pages/admin/cart/cart.component';
import { ProfileUserComponent } from './Pages/admin/profile-user/profile-user.component';
import { AuthGuardService } from './auth.guard';
import { ShopComponent } from './Pages/admin/shop/shop.component';
import { ShopDeteilsComponent } from './Pages/admin/shop-deteils/shop-deteils.component';
import { ContactUsComponent } from './Pages/admin/contact-us/contact-us.component';
import { DummyApiComponent } from './Pages/admin/dummy-api-messgae/dummy-api.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },

  {

    path:'home',
    component:HomeComponent,
  },

  {

    path:'login',
    component:LoginComponent,
  },


  {

    path:'shopDetails',
    component:ShopDeteilsComponent,
  },


  {

    path: 'dummyCheckoutMessage',
    component:DummyApiComponent,
  },

  {

    path:'contactUs',
    component:ContactUsComponent,
  },


{
  path:'shop',
  component:ShopComponent,
},

   { path: 'checkOut', component: CheckOutComponent, canActivate: [AuthGuardService] },


  {
    path: "cart",
    component:CartComponent,
  },

  

  { path: 'profile', component: ProfileUserComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '/login' } // Handle invalid routes

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
