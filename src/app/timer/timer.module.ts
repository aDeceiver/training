import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { TimerComponent } from "./timer.component";
import { TimerScreenComponent } from './timer-screen/timer-screen.component';
import { TimerControllerComponent } from './timer-controller/timer-controller.component';
import { TimerLogsComponent } from './timer-logs/timer-logs.component';
import { TimerCountComponent } from './timer-count/timer-count.component';


const routes: Routes = [{
    path: '', component: TimerComponent
}]

@NgModule({
    imports: [FormsModule,CommonModule, RouterModule.forChild(routes)],
    declarations: [TimerComponent, TimerScreenComponent, TimerControllerComponent, TimerLogsComponent, TimerCountComponent],
    providers:[],
    exports: [RouterModule]
})
export class TimerModule{}
