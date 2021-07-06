import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { Route2Component } from "./route2.component";
import { SortListPipe } from "./sort-list.pipe";

const routes: Routes = [{
    path: '', component: Route2Component
}]

@NgModule({
    imports: [FormsModule,CommonModule, RouterModule.forChild(routes)],
    declarations: [Route2Component, SortListPipe],
    providers:[],
    exports: [RouterModule]
})
export class Route2Module{}
