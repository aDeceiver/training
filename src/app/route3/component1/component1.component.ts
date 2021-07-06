import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { sharedAnimate } from 'src/app/shared/animation';

@Component({
  selector: 'app-component1',
  animations: sharedAnimate,
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit,OnDestroy {
  counter: number = 0;
  @Input()startCounter: boolean = false;
  @Input()timeLimit: number = 0;
  @Output() timerComplete = new EventEmitter();
  @Output() counterValue = new EventEmitter();

  interval: any;

  constructor() { }
  ngOnDestroy(): void {
    if(this.interval) {
      clearInterval(this.interval);
    }
  }

  ngOnInit(): void {
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
    this.timerComplete.emit();
  }
  emitCounterValue() {
    this.counterValue.emit(this.counter);
  }
}
