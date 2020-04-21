import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { CountComponent } from "./components/count/count.component";
import { CountTimerComponent } from './components/count-timer/count-timer.component';
import { TimerLimitComponent } from './components/timer-limit/timer-limit.component';
import { TimerStampComponent } from './components/timer-stamp/timer-stamp.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
     CountComponent,
     CountTimerComponent,
     CounterComponent,
     TimerLimitComponent,
     TimerStampComponent
    ],
    providers: []
})
export class ProductModule { }
