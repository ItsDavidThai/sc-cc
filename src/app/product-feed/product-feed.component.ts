import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from '../services/api-requests.service'
@Component({
  selector: 'app-product-feed',
  templateUrl: './product-feed.component.html',
  styleUrls: ['./product-feed.component.css']
})
export class ProductFeedComponent implements OnInit {
  private products: Array<Object>
  constructor(private apiRequestsService: ApiRequestsService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    var that = this
    this.apiRequestsService.getJSONData().subscribe(function(result){
      that.products = result.json().products
      console.log(that.products)
    })

  }
}
