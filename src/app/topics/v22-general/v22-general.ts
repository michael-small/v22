import { Component } from '@angular/core';

@Component({
  selector: 'app-v22-general',
  template: `
    <ul>
      <li>
        <a
          href="https://next.angular.dev/update-guide?v=21.0-22.0&l=3"
          target="_blank"
          target="_blank"
          >The official update guide</a
        >
      </li>
      <li>
        <a href="https://github.com/angular/angular/releases/tag/v22.0.0" target="_blank"
          >22 core packages release notes</a
        >
      </li>
      <li>
        <a href="https://github.com/angular/angular-cli/releases/tag/v22.0.0" target="_blank"
          >22 CLI release notes</a
        >
      </li>
    </ul>

    <p>
      <a href="https://github.com/angular/angular/pull/69108" target="_blank"
        >PR for v22 documentation announcement</a
      >. Once the official blog post is live, I will update this link to go to that instead.
    </p>
    <p>
      <a
        href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html"
        target="_blank"
        >Typescript 6.0</a
      >
      and Node ^22.22.3 || ^24.15.0 || ^26.0.0.
      <a href="https://angular.dev/reference/versions#actively-supported-versions" target="_blank"
        >Doc link on version compatability, as well as LTS info. v20 is now the lowest LTS.</a
      >
    </p>

    <p>
      <a href="https://blog.ninja-squad.com/2026/06/03/what-is-new-angular-22.0" target="_blank"
        >Ninja Squad's blog post on Angular 22</a
      >
    </p>
    <p>
      <a href="https://www.youtube.com/watch?v=CnQr8bAYKKY" target="_blank"
        >A+ Show S11E11 | Angular 22 Has Landed — And It’s Built for the Future with Mark Techson
      </a>
    </p>
  `,
})
export class V22General {}
