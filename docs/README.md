# Getting Started

## Installation

```sh
npm i @lehoczky/vue-termynal
```

## Simple example

First, import and register the components:

```js
import { defineComponent } from "vue"
import { VTermynal, VtInput, VtProgress, VtText } from "@lehoczky/vue-termynal"

export default defineComponent({
  components: { VTermynal, VtInput, VtProgress, VtText },
})
```

Then in the template, create simple terminal like this which will

```html
<v-termynal>
  <vt-input>pip install spaCy</vt-input>
  <vt-progress />
  <vt-text>Successfully installed spacy</vt-text>
</v-termynal>
```
