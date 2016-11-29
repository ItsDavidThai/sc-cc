import { Component } from '@angular/core';
/*
  this component is the entry point of the application
  and will use angular router to route to the root component
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
