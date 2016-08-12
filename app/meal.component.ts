import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <tr><td>{{ meal.name }}</td>
    <td>{{ meal.notes }}</td>
    <td>{{ meal.calories }}</td></tr>
  `
})
export class MealComponent {
  public meal: Meal;
}
