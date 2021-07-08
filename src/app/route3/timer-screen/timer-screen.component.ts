import { Component, Input, OnInit } from '@angular/core';
import { sharedAnimate } from 'src/app/shared/animation';

@Component({
  selector: 'app-timer-screen',
  animations: sharedAnimate,
  templateUrl: './timer-screen.component.html',
  styleUrls: ['./timer-screen.component.scss']
})
export class TimerScreenComponent implements OnInit {

  @Input() counter;
  constructor() { }

  ngOnInit(): void {
  }

}
