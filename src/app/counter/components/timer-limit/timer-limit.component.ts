import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer-limit',
  templateUrl: './timer-limit.component.html',
  styleUrls: ['./timer-limit.component.scss']
})
export class TimerLimitComponent implements OnInit {
  @Output() startCountdownClicked = new EventEmitter<Event>();
  @Output() pauseCountdownClicked = new EventEmitter<Event>();

  newTimerLimit :number
  interval;
  counter: number;
  startCount :number = 0;
  pauseCount : number =0;
   start : number
   pause : number


  startCountdown(seconds) {
    this.startCount = this.startCount +1;
    this.start = this.startCount;
    console.log("startCountDown");
    this.startCountdownClicked.emit(event);
    this.counter = seconds;
    this.interval = setInterval(() => {
      console.log(this.counter);
      this.counter--;

      if (this.counter < 0) {
        clearInterval(this.interval);
        console.log('Ding!');
      }
    }, 1000)
  
  }

  pauseCountdown(seconds) {
    this.pauseCount = this.pauseCount +1;
    this.pause = this.pauseCount;
    this.pauseCountdownClicked.emit(event);
    console.log("interval paused");
    clearInterval(this.interval);
  }

  //To fix
  resetCountdown(seconds) {
    this.newTimerLimit = 0;
    this.counter = 0,
    console.log('reset');
  }
  constructor() { }

  ngOnInit() {
  }

}
