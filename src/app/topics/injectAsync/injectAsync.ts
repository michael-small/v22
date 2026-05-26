import { CommonModule } from '@angular/common';
import { Component, injectAsync } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-injectAsync',
  imports: [MarkdownModule, CommonModule],
  templateUrl: './injectAsync.html',
  preserveWhitespaces: true,
})
export class InjectAsync {
  private exporter = injectAsync(() => import('./lazy-service').then((m) => m.LazyService));

  async export() {
    const exporter = await this.exporter();
    exporter.export();
  }
}
