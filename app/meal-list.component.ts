import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';


@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, NewMealComponent],
  template: `
  <new-meal></new-meal>
  <meal-display *ngFor="#currentMeal of mealList"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal" [selected]="selectedMeal">
  </meal-display>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('in meal-list component', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
}
