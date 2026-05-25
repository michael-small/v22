import { Component, injectAsync } from '@angular/core';

@Component({
  selector: 'app-injectAsync',
  template: `
    <p>TODO - point to live v22 documentation, also for citation</p>
    <p>
      <a href="https://next.angular.dev/guide/di/lazy-loading-services#" target="_blank"
        >Lazy Loading Services Guide</a
      >
    </p>

    <div>
      <blockquote cite="https://next.angular.dev/guide/di/lazy-loading-services#">
        Angular's injectAsync function lets you load a service on demand, only when it's actually
        needed. This is useful when a service depends on a large library or rarely used feature, and
        you don't want to pay for it on the initial page load. When you use injectAsync, the
        service's code is split out by your bundler into a separate JavaScript chunk and downloaded
        the first time you ask for the instance. Once loaded, Angular resolves the service through
        the regular DI system, so it can still depend on other injectables and behaves like any
        other singleton.
      </blockquote>
      <p>
        <cite
          ><a href="https://next.angular.dev/guide/di/lazy-loading-services#" target="_blank"
            >Doc example</a
          ></cite
        >
      </p>
    </div>

    <p>
      Docs: "Imagine a ReportExporter that depends on a heavy spreadsheet library. Most users open
      the report; only a few click Export. Load the exporter on demand:". Once you click this, check
      your console logs. Not only will the message that I added to the respective method call be
      logged, but you will also see a log from the service's constructor that was created on demand.
    </p>
    <button (click)="export()">Export</button>
  `,
})
export class InjectAsync {
  private exporter = injectAsync(() => import('./lazy-service').then((m) => m.LazyService));

  async export() {
    const exporter = await this.exporter();
    exporter.export();
  }
}
