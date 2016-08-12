import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriesPipe } from './meal-calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, NewMealComponent],
  pipes: [CaloriesPipe],
  template: `
  <new-meal (onCreateNewMeal)="createMeal($event)"></new-meal>
  <br>
  <select id="selectionMenu" (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All Meals</option>
    <option value="high">Show High Cal Meals</option>
    <option value="low">Show Low Cal Meals</option>
  </select>
  <button (click)="denyReality()">Deny Reality</button>
  <meal-display *ngFor="#currentMeal of mealList | cal_pipe:caloriesFilter"
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
  public caloriesFilter: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('in meal-list component', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(args: string[]): void {
    this.mealList.push(
      new Meal(args[0], args[1], Number(args[2]), this.mealList.length)
    );
  }
  onChange(optionFromMenu) {
    this.caloriesFilter = optionFromMenu;
  }
  denyReality() {
    this.mealList.forEach(function(meal) {
      if (meal.calories > 100) {
        meal.calories -= 100;
      }
    })
  }
}
