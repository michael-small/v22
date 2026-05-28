import { Component, debounced, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { MarkdownModule } from 'ngx-markdown';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-debounced',
  imports: [MarkdownModule],
  template: `
    <markdown [src]="'/debounced/example-block.md'" ngPreserveWhitespaces />

    <input (input)="query.set($event.target.value)" />
    @if (results.isLoading()) {
      <p>Searching…</p>
    }
    @for (item of results.value(); track item) {
      <li>{{ item }}</li>
    }
  `,
  preserveWhitespaces: true,
})
export class Debounced {
  query = signal('');
  debouncedQuery = debounced(this.query, 300);
  results = rxResource({
    params: () => this.debouncedQuery.value(),
    stream: ({ params }) => of(params).pipe(delay(500)),
  });
}
