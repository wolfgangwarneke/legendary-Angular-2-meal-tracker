import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <h1>Food: {{ meal.food }}</h1>
    <h2>Notes: {{ meal.notes }}</h2>
    <h3>Calories: {{ meal.calories }}</h3>
  `
})
export class MealComponent {
  public meal: Meal;
}
