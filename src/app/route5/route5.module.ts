import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route5Component } from './route5.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PropertiesPipe } from './properties.pipe';
import { DataService } from './service/data.service';



const routes: Routes = [{
  path: '', component: Route5Component
}]

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
  declarations: [Route5Component, PropertiesPipe],
  providers:[DataService],
  exports: [RouterModule]
})
export class Route5Module { }
