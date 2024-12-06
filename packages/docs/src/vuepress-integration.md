# VuePress Integration

Vue-Termynal was created to make documentation sites prettier. Fortunately [VuePress](https://vuepress.vuejs.org/) can render Vue.js components out of the box, so using this library with it is fairly trivial.

Create a file in your `docs/.vuepress` folder called `client.{js|ts}` with the following content:

```js [client.js]
import { defineClientConfig } from "@vuepress/client"
import VueTermynalPlugin from "@lehoczky/vue-termynal"

export default defineClientConfig({
  enhance({ app }) {
    app.use(VueTermynalPlugin)
  },
})
```

After this, you can use the components like in any other vue app.

Read more about `defineClientConfig` in the [official docs](https://vuepress.vuejs.org/guide/configuration.html#client-config-file).
