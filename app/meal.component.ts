import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div>
    <h1>{{ meal.food }}</h1>
    <h2>Notes: {{ meal.notes }}</h2>
    <h3>Calories: {{ meal.calories }}</h3>
    </div>
  `
})
export class MealComponent {
  public meal: Meal;
}
