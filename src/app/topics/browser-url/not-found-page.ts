import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  template: `
    <div class="card error">
      <strong>404 — Page not found</strong>
      <p>The page you requested does not exist.</p>
      <p class="note">Browser URL shows <code>/page-not-found</code> — the internal path is hidden.</p>
      <a routerLink="/">← Back to examples</a>
    </div>
  `,
  styles: [
    `
    .card { border: 1px solid #ccc; border-radius: 8px; padding: 16px; margin-top: 12px; background: #fafafa; }
    .error { border-color: #e74c3c; background: #fdf0ef; }
    .note { font-size: 0.9em; color: #555; }
    `,
  ],
})
export class NotFoundPage {}
