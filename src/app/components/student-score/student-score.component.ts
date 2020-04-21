import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-student-score',
  templateUrl: './student-score.component.html',
  styleUrls: ['./student-score.component.scss']
})
export class StudentScoreComponent implements OnInit {

  count: number = 1;
  fieldName: string;

  sortArr = [];
  //show the keys as headers
  items: User[] = [
    { id: 1, name: "John", class: 3, subject1: 23, subject2: 40, subject3: 45 },
    { id: 2, name: "Mary", class: 4, subject1: 36, subject2: 34, subject3: 45 },
    { id: 3, name: "Steve", class: 3, subject1: 50, subject2: 55, subject3: 48 },
    { id: 4, name: "Bob", class: 6, subject1: 45, subject2: 56, subject3: 76 },
    { id: 5, name: "Max", class: 5, subject1: 60, subject2: 34, subject3: 47 },
    { id: 6, name: "Peter", class: 5, subject1: 37, subject2: 76, subject3: 34 }
  ]
  constructor() {
    console.log(this.items);

  }


  handleClick(element: Event) {
    let count = this.count++;
      console.log(this.items);
    if (count === 1) {
      console.log("Count asc");
      //Sorting by Subject1
      this.items.sort((a, b) => (a.subject1 > b.subject1) ? 1 : -1);//asc
      return this.items;
    }
    else if (count === 2) {
      console.log("count desc");
      this.items.sort((a, b) => (b.subject1 > a.subject1) ? 1 : -1);//desc
      return this.items;
    }
    else return this.items.sort((a, b) => 0);

  }

  ngOnInit() {

  }
}
