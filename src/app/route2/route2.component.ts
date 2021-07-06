import { Component, OnInit } from '@angular/core';
import { Product } from './model';
import { ProductsList } from './stub';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss']
})
export class Route2Component implements OnInit {

  productList: Product[] = ProductsList; 
  gridView = true;
  selectedValue = 0;
  constructor() { }

  ngOnInit(): void {
    console.log(this.productList);
  }

  toggleView(view: boolean) {
    this.gridView = view;
  }
}
