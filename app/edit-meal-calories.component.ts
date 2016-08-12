import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-calories',
  inputs: ['meal'],
  template: `
  <input [(ngModel)]="meal.calories"/>
  `
})
export class EditMealCaloriesComponent {
  public meal: Meal;
}
