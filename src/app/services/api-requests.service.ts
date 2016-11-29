import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class ApiRequestsService {

  constructor(private http :Http) { }

  getJSONData() {
    return this.http.get('http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js').map(function(result){
      var result = result.json()
      result.products.map(function(product){
        product.mainImage.ref = 'http:'+ product.mainImage.ref
        product.priceInDollars = Number((product.defaultPriceInCents / 60).toFixed(2))
      })
      return result
    })
  }


}
