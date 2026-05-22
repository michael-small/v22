import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-aria',
  template: `
    <p><a href="https://angular.dev/guide/aria/overview" target="_blank">Docs</a></p>
    <div>
      <blockquote cite="https://angular.dev/guide/aria/overview">
        <p>
          Building accessible components seems straightforward, but implementing them according to
          the
          <a href="https://www.w3.org/TR/wcag/" target="_blank">W3C Accessibility Guidelines</a>
          requires significant effort and accessibility expertise.
        </p>

        <p>
          Angular Aria is a collection of headless, accessible directives that implement common
          <a href="https://www.w3.org/WAI/ARIA/apg/patterns/" target="_blank">WAI-ARIA patterns</a>.
          The directives handle keyboard interactions, ARIA attributes, focus management, and screen
          reader support. All you have to do is provide the HTML structure, CSS styling, and
          business logic!
        </p>
      </blockquote>
      <p>—Docs, <cite>What is Angular Aria?</cite></p>
    </div>

    <em>TODO: add examples</em>
  `,
})
export class AngularAria {}
