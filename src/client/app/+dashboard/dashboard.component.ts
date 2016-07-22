import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

/**
 * This class represents the lazy loaded Dashboard Component
 */
@Component({
    moduleId: module.id,
    selector: 'l3-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
    directives: [
        REACTIVE_FORM_DIRECTIVES,
        MD_CARD_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MD_SIDENAV_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        MdToolbar,
        MdIcon
    ],
    providers: [
        MdIconRegistry
    ]
})

//TODO: Possibly could use `implements OnInit here
export class DashboardComponent {
    sidenavs: Object[];
    widgets: Object[];
    constructor() {
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
            {title: 'Weather'},
            {title: 'Front Gate'},
            {title: 'Farm Water'},
            {title: 'Chicken Coop Door'},
        ];
    }


}
