import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Timer } from '../models/route4.model';
import { Route4Service } from '../route4.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit,OnDestroy {
  counter: number = 0;
  startCounter: boolean = false;
  timeLimit: number = 0;
  resetSub: Subscription = null;
  timeControlSub: Subscription = null;

  interval: any;

  constructor(public route4Service: Route4Service) { }
  ngOnDestroy(): void {
    if(this.interval) {
      clearInterval(this.interval);
    }
    if(this.resetSub) {
      this.resetSub = null;
    }
    if(this.timeControlSub) {
      this.timeControlSub = null;
    }
  }

  ngOnInit(): void {
    this.resetSub = this.route4Service.timerReset.subscribe((data) => this.resetCounter());
    this.timeControlSub = this.route4Service.timerControl.subscribe((data) => this.timerControl(data));
  }

  timerControl(value: Timer) {
    if(value.isInitialStart) {
      this.counter = value.timeLimit;
      this.startInterval();
    }
    this.startCounter = value.timer;
    if(!this.startCounter) {
      this.route4Service.counterValue.next(this.counter);
    }
  }
  updateCounter() {
    console.log(this.counter);
    if(this.startCounter){
      if(this.counter === 0) {
        this.timerComplete();
        return;
      }
      this.counter--;
    }
  }
  timerComplete() {
    this.route4Service.timerComplete.next();
    this.stopInterval();
  }
  resetCounter() {
    this.startCounter = false;
    this.counter = 0;
    this.stopInterval();
  }
  stopInterval() {
    clearInterval(this.interval);
  }
  startInterval() {
    this.interval = setInterval(this.updateCounter.bind(this), 1000);
  }
}
