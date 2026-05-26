> Imagine a `ReportExporter` that depends on a heavy spreadsheet library. Most users open the report;
> only a few click Export.
> [- Lazy Loading Services Guide](https://next.angular.dev/guide/di/lazy-loading-services#)

Load the exporter on demand by clicking the button.

Once you click this, check your console logs. Not only will the message that I added to the respective method call be logged, but you will
also see a log from the service's constructor that was created on demand.

<button (click)="export()">Export</button>
