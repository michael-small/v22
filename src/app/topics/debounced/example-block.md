[Docs: Debouncing signals with debounced](https://next.angular.dev/guide/signals/debounced#)
  
300ms debounce delay set for the `debouncedQuery`, and faking a 500ms network delay so the resource can seem like it is loading.

```ts
  query = signal('');
  debouncedQuery = debounced(this.query, 300);
  results = resource({
    params: () => this.debouncedQuery.value(),
    loader: ({params}) => fetchResults(params),
  });
```