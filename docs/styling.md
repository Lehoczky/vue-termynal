# Styling

Vue-Termynal takes the approach of using selectors with a single level of specificity, while using classes that are very specific to Vue-Termynal to avoid collisions with your app.

All classes within Vue-Termynal use the `vt__` prefix, and selectors are generally a single classname.

In order to override a default property in your app, you should add one level of specificity. The easiest way to do this, is to add `.v-termynal` before the `vt__*` selector if you want to adjust all instances of Vue-Termynal, or add your own classname if you just want to affect one.

```vue
<template>
  <v-termynal>
    <vt-input>pip install spaCy</vt-input>
    <vt-progress />
    <vt-text>Successfully installed spacy</vt-text>
  </v-termynal>

  <v-termynal class="bold-termynal">
    <vt-input>pip install spaCy</vt-input>
    <vt-progress />
    <vt-text>Successfully installed spacy</vt-text>
  </v-termynal>
</template>

<style scoped>
/* Applies to both terminals */
.v-termynal .vt__line {
  line-height: 3;
}

/* Only applies to the second one */
.bold-termynal .vt__line {
  font-weight: bold;
}
</style>
```

To change the style of the terminal window itself you don't need to use any `vt__` prefixed class:

```vue
<template>
  <v-termynal class="termynal">
    <vt-input>pip install spaCy</vt-input>
    <vt-progress />
    <vt-text>Successfully installed spacy</vt-text>
  </v-termynal>
</template>

<style scoped>
.termynal {
  width: 850px;
  padding: 35px 25px;
}
</style>
```

## Changing colors

Colors are defined with native css variables, the defaults are:

```css
:root {
  --vt-color-bg: #252a33;
  --vt-color-text: #eee;
  --vt-color-text-subtle: #a2a2a2;
}
```

Example for a light theme:

```vue
<template>
  <v-termynal class="light-termynal">
    <vt-input>pip install spaCy</vt-input>
    <vt-progress />
    <vt-text>Successfully installed spacy</vt-text>
  </v-termynal>
</template>

<style scoped>
.light-termynal {
  --vt-color-bg: #ddd;
  --vt-color-text: #1a1e24;
  --vt-color-text-subtle: #d76d77;
}
</style>
```

<v-termynal :line-delay="0" :start-delay="0" :type-delay="0" class="light-termynal">
  <vt-input>pip install spaCy</vt-input>
  <vt-progress />
  <vt-text>Successfully installed spacy</vt-text>
</v-termynal>

<style>
.light-termynal {
  --vt-color-bg: #ddd;
  --vt-color-text: #1a1e24;
  --vt-color-text-subtle: #d76d77;
}
</style>

## Prompt styles

To make prompts easy to customise and style, they are defined as `:before` pseudo-elements:

```css
/* Default style of prompts */
[vt__prompt]::before {
  margin-right: 0.75em;
  color: var(--color-text-subtle);
}

/* Make only >>> prompt red */
[vt__prompt=">>>"]::before {
  color: red;
}
```

## Cursor animation

You can change the cursor animation by using the `[vt__cursor]::after` css selector:

```css
[vt__cursor]::after {
  animation: blink 0.2s infinite;
}
```
