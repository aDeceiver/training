import { Component, OnInit } from '@angular/core';
import { SortOrder } from './enum/route2.enum';
import { Product, SortOption } from './model';
import { ProductsList } from './stub';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss']
})
export class Route2Component implements OnInit {

  productList: Product[] = ProductsList;
  gridView = true;
  options: SortOption[];
  selectedSortOrder = SortOrder.ASCENDING;

  constructor() { }

  ngOnInit(): void {
    this.options = [{ label: "PRICE: LOW TO HIGH", value: SortOrder.ASCENDING }, { label: "PRICE: HIGH TO LOW", value: SortOrder.DESCENDING }]
  }

  toggleView(view: boolean) {
    this.gridView = view;
  }
}
