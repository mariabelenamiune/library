import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.scss']
})

export class MoviesHomeComponent {

  control = new FormControl("steak-0");
  foods: Food[] = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" }
  ];

  constructor() {
    this.control.valueChanges.subscribe(s => {
      console.log(`The selected value is ${s}`);
    });
  }

  onSubmit() {

  }

}
