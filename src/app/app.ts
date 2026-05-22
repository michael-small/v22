import { Component } from '@angular/core';
import { AngularAria } from './topics/angular-aria';

@Component({
  selector: 'app-root',
  imports: [AngularAria],
  template: `
    <h1>v22</h1>

    <h2>Angular Aria package (<code>@angular/aria</code>): Stable</h2>
    <app-angular-aria />
  `,
})
export class App {}
