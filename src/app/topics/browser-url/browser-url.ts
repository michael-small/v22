import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-browser-url',
  imports: [MarkdownModule, RouterLink],
  template: `
    <markdown [src]="'/browser-url/example-block.md'" ngPreserveWhitespaces />

    <section>
      <h3>Blog posts — clean URLs in the address bar</h3>
      <p>
        Internal route: <code>/content/&#123;slug&#125;/&#123;id&#125;</code> &nbsp;|&nbsp;
        Browser shows: <code>/blog/&#123;slug&#125;</code>
      </p>
      <ul>
        <li>
          <a routerLink="/content/angular-signals-guide/1" [browserUrl]="'/blog/angular-signals-guide'">
            Angular Signals Guide
          </a>
        </li>
        <li>
          <a routerLink="/content/defer-loading-patterns/2" [browserUrl]="'/blog/defer-loading-patterns'">
            Defer Loading Patterns
          </a>
        </li>
        <li>
          <a routerLink="/content/ssr-migration-tips/3" [browserUrl]="'/blog/ssr-migration-tips'">
            SSR Migration Tips
          </a>
        </li>
      </ul>
    </section>

    <section>
      <h3>Broken link — clean error URL</h3>
      <p>
        Internal route: <code>/this/does/not/exist</code> &nbsp;|&nbsp;
        Browser shows: <code>/page-not-found</code>
      </p>
      <a routerLink="/this/does/not/exist" [browserUrl]="'/page-not-found'">
        Simulate broken link
      </a>
    </section>
  `,
  styles: [
    `
    section { margin: 16px 0; padding: 12px; border: 1px solid #eee; border-radius: 6px; }
    li { margin: 8px 0; }
    `,
  ],
})
export class BrowserUrl {}
