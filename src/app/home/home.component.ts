import { Component, OnInit } from '@angular/core';
/*
  root component that displays all children components
  home.component
    - nav-bar.component
    - product-feed.component
      - product-filters.component
      - product-item.component
*/
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
