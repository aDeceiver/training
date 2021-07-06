import { Component, OnDestroy, OnInit, } from '@angular/core';
import { Subscription } from 'rxjs';
import { Route4Service } from '../route4.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit, OnDestroy {
  timeLimit: number = 0;
  timer=false;
  timerDetails: number[] =[];
  currentCounteValSub: Subscription = null;
  timerCompSub: Subscription = null;

  constructor(public route4Service: Route4Service) { }

  ngOnInit(): void {
    this.route4Service.timerReset.next([this.timeLimit,true]);
    this.currentCounteValSub = this.route4Service.counterValue.subscribe((data: number) => this.timerDetails.push(data));
    this.timerCompSub = this.route4Service.timerComplete.subscribe(() => this.timer = false);
  }
  startTimer(){
    if(this.timeLimit < 1) {
      alert("Enter valid time limit")
    } else {
      this.timer=!this.timer;
      this.route4Service.timerControl.next(new Timer(this.timer, this.timeLimit));
    }

  }
  resetTimer() {
    this.timer = false;
    this.timerDetails = [];
    this.route4Service.timerReset.next([this.timeLimit,false]);
  }
  ngOnDestroy(): void {

    if(this.currentCounteValSub) {
      this.currentCounteValSub = null;
    }
    if(this.timerCompSub) {
      this.timerCompSub = null;
    }
  }
}

export class Timer{
  constructor(public timer: boolean,public timeLimit: number){ 
   }
}
