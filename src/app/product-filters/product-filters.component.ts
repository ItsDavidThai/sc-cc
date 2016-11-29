import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// declare var $:any
@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.css']
})
export class ProductFiltersComponent implements OnInit {
  @Output() sortChoosen: EventEmitter<Array> = new EventEmitter<Array>();

  constructor() { }

  ngOnInit() {
    // $('select').material_select();
  }

  onChooseSort(sortOption) {
    console.log(sortOption)
    this.sortChoosen.emit([sortOption.target.value, sortOption.target.checked])
  }

}
