import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { Dummy } from './dummy';

@Component({
  selector: 'app-defer-trigger-misconfiguration',
  imports: [MarkdownModule, CommonModule, Dummy],
  template: `
    <markdown [src]="'/defer-trigger-misconfiguration/example-block.md'" ngPreserveWhitespaces />

    <p>Look at the terminal running <code>ng serve</code> to see the NG8021 warnings.</p>

    <hr />

    <section>
      <h4>1. Redundant viewport prefetch</h4>
      @defer (
        on viewport({rootMargin: '100px', threshold: 0.5});
        prefetch on viewport({rootMargin: '100px', threshold: 0.5})
      ) {
        <heavy-cmp />
      } @placeholder {
        <p>Placeholder for viewport trigger</p>
      }
    </section>

    <section>
      <h4>2. Conflicting idle timeouts</h4>
      @defer (on idle(100ms); prefetch on idle(200ms)) {
        <heavy-cmp />
      } @placeholder {
        <p>Waiting for idle…</p>
      }
    </section>

    <section>
      <h4>3. Prefetch without main trigger</h4>
      @defer (prefetch when ready()) {
        <heavy-cmp />
      } @placeholder {
        <p>Prefetched, waiting for ready…</p>
      }
    </section>

    <button type="button" (click)="ready.set(true)">Set ready</button>
  `,
})
export class DeferTriggerMisconfiguration {
  ready = signal(false);
}
