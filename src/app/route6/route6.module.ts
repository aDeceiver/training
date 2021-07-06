import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route6Component } from './route6/route6.component';
import { RouterModule, Routes } from '@angular/router';
import {ScrollingModule} from '@angular/cdk/scrolling';

const routes: Routes = [{
  path: '', component: Route6Component
}]

@NgModule({
  declarations: [
    Route6Component
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), ScrollingModule
  ],
  exports: [RouterModule]
})
export class Route6Module { }
