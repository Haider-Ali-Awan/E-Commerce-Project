import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/admin/login/login.component';

import { HomeComponent } from './Pages/home/home.component';
import { CheckOutComponent } from './Pages/website/check-out/check-out.component';
import { CartComponent } from './Pages/website/cart/cart.component';

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
    path: "checkOut",
    component:CheckOutComponent,
  },

  {
    path: "cart",
    component:CartComponent,
  },

  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
