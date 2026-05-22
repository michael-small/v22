import { Component } from '@angular/core';
import { AngularAria } from './topics/angular-aria';

@Component({
  selector: 'app-root',
  imports: [AngularAria],
  template: `
    <h1>v22</h1>
    <app-angular-aria />
  `,
})
export class App {}
