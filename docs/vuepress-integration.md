# VuePress Integration

Vue-Termynal was created to make documentation sites prettier. Fortunately VuePress can render Vue.js components out of the box, so using this library with it is fairly trivial.

## VuePress-next

Create a file in your `docs/.vuepress` folder called `clientAppEnhance.{js|ts}` with the following content:

```js
import { defineClientAppEnhance } from "@vuepress/client"
import { VTermynal, VtInput, VtProgress, VtSpinner, VtText } from "../../src"

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component("VTermynal", VTermynal)
  app.component("VtInput", VtInput)
  app.component("VtProgress", VtProgress)
  app.component("VtSpinner", VtSpinner)
  app.component("VtText", VtText)
})
```

After this, you can use the components like in any other vue app.

You can read more about `ClientAppEnhance` in the [offical docs](https://v2.vuepress.vuejs.org/advanced/cookbook/usage-of-client-app-enhance.html).
