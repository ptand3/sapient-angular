import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-timer',
  templateUrl: './count-timer.component.html',
  styleUrls: ['./count-timer.component.scss']
})
export class CountTimerComponent implements OnInit {
    
  initialCount : Number= 10;
  @Input() event :Event
  constructor() { }

  ngOnInit() {
  }

}
