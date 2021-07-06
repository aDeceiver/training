import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
    this.resetSub = this.route4Service.timerReset.subscribe((data) => this.resetCounter(data));
    this.timeControlSub = this.route4Service.timerControl.subscribe((data) => this.timerControl(data));
  }

  timerControl(value: any) {
    console.log(value);
    this.startCounter = value.timer;
    this.timeLimit = value.timeLimit;
    if(!this.startCounter) {
      this.route4Service.counterValue.next(this.counter);
    }
  }
  updateCounter() {
    console.log(this.counter);
    if(this.startCounter){
      if(this.counter === 0) {
        this.resetCounter([this.timeLimit, false]);
        return;
      }
      this.counter--;
    }
  }
  resetCounter(limit: any) {
    if(limit[1]){
      this.interval = setInterval(this.updateCounter.bind(this), 1000);
    }
    this.startCounter = false;
    this.route4Service.timerComplete.next();
    this.counter = limit[0];
  }
}
