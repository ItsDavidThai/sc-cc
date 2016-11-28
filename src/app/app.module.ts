import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApiRequestsService } from './services/api-requests.service';
import { ProductFiltersComponent } from './product-filters/product-filters.component';
import { ProductFeedComponent } from './product-feed/product-feed.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductItemComponent } from './product-item/product-item.component'

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
