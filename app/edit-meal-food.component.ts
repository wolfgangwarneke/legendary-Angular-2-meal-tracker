import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-food',
  inputs: ['meal'],
  template: `
  <h3>Edit {{ meal.food }}</h3>
  `
})
export class EditMealFoodComponent {
  public meal: Meal;
}
