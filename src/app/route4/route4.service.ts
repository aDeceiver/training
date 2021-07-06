import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Timer } from '../route4/component2/component2.component';

@Injectable({
  providedIn: 'root'
})
export class Route4Service {

  timerReset = new Subject();
  timerControl = new Subject<Timer>();
  timerComplete = new Subject();
  counterValue = new Subject();

  constructor() { }
}
