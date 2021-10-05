# Examples

## Default theme

<CodeGroup>

<CodeGroupItem title="Terminal" >

<v-termynal forward-button restart-button lazy>
  <vt-input>pip install spacy</vt-input>
  <vt-progress />
  <vt-text>Successfully installed spacy</vt-text>
  <vt-text />
  <vt-input>python -m spacy download en</vt-input>
  <vt-progress />
  <vt-text>Installed model 'en'</vt-text>
  <vt-text />
  <vt-input>python</vt-input>
  <vt-input prompt=">>>">import spacy</vt-input>
  <vt-input prompt=">>>">nlp = spacy.load('en')</vt-input>
  <vt-input prompt=">>>">doc = nlp(u'Hello world')</vt-input>
  <vt-input prompt=">>>">print([(w.text, w.pos_) for w in doc])</vt-input>
  <vt-text>[('Hello', 'INTJ'), ('world', 'NOUN')]</vt-text>
</v-termynal>

  </CodeGroupItem>
  
  <CodeGroupItem title="HTML">

```html:no-line-numbers
<v-termynal forward-button restart-button lazy>
  <vt-input>pip install spacy</vt-input>
  <vt-progress />
  <vt-text>Successfully installed spacy</vt-text>
  <vt-text />
  <vt-input>python -m spacy download en</vt-input>
  <vt-progress />
  <vt-text>Installed model 'en'</vt-text>
  <vt-text />
  <vt-input>python</vt-input>
  <vt-input prompt=">>>">import spacy</vt-input>
  <vt-input prompt=">>>">nlp = spacy.load('en')</vt-input>
  <vt-input prompt=">>>">doc = nlp(u'Hello world')</vt-input>
  <vt-input prompt=">>>">print([(w.text, w.pos_) for w in doc])</vt-input>
  <vt-text>[('Hello', 'INTJ'), ('world', 'NOUN')]</vt-text>
</v-termynal>
```

  </CodeGroupItem>

</CodeGroup>

## Light theme

<CodeGroup>

<CodeGroupItem title="Terminal" >

<v-termynal class="light" :type-delay="40" :line-delay="700" :start-delay="0" forward-button restart-button lazy>
  <vt-input prompt="▲">npm uninstall react</vt-input>
  <vt-text>Are you sure you want to uninstall 'react'?</vt-text>
  <vt-input prompt="(y/n)" :type-delay="1000">y</vt-input>
  <vt-progress progress-char="·" />
  <vt-text>Uninstalled 'react'</vt-text>
  <vt-input prompt="▲">node</vt-input>
  <vt-input prompt=">">Array(5).fill('🦄 ')</vt-input>
  <vt-text>['🦄', '🦄', '🦄', '🦄', '🦄']</vt-text>
  <vt-input prompt="▲">cd ~/repos</vt-input>
  <vt-input prompt="▲  ~/repos">git checkout branch master</vt-input>
  <vt-input prompt="▲  ~/repos (master)"
    >git commit -m "Fix things"</vt-input
  >
</v-termynal>

  </CodeGroupItem>
  
  <CodeGroupItem title="HTML">

```html:no-line-numbers
<v-termynal
  :type-delay="40"
  :line-delay="700"
  :start-delay="0"
  forward-button
  restart-button
>
  <vt-input prompt="▲">npm uninstall react</vt-input>
  <vt-text>Are you sure you want to uninstall 'react'?</vt-text>
  <vt-input prompt="(y/n)" :type-delay="1000">y</vt-input>
  <vt-progress progress-char="·" />
  <vt-text>Uninstalled 'react'</vt-text>
  <vt-input prompt="▲">node</vt-input>
  <vt-input prompt=">">Array(5).fill('🦄 ')</vt-input>
  <vt-text>['🦄', '🦄', '🦄', '🦄', '🦄']</vt-text>
  <vt-input prompt="▲">cd ~/repos</vt-input>
  <vt-input prompt="▲  ~/repos">git checkout branch master</vt-input>
  <vt-input prompt="▲  ~/repos (master)"
    >git commit -m "Fix things"</vt-input
  >
</v-termynal>
```

  </CodeGroupItem>

  <CodeGroupItem title="CSS">

```css:no-line-numbers
:root {
  --vt-color-bg: #ddd;
  --vt-color-text: #1a1e24;
  --vt-color-text-subtle: #d76d77;
  --vt-color-btn: #881823;
  --vt-color-btn-hover: #460c12;
}
```

  </CodeGroupItem>

</CodeGroup>

## Text elements as explanations

<CodeGroup>

<CodeGroupItem title="Terminal" >

