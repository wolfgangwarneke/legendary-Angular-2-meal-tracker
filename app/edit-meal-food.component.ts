import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-food',
  inputs: ['meal'],
  template: `
  <input [(ngModel)]="meal.food"/>
  `
})
export class EditMealFoodComponent {
  public meal: Meal;
}
