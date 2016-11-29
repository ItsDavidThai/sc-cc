import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from '../services/api-requests.service'

@Component({
  selector: 'app-product-feed',
  templateUrl: './product-feed.component.html',
  styleUrls: ['./product-feed.component.css']
})
export class ProductFeedComponent implements OnInit {
  private products: Array<Object>
  private displayedProducts: Array<Object>
  private sortOptions = {
    categories: {
      Price: 'defaultPriceInCents',
      Name: 'name',
      Date: 'createdAt'
    },
    direction:'asc',
    selectedCategory: 'defaultPriceInCents'
  }
  private filterOptions = {
    min: 0,
    max: Infinity
  }
  constructor(private apiRequestsService: ApiRequestsService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    var that = this
    this.apiRequestsService.getJSONData().subscribe(function(result){
      that.products = result.products
      that.displayedProducts = result.products
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
      this.displayedProducts.sort(function(a, b) {
        return a[that.sortOptions.selectedCategory] < b[that.sortOptions.selectedCategory]
      })
    } else if ( this.sortOptions.direction === 'desc') {
      this.displayedProducts.sort(function(a, b) {
        return a[that.sortOptions.selectedCategory] > b[that.sortOptions.selectedCategory]
      })
    }
  }
  filterFeed(value){
    var that = this
    this.filterOptions.min = value.minPrice
    this.filterOptions.max = value.maxPrice

    this.displayedProducts = this.products.filter(function(product){
      var min = that.filterOptions.min
      var max = that.filterOptions.max
      return (product.priceInDollars >= min && product.priceInDollars <= max)
    })
  }
  filterByWord() {

  }
  filterByPrice() {

  }

}
