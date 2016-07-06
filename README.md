## Jarvis Dashboard


### Initial Config

##### Clone Anglular2-seed and call it your own
* `git clone `https://github.com/mgechev/angular2-seed`
* `cd ..`
* `cp -r angular2-seed/ jarvis-dashboard/`
* `cd jarvis-dashboard`
* `rm -r .git/`
* `git init`
* To pull updates from angular2-seed
  * `git remote add upstream https://github.com/mgechev/angular2-seed`
* Create a repo jarvis-dashboard and create a remote to push to
  * `git remote add origin git@github.com:jasonlevinsohn/jarvis-dashboard.git`

##### Install Angular2 Material
* `npm install --save @angular2-material/core'`
* `npm install --save @angular2-material/card'`
* `npm install --save @angular2-material/button'`
* `npm install --save @angular2-material/toolbar'`
* Make sure SystemJS knows where to find Material
  * Add `/node_modules/@angular2-material/*/package.json` to SYSTEM_CONFIG_DEV in tools/config/seed.config.ts
  * Add `join(this.PROJECT_ROOT, 'node_modules', '@angular2-material', '*', 'package.json')` to SYSTEM_BUILDER_CONFIG in tools/config/seed.config.ts
* Import libraries where needed
  * (i.e.) `import { MdToolbar } from '@angular2-material/toolbar'` in app.component.ts
* Add imported directives to list of directives
  * (i.e.) `directives: [MdToolbar]`
  * Use Directive in the components template

###### Notes
* When creating components in order to use relative paths for SCSS/CSS/HTML instead of absolute paths you will need to add a property `moduleId: module.id`

