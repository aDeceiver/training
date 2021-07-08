import { Component, Input, OnInit } from '@angular/core';
import { sharedAnimate } from 'src/app/shared/animation';

@Component({
  selector: 'app-timer-logs',
  animations: sharedAnimate,
  templateUrl: './timer-logs.component.html',
  styleUrls: ['./timer-logs.component.scss']
})
export class TimerLogsComponent implements OnInit {
  @Input() controlLogs: string[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
