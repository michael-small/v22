import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideIdleServiceWith } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideMarkdown } from 'ngx-markdown';
import { PriorityIdleService } from './topics/defer-idle/defer-idle';
import { Home } from './home';
import { PostView } from './topics/browser-url/post-view';
import { NotFoundPage } from './topics/browser-url/not-found-page';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideMarkdown(),
    provideIdleServiceWith(PriorityIdleService),
    provideRouter([
      { path: 'content/:slug/:id', component: PostView },
      { path: '', component: Home },
      { path: '**', component: NotFoundPage },
    ]),
  ],
};
