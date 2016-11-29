import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from '../services/api-requests.service'

@Component({
  selector: 'app-product-feed',
  templateUrl: './product-feed.component.html',
  styleUrls: ['./product-feed.component.css']
})
export class ProductFeedComponent implements OnInit {
  private products: Array<Object>
  private sortOptions = {
    categories: {
      Price: 'defaultPriceInCents',
      Name: 'name',
      Date: 'createdAt'
    },
    direction:'asc',
    selectedCategory: 'defaultPriceInCents'
  }
  constructor(private apiRequestsService: ApiRequestsService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    var that = this
    this.apiRequestsService.getJSONData().subscribe(function(result){
      that.products = result.products
      console.log(that.products)
    })
  }
  sortFeed(value){
    var that = this
    // passed in value can be undefined, if undefined set to valid input
    value[1] = typeof value[1] === 'undefined' ? this.sortOptions.direction : value[1]
    var direction = value[1] ? 'asc' : 'desc'
    this.sortOptions.selectedCategory =  this.sortOptions.categories[value[0]] || this.sortOptions.selectedCategory
    this.sortOptions.direction = direction

    if(this.sortOptions.direction === 'asc') {
      this.products.sort(function(a, b) {
        return a[that.sortOptions.selectedCategory] > b[that.sortOptions.selectedCategory]
      })
    } else if ( this.sortOptions.direction === 'desc') {
      this.products.sort(function(a, b) {
        return a[that.sortOptions.selectedCategory] < b[that.sortOptions.selectedCategory]
      })
    }
  }
  filterFeed(){

  }

}
