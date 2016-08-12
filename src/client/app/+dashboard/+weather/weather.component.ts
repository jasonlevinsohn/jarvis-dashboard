import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../shared/index';

@Component({
    moduleId: module.id,
    selector: 'l3-weather',
    templateUrl: 'weather.component.html'
})

export class WeatherComponent implements OnInit {
    forecast: any[] = [];
    errorMessage: string;

    constructor(public weatherService: WeatherService) {
    // constructor() {
        console.log('Dashboard Weather Widget');
    }

    ngOnInit() {
        console.log('Calling Init');
        this.getForecast();
    }

    getForecast() {
        this.weatherService.get()
            .subscribe(
                forecast => this.forecast = forecast,
                error => this.errorMessage = <any>error
            );
    }
}
