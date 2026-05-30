import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-view',
  imports: [RouterLink],
  template: `
    <div class="card">
      <strong>Post loaded</strong>
      <p>Slug: <code>{{ slug }}</code></p>
      <p>ID: <code>{{ id }}</code></p>
      <p class="note">Browser URL shows <code>/blog/{{ slug }}</code> — internal route is <code>/content/{{ slug }}/{{ id }}</code></p>
      <a routerLink="/">← Back to examples</a>
    </div>
  `,
  styles: [
    `
    .card { border: 1px solid #ccc; border-radius: 8px; padding: 16px; margin-top: 12px; background: #fafafa; }
    .note { font-size: 0.9em; color: #555; }
    `,
  ],
})
export class PostView {
  route = inject(ActivatedRoute);
  slug = this.route.snapshot.params['slug'];
  id = this.route.snapshot.params['id'];
}
