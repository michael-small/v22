Resource are now stable.

> All signal APIs are synchronous— `signal`, `computed`, `input`, etc. However, applications often need to deal with data that is available asynchronously. A `Resource` gives you a way to incorporate async data into your application's signal-based code and still allow you to access its data synchronously.
>
> You can use a `Resource` to perform any kind of async operation, but the most common use-case for `Resource` is fetching data from a server. The following example creates a resource to fetch some user data.
> [Documentation](https://angular.dev/guide/signals/resource)

### What type to choose?

Resource types:

- `resource`
- `rxResource`
- `httpResource`

Tradeoffs: [Deborah Kurata - resource(), rxResource(), httpResource(): Why????](https://youtu.be/YHZkiUbbeOg).

`httpResource` is likely what you want to reach for if you do not have pre-existing `HttpClient.get` functions in a pre-existing codebase. `httpResource` gives all the functionality but without needing to use RxJS directly.

Personally, I use `rxResource` because the codebases I work on have tons of existing `HttpClient.get` endpoints already. And recently we started adding complimentary resource constructing functions, [like this Deborah Kurata video](https://youtu.be/4VhiNK_9QIY) which uses `httpResource` as an example.
