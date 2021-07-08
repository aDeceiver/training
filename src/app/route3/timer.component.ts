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
  }
  resetTimer() {
    this.controlLogs.push(['Reset at ', new Date()]);
    this.timerPauseDetails = [];
    this.counterState = false;
    this.counter = 0;
    this.counterComplete = true;
    this.stopInterval();
  }
  updateCounter() {
    console.log(this.counter);
    if(this.counterState){
      if(this.counter === 0) {
        this.stopInterval();
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
      this.startInterval();
      this.counterComplete =false;
      this.counter = timerApp.startValue;
    }

  }
  stopInterval() {
    clearInterval(this.interval);
  }
  startInterval() {
    this.interval = setInterval(this.updateCounter.bind(this), 1000);
  }
  ngOnDestroy(): void {
    if(this.interval) {
      clearInterval(this.interval);
    }
  }


}
