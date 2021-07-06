import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { sharedAnimate } from 'src/app/shared/animation';
import { TimerApp } from '../models/model';

@Component({
  selector: 'app-timer-controller',
  animations: sharedAnimate,
  templateUrl: './timer-controller.component.html',
  styleUrls: ['./timer-controller.component.scss']
})
export class TimerControllerComponent implements OnInit {

  timeLimit: number;
  @Output() timerStateControl = new EventEmitter();
  @Output() timerReset = new EventEmitter();
  timerState: boolean = false;
  @Input() isInitialStart: boolean = false;
  @Input() timerPauseDetails: number[] =[];
  
  constructor() { }
 

  ngOnInit(): void {
    this.isInitialStart = true;
  }
  startTimer(){

    if(this.timeLimit < 1 || isNaN(this.timeLimit)) {
      alert("Enter valid time limit")
    } else {
      if(this.isInitialStart){
        this.timerState = true;
      } else {
        this.timerState = !this.timerState;
      }
      this.emitTimer();
      this.isInitialStart = false;
    }
    
  }
  emitTimer() {
    this.timerStateControl.emit(new TimerApp(this.timerState, this.timeLimit, this.isInitialStart));
  }
  resetTimer() {
    this.timerState = false;
    this.timerReset.emit();
  }
}
