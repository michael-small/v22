> PR [#67942](https://github.com/angular/angular/pull/67942) — enhance `enableProfiling()` with documentation URLs.
>
> Now `console.timeStamp` includes a `detail` property with links to Angular docs for each lifecycle hook and profiler event.
>
> See [Profiling with the Chrome DevTools](https://next.angular.dev/best-practices/profiling-with-chrome-devtools#recording-a-profile).

### Usage

Call `enableProfiling()` *before* bootstrapping your application to capture all startup events.

```typescript
import {enableProfiling} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {App} from './app/app';

// Turn on profiling *before* bootstrapping your application
// in order to capture all of the code run on start-up.
enableProfiling();
bootstrapApplication(App);
```

> Only available in development mode — noop in production. Requires Chrome 140+ with the flag `chrome://flags/#enable-devtools-deep-link-via-extensibility-api` enabled.

### Record a profile

Click the **Record** button in the Chrome DevTools **Performance** panel (`Ctrl+E`).

![Record button in Chrome DevTools Performance panel](assets/enable-profiling/record-profile.png)

See the [Chrome DevTools documentation](https://developer.chrome.com/docs/devtools/performance#record) for more details on recording profiles.

### Documentation links in the Performance panel

Angular events now include clickable links to the official documentation directly in the Performance panel.

![Angular events with documentation links in Chrome DevTools](assets/enable-profiling/devtools-link-doc.png)
