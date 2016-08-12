import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { EditMealFoodComponent } from './edit-meal-food.component';
import { EditMealNotesComponent } from './edit-meal-notes.component';
import { EditMealCaloriesComponent } from './edit-meal-calories.component';

@Component({
  selector: 'meal-display',
  inputs: ['meal', 'selected'],
  directives: [EditMealFoodComponent, EditMealNotesComponent, EditMealCaloriesComponent],
  template: `
    <div>
    <h1>{{ meal.food }} >--{-(}:|] "yum!" <span *ngIf="meal === selected" (click)="startOrStopEditing()" [class.editButton]="true">{{ editMessage }}</span></h1>
    <edit-meal-food *ngIf="editing" [meal]="meal"></edit-meal-food>
    <h2><span class="deetsButton">Notes:</span> {{ meal.notes }}</h2>
    <edit-meal-notes *ngIf="editing" [meal]="meal"></edit-meal-notes>
    <h3><span class="deetsButton">Calories:</span> {{ meal.calories }}</h3>
    <edit-meal-calories *ngIf="editing" [meal]="meal"></edit-meal-calories>
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
