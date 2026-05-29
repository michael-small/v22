> PR [#67228](https://github.com/angular/angular/pull/67228) — adds `browserUrl` input to `RouterLink`.
>
> Closes [#66805](https://github.com/angular/angular/issues/66805) — support `browserUrl` from `NavigationBehaviorOptions` in `RouterLink`.
>
> Now you can set a custom browser URL separately from the internal router URL directly in the template, without needing a programmatic navigation.
>
> See [Customizing the browser URL with RouterLink](https://next.angular.dev/guide/routing/navigate-to-routes#customizing-the-browser-url-with-routerlink).

### Usage

Pass `[browserUrl]` to a `RouterLink` to override the address bar URL — useful for clean URLs, masking internal paths, or showing a friendly error URL:	

```html
<!-- Internal route: /content/angular-guide/42, browser shows: /blog/angular-guide -->
<a routerLink="/content/angular-guide/42" [browserUrl]="'/blog/angular-guide'">
  Angular Guide
</a>
```

The router navigates to the internal path — component, resolvers, and guards all see the internal route — but the browser address bar displays the `browserUrl` value.

### Notes

- Supports `string` and `UrlTree` values
- Works alongside `queryParams`, `fragment`, `state`, `skipLocationChange`, `replaceUrl`
- Updates via `history.replaceState` — bookmarkable and shareable
