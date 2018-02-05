import { Component } from '@angular/core';

import { environment } from 'environments/environment'

@Component({
  selector: 'app-root',
  template: `
    <!--<header>Hello {{title}}</header>
    <a [routerLink]="['/asset']">asset</a> |
    <a [routerLink]="['/']">main</a>
    <footer>Goodbye {{ foo }}</footer>-->
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss', '../styles/style.css']
})
export class AppComponent {
  title = 'doors';
  foo = environment.url;
}
