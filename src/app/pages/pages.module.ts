import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    /**Aqui se ponen los componentes que se van a usar en este modulo */
    declarations: [
        DashboardComponent,
        ProgressComponent,
        PagesComponent,
        Graficas1Component
    ],
    /**Aqui se ponen los componentes que van a ser usados por otros modulos externos a este. */
    exports: [
        DashboardComponent,
        ProgressComponent,
        PagesComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ]

})

export class PagesModule { }
