import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authentication/login/login.component';
import { RegistrationComponent } from './Authentication/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { ProductDescriptionComponent } from './Pages/product-description/product-description.component';
import { ProductsComponent } from './Pages/products/products.component';
import { AddtoCartComponent } from './Pages/addto-cart/addto-cart.component';
import { OrderPageComponent } from './Pages/order-page/order-page.component';

const routes: Routes = [
  {path :"login",component:LoginComponent},
  {path :"register", component:RegistrationComponent},
  {path :"" , component:HomeComponent},
  {path :"car", component:CarouselComponent},
  {path :"profile", component:ProfileComponent},
  {path :"product/:category", component:ProductsComponent},
  {path :"individualPro/:productId", component:ProductDescriptionComponent},
  {path : "product" , component:ProductsComponent},
  {path :"cart",component: AddtoCartComponent},
  {path :"order",component:OrderPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
