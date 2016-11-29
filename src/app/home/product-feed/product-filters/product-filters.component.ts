import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
/*
  this component sorts and filters the feeds product list
*/
@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.css']
})
export class ProductFiltersComponent {
  // @Output allows children -> parent interaction
  // components that have bounded to the event emitters are listening to see when it the even triggers
  @Output() sortChoosen: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();
  @Output() priceFilterChanged: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() phraseFilterChanged: EventEmitter<Object> = new EventEmitter<Object>();
  // sort and filter variables
  private min = 0
  private max = 100
  private phrase = ''
  private sortValue = 'Price'
  private sortDirection = 'desc'

  constructor() {}
  /*
    when the user chooses a sort option this will set the components sort variables to what the user has
    selected and then triggers the sort event emitter.
    sortOption - Event Object that holds the html information when the event is triggered
  */
  onChooseSort(sortOption) {
    // if there is no sort type selected, default input is 'on', to remedy this we use the components default sort type
    this.sortValue = sortOption.target.value === 'on' || sortOption.target.value === '' ? this.sortValue : sortOption.target.value;
    // the html element used for asc/desc is a checked box element and returns true or false.
    // if checked === true that means the user wants to sort by asc
    this.sortDirection = sortOption.target.checked ? 'asc' : 'desc'
    // will emit this event passing in sort option data and components listening will trigger
    this.sortChoosen.emit([this.sortValue, this.sortDirection])
  }
  /*
    when the user inputs a min or max, this will emit that the price filters have changed.
    due to 2 way binding we do not need to manually set the components min/ max variables as they are automatically changed.
  */
  onPriceFilterChange() {
    // will emit this event passing in min/max price data and components listening will trigger
    this.priceFilterChanged.emit({minPrice: this.min, maxPrice: this.max, phrase: this.phrase})
  }
  /*
    when the user inputs a phrase, this will emit that the phrase filter has changed.
    due to 2 way binding we do not need to manually set the components phrase varaible as it is automatically changed.
  */
  onPhraseFilterChange() {
    // will emit this event passing in search phrase data and components listening will trigger
    this.phraseFilterChanged.emit({minPrice: this.min, maxPrice: this.max, phrase: this.phrase})
  }
}
