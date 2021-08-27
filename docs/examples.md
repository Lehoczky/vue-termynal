# Examples

<CodeGroup>

<CodeGroupItem title="Terminal" >

<v-termynal class="terminal" fixed-height  restart-button>
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
<v-termynal fixed-height forward-button restart-button>
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

<CodeGroup>

<CodeGroupItem title="Terminal" >

<v-termynal class="terminal light" :type-delay="40" :line-delay="700" :start-delay="0" fixed-height forward-button restart-button>
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
  class="terminal light"
  :type-delay="40"
  :line-delay="700"
  :start-delay="0"
  fixed-height
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

<CodeGroup>

<CodeGroupItem title="Terminal" >

<v-termynal class="terminal" fixed-height forward-button restart-button>
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
<v-termynal class="terminal" fixed-height forward-button restart-button>
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

<style scoped>
.terminal {
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
</style>
