import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerStampComponent } from './timer-stamp.component';

describe('TimerStampComponent', () => {
  let component: TimerStampComponent;
  let fixture: ComponentFixture<TimerStampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerStampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerStampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
