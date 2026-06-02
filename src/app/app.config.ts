import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideIdleServiceWith,
} from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';
import { provideMarkdown } from 'ngx-markdown';
import { PriorityIdleService } from './topics/defer-idle/defer-idle';
import { Home } from './home';
import { PostView } from './topics/browser-url/post-view';
import { NotFoundPage } from './topics/browser-url/not-found-page';
import {
  Customer,
  Organization,
  Project,
} from './topics/paramsInheritanceStrategy-always/paramsInheritanceStrategy-always';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideMarkdown(),
    provideIdleServiceWith(PriorityIdleService),
    provideRouter(
      [
        { path: 'content/:slug/:id', component: PostView },
        { path: '', component: Home },
        {
          path: 'org/:orgId',
          component: Organization,
          children: [
            {
              path: 'projects/:projectId',
              component: Project,
              children: [
                {
                  path: 'customers/:customerId',
                  component: Customer,
                },
              ],
            },
          ],
        },
        { path: '**', component: NotFoundPage },
      ],
      // Default is `always`
      // Comment the following back in to see the old default
      // withRouterConfig({ paramsInheritanceStrategy: 'emptyOnly' }),
    ),
  ],
};
