import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { StudentScoreComponent } from './components/student-score/student-score.component';
import{SharedModule} from './shared/shared.module';
import {CounterComponent} from './counter/components/counter/counter.component';
import { CountComponent } from "./counter/components/count/count.component";
import { CountTimerComponent } from './counter/components/count-timer/count-timer.component';
import { TimerLimitComponent } from './counter/components/timer-limit/timer-limit.component';
import { TimerStampComponent } from './counter/components/timer-stamp/timer-stamp.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    StudentScoreComponent,
    CounterComponent,
    CountComponent,
    CountTimerComponent,
    TimerStampComponent,
    TimerLimitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    // AngularMaterialModule,  
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
