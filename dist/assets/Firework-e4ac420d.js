import{m as z,d as P,e as g,f,u as j,o as R,i as D,b as B,t as W}from"./index-23389314.js";function v(i){return Math.abs(Math.floor(i))}function p(i,t){return Math.random()*(t-i)+i}function d(i,t){return Math.floor(p(i,t+1))}function L(i,t,e,n){const o=Math.pow;return Math.sqrt(o(i-e,2)+o(t-n,2))}function w(i,t,e=1){if(i>360||i<0)throw new Error(`Expected hue 0-360 range, got \`${i}\``);if(t>100||t<0)throw new Error(`Expected lightness 0-100 range, got \`${t}\``);if(e>1||e<0)throw new Error(`Expected alpha 0-1 range, got \`${e}\``);return`hsla(${i}, 100%, ${t}%, ${e})`}const E=i=>{if(typeof i=="object"&&i!==null){if(typeof Object.getPrototypeOf=="function"){const t=Object.getPrototypeOf(i);return t===Object.prototype||t===null}return Object.prototype.toString.call(i)==="[object Object]"}return!1},I=["__proto__","constructor","prototype"],M=(...i)=>i.reduce((t,e)=>(Object.keys(e).forEach(n=>{I.includes(n)||(Array.isArray(t[n])&&Array.isArray(e[n])?t[n]=e[n]:E(t[n])&&E(e[n])?t[n]=M(t[n],e[n]):t[n]=e[n])}),t),{});let _=class{x;y;ctx;hue;friction;gravity;flickering;lineWidth;explosionLength;angle;speed;brightness;coordinates=[];decay;alpha=1;constructor({x:t,y:e,ctx:n,hue:o,decay:r,gravity:a,friction:s,brightness:c,flickering:h,lineWidth:l,explosionLength:u}){for(this.x=t,this.y=e,this.ctx=n,this.hue=o,this.gravity=a,this.friction=s,this.flickering=h,this.lineWidth=l,this.explosionLength=u,this.angle=p(0,Math.PI*2),this.speed=d(1,10),this.brightness=d(c.min,c.max),this.decay=p(r.min,r.max);this.explosionLength--;)this.coordinates.push([t,e])}update(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.friction,this.x+=Math.cos(this.angle)*this.speed,this.y+=Math.sin(this.angle)*this.speed+this.gravity,this.alpha-=this.decay,this.alpha<=this.decay&&t()}draw(){const t=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.lineWidth=this.lineWidth,this.ctx.fillStyle=w(this.hue,this.brightness,this.alpha),this.ctx.moveTo(this.coordinates[t][0],this.coordinates[t][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=w(this.hue,this.flickering?p(0,this.brightness):this.brightness,this.alpha),this.ctx.stroke()}};class q{constructor(t,e){this.options=t,this.canvas=e,this.pointerDown=this.pointerDown.bind(this),this.pointerUp=this.pointerUp.bind(this),this.pointerMove=this.pointerMove.bind(this)}active=!1;x;y;get mouseOptions(){return this.options.mouse}mount(){this.canvas.addEventListener("pointerdown",this.pointerDown),this.canvas.addEventListener("pointerup",this.pointerUp),this.canvas.addEventListener("pointermove",this.pointerMove)}unmount(){this.canvas.removeEventListener("pointerdown",this.pointerDown),this.canvas.removeEventListener("pointerup",this.pointerUp),this.canvas.removeEventListener("pointermove",this.pointerMove)}usePointer(t,e){const{click:n,move:o}=this.mouseOptions;(n||o)&&(this.x=t.pageX-this.canvas.offsetLeft,this.y=t.pageY-this.canvas.offsetTop,this.active=e)}pointerDown(t){this.usePointer(t,this.mouseOptions.click)}pointerUp(t){this.usePointer(t,!1)}pointerMove(t){this.usePointer(t,this.active)}}let F=class{hue;rocketsPoint;opacity;acceleration;friction;gravity;particles;explosion;mouse;boundaries;sound;delay;brightness;decay;flickering;intensity;traceLength;traceSpeed;lineWidth;lineStyle;autoresize;constructor(){this.autoresize=!0,this.lineStyle="round",this.flickering=50,this.traceLength=3,this.traceSpeed=10,this.intensity=30,this.explosion=5,this.gravity=1.5,this.opacity=.5,this.particles=50,this.friction=.95,this.acceleration=1.05,this.hue={min:0,max:360},this.rocketsPoint={min:50,max:50},this.lineWidth={explosion:{min:1,max:3},trace:{min:1,max:2}},this.mouse={click:!1,move:!1,max:1},this.delay={min:30,max:60},this.brightness={min:50,max:80},this.decay={min:.015,max:.03},this.sound={enabled:!1,files:["explosion0.mp3","explosion1.mp3","explosion2.mp3"],volume:{min:4,max:8}},this.boundaries={height:0,width:0,x:50,y:50}}update(t){Object.assign(this,M(this,t))}};class U{constructor(t,e){this.options=t,this.render=e}tick=0;rafId=0;fps=60;tolerance=.1;now;mount(){this.now=performance.now();const t=1e3/this.fps,e=n=>{this.rafId=requestAnimationFrame(e);const o=n-this.now;o>=t-this.tolerance&&(this.render(),this.now=n-o%t,this.tick+=o*(this.options.intensity*Math.PI)/1e3)};this.rafId=requestAnimationFrame(e)}unmount(){cancelAnimationFrame(this.rafId)}}let H=class{constructor(t,e){this.options=t,this.updateSize=e,this.handleResize=this.handleResize.bind(this)}mount(){this.options.autoresize&&window.addEventListener("resize",this.handleResize)}unmount(){this.options.autoresize&&window.removeEventListener("resize",this.handleResize)}handleResize(){this.updateSize()}},X=class{constructor(t){this.options=t,this.init()}buffers=[];audioContext;onInit=!1;get isEnabled(){return this.options.sound.enabled}get soundOptions(){return this.options.sound}init(){!this.onInit&&this.isEnabled&&(this.onInit=!0,this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.loadSounds())}async loadSounds(){for(const t of this.soundOptions.files){const e=await(await fetch(t)).arrayBuffer();this.audioContext.decodeAudioData(e).then(n=>{this.buffers.push(n)}).catch(n=>{throw n})}}play(){if(this.isEnabled&&this.buffers.length){const t=this.audioContext.createBufferSource(),e=this.buffers[d(0,this.buffers.length-1)],n=this.audioContext.createGain();t.buffer=e,n.gain.value=p(this.soundOptions.volume.min/100,this.soundOptions.volume.max/100),n.connect(this.audioContext.destination),t.connect(n),t.start(0)}else this.init()}};class G{x;y;sx;sy;dx;dy;ctx;hue;speed;acceleration;traceLength;totalDistance;angle;brightness;coordinates=[];currentDistance=0;constructor({x:t,y:e,dx:n,dy:o,ctx:r,hue:a,speed:s,traceLength:c,acceleration:h}){for(this.x=t,this.y=e,this.sx=t,this.sy=e,this.dx=n,this.dy=o,this.ctx=r,this.hue=a,this.speed=s,this.traceLength=c,this.acceleration=h,this.totalDistance=L(t,e,n,o),this.angle=Math.atan2(o-e,n-t),this.brightness=d(50,70);this.traceLength--;)this.coordinates.push([t,e])}update(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.acceleration;const e=Math.cos(this.angle)*this.speed,n=Math.sin(this.angle)*this.speed;this.currentDistance=L(this.sx,this.sy,this.x+e,this.y+n),this.currentDistance>=this.totalDistance?t(this.dx,this.dy,this.hue):(this.x+=e,this.y+=n)}draw(){const t=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.moveTo(this.coordinates[t][0],this.coordinates[t][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=w(this.hue,this.brightness),this.ctx.stroke()}}let V=class{target;container;canvas;ctx;width;height;traces=[];explosions=[];waitStopRaf;running=!1;opts;sound;resize;mouse;raf;constructor(t,e={}){this.target=t,this.container=t,this.opts=new F,this.updateOptions(e),this.createCanvas(this.target),this.sound=new X(this.opts),this.resize=new H(this.opts,this.updateSize.bind(this)),this.mouse=new q(this.opts,this.canvas),this.raf=new U(this.opts,this.render.bind(this))}get isRunning(){return this.running}get version(){return"2.10.1"}get currentOptions(){return this.opts}start(){this.running||(this.canvas.isConnected||this.createCanvas(this.target),this.running=!0,this.resize.mount(),this.mouse.mount(),this.raf.mount())}stop(t=!1){!this.running||(this.running=!1,this.resize.unmount(),this.mouse.unmount(),this.raf.unmount(),this.clear(),t&&this.canvas.remove())}async waitStop(t){if(this.running)return new Promise(e=>{this.waitStopRaf=()=>{!this.waitStopRaf||(requestAnimationFrame(this.waitStopRaf),!this.traces.length&&!this.explosions.length&&(this.waitStopRaf=null,this.stop(t),e()))},this.waitStopRaf()})}pause(){this.running=!this.running,this.running?this.raf.mount():this.raf.unmount()}clear(){!this.ctx||(this.traces=[],this.explosions=[],this.ctx.clearRect(0,0,this.width,this.height))}launch(t=1){for(let e=0;e<t;e++)this.createTrace();this.waitStopRaf||(this.start(),this.waitStop())}updateOptions(t){this.opts.update(t)}updateSize({width:t=this.container.clientWidth,height:e=this.container.clientHeight}={}){this.width=t,this.height=e,this.canvas.width=t,this.canvas.height=e,this.updateBoundaries({...this.opts.boundaries,width:t,height:e})}updateBoundaries(t){this.updateOptions({boundaries:t})}createCanvas(t){t instanceof HTMLCanvasElement?(t.isConnected||document.body.append(t),this.canvas=t):(this.canvas=document.createElement("canvas"),this.container.append(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.updateSize()}render(){if(!this.ctx||!this.running)return;const{opacity:t,lineStyle:e,lineWidth:n}=this.opts;this.ctx.globalCompositeOperation="destination-out",this.ctx.fillStyle=`rgba(0, 0, 0, ${t})`,this.ctx.fillRect(0,0,this.width,this.height),this.ctx.globalCompositeOperation="lighter",this.ctx.lineCap=e,this.ctx.lineJoin="round",this.ctx.lineWidth=p(n.trace.min,n.trace.max),this.initTrace(),this.drawTrace(),this.drawExplosion()}createTrace(){const{hue:t,rocketsPoint:e,boundaries:n,traceLength:o,traceSpeed:r,acceleration:a,mouse:s}=this.opts;this.traces.push(new G({x:this.width*d(e.min,e.max)/100,y:this.height,dx:this.mouse.x&&s.move||this.mouse.active?this.mouse.x:d(n.x,n.width-n.x*2),dy:this.mouse.y&&s.move||this.mouse.active?this.mouse.y:d(n.y,n.height*.5),ctx:this.ctx,hue:d(t.min,t.max),speed:r,acceleration:a,traceLength:v(o)}))}initTrace(){if(this.waitStopRaf)return;const{delay:t,mouse:e}=this.opts;(this.raf.tick>d(t.min,t.max)||this.mouse.active&&e.max>this.traces.length)&&(this.createTrace(),this.raf.tick=0)}drawTrace(){let t=this.traces.length;for(;t--;)this.traces[t].draw(),this.traces[t].update((e,n,o)=>{this.initExplosion(e,n,o),this.sound.play(),this.traces.splice(t,1)})}initExplosion(t,e,n){const{particles:o,flickering:r,lineWidth:a,explosion:s,brightness:c,friction:h,gravity:l,decay:u}=this.opts;let y=v(o);for(;y--;)this.explosions.push(new _({x:t,y:e,ctx:this.ctx,hue:n,friction:h,gravity:l,flickering:d(0,100)<=r,lineWidth:p(a.explosion.min,a.explosion.max),explosionLength:v(s),brightness:c,decay:u}))}drawExplosion(){let t=this.explosions.length;for(;t--;)this.explosions[t].draw(),this.explosions[t].update(()=>{this.explosions.splice(t,1)})}};const J=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Y=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...J]),K=new Set(["innerHTML","textContent","innerText","children"]),Q=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),C=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),Z=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),tt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function et(i,t,e){let n=e.length,o=t.length,r=n,a=0,s=0,c=t[o-1].nextSibling,h=null;for(;a<o||s<r;){if(t[a]===e[s]){a++,s++;continue}for(;t[o-1]===e[r-1];)o--,r--;if(o===a){const l=r<n?s?e[s-1].nextSibling:e[r-s]:c;for(;s<r;)i.insertBefore(e[s++],l)}else if(r===s)for(;a<o;)(!h||!h.has(t[a]))&&t[a].remove(),a++;else if(t[a]===e[r-1]&&e[s]===t[o-1]){const l=t[--o].nextSibling;i.insertBefore(e[s++],t[a++].nextSibling),i.insertBefore(e[--r],l),t[o]=e[r]}else{if(!h){h=new Map;let u=s;for(;u<r;)h.set(e[u],u++)}const l=h.get(t[a]);if(l!=null)if(s<l&&l<r){let u=a,y=1,S;for(;++u<o&&u<r&&!((S=h.get(t[u]))==null||S!==l+y);)y++;if(y>l-s){const T=t[a];for(;s<l;)i.insertBefore(e[s++],T)}else i.replaceChild(e[s++],t[a++])}else a++;else t[a++].remove()}}}const k="_$DX_DELEGATE";function it(i,t,e){const n=document.createElement("template");n.innerHTML=i;let o=n.content.firstChild;return e&&(o=o.firstChild),o}function nt(i,t=window.document){const e=t[k]||(t[k]=new Set);for(let n=0,o=i.length;n<o;n++){const r=i[n];e.has(r)||(e.add(r),t.addEventListener(r,pt))}}function N(i,t,e){e==null?i.removeAttribute(t):i.setAttribute(t,e)}function st(i,t,e,n){n==null?i.removeAttributeNS(t,e):i.setAttributeNS(t,e,n)}function ot(i,t){t==null?i.removeAttribute("class"):i.className=t}function rt(i,t,e,n){if(n)Array.isArray(e)?(i[`$$${t}`]=e[0],i[`$$${t}Data`]=e[1]):i[`$$${t}`]=e;else if(Array.isArray(e)){const o=e[0];i.addEventListener(t,e[0]=r=>o.call(i,e[1],r))}else i.addEventListener(t,e)}function at(i,t,e={}){const n=Object.keys(t||{}),o=Object.keys(e);let r,a;for(r=0,a=o.length;r<a;r++){const s=o[r];!s||s==="undefined"||t[s]||(A(i,s,!1),delete e[s])}for(r=0,a=n.length;r<a;r++){const s=n[r],c=!!t[s];!s||s==="undefined"||e[s]===c||!c||(A(i,s,!0),e[s]=c)}return e}function ht(i,t,e){if(!t)return e?N(i,"style"):t;const n=i.style;if(typeof t=="string")return n.cssText=t;typeof e=="string"&&(n.cssText=e=void 0),e||(e={}),t||(t={});let o,r;for(r in e)t[r]==null&&n.removeProperty(r),delete e[r];for(r in t)o=t[r],o!==e[r]&&(n.setProperty(r,o),e[r]=o);return e}function ct(i,t={},e,n){const o={};return n||g(()=>o.children=x(i,t.children,o.children)),g(()=>t.ref&&t.ref(i)),g(()=>dt(i,t,e,!0,o,!0)),o}function lt(i,t,e){return j(()=>i(t,e))}function ut(i,t,e,n){if(e!==void 0&&!n&&(n=[]),typeof t!="function")return x(i,t,n,e);g(o=>x(i,t(),o,e),n)}function dt(i,t,e,n,o={},r=!1){t||(t={});for(const a in o)if(!(a in t)){if(a==="children")continue;o[a]=O(i,a,null,o[a],e,r)}for(const a in t){if(a==="children"){n||x(i,t.children);continue}const s=t[a];o[a]=O(i,a,s,o[a],e,r)}}function ft(i){return i.toLowerCase().replace(/-([a-z])/g,(t,e)=>e.toUpperCase())}function A(i,t,e){const n=t.trim().split(/\s+/);for(let o=0,r=n.length;o<r;o++)i.classList.toggle(n[o],e)}function O(i,t,e,n,o,r){let a,s,c;if(t==="style")return ht(i,e,n);if(t==="classList")return at(i,e,n);if(e===n)return n;if(t==="ref")r||e(i);else if(t.slice(0,3)==="on:"){const h=t.slice(3);n&&i.removeEventListener(h,n),e&&i.addEventListener(h,e)}else if(t.slice(0,10)==="oncapture:"){const h=t.slice(10);n&&i.removeEventListener(h,n,!0),e&&i.addEventListener(h,e,!0)}else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),l=Z.has(h);if(!l&&n){const u=Array.isArray(n)?n[0]:n;i.removeEventListener(h,u)}(l||e)&&(rt(i,h,e,l),l&&nt([h]))}else if((c=K.has(t))||!o&&(C[t]||(s=Y.has(t)))||(a=i.nodeName.includes("-")))t==="class"||t==="className"?ot(i,e):a&&!s&&!c?i[ft(t)]=e:i[C[t]||t]=e;else{const h=o&&t.indexOf(":")>-1&&tt[t.split(":")[0]];h?st(i,h,t,e):N(i,Q[t]||t,e)}return e}function pt(i){const t=`$$${i.type}`;let e=i.composedPath&&i.composedPath()[0]||i.target;for(i.target!==e&&Object.defineProperty(i,"target",{configurable:!0,value:e}),Object.defineProperty(i,"currentTarget",{configurable:!0,get(){return e||document}}),f.registry&&!f.done&&(f.done=!0,document.querySelectorAll("[id^=pl-]").forEach(n=>n.remove()));e!==null;){const n=e[t];if(n&&!e.disabled){const o=e[`${t}Data`];if(o!==void 0?n.call(e,o,i):n.call(e,i),i.cancelBubble)return}e=e.host&&e.host!==e&&e.host instanceof Node?e.host:e.parentNode}}function x(i,t,e,n,o){for(f.context&&!e&&(e=[...i.childNodes]);typeof e=="function";)e=e();if(t===e)return e;const r=typeof t,a=n!==void 0;if(i=a&&e[0]&&e[0].parentNode||i,r==="string"||r==="number"){if(f.context)return e;if(r==="number"&&(t=t.toString()),a){let s=e[0];s&&s.nodeType===3?s.data=t:s=document.createTextNode(t),e=m(i,e,n,s)}else e!==""&&typeof e=="string"?e=i.firstChild.data=t:e=i.textContent=t}else if(t==null||r==="boolean"){if(f.context)return e;e=m(i,e,n)}else{if(r==="function")return g(()=>{let s=t();for(;typeof s=="function";)s=s();e=x(i,s,e,n)}),()=>e;if(Array.isArray(t)){const s=[],c=e&&Array.isArray(e);if(b(s,t,e,o))return g(()=>e=x(i,s,e,n,!0)),()=>e;if(f.context){if(!s.length)return e;for(let h=0;h<s.length;h++)if(s[h].parentNode)return e=s}if(s.length===0){if(e=m(i,e,n),a)return e}else c?e.length===0?$(i,s,n):et(i,e,s):(e&&m(i),$(i,s));e=s}else if(t instanceof Node){if(f.context&&t.parentNode)return e=a?[t]:t;if(Array.isArray(e)){if(a)return e=m(i,e,n,t);m(i,e,null,t)}else e==null||e===""||!i.firstChild?i.appendChild(t):i.replaceChild(t,i.firstChild);e=t}}return e}function b(i,t,e,n){let o=!1;for(let r=0,a=t.length;r<a;r++){let s=t[r],c=e&&e[r];if(s instanceof Node)i.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))o=b(i,s,c)||o;else if(typeof s=="function")if(n){for(;typeof s=="function";)s=s();o=b(i,Array.isArray(s)?s:[s],Array.isArray(c)?c:[c])||o}else i.push(s),o=!0;else{const h=String(s);c&&c.nodeType===3&&c.data===h?i.push(c):i.push(document.createTextNode(h))}}return o}function $(i,t,e=null){for(let n=0,o=t.length;n<o;n++)i.insertBefore(t[n],e)}function m(i,t,e,n){if(e===void 0)return i.textContent="";const o=n||document.createTextNode("");if(t.length){let r=!1;for(let a=t.length-1;a>=0;a--){const s=t[a];if(o!==s){const c=s.parentNode===i;!r&&!a?c?i.replaceChild(o,s):i.insertBefore(o,e):c&&s.remove()}else r=!0}}else i.insertBefore(o,e);return[o]}const mt=it("<div></div>"),gt=i=>{const{autostart:t,options:e,children:n,ref:o,...r}=z({autostart:!0},i);let a,s;return P(()=>{s=new V(a,e),t&&s.start(),o&&o(s),R(()=>{s.stop()})}),(()=>{const c=mt.cloneNode(!0),h=a;return typeof h=="function"?lt(h,c):a=c,ct(c,r,!1,!0),ut(c,n),c})()},xt=W("<div></div>"),Et=()=>(()=>{const i=xt.cloneNode(!0);return D(i,B(gt,{options:{rocketsPoint:{min:40,max:60},mouse:{click:!0,move:!1,max:10}},style:{top:0,left:0,width:"100%",height:"100%",position:"fixed"}})),i})();export{Et as default};
