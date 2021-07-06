import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { sharedAnimate } from 'src/app/shared/animation';

@Component({
  selector: 'app-component2',
  animations: sharedAnimate,
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {
  timeLimit: number = 0;
  @Input() timer=false;
  @Output() timerControl = new EventEmitter<Timer>();
  @Output() timerReset = new EventEmitter();
  @Input() timerDetails: number[] =[];
  constructor() { }

  ngOnInit(): void {
    // this.timerReset.emit([this.timeLimit,true]);
  }
  startTimer(){
    if(this.timeLimit < 1) {
      alert("Enter valid time limit")
    } else {
      this.timer=!this.timer;
      this.timerControl.emit(new Timer(this.timer, this.timeLimit));
    }

  }
  resetTimer() {
    this.timer = false;
    this.timerReset.emit([this.timeLimit,false]);
  }
}

export class Timer{
  constructor(public timer: boolean,public timeLimit: number){ 
   }
}
