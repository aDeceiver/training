import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-count',
  templateUrl: './timer-count.component.html',
  styleUrls: ['./timer-count.component.scss']
})
export class TimerCountComponent implements OnInit {

  @Input() pausedCount = 0;
  @Input() startCount = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
