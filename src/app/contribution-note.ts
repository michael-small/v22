import { Component } from '@angular/core';

@Component({
  selector: 'app-contribution-note',
  template: `
    <section class="author-note">
      <h2>Contribution note</h2>

      <p>Contributing to the Angular v22 demo has been a great experience.</p>

      <p>
        I still remember my first contribution to Angular almost a year ago: adding
        <a href="https://github.com/angular/angular/pull/60621" target="_blank" rel="noreferrer">
          <code>keepalive</code> support to HttpClient </a
        >. That PR sparked my curiosity about how Angular works internally and motivated me to keep
        exploring the framework and contributing whenever I can.
      </p>

      <p>
        I also remember seeing the feature highlighted on the
        <a href="https://www.youtube.com/shorts/aDf7YWHumi4" target="_blank" rel="noreferrer">
          Angular YouTube channel </a
        >, and the encouraging words
        <a href="https://github.com/michael-small" target="_blank" rel="noreferrer">Michael</a>
        shared with me at the time. Both moments gave me the motivation to keep exploring the
        codebase, learning more about Angular, and looking for ways to contribute back to the
        framework I use every day.
      </p>

      <p class="author-signoff">
        Shared by
        <a href="https://github.com/SkyZeroZx" target="_blank" rel="noreferrer">Jaime Burgos</a>.
      </p>
    </section>
  `,
})
export class ContributionNote {}
