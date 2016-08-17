import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { UserService } from '../shared/user/index';
import { WeatherService } from '../shared/services/index';


import { MdCardModule } from '@angular2-material/card';
import { MdListModule } from '@angular2-material/list';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdButtonModule } from '@angular2-material/button';
import { MdInputModule } from '@angular2-material/input';
import { MdRadioModule } from '@angular2-material/radio/radio';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        MdCardModule,
        MdListModule,
        MdSidenavModule,
        MdButtonModule,
        MdInputModule,
        MdRadioModule
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    providers: [UserService, WeatherService]
})

export class DashboardModule { }
