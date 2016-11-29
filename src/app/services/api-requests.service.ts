import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';
/*
  This service acts as a singleton that can be injected into other components and have their properties and methods used by that component
*/
@Injectable()
export class ApiRequestsService {
  // declare injections here
  constructor(private http :Http) {}

  // http request to api
  getJSONData() {
    // map is used here to project the oberservable into our result object
    return this.http.get('http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js').map(function(result){
      var result = result.json()
      // map is used on the list of products to add http to the image urls and add a price in dollars property
      result.products.map(function(product){
        product.mainImage.ref = 'http:'+ product.mainImage.ref
        product.priceInDollars = Number((product.defaultPriceInCents / 60).toFixed(2))
      })
      return result
    })
  }
}
