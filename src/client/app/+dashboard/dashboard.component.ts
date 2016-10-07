import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MdCheckbox } from '@angular2-material/checkbox/checkbox';
import { MdUniqueSelectionDispatcher } from '@angular2-material/core/coordination/unique-selection-dispatcher';

// Widgets
import { WeatherComponent } from './+weather/weather.component';
import { FarmgateComponent } from './+farmgate/farmgate.component';

// Services
import { UserService } from '../shared/index';
import { WeatherService } from '../shared/index';

/**
 * This class represents the lazy loaded Dashboard Component
 */
@Component({
    moduleId: module.id,
    selector: 'l3-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
    directives: [
        MdCheckbox,
        MdToolbar,
        MdIcon,
        WeatherComponent,
        FarmgateComponent
    ],
    providers: [MdIconRegistry, MdUniqueSelectionDispatcher, UserService, WeatherService]
})

//TODO: Possibly could use `implements OnInit here
export class DashboardComponent {
    formShowing: boolean = false;
    sidenavs: Object[];
    widgets: Object[];
    constructor(private user: UserService) {
        console.log('The Dashboard is alive');
        this.sidenavs = [
            {
                name: 'My Account',
                desc: 'Edit my account info',
                icon: 'assignment ind'
            },
            {
                name: 'Settings',
                desc: 'Account Settings',
                icon: 'pets'
            }
        ];

        this.widgets = [
            {title: 'Front Gate'},
            {title: 'Farm Water'},
            {title: 'Chicken Coop Door'},
        ];
    }

    public checkUser() {
        let returnValue: string = 'What';

        returnValue = this.user.checkYoSelf();
        console.log('User: ', returnValue);
    }


}
