import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Output() onstartCount = new EventEmitter<Event>();
  @Output() onpauseCount = new EventEmitter<Event>();

  initialCount = 0;
  clickedEvent :Event;

  onStartCountDown() {
    this.onstartCount.emit(event);
    console.log('Start');
  }
  onPauseCountDown() {
    this.onpauseCount.emit(event);
    console.log('Pause');
  }
  

  constructor() { }

  ngOnInit() {

  }

}
