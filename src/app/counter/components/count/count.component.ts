import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
 
  constructor() { }
  
  initialCount = 0;
  clickedEvent: Event;

  ngOnInit() {

  }

}
