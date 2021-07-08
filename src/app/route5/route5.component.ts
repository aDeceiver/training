import { Component, OnInit } from '@angular/core';
import { SortingOrder } from './enums/route5.enum';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.scss']
})
export class Route5Component implements OnInit {

  studentRecords: any;
  originalStudentRecords: any;
  dataLoaded = false;
  // clickCount = 0;
  previousSortedColumn = '';
  SortingOrder = SortingOrder;
  sortingColumn ='';
  sortingOrder = SortingOrder.DEFAULT;
  reA = /[^a-zA-Z]/g;
  reN = /[^0-9]/g;
  constructor(private dataSer: DataService) { }

  ngOnInit(): void {
    this.dataSer.getRecords().subscribe((response) => {
      this.studentRecords = response;
      this.originalStudentRecords = [...this.studentRecords];
      this.dataLoaded = true;
    });
  }
  sortColumn(column: string){
    if(!!this.previousSortedColumn && this.previousSortedColumn=== column) {
      this.sortingOrder++;
    } else {
      this.sortingOrder = SortingOrder.ASC;
    }
    this.previousSortedColumn = column;
    this.sortRecords(column);
  }

  sortRecords(column) {
    this.sortingColumn = column;
    switch (this.sortingOrder) {
      case SortingOrder.ASC:
        this.studentRecords.sort(this.sortAlphaNum)

        // this.studentRecords.sort((a, b) => a[column] > b[column] ? 1 : a[column] < b[column] ? -1 : 0)
        break;

      case SortingOrder.DSC:
        this.studentRecords.sort(this.sortAlphaNum)

        // this.studentRecords.sort((a, b) => a[column] < b[column] ? 1 : a[column] > b[column] ? -1 : 0)
      
        break;
    
      default: 
        this.studentRecords = [...this.originalStudentRecords];
        this.sortingOrder = SortingOrder.DEFAULT;
        break;
    }
  }

  sortAlphaNum = (a, b) => {
    let aA = a[this.sortingColumn].toString().replace(this.reA, "");
    let bA = b[this.sortingColumn].toString().replace(this.reA, "");
    if (aA === bA) {
      let aN = parseInt(a[this.sortingColumn].toString().replace(this.reN, ""), 10);
      let bN = parseInt(b[this.sortingColumn].toString().replace(this.reN, ""), 10);
      if(this.sortingOrder === SortingOrder.ASC)
      return aN === bN ? 0 : aN > bN ? 1 : -1;
      else
      return aN === bN ? 0 : aN < bN ? 1 : -1;

    } else {
      if(this.sortingOrder === SortingOrder.ASC)
      return aA < bA ? -1 : 1;
      else
      return aA > bA ? -1 : 1;

    }
  }
}
