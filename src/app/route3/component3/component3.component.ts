import { Component, Input, OnInit } from '@angular/core';
import { sharedAnimate } from 'src/app/shared/animation';

@Component({
  selector: 'app-component3',
  animations: sharedAnimate,
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component implements OnInit {

  @Input() controlLogs: string[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
