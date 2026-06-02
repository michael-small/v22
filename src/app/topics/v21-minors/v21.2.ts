import { Component } from '@angular/core';

@Component({
  selector: 'app-v21-2',
  template: `
    <h3>v21.2</h3>
    <a href="https://blog.ninja-squad.com/2026/02/26/what-is-new-angular-21.2" target="_blank"
      >What's new in Angular 21.2? - Ninja Squad - Cédric Exbrayat</a
    >

    <p>A selection of features from 21.2 that are explained in the article:</p>
    <ul>
      <li>
        Template arrow functions

        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=8DgXdhbQdtc" target="_blank">Igor YT</a>
          </li>
        </ul>
      </li>
      <li>
        Exhaustive &commat;switch checks w/never keyword
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=G6y9j21OkxQ" target="_blank">Igor YT</a>
          </li>
        </ul>
      </li>
      <li>ChangeDetectionStrategy.Eager</li>
      <li>
        Resource snapshot
        <ul>
          <li>
            <a
              href="https://next.angular.dev/guide/signals/resource#composing-resources-with-snapshots"
              target="_blank"
              >Documentation</a
            >
          </li>
        </ul>
      </li>
      <li>Nested animation</li>
      <li>More routing</li>
      <li>Resource visualization in Angular DevTools</li>
      <li>ng add for Vitest browser providers</li>
      <li>
        Built-in Prettier in CLI for new projects
        <ul>
          <li>See source of this project</li>
        </ul>
      </li>
    </ul>
  `,
})
export class V21_2 {}
