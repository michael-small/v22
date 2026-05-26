import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-resources',
  imports: [MarkdownModule],
  template: ` <markdown [src]="'resources/resources.md'" /> `,
})
export class Resources {}
