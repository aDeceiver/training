import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route1Component } from './route1/route1.component';

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo: 'route1'},
  {path: 'route1', component: Route1Component},
  {path: 'route2', loadChildren: ()=> import('./route2/route2.module').then(m=> m.Route2Module)},
  {path: 'route3', loadChildren: ()=> import('./route3/route3.module').then(m=> m.Route3Module)},
  {path: 'timer', loadChildren: ()=> import('./timer/timer.module').then(m=> m.TimerModule)},
  {path: 'route4', loadChildren: ()=> import('./route4/route4.module').then(m=> m.Route4Module)},
  {path: 'route5', loadChildren: ()=> import('./route5/route5.module').then(m=> m.Route5Module)},
  {path: 'route6', loadChildren: ()=> import('./route6/route6.module').then(m=> m.Route6Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
