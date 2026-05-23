import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  template: `
    <div>
      <blockquote cite="https://github.com/angular/angular/pull/68195">
        These changes introduce the new @Service decorator which is a more ergonomic alternative to
        @Injectable. The reason we're adding a new decorator is that @Injectable has been around
        since the beginning of Angular and it has a lot of baggage that adds unnecessary overhead
        for users that generally want to define a singleton service, available in their entire app.
        The key differences between @Service and @Injectable are:
        <ol>
          <li>
            @Service is providedIn: 'root' by default. You can opt into providing the service
            yourself by setting autoProvided: false on it.
          </li>
          <li>@Service doesn't allow constructor-based injection, only the inject function.</li>
          <li>
            @Service doesn't support the complex type signature of @Injectable (useClass, useValue
            etc.). Instead it supports a single factory function.
          </li>
        </ol>
      </blockquote>
      <p>
        <cite
          ><a href="https://github.com/angular/angular/pull/68195" target="_blank"
            >PR that added it</a
          ></cite
        >
      </p>
    </div>
    <p>TODO - example</p>
  `,
})
export class ServiceExample {}
