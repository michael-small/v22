import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-enable-profiling',
  imports: [MarkdownModule],
  template: ` <markdown [src]="'/enable-profiling/example-block.md'" ngPreserveWhitespaces /> `,
  preserveWhitespaces: true,
})
export class EnableProfiling {}
