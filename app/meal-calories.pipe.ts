import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "cal_pipe",
  pure: false
})
export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], info) {
    var caloriesFilter = info[0];
    var output: Meal[] = [];
    if(caloriesFilter === "high") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (caloriesFilter === "low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
