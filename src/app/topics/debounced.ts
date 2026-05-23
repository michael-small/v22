import { Component, debounced, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-debounced',
  template: `
    <a href="https://next.angular.dev/guide/signals/debounced#" target="_blank"
      >Docs: Debouncing signals with debounced</a
    >

    <p>
      300ms debounce delay set for the "debouncedQuery", and faking a 500ms network delay so the
      resource can seem like it is loading.
    </p>

    <input (input)="query.set($event.target.value)" />
    @if (results.isLoading()) {
      <p>Searching…</p>
    }
    @for (item of results.value(); track item) {
      <li>{{ item }}</li>
    }

    <p>TODO - debounced</p>
  `,
})
export class Debounced {
  query = signal('');
  debouncedQuery = debounced(this.query, 300);
  results = rxResource({
    params: () => this.debouncedQuery.value(),
    stream: ({ params }) => of(params).pipe(delay(500)),
  });
}
