import { CommonModule } from '@angular/common';
import { Component, debounced, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { MarkdownModule } from 'ngx-markdown';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-debounced',
  imports: [MarkdownModule, CommonModule],
  templateUrl: './debounced.html',
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
