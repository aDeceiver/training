import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.scss']
})
export class Component4Component implements OnInit {

  @Input() pausedCount = 0;
  @Input() startCount = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
