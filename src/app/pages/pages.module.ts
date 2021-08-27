import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    RouterModule,
    PagesRoutingModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
