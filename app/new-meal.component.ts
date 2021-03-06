import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onCreateNewMeal'],
  template: `
  <h3 id="logLogo">Log New Meal:</h3>
  <input type="text" placeholder="meal food..." value="" (click)="removeWarning(food)" #food>
  <input type="text" placeholder="notes about it?" value="" #notes>
  <label for="calories">Calories:</label>
  <input type="number" name="calories" min="0" value="500" #cals>
  <button (click)="addMeal(food, notes, cals)">Add</button>
  `
})
export class NewMealComponent {
  public onCreateNewMeal: EventEmitter<string[]>;
  public args: string[] = [];
  constructor(){
    this.onCreateNewMeal = new EventEmitter();
  }
  addMeal(food: HTMLInputElement, note: HTMLInputElement, cals: HTMLInputElement){
    console.log(food.value);
    if (food.value !== "" && food.value !== "FEED ME SEYMOUR") {
      this.args.push(food.value);
      this.args.push(note.value);
      this.args.push(cals.value);
      this.onCreateNewMeal.emit(this.args);
      food.value = "";
      note.value = "";
      cals.value = "500";
      this.args = [];
    } else {
      food.value = "FEED ME SEYMOUR";
      food.id = "warning";
    }
  }
  removeWarning(input: HTMLInputElement) {
    if (input.id === "warning") {
      input.id = "okay";
      input.value = "taco?";
    }
  }
}