<v-termynal forward-button restart-button lazy>
  <vt-text class="comment">💬 Go to the home directory</vt-text>
  <vt-input>cd</vt-input>
  <vt-text class="comment">💬 Create a directory for all your code projects</vt-text>
  <vt-input>mkdir code</vt-input>
  <vt-text class="comment">💬 Enter into that code directory</vt-text>
  <vt-input>cd code</vt-input>
  <vt-text class="comment">💬 Create a directory for this project</vt-text>
  <vt-input>mkdir sqlmodel-tutorial</vt-input>
  <vt-text class="comment">💬 Enter into that directory</vt-text>
  <vt-input>cd sqlmodel-tutorial</vt-input>
</v-termynal>

  </CodeGroupItem>
  
  <CodeGroupItem title="HTML">

```html:no-line-numbers
<v-termynal forward-button restart-button>
  <vt-text class="comment">💬 Go to the home directory</vt-text>
  <vt-input>cd</vt-input>
  <vt-text class="comment">💬 Create a directory for all your code projects</vt-text>
  <vt-input>mkdir code</vt-input>
  <vt-text class="comment">💬 Enter into that code directory</vt-text>
  <vt-input>cd code</vt-input>
  <vt-text class="comment">💬 Create a directory for this project</vt-text>
  <vt-input>mkdir sqlmodel-tutorial</vt-input>
  <vt-text class="comment">💬 Enter into that directory</vt-text>
  <vt-input>cd sqlmodel-tutorial</vt-input>
</v-termynal>
```

  </CodeGroupItem>

  <CodeGroupItem title="CSS">

```css:no-line-numbers
.comment {
  color: #4a968f;
  font-style: italic;
}
```

  </CodeGroupItem>

</CodeGroup>

## Spinners

Frame delay is the default (80 ms) where not specified.

<div class="spinners">

##### dots (default)

  <v-termynal>
      <vt-spinner type="dots" :duration="Infinity"/>
  </v-termynal>

##### dots2

  <v-termynal>
      <vt-spinner type="dots2" :duration="Infinity"/>
  </v-termynal>

##### dots3

  <v-termynal>
      <vt-spinner type="dots3" :duration="Infinity"/>
  </v-termynal>

##### dots4

  <v-termynal>
      <vt-spinner type="dots4" :duration="Infinity"/>
  </v-termynal>

##### line (frame-delay: 130)

  <v-termynal>
      <vt-spinner type="line" :duration="Infinity" :frame-delay="130"/>
  </v-termynal>

##### line2 (frame-delay: 100)

  <v-termynal>
      <vt-spinner type="line2" :duration="Infinity" :frame-delay="100"/>
  </v-termynal>

##### simpleDots (frame-delay: 400)

  <v-termynal>
      <vt-spinner type="simpleDots" :duration="Infinity" :frame-delay="400"/>
  </v-termynal>

##### simpleDotsScrolling (frame-delay: 200)

  <v-termynal>
      <vt-spinner type="simpleDotsScrolling" :duration="Infinity" :frame-delay="200"/>
  </v-termynal>

##### bounce (frame-delay: 120)

  <v-termynal>
      <vt-spinner type="bounce" :duration="Infinity" :frame-delay="120"/>
  </v-termynal>

##### arc (frame-delay: 100)

  <v-termynal>
      <vt-spinner type="arc" :duration="Infinity" :frame-delay="100"/>
  </v-termynal>

##### circleQuarters (frame-delay: 180)

  <v-termynal>
      <vt-spinner type="circleQuarters" :duration="Infinity" :frame-delay="180"/>
  </v-termynal>

##### bouncingBar

  <v-termynal>
      <vt-spinner type="bouncingBar" :duration="Infinity"/>
  </v-termynal>

##### bouncingBall

  <v-termynal>
      <vt-spinner type="bouncingBall" :duration="Infinity"/>
  </v-termynal>

##### clock (frame-delay: 100)

  <v-termynal>
      <vt-spinner type="clock" :duration="Infinity" :frame-delay="100"/>
  </v-termynal>

##### christmas (frame-delay: 400)

  <v-termynal>
      <vt-spinner type="christmas" :duration="Infinity" :frame-delay="400"/>
  </v-termynal>

##### point (frame-delay: 125)

  <v-termynal>
      <vt-spinner type="point" :duration="Infinity" :frame-delay="125"/>
  </v-termynal>

##### aesthetic

  <v-termynal>
      <vt-spinner type="aesthetic" :duration="Infinity"/>
  </v-termynal>
</div>

<style scoped>
.v-termynal {
  margin-top: 15px;
}

.light {
  --vt-color-bg: #ddd;
  --vt-color-text: #1a1e24;
  --vt-color-text-subtle: #d76d77;
  --vt-color-btn: #881823;
  --vt-color-btn-hover: #460c12;
}

.comment {
  color: #4a968f;
  font-style: italic;
}

.spinners {
  max-height: 40rem;
  overflow: auto;
  padding-right: 15px;
}

.spinners .v-termynal {
  padding: 0.5rem 1rem;
  margin-top: 0.3rem;
}

.spinners .v-termynal::before,
.spinners .v-termynal::after {
  display: none;
}
</style>
