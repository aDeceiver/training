import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Route4Service } from '../route4.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.scss']
})
export class Component4Component implements OnInit, OnDestroy {

  pausedCount = 0;
  startCount = 0;
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
        this.pausedCount++;
      else{
        this.startCount++;
      }
    });
  }

}
