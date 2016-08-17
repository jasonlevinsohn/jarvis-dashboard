import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { UserService } from '../shared/user/index';
import { WeatherService } from '../shared/services/index';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    providers: [UserService, WeatherService]
})

export class DashboardModule { }
