import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-safe-navigation-aligned-with-ts',
  imports: [MarkdownModule],
  template: `
    <markdown [src]="'safe-navigation-aligned-with-ts/safenav.md'" />

    <p><code>typeof foo?.bar</code>: {{ typeof foo?.bar }}</p>
    <p>
      <code>typeof foo?.bar === typeof nullValue</code>: {{ typeof foo?.bar === typeof nullValue }}
    </p>

    <p>
      <code>typeof $safeNavigationMigration(foo?.bar)</code>:
      {{ typeof $safeNavigationMigration(foo?.bar) }}
    </p>
    <p>
      <code>typeof $safeNavigationMigration(foo?.bar) === typeof nullValue</code>:
      {{ typeof $safeNavigationMigration(foo?.bar) === typeof nullValue }}
    </p>
  `,
})
export class SafeNavigationAlignedWithTS {
  foo: { bar: string } | null = null;
  nullValue = null;
}
