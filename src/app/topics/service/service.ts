import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable, Service } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

// @Service is equivalent...
@Service()
class MyServiceService {
  // VALID
  private thingInject = inject(HttpClient);

  // INVALID: Comment back in to get build error
  // constructor(private thingConstructor: HttpClient) {}
}

// ... to this
@Injectable({
  providedIn: 'root',
})
class MyServiceInjectable {
  // VALID
  private thingInject = inject(HttpClient);

  // VALID
  // constructor(private thingConstructor: HttpClient) {}
}

@Component({
  selector: 'app-service',
  imports: [MarkdownModule],
  template: ` <markdown [src]="'/service/service-bullet-points.md'" ngPreserveWhitespaces /> `,
  preserveWhitespaces: true,
})
export class ServiceExample {}
