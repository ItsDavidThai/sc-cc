import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
// declare var $:any
@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.css']
})
export class ProductFiltersComponent implements OnInit {
  @Output() sortChoosen: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();
  @Output() filterChoosen: EventEmitter<any> = new EventEmitter<any>();
  private min = 0
  private max = 100

  constructor() { }

  ngOnInit() {
    // $('select').material_select();
  }

  onChooseSort(sortOption) {
    console.log(sortOption)
    this.sortChoosen.emit([sortOption.target.value, sortOption.target.checked])
  }
  onMinPriceChange(min) {
    this.min = min
    console.log(this.min)
    this.filterChoosen.emit({minPrice: min, maxPrice: this.max})
  }
  onMaxPriceChange(max) {
    this.max = max
    console.log(this.max)
    this.filterChoosen.emit({minPrice: this.min, maxPrice: max})
  }
}
