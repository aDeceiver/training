import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { Route4Component } from "./route4.component";
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';

const routes: Routes = [{
    path: '', component: Route4Component
}]

@NgModule({
    imports: [FormsModule,CommonModule, RouterModule.forChild(routes)],
    declarations: [Route4Component, Component1Component, Component2Component, Component3Component, Component4Component],
    providers:[],
    exports: [RouterModule]
})
export class Route4Module{}
