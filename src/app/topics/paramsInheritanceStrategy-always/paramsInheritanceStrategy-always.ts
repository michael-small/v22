import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
})
export class Organization {}
@Component({
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
})
export class Project {}
@Component({
  imports: [RouterLink],
  template: `
    <p>Organization ID: {{ orgId }}</p>
    <p>Project ID: {{ projectId }}</p>
    <p>Customer ID: {{ customerId }}</p>
    <button routerLink="">Go Home</button>
  `,
})
export class Customer {
  route = inject(ActivatedRoute);

  // Needed with the old default, now called `emptyOnly`
  //   orgId = this.route.parent?.parent?.snapshot.params['orgId'];
  //   projectId = this.route.parent?.snapshot.params['projectId'];
  //   customerId = this.route.snapshot.params['customerId'];

  // The new default, `always`, streamlines this
  orgId = this.route.snapshot.params['orgId'];
  projectId = this.route.snapshot.params['projectId'];
  customerId = this.route.snapshot.params['customerId'];
}

@Component({
  selector: 'app-params-inheritance-strategy-always',
  imports: [RouterLink],
  template: `
    <p>
      "<code>paramsInheritanceStrategy</code> defines how route parameters and data flow from parent
      routes. By default (<code>'always'</code>), child routes automatically inherit parameters,
      route data, and resolved values from parent routes." - docs
    </p>

    <p>
      <a
        href="https://next.angular.dev/guide/routing/customizing-route-behavior#control-parameter-inheritance"
        target="_blank"
        >Params Inheritance Strategy - Always</a
      >
    </p>

    <p>
      <a
        href="https://next.angular.dev/api/router/ExtraOptions#paramsInheritanceStrategy"
        target="_blank"
        >API doc, and mention of old default</a
      >
    </p>

    <p>
      To see this in action, go to this app's router config. Notice the commented out
      <code>{{ configText }}</code
      >. Go to this example route below, see how the current default ('always') works, then comment
      in the old default ('emptyOnly').
    </p>

    <button routerLink="/org/1/projects/2/customers/3">Go to example route</button>

    <p>
      <a href="https://next.angular.dev/update-guide?v=21.0-22.0&l=3" target="_blank"
        >The official update guide</a
      >
      mentions this and what to do to preserve the old default.
    </p>
  `,
})
export class ParamsInheritanceStrategyAlways {
  configText = "withRouterConfig({ paramsInheritanceStrategy: 'emptyOnly' })";
}
