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


###### Deployment Notes to Nginx
* The root of the app is jarvis-dashboard and is where the links are referenced from in the index.html file.  Eventhough 'index.html' itself is not on the root `dist/dev/index.html`
* Under `Server` block, define root directive `root /webapps/jarvis_webapp/jarvis-dashboard;`
* In `location /`, do `try_files $uri $uri/dist/dev/index.html`  In production change `dev` to `prod`
* Also `main.js` is under `dist/dev` as well eventhough index.html file is saying its `/app/main.js` so we need to tell nginx where this file really is as well
* In `location /app/ `, add `alias /webapps/jarvis_webapp/jarvis-dashboard/dist/dev/app/`

