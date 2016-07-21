import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

import { Config, NameListService, NavbarComponent, ToolbarComponent } from './shared/index';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  viewProviders: [NameListService, HTTP_PROVIDERS],
  templateUrl: 'app.component.html',
  directives: [
      ROUTER_DIRECTIVES,
      MD_CARD_DIRECTIVES,
      MD_LIST_DIRECTIVES,
      MD_SIDENAV_DIRECTIVES,
      MD_BUTTON_DIRECTIVES,
      NavbarComponent,
      ToolbarComponent,
      MdToolbar,
      MdIcon
  ],
  providers: [
      MdIconRegistry
  ]
})
export class AppComponent {
  sidenavs: Object[] = [
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

  widgets: Object[] = [
      {title: 'Weather'},
      {title: 'Front Gate'},
      {title: 'Farm Water'},
      {title: 'Chicken Coop Door'},
  ];

  constructor() {
    console.log('Environment config', Config);

  }

}
