import { Component, OnInit, ViewChild } from '@angular/core';
import { Component1Component } from './component1/component1.component';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.scss']
})
export class Route3Component implements OnInit {
  timerController: boolean = false;
  timeLimits: number;
  resetValue: number = 0;
  controlLogs: any[] = [];
  @ViewChild(Component1Component, {static: true}) child:Component1Component;
  timerDetails: number[] =[];
  startCount=0;
  pausedCount=0;

  constructor() { }

  ngOnInit(): void {
  }
  pausedAt(val:number) {
    this.timerDetails.push(val);
  }
  timerControl(value: any) {
    console.log(value);
    this.timerController = value.timer;
    this.timeLimits = value.timeLimit;
    if(!this.timerController) {
    this.child.emitCounterValue();
    this.pausedCount++;
    this.controlLogs.push(['Paused at ', new Date()]);
    } else {
      this.startCount++;
    this.controlLogs.push(['Started at ' , new Date()]);
    }
  }
  timerReset(val: any) {
    if(!val[1]){
      this.controlLogs.push(['Reset at ' , new Date()]);
    }
    this.child.resetCounter(val);
    this.timerDetails = []
  }
  timerCompleted() {
    this.timerController = false;
  }
}
