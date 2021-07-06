import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.scss']
})
export class Route6Component implements OnInit {

  items = Array.from({length: 100}).map((_, i) => `Button #${i+1}`);
  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(index: number) {
    alert(`Button '${index+1}' is clicked`);
  }

}
