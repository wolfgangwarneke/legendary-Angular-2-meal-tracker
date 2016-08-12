import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'my-app',
  directives: [],
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <h3 *ngFor="#meal of meals" (click)="mealWasSelected(meal)">{{ meal.food }} had {{ meal.calories }} calories</h3>
    <div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("hamburger", "so good", 900, 0),
      new Meal("cheezeburger", "so so good", 1000, 1),
      new Meal("franks and beans", "yum yum", 1400, 2),
      new Meal("cookies", "om nom nom", 808, 3)
    ]
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}

export class Meal {
  constructor(public food: string, public notes: string, public calories: number, public id: number) {

  }
}
