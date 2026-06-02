import { Component } from '@angular/core';
import { V21_2 } from './v21.2';
import { V21_1 } from './v21.1';

@Component({
  selector: 'app-v21-minors',
  imports: [V21_1, V21_2],
  template: `
    <p>
      If you are going up an entire major version, then these changes from the minor versions might
      as well be v22 features for you!
    </p>

    <p>Bonus links to the documentation or Igor Sedov's YouTube videos</p>

    <app-v21-1 />
    <app-v21-2 />

    <p>
      Many of these features were also covered in
      <a href="https://io.google/2026/explore/technical-session-31" target="_blank"
        >Angular's 2026 Google I/O keynote.</a
      >
    </p>
  `,
})
export class V21Minors {}
