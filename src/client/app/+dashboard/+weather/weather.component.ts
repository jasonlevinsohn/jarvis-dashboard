import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'l3-weather',
    templateUrl: 'weather.component.html'
})

export class WeatherComponent {
    constructor() {
        console.log('Dashboard Weather Widget');
    }
}
