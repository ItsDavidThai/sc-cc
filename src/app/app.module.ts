/*
  Angular Imports
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
/*
  Component Imports
*/
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApiRequestsService } from './services/api-requests.service';
/*
  Product Feed
*/
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { ProductFiltersComponent } from './home/product-feed/product-filters/product-filters.component';
import { ProductFeedComponent } from './home/product-feed/product-feed.component';
import { ProductItemComponent } from './home/product-feed/product-item/product-item.component'
/*
  this acts as a map to all our files and all components and modules must be listed here
  angular cli automatically adds components but services must be added manually
*/
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductFiltersComponent,
    ProductFeedComponent,
    NavBarComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{path:'', component: HomeComponent}]),
  ],
  providers: [ApiRequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
