# Getting Started

## Installation

```sh
npm i @lehoczky/vue-termynal
```

## Simple example

First, import and register the components:

```js
import { defineComponent } from "vue"
import {
  VTermynal,
  VtInput,
  VtProgress,
  VtSpinner,
  VtText,
} from "@lehoczky/vue-termynal"

export default defineComponent({
  components: { VTermynal, VtInput, VtProgress, VtSpinner, VtText },
})
```

Then in the template, create simple terminal like this:

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
