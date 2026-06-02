import { Component } from '@angular/core';

@Component({
  selector: 'app-comments-in-html-element',
  template: `
    <p>
      <a href="https://www.youtube.com/shorts/TPsNfRc-2yk" target="_blank">Igor video</a>
    </p>
    <p>
      <a href="https://github.com/angular/angular/pull/67179" target="_blank"
        >PR feat(compiler): Support comments in html elements</a
      >
    </p>
    <p>Some tooling support pending, hence no demo for the stream</p>
  `,
})
export class CommentsInHtmlElement {}
