# Getting Started

## Installation

```sh
npm i @lehoczky/vue-termynal
```

## Simple example

First, import and register the plugin in your `main.js` file:

```js
import App from "./App.vue"
import VueTermynalPlugin from "@lehoczky/vue-termynal"

createApp(App).use(VueTermynalPlugin).mount("#app")
```

Alternatively you can import the components directly:

```js
import { VTermynal, VtInput, VtProgress, VtText, VtSpinner } from "@lehoczky/vue-termynal"

export default defineComponent({
  components: { VTermynal, VtInput, VtProgress, VtText, VtSpinner },
  ...
})
```

Then in the template, create a simple terminal like this:

```html
<v-termynal>
  <vt-input>pip install spaCy</vt-input>
  <vt-progress />
  <vt-text>Successfully installed spacy</vt-text>
</v-termynal>
```

<v-termynal restart-button>
  <vt-input>pip install spaCy</vt-input>
  <vt-progress />
  <vt-text>Successfully installed spacy</vt-text>
</v-termynal>

As you can see each `vt-input` `vt-progress` `vt-text` component inside the `<v-termynal>` will be animated and shown line by line.

You will see how to customize these components in the following pages.
