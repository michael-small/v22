import { Component } from '@angular/core';

@Component({
  selector: 'app-v21-1',
  template: `
    <h3>v21.1</h3>
    <a href="https://blog.ninja-squad.com/2026/01/15/what-is-new-angular-21.1" target="_blank"
      >What's new in Angular 21.1? - Ninja Squad - Cédric Exbrayat</a
    >

    <p>A selection of features from 21.1 that are explained in the article:</p>
    <ul>
      <li>
        Multiple &commat;switch conditions in a single block
        <ul>
          <li>
            <a href="https://www.youtube.com/shorts/GLvYUv7MP7o" target="_blank">Igor YT</a>
          </li>
        </ul>
      </li>
      <li>
        Template spread operator
        <ul>
          <li>
            <code>{{ spreadTextObject }}</code>
          </li>
          <li>
            <code>{{ spreadTextArray }}</code>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=VX3fQ-qjSwk" target="_blank">Igor YT</a>
          </li>
        </ul>
      </li>
      <li>Routing</li>
      <li>Smoother Jasmine to Vitest migration</li>
      <li>MCP improvements</li>
    </ul>
  `,
})
export class V21_1 {
  spreadTextObject = "{...obj, foo: 'bar'}";
  spreadTextArray = '[...arr, 1, 2, 3]';
}
