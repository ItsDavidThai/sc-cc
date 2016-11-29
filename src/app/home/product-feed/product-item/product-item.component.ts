import { Component, OnInit, Input } from '@angular/core';
/*
  this component displays product detail in a card format
*/
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productData: Object
  constructor() { }

  ngOnInit() {

  }

}
