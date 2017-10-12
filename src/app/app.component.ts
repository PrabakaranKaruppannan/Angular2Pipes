import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 Pipes';
  name = 'praba';
  birthdate = new Date(1988, 3, 15);
  ages = [21, 30, 45, 60];
  addAge(age) {
    this.ages.push(age);
  }
}
