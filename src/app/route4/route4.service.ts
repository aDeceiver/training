import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Timer } from './models/route4.model';

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
