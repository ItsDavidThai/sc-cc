import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from '../services/api-requests.service'
/*
  this component is the parent component/container for the filter component
  and product item component
  product-feed.component
    - product-filters.component
    - product-item.component
*/
@Component({
  selector: 'app-product-feed',
  templateUrl: './product-feed.component.html',
  styleUrls: ['./product-feed.component.css']
})
export class ProductFeedComponent implements OnInit {
  // initial list of products
  private products: Array<Object>
  // list of products that are filtered
  private displayedProducts: Array<Object> = []
  // object to hold sort options, with defaults set
  private sortOptions = {
    // this categories object acts as a switch for
    // the different types of sorts
    categories: {
      Price: 'defaultPriceInCents',
      Name: 'name',
      Date: 'createdAt'
    },
    sortDirection:'desc',
    selectedCategory: 'defaultPriceInCents'
  }
  // object to hold filtered options, with defaults set
  private filterOptions = {
    min: 0,
    max: Infinity,
    phrase: ''
  }
  // declare injected services to be used
  constructor(private apiRequestsService: ApiRequestsService) {}
  /*
    ngOnInit runs with the component is started and will call get products
    to populate the products and dislayedProducts arrays
  */
  ngOnInit() {
    this.getProducts()
  }
  /*
    uses the apiRequestsService method to make a http request and retrieve product
    data
  */
  getProducts() {
    // keep a reference to the current context
    var that = this
    // because of the async nature of http requests we subscribe to the observable
    // and when the request is done we set the products/displayedProducts arrays to the result
    this.apiRequestsService.getJSONData().subscribe(function(result){
      that.products = result.products
      that.displayedProducts = result.products
    })
  }
  /*
    this function is called when the sortChoosen Event Emitter is triggered
    and will sort the displayedProducts list
    value - [sortType, sortDirection(eg.ASC/DESC)]
  */
  sortFeed(value){
    // keep a reference to the current context
    var that = this
    // set component's sortOptions with the value input
    this.sortOptions.selectedCategory = this.sortOptions.categories[value[0]]
    this.sortOptions.sortDirection = value[1]
    // depending on the sort direction we will use a native sort function to sort from
    // greatest -> smallest(DESC) or smallest -> greatest(ASC) along with the current category
    if(this.sortOptions.sortDirection === 'asc') {
      this.displayedProducts.sort(function(a, b) {
        return a[that.sortOptions.selectedCategory] > b[that.sortOptions.selectedCategory]
      })
    } else if ( this.sortOptions.sortDirection === 'desc') {
      this.displayedProducts.sort(function(a, b) {
        return a[that.sortOptions.selectedCategory] < b[that.sortOptions.selectedCategory]
      })
    }
  }
  /*
    will filter the displayedProducts Array with the phrase that the user enters
    this function is triggered by phraseFilterChanged Event Emitter
    value - {phrase: 'example'}phrase that user entered
  */
  filterByPhrase(value) {
    // keep a reference to the current context
    var that = this
    // set components phrase property to the input
    this.filterOptions.phrase = value.phrase
    // if the user has not entered display all products
    if (this.filterOptions.phrase !== '') {
      // native javascript filter function to filter
      this.displayedProducts = this.products.filter(function(product) {
        // lowercased both the phrase and name to be case insensitive
        var lowercasePhrase = that.filterOptions.phrase.toLowerCase()
        var lowercaseName = product.name.toLowerCase()
        // includes is a native javascript function that checks if the phrase
        // has any matches with the product name
        return (lowercaseName.includes(lowercasePhrase))
      })
    }
  }
  /*
    will filter the displayedProducts Array with the min and max price the user enters
    this function is triggered by priceFilterChanged Event Emitter
    value - {minPrice: # , maxPrice: #}
  */
  filterByPrice(value) {
    // keep a reference to the current context
    var that = this
    // set components min/max properties
    this.filterOptions.min = value.minPrice
    this.filterOptions.max = value.maxPrice
    // native javascript filter function
    this.displayedProducts = this.products.filter(function(product){
      var min = that.filterOptions.min
      var max = that.filterOptions.max
      // if the current products price is greater or equal than the min and less or equal than the max
      // add to displayProducts list
      return (product.priceInDollars >= min && product.priceInDollars <= max)
    })
  }

}
