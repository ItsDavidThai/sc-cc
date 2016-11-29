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
  private phrase = ''
  private sortValue = 'Price'
  private sortDirection = 'desc'

  constructor() { }

  ngOnInit() {
    // $('select').material_select();
  }

  onChooseSort(sortOption) {
    console.log(sortOption)
    this.sortValue = sortOption.target.value === 'on' ? this.sortValue : sortOption.target.value;
    this.sortDirection = sortOption.target.checked ? 'asc' : 'desc'
    console.log(this.sortValue,'filter')
    this.sortChoosen.emit([this.sortValue, this.sortDirection])
  }

  onFiltersChange(event) {
    console.log(event)
    this.filterChoosen.emit({minPrice: this.min, maxPrice: this.max, phrase: this.phrase})
  }
}
