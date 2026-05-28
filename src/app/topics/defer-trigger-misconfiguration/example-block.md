> New compile-time warnings for `@defer` trigger misconfiguration.
>
> Official docs: [Extended diagnostics overview](https://next.angular.dev/extended-diagnostics) • [NG8021: Defer Trigger Misconfiguration](https://next.angular.dev/extended-diagnostics/NG8021)
>
> - [#65553](https://github.com/angular/angular/pull/65553) — warning when `prefetch on viewport` matches the main `on viewport` trigger
> - [#67497](https://github.com/angular/angular/pull/67497) — diagnostics for `idle` prefetch timing conflict & warning when `prefetch` used without main trigger

### 1. Redundant viewport prefetch

Warning when `prefetch on viewport` has the same options as the main trigger. The prefetch provides no benefit.

```html
<!-- Warning: prefetch viewport matches main viewport -->
@defer (on viewport({rootMargin: '100px'}); prefetch on viewport({rootMargin: '100px'})) {
  <heavy-cmp />
}
```

### 2. Conflicting idle timeouts

Warning when idle timeout values differ between main trigger and prefetch.

```html
<!-- Warning: idle timeout mismatch -->
@defer (on idle(500ms); prefetch on idle(200ms)) {
  <heavy-cmp />
}
```

### 3. Prefetch without a main trigger

Warning when `prefetch` is specified but no main trigger is set. The main trigger silently defaults to `on idle`, which may surprise developers expecting the `when` condition to control loading.

```html
<!-- Warning: prefetch with no main trigger — defaults to on idle -->
@defer (prefetch when someFlag) {
  <heavy-cmp />
}
```
