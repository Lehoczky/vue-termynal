import{w as q,b as _,a5 as R,d as h,m as k,o as b,c as w,L as D,h as p,Y as E,a6 as M,q as C,B as j,D as P,G as F,r as S,X as z,Q as $,a7 as U,u as G,k as Q,a8 as H,a9 as W,aa as X,ab as Y,ac as J,ad as K,ae as Z,af as ee,ag as te,ah as ne,ai as re,aj as ae,ak as se,M as oe}from"./chunks/framework.88d4b99e.js";import{t as le}from"./chunks/theme.74e7ed43.js";function ie(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}const N=()=>{};function ue(e,t){const n=window&&"IntersectionObserver"in window;let r=N;const a=n?q(()=>_(e),o=>{if(r(),!o)return;const i=new window.IntersectionObserver(t);i.observe(o),r=()=>{i.disconnect(),r=N}},{immediate:!0,flush:"post"}):N,l=()=>{r(),a()};return R(()=>l()),{stopObserving:l}}const V=Symbol();async function T(e){await new Promise(t=>{setTimeout(t,e)})}const A={dots:["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"],dots2:["⣾","⣽","⣻","⢿","⡿","⣟","⣯","⣷"],dots3:["⠋","⠙","⠚","⠞","⠖","⠦","⠴","⠲","⠳","⠓"],dots4:["⠄","⠆","⠇","⠋","⠙","⠸","⠰","⠠","⠰","⠸","⠙","⠋","⠇","⠆"],line:["-","\\","|","/"],line2:["⠂","-","–","—","–","-"],simpleDots:[".  ",".. ","...","   "],simpleDotsScrolling:[".  ",".. ","..."," ..","  .","   "],star:["✶","✸","✹","✺","✹","✷"],bounce:["⠁","⠂","⠄","⠂"],arc:["◜","◠","◝","◞","◡","◟"],circleQuarters:["◴","◷","◶","◵"],bouncingBar:["[    ]","[=   ]","[==  ]","[=== ]","[ ===]","[  ==]","[   =]","[    ]","[   =]","[  ==]","[ ===]","[====]","[=== ]","[==  ]","[=   ]"],bouncingBall:["( ●    )","(  ●   )","(   ●  )","(    ● )","(     ●)","(    ● )","(   ●  )","(  ●   )","( ●    )","(●     )"],clock:["🕛","🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚"],christmas:["🌲","🎄"],point:["∙∙∙","●∙∙","∙●∙","∙∙●","∙∙∙"],aesthetic:["▰▱▱▱▱▱▱","▰▰▱▱▱▱▱","▰▰▰▱▱▱▱","▰▰▰▰▱▱▱","▰▰▰▰▰▱▱","▰▰▰▰▰▰▱","▰▰▰▰▰▰▰","▰▱▱▱▱▱▱"]},I=e=>Object.keys(A).includes(e),ce=h({__name:"_ForwardButton",props:{visible:{type:Boolean,required:!0}},emits:["click"],setup(e){const t=e,n=k(()=>t.visible?{}:{visibility:"hidden"});return(r,a)=>(b(),w("button",{class:"vt__button",style:D(_(n)),onClick:a[0]||(a[0]=l=>r.$emit("click"))}," fast forward → ",4))}}),pe=h({__name:"_RestartButton",props:{visible:{type:Boolean,required:!0}},emits:["click"],setup(e){const t=e,n=k(()=>t.visible?{}:{visibility:"hidden"});return(r,a)=>(b(),w("button",{class:"vt__button",style:D(_(n)),onClick:a[0]||(a[0]=l=>r.$emit("click"))}," restart ↻ ",4))}}),fe=h({__name:"VTermynal",props:{startDelay:{type:Number,default:600,required:!1},typeDelay:{type:Number,default:90,required:!1},lineDelay:{type:Number,default:1500,required:!1},progressLength:{type:Number,default:40,required:!1},progressChar:{type:String,default:"█",required:!1},progressPercent:{type:Number,default:100,required:!1},progressDelay:{type:Number,default:90,required:!1},spinnerType:{type:String,default:"dots",required:!1,validator:I},spinnerFrameDelay:{type:Number,default:80,required:!1},spinnerDuration:{type:Number,default:1.5,required:!1},cursor:{type:String,default:"▋",required:!1},lazy:{type:Boolean,default:!1,required:!1},forwardButton:{type:Boolean,default:!1,required:!1},restartButton:{type:Boolean,default:!1,required:!1}},emits:["start","before-new-line","fast-forward","finish","restart"],setup(e,{emit:t}){const n=e,r=p([]),a=p(!1),l=p(!1),o=p(!1);E(V,{...M(n),fastForward:l,registerLine:s=>r.value.push(s)});const i=k(()=>n.restartButton&&o.value),f=k(()=>n.forwardButton&&a.value&&!o.value&&!l.value);q(a,s=>{s&&t("start")}),q(l,s=>{s&&t("fast-forward")}),q(o,s=>{s&&t("finish")});const u=p(!1),c=async()=>{a.value=!0,await T(n.startDelay);for(const s of r.value){if(u.value)break;t("before-new-line",s.element),await s.show()}o.value=!0},d=()=>{l.value=!1,o.value=!1;for(const s of r.value)s.hide();t("restart"),c()},v=()=>{l.value=!0},y=p(null),m=()=>{const{stopObserving:s}=ue(y,g=>{g.some(O=>O.isIntersecting)&&(c(),s())})};return C(()=>{n.lazy?m():c()}),j(()=>{u.value=!0}),(s,g)=>(b(),w("div",{ref_key:"root",ref:y,class:"v-termynal"},[e.forwardButton?(b(),P(ce,{key:0,visible:_(f),onClick:v},null,8,["visible"])):F("",!0),S(s.$slots,"default"),e.restartButton?(b(),P(pe,{key:1,visible:_(i),onClick:d},null,8,["visible"])):F("",!0)],512))}});function B(e){const t=z(V);t||console.error("[VTermynal] Termynal line cannot be used outside of a VTermynal component");const n=p(!1),r=()=>n.value=!1,a=k(()=>n.value?{}:{visibility:"hidden"});return{termynal:t,visible:n,style:a,wait:i=>t.fastForward.value?T(0):T(i),registerShowFn:i=>{t.registerLine({element:e.value,show:()=>e.value?i():Promise.resolve(),hide:r})}}}const de=["vt__prompt","vt__cursor"],ve=h({__name:"VtInput",props:{lineDelay:{type:Number,default:null,required:!1},typeDelay:{type:Number,default:null,required:!1},prompt:{type:String,default:null,required:!1}},setup(e){const t=e,n=p(null),{termynal:r,visible:a,style:l,wait:o,registerShowFn:i}=B(n),f=p(r.cursor.value),u=()=>{f.value=null},c=async()=>{const d=t.typeDelay??r.typeDelay.value,v=t.lineDelay??r.lineDelay.value,y=[...n.value.textContent];n.value.textContent="",a.value=!0;for(const m of y){if(await o(d),!n.value)return;n.value.textContent+=m}await o(v),u()};return C(()=>i(c)),(d,v)=>(b(),w("span",{ref_key:"line",ref:n,class:"vt__line vt__line--input",style:D(_(l)),vt__prompt:e.prompt,vt__cursor:f.value},[S(d.$slots,"default")],12,de))}}),ye=["vt__loading-prefix"],me=h({__name:"VtProgress",props:{lineDelay:{type:Number,default:null,required:!1},progressLength:{type:Number,default:null,required:!1},progressChar:{type:String,default:null,required:!1},progressPercent:{type:Number,default:null,required:!1},progressDelay:{type:Number,default:null,required:!1},prefix:{type:String,default:null,required:!1}},setup(e){const t=e,n=p(null),{termynal:r,visible:a,style:l,wait:o,registerShowFn:i}=B(n),f=async()=>{const u=t.lineDelay??r.lineDelay.value,c=t.progressLength??r.progressLength.value,d=t.progressChar??r.progressChar.value,v=t.progressPercent??r.progressPercent.value,y=t.progressDelay??r.progressDelay.value;n.value.textContent="",a.value=!0;const m=d.repeat(c);for(let s=1;s<m.length+1;s++){if(await o(y),!n.value)return;const g=Math.min(Math.round(s/m.length*100),v);if(n.value.textContent=`${m.slice(0,s)} ${g}%`,g===v)break}await o(u)};return C(()=>i(f)),(u,c)=>(b(),w("span",{ref_key:"line",ref:n,class:"vt__line",style:D(_(l)),"vt__loading-prefix":e.prefix},null,12,ye))}}),be=["vt__loading-prefix"],_e=h({__name:"VtSpinner",props:{lineDelay:{type:Number,default:null,required:!1},type:{type:String,default:null,required:!1,validator:I},frameDelay:{type:Number,default:null,required:!1},duration:{type:Number,default:null,required:!1},prefix:{type:String,default:null,required:!1}},setup(e){const t=e,n=p(null),{termynal:r,visible:a,style:l,wait:o,registerShowFn:i}=B(n),f=async()=>{const u=t.lineDelay??r.lineDelay.value,c=t.type??r.spinnerType.value,d=t.frameDelay??r.spinnerFrameDelay.value,v=t.duration??r.spinnerDuration.value,y=A[c],m=Math.round(v*1e3/d);n.value.textContent="",a.value=!0;for(let s=0;s<m;s++){if(await o(d),!n.value)return;const g=s%y.length;n.value.textContent=y[g]}await o(u)};return C(()=>i(f)),(u,c)=>(b(),w("span",{ref_key:"line",ref:n,class:"vt__line",style:D(_(l)),"vt__loading-prefix":e.prefix},[S(u.$slots,"default")],12,be))}}),he=h({__name:"VtText",props:{lineDelay:{type:Number,default:null,required:!1}},setup(e){const t=e,n=p(null),{termynal:r,visible:a,style:l,wait:o,registerShowFn:i}=B(n),f=async()=>{const u=t.lineDelay??r.lineDelay.value;a.value=!0,await o(u)};return C(()=>i(f)),(u,c)=>(b(),w("span",{ref_key:"line",ref:n,class:"vt__line",style:D(_(l))},[S(u.$slots,"default")],4))}}),ge=`:root{--vt-color-bg: #252a33;--vt-color-text: #eee;--vt-color-text-subtle: #a2a2a2;--vt-color-btn: #aebbff;--vt-color-btn-hover: #fa0}.v-termynal{width:750px;max-width:100%;background:var(--vt-color-bg);color:var(--vt-color-text);font-size:18px;font-family:Fira Mono,Consolas,Menlo,Monaco,Courier New,Courier,monospace;border-radius:4px;padding:75px 45px 35px;position:relative;box-sizing:border-box;text-align:start}.v-termynal:before{content:"";position:absolute;top:15px;left:15px;display:inline-block;width:15px;height:15px;border-radius:50%;background:#d9515d;box-shadow:25px 0 #f4c025,50px 0 #3ec930}.v-termynal:after{content:"bash";position:absolute;color:var(--vt-color-text-subtle);top:5px;left:0;width:100%;text-align:center}.vt__line{display:block;line-height:2;white-space:pre}.vt__line:before{content:"";display:inline-block;vertical-align:middle;visibility:visible}.vt__line--input:before,[vt__prompt]:before,[vt__loading-prefix]:before{margin-right:.75em;visibility:inherit}.vt__line--input:before{color:var(--vt-color-text-subtle);content:"$"}[vt__prompt]:before{color:var(--vt-color-text-subtle);content:attr(vt__prompt)}[vt__loading-prefix]:before{content:attr(vt__loading-prefix)}[vt__cursor]:after{content:attr(vt__cursor);font-family:monospace;margin-left:.5em;animation:blink 1s infinite}.vt__button{display:block;margin-left:auto;color:var(--vt-color-btn);background:transparent;border:0;font:inherit;cursor:pointer}.vt__button:hover{color:var(--vt-color-btn-hover)}@keyframes blink{50%{opacity:0}}
`;ie(ge);const we=e=>{e.component("VTermynal",fe),e.component("VtInput",ve),e.component("VtProgress",me),e.component("VtSpinner",_e),e.component("VtText",he)},xe={extends:le,enhanceApp({app:e}){e.use(we)}};function L(e){if(e.extends){const t=L(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const x=L(xe),De=h({name:"VitePressApp",setup(){const{site:e}=G();return C(()=>{Q(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),H(),W(),X(),x.setup&&x.setup(),()=>Y(x.Layout)}});async function Ce(){const e=qe(),t=ke();t.provide(J,e);const n=K(e.route);return t.provide(Z,n),t.component("Content",ee),t.component("ClientOnly",te),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),x.enhanceApp&&await x.enhanceApp({app:t,router:e,siteData:ne}),{app:t,router:e,data:n}}function ke(){return re(De)}function qe(){let e=$,t;return ae(n=>{let r=se(n);return e&&(t=r),(e||t===r)&&(r=r.replace(/\.js$/,".lean.js")),$&&(e=!1),oe(()=>import(r),[])},x.NotFound)}$&&Ce().then(({app:e,router:t,data:n})=>{t.go().then(()=>{U(t.route,n.site),e.mount("#app")})});export{Ce as createApp};
