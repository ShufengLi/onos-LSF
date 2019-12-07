import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourceComponent } from './resource/resource.component';
import { RoutingComponent } from './routing/routing.component';

import { PlotComponent } from './plot/plot.component';

import { TopologyComponent } from './topology/topology.component';
const routes: Routes = [
  {path: 'topology', component: TopologyComponent},
  {path: 'routing', component: RoutingComponent},
  {path: 'resource', component: ResourceComponent},
  {path: 'plot', component: PlotComponent},
// 默认页面显示,别的都匹配不到
  {
    path: '**', redirectTo: 'topology'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
