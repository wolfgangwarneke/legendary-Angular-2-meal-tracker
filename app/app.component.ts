import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1 id="logo">Meal Tracker</h1><hr>
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-list>
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
    console.log('in app component', clickedMeal);
  }
}
