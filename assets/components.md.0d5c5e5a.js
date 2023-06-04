import{_ as D,c as y,I as t,E as s,C as c,a as e,V as l,J as a,o as F}from"./chunks/framework.88d4b99e.js";const P=JSON.parse('{"title":"Components","description":"","frontmatter":{},"headers":[],"relativePath":"components.md","filePath":"components.md"}'),h={name:"components.md"},m=l(`<h1 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-label="Permalink to &quot;Components&quot;">​</a></h1><h2 id="terminal" tabindex="-1">Terminal <a class="header-anchor" href="#terminal" aria-label="Permalink to &quot;Terminal&quot;">​</a></h2><p>The terminal is the container of each line. You can specify properties on the terminal that will be used as default values for it&#39;s children.</p><p>The following props are available:</p><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>startDelay</code></td><td>number</td><td><code>600</code></td><td>Delay before animation, in ms.</td></tr><tr><td><code>typeDelay</code></td><td>number</td><td><code>90</code></td><td>Delay between each typed character, in ms.</td></tr><tr><td><code>lineDelay</code></td><td>number</td><td><code>1500</code></td><td>Delay between each line, in ms.</td></tr><tr><td><code>progressLength</code></td><td>number</td><td><code>40</code></td><td>Number of characters displayed as progress bar.</td></tr><tr><td><code>progressChar</code></td><td>string</td><td><code>&#39;█&#39;</code></td><td>Character to use for progress bar.</td></tr><tr><td><code>progressPercent</code></td><td>number</td><td><code>100</code></td><td>Max percent of progress.</td></tr><tr><td><code>progressDelay</code></td><td>number</td><td><code>90</code></td><td>Delay between each progress character, in ms.</td></tr><tr><td><code>spinnerType</code></td><td>string</td><td><code>dots</code></td><td>Type of each spinner, defaults to <code>dots</code>.</td></tr><tr><td><code>spinnerFrameDelay</code></td><td>number</td><td><code>80</code></td><td>Delay between each spinner frame, in ms.</td></tr><tr><td><code>spinnerDuration</code></td><td>number</td><td><code>1.5</code></td><td>Seconds to wait before finishing each spinner&#39;s animation.</td></tr><tr><td><code>cursor</code></td><td>string</td><td><code>&#39;▋&#39;</code></td><td>Character to use for cursor.</td></tr><tr><td><code>lazy</code></td><td>boolean</td><td><code>false</code></td><td>Only start the animation when the terminal enters the viewport.</td></tr><tr><td><code>forwardButton</code></td><td>boolean</td><td><code>false</code></td><td>Whether to a show the fast forward button.</td></tr><tr><td><code>restartButton</code></td><td>boolean</td><td><code>false</code></td><td>Whether to a show the restart button.</td></tr></tbody></table><p>Emitted events:</p><table><thead><tr><th>Name</th><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td><code>start</code></td><td>none</td><td>Emitted only once, when the terminal first starts it&#39;s animation.</td></tr><tr><td><code>before-new-line</code></td><td>HTMLElement</td><td>Emits the next line&#39;s HTML Element before it&#39;s shown.</td></tr><tr><td><code>fast-forward</code></td><td>none</td><td>Emitted when the user clicks on the fast forward button.</td></tr><tr><td><code>finish</code></td><td>none</td><td>Emitted when the terminal finished it&#39;s animation.</td></tr><tr><td><code>restart</code></td><td>none</td><td>Emitted when the user clicks on the restart button. Note: this will not trigger a <code>start</code> event afterwards.</td></tr></tbody></table><h2 id="text" tabindex="-1">Text <a class="header-anchor" href="#text" aria-label="Permalink to &quot;Text&quot;">​</a></h2><p>Simple output, no typing.</p><p>Props: <code>lineDelay</code></p><p>Example:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-termynal</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">vt-text</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello there!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">vt-text</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">v-termynal</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,12),u=l(`<h2 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h2><p>Simple prompt with animated user input and cursor.</p><p>Props: <code>lineDelay</code>, <code>typeDelay</code>, <code>prompt</code></p><p>The prompt specifies the characters that are displayed before each line, for example, to indicate command line inputs or interpreters (like &gt;&gt;&gt; for Python). By default, Termynal displays a <code>$</code> before each user input line.</p><p>Example:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-termynal</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">vt-input</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">the default input</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">vt-input</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">vt-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">prompt</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&gt;&gt;&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">python prompt</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">vt-input</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">vt-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">prompt</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(.env)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">custom env prompt</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">vt-input</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">v-termynal</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,6),g=l(`<h2 id="progress" tabindex="-1">Progress <a class="header-anchor" href="#progress" aria-label="Permalink to &quot;Progress&quot;">​</a></h2><p>Animated progress bar.</p><p>Props: <code>lineDelay</code>, <code>progressLength</code>, <code>progressChar</code>, <code>progressPercent</code>, <code>progressDelay</code>, <code>prefix</code></p><p>Example:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-termynal</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">vt-progress</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">vt-progress</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:progress-length</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">45</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">progress-char</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">vt-progress</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:progress-percent</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">69</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">vt-progress</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">prefix</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Calculating:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:progress-length</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">26</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">v-termynal</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,5),_={id:"spinner",tabindex:"-1"},C=c("a",{class:"header-anchor",href:"#spinner","aria-label":'Permalink to "Spinner <Badge text="since 1.1.0" vertical="middle" />"'},"​",-1),f=l(`<p>Animated spinner that shows through a given amount of time.</p><p>See every type of spinner at the <a href="./examples.html#spinners">examples page</a>.</p><p>props: <code>type</code>, <code>frameDelay</code>, <code>duration</code>, <code>prefix</code></p><p>Example:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-termynal</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">vt-spinner</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">vt-spinner</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aesthetic</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">vt-spinner</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aesthetic</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">prefix</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Installing</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">v-termynal</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,5);function b(v,A,E,T,x,q){const d=a("vt-text"),n=a("v-termynal"),p=a("vt-input"),o=a("vt-progress"),i=a("Badge"),r=a("vt-spinner");return F(),y("div",null,[m,t(n,{"line-delay":0,"start-delay":0},{default:s(()=>[t(d,null,{default:s(()=>[e("Hello there!")]),_:1})]),_:1}),u,t(n,{"line-delay":0,"start-delay":0,"type-delay":0},{default:s(()=>[t(p,null,{default:s(()=>[e("the default input")]),_:1}),t(p,{prompt:">>>"},{default:s(()=>[e("python prompt")]),_:1}),t(p,{prompt:"(.env)"},{default:s(()=>[e("custom env prompt")]),_:1})]),_:1}),g,t(n,{"line-delay":0,"start-delay":0,"progress-delay":0},{default:s(()=>[t(o),t(o,{"progress-length":45,"progress-char":"."}),t(o,{"progress-percent":69}),t(o,{prefix:"Calculating:","progress-length":26})]),_:1}),c("h2",_,[e("Spinner "),t(i,{text:"since 1.1.0",vertical:"middle"}),e(),C]),f,t(n,{"line-delay":0,"start-delay":0,"spinner-duration":.1},{default:s(()=>[t(r),t(r,{type:"aesthetic"}),t(r,{type:"aesthetic",prefix:"Installing:"})]),_:1},8,["spinner-duration"])])}const S=D(h,[["render",b]]);export{P as __pageData,S as default};
