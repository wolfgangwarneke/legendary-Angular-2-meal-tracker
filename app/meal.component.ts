import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { EditMealFoodComponent } from './edit-meal-food.component';

@Component({
  selector: 'meal-display',
  inputs: ['meal', 'selected'],
  directives: [EditMealFoodComponent],
  template: `
    <div>
    <h1>{{ meal.food }} ??? <span *ngIf="meal === selected" (click)="startOrStopEditing()" [class.editButton]="true">{{ editMessage }}</span></h1>
    <edit-meal-food *ngIf="editing" [meal]="meal"></edit-meal-food>
    <h2>Notes: {{ meal.notes }}</h2>
    <h3>Calories: {{ meal.calories }}</h3>
    </div>
  `
})
export class MealComponent {
  public meal: Meal;
  public editing: boolean = false;
  public editMessage: string = "edit";
  startOrStopEditing(){
    if (this.editing === false) {
      this.editing = true;
      this.editMessage = "don't edit";
    } else {
      this.editing = false;
      this.editMessage = "edit more";
    }
  }
}
