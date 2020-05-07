# Using React with Mobx without Inject

Since the introduction of React Context, the inject pattern [is considered obsolete](https://mobx-react.js.org/recipes-inject) and it's highly recommended to migrate away over time.

Here's a little example I created with a custom React Hook to consume a Mobx Store.

Wherever you need a store just bring it into a functional component such as:

```
const { sessionStore, userStore } = useStores();
```

Don't forget to wrap the component in `mobx-react` : `observer`
