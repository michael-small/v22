import { Component } from '@angular/core';
import { AngularAria } from './topics/angular-aria/angular-aria';
import { SignalForms } from './topics/signal-forms';
import { ServiceExample } from './topics/service';
import { Resources } from './topics/resources';
import { Debounced } from './topics/debounced';
import { InjectAsync } from './topics/injectAsync';
import { SafeNavigationAndNullishCoalescing } from './topics/safe-navigation-and-nullish-coalescing';
import { CommentsInHtmlElement } from './topics/comments-in-html-element';

@Component({
  selector: 'app-root',
  imports: [
    AngularAria,
    SignalForms,
    ServiceExample,
    Resources,
    Debounced,
    InjectAsync,
    SafeNavigationAndNullishCoalescing,
    CommentsInHtmlElement,
  ],
  template: `
    <h1>v22</h1>

    <h2>Angular Aria package (<code>@angular/aria</code>): Stable</h2>
    <app-angular-aria />

    <h2>Signal Forms package: Stable</h2>
    <app-signal-forms />

    <h2>Service decorator</h2>
    <app-service />

    <h2>Resources: Stable</h2>
    <app-resources />

    <h2>debounced</h2>
    <app-debounced />

    <h2>injectAsync</h2>
    <app-injectAsync />

    <h2>Safe Navigation and Nullish Coalescing in templates aligning with TS spec</h2>
    <app-safe-navigation-and-nullish-coalescing />

    <h2>Comments in HTML elements</h2>
    <app-comments-in-html-element />
  `,
})
export class App {}
