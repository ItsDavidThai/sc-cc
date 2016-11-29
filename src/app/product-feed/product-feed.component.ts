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
    sortDirection:'desc',
    selectedCategory: 'defaultPriceInCents'
  }
  private filterOptions = {
    min: 0,
    max: Infinity,
    phrase: ''
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
    this.sortOptions.selectedCategory =  this.sortOptions.categories[value[0]]
    this.sortOptions.sortDirection = value[1]
    console.log(this.sortOptions.sortDirection === 'asc', this.sortOptions.sortDirection, 'asc')
    console.log(this.sortOptions.sortDirection === 'desc', this.sortOptions.sortDirection, 'desc')
        console.log(that.displayedProducts)
    if(this.sortOptions.sortDirection === 'asc') {
      console.log(this.sortOptions)
      this.displayedProducts.sort(function(a, b) {
        return a[that.sortOptions.selectedCategory] > b[that.sortOptions.selectedCategory]
      })
    } else if ( this.sortOptions.sortDirection === 'desc') {
      this.displayedProducts.sort(function(a, b) {
        return a[that.sortOptions.selectedCategory] < b[that.sortOptions.selectedCategory]
      })
    }
    console.log(that.displayedProducts)
  }
  filterFeed(value){
    this.filterByPrice(value)
    this.filterByPhrase(value)
  }
  filterByPhrase(value) {
    var that = this
    this.filterOptions.phrase = value.phrase
    if (this.filterOptions.phrase !== '') {
      this.displayedProducts = this.products.filter(function(product) {
        var lowercasePhrase = that.filterOptions.phrase.toLowerCase()
        var lowercaseName = product.name.toLowerCase()
        return (lowercaseName.includes(lowercasePhrase))
      })
    }
  }
  filterByPrice(value) {
    var that = this
    this.filterOptions.min = value.minPrice
    this.filterOptions.max = value.maxPrice

    this.displayedProducts = this.products.filter(function(product){
      var min = that.filterOptions.min
      var max = that.filterOptions.max
      return (product.priceInDollars >= min && product.priceInDollars <= max)
    })
  }

}
