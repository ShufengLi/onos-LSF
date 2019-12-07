import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ResourceComponent } from './resource/resource.component';
import { RoutingComponent } from './routing/routing.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { D3Service, D3_DIRECTIVES } from './d3';

import { AppComponent } from './app.component';

import { GraphComponent } from './visuals/graph/graph.component';
import { SHARED_VISUALS } from './visuals/shared';
import { TopologyComponent } from './topology/topology.component';
import { PlotComponent } from './plot/plot.component';
import { PublicComponentComponent } from './public-component/public-component.component';
@NgModule({
  declarations: [
    AppComponent,
    ResourceComponent,
    RoutingComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    TopologyComponent,
    PlotComponent,
    PublicComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
