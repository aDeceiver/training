import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimerApp } from './models/model';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  interval: any;
  counter: number = 0;
  counterState: boolean = false;
  counterComplete: boolean = false;
  timerPauseDetails: number[] =[];

  controlLogs: any[] = [];
  startCount=0;
  pausedCount=0;

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(this.updateCounter.bind(this), 1000);
  }
  resetTimer() {
    this.controlLogs.push(['Reset at ', new Date()]);
    this.counterState = false;
    this.counter = 0;
    this.counterComplete = true;
  }
  updateCounter() {
    console.log(this.counter);
    if(this.counterState){
      if(this.counter === 0) {
        this.counterComplete = true;
        this.counterState = false;
        return;
      }
      this.counter--;
    }
  }
  timerStateControl(timerApp: TimerApp) {
    this.counterState = timerApp.counterState;
    if(!this.counterState) {
      this.timerPauseDetails.push(this.counter);
      this.pausedCount++;
      this.controlLogs.push(['Paused at ', new Date()]);
    } else {
      this.startCount++;
      this.controlLogs.push(['Started at ' , new Date()]);
    }
    if(timerApp.isInitialStart) {
      this.counterComplete =false;
      this.counter = timerApp.startValue;
    }

  }
  ngOnDestroy(): void {
    if(this.interval) {
      clearInterval(this.interval);
    }
  }


}
