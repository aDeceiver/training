import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Route4Service } from '../route4.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component implements OnInit, OnDestroy{

  controlLogs: any[]=[];
  timeControlSub: Subscription = null;
  resetSub: Subscription = null;


  constructor(public route4Service: Route4Service) { }
  ngOnDestroy(): void {

    if(this.timeControlSub) {
      this.timeControlSub = null;
    }
    if(this.resetSub) {
      this.resetSub = null;
    }
  }

  ngOnInit(): void {
    this.timeControlSub = this.route4Service.timerControl.subscribe((data) => {
      if(!data.timer)
        this.controlLogs.push(['Paused at ' , new Date()]);
      else{
        this.controlLogs.push(['Started at ' , new Date()]);
      }
    });
    this.resetSub = this.route4Service.timerReset.subscribe((data) => this.controlLogs.push(['Reset at ' , new Date()]));

  }

}
