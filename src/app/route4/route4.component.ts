import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-route4',
  templateUrl: './route4.component.html',
  styleUrls: ['./route4.component.scss']
})
export class Route4Component implements OnInit {

  constructor(private router: Router, private acti: ActivatedRoute) { 
    if(this.router.getCurrentNavigation().extras){
      const data = this.router.getCurrentNavigation().extras.state;
      console.log('data  ', data);
    }
  }
  ngOnInit(): void {
  }
}
