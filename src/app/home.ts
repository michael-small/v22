import { Component } from '@angular/core';
import { AngularAria } from './topics/angular-aria/angular-aria';
import { SignalForms } from './topics/signal-forms';
import { ServiceExample } from './topics/service/service';
import { Resources } from './topics/resources/resources';
import { Debounced } from './topics/debounced/debounced';
import { InjectAsync } from './topics/injectAsync/injectAsync';
import { CommentsInHtmlElement } from './topics/comments-in-html-element';
import { SafeNavigationAlignedWithTS } from './topics/safe-navigation-aligned-with-ts/safe-navigation-aligned-with-ts';
import { DeferIdle } from './topics/defer-idle/defer-idle';
import { DeferTriggerMisconfiguration } from './topics/defer-trigger-misconfiguration/defer-trigger-misconfiguration';
import { EnableProfiling } from './topics/enable-profiling/enable-profiling';
import { BrowserUrl } from './topics/browser-url/browser-url';
import { V21Minors } from './topics/v21-minors/v21-minors';
import { OnPushDefultCD } from './topics/OnPush-default';

@Component({
  selector: 'app-home',
  imports: [
    AngularAria,
    SignalForms,
    ServiceExample,
    Resources,
    Debounced,
    InjectAsync,
    CommentsInHtmlElement,
    SafeNavigationAlignedWithTS,
    DeferIdle,
    DeferTriggerMisconfiguration,
    EnableProfiling,
    BrowserUrl,
    V21Minors,
    OnPushDefultCD,
  ],
  template: `
    <h1>Angular v22</h1>

    <h2>v21.1 and v21.2 recap</h2>
    <app-v21-minors />

    <h2>Signal Forms: Stable</h2>
    <app-signal-forms />

    <h2>Angular Aria package (<code>@angular/aria</code>): Stable</h2>
    <app-angular-aria />

    <h2>Resources: Stable</h2>
    <app-resources />

    <h2><code>OnPush</code> Default Change Detection is the new default</h2>
    <app-on-push-defult-cd />

    <h2>Service decorator</h2>
    <app-service />

    <h2><code>debounced</code></h2>
    <app-debounced />

    <h2><code>injectAsync</code></h2>
    <app-injectAsync />

    <h2>Safe Navigation in templates aligning with TS spec: Stable</h2>
    <app-safe-navigation-aligned-with-ts />

    <h2>Comments in HTML elements</h2>
    <app-comments-in-html-element />

    <h2>
      &#64;defer idle timeout + DI token (<code>IdleService</code> /
      <code>provideIdleServiceWith</code>): Stable
    </h2>
    <app-defer-idle />

    <h2>&#64;defer trigger misconfiguration diagnostics</h2>
    <app-defer-trigger-misconfiguration />

    <h2><code>enableProfiling</code> with documentation URLs</h2>
    <app-enable-profiling />

    <h2><code>browserUrl</code> input for <code>RouterLink</code></h2>
    <app-browser-url />
  `,
})
export class Home {}
