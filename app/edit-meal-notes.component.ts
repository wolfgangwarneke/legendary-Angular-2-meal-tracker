import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-notes',
  inputs: ['meal'],
  template: `
  <input [(ngModel)]="meal.notes"/>
  `
})
export class EditMealNotesComponent {
  public meal: Meal;
}
