import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'my-app',
  directives: [],
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <h3>{{ meal.food }}<h3>
    <div>
  `
})
export class AppComponent {
  public meal: Meal;
  constructor(){
    this.meal = new Meal("hamburger", "so good", 900, 0);
  }
}

export class Meal {
  constructor(public food: string, public notes: string, public calories: number, public id: number) {

  }
}
