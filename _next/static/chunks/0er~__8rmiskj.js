(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,12086,7464,53942,70338,34174,36986,18015,50438,65880,e=>{"use strict";let t,i,n,a,o=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],r=new Set(o),s=(e,t,i)=>i>t?t:i<e?e:i,l={test:e=>"number"==typeof e,parse:parseFloat,transform:e=>e},c={...l,transform:e=>s(0,1,e)},d={...l,default:1},u=e=>Math.round(1e5*e)/1e5,p=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,h=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,m=(e,t)=>i=>!!("string"==typeof i&&h.test(i)&&i.startsWith(e)||t&&null!=i&&Object.prototype.hasOwnProperty.call(i,t)),g=(e,t,i)=>n=>{if("string"!=typeof n)return n;let[a,o,r,s]=n.match(p);return{[e]:parseFloat(a),[t]:parseFloat(o),[i]:parseFloat(r),alpha:void 0!==s?parseFloat(s):1}},y={...l,transform:e=>Math.round(s(0,255,e))},f={test:m("rgb","red"),parse:g("red","green","blue"),transform:({red:e,green:t,blue:i,alpha:n=1})=>"rgba("+y.transform(e)+", "+y.transform(t)+", "+y.transform(i)+", "+u(c.transform(n))+")"},v={test:m("#"),parse:function(e){let t="",i="",n="",a="";return e.length>5?(t=e.substring(1,3),i=e.substring(3,5),n=e.substring(5,7),a=e.substring(7,9)):(t=e.substring(1,2),i=e.substring(2,3),n=e.substring(3,4),a=e.substring(4,5),t+=t,i+=i,n+=n,a+=a),{red:parseInt(t,16),green:parseInt(i,16),blue:parseInt(n,16),alpha:a?parseInt(a,16)/255:1}},transform:f.transform},w=e=>({test:t=>"string"==typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),b=w("deg"),S=w("%"),k=w("px"),C=w("vh"),P=w("vw"),T={...S,parse:e=>S.parse(e)/100,transform:e=>S.transform(100*e)},x={test:m("hsl","hue"),parse:g("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:i,alpha:n=1})=>"hsla("+Math.round(e)+", "+S.transform(u(t))+", "+S.transform(u(i))+", "+u(c.transform(n))+")"},A={test:e=>f.test(e)||v.test(e)||x.test(e),parse:e=>f.test(e)?f.parse(e):x.test(e)?x.parse(e):v.parse(e),transform:e=>"string"==typeof e?e:e.hasOwnProperty("red")?f.transform(e):x.transform(e),getAnimatableNone:e=>{let t=A.parse(e);return t.alpha=0,A.transform(t)}},D=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,R="number",M="color",E=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function F(e){let t=e.toString(),i=[],n={color:[],number:[],var:[]},a=[],o=0,r=t.replace(E,e=>(A.test(e)?(n.color.push(o),a.push(M),i.push(A.parse(e))):e.startsWith("var(")?(n.var.push(o),a.push("var"),i.push(e)):(n.number.push(o),a.push(R),i.push(parseFloat(e))),++o,"${}")).split("${}");return{values:i,split:r,indexes:n,types:a}}function I({split:e,types:t}){let i=e.length;return n=>{let a="";for(let o=0;o<i;o++)if(a+=e[o],void 0!==n[o]){let e=t[o];e===R?a+=u(n[o]):e===M?a+=A.transform(n[o]):a+=n[o]}return a}}let L={test:function(e){return isNaN(e)&&"string"==typeof e&&(e.match(p)?.length||0)+(e.match(D)?.length||0)>0},parse:function(e){return F(e).values},createTransformer:function(e){return I(F(e))},getAnimatableNone:function(e){let t=F(e);return I(t)(t.values.map((e,i)=>((e,t)=>"number"==typeof e?t?.trim().endsWith("/")?e:0:"number"==typeof e?0:A.test(e)?A.getAnimatableNone(e):e)(e,t.split[i])))}},W=new Set(["brightness","contrast","saturate","opacity"]);function B(e){let[t,i]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;let[n]=i.match(p)||[];if(!n)return e;let a=i.replace(n,""),o=+!!W.has(t);return n!==i&&(o*=100),t+"("+o+a+")"}let V=/\b([a-z-]*)\(.*?\)/gu,O={...L,getAnimatableNone:e=>{let t=e.match(V);return t?t.map(B).join(" "):e}},q={...L,getAnimatableNone:e=>{let t=L.parse(e);return L.createTransformer(e)(t.map(e=>"number"==typeof e?0:"object"==typeof e?{...e,alpha:1}:e))}},j={...l,transform:Math.round},G={borderWidth:k,borderTopWidth:k,borderRightWidth:k,borderBottomWidth:k,borderLeftWidth:k,borderRadius:k,borderTopLeftRadius:k,borderTopRightRadius:k,borderBottomRightRadius:k,borderBottomLeftRadius:k,width:k,maxWidth:k,height:k,maxHeight:k,top:k,right:k,bottom:k,left:k,inset:k,insetBlock:k,insetBlockStart:k,insetBlockEnd:k,insetInline:k,insetInlineStart:k,insetInlineEnd:k,padding:k,paddingTop:k,paddingRight:k,paddingBottom:k,paddingLeft:k,paddingBlock:k,paddingBlockStart:k,paddingBlockEnd:k,paddingInline:k,paddingInlineStart:k,paddingInlineEnd:k,margin:k,marginTop:k,marginRight:k,marginBottom:k,marginLeft:k,marginBlock:k,marginBlockStart:k,marginBlockEnd:k,marginInline:k,marginInlineStart:k,marginInlineEnd:k,fontSize:k,backgroundPositionX:k,backgroundPositionY:k,rotate:b,rotateX:b,rotateY:b,rotateZ:b,scale:d,scaleX:d,scaleY:d,scaleZ:d,skew:b,skewX:b,skewY:b,distance:k,translateX:k,translateY:k,translateZ:k,x:k,y:k,z:k,perspective:k,transformPerspective:k,opacity:c,originX:T,originY:T,originZ:k,zIndex:j,fillOpacity:c,strokeOpacity:c,numOctaves:j},z={...G,color:A,backgroundColor:A,outlineColor:A,fill:A,stroke:A,borderColor:A,borderTopColor:A,borderRightColor:A,borderBottomColor:A,borderLeftColor:A,filter:O,WebkitFilter:O,mask:q,WebkitMask:q},U=e=>z[e],N=()=>({translate:0,scale:1,origin:0,originPoint:0}),H=()=>({x:N(),y:N()}),K=()=>({min:0,max:0}),Y=()=>({x:K(),y:K()}),Q=e=>!!(e&&e.getVelocity),$=new Set(["width","height","top","left","right","bottom",...o]),X=e=>t=>t.test(e),J=[l,k,S,b,P,C,{test:e=>"auto"===e,parse:e=>e}],_=e=>J.find(X(e));var Z,ee=e.i(50109);let et=()=>{},ei=()=>{};ee.default;let en=e=>t=>"string"==typeof t&&t.startsWith(e),ea=en("--"),eo=en("var(--"),er=e=>!!eo(e)&&es.test(e.split("/*")[0].trim()),es=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function el(e){return"string"==typeof e&&e.split("/*")[0].includes("var(--")}let ec=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,ed=e=>180*e/Math.PI,eu=e=>eh(ed(Math.atan2(e[1],e[0]))),ep={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:eu,rotateZ:eu,skewX:e=>ed(Math.atan(e[1])),skewY:e=>ed(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},eh=e=>((e%=360)<0&&(e+=360),e),em=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),eg=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),ey={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:em,scaleY:eg,scale:e=>(em(e)+eg(e))/2,rotateX:e=>eh(ed(Math.atan2(e[6],e[5]))),rotateY:e=>eh(ed(Math.atan2(-e[2],e[0]))),rotateZ:eu,rotate:eu,skewX:e=>ed(Math.atan(e[4])),skewY:e=>ed(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function ef(e){return+!!e.includes("scale")}function ev(e,t){let i,n;if(!e||"none"===e)return ef(t);let a=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);if(a)i=ey,n=a;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=ep,n=t}if(!n)return ef(t);let o=i[t],r=n[1].split(",").map(ew);return"function"==typeof o?o(r):r[o]}function ew(e){return parseFloat(e.trim())}let eb=e=>e===l||e===k,eS=new Set(["x","y","z"]),ek=o.filter(e=>!eS.has(e)),eC={width:({x:e},{paddingLeft:t="0",paddingRight:i="0",boxSizing:n})=>{let a=e.max-e.min;return"border-box"===n?a:a-parseFloat(t)-parseFloat(i)},height:({y:e},{paddingTop:t="0",paddingBottom:i="0",boxSizing:n})=>{let a=e.max-e.min;return"border-box"===n?a:a-parseFloat(t)-parseFloat(i)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>ev(t,"x"),y:(e,{transform:t})=>ev(t,"y")};eC.translateX=eC.x,eC.translateY=eC.y;let eP=e=>e,eT={},ex=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function eA(e,t){let i=!1,n=!0,a={delta:0,timestamp:0,isProcessing:!1},o=()=>i=!0,r=ex.reduce((e,i)=>(e[i]=function(e,t){let i=new Set,n=new Set,a=!1,o=!1,r=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},l=0;function c(t){r.has(t)&&(d.schedule(t),e()),l++,t(s)}let d={schedule:(e,t=!1,o=!1)=>{let s=o&&a?i:n;return t&&r.add(e),s.add(e),e},cancel:e=>{n.delete(e),r.delete(e)},process:e=>{if(s=e,a){o=!0;return}a=!0;let r=i;i=n,n=r,i.forEach(c),t,l=0,i.clear(),a=!1,o&&(o=!1,d.process(e))}};return d}(o,t?i:void 0),e),{}),{setup:s,read:l,resolveKeyframes:c,preUpdate:d,update:u,preRender:p,render:h,postRender:m}=r,g=()=>{let o=eT.useManualTiming,r=o?a.timestamp:performance.now();i=!1,o||(a.delta=n?1e3/60:Math.max(Math.min(r-a.timestamp,40),1)),a.timestamp=r,a.isProcessing=!0,s.process(a),l.process(a),c.process(a),d.process(a),u.process(a),p.process(a),h.process(a),m.process(a),a.isProcessing=!1,i&&t&&(n=!1,e(g))};return{schedule:ex.reduce((t,o)=>{let s=r[o];return t[o]=(t,o=!1,r=!1)=>(!i&&(i=!0,n=!0,a.isProcessing||e(g)),s.schedule(t,o,r)),t},{}),cancel:e=>{for(let t=0;t<ex.length;t++)r[ex[t]].cancel(e)},state:a,steps:r}}let{schedule:eD,cancel:eR,state:eM,steps:eE}=eA("u">typeof requestAnimationFrame?requestAnimationFrame:eP,!0),eF=new Set,eI=!1,eL=!1,eW=!1;function eB(){if(eL){let e=Array.from(eF).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),i=new Map;t.forEach(e=>{let t,n=(t=[],ek.forEach(i=>{let n=e.getValue(i);void 0!==n&&(t.push([i,n.get()]),n.set(+!!i.startsWith("scale")))}),t);n.length&&(i.set(e,n),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=i.get(e);t&&t.forEach(([t,i])=>{e.getValue(t)?.set(i)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)})}eL=!1,eI=!1,eF.forEach(e=>e.complete(eW)),eF.clear()}function eV(){eF.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(eL=!0)})}class eO{constructor(e,t,i,n,a,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=n,this.element=a,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(eF.add(this),eI||(eI=!0,eD.read(eV),eD.resolveKeyframes(eB))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:i,motionValue:n}=this;if(null===e[0]){let a=n?.get(),o=e[e.length-1];if(void 0!==a)e[0]=a;else if(i&&t){let n=i.readValue(t,o);null!=n&&(e[0]=n)}void 0===e[0]&&(e[0]=o),n&&void 0===a&&n.set(e[0])}for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),eF.delete(this)}cancel(){"scheduled"===this.state&&(eF.delete(this),this.state="pending")}resume(){"pending"===this.state&&this.scheduleResolve()}}let eq=new Set([O,q]);function ej(e,t){let i=U(e);return eq.has(i)||(i=L),i.getAnimatableNone?i.getAnimatableNone(t):void 0}let eG=new Set(["auto","none","0"]);class ez extends eO{constructor(e,t,i,n,a){super(e,t,i,n,a,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let i=0;i<e.length;i++){let n=e[i];if("string"==typeof n&&er(n=n.trim())){let a=function e(t,i,n=1){ei(n<=4,`Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`,"max-css-var-depth");let[a,o]=function(e){let t=ec.exec(e);if(!t)return[,];let[,i,n,a]=t;return[`--${i??n}`,a]}(t);if(!a)return;let r=window.getComputedStyle(i).getPropertyValue(a);if(r){let e=r.trim();return/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)?parseFloat(e):e}return er(o)?e(o,i,n+1):o}(n,t.current);void 0!==a&&(e[i]=a),i===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!$.has(i)||2!==e.length)return;let[n,a]=e,o=_(n),r=_(a);if(el(n)!==el(a)&&eC[i]){this.needsMeasurement=!0;return}if(o!==r)if(eb(o)&&eb(r))for(let t=0;t<e.length;t++){let i=e[t];"string"==typeof i&&(e[t]=parseFloat(i))}else eC[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,i=[];for(let t=0;t<e.length;t++)(null===e[t]||function(e){if("number"==typeof e)return 0===e;if(null===e)return!0;return"none"===e||"0"===e||/^0[^.\s]+$/u.test(e)}(e[t]))&&i.push(t);i.length&&function(e,t,i){let n,a=0;for(;a<e.length&&!n;){let t=e[a];"string"==typeof t&&!eG.has(t)&&F(t).values.length&&(n=e[a]),a++}if(n&&i)for(let a of t)e[a]=ej(i,n)}(e,i,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:i}=this;if(!e||!e.current)return;"height"===i&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=eC[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let n=t[t.length-1];void 0!==n&&e.getValue(i,n).jump(n,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:i}=this;if(!e||!e.current)return;let n=e.getValue(t);n&&n.jump(this.measuredOrigin,!1);let a=i.length-1,o=i[a];i[a]=eC[t](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==o&&void 0===this.finalKeyframe&&(this.finalKeyframe=o),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,i])=>{e.getValue(t).set(i)}),this.resolveNoneKeyframes()}}let eU=e=>1e3*e;function eN(e,t){-1===e.indexOf(t)&&e.push(t)}function eH(e,t){let i=e.indexOf(t);i>-1&&e.splice(i,1)}class eK{constructor(){this.subscriptions=[]}add(e){return eN(this.subscriptions,e),()=>eH(this.subscriptions,e)}notify(e,t,i){let n=this.subscriptions.length;if(n)if(1===n)this.subscriptions[0](e,t,i);else for(let a=0;a<n;a++){let n=this.subscriptions[a];n&&n(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function eY(e,t,i){t.startsWith("--")?e.style.setProperty(t,i):e.style[t]=i}function eQ(e){let t;return()=>(void 0===t&&(t=e()),t)}let e$={};function eX(e,t){let i=eQ(e);return()=>e$[t]??i()}let eJ=eX(()=>void 0!==window.ScrollTimeline,"scrollTimeline"),e_=e=>null!==e;function eZ(e,{repeat:t,repeatType:i="loop"},n,a=1){let o=e.filter(e_),r=a<0||t&&"loop"!==i&&t%2==1?0:o.length-1;return r&&void 0!==n?n:o[r]}class e1{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}let e0={layout:0,mainThread:0,waapi:0},e2=e=>Array.isArray(e)&&"number"==typeof e[0],e3=eX(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(e){return!1}return!0},"linearEasing"),e5=(e,t,i=10)=>{let n="",a=Math.max(Math.round(t/i),2);for(let t=0;t<a;t++)n+=Math.round(1e4*e(t/(a-1)))/1e4+", ";return`linear(${n.substring(0,n.length-2)})`},e4=([e,t,i,n])=>`cubic-bezier(${e}, ${t}, ${i}, ${n})`,e6={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:e4([0,.65,.55,1]),circOut:e4([.55,0,1,.45]),backIn:e4([.31,.01,.66,-.59]),backOut:e4([.33,1.53,.69,.99])};function e7(e){return"function"==typeof e&&"applyToOptions"in e}class e8 extends e1{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:i,keyframes:n,pseudoElement:a,allowFlatten:o=!1,finalKeyframe:r,onComplete:s}=e;this.isPseudoElement=!!a,this.allowFlatten=o,this.options=e,ei("string"!=typeof e.type,'Mini animate() doesn\'t support "type" as a string.',"mini-spring");const l=function({type:e,...t}){return e7(e)&&e3()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}(e);this.animation=function(e,t,i,{delay:n=0,duration:a=300,repeat:o=0,repeatType:r="loop",ease:s="easeOut",times:l}={},c){let d={[t]:i};l&&(d.offset=l);let u=function e(t,i){if(t)return"function"==typeof t?e3()?e5(t,i):"ease-out":e2(t)?e4(t):Array.isArray(t)?t.map(t=>e(t,i)||e6.easeOut):e6[t]}(s,a);Array.isArray(u)&&(d.easing=u);let p={delay:n,duration:a,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:o+1,direction:"reverse"===r?"alternate":"normal"};c&&(p.pseudoElement=c);let h=e.animate(d,p);return h}(t,i,n,l,a),!1===l.autoplay&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){let e=eZ(n,this.options,r,this.speed);this.updateMotionValue&&this.updateMotionValue(e),eY(t,i,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),"finished"===this.state&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch(e){}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;"idle"!==e&&"finished"!==e&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){return Number(this.animation.effect?.getComputedTiming?.().duration||0)/1e3}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+e/1e3}get time(){return(Number(this.animation.currentTime)||0)/1e3}set time(e){let t=null!==this.finishedTime;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=eU(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return null!==this.finishedTime?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:i,observe:n}){return(this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&eJ())?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),i&&(this.animation.rangeEnd=i),eP):n(this)}}let e9=new Set(["opacity","clipPath","filter","transform"]),{schedule:te}=eA(queueMicrotask,!1);function tt(){i=void 0}let ti={now:()=>(void 0===i&&ti.set(eM.isProcessing||eT.useManualTiming?eM.timestamp:performance.now()),i),set:e=>{i=e,queueMicrotask(tt)}};class tn{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=ti.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=ti.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=!isNaN(parseFloat(this.current)))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new eK);let i=this.events[e].add(t);return"change"===e?()=>{i(),eD.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return t&&t.push(this),this.current}getPrevious(){return this.prev}getVelocity(){var e;let t=ti.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||t-this.updatedAt>30)return 0;let i=Math.min(this.updatedAt-this.prevUpdatedAt,30);return e=parseFloat(this.current)-parseFloat(this.prevFrameValue),i?1e3/i*e:0}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ta(e,t){return new tn(e,t)}let to=[...J,A,L],tr=new WeakMap;function ts(e){return null!==e&&"object"==typeof e&&"function"==typeof e.start}function tl(e){return"string"==typeof e||Array.isArray(e)}let tc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],td=["initial",...tc];function tu(e){return ts(e.animate)||td.some(t=>tl(e[t]))}function tp(e){return!!(tu(e)||e.variants)}let th={current:null},tm={current:!1},tg="u">typeof window;function ty(e){let t=[{},{}];return e?.values.forEach((e,i)=>{t[0][i]=e.get(),t[1][i]=e.getVelocity()}),t}function tf(e,t,i,n){if("function"==typeof t){let[a,o]=ty(n);t=t(void 0!==i?i:e.custom,a,o)}if("string"==typeof t&&(t=e.variants&&e.variants[t]),"function"==typeof t){let[a,o]=ty(n);t=t(void 0!==i?i:e.custom,a,o)}return t}let tv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],tw={};class tb{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:n,skipAnimations:a,blockInitialAnimation:o,visualState:r},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=eO,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=ti.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,eD.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=r;this.latestValues=l,this.baseTarget={...l},this.initialValues=t.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=n,this.skipAnimationsConfig=a,this.options=s,this.blockInitialAnimation=!!o,this.isControllingVariants=tu(t),this.isVariantNode=tp(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...u}=this.scrapeMotionValuesFromProps(t,{},this);for(const e in u){const t=u[e];void 0!==l[e]&&Q(t)&&t.set(l[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,tr.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),"never"===this.reducedMotionConfig?this.shouldReduceMotion=!1:"always"===this.reducedMotionConfig?this.shouldReduceMotion=!0:(tm.current||function(){if(tm.current=!0,tg)if(window.matchMedia){let e=window.matchMedia("(prefers-reduced-motion)"),t=()=>th.current=e.matches;e.addEventListener("change",t),t()}else th.current=!1}(),this.shouldReduceMotion=th.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){for(let e in this.projection&&this.projection.unmount(),eR(this.notifyUpdate),eR(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this),this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){let i;if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&e9.has(e)&&this.current instanceof HTMLElement){let{factory:i,keyframes:n,times:a,ease:o,duration:r}=t.accelerate,s=new e8({element:this.current,name:e,keyframes:n,times:a,ease:o,duration:eU(r)}),l=i(s);this.valueSubscriptions.set(e,()=>{l(),s.cancel()});return}let n=r.has(e);n&&this.onBindTransform&&this.onBindTransform();let a=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&eD.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});"u">typeof window&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{a(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in tw){let t=tw[e];if(!t)continue;let{isEnabled:i,Feature:n}=t;if(!this.features[e]&&n&&i(this.props)&&(this.features[e]=new n(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Y()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<tv.length;t++){let i=tv[t];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);let n=e["on"+i];n&&(this.propEventSubscriptions[i]=this.on(i,n))}this.prevMotionValues=function(e,t,i){for(let n in t){let a=t[n],o=i[n];if(Q(a))e.addValue(n,a);else if(Q(o))e.addValue(n,ta(a,{owner:e}));else if(o!==a)if(e.hasValue(n)){let t=e.getValue(n);!0===t.liveStyle?t.jump(a):t.hasAnimated||t.set(a)}else{let t=e.getStaticValue(n);e.addValue(n,ta(void 0!==t?t:a,{owner:e}))}}for(let n in i)void 0===t[n]&&e.removeValue(n);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return void 0===i&&void 0!==t&&(i=ta(null===t?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){let i=void 0===this.latestValues[e]&&this.current?this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];if(null!=i){let n,a;if("string"==typeof i&&(n=i,/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n)||(a=i,/^0[^.\s]+$/u.test(a))))i=parseFloat(i);else{let n;n=i,!to.find(X(n))&&L.test(t)&&(i=ej(e,t))}this.setBaseTarget(e,Q(i)?i.get():i)}return Q(i)?i.get():i}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let t,{initial:i}=this.props;if("string"==typeof i||"object"==typeof i){let n=tf(this.props,i,this.presenceContext?.custom);n&&(t=n[e])}if(i&&void 0!==t)return t;let n=this.getBaseTargetFromProps(this.props,e);return void 0===n||Q(n)?void 0!==this.initialValues[e]&&void 0===t?void 0:this.baseTarget[e]:n}on(e,t){return this.events[e]||(this.events[e]=new eK),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){te.render(this.render)}}class tS extends tb{constructor(){super(...arguments),this.KeyframeResolver=ez}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){let i=e.style;return i?i[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Q(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}}function tk(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}let tC=(e,t)=>t&&"number"==typeof e?t.transform(e):e,tP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},tT=o.length;function tx(e,t,i){let{style:n,vars:a,transformOrigin:s}=e,l=!1,c=!1;for(let e in t){let i=t[e];if(r.has(e)){l=!0;continue}if(ea(e)){a[e]=i;continue}{let t=tC(i,G[e]);e.startsWith("origin")?(c=!0,s[e]=t):n[e]=t}}if(!t.transform&&(l||i?n.transform=function(e,t,i){let n="",a=!0;for(let r=0;r<tT;r++){let s=o[r],l=e[s];if(void 0===l)continue;let c=!0;if("number"==typeof l)c=l===+!!s.startsWith("scale");else{let e=parseFloat(l);c=s.startsWith("scale")?1===e:0===e}if(!c||i){let e=tC(l,G[s]);if(!c){a=!1;let t=tP[s]||s;n+=`${t}(${e}) `}i&&(t[s]=e)}}return n=n.trim(),i?n=i(t,a?"":n):a&&(n="none"),n}(t,e.transform,i):n.transform&&(n.transform="none")),c){let{originX:e="50%",originY:t="50%",originZ:i=0}=s;n.transformOrigin=`${e} ${t} ${i}`}}let tA={offset:"stroke-dashoffset",array:"stroke-dasharray"},tD={offset:"strokeDashoffset",array:"strokeDasharray"},tR=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function tM(e,{attrX:t,attrY:i,attrScale:n,pathLength:a,pathSpacing:o=1,pathOffset:r=0,...s},l,c,d){if(tx(e,s,c),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:u,style:p}=e;for(let e of(u.transform&&(p.transform=u.transform,delete u.transform),(p.transform||u.transformOrigin)&&(p.transformOrigin=u.transformOrigin??"50% 50%",delete u.transformOrigin),p.transform&&(p.transformBox=d?.transformBox??"fill-box",delete u.transformBox),tR))void 0!==u[e]&&(p[e]=u[e],delete u[e]);void 0!==t&&(u.x=t),void 0!==i&&(u.y=i),void 0!==n&&(u.scale=n),void 0!==a&&function(e,t,i=1,n=0,a=!0){e.pathLength=1;let o=a?tA:tD;e[o.offset]=`${-n}`,e[o.array]=`${t} ${i}`}(u,a,o,r,!1)}let tE=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),tF=e=>"string"==typeof e&&"svg"===e.toLowerCase();function tI(e,{style:t,vars:i},n,a){let o,r=e.style;for(o in t)r[o]=t[o];for(o in a?.applyProjectionStyles(r,n),i)r.setProperty(o,i[o])}function tL(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}let tW={correct:(e,t)=>{if(!t.target)return e;if("string"==typeof e)if(!k.test(e))return e;else e=parseFloat(e);let i=tL(e,t.target.x),n=tL(e,t.target.y);return`${i}% ${n}%`}},tB=(e,t,i)=>e+(t-e)*i,tV={borderRadius:{...tW,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:tW,borderTopRightRadius:tW,borderBottomLeftRadius:tW,borderBottomRightRadius:tW,boxShadow:{correct:(e,{treeScale:t,projectionDelta:i})=>{let n=L.parse(e);if(n.length>5)return e;let a=L.createTransformer(e),o=+("number"!=typeof n[0]),r=i.x.scale*t.x,s=i.y.scale*t.y;n[0+o]/=r,n[1+o]/=s;let l=tB(r,s,.5);return"number"==typeof n[2+o]&&(n[2+o]/=l),"number"==typeof n[3+o]&&(n[3+o]/=l),a(n)}}};function tO(e,{layout:t,layoutId:i}){return r.has(e)||e.startsWith("origin")||(t||void 0!==i)&&(!!tV[e]||"opacity"===e)}function tq(e,t,i){let n=e.style,a=t?.style,o={};if(!n)return o;for(let t in n)(Q(n[t])||a&&Q(a[t])||tO(t,e)||i?.getValue(t)?.liveStyle!==void 0)&&(o[t]=n[t]);return o}function tj(e,t,i){let n=tq(e,t,i);for(let i in e)(Q(e[i])||Q(t[i]))&&(n[-1!==o.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=e[i]);return n}class tG extends tS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Y}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(r.has(t)){let e=U(t);return e&&e.default||0}return t=tE.has(t)?t:tk(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return tj(e,t,i)}build(e,t,i){tM(e,t,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,t,i,n){for(let i in tI(e,t,void 0,n),t.attrs)e.setAttribute(tE.has(i)?i:tk(i),t.attrs[i])}mount(e){this.isSVGTag=tF(e.tagName),super.mount(e)}}function tz({top:e,left:t,right:i,bottom:n}){return{x:{min:t,max:i},y:{min:e,max:n}}}function tU(e){return void 0===e||1===e}function tN({scale:e,scaleX:t,scaleY:i}){return!tU(e)||!tU(t)||!tU(i)}function tH(e){return tN(e)||tK(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function tK(e){var t,i;return(t=e.x)&&"0%"!==t||(i=e.y)&&"0%"!==i}function tY(e,t,i,n,a){return void 0!==a&&(e=n+a*(e-n)),n+i*(e-n)+t}function tQ(e,t=0,i=1,n,a){e.min=tY(e.min,t,i,n,a),e.max=tY(e.max,t,i,n,a)}function t$(e,{x:t,y:i}){tQ(e.x,t.translate,t.scale,t.originPoint),tQ(e.y,i.translate,i.scale,i.originPoint)}function tX(e,t){e.min+=t,e.max+=t}function tJ(e,t,i,n,a=.5){let o=tB(e.min,e.max,a);tQ(e,t,i,o,n)}function t_(e,t){return"string"==typeof e?parseFloat(e)/100*(t.max-t.min):e}function tZ(e,t,i){let n=i??e;tJ(e.x,t_(t.x,n.x),t.scaleX,t.scale,t.originX),tJ(e.y,t_(t.y,n.y),t.scaleY,t.scale,t.originY)}function t1(e,t){return tz(function(e,t){if(!t)return e;let i=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:n.y,right:n.x}}(e.getBoundingClientRect(),t))}class t0 extends tS{constructor(){super(...arguments),this.type="html",this.renderInstance=tI}readValueFromInstance(e,t){if(r.has(t))return this.projection?.isProjecting?ef(t):((e,t)=>{let{transform:i="none"}=getComputedStyle(e);return ev(i,t)})(e,t);{let i=window.getComputedStyle(e),n=(ea(t)?i.getPropertyValue(t):i[t])||0;return"string"==typeof n?n.trim():n}}measureInstanceViewportBox(e,{transformPagePoint:t}){return t1(e,t)}build(e,t,i){tx(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return tq(e,t,i)}}var t2=e.i(91983);let t3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function t5(e){if("string"!=typeof e||e.includes("-"));else if(t3.indexOf(e)>-1||/[A-Z]/u.test(e))return!0;return!1}var t4=e.i(77117);let t6=(0,t2.createContext)({});e.s(["LayoutGroupContext",0,t6],7464);let t7=(0,t2.createContext)({strict:!1}),t8=(0,t2.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});e.s(["MotionConfigContext",0,t8],53942);let t9=(0,t2.createContext)({});function ie(e){return Array.isArray(e)?e.join(" "):e}let it=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ii(e,t,i){for(let n in t)Q(t[n])||tO(n,i)||(e[n]=t[n])}let ia=()=>({...it(),attrs:{}}),io=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function ir(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||io.has(e)}let is=e=>!ir(e);try{Z=(()=>{let e=Error("Cannot find module '@emotion/is-prop-valid'");throw e.code="MODULE_NOT_FOUND",e})().default,"function"==typeof Z&&(is=e=>e.startsWith("on")?!ir(e):Z(e))}catch{}function il(e){return Q(e)?e.get():e}let ic=(0,t2.createContext)(null);function id(e){let t=(0,t2.useRef)(null);return null===t.current&&(t.current=e()),t.current}e.s(["PresenceContext",0,ic],70338),e.s(["useConstant",0,id],34174);let iu=e=>(t,i)=>{let n=(0,t2.useContext)(t9),a=(0,t2.useContext)(ic),o=()=>(function({scrapeMotionValuesFromProps:e,createRenderState:t},i,n,a){return{latestValues:function(e,t,i,n){let a={},o=n(e,{});for(let e in o)a[e]=il(o[e]);let{initial:r,animate:s}=e,l=tu(e),c=tp(e);t&&c&&!l&&!1!==e.inherit&&(void 0===r&&(r=t.initial),void 0===s&&(s=t.animate));let d=!!i&&!1===i.initial,u=(d=d||!1===r)?s:r;if(u&&"boolean"!=typeof u&&!ts(u)){let t=Array.isArray(u)?u:[u];for(let i=0;i<t.length;i++){let n=tf(e,t[i]);if(n){let{transitionEnd:e,transition:t,...i}=n;for(let e in i){let t=i[e];if(Array.isArray(t)){let e=d?t.length-1:0;t=t[e]}null!==t&&(a[e]=t)}for(let t in e)a[t]=e[t]}}}return a}(i,n,a,e),renderState:t()}})(e,t,n,a);return i?o():id(o)},ip=iu({scrapeMotionValuesFromProps:tq,createRenderState:it}),ih=iu({scrapeMotionValuesFromProps:tj,createRenderState:ia}),im={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ig=!1;function iy(){return!function(){if(ig)return;let e={};for(let t in im)e[t]={isEnabled:e=>im[t].some(t=>!!e[t])};tw=e,ig=!0}(),tw}let iv=Symbol.for("motionComponentSymbol"),iw="data-"+tk("framerAppearId"),ib=(0,t2.createContext)({});function iS(e){return e&&"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}let ik="u">typeof window?t2.useLayoutEffect:t2.useEffect;function iC(e,{forwardMotionProps:t=!1,type:i}={},n,a){n&&function(e){let t=iy();for(let i in e)t[i]={...t[i],...e[i]};tw=t}(n);let o=i?"svg"===i:t5(e),r=o?ih:ip;function s(i,n){var s;let l,c,d,u={...(0,t2.useContext)(t8),...i,layoutId:function({layoutId:e}){let t=(0,t2.useContext)(t6).id;return t&&void 0!==e?t+"-"+e:e}(i)},{isStatic:p}=u,h=function(e){let{initial:t,animate:i}=function(e,t){if(tu(e)){let{initial:t,animate:i}=e;return{initial:!1===t||tl(t)?t:void 0,animate:tl(i)?i:void 0}}return!1!==e.inherit?t:{}}(e,(0,t2.useContext)(t9));return(0,t2.useMemo)(()=>({initial:t,animate:i}),[ie(t),ie(i)])}(i),m=r(i,p);if(!p&&"u">typeof window){(0,t2.useContext)(t7).strict;let t=function(e){let{drag:t,layout:i}=iy();if(!t&&!i)return{};let n={...t,...i};return{MeasureLayout:t?.isEnabled(e)||i?.isEnabled(e)?n.MeasureLayout:void 0,ProjectionNode:n.ProjectionNode}}(u);l=t.MeasureLayout,h.visualElement=function(e,t,i,n,a,o){let{visualElement:r}=(0,t2.useContext)(t9),s=(0,t2.useContext)(t7),l=(0,t2.useContext)(ic),c=(0,t2.useContext)(t8),d=c.reducedMotion,u=c.skipAnimations,p=(0,t2.useRef)(null),h=(0,t2.useRef)(!1);n=n||s.renderer,!p.current&&n&&(p.current=n(e,{visualState:t,parent:r,props:i,presenceContext:l,blockInitialAnimation:!!l&&!1===l.initial,reducedMotionConfig:d,skipAnimations:u,isSVG:o}),h.current&&p.current&&(p.current.manuallyAnimateOnMount=!0));let m=p.current,g=(0,t2.useContext)(ib);m&&!m.projection&&a&&("html"===m.type||"svg"===m.type)&&function(e,t,i,n){let{layoutId:a,layout:o,drag:r,dragConstraints:s,layoutScroll:l,layoutRoot:c,layoutAnchor:d,layoutCrossfade:u}=t;e.projection=new i(e.latestValues,t["data-framer-portal-id"]?void 0:function e(t){if(t)return!1!==t.options.allowProjection?t.projection:e(t.parent)}(e.parent)),e.projection.setOptions({layoutId:a,layout:o,alwaysMeasureLayout:!!r||s&&iS(s),visualElement:e,animationType:"string"==typeof o?o:"both",initialPromotionConfig:n,crossfade:u,layoutScroll:l,layoutRoot:c,layoutAnchor:d})}(p.current,i,a,g);let y=(0,t2.useRef)(!1);(0,t2.useInsertionEffect)(()=>{m&&y.current&&m.update(i,l)});let f=i[iw],v=(0,t2.useRef)(!!f&&"u">typeof window&&!window.MotionHandoffIsComplete?.(f)&&window.MotionHasOptimisedAnimation?.(f));return ik(()=>{h.current=!0,m&&(y.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,t2.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(f)}),v.current=!1),m.enteringChildren=void 0)}),m}(e,m,u,a,t.ProjectionNode,o)}return(0,t4.jsxs)(t9.Provider,{value:h,children:[l&&h.visualElement?(0,t4.jsx)(l,{visualElement:h.visualElement,...u}):null,function(e,t,i,{latestValues:n},a,o=!1,r){let s=(r??t5(e)?function(e,t,i,n){let a=(0,t2.useMemo)(()=>{let i=ia();return tM(i,t,tF(n),e.transformTemplate,e.style),{...i.attrs,style:{...i.style}}},[t]);if(e.style){let t={};ii(t,e.style,e),a.style={...t,...a.style}}return a}:function(e,t){let i,n,a={},o=(i=e.style||{},ii(n={},i,e),Object.assign(n,function({transformTemplate:e},t){return(0,t2.useMemo)(()=>{let i=it();return tx(i,t,e),Object.assign({},i.vars,i.style)},[t])}(e,t)),n);return e.drag&&!1!==e.dragListener&&(a.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=!0===e.drag?"none":`pan-${"x"===e.drag?"y":"x"}`),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(a.tabIndex=0),a.style=o,a})(t,n,a,e),l=function(e,t,i){let n={};for(let a in e)("values"!==a||"object"!=typeof e.values)&&!Q(e[a])&&(is(a)||!0===i&&ir(a)||!t&&!ir(a)||e.draggable&&a.startsWith("onDrag"))&&(n[a]=e[a]);return n}(t,"string"==typeof e,o),c=e!==t2.Fragment?{...l,...s,ref:i}:{},{children:d}=t,u=(0,t2.useMemo)(()=>Q(d)?d.get():d,[d]);return(0,t2.createElement)(e,{...c,children:u})}(e,i,(s=h.visualElement,c=(0,t2.useRef)(n),(0,t2.useInsertionEffect)(()=>{c.current=n}),d=(0,t2.useRef)(null),(0,t2.useCallback)(e=>{e&&m.onMount?.(e);let t=c.current;if("function"==typeof t)if(e){let i=t(e);"function"==typeof i&&(d.current=i)}else d.current?(d.current(),d.current=null):t(e);else t&&(t.current=e);s&&(e?s.mount(e):s.unmount())},[s])),m,p,t,o)]})}s.displayName=`motion.${"string"==typeof e?e:`create(${e.displayName??e.name??""})`}`;let l=(0,t2.forwardRef)(s);return l[iv]=e,l}e.s(["useIsomorphicLayoutEffect",0,ik],36986);class iP{constructor(e){this.isMounted=!1,this.node=e}update(){}}function iT(e,t,i){let n=e.getProps();return tf(n,t,void 0!==i?i:n.custom,e)}function ix(e,t){if(e?.inherit&&t){let{inherit:i,...n}=e;return{...t,...n}}return e}function iA(e,t){let i=e?.[t]??e?.default??e;return i!==e?ix(i,e):i}let iD=e=>Array.isArray(e);function iR(e,t){let i=e.getValue("willChange");if(Q(i)&&i.add)return i.add(t);if(!i&&eT.WillChange){let i=new eT.WillChange("auto");e.addValue("willChange",i),i.add(t)}}let iM=(e,t)=>i=>t(e(i)),iE=(...e)=>e.reduce(iM);function iF(e,t,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function iI(e,t){return i=>i>0?t:e}let iL=(e,t,i)=>{let n=e*e,a=i*(t*t-n)+n;return a<0?0:Math.sqrt(a)},iW=[v,f,x];function iB(e){let t=iW.find(t=>t.test(e));if(et(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`,"color-not-animatable"),!t)return!1;let i=t.parse(e);return t===x&&(i=function({hue:e,saturation:t,lightness:i,alpha:n}){e/=360,i/=100;let a=0,o=0,r=0;if(t/=100){let n=i<.5?i*(1+t):i+t-i*t,s=2*i-n;a=iF(s,n,e+1/3),o=iF(s,n,e),r=iF(s,n,e-1/3)}else a=o=r=i;return{red:Math.round(255*a),green:Math.round(255*o),blue:Math.round(255*r),alpha:n}}(i)),i}let iV=(e,t)=>{let i=iB(e),n=iB(t);if(!i||!n)return iI(e,t);let a={...i};return e=>(a.red=iL(i.red,n.red,e),a.green=iL(i.green,n.green,e),a.blue=iL(i.blue,n.blue,e),a.alpha=tB(i.alpha,n.alpha,e),f.transform(a))},iO=new Set(["none","hidden"]);function iq(e,t){return i=>tB(e,t,i)}function ij(e){return"number"==typeof e?iq:"string"==typeof e?er(e)?iI:A.test(e)?iV:iU:Array.isArray(e)?iG:"object"==typeof e?A.test(e)?iV:iz:iI}function iG(e,t){let i=[...e],n=i.length,a=e.map((e,i)=>ij(e)(e,t[i]));return e=>{for(let t=0;t<n;t++)i[t]=a[t](e);return i}}function iz(e,t){let i={...e,...t},n={};for(let a in i)void 0!==e[a]&&void 0!==t[a]&&(n[a]=ij(e[a])(e[a],t[a]));return e=>{for(let t in n)i[t]=n[t](e);return i}}let iU=(e,t)=>{let i=L.createTransformer(t),n=F(e),a=F(t);if(!(n.indexes.var.length===a.indexes.var.length&&n.indexes.color.length===a.indexes.color.length&&n.indexes.number.length>=a.indexes.number.length))return et(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,"complex-values-different"),iI(e,t);if(iO.has(e)&&!a.values.length||iO.has(t)&&!n.values.length)return iO.has(e)?i=>i<=0?e:t:i=>i>=1?t:e;return iE(iG(function(e,t){let i=[],n={color:0,var:0,number:0};for(let a=0;a<t.values.length;a++){let o=t.types[a],r=e.indexes[o][n[o]],s=e.values[r]??0;i[a]=s,n[o]++}return i}(n,a),a.values),i)};function iN(e,t,i){return"number"==typeof e&&"number"==typeof t&&"number"==typeof i?tB(e,t,i):ij(e)(e,t)}let iH=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>eD.update(t,e),stop:()=>eR(t),now:()=>eM.isProcessing?eM.timestamp:ti.now()}};function iK(e){let t=0,i=e.next(t);for(;!i.done&&t<2e4;)t+=50,i=e.next(t);return t>=2e4?1/0:t}let iY=.01,iQ=2,i$=.005,iX=.5;function iJ(e,t){return e*Math.sqrt(1-t*t)}let i_=["duration","bounce"],iZ=["stiffness","damping","mass"];function i1(e,t){return t.some(t=>void 0!==e[t])}function i0(e=.3,t=.3){let i,n,a,o,r,l,c="object"!=typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e,{restSpeed:d,restDelta:u}=c,p=c.keyframes[0],h=c.keyframes[c.keyframes.length-1],m={done:!1,value:p},{stiffness:g,damping:y,mass:f,duration:v,velocity:w,isResolvedFromDuration:b}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!i1(e,iZ)&&i1(e,i_))if(t.velocity=0,e.visualDuration){let i=2*Math.PI/(1.2*e.visualDuration),n=i*i,a=2*s(.05,1,1-(e.bounce||0))*Math.sqrt(n);t={...t,mass:1,stiffness:n,damping:a}}else{let i=function({duration:e=800,bounce:t=.3,velocity:i=0,mass:n=1}){let a,o;et(e<=eU(10),"Spring duration must be 10 seconds or less","spring-duration-limit");let r=1-t;r=s(.05,1,r),e=s(.01,10,e/1e3),r<1?(a=t=>{let n=t*r,a=n*e;return .001-(n-i)/iJ(t,r)*Math.exp(-a)},o=t=>{let n=t*r*e,o=Math.pow(r,2)*Math.pow(t,2)*e,s=Math.exp(-n),l=iJ(Math.pow(t,2),r);return(n*i+i-o)*s*(-a(t)+.001>0?-1:1)/l}):(a=t=>-.001+Math.exp(-t*e)*((t-i)*e+1),o=t=>e*e*(i-t)*Math.exp(-t*e));let l=function(e,t,i){let n=i;for(let i=1;i<12;i++)n-=e(n)/t(n);return n}(a,o,5/e);if(e=eU(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{let t=Math.pow(l,2)*n;return{stiffness:t,damping:2*r*Math.sqrt(n*t),duration:e}}}({...e,velocity:0});(t={...t,...i,mass:1}).isResolvedFromDuration=!0}return t}({...c,velocity:-((c.velocity||0)/1e3)}),S=w||0,k=y/(2*Math.sqrt(g*f)),C=h-p,P=Math.sqrt(g/f)/1e3,T=5>Math.abs(C);if(d||(d=T?iY:iQ),u||(u=T?i$:iX),k<1)a=iJ(P,k),o=(S+k*P*C)/a,i=e=>h-Math.exp(-k*P*e)*(o*Math.sin(a*e)+C*Math.cos(a*e)),r=k*P*o+C*a,l=k*P*C-o*a,n=e=>Math.exp(-k*P*e)*(r*Math.sin(a*e)+l*Math.cos(a*e));else if(1===k){i=e=>h-Math.exp(-P*e)*(C+(S+P*C)*e);let e=S+P*C;n=t=>Math.exp(-P*t)*(P*e*t-S)}else{let e=P*Math.sqrt(k*k-1);i=t=>{let i=Math.exp(-k*P*t),n=Math.min(e*t,300);return h-i*((S+k*P*C)*Math.sinh(n)+e*C*Math.cosh(n))/e};let t=(S+k*P*C)/e,a=k*P*t-C*e,o=k*P*C-t*e;n=t=>{let i=Math.exp(-k*P*t),n=Math.min(e*t,300);return i*(a*Math.sinh(n)+o*Math.cosh(n))}}let x={calculatedDuration:b&&v||null,velocity:e=>eU(n(e)),next:e=>{if(!b&&k<1){let t=Math.exp(-k*P*e),i=Math.sin(a*e),n=Math.cos(a*e),s=h-t*(o*i+C*n);return m.done=Math.abs(eU(t*(r*i+l*n)))<=d&&Math.abs(h-s)<=u,m.value=m.done?h:s,m}let t=i(e);return b?m.done=e>=v:m.done=Math.abs(eU(n(e)))<=d&&Math.abs(h-t)<=u,m.value=m.done?h:t,m},toString:()=>{let e=Math.min(iK(x),2e4),t=e5(t=>x.next(e*t).value,e,30);return e+"ms "+t},toTransition:()=>{}};return x}function i2(e,t,i){var n,a;let o=Math.max(t-5,0);return n=i-e(o),(a=t-o)?1e3/a*n:0}function i3({keyframes:e,velocity:t=0,power:i=.8,timeConstant:n=325,bounceDamping:a=10,bounceStiffness:o=500,modifyTarget:r,min:s,max:l,restDelta:c=.5,restSpeed:d}){let u,p,h=e[0],m={done:!1,value:h},g=i*t,y=h+g,f=void 0===r?y:r(y);f!==y&&(g=f-h);let v=e=>-g*Math.exp(-e/n),w=e=>f+v(e),b=e=>{let t=v(e),i=w(e);m.done=Math.abs(t)<=c,m.value=m.done?f:i},S=e=>{let t;if(t=m.value,void 0!==s&&t<s||void 0!==l&&t>l){var i;u=e,p=i0({keyframes:[m.value,(i=m.value,void 0===s?l:void 0===l||Math.abs(s-i)<Math.abs(l-i)?s:l)],velocity:i2(w,e,m.value),damping:a,stiffness:o,restDelta:c,restSpeed:d})}};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return(p||void 0!==u||(t=!0,b(e),S(e)),void 0!==u&&e>=u)?p.next(e-u):(t||b(e),m)}}}i0.applyToOptions=e=>{let t=function(e,t=100,i){let n=i({...e,keyframes:[0,t]}),a=Math.min(iK(n),2e4);return{type:"keyframes",ease:e=>n.next(a*e).value/t,duration:a/1e3}}(e,100,i0);return e.ease=t.ease,e.duration=eU(t.duration),e.type="keyframes",e};let i5=(e,t,i)=>(((1-3*i+3*t)*e+(3*i-6*t))*e+3*t)*e;function i4(e,t,i,n){return e===t&&i===n?eP:a=>0===a||1===a?a:i5(function(e,t,i,n,a){let o,r,s=0;do(o=i5(r=t+(i-t)/2,n,a)-e)>0?i=r:t=r;while(Math.abs(o)>1e-7&&++s<12)return r}(a,0,1,e,i),t,n)}let i6=i4(.42,0,1,1),i7=i4(0,0,.58,1),i8=i4(.42,0,.58,1),i9=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ne=e=>t=>1-e(1-t),nt=i4(.33,1.53,.69,.99),ni=ne(nt),nn=i9(ni),na=e=>e>=1?1:(e*=2)<1?.5*ni(e):.5*(2-Math.pow(2,-10*(e-1))),no=e=>1-Math.sin(Math.acos(e)),nr=ne(no),ns=i9(no),nl={linear:eP,easeIn:i6,easeInOut:i8,easeOut:i7,circIn:no,circInOut:ns,circOut:nr,backIn:ni,backInOut:nn,backOut:nt,anticipate:na},nc=e=>{if(e2(e)){ei(4===e.length,"Cubic bezier arrays must contain four numerical values.","cubic-bezier-length");let[t,i,n,a]=e;return i4(t,i,n,a)}return"string"==typeof e?(ei(void 0!==nl[e],`Invalid easing type '${e}'`,"invalid-easing-type"),nl[e]):e},nd=(e,t,i)=>{let n=t-e;return 0===n?1:(i-e)/n};function nu({duration:e=300,keyframes:t,times:i,ease:n="easeInOut"}){var a;let o,r=Array.isArray(n)&&"number"!=typeof n[0]?n.map(nc):nc(n),l={done:!1,value:t[0]},c=function(e,t,{clamp:i=!0,ease:n,mixer:a}={}){let o=e.length;if(ei(o===t.length,"Both input and output ranges must be the same length","range-length"),1===o)return()=>t[0];if(2===o&&t[0]===t[1])return()=>t[1];let r=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());let l=function(e,t,i){let n=[],a=i||eT.mix||iN,o=e.length-1;for(let i=0;i<o;i++){let o=a(e[i],e[i+1]);t&&(o=iE(Array.isArray(t)?t[i]||eP:t,o)),n.push(o)}return n}(t,n,a),c=l.length,d=i=>{if(r&&i<e[0])return t[0];let n=0;if(c>1)for(;n<e.length-2&&!(i<e[n+1]);n++);let a=nd(e[n],e[n+1],i);return l[n](a)};return i?t=>d(s(e[0],e[o-1],t)):d}((a=i&&i.length===t.length?i:(!function(e,t){let i=e[e.length-1];for(let n=1;n<=t;n++){let a=nd(0,t,n);e.push(tB(i,1,a))}}(o=[0],t.length-1),o),a.map(t=>t*e)),t,{ease:Array.isArray(r)?r:t.map(()=>r||i8).splice(0,t.length-1)});return{calculatedDuration:e,next:t=>(l.value=c(t),l.done=t>=e,l)}}let np={decay:i3,inertia:i3,tween:nu,keyframes:nu,spring:i0};function nh(e){"string"==typeof e.type&&(e.type=np[e.type])}let nm=e=>e/100;class ng extends e1{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==ti.now()&&this.tick(ti.now()),this.isStopped=!0,"idle"!==this.state&&(this.teardown(),this.options.onStop?.())},e0.mainThread++,this.options=e,this.initAnimation(),this.play(),!1===e.autoplay&&this.pause()}initAnimation(){let{options:e}=this;nh(e);let{type:t=nu,repeat:i=0,repeatDelay:n=0,repeatType:a,velocity:o=0}=e,{keyframes:r}=e,s=t||nu;s!==nu&&"number"!=typeof r[0]&&(this.mixKeyframes=iE(nm,iN(r[0],r[1])),r=[0,100]);let l=s({...e,keyframes:r});"mirror"===a&&(this.mirroredGenerator=s({...e,keyframes:[...r].reverse(),velocity:-o})),null===l.calculatedDuration&&(l.calculatedDuration=iK(l));let{calculatedDuration:c}=l;this.calculatedDuration=c,this.resolvedDuration=c+n,this.totalDuration=this.resolvedDuration*(i+1)-n,this.generator=l}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){let i,{generator:n,totalDuration:a,mixKeyframes:o,mirroredGenerator:r,resolvedDuration:l,calculatedDuration:c}=this;if(null===this.startTime)return n.next(0);let{delay:d=0,keyframes:u,repeat:p,repeatType:h,repeatDelay:m,type:g,onUpdate:y,finalKeyframe:f}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-a/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let v=this.currentTime-d*(this.playbackSpeed>=0?1:-1),w=this.playbackSpeed>=0?v<0:v>a;this.currentTime=Math.max(v,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=a);let b=this.currentTime,S=n;if(p){let e=Math.min(this.currentTime,a)/l,t=Math.floor(e),i=e%1;!i&&e>=1&&(i=1),1===i&&t--,(t=Math.min(t,p+1))%2&&("reverse"===h?(i=1-i,m&&(i-=m/l)):"mirror"===h&&(S=r)),b=s(0,1,i)*l}w?(this.delayState.value=u[0],i=this.delayState):i=S.next(b),o&&!w&&(i.value=o(i.value));let{done:k}=i;w||null===c||(k=this.playbackSpeed>=0?this.currentTime>=a:this.currentTime<=0);let C=null===this.holdTime&&("finished"===this.state||"running"===this.state&&k);return C&&g!==i3&&(i.value=eZ(u,this.options,f,this.speed)),y&&y(i.value),C&&this.finish(),i}then(e,t){return this.finished.then(e,t)}get duration(){return this.calculatedDuration/1e3}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+e/1e3}get time(){return this.currentTime/1e3}set time(e){e=eU(e),this.currentTime=e,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return i2(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(ti.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=this.currentTime/1e3)}play(){if(this.isStopped)return;let{driver:e=iH,startTime:t}=this.options;this.driver||(this.driver=e(e=>this.tick(e))),this.options.onPlay?.();let i=this.driver.now();"finished"===this.state?(this.updateFinished(),this.startTime=i):null!==this.holdTime?this.startTime=i-this.holdTime:this.startTime||(this.startTime=t??i),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ti.now()),this.holdTime=this.currentTime}complete(){"running"!==this.state&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null,e0.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}let ny={anticipate:na,backInOut:nn,circInOut:ns};class nf extends e8{constructor(e){!function(e){"string"==typeof e.ease&&e.ease in ny&&(e.ease=ny[e.ease])}(e),nh(e),super(e),void 0!==e.startTime&&!1!==e.autoplay&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:i,onComplete:n,element:a,...o}=this.options;if(!t)return;if(void 0!==e)return void t.set(e);let r=new ng({...o,autoplay:!1}),l=Math.max(10,ti.now()-this.startTime),c=s(0,10,l-10),d=r.sample(l).value,{name:u}=this.options;a&&u&&eY(a,u,d),t.setWithVelocity(r.sample(Math.max(0,l-c)).value,d,c),r.stop()}}let nv=(e,t)=>"zIndex"!==t&&!!("number"==typeof e||Array.isArray(e)||"string"==typeof e&&(L.test(e)||"0"===e)&&!e.startsWith("url("));function nw(e){e.duration=0,e.type="keyframes"}let nb=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,nS=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),nk=eQ(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));class nC extends e1{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:n=0,repeatDelay:a=0,repeatType:o="loop",keyframes:r,name:s,motionValue:l,element:c,...d}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=ti.now();const u={autoplay:e,delay:t,type:i,repeat:n,repeatDelay:a,repeatType:o,name:s,motionValue:l,element:c,...d},p=c?.KeyframeResolver||eO;this.keyframeResolver=new p(r,(e,t,i)=>this.onKeyframesResolved(e,t,u,!i),s,l,c),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,i,n){let a;this.keyframeResolver=void 0;let{name:o,type:r,velocity:s,delay:l,isHandoff:c,onUpdate:d}=i;this.resolvedAt=ti.now();let u=!0;!function(e,t,i,n){let a=e[0];if(null===a)return!1;if("display"===t||"visibility"===t)return!0;let o=e[e.length-1],r=nv(a,t),s=nv(o,t);return et(r===s,`You are trying to animate ${t} from "${a}" to "${o}". "${r?o:a}" is not an animatable value.`,"value-not-animatable"),!!r&&!!s&&(function(e){let t=e[0];if(1===e.length)return!0;for(let i=0;i<e.length;i++)if(e[i]!==t)return!0}(e)||("spring"===i||e7(i))&&n)}(e,o,r,s)&&(u=!1,(eT.instantAnimations||!l)&&d?.(eZ(e,i,t)),e[0]=e[e.length-1],nw(i),i.repeat=0);let p={startTime:n?this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...i,keyframes:e},h=u&&!c&&function(e){let{motionValue:t,name:i,repeatDelay:n,repeatType:a,damping:o,type:r,keyframes:s}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:l,transformTemplate:c}=t.owner.getProps();return nk()&&i&&(e9.has(i)||nS.has(i)&&function(e){for(let t=0;t<e.length;t++)if("string"==typeof e[t]&&nb.test(e[t]))return!0;return!1}(s))&&("transform"!==i||!c)&&!l&&!n&&"mirror"!==a&&0!==o&&"inertia"!==r}(p),m=p.motionValue?.owner?.current;if(h)try{a=new nf({...p,element:m})}catch{a=new ng(p)}else a=new ng(p);a.finished.then(()=>{this.notifyFinished()}).catch(eP),this.pendingTimeline&&(this.stopTimeline=a.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=a}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),eW=!0,eV(),eB(),eW=!1),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}let nP={type:"spring",stiffness:500,damping:25,restSpeed:10},nT={type:"keyframes",duration:.8},nx={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},nA=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]),nD=(e,t,i,n={},a,o)=>s=>{let l=iA(n,e)||{},c=l.delay||n.delay||0,{elapsed:d=0}=n;d-=eU(c);let u={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-d,onUpdate:e=>{t.set(e),l.onUpdate&&l.onUpdate(e)},onComplete:()=>{s(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:o?void 0:a};!function(e){for(let t in e)if(!nA.has(t))return!0;return!1}(l)&&Object.assign(u,((e,{keyframes:t})=>t.length>2?nT:r.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===t[1]?2*Math.sqrt(550):30,restSpeed:10}:nP:nx)(e,u)),u.duration&&(u.duration=eU(u.duration)),u.repeatDelay&&(u.repeatDelay=eU(u.repeatDelay)),void 0!==u.from&&(u.keyframes[0]=u.from);let p=!1;if(!1!==u.type&&(0!==u.duration||u.repeatDelay)||(nw(u),0===u.delay&&(p=!0)),(eT.instantAnimations||eT.skipAnimations||a?.shouldSkipAnimations)&&(p=!0,nw(u),u.delay=0),u.allowFlatten=!l.type&&!l.ease,p&&!o&&void 0!==t.get()){let e=eZ(u.keyframes,l);if(void 0!==e)return void eD.update(()=>{u.onUpdate(e),u.onComplete()})}return l.isSync?new ng(u):new nC(u)};function nR(e,t,{delay:i=0,transitionOverride:n,type:a}={}){let{transition:o,transitionEnd:r,...s}=t,l=e.getDefaultTransition();o=o?ix(o,l):l;let c=o?.reduceMotion;n&&(o=n);let d=[],u=a&&e.animationState&&e.animationState.getState()[a];for(let t in s){let n=e.getValue(t,e.latestValues[t]??null),a=s[t];if(void 0===a||u&&function({protectedKeys:e,needsAnimating:t},i){let n=e.hasOwnProperty(i)&&!0!==t[i];return t[i]=!1,n}(u,t))continue;let r={delay:i,...iA(o||{},t)},l=n.get();if(void 0!==l&&!n.isAnimating()&&!Array.isArray(a)&&a===l&&!r.velocity){eD.update(()=>n.set(a));continue}let p=!1;if(window.MotionHandoffAnimation){let i=e.props[iw];if(i){let e=window.MotionHandoffAnimation(i,t,eD);null!==e&&(r.startTime=e,p=!0)}}iR(e,t);let h=c??e.shouldReduceMotion;n.start(nD(t,n,a,h&&$.has(t)?{type:!1}:r,e,p));let m=n.animation;m&&d.push(m)}if(r){let t=()=>eD.update(()=>{r&&function(e,t){let{transitionEnd:i={},transition:n={},...a}=iT(e,t)||{};for(let t in a={...a,...i}){var o;let i=iD(o=a[t])?o[o.length-1]||0:o;e.hasValue(t)?e.getValue(t).set(i):e.addValue(t,ta(i))}}(e,r)});d.length?Promise.all(d).then(t):t()}return d}function nM(e,t,i,n=0,a=1){let o=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),r=e.size,s=(r-1)*n;return"function"==typeof i?i(o,r):1===a?o*n:s-o*n}function nE(e,t,i={}){let n=iT(e,t,"exit"===i.type?e.presenceContext?.custom:void 0),{transition:a=e.getDefaultTransition()||{}}=n||{};i.transitionOverride&&(a=i.transitionOverride);let o=n?()=>Promise.all(nR(e,n,i)):()=>Promise.resolve(),r=e.variantChildren&&e.variantChildren.size?(n=0)=>{let{delayChildren:o=0,staggerChildren:r,staggerDirection:s}=a;return function(e,t,i=0,n=0,a=0,o=1,r){let s=[];for(let l of e.variantChildren)l.notify("AnimationStart",t),s.push(nE(l,t,{...r,delay:i+("function"==typeof n?0:n)+nM(e.variantChildren,l,n,a,o)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(s)}(e,t,n,o,r,s,i)}:()=>Promise.resolve(),{when:s}=a;if(!s)return Promise.all([o(),r(i.delay)]);{let[e,t]="beforeChildren"===s?[o,r]:[r,o];return e().then(()=>t())}}let nF=td.length;function nI(e,t){if(!Array.isArray(t))return!1;let i=t.length;if(i!==e.length)return!1;for(let n=0;n<i;n++)if(t[n]!==e[n])return!1;return!0}let nL=[...tc].reverse(),nW=tc.length;function nB(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function nV(){return{animate:nB(!0),whileInView:nB(),whileHover:nB(),whileTap:nB(),whileDrag:nB(),whileFocus:nB(),exit:nB()}}let nO=0;function nq(e){return[e("x"),e("y")]}function nj(e,t,i,n={passive:!0}){return e.addEventListener(t,i,n),()=>e.removeEventListener(t,i)}let nG={x:!1,y:!1};function nz(e){return e.max-e.min}function nU(e,t,i,n=.5){e.origin=n,e.originPoint=tB(t.min,t.max,e.origin),e.scale=nz(i)/nz(t),e.translate=tB(i.min,i.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function nN(e,t,i,n){nU(e.x,t.x,i.x,n?n.originX:void 0),nU(e.y,t.y,i.y,n?n.originY:void 0)}function nH(e,t,i,n=0){e.min=(n?tB(i.min,i.max,n):i.min)+t.min,e.max=e.min+nz(t)}function nK(e,t,i,n=0){let a=n?tB(i.min,i.max,n):i.min;e.min=t.min-a,e.max=e.min+nz(t)}function nY(e,t,i,n){nK(e.x,t.x,i.x,n?.x),nK(e.y,t.y,i.y,n?.y)}function nQ(e){return"object"==typeof e&&null!==e}function n$(e){return nQ(e)&&"ownerSVGElement"in e}function nX(e,t,i){if(null==e)return[];if(e instanceof EventTarget)return[e];if("string"==typeof e){let n=document;t&&(n=t.current);let a=i?.[e]??n.querySelectorAll(e);return a?Array.from(a):[]}return Array.from(e).filter(e=>null!=e)}let nJ=new WeakMap,n_=(e,t,i)=>(n,a)=>a&&a[0]?a[0][e+"Size"]:n$(n)&&"getBBox"in n?n.getBBox()[t]:n[i],nZ=n_("inline","width","offsetWidth"),n1=n_("block","height","offsetHeight");function n0({target:e,borderBoxSize:t}){nJ.get(e)?.forEach(i=>{i(e,{get width(){return nZ(e,t)},get height(){return n1(e,t)}})})}function n2(e){e.forEach(n0)}let n3=new Set;function n5(e,t){let i;return"function"==typeof e?(n3.add(e),a||(a=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};n3.forEach(t=>t(e))},window.addEventListener("resize",a)),()=>{n3.delete(e),n3.size||"function"!=typeof a||(window.removeEventListener("resize",a),a=void 0)}):(!n&&"u">typeof ResizeObserver&&(n=new ResizeObserver(n2)),(i=nX(e)).forEach(e=>{let i=nJ.get(e);i||(i=new Set,nJ.set(e,i)),i.add(t),n?.observe(e)}),()=>{i.forEach(e=>{let i=nJ.get(e);i?.delete(t),i?.size||n?.unobserve(e)})})}let n4=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]),n6=new Set(["INPUT","SELECT","TEXTAREA"]),n7=e=>"mouse"===e.pointerType?"number"!=typeof e.button||e.button<=0:!1!==e.isPrimary;function n8(e){return{point:{x:e.pageX,y:e.pageY}}}function n9(e,t,i,n){return nj(e,t,e=>n7(e)&&i(e,n8(e)),n)}let ae=({current:e})=>e?e.ownerDocument.defaultView:null,at=(e,t)=>Math.abs(e-t),ai=new Set(["auto","scroll"]);class an{constructor(e,t,{transformPagePoint:i,contextWindow:n=window,dragSnapToOrigin:a=!1,distanceThreshold:o=3,element:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{var e,t;if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=aa(this.lastRawMoveEventInfo,this.transformPagePoint));let i=ar(this.lastMoveEventInfo,this.history),n=null!==this.startEvent,a=(e=i.offset,t={x:0,y:0},Math.sqrt(at(e.x,t.x)**2+at(e.y,t.y)**2)>=this.distanceThreshold);if(!n&&!a)return;let{point:o}=i,{timestamp:r}=eM;this.history.push({...o,timestamp:r});let{onStart:s,onMove:l}=this.handlers;n||(s&&s(this.lastMoveEvent,i),this.startEvent=this.lastMoveEvent),l&&l(this.lastMoveEvent,i)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=aa(t,this.transformPagePoint),eD.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:i,onSessionEnd:n,resumeAnimation:a}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&a&&a(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let o=ar("pointercancel"===e.type?this.lastMoveEventInfo:aa(t,this.transformPagePoint),this.history);this.startEvent&&i&&i(e,o),n&&n(e,o)},!n7(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=n||window;const s=aa(n8(e),this.transformPagePoint),{point:l}=s,{timestamp:c}=eM;this.history=[{...l,timestamp:c}];const{onSessionStart:d}=t;d&&d(e,ar(s,this.history)),this.removeListeners=iE(n9(this.contextWindow,"pointermove",this.handlePointerMove),n9(this.contextWindow,"pointerup",this.handlePointerUp),n9(this.contextWindow,"pointercancel",this.handlePointerUp)),r&&this.startScrollTracking(r)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(ai.has(e.overflowX)||ai.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let i=e===window,n=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},a={x:n.x-t.x,y:n.y-t.y};(0!==a.x||0!==a.y)&&(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(e,n),eD.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),eR(this.updatePoint)}}function aa(e,t){return t?{point:t(e.point)}:e}function ao(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ar({point:e},t){return{point:e,delta:ao(e,as(t)),offset:ao(e,t[0]),velocity:function(e){if(e.length<2)return{x:0,y:0};let t=e.length-1,i=null,n=as(e);for(;t>=0&&(i=e[t],!(n.timestamp-i.timestamp>eU(.1)));)t--;if(!i)return{x:0,y:0};i===e[0]&&e.length>2&&n.timestamp-i.timestamp>2*eU(.1)&&(i=e[1]);let a=(n.timestamp-i.timestamp)/1e3;if(0===a)return{x:0,y:0};let o={x:(n.x-i.x)/a,y:(n.y-i.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}(t)}}function as(e){return e[e.length-1]}function al(e,t,i){return{min:void 0!==t?e.min+t:void 0,max:void 0!==i?e.max+i-(e.max-e.min):void 0}}function ac(e,t){let i=t.min-e.min,n=t.max-e.max;return t.max-t.min<e.max-e.min&&([i,n]=[n,i]),{min:i,max:n}}function ad(e,t,i){return{min:au(e,t),max:au(e,i)}}function au(e,t){return"number"==typeof e?e:e[t]||0}let ap=new WeakMap;class ah{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Y(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:i}={}){let{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;let a=e=>{t&&this.snapToCursor(n8(e).point),this.stopAnimation()},o=(e,t)=>{let{drag:i,dragPropagation:n,onDragStart:a}=this.getProps();if(i&&!n&&(this.openDragLock&&this.openDragLock(),this.openDragLock=function(e){if("x"===e||"y"===e)if(nG[e])return null;else return nG[e]=!0,()=>{nG[e]=!1};return nG.x||nG.y?null:(nG.x=nG.y=!0,()=>{nG.x=nG.y=!1})}(i),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),nq(e=>{let t=this.getAxisMotionValue(e).get()||0;if(S.test(t)){let{projection:i}=this.visualElement;if(i&&i.layout){let n=i.layout.layoutBox[e];n&&(t=nz(n)*(parseFloat(t)/100))}}this.originPoint[e]=t}),a&&eD.update(()=>a(e,t),!1,!0),iR(this.visualElement,"transform");let{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},r=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:i,dragDirectionLock:n,onDirectionLock:a,onDrag:o}=this.getProps();if(!i&&!this.openDragLock)return;let{offset:r}=t;if(n&&null===this.currentDirection){this.currentDirection=function(e,t=10){let i=null;return Math.abs(e.y)>t?i="y":Math.abs(e.x)>t&&(i="x"),i}(r),null!==this.currentDirection&&a&&a(this.currentDirection);return}this.updateAxis("x",t.point,r),this.updateAxis("y",t.point,r),this.visualElement.render(),o&&eD.update(()=>o(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},l=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:c}=this.getProps();this.panSession=new an(e,{onSessionStart:a,onStart:o,onMove:r,onSessionEnd:s,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,distanceThreshold:i,contextWindow:ae(this.visualElement),element:this.visualElement.current})}stop(e,t){let i=e||this.latestPointerEvent,n=t||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!n||!i)return;let{velocity:o}=n;this.startAnimation(o);let{onDragEnd:r}=this.getProps();r&&eD.postRender(()=>r(i,n))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,i){let{drag:n}=this.getProps();if(!i||!ag(e,n,this.currentDirection))return;let a=this.getAxisMotionValue(e),o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=function(e,{min:t,max:i},n){return void 0!==t&&e<t?e=n?tB(t,e,n.min):Math.max(e,t):void 0!==i&&e>i&&(e=n?tB(i,e,n.max):Math.min(e,i)),e}(o,this.constraints[e],this.elastic[e])),a.set(o)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,n=this.constraints;e&&iS(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=function(e,{top:t,left:i,bottom:n,right:a}){return{x:al(e.x,i,a),y:al(e.y,t,n)}}(i.layoutBox,e):this.constraints=!1,this.elastic=function(e=.35){return!1===e?e=0:!0===e&&(e=.35),{x:ad(e,"left","right"),y:ad(e,"top","bottom")}}(t),n!==this.constraints&&!iS(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&nq(e=>{var t,n;let a;!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=(t=i.layoutBox[e],n=this.constraints[e],a={},void 0!==n.min&&(a.min=n.min-t.min),void 0!==n.max&&(a.max=n.max-t.min),a))})}resolveRefConstraints(){var e;let{dragConstraints:t,onMeasureDragConstraints:i}=this.getProps();if(!t||!iS(t))return!1;let n=t.current;ei(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.","drag-constraints-ref");let{projection:a}=this.visualElement;if(!a||!a.layout)return!1;let o=function(e,t,i){let n=t1(e,i),{scroll:a}=t;return a&&(tX(n.x,a.offset.x),tX(n.y,a.offset.y)),n}(n,a.root,this.visualElement.getTransformPagePoint()),r=(e=a.layout.layoutBox,{x:ac(e.x,o.x),y:ac(e.y,o.y)});if(i){let e=i(function({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}(r));this.hasMutatedConstraints=!!e,e&&(r=tz(e))}return r}startAnimation(e){let{drag:t,dragMomentum:i,dragElastic:n,dragTransition:a,dragSnapToOrigin:o,onDragTransitionEnd:r}=this.getProps(),s=this.constraints||{};return Promise.all(nq(r=>{if(!ag(r,t,this.currentDirection))return;let l=s&&s[r]||{};(!0===o||o===r)&&(l={min:0,max:0});let c={type:"inertia",velocity:i?e[r]:0,bounceStiffness:n?200:1e6,bounceDamping:n?40:1e7,timeConstant:750,restDelta:1,restSpeed:10,...a,...l};return this.startAxisValueAnimation(r,c)})).then(r)}startAxisValueAnimation(e,t){let i=this.getAxisMotionValue(e);return iR(this.visualElement,e),i.start(nD(e,i,0,t,this.visualElement,!1))}stopAnimation(){nq(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps();return i[t]||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){nq(t=>{let{drag:i}=this.getProps();if(!ag(t,i,this.currentDirection))return;let{projection:n}=this.visualElement,a=this.getAxisMotionValue(t);if(n&&n.layout){let{min:i,max:o}=n.layout.layoutBox[t],r=a.get()||0;a.set(e[t]-tB(i,o,.5)+r)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!iS(t)||!i||!this.constraints)return;this.stopAnimation();let n={x:0,y:0};nq(e=>{let t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){var i,a;let o,r,l,c=t.get();n[e]=(i={min:c,max:c},a=this.constraints[e],o=.5,r=nz(i),(l=nz(a))>r?o=nd(a.min,a.max-r,i.min):r>l&&(o=nd(i.min,i.max-l,a.min)),s(0,1,o))}});let{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),nq(t=>{if(!ag(t,e,null))return;let i=this.getAxisMotionValue(t),{min:a,max:o}=this.constraints[t];i.set(tB(a,o,n[t]))}),this.visualElement.render()}addListeners(){let e;if(!this.visualElement.current)return;ap.set(this.visualElement,this);let t=this.visualElement.current,i=n9(t,"pointerdown",e=>{let{drag:i,dragListener:n=!0}=this.getProps(),a=e.target,o=a!==t&&(n6.has(a.tagName)||!0===a.isContentEditable);i&&n&&!o&&this.start(e)}),n=()=>{var i,n,a;let o,r,{dragConstraints:s}=this.getProps();iS(s)&&s.current&&(this.constraints=this.resolveRefConstraints(),e||(i=t,n=s.current,o=n5(i,am(a=()=>this.scalePositionWithinConstraints())),r=n5(n,am(a)),e=()=>{o(),r()}))},{projection:a}=this.visualElement,o=a.addEventListener("measure",n);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),eD.read(n);let r=nj(window,"resize",()=>this.scalePositionWithinConstraints()),s=a.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(nq(t=>{let i=this.getAxisMotionValue(t);i&&(this.originPoint[t]+=e[t].translate,i.set(i.get()+e[t].translate))}),this.visualElement.render())});return()=>{r(),i(),o(),s&&s(),e&&e()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:n=!1,dragConstraints:a=!1,dragElastic:o=.35,dragMomentum:r=!0}=e;return{...e,drag:t,dragDirectionLock:i,dragPropagation:n,dragConstraints:a,dragElastic:o,dragMomentum:r}}}function am(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function ag(e,t,i){return(!0===t||t===e)&&(null===i||i===e)}let ay=e=>(t,i)=>{e&&eD.update(()=>e(t,i),!1,!0)},af={hasAnimatedSinceResize:!0,hasEverUpdated:!1};var av=t2;function aw(e=!0){let t=(0,t2.useContext)(ic);if(null===t)return[!0,null];let{isPresent:i,onExitComplete:n,register:a}=t,o=(0,t2.useId)();(0,t2.useEffect)(()=>{if(e)return a(o)},[e]);let r=(0,t2.useCallback)(()=>e&&n&&n(o),[o,n,e]);return!i&&n?[!1,r]:[!0]}e.s(["usePresence",0,aw],18015);let ab=!1;class aS extends av.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:n}=this.props,{projection:a}=e;a&&(t.group&&t.group.add(a),i&&i.register&&n&&i.register(a),ab&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),af.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:i,drag:n,isPresent:a}=this.props,{projection:o}=i;return o&&(o.isPresent=a,e.layoutDependency!==t&&o.setOptions({...o.options,layoutDependency:t}),ab=!0,n||e.layoutDependency!==t||void 0===t||e.isPresent!==a?o.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?o.promote():o.relegate()||eD.postRender(()=>{let e=o.getStack();e&&e.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=t,i.root.didUpdate(),te.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:n}=e;ab=!0,n&&(n.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(n),i&&i.deregister&&i.deregister(n))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}}function ak(e){let[t,i]=aw(),n=(0,av.useContext)(t6);return(0,t4.jsx)(aS,{...e,layoutGroup:n,switchLayoutGroup:(0,av.useContext)(ib),isPresent:t,safeToRemove:i})}let aC=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],aP=aC.length,aT=e=>"string"==typeof e?parseFloat(e):e,ax=e=>"number"==typeof e||k.test(e);function aA(e,t){return void 0!==e[t]?e[t]:e.borderRadius}let aD=aM(0,.5,nr),aR=aM(.5,.95,eP);function aM(e,t,i){return n=>n<e?0:n>t?1:i(nd(e,t,n))}function aE(e,t){e.min=t.min,e.max=t.max}function aF(e,t){aE(e.x,t.x),aE(e.y,t.y)}function aI(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function aL(e,t,i,n,a){return e-=t,e=n+1/i*(e-n),void 0!==a&&(e=n+1/a*(e-n)),e}function aW(e,t,[i,n,a],o,r){!function(e,t=0,i=1,n=.5,a,o=e,r=e){if(S.test(t)&&(t=parseFloat(t),t=tB(r.min,r.max,t/100)-r.min),"number"!=typeof t)return;let s=tB(o.min,o.max,n);e===o&&(s-=t),e.min=aL(e.min,t,i,s,a),e.max=aL(e.max,t,i,s,a)}(e,t[i],t[n],t[a],t.scale,o,r)}let aB=["x","scaleX","originX"],aV=["y","scaleY","originY"];function aO(e,t,i,n){aW(e.x,t,aB,i?i.x:void 0,n?n.x:void 0),aW(e.y,t,aV,i?i.y:void 0,n?n.y:void 0)}function aq(e){return 0===e.translate&&1===e.scale}function aj(e){return aq(e.x)&&aq(e.y)}function aG(e,t){return e.min===t.min&&e.max===t.max}function az(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function aU(e,t){return az(e.x,t.x)&&az(e.y,t.y)}function aN(e){return nz(e.x)/nz(e.y)}function aH(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class aK{constructor(){this.members=[]}add(e){eN(this.members,e);for(let t=this.members.length-1;t>=0;t--){let i=this.members[t];if(i===e||i===this.lead||i===this.prevLead)continue;let n=i.instance;n&&!1!==n.isConnected||i.snapshot||(eH(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(eH(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(!1!==e.isPresent&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();let{layoutDependency:n}=i.options,{layoutDependency:a}=e.options;(void 0===n||n!==a)&&(e.resumeFrom=i,t&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),!1===e.options.crossfade&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}let aY=(e,t)=>e.depth-t.depth;class aQ{constructor(){this.children=[],this.isDirty=!1}add(e){eN(this.children,e),this.isDirty=!0}remove(e){eH(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(aY),this.isDirty=!1,this.children.forEach(e)}}let a$=["","X","Y","Z"],aX=0;function aJ(e,t,i,n){let{latestValues:a}=t;a[e]&&(i[e]=a[e],t.setStaticValue(e,0),n&&(n[e]=0))}function a_({attachResizeListener:e,defaultParent:t,measureScroll:i,checkIsScrollRoot:n,resetTransform:a}){return class{constructor(e={},i=t?.()){this.id=aX++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(a0),this.nodes.forEach(oe),this.nodes.forEach(ot),this.nodes.forEach(a2)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=i?i.root||i:this,this.path=i?[...i.path,i]:[],this.parent=i,this.depth=i?i.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new aQ)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new eK),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let i=this.eventHandlers.get(e);i&&i.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=n$(t)&&!(n$(t)&&"svg"===t.tagName),this.instance=t;let{layoutId:i,layout:n,visualElement:a}=this.options;if(a&&!a.current&&a.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(n||i)&&(this.isLayoutDirty=!0),e){let i,n=0,a=()=>this.root.updateBlockedByResize=!1;eD.read(()=>{n=window.innerWidth}),e(t,()=>{let e=window.innerWidth;if(e!==n){let t,o;n=e,this.root.updateBlockedByResize=!0,i&&i(),t=ti.now(),o=({timestamp:e})=>{let i=e-t;i>=250&&(eR(o),a(i-250))},eD.setup(o,!0),i=()=>eR(o),af.hasAnimatedSinceResize&&(af.hasAnimatedSinceResize=!1,this.nodes.forEach(a9))}})}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&a&&(i||n)&&this.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:i,layout:n})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let o=this.options.transition||a.getDefaultTransition()||os,{onLayoutAnimationStart:r,onLayoutAnimationComplete:s}=a.getProps(),l=!this.targetLayout||!aU(this.targetLayout,n),c=!t&&i;if(this.options.layoutRoot||this.resumeFrom||c||t&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...iA(o,"layout"),onPlay:r,onComplete:s};(a.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,c)}else t||a9(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=n})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),eR(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){!this.isUpdateBlocked()&&(this.isUpdating=!0,this.nodes&&this.nodes.forEach(oi),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&function e(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;let{visualElement:i}=t.options;if(!i)return;let n=i.props[iw];if(window.MotionHasOptimisedAnimation(n,"transform")){let{layout:e,layoutId:i}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",eD,!(e||i))}let{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&e(a)}(this),this.root.isUpdating||this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,("string"==typeof t.latestValues.x||"string"==typeof t.latestValues.y)&&(t.isLayoutDirty=!0),t.updateScroll("snapshot"),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:i}=this.options;if(void 0===t&&!i)return;let n=this.getTransformTemplate();this.prevTransformTemplateValue=n?n(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(a4),this.nodes.forEach(a5);return}if(this.animationId<=this.animationCommitId)return void this.nodes.forEach(a6);this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(a7),this.nodes.forEach(a8),this.nodes.forEach(aZ),this.nodes.forEach(a1)):this.nodes.forEach(a6),this.clearAllSnapshots();let e=ti.now();eM.delta=s(0,1e3/60,e-eM.timestamp),eM.timestamp=e,eM.isProcessing=!0,eE.update.process(eM),eE.preRender.process(eM),eE.render.process(eM),eM.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,te.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(a3),this.sharedNodes.forEach(on)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,eD.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){eD.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||nz(this.snapshot.measuredBox.x)||nz(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Y()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e="measure"){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=n(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!a)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!aj(this.projectionDelta),i=this.getTransformTemplate(),n=i?i(this.latestValues,""):void 0,o=n!==this.prevTransformTemplateValue;e&&this.instance&&(t||tH(this.latestValues)||o)&&(a(this.instance,n),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){var t;let i=this.measurePageBox(),n=this.removeElementScroll(i);return e&&(n=this.removeTransform(n)),od((t=n).x),od(t.y),{animationId:this.root.animationId,measuredBox:i,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return Y();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(op))){let{scroll:e}=this.root;e&&(tX(t.x,e.offset.x),tX(t.y,e.offset.y))}return t}removeElementScroll(e){let t=Y();if(aF(t,e),this.scroll?.wasRoot)return t;for(let i=0;i<this.path.length;i++){let n=this.path[i],{scroll:a,options:o}=n;n!==this.root&&a&&o.layoutScroll&&(a.wasRoot&&aF(t,e),tX(t.x,a.offset.x),tX(t.y,a.offset.y))}return t}applyTransform(e,t=!1,i){let n=i||Y();aF(n,e);for(let e=0;e<this.path.length;e++){let i=this.path[e];!t&&i.options.layoutScroll&&i.scroll&&i!==i.root&&(tX(n.x,-i.scroll.offset.x),tX(n.y,-i.scroll.offset.y)),tH(i.latestValues)&&tZ(n,i.latestValues,i.layout?.layoutBox)}return tH(this.latestValues)&&tZ(n,this.latestValues,this.layout?.layoutBox),n}removeTransform(e){let t=Y();aF(t,e);for(let e=0;e<this.path.length;e++){let i,n=this.path[e];tH(n.latestValues)&&(n.instance&&(tN(n.latestValues)&&n.updateSnapshot(),aF(i=Y(),n.measurePageBox())),aO(t,n.latestValues,n.snapshot?.layoutBox,i))}return tH(this.latestValues)&&aO(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==eM.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=t.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=t.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=t.isSharedProjectionDirty);let i=!!this.resumingFrom||this!==t;if(!(e||i&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:n,layoutId:a}=this.options;if(!this.layout||!(n||a))return;this.resolvedRelativeTargetAt=eM.timestamp;let o=this.getClosestProjectingParent();if(o&&this.linkedParentVersion!==o.layoutVersion&&!o.options.layoutRoot&&this.removeRelativeTarget(),this.targetDelta||this.relativeTarget||(!1!==this.options.layoutAnchor&&o&&o.layout?this.createRelativeTarget(o,this.layout.layoutBox,o.layout.layoutBox):this.removeRelativeTarget()),this.relativeTarget||this.targetDelta){if(this.target||(this.target=Y(),this.targetWithTransforms=Y()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target){var r,s,l,c;this.forceRelativeParentToResolveTarget(),r=this.target,s=this.relativeTarget,l=this.relativeParent.target,c=this.options.layoutAnchor||void 0,nH(r.x,s.x,l.x,c?.x),nH(r.y,s.y,l.y,c?.y)}else this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):aF(this.target,this.layout.layoutBox),t$(this.target,this.targetDelta)):aF(this.target,this.layout.layoutBox);this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,!1!==this.options.layoutAnchor&&o&&!!o.resumingFrom==!!this.resumingFrom&&!o.options.layoutScroll&&o.target&&1!==this.animationProgress?this.createRelativeTarget(o,this.target,o.target):this.relativeParent=this.relativeTarget=void 0)}}getClosestProjectingParent(){if(!(!this.parent||tN(this.parent.latestValues)||tK(this.parent.latestValues)))if(this.parent.isProjecting())return this.parent;else return this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,i){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Y(),this.relativeTargetOrigin=Y(),nY(this.relativeTargetOrigin,t,i,this.options.layoutAnchor||void 0),aF(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,i=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(i=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(i=!1),this.resolvedRelativeTargetAt===eM.timestamp&&(i=!1),i)return;let{layout:n,layoutId:a}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(n||a))return;aF(this.layoutCorrected,this.layout.layoutBox);let o=this.treeScale.x,r=this.treeScale.y;!function(e,t,i,n=!1){let a,o,r=i.length;if(r){t.x=t.y=1;for(let s=0;s<r;s++){o=(a=i[s]).projectionDelta;let{visualElement:r}=a.options;(!r||!r.props.style||"contents"!==r.props.style.display)&&(n&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(tX(e.x,-a.scroll.offset.x),tX(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,t$(e,o)),n&&tH(a.latestValues)&&tZ(e,a.latestValues,a.layout?.layoutBox))}t.x<1.0000000000001&&t.x>.999999999999&&(t.x=1),t.y<1.0000000000001&&t.y>.999999999999&&(t.y=1)}}(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(1!==this.treeScale.x||1!==this.treeScale.y)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=Y());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}this.projectionDelta&&this.prevProjectionDelta?(aI(this.prevProjectionDelta.x,this.projectionDelta.x),aI(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),nN(this.projectionDelta,this.layoutCorrected,s,this.latestValues),this.treeScale.x===o&&this.treeScale.y===r&&aH(this.projectionDelta.x,this.prevProjectionDelta.x)&&aH(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",s))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=H(),this.projectionDelta=H(),this.projectionDeltaWithTransform=H()}setAnimationOrigin(e,t=!1){let i,n=this.snapshot,a=n?n.latestValues:{},o={...this.latestValues},r=H();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=Y(),l=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),d=!c||c.members.length<=1,u=!!(l&&!d&&!0===this.options.crossfade&&!this.path.some(or));this.animationProgress=0,this.mixTargetDelta=t=>{let n=t/1e3;if(oa(r.x,e.x,n),oa(r.y,e.y,n),this.setTargetDelta(r),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout){var c,p,h,m,g,y;nY(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),h=this.relativeTarget,m=this.relativeTargetOrigin,g=s,y=n,oo(h.x,m.x,g.x,y),oo(h.y,m.y,g.y,y),i&&(c=this.relativeTarget,p=i,aG(c.x,p.x)&&aG(c.y,p.y))&&(this.isProjectionDirty=!1),i||(i=Y()),aF(i,this.relativeTarget)}l&&(this.animationValues=o,function(e,t,i,n,a,o){a?(e.opacity=tB(0,i.opacity??1,aD(n)),e.opacityExit=tB(t.opacity??1,0,aR(n))):o&&(e.opacity=tB(t.opacity??1,i.opacity??1,n));for(let a=0;a<aP;a++){let o=aC[a],r=aA(t,o),s=aA(i,o);(void 0!==r||void 0!==s)&&(r||(r=0),s||(s=0),0===r||0===s||ax(r)===ax(s)?(e[o]=Math.max(tB(aT(r),aT(s),n),0),(S.test(s)||S.test(r))&&(e[o]+="%")):e[o]=s)}(t.rotate||i.rotate)&&(e.rotate=tB(t.rotate||0,i.rotate||0,n))}(o,a,this.latestValues,n,u,d)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(1e3*!!this.options.layoutRoot)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(eR(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=eD.update(()=>{var t,i,n;let a;af.hasAnimatedSinceResize=!0,e0.layout++,this.motionValue||(this.motionValue=ta(0)),this.motionValue.jump(0,!1),this.currentAnimation=(t=this.motionValue,i=[0,1e3],n={...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{e0.layout--},onComplete:()=>{e0.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}},(a=Q(t)?t:ta(t)).start(nD("",a,i,n)),a.animation),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:i,layout:n,latestValues:a}=e;if(t&&i&&n){if(this!==e&&this.layout&&n&&ou(this.options.animationType,this.layout.layoutBox,n.layoutBox)){i=this.target||Y();let t=nz(this.layout.layoutBox.x);i.x.min=e.target.x.min,i.x.max=i.x.min+t;let n=nz(this.layout.layoutBox.y);i.y.min=e.target.y.min,i.y.max=i.y.min+n}aF(t,i),tZ(t,a),nN(this.projectionDeltaWithTransform,this.layoutCorrected,t,a)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new aK),this.sharedNodes.get(e).add(t);let i=t.options.initialPromotionConfig;t.promote({transition:i?i.transition:void 0,preserveFollowOpacity:i&&i.shouldPreserveFollowOpacity?i.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:i}={}){let n=this.getStack();n&&n.promote(this,i),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:i}=e;if((i.z||i.rotate||i.rotateX||i.rotateY||i.rotateZ||i.skewX||i.skewY)&&(t=!0),!t)return;let n={};i.z&&aJ("z",e,n,this.animationValues);for(let t=0;t<a$.length;t++)aJ(`rotate${a$[t]}`,e,n,this.animationValues),aJ(`skew${a$[t]}`,e,n,this.animationValues);for(let t in e.render(),n)e.setStaticValue(t,n[t]),this.animationValues&&(this.animationValues[t]=n[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility="hidden";return}let i=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility="",e.opacity="",e.pointerEvents=il(t?.pointerEvents)||"",e.transform=i?i(this.latestValues,""):"none";return}let n=this.getLead();if(!this.projectionDelta||!this.layout||!n.target){this.options.layoutId&&(e.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,e.pointerEvents=il(t?.pointerEvents)||""),this.hasProjected&&!tH(this.latestValues)&&(e.transform=i?i({},""):"none",this.hasProjected=!1);return}e.visibility="";let a=n.animationValues||n.latestValues;this.applyTransformsToTarget();let o=function(e,t,i){let n="",a=e.x.translate/t.x,o=e.y.translate/t.y,r=i?.z||0;if((a||o||r)&&(n=`translate3d(${a}px, ${o}px, ${r}px) `),(1!==t.x||1!==t.y)&&(n+=`scale(${1/t.x}, ${1/t.y}) `),i){let{transformPerspective:e,rotate:t,rotateX:a,rotateY:o,skewX:r,skewY:s}=i;e&&(n=`perspective(${e}px) ${n}`),t&&(n+=`rotate(${t}deg) `),a&&(n+=`rotateX(${a}deg) `),o&&(n+=`rotateY(${o}deg) `),r&&(n+=`skewX(${r}deg) `),s&&(n+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,l=e.y.scale*t.y;return(1!==s||1!==l)&&(n+=`scale(${s}, ${l})`),n||"none"}(this.projectionDeltaWithTransform,this.treeScale,a);i&&(o=i(a,o)),e.transform=o;let{x:r,y:s}=this.projectionDelta;for(let t in e.transformOrigin=`${100*r.origin}% ${100*s.origin}% 0`,n.animationValues?e.opacity=n===this?a.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:a.opacityExit:e.opacity=n===this?void 0!==a.opacity?a.opacity:"":void 0!==a.opacityExit?a.opacityExit:0,tV){if(void 0===a[t])continue;let{correct:i,applyTo:r,isCSSVariable:s}=tV[t],l="none"===o?a[t]:i(a[t],n);if(r){let t=r.length;for(let i=0;i<t;i++)e[r[i]]=l}else s?this.options.visualElement.renderState.vars[t]=l:e[t]=l}this.options.layoutId&&(e.pointerEvents=n===this?il(t?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(a5),this.root.sharedNodes.clear()}}}function aZ(e){e.updateLayout()}function a1(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){let{layoutBox:i,measuredBox:n}=e.layout,{animationType:a}=e.options,o=t.source!==e.layout.source;if("size"===a)nq(e=>{let n=o?t.measuredBox[e]:t.layoutBox[e],a=nz(n);n.min=i[e].min,n.max=n.min+a});else if("x"===a||"y"===a){let e="x"===a?"y":"x";aE(o?t.measuredBox[e]:t.layoutBox[e],i[e])}else ou(a,t.layoutBox,i)&&nq(n=>{let a=o?t.measuredBox[n]:t.layoutBox[n],r=nz(i[n]);a.max=a.min+r,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[n].max=e.relativeTarget[n].min+r)});let r=H();nN(r,i,t.layoutBox);let s=H();o?nN(s,e.applyTransform(n,!0),t.measuredBox):nN(s,i,t.layoutBox);let l=!aj(r),c=!1;if(!e.resumeFrom){let n=e.getClosestProjectingParent();if(n&&!n.resumeFrom){let{snapshot:a,layout:o}=n;if(a&&o){let r=e.options.layoutAnchor||void 0,s=Y();nY(s,t.layoutBox,a.layoutBox,r);let l=Y();nY(l,i,o.layoutBox,r),aU(s,l)||(c=!0),n.options.layoutRoot&&(e.relativeTarget=l,e.relativeTargetOrigin=s,e.relativeParent=n)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:s,layoutDelta:r,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function a0(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function a2(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function a3(e){e.clearSnapshot()}function a5(e){e.clearMeasurements()}function a4(e){e.isLayoutDirty=!0,e.updateLayout()}function a6(e){e.isLayoutDirty=!1}function a7(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function a8(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function a9(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function oe(e){e.resolveTargetDelta()}function ot(e){e.calcProjection()}function oi(e){e.resetSkewAndRotation()}function on(e){e.removeLeadSnapshot()}function oa(e,t,i){e.translate=tB(t.translate,0,i),e.scale=tB(t.scale,1,i),e.origin=t.origin,e.originPoint=t.originPoint}function oo(e,t,i,n){e.min=tB(t.min,i.min,n),e.max=tB(t.max,i.max,n)}function or(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}let os={duration:.45,ease:[.4,0,.1,1]},ol=e=>"u">typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),oc=ol("applewebkit/")&&!ol("chrome/")?Math.round:eP;function od(e){e.min=oc(e.min),e.max=oc(e.max)}function ou(e,t,i){return"position"===e||"preserve-aspect"===e&&!(.2>=Math.abs(aN(t)-aN(i)))}function op(e){return e!==e.root&&e.scroll?.wasRoot}let oh=a_({attachResizeListener:(e,t)=>nj(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),om={current:void 0},og=a_({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!om.current){let e=new oh({});e.mount(window),e.setOptions({layoutScroll:!0}),om.current=e}return om.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>"fixed"===window.getComputedStyle(e).position});function oy(e,t){let i=nX(e),n=new AbortController;return[i,{passive:!0,...t,signal:n.signal},()=>n.abort()]}function of(e,t,i){let{props:n}=e;e.animationState&&n.whileHover&&e.animationState.setActive("whileHover","Start"===i);let a=n["onHover"+i];a&&eD.postRender(()=>a(t,n8(t)))}function ov(e){return nQ(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}e.s(["isHTMLElement",0,ov],50438);let ow=(e,t)=>!!t&&(e===t||ow(e,t.parentElement)),ob=new WeakSet;function oS(e){return t=>{"Enter"===t.key&&e(t)}}function ok(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function oC(e){return n7(e)&&!(nG.x||nG.y)}let oP=new WeakSet;function oT(e,t,i){let{props:n}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&n.whileTap&&e.animationState.setActive("whileTap","Start"===i);let a=n["onTap"+("End"===i?"":i)];a&&eD.postRender(()=>a(t,n8(t)))}let ox=new WeakMap,oA=new WeakMap,oD=e=>{let t=ox.get(e.target);t&&t(e)},oR=e=>{e.forEach(oD)},oM={some:0,all:1},oE=function(e,t){if("u"<typeof Proxy)return iC;let i=new Map,n=(i,n)=>iC(i,n,e,t);return new Proxy((e,t)=>n(e,t),{get:(a,o)=>"create"===o?n:(i.has(o)||i.set(o,iC(o,void 0,e,t)),i.get(o))})}({animation:{Feature:class extends iP{constructor(e){super(e),e.animationState||(e.animationState=function(e){let t=t=>Promise.all(t.map(({animation:t,options:i})=>(function(e,t,i={}){let n;if(e.notify("AnimationStart",t),Array.isArray(t))n=Promise.all(t.map(t=>nE(e,t,i)));else if("string"==typeof t)n=nE(e,t,i);else{let a="function"==typeof t?iT(e,t,i.custom):t;n=Promise.all(nR(e,a,i))}return n.then(()=>{e.notify("AnimationComplete",t)})})(e,t,i))),i=nV(),n=!0,a=!1,o=t=>(i,n)=>{let a=iT(e,n,"exit"===t?e.presenceContext?.custom:void 0);if(a){let{transition:e,transitionEnd:t,...n}=a;i={...i,...n,...t}}return i};function r(r){let{props:s}=e,l=function e(t){if(!t)return;if(!t.isControllingVariants){let i=t.parent&&e(t.parent)||{};return void 0!==t.props.initial&&(i.initial=t.props.initial),i}let i={};for(let e=0;e<nF;e++){let n=td[e],a=t.props[n];(tl(a)||!1===a)&&(i[n]=a)}return i}(e.parent)||{},c=[],d=new Set,u={},p=1/0;for(let t=0;t<nW;t++){var h,m;let g=nL[t],y=i[g],f=void 0!==s[g]?s[g]:l[g],v=tl(f),w=g===r?y.isActive:null;!1===w&&(p=t);let b=f===l[g]&&f!==s[g]&&v;if(b&&(n||a)&&e.manuallyAnimateOnMount&&(b=!1),y.protectedKeys={...u},!y.isActive&&null===w||!f&&!y.prevProp||ts(f)||"boolean"==typeof f)continue;if("exit"===g&&y.isActive&&!0!==w){y.prevResolvedValues&&(u={...u,...y.prevResolvedValues});continue}let S=(h=y.prevProp,"string"==typeof(m=f)?m!==h:!!Array.isArray(m)&&!nI(m,h)),k=S||g===r&&y.isActive&&!b&&v||t>p&&v,C=!1,P=Array.isArray(f)?f:[f],T=P.reduce(o(g),{});!1===w&&(T={});let{prevResolvedValues:x={}}=y,A={...x,...T},D=t=>{k=!0,d.has(t)&&(C=!0,d.delete(t)),y.needsAnimating[t]=!0;let i=e.getValue(t);i&&(i.liveStyle=!1)};for(let e in A){let t=T[e],i=x[e];if(!u.hasOwnProperty(e))(iD(t)&&iD(i)?nI(t,i):t===i)?void 0!==t&&d.has(e)?D(e):y.protectedKeys[e]=!0:null!=t?D(e):d.add(e)}y.prevProp=f,y.prevResolvedValues=T,y.isActive&&(u={...u,...T}),(n||a)&&e.blockInitialAnimation&&(k=!1);let R=b&&S,M=!R||C;k&&M&&c.push(...P.map(t=>{let i={type:g};if("string"==typeof t&&(n||a)&&!R&&e.manuallyAnimateOnMount&&e.parent){let{parent:n}=e,a=iT(n,t);if(n.enteringChildren&&a){let{delayChildren:t}=a.transition||{};i.delay=nM(n.enteringChildren,e,t)}}return{animation:t,options:i}}))}if(d.size){let t={};if("boolean"!=typeof s.initial){let i=iT(e,Array.isArray(s.initial)?s.initial[0]:s.initial);i&&i.transition&&(t.transition=i.transition)}d.forEach(i=>{let n=e.getBaseTarget(i),a=e.getValue(i);a&&(a.liveStyle=!0),t[i]=n??null}),c.push({animation:t})}let g=!!c.length;return n&&(!1===s.initial||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(g=!1),n=!1,a=!1,g?t(c):Promise.resolve()}return{animateChanges:r,setActive:function(t,n){if(i[t].isActive===n)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,n)),i[t].isActive=n;let a=r(t);for(let e in i)i[e].protectedKeys={};return a},setAnimateFunction:function(i){t=i(e)},getState:()=>i,reset:()=>{i=nV(),a=!0}}}(e))}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();ts(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends iP{constructor(){super(...arguments),this.id=nO++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;if(e&&!1===i){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if("string"==typeof e){let i=iT(this.node,e,t);if(i){let{transition:e,transitionEnd:t,...n}=i;for(let e in n)this.node.getValue(e)?.jump(n[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}let n=this.node.animationState.setActive("exit",!e);t&&!e&&n.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}},inView:{Feature:class extends iP{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var e;let t;this.stopObserver?.();let{viewport:i={}}=this.node.getProps(),{root:n,margin:a,amount:o="some",once:r}=i,s={root:n?n.current:void 0,rootMargin:a,threshold:"number"==typeof o?o:oM[o]},l=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,r&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);let{onViewportEnter:i,onViewportLeave:n}=this.node.getProps(),a=t?i:n;a&&a(e)};this.stopObserver=(e=this.node.current,t=function({root:e,...t}){let i=e||document;oA.has(i)||oA.set(i,{});let n=oA.get(i),a=JSON.stringify(t);return n[a]||(n[a]=new IntersectionObserver(oR,{root:e,...t})),n[a]}(s),ox.set(e,l),t.observe(e),()=>{ox.delete(e),t.unobserve(e)})}mount(){this.startObserver()}update(){if("u"<typeof IntersectionObserver)return;let{props:e,prevProps:t}=this.node;["amount","margin","root"].some(function({viewport:e={}},{viewport:t={}}={}){return i=>e[i]!==t[i]}(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}},tap:{Feature:class extends iP{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:i}=this.node.props;this.unmount=function(e,t,i={}){let[n,a,o]=oy(e,i),r=e=>{let n=e.currentTarget;if(!oC(e)||oP.has(e))return;ob.add(n),i.stopPropagation&&oP.add(e);let o=t(n,e),r=(e,t)=>{window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",l),ob.has(n)&&ob.delete(n),oC(e)&&"function"==typeof o&&o(e,{success:t})},s=e=>{r(e,n===window||n===document||i.useGlobalTarget||ow(n,e.target))},l=e=>{r(e,!1)};window.addEventListener("pointerup",s,a),window.addEventListener("pointercancel",l,a)};return n.forEach(e=>{((i.useGlobalTarget?window:e).addEventListener("pointerdown",r,a),ov(e))&&(e.addEventListener("focus",e=>((e,t)=>{let i=e.currentTarget;if(!i)return;let n=oS(()=>{if(ob.has(i))return;ok(i,"down");let e=oS(()=>{ok(i,"up")});i.addEventListener("keyup",e,t),i.addEventListener("blur",()=>ok(i,"cancel"),t)});i.addEventListener("keydown",n,t),i.addEventListener("blur",()=>i.removeEventListener("keydown",n),t)})(e,a)),n4.has(e.tagName)||!0===e.isContentEditable||e.hasAttribute("tabindex")||(e.tabIndex=0))}),o}(e,(e,t)=>(oT(this.node,t,"Start"),(e,{success:t})=>oT(this.node,e,t?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:i?.tap===!1})}unmount(){}}},focus:{Feature:class extends iP{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(t){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=iE(nj(this.node.current,"focus",()=>this.onFocus()),nj(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends iP{mount(){let{current:e}=this.node;e&&(this.unmount=function(e,t,i={}){let[n,a,o]=oy(e,i);return n.forEach(e=>{let i,n=!1,o=!1,r=t=>{i&&(i(t),i=void 0),e.removeEventListener("pointerleave",l)},s=e=>{n=!1,window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",s),o&&(o=!1,r(e))},l=e=>{if("touch"!==e.pointerType){if(n){o=!0;return}r(e)}};e.addEventListener("pointerenter",n=>{if("touch"===n.pointerType||nG.x||nG.y)return;o=!1;let r=t(e,n);"function"==typeof r&&(i=r,e.addEventListener("pointerleave",l,a))},a),e.addEventListener("pointerdown",()=>{n=!0,window.addEventListener("pointerup",s,a),window.addEventListener("pointercancel",s,a)},a)}),o}(e,(e,t)=>(of(this.node,t,"Start"),e=>of(this.node,e,"End"))))}unmount(){}}},pan:{Feature:class extends iP{constructor(){super(...arguments),this.removePointerDownListener=eP}onPointerDown(e){this.session=new an(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ae(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:n}=this.node.getProps();return{onSessionStart:ay(e),onStart:ay(t),onMove:ay(i),onEnd:(e,t)=>{delete this.session,n&&eD.postRender(()=>n(e,t))}}}mount(){this.removePointerDownListener=n9(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends iP{constructor(e){super(e),this.removeGroupControls=eP,this.removeListeners=eP,this.controls=new ah(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||eP}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},ProjectionNode:og,MeasureLayout:ak},layout:{ProjectionNode:og,MeasureLayout:ak}},(e,t)=>t.isSVG??t5(e)?new tG(t):new t0(t,{allowProjection:e!==t2.Fragment}));e.s(["motion",0,oE],12086);let oF=[{id:"cg-001",title:"REST API Endpoint Generator",category:"Code Generation",prompt:`You are a senior backend engineer. Generate a complete, production-ready REST API endpoint with the following specifications:

**Context**: [Describe the resource/entity]
**Framework**: [Express/FastAPI/Next.js/etc.]
**Database**: [PostgreSQL/MongoDB/etc.]

Requirements:
1. Full CRUD operations with proper HTTP methods
2. Input validation with detailed error messages
3. Authentication middleware integration
4. Rate limiting considerations
5. Pagination for list endpoints
6. Proper HTTP status codes
7. TypeScript/type hints throughout
8. Error handling with try-catch blocks
9. Database transaction support where needed
10. OpenAPI/Swagger documentation comments

Return the complete code with imports, middleware setup, route handlers, and database queries. Include example request/response payloads as comments.`,isFree:!0},{id:"cg-002",title:"React Component Architect",category:"Code Generation",prompt:`Act as a senior React developer. Build a production-ready React component with this specification:

**Component**: [Name and description]
**Props**: [List expected props]
**Behavior**: [Describe interactions]

Requirements:
1. TypeScript with strict typing — export prop interfaces
2. Responsive design using CSS modules or Tailwind
3. Accessibility: ARIA labels, keyboard navigation, screen reader support
4. Error boundaries and loading states
5. Memoization where beneficial (useMemo, useCallback)
6. Custom hooks for complex logic extraction
7. Unit test suggestions (Jest + Testing Library)
8. Storybook story definition
9. Handle edge cases: empty states, overflow, error states
10. Performance: avoid unnecessary re-renders

Deliver clean, commented code following React best practices. Include the component, types, styles, and test file.`,isFree:!0},{id:"cg-003",title:"Database Schema Designer",category:"Code Generation",prompt:`You are a database architect. Design a normalized database schema for the following system:

**System**: [Describe the application]
**Scale**: [Expected users/data volume]
**Database**: [PostgreSQL/MySQL/MongoDB]

Deliver:
1. Complete schema with all tables/collections
2. Primary keys, foreign keys, and indexes
3. Data types optimized for the use case
4. Constraints (UNIQUE, NOT NULL, CHECK)
5. Junction tables for many-to-many relationships
6. Created_at/updated_at timestamps with triggers
7. Soft delete support where appropriate
8. Migration scripts (up and down)
9. Seed data for development
10. Query examples for common operations
11. Performance notes on index choices
12. Partitioning strategy if applicable

Include an ASCII diagram of table relationships.`,isFree:!0},{id:"cg-004",title:"Authentication System Builder",category:"Code Generation",prompt:`Build a complete authentication system with the following specifications:

**Stack**: [Your tech stack]
**Auth Method**: [JWT/Session/OAuth]
**Requirements**: [MFA, social login, etc.]

Include:
1. User registration with email verification
2. Login with rate limiting and brute force protection
3. Password hashing (bcrypt/argon2)
4. JWT token generation with refresh token rotation
5. Password reset flow with secure tokens
6. Session management and invalidation
7. Role-based access control (RBAC) middleware
8. OAuth2 social login integration
9. CSRF protection
10. Security headers configuration
11. Audit logging for auth events
12. Account lockout after failed attempts

Provide complete, copy-paste-ready code with security best practices explained in comments.`,isFree:!1},{id:"cg-005",title:"CLI Tool Generator",category:"Code Generation",prompt:`Create a professional CLI tool with the following specification:

**Purpose**: [What the tool does]
**Language**: [Node.js/Python/Go/Rust]
**Commands**: [List main commands]

Requirements:
1. Argument parsing with help text and examples
2. Subcommands with individual help
3. Configuration file support (YAML/TOML)
4. Interactive prompts for missing arguments
5. Progress bars for long operations
6. Colored output with log levels
7. Error handling with user-friendly messages
8. Shell completion scripts (bash/zsh/fish)
9. Version flag and update checker
10. Environment variable support
11. Dry-run mode
12. Verbose/quiet output modes

Include the main entry point, command handlers, utilities, and a README with installation instructions.`,isFree:!1},{id:"cg-006",title:"GraphQL Schema & Resolvers",category:"Code Generation",prompt:`Design and implement a complete GraphQL API:

**Domain**: [Describe your data domain]
**Stack**: [Apollo/Yoga/Pothos/etc.]

Deliver:
1. Type definitions with descriptions
2. Query resolvers with filtering, sorting, pagination (cursor-based)
3. Mutation resolvers with input validation
4. Subscription resolvers for real-time updates
5. Custom scalar types (DateTime, JSON, etc.)
6. Enum types for fixed value sets
7. Interface and union types where appropriate
8. DataLoader implementation for N+1 prevention
9. Authentication directive
10. Error handling with custom error codes
11. Rate limiting per field
12. Query complexity analysis and depth limiting

Include schema.graphql, resolvers, context setup, and example queries.`,isFree:!1},{id:"cg-007",title:"Microservice Template",category:"Code Generation",prompt:`Generate a production-ready microservice template:

**Service**: [Name and responsibility]
**Stack**: [Language and framework]
**Communication**: [REST/gRPC/Message queue]

Include:
1. Project structure following clean architecture
2. Health check and readiness endpoints
3. Graceful shutdown handling
4. Structured logging (JSON format)
5. Metrics endpoint (Prometheus format)
6. Distributed tracing integration (OpenTelemetry)
7. Circuit breaker for external calls
8. Retry logic with exponential backoff
9. Configuration management (env vars + config files)
10. Docker and docker-compose files
11. Kubernetes deployment manifests
12. CI/CD pipeline configuration
13. Integration test setup
14. API versioning strategy`,isFree:!1},{id:"cg-008",title:"WebSocket Real-time System",category:"Code Generation",prompt:`Build a WebSocket-based real-time system:

**Use Case**: [Chat/notifications/live updates/collaboration]
**Scale**: [Expected concurrent connections]
**Stack**: [Node.js/Go/Elixir]

Include:
1. WebSocket server with connection management
2. Room/channel system for grouped messaging
3. Authentication on connection (token-based)
4. Heartbeat/ping-pong for connection health
5. Automatic reconnection on client side
6. Message queuing for offline users
7. Binary and text message support
8. Rate limiting per connection
9. Horizontal scaling with Redis pub/sub
10. Message history and replay
11. Presence system (online/offline/typing)
12. Client SDK with TypeScript types`,isFree:!1},{id:"cg-009",title:"State Machine Implementation",category:"Code Generation",prompt:`Implement a type-safe state machine for the following workflow:

**Domain**: [Order processing/User onboarding/Document approval/etc.]
**States**: [List all possible states]
**Events**: [List all possible transitions]

Requirements:
1. Strictly typed states and events (no invalid transitions)
2. Guard conditions for conditional transitions
3. Side effects (actions) on enter/exit/transition
4. Hierarchical/nested states support
5. History states (shallow and deep)
6. Persistence — serialize/deserialize state
7. Event logging and audit trail
8. Visualization output (Mermaid diagram)
9. Unit tests for all transitions
10. Integration with your framework of choice

Provide the state machine definition, transition handlers, guards, and tests.`,isFree:!1},{id:"cg-010",title:"E2E Test Suite Generator",category:"Code Generation",prompt:`Generate a comprehensive E2E test suite for a web application:

**App**: [Describe the application and key flows]
**Tool**: [Playwright/Cypress/Selenium]
**CI**: [GitHub Actions/GitLab CI/Jenkins]

Include:
1. Page Object Model structure
2. Test fixtures and factories
3. Authentication helper (login once, reuse session)
4. Tests for critical user journeys
5. Visual regression tests
6. API mocking for external services
7. Database seeding and cleanup
8. Parallel test execution configuration
9. Screenshot and video on failure
10. Retry logic for flaky tests
11. Accessibility checks (axe-core)
12. Performance metrics collection
13. CI pipeline integration
14. HTML report generation`,isFree:!1},{id:"cg-011",title:"Docker Multi-stage Build",category:"Code Generation",prompt:`Create an optimized Docker setup for a production application:

**App**: [Type of application]
**Stack**: [Language/framework]
**Infra**: [Where it will be deployed]

Requirements:
1. Multi-stage build for minimal image size
2. Non-root user for security
3. .dockerignore for build efficiency
4. Layer caching optimization
5. Health check instruction
6. Environment variable handling
7. Secret management (BuildKit secrets)
8. docker-compose for local development
9. Volume mounts for hot-reload in dev
10. Production vs development configurations
11. Logging to stdout/stderr
12. Signal handling for graceful shutdown
13. Image scanning recommendations
14. Registry push automation`,isFree:!1},{id:"cg-012",title:"Payment Integration Builder",category:"Code Generation",prompt:`Implement a complete payment processing integration:

**Provider**: [Stripe/PayPal/Square/Crypto]
**Type**: [One-time/Subscription/Metered/Usage-based]
**Stack**: [Your backend stack]

Deliver:
1. Checkout session creation
2. Webhook handler for payment events
3. Subscription lifecycle management
4. Invoice generation and retrieval
5. Refund processing
6. Payment method management (add/remove/default)
7. Proration handling for plan changes
8. Trial period logic
9. Coupon/discount code system
10. Revenue reporting queries
11. Dunning management for failed payments
12. Idempotency key handling
13. PCI compliance notes
14. Testing with test card numbers`,isFree:!1},{id:"cg-013",title:"Search Engine Builder",category:"Code Generation",prompt:`Build a full-text search system for an application:

**Content**: [What will be searched]
**Engine**: [Elasticsearch/Meilisearch/Typesense/PostgreSQL FTS]
**Scale**: [Document count and query volume]

Include:
1. Index configuration with field mappings
2. Analyzer/tokenizer configuration for your language
3. Search query builder with filters, facets, sorting
4. Fuzzy matching and typo tolerance
5. Autocomplete/suggestions endpoint
6. Highlighting of matched terms
7. Synonym support
8. Relevance tuning and boosting
9. Geo-spatial search if applicable
10. Index management (create, update, reindex)
11. Search analytics and popular queries tracking
12. Rate limiting and caching layer`,isFree:!1},{id:"cg-014",title:"Background Job System",category:"Code Generation",prompt:`Create a robust background job processing system:

**Stack**: [BullMQ/Celery/Sidekiq/custom]
**Jobs**: [List job types needed]
**Scale**: [Volume and concurrency needs]

Requirements:
1. Job definition with typed payloads
2. Priority queues (critical/default/low)
3. Scheduled/cron jobs
4. Retry with exponential backoff and max attempts
5. Dead letter queue for permanently failed jobs
6. Job progress tracking and reporting
7. Concurrency control and rate limiting
8. Job dependencies (run B after A completes)
9. Batch processing support
10. Admin dashboard for monitoring
11. Graceful shutdown (finish current job)
12. Job deduplication
13. Metrics and alerting integration`,isFree:!1},{id:"cg-015",title:"File Upload Pipeline",category:"Code Generation",prompt:`Build a complete file upload and processing pipeline:

**Storage**: [S3/GCS/Azure Blob/local]
**Processing**: [Image resize/video transcode/document parse]
**Stack**: [Your backend framework]

Include:
1. Multipart upload handler with streaming
2. File type validation (MIME type + magic bytes)
3. File size limits with early rejection
4. Virus/malware scanning integration
5. Image processing (resize, crop, thumbnails, WebP conversion)
6. Presigned URL generation for direct uploads
7. Upload progress tracking
8. Resumable uploads for large files
9. CDN integration for serving
10. Metadata extraction and storage
11. Cleanup of orphaned files
12. Access control per file`,isFree:!1},{id:"cg-016",title:"API Rate Limiter",category:"Code Generation",prompt:`Implement a production-grade API rate limiting system:

**Algorithm**: [Token bucket/Sliding window/Fixed window]
**Storage**: [Redis/In-memory/Database]
**Stack**: [Your framework]

Requirements:
1. Multiple rate limit tiers (free/pro/enterprise)
2. Per-user and per-IP limiting
3. Per-endpoint granular limits
4. Distributed rate limiting with Redis
5. Burst allowance configuration
6. Rate limit headers (X-RateLimit-*)
7. 429 response with Retry-After header
8. Bypass for internal services
9. Real-time usage dashboard
10. Alerting on abuse patterns
11. Graceful degradation if Redis is unavailable
12. Cost-based limiting (expensive endpoints count more)`,isFree:!1},{id:"cg-017",title:"Email Service Builder",category:"Code Generation",prompt:`Build a complete transactional email service:

**Provider**: [SendGrid/SES/Postmark/Resend]
**Templates**: [List email types needed]
**Stack**: [Your backend]

Include:
1. Email template engine with variables
2. HTML + plain text versions
3. Queue-based sending with retry
4. Bounce and complaint handling
5. Unsubscribe management (one-click)
6. Email verification for new users
7. Attachment support
8. Inline image embedding
9. Send rate management
10. Delivery tracking (opens, clicks)
11. A/B testing support
12. Preview and test mode
13. Batch sending for campaigns`,isFree:!1},{id:"cg-018",title:"Caching Strategy Generator",category:"Code Generation",prompt:`Design and implement a comprehensive caching strategy:

**App Type**: [API/SSR website/SPA/Mobile backend]
**Cache**: [Redis/Memcached/CDN/In-memory]
**Scale**: [Request volume]

Deliver:
1. Cache-aside pattern implementation
2. Write-through vs write-behind decision
3. Cache key naming convention
4. TTL strategy per resource type
5. Cache invalidation on data changes
6. Stampede prevention (mutex/singleflight)
7. Multi-level caching (L1 in-memory + L2 Redis)
8. Cache warming on startup
9. Stale-while-revalidate pattern
10. Cache hit/miss metrics
11. Memory management and eviction policies
12. Graceful degradation when cache is down`,isFree:!1},{id:"cg-019",title:"Notification System Architecture",category:"Code Generation",prompt:`Build a multi-channel notification system:

**Channels**: [Push/Email/SMS/In-app/Slack/Webhook]
**Stack**: [Your backend]
**Volume**: [Notifications per day]

Requirements:
1. Notification template management with variables
2. Channel routing logic (preferences + urgency)
3. User notification preferences (opt-in/opt-out per channel)
4. Batch/digest mode (aggregate into daily summary)
5. Priority levels (critical/high/normal/low)
6. Delivery tracking and status per channel
7. Retry logic per channel
8. Rate limiting to prevent flooding
9. Quiet hours / Do Not Disturb support
10. Read/unread state management
11. In-app notification center API
12. Webhook delivery with signature verification`,isFree:!1},{id:"cg-020",title:"Data Migration Script",category:"Code Generation",prompt:`Create a robust data migration script for moving between systems:

**Source**: [Database/API/File format]
**Destination**: [Database/API/File format]
**Volume**: [Number of records]

Requirements:
1. Extract-Transform-Load pipeline
2. Schema mapping configuration
3. Data validation and cleaning
4. Batch processing with configurable size
5. Progress tracking and ETA
6. Error handling — skip vs halt on error
7. Idempotency (safe to re-run)
8. Dry-run mode
9. Rollback capability
10. Checkpointing for resume after failure
11. Data integrity verification
12. Performance metrics and logging
13. Pre and post migration checks`,isFree:!1},{id:"cg-021",title:"Middleware Chain Builder",category:"Code Generation",prompt:`Build a reusable middleware chain for a web framework:

**Framework**: [Express/Koa/Hono/Fastify]
**Middleware**: [Auth, logging, validation, CORS, etc.]

Deliver:
1. Request logging middleware with timing
2. Error handling middleware with structured errors
3. Authentication middleware (JWT/API key)
4. Authorization middleware (roles/permissions)
5. Request validation middleware (Zod/Joi)
6. CORS configuration middleware
7. Request ID generation and propagation
8. Response compression middleware
9. Security headers middleware (Helmet)
10. Request body size limiting
11. Middleware ordering and composition utilities
12. Per-route middleware application`,isFree:!1},{id:"cg-022",title:"Webhook System Builder",category:"Code Generation",prompt:`Build a complete webhook delivery system (both sending and receiving):

**Direction**: [Outgoing/Incoming/Both]
**Stack**: [Your backend framework]

Requirements:
1. Webhook registration API (CRUD endpoints)
2. Event catalog with payload schemas
3. Signature generation and verification (HMAC-SHA256)
4. Delivery with retry (exponential backoff, max attempts)
5. Delivery status tracking and logs
6. Dead letter handling for permanently failed webhooks
7. Payload versioning
8. IP allowlisting option
9. Rate limiting per webhook
10. Batch delivery mode
11. Test/ping endpoint for verification
12. Admin dashboard for webhook management`,isFree:!1},{id:"cg-023",title:"Feature Flag System",category:"Code Generation",prompt:`Implement a feature flag system for gradual rollouts:

**Stack**: [Your stack]
**Storage**: [Database/Redis/Config file]

Requirements:
1. Boolean, percentage, and user-segment flags
2. Flag CRUD API with validation
3. SDK for server-side flag evaluation
4. React hook for client-side flags
5. Percentage-based rollout (consistent hashing)
6. User targeting (by ID, email, attribute)
7. Environment support (dev/staging/prod)
8. Flag dependencies (enable B only if A is on)
9. Audit log for flag changes
10. A/B test variant support
11. Kill switch for instant disable
12. Analytics integration for flag impact`,isFree:!1},{id:"cg-024",title:"Multi-tenant Architecture",category:"Code Generation",prompt:`Design a multi-tenant architecture for a SaaS application:

**Isolation**: [Shared DB/Schema per tenant/DB per tenant]
**Stack**: [Your framework and database]
**Scale**: [Number of tenants and data per tenant]

Include:
1. Tenant identification (subdomain/header/path)
2. Database query scoping middleware
3. Tenant provisioning automation
4. Data isolation and security
5. Tenant-specific configuration
6. Cross-tenant admin operations
7. Tenant migration (plan upgrades/downgrades)
8. Usage metering per tenant
9. Tenant-level rate limiting
10. Custom domain support
11. Tenant data export
12. Tenant deletion with cleanup`,isFree:!1},{id:"cg-025",title:"Event Sourcing Implementation",category:"Code Generation",prompt:`Implement event sourcing for a domain:

**Domain**: [Describe the business domain]
**Store**: [PostgreSQL/EventStoreDB/DynamoDB]
**Stack**: [Your backend framework]

Deliver:
1. Event store with append-only writes
2. Aggregate root base class
3. Event definitions with versioning
4. Command handlers with validation
5. Event projections for read models
6. Snapshot support for performance
7. Event replay and rebuild capability
8. Optimistic concurrency control
9. Event serialization/deserialization
10. Saga/Process manager for workflows
11. Event schema evolution strategy
12. Integration event publishing`,isFree:!1},{id:"cg-026",title:"API Gateway Configuration",category:"Code Generation",prompt:`Configure a production API gateway:

**Gateway**: [Kong/NGINX/Traefik/AWS API Gateway]
**Services**: [List of backend services]
**Requirements**: [Auth, rate limiting, transformations]

Include:
1. Route definitions for all services
2. Authentication plugin (JWT/OAuth/API Key)
3. Rate limiting configuration per route
4. Request/response transformation
5. Load balancing strategy
6. Circuit breaker settings
7. CORS policy
8. Logging and monitoring
9. SSL/TLS termination
10. IP restrictions
11. Request size limits
12. Custom error responses
13. Health check routing`,isFree:!1},{id:"cg-027",title:"ORM Model Generator",category:"Code Generation",prompt:`Generate complete ORM models with relationships:

**ORM**: [Prisma/Drizzle/TypeORM/SQLAlchemy/Sequelize]
**Tables**: [List entities and fields]
**Relations**: [Describe relationships]

Deliver:
1. Model definitions with all field types
2. Relationships (1:1, 1:N, N:M)
3. Indexes for query performance
4. Validation rules
5. Virtual/computed fields
6. Soft delete implementation
7. Timestamps (created, updated)
8. Migration files
9. Seed data
10. Repository pattern wrapper
11. Query scopes/helpers for common queries
12. Type exports for use in application code`,isFree:!1},{id:"cg-028",title:"Terraform Infrastructure Module",category:"Code Generation",prompt:`Create a Terraform module for cloud infrastructure:

**Cloud**: [AWS/GCP/Azure]
**Resources**: [Describe what you need]
**Environment**: [Dev/Staging/Production]

Include:
1. Main resource definitions
2. Variable definitions with descriptions and validation
3. Output values
4. Data sources for existing resources
5. Remote state configuration
6. Environment-specific tfvars
7. IAM roles and policies (least privilege)
8. Networking (VPC, subnets, security groups)
9. DNS records
10. Monitoring and alarms
11. Backup configuration
12. Tagging strategy
13. Cost estimation notes`,isFree:!1},{id:"cg-029",title:"Automated Testing Factory",category:"Code Generation",prompt:`Generate a comprehensive test suite for a module:

**Code**: [Paste the code to test]
**Framework**: [Jest/Vitest/pytest/Go testing]
**Coverage Target**: 90%+

Generate:
1. Unit tests for every public function
2. Edge cases: null, undefined, empty, boundary values
3. Error path testing
4. Mock setup for dependencies
5. Test fixtures and factories
6. Parameterized tests for multiple inputs
7. Async operation tests
8. Snapshot tests where appropriate
9. Performance benchmarks
10. Integration tests with real dependencies
11. Test coverage configuration
12. CI-friendly test scripts`,isFree:!1},{id:"cg-030",title:"SSR/SSG Page Optimizer",category:"Code Generation",prompt:`Optimize a Next.js/Nuxt page for performance:

**Page**: [Describe the page and its data needs]
**Rendering**: [SSR/SSG/ISR/Streaming]
**Data**: [API calls, database queries]

Deliver:
1. Optimal rendering strategy selection with justification
2. Data fetching with caching headers
3. Component-level code splitting
4. Image optimization with next/image or equivalent
5. Font optimization (display swap, preload)
6. Critical CSS extraction
7. Lazy loading for below-fold content
8. Prefetching for likely navigation targets
9. SEO meta tags and structured data
10. Core Web Vitals optimization
11. Bundle analysis and tree-shaking
12. Edge runtime where beneficial`,isFree:!1},{id:"cw-001",title:"Product Description Writer",category:"Content Writing",prompt:`Write a compelling product description that sells:

**Product**: [Name and what it does]
**Target Audience**: [Who buys this]
**Key Features**: [List 3-5 features]
**Price Point**: [Price range]
**Tone**: [Premium/casual/technical/playful]

Structure:
1. Hook headline that highlights the #1 benefit (not feature)
2. Opening paragraph that addresses the customer's pain point
3. Feature-benefit pairs (feature → what it means for them)
4. Social proof integration points
5. Sensory/emotional language appropriate for the product
6. Technical specs section (if applicable)
7. Clear call-to-action
8. SEO-optimized without being robotic

Write 3 versions: short (50 words), medium (150 words), and long (300 words). Each must stand alone and convert.`,isFree:!0},{id:"cw-002",title:"Email Sequence Architect",category:"Content Writing",prompt:`Design a complete email sequence for:

**Goal**: [Welcome/Onboarding/Sales/Re-engagement/Launch]
**Product/Service**: [What you're promoting]
**Audience**: [Who receives these]
**Sequence Length**: [Number of emails]

For each email provide:
1. Subject line (+ 2 A/B alternatives)
2. Preview text
3. Email body with formatting cues
4. Call-to-action (primary and secondary)
5. Send timing (delay from previous email)
6. Trigger conditions (if behavioral)

Requirements:
- Storytelling arc across the sequence
- Progressive disclosure of value
- Objection handling embedded naturally
- Personalization tokens throughout
- Unsubscribe psychology (reduce opt-outs)
- Mobile-first copy (short paragraphs)
- Each email works standalone if forwarded`,isFree:!0},{id:"cw-003",title:"Blog Post Framework",category:"Content Writing",prompt:`Write a comprehensive, SEO-optimized blog post:

**Topic**: [The subject]
**Primary Keyword**: [Target keyword]
**Word Count**: [Target length]
**Audience**: [Who reads this]
**Goal**: [Educate/Convert/Rank/Build authority]

Deliver:
1. SEO title (under 60 characters) with keyword
2. Meta description (under 155 characters) with CTA
3. URL slug suggestion
4. Outline with H2 and H3 headings
5. Hook opening (story, statistic, or question)
6. Body sections with actionable advice
7. Internal linking suggestions
8. External authority source citations
9. Custom images/diagram descriptions
10. FAQ section for featured snippets
11. Conclusion with clear next step
12. Social media snippets (Twitter, LinkedIn)

Write in a conversational yet authoritative tone. Every section should provide unique value — no filler.`,isFree:!0},{id:"cw-004",title:"Landing Page Copy Generator",category:"Content Writing",prompt:`Write high-converting landing page copy:

**Product/Service**: [What you're selling]
**Target Customer**: [Ideal customer profile]
**Main Objection**: [Why they might not buy]
**Unique Selling Proposition**: [What makes you different]

Write each section:
1. Hero: Headline (benefit-driven, 8 words max) + subheadline + CTA
2. Problem section: Agitate the pain
3. Solution section: Introduce your product as the answer
4. Benefits: 3-5 benefit blocks with icons
5. How it works: 3-step process
6. Social proof: Testimonial framework + numbers
7. Feature comparison: You vs alternatives
8. Pricing: Value framing before price reveal
9. FAQ: Address top 5 objections as questions
10. Final CTA: Urgency + risk reversal (guarantee)

Use the PAS (Problem-Agitate-Solve) framework throughout. Every sentence must earn its place.`,isFree:!1},{id:"cw-005",title:"Technical Documentation Writer",category:"Content Writing",prompt:`Write clear technical documentation for:

**Subject**: [API/Library/Tool/Process]
**Audience**: [Beginner/Intermediate/Expert developers]
**Format**: [Reference/Tutorial/How-to/Explanation]

Include:
1. Overview: What it is and why it matters (2-3 sentences)
2. Prerequisites with exact versions
3. Quick start (working example in under 2 minutes)
4. Core concepts explained with analogies
5. Step-by-step instructions with code examples
6. Configuration reference table
7. Common use cases with full examples
8. Troubleshooting section (problem → solution)
9. FAQ
10. Migration guide (if updating from previous version)
11. API reference with all parameters documented
12. Contributing guidelines

Follow the Divio documentation framework. Use consistent terminology. Test every code example.`,isFree:!1},{id:"cw-006",title:"Newsletter Content Creator",category:"Content Writing",prompt:`Write an engaging newsletter edition:

**Newsletter Name**: [Your newsletter]
**Topic/Theme**: [This edition's focus]
**Audience**: [Subscribers' profile]
**Tone**: [Professional/Casual/Witty/Inspirational]
**Frequency**: [Weekly/Biweekly/Monthly]

Structure:
1. Subject line (curiosity-driven, under 50 chars) + 2 alternatives
2. Opening hook: personal story or surprising fact
3. Main content: 2-3 valuable insights with examples
4. Curated links: 3-5 resources with your commentary
5. Quick tip or actionable takeaway
6. Community spotlight or reader question
7. What's coming next (build anticipation)
8. PS line with secondary CTA

Write for skimmers: bold key phrases, short paragraphs, bullet points. Target 5-minute read time.`,isFree:!1},{id:"cw-007",title:"Case Study Builder",category:"Content Writing",prompt:`Write a compelling case study:

**Client/Project**: [Who or what]
**Challenge**: [The problem they faced]
**Solution**: [What was implemented]
**Results**: [Measurable outcomes]

Structure:
1. Title: "[Result] for [Client] using [Solution]"
2. Executive summary (50 words)
3. Client background and context
4. Challenge: specific pain points with stakes
5. Solution: what was done and why
6. Implementation: timeline and process
7. Results: metrics with before/after comparison
8. Key takeaways and learnings
9. Client testimonial (draft for approval)
10. CTA: how to get similar results

Use specific numbers throughout. Tell it as a story with a clear narrative arc. Make the client the hero, not you.`,isFree:!1},{id:"cw-008",title:"Social Media Post Bundle",category:"Content Writing",prompt:`Create a bundle of social media posts:

**Topic**: [What to post about]
**Platforms**: [Twitter/LinkedIn/Instagram/TikTok]
**Goal**: [Engagement/Traffic/Brand awareness/Lead gen]
**Brand Voice**: [Describe your tone]

For each platform, create 5 posts:
1. Educational/value post
2. Engagement/question post
3. Story/personal post
4. Promotional post (soft sell)
5. Trend/commentary post

Each post includes:
- Platform-optimized copy (character limits respected)
- Hashtag suggestions (platform-specific)
- Best posting time recommendation
- Visual/media description
- First comment strategy (if applicable)
- Hook for stopping the scroll

Adapt tone and format per platform — LinkedIn professional, Twitter punchy, Instagram visual-first.`,isFree:!1},{id:"cw-009",title:"Sales Page Long-form Copy",category:"Content Writing",prompt:`Write a long-form sales page that converts:

**Product**: [What you're selling]
**Price**: [Cost]
**Audience**: [Ideal buyer]
**Awareness Level**: [Unaware/Problem-aware/Solution-aware/Product-aware]

Sections:
1. Pre-headline (call out the audience)
2. Headline (big bold promise)
3. Opening story that mirrors the reader's situation
4. Problem amplification (make them feel the pain)
5. Failed solutions they've tried
6. The breakthrough / your unique mechanism
7. Product reveal with positioning
8. Benefit stack (not features — outcomes)
9. Proof section (testimonials, results, credentials)
10. The offer breakdown with value stacking
11. Bonuses that amplify the core offer
12. Price justification and anchoring
13. Guarantee (risk reversal)
14. Urgency/scarcity (ethical)
15. Final CTA with emotion
16. PS section with key benefit reminder

Use direct response copywriting principles. Write as if speaking to one person.`,isFree:!1},{id:"cw-010",title:"Video Script Writer",category:"Content Writing",prompt:`Write a video script for:

**Platform**: [YouTube/TikTok/Course/Product demo]
**Topic**: [Subject of the video]
**Length**: [Target duration]
**Style**: [Talking head/Screencast/Animated/B-roll heavy]

Deliver:
1. Title and thumbnail text concept
2. Hook (first 3 seconds — must stop the scroll)
3. Intro: What they'll learn and why it matters
4. Content sections with transitions
5. B-roll and visual suggestions in brackets
6. Call-to-action integration (natural, not forced)
7. Engagement prompts ("Comment if you...")
8. Outro with next video tease

Include:
- On-screen text suggestions
- Music mood recommendations
- Pacing notes (speed up/slow down)
- Estimated word count per section
- Retention strategy (pattern interrupts every 30-60 seconds)`,isFree:!1},{id:"cw-011",title:"White Paper Writer",category:"Content Writing",prompt:`Write a professional white paper:

**Topic**: [Industry/technology/methodology focus]
**Audience**: [Decision makers / Technical leaders]
**Purpose**: [Thought leadership / Lead generation]
**Length**: [2000-5000 words]

Structure:
1. Executive Summary (200 words)
2. Introduction: market context and the problem
3. Current landscape analysis with data
4. The proposed approach/solution
5. Methodology and framework
6. Case evidence and data points
7. Implementation roadmap
8. ROI analysis / cost-benefit
9. Risk considerations and mitigation
10. Conclusion and recommendations
11. About the organization
12. References and further reading

Tone: authoritative yet accessible. Use data to support every claim. Include chart/graph descriptions for design team.`,isFree:!1},{id:"cw-012",title:"Press Release Template",category:"Content Writing",prompt:`Write a newsworthy press release:

**Announcement**: [What's being announced]
**Company**: [Organization name]
**Date**: [Release date]
**Newsworthiness**: [Why media should care]

Follow AP style:
1. Headline: action verb, present tense, compelling
2. Subheadline: additional context
3. Dateline: City, State — Date
4. Lead paragraph: who, what, when, where, why (one paragraph)
5. Second paragraph: supporting details and context
6. Quote from executive (make it human, not corporate)
7. Body: background, features, industry context
8. Quote from partner/customer
9. Availability and pricing details
10. Boilerplate "About" section
11. Media contact information
12. ### (end mark)

Keep it under 500 words. Write for journalists — facts first, fluff never.`,isFree:!1},{id:"cw-013",title:"UX Microcopy Writer",category:"Content Writing",prompt:`Write UX microcopy for an application:

**Product**: [App/website type]
**Tone**: [Friendly/Professional/Playful/Minimal]
**Screens**: [List the screens/flows]

Write copy for:
1. Onboarding: welcome, tooltips, setup steps
2. Empty states: first-time use messages with CTAs
3. Error messages: specific, actionable, blame-free
4. Success messages: celebrate without annoying
5. Loading states: contextual waiting messages
6. Form labels and placeholders
7. Validation messages (inline)
8. Confirmation dialogs: clear consequences
9. 404 and error pages
10. Email notifications (subject + preview)
11. Push notification text
12. Tooltip help text

Follow Voice & Tone guidelines. Keep messages under 15 words where possible. Test for clarity by reading each message out of context.`,isFree:!1},{id:"cw-014",title:"Podcast Episode Planner",category:"Content Writing",prompt:`Plan and script a podcast episode:

**Show**: [Podcast name and format]
**Topic**: [Episode subject]
**Guest**: [Guest name and background, or solo]
**Duration**: [Target length]

Deliver:
1. Episode title (SEO-friendly)
2. Episode description (for directories)
3. Intro script with hook
4. Interview questions (if guest) — 10-15 questions in logical flow
5. Talking points for each segment
6. Transition phrases between topics
7. Audience engagement callouts
8. Sponsor read placement and script
9. Outro with CTA
10. Show notes with timestamps
11. Social media clips — identify 3 "clipable" moments
12. Blog post summary for SEO`,isFree:!1},{id:"cw-015",title:"SaaS Onboarding Email Sequence",category:"Content Writing",prompt:`Write a SaaS onboarding email sequence that reduces churn:

**Product**: [Your SaaS product]
**Activation Metric**: [What defines an activated user]
**Trial Length**: [Free trial duration]

Create 7 emails:
1. Welcome (immediate): set expectations, single quick win
2. Day 1: guide to first value moment
3. Day 3: feature highlight that solves a specific pain
4. Day 5: social proof — how others use it
5. Day 7: check-in — personal touch, ask if stuck
6. Day 10: advanced feature introduction
7. Day 13: trial ending — value recap, upgrade CTA

Each email:
- Subject line + 2 variants
- Under 150 words
- Single CTA per email
- Behavioral triggers (send only if they haven't done X)
- Plain text style (no heavy HTML)`,isFree:!1},{id:"cw-016",title:"SEO Content Brief Generator",category:"Content Writing",prompt:`Create a detailed SEO content brief for a writer:

**Target Keyword**: [Primary keyword]
**Content Type**: [Blog/Landing page/Pillar page]
**Competitor URLs**: [2-3 competing pages]

Generate:
1. Primary and secondary keywords with search intent
2. Target word count (based on competitors)
3. Title tag options (under 60 chars)
4. Meta description (under 155 chars)
5. URL slug
6. Mandatory H2 and H3 headings
7. Questions to answer (People Also Ask)
8. Key points each section must cover
9. Internal linking opportunities
10. External sources to reference
11. Image/media requirements
12. Featured snippet optimization
13. E-E-A-T signals to include
14. Content angle differentiation`,isFree:!1},{id:"cw-017",title:"Terms of Service Generator",category:"Content Writing",prompt:`Draft Terms of Service for a digital product:

**Product**: [Product/service description]
**Business Model**: [How you make money]
**Jurisdiction**: [Primary legal jurisdiction]

Sections to include:
1. Acceptance of Terms
2. Description of Service
3. User Accounts and Registration
4. Payment Terms and Refund Policy
5. Acceptable Use Policy
6. Intellectual Property Rights
7. User-Generated Content
8. Privacy (reference to Privacy Policy)
9. Third-Party Services
10. Disclaimers and Limitation of Liability
11. Indemnification
12. Termination
13. Changes to Terms
14. Governing Law and Dispute Resolution
15. Contact Information

Note: This generates a starting draft. Always have a lawyer review before publishing.`,isFree:!1},{id:"cw-018",title:"Product Changelog Writer",category:"Content Writing",prompt:`Write engaging product changelog entries:

**Updates**: [List of features, fixes, improvements]
**Audience**: [Users / Developers / Both]
**Tone**: [Exciting / Professional / Casual]

For each update, write:
1. Category tag: [New] [Improved] [Fixed] [Breaking]
2. One-line summary (what changed)
3. Expanded description (why it matters to users)
4. Before/after comparison if applicable
5. Migration notes for breaking changes
6. Link placeholders to documentation

Format options:
- Individual entry for major features
- Grouped entries for minor fixes
- Version number with release date
- Highlight the most impactful change

Make users excited about updates. Focus on benefits, not implementation details.`,isFree:!1},{id:"cw-019",title:"Comparison Article Writer",category:"Content Writing",prompt:`Write a comprehensive comparison article:

**Products/Tools**: [What to compare, 2-5 options]
**Audience**: [Who is choosing between these]
**Use Case**: [Primary scenario]

Structure:
1. Introduction: why this comparison matters
2. Quick comparison table (features, pricing, ratings)
3. Individual deep-dives for each option
4. Head-to-head feature comparison
5. Pricing analysis with total cost of ownership
6. Pros and cons lists
7. Use case recommendations ("Best for X")
8. Integration and ecosystem considerations
9. Customer support and community
10. Future roadmap considerations
11. Verdict and recommendation
12. FAQ

Be genuinely balanced — don't favor one unless data supports it. Use specific examples and scenarios.`,isFree:!1},{id:"cw-020",title:"Grant Proposal Writer",category:"Content Writing",prompt:`Write a grant proposal:

**Project**: [What you're seeking funding for]
**Funder**: [Grant organization]
**Amount**: [Funding requested]
**Timeline**: [Project duration]

Sections:
1. Executive Summary / Abstract
2. Statement of Need (with data)
3. Project Description and Goals
4. Methodology and Approach
5. Timeline and Milestones
6. Budget with line-item justification
7. Evaluation Plan and Success Metrics
8. Organizational Capacity
9. Sustainability Plan (after grant period)
10. Letters of Support descriptions
11. Appendix items list

Align every section with the funder's stated priorities. Use active voice and specific, measurable outcomes.`,isFree:!1},{id:"cw-021",title:"App Store Listing Optimizer",category:"Content Writing",prompt:`Write an optimized app store listing:

**App**: [App name and function]
**Platform**: [iOS App Store / Google Play / Both]
**Category**: [App category]
**Competitors**: [Top 3 competing apps]

Deliver:
1. App name (30 chars max for iOS)
2. Subtitle (30 chars for iOS) / Short description (80 chars for Play)
3. Keywords field (iOS — 100 chars, comma-separated)
4. Full description (4000 chars) with keyword optimization
5. What's New section for latest update
6. Screenshot text overlays (5-8 screens)
7. App preview video script (30 seconds)
8. Promotional text (170 chars iOS)

ASO best practices: front-load keywords, use social proof, highlight unique value, clear benefit-driven language.`,isFree:!1},{id:"cw-022",title:"Course Curriculum Designer",category:"Content Writing",prompt:`Design a complete online course curriculum:

**Topic**: [Course subject]
**Level**: [Beginner/Intermediate/Advanced]
**Duration**: [Total hours/weeks]
**Format**: [Video/Text/Interactive/Mixed]

Deliver:
1. Course title and tagline
2. Course description (for sales page)
3. Learning outcomes (5-8 specific skills)
4. Prerequisites
5. Module breakdown (5-10 modules)
6. Lesson titles and descriptions per module
7. Hands-on exercises/projects per module
8. Assessment strategy (quizzes, assignments)
9. Resource list (tools, readings, templates)
10. Capstone project description
11. Estimated time per lesson
12. Certification criteria

Follow Bloom's taxonomy: remember → understand → apply → analyze → evaluate → create.`,isFree:!1},{id:"cw-023",title:"Investor Update Email",category:"Content Writing",prompt:`Write a monthly investor update email:

**Company**: [Company name and stage]
**Period**: [Month/Quarter]
**Key Metrics**: [ARR, MRR, users, churn, runway]

Structure:
1. TL;DR (3 bullet points: top win, key metric, biggest challenge)
2. Metrics dashboard (table format)
3. Highlights and wins
4. Challenges and what you're doing about them
5. Product updates
6. Team updates
7. Financial overview
8. Asks from investors (intros, advice, etc.)
9. What's next

Keep it honest — investors respect transparency over spin. Use specific numbers everywhere. Under 500 words. Consistent format each month.`,isFree:!1},{id:"cw-024",title:"API Documentation Writer",category:"Content Writing",prompt:`Write comprehensive API documentation:

**API**: [API name and purpose]
**Auth**: [Authentication method]
**Base URL**: [API base URL]
**Endpoints**: [List of endpoints]

For each endpoint, document:
1. HTTP method and path
2. Description (what it does and when to use it)
3. Authentication requirements
4. Request headers
5. Path parameters
6. Query parameters with types and defaults
7. Request body schema with examples
8. Response schema with examples
9. Error responses (all possible error codes)
10. Rate limits
11. Code examples (cURL, JavaScript, Python)
12. Pagination details (if list endpoint)

Include: Getting Started guide, Authentication guide, Webhooks guide, SDKs, and Changelog.`,isFree:!1},{id:"cw-025",title:"Testimonial Request Email",category:"Content Writing",prompt:`Write emails to request customer testimonials:

**Product**: [Your product/service]
**Relationship**: [How long they've been a customer]
**Goal**: [Written/Video/Case study testimonial]

Create 3 email templates:
1. Initial request (warm, personal, specific ask)
2. Follow-up if no response
3. Thank you with next steps

Also provide:
- Testimonial prompt questions (5 questions that guide great responses)
- Permission release template
- Video testimonial script guide
- LinkedIn recommendation request variant
- G2/Capterra review request variant
- Incentive options that feel genuine, not bribey

Keep requests easy to say yes to. Include a "reply with just a number" quick response option.`,isFree:!1},{id:"cw-026",title:"Product Launch Announcement",category:"Content Writing",prompt:`Write a multi-channel product launch announcement:

**Product**: [What's launching]
**Date**: [Launch date]
**Audience**: [Target audience segments]
**Channels**: [Email/Social/Blog/PR]

Deliver for each channel:
1. Email: launch announcement to existing users
2. Email: launch announcement to prospects
3. Blog post: detailed feature walkthrough
4. Twitter/X thread: 7-10 tweets telling the story
5. LinkedIn post: professional announcement
6. Product Hunt: tagline, description, first comment
7. Hacker News: Show HN title and comment
8. Press pitch: journalist email
9. Internal: team announcement
10. Partner: co-marketing email

Include a launch day timeline with posting schedule.`,isFree:!1},{id:"cw-027",title:"Privacy Policy Generator",category:"Content Writing",prompt:`Draft a comprehensive Privacy Policy:

**Product**: [Product/service name and type]
**Data Collected**: [List all data you collect]
**Jurisdictions**: [GDPR/CCPA/Both/Other]
**Third Parties**: [Analytics, payment, email tools used]

Sections:
1. Information We Collect (personal, usage, cookies)
2. How We Use Your Information
3. Legal Basis for Processing (GDPR)
4. Information Sharing and Disclosure
5. Data Retention
6. Your Rights and Choices
7. Cookie Policy
8. Data Security Measures
9. International Data Transfers
10. Children's Privacy
11. Changes to This Policy
12. Contact Information and DPO

Write in plain language. Be specific about what you actually do — vague policies erode trust.`,isFree:!1},{id:"cw-028",title:"Community Guidelines Writer",category:"Content Writing",prompt:`Write community guidelines for an online community:

**Platform**: [Forum/Discord/Slack/Social/App]
**Community Focus**: [Topic/industry]
**Size**: [Current/expected member count]
**Moderation**: [Volunteer/Staff/AI-assisted]

Include:
1. Welcome and community purpose
2. Our values (3-5 core principles)
3. Expected behavior (do's)
4. Prohibited behavior (don'ts) with specific examples
5. Content guidelines (spam, self-promotion, NSFW)
6. Reporting process
7. Moderation actions and appeals
8. Escalation tiers (warning → mute → ban)
9. Privacy and doxxing policy
10. Commercial activity rules
11. Minor safety policies
12. Enforcement philosophy

Write in a warm but firm tone. Use examples for ambiguous rules. Keep it scannable — nobody reads a 10-page policy.`,isFree:!1},{id:"cw-029",title:"Webinar Script Creator",category:"Content Writing",prompt:`Write a complete webinar script:

**Topic**: [Webinar subject]
**Duration**: [30/45/60 minutes]
**Goal**: [Educate/Sell/Generate leads]
**Presenter**: [Solo/Panel/Interview]

Script sections:
1. Pre-show slides and waiting room content
2. Opening: hook + credibility + agenda (2 minutes)
3. Content Section 1: Core teaching (15 minutes)
4. Engagement break: poll or Q&A (3 minutes)
5. Content Section 2: Deep dive (15 minutes)
6. Case study or demo (5 minutes)
7. Transition to offer (if selling)
8. Q&A handling framework
9. Close and CTA
10. Post-webinar follow-up email sequence (3 emails)

Include slide-by-slide notes, engagement prompts, and objection-handling responses for Q&A.`,isFree:!1},{id:"cw-030",title:"Annual Report Writer",category:"Content Writing",prompt:`Write an annual report for stakeholders:

**Organization**: [Company/nonprofit name]
**Year**: [Reporting period]
**Audience**: [Investors/Donors/Public/Board]
**Highlights**: [Key achievements]

Sections:
1. Letter from leadership
2. Year at a Glance (infographic descriptions)
3. Mission and Vision recap
4. Key achievements and milestones
5. Financial summary and analysis
6. Product/Service highlights
7. Team growth and culture
8. Customer/Beneficiary impact stories
9. Sustainability and social responsibility
10. Challenges and lessons learned
11. Strategic outlook for next year
12. Acknowledgments

Balance celebration with honesty. Use specific numbers. Tell stories that illustrate impact. Design team needs chart and graph descriptions.`,isFree:!1},{id:"da-001",title:"CSV Data Explorer",category:"Data Analysis",prompt:`Analyze this CSV data comprehensively:

[Paste your CSV data or describe the dataset]

Perform the following analysis:
1. **Data Overview**: row count, column types, missing values percentage
2. **Statistical Summary**: mean, median, mode, std dev, quartiles for numeric columns
3. **Distribution Analysis**: identify skewness, outliers (IQR method), normal distribution test
4. **Correlation Matrix**: relationships between numeric variables
5. **Categorical Analysis**: value counts, unique values, frequency distributions
6. **Data Quality**: duplicates, inconsistencies, formatting issues
7. **Time Series**: trends if date columns exist
8. **Key Insights**: top 5 actionable findings
9. **Visualization Recommendations**: which charts would best show these patterns
10. **Next Steps**: what additional data would strengthen the analysis

Present findings in a structured report with section headers. Use tables for numerical results.`,isFree:!0},{id:"da-002",title:"Dashboard Metric Designer",category:"Data Analysis",prompt:`Design a comprehensive analytics dashboard:

**Business**: [Type of business]
**Audience**: [Who will use this dashboard]
**Data Sources**: [Available data]
**Tool**: [Metabase/Grafana/Tableau/Looker/Custom]

Define:
1. Dashboard purpose and key questions it answers
2. KPI tiles (5-8 top-level metrics with targets)
3. Primary charts with specifications:
   - Chart type and why
   - X/Y axes and dimensions
   - Filters and drill-downs
   - Color coding logic
4. Secondary charts for context
5. Date range selector and comparison periods
6. Alert thresholds for each KPI
7. Layout wireframe (grid positions)
8. Data refresh frequency
9. SQL queries or data transformations needed
10. Access control (who sees what)

Prioritize actionable metrics over vanity metrics. Every chart should prompt a decision or action.`,isFree:!0},{id:"da-003",title:"SQL Query Optimizer",category:"Data Analysis",prompt:`Optimize this SQL query for performance:

[Paste your SQL query]

**Database**: [PostgreSQL/MySQL/SQLite/BigQuery]
**Table sizes**: [Approximate row counts]
**Current execution time**: [How long it takes]

Analyze and provide:
1. Explain the current execution plan
2. Identify bottlenecks (full table scans, missing indexes, etc.)
3. Rewrite the query for optimal performance
4. Suggest indexes to create (with CREATE INDEX statements)
5. Consider query plan changes with the new indexes
6. Evaluate JOIN order optimization
7. Check for N+1 issues if in application context
8. Suggest materialized views if beneficial
9. Partition strategy if table is large
10. Caching strategy for frequent queries
11. Before/after performance comparison estimate
12. Database-specific optimizations`,isFree:!1},{id:"da-004",title:"A/B Test Analyzer",category:"Data Analysis",prompt:`Analyze the results of an A/B test:

**Test**: [What was tested]
**Metric**: [Primary metric]
**Control**: [Sample size and conversion rate]
**Variant**: [Sample size and conversion rate]
**Duration**: [How long the test ran]

Perform:
1. Statistical significance test (chi-squared or z-test)
2. P-value calculation and interpretation
3. Confidence interval for the difference
4. Effect size (Cohen's d)
5. Power analysis — was the sample size sufficient?
6. Bayesian analysis alternative (probability B > A)
7. Segmentation analysis (by device, region, user type)
8. Novelty effect check
9. Sample ratio mismatch check
10. Revenue impact projection
11. Recommendation: ship, iterate, or kill
12. Follow-up test suggestions

Present results for both technical and non-technical stakeholders.`,isFree:!1},{id:"da-005",title:"Funnel Analysis Framework",category:"Data Analysis",prompt:`Perform a conversion funnel analysis:

**Funnel Steps**: [List each step]
**Data**: [Users at each step or paste data]
**Time Period**: [Analysis window]
**Goal**: [Final conversion event]

Analyze:
1. Step-by-step conversion rates
2. Overall funnel conversion rate
3. Biggest drop-off point identification
4. Time between steps (if data available)
5. Segmentation by cohort (date, source, device)
6. Comparison to industry benchmarks
7. Friction point hypothesis for each drop-off
8. Recommended optimizations per step
9. Revenue impact of 1% improvement at each step
10. Prioritized action plan (effort vs impact matrix)

Visualize as: funnel chart, bar chart of drop-offs, and trend over time.`,isFree:!1},{id:"da-006",title:"Cohort Retention Analysis",category:"Data Analysis",prompt:`Perform a cohort retention analysis:

**Product**: [Your product]
**Cohort Definition**: [Weekly/Monthly signups]
**Retention Event**: [What counts as "retained"]
**Data**: [Paste cohort data or describe]

Deliver:
1. Cohort retention table (triangle matrix)
2. Retention curves by cohort
3. Week 1, Week 4, Week 12 retention rates
4. Cohort size trends
5. Best and worst performing cohorts — what's different?
6. Retention by acquisition channel
7. Feature adoption correlation with retention
8. Churn prediction indicators
9. Resurrection rate (users who churned and came back)
10. LTV estimation per cohort
11. Recommendations to improve retention
12. Benchmarking against category averages`,isFree:!1},{id:"da-007",title:"Customer Segmentation Model",category:"Data Analysis",prompt:`Create customer segments from this data:

**Data Available**: [Demographics, behavior, transactions, etc.]
**Business**: [Type of business]
**Goal**: [Personalization/Marketing/Pricing/Product]

Approach:
1. RFM Analysis (Recency, Frequency, Monetary)
2. Behavioral clustering methodology
3. Define 4-6 distinct segments with names
4. Segment profiles: demographics, behavior patterns, value
5. Size of each segment (% of total)
6. Revenue contribution per segment
7. Segment-specific recommendations
8. Migration paths between segments
9. Predictive indicators for segment membership
10. Marketing strategy per segment
11. Communication channel preferences per segment
12. Risk assessment (which segments might churn)

Name segments memorably: "Power Users" not "Cluster 3." Each segment should suggest clear actions.`,isFree:!1},{id:"da-008",title:"Revenue Analytics Report",category:"Data Analysis",prompt:`Build a comprehensive revenue analytics report:

**Business Model**: [SaaS/E-commerce/Marketplace/Services]
**Data**: [Revenue data available]
**Period**: [Time period for analysis]

Metrics to calculate:
1. MRR/ARR and growth rate
2. Revenue by product/plan/tier
3. New vs expansion vs churned revenue
4. Net Revenue Retention (NRR)
5. Average Revenue Per User (ARPU) trends
6. Revenue concentration (top 10% of customers = ?% revenue)
7. Seasonal patterns and trends
8. Cohort revenue analysis
9. Revenue forecasting (3-6 month projection)
10. Unit economics (CAC, LTV, LTV:CAC ratio)
11. Revenue by channel/geography
12. Scenario analysis: best/base/worst case

Include executive summary, detailed findings, and action recommendations.`,isFree:!1},{id:"da-009",title:"Data Cleaning Pipeline",category:"Data Analysis",prompt:`Design a data cleaning pipeline for this dataset:

**Data**: [Describe the dataset or paste sample]
**Issues**: [Known quality problems]
**Destination**: [Where clean data goes]

Steps to implement:
1. Schema validation (expected columns, types)
2. Missing value strategy per column (drop/fill/flag)
3. Duplicate detection and handling
4. Outlier detection and treatment
5. Data type standardization
6. String normalization (case, whitespace, encoding)
7. Date format standardization
8. Address/phone/email validation
9. Referential integrity checks
10. Business rule validation
11. Transformation logging (audit trail)
12. Quality score per record

Provide code (Python/SQL) for each step with before/after examples.`,isFree:!1},{id:"da-010",title:"Predictive Model Builder",category:"Data Analysis",prompt:`Build a predictive model for:

**Prediction Target**: [What to predict]
**Available Features**: [Input variables]
**Data Size**: [Rows and columns]
**Use Case**: [How predictions will be used]

Methodology:
1. Problem framing (classification vs regression)
2. Feature engineering suggestions
3. Data splitting strategy (train/val/test)
4. Model selection with justification
5. Hyperparameter tuning approach
6. Cross-validation strategy
7. Feature importance analysis
8. Model evaluation metrics
9. Confusion matrix analysis (if classification)
10. Model interpretability (SHAP/LIME)
11. Deployment considerations
12. Monitoring and retraining strategy

Provide Python code with scikit-learn/XGBoost/LightGBM. Include model card documentation.`,isFree:!1},{id:"da-011",title:"Survey Data Analyzer",category:"Data Analysis",prompt:`Analyze survey results:

**Survey Topic**: [What the survey measured]
**Sample Size**: [Number of respondents]
**Data**: [Paste results or describe structure]
**Key Questions**: [What you want to learn]

Analysis:
1. Response rate and completion analysis
2. Demographic breakdown of respondents
3. Per-question summary (frequencies, averages)
4. Cross-tabulation of key variables
5. Statistical tests for group differences
6. Open-ended response theme analysis
7. Net Promoter Score calculation (if applicable)
8. Satisfaction index construction
9. Correlation between responses
10. Key driver analysis (what predicts satisfaction)
11. Comparison to previous surveys (if available)
12. Actionable recommendations with priority

Present findings visually. Use significance levels for claims. Acknowledge limitations (bias, sample).`,isFree:!1},{id:"da-012",title:"Market Size Calculator",category:"Data Analysis",prompt:`Calculate market size (TAM/SAM/SOM):

**Product/Service**: [What you're selling]
**Industry**: [Target industry]
**Geography**: [Target markets]
**Data Points**: [Any known data]

Methodology:
1. Top-down TAM: industry revenue \xd7 relevant percentage
2. Bottom-up TAM: target customers \xd7 annual spend
3. SAM: TAM filtered by your serviceable segments
4. SOM: realistic market capture in 1-3 years
5. Growth rate projections (CAGR)
6. Market drivers and tailwinds
7. Market headwinds and threats
8. Competitive landscape mapping
9. Pricing analysis and willingness to pay
10. Revenue model scenarios
11. Data sources and assumptions documented
12. Sensitivity analysis on key assumptions

Present as investor-ready analysis with clear methodology.`,isFree:!1},{id:"da-013",title:"Time Series Forecaster",category:"Data Analysis",prompt:`Forecast a time series:

**Metric**: [What to forecast]
**Historical Data**: [Paste or describe data]
**Forecast Horizon**: [How far ahead]
**Granularity**: [Daily/Weekly/Monthly]

Analysis:
1. Trend identification (upward/downward/flat)
2. Seasonality detection (weekly, monthly, yearly)
3. Stationarity test (ADF test)
4. Decomposition (trend + seasonal + residual)
5. Model selection (ARIMA, Prophet, ETS, etc.)
6. Hyperparameter optimization
7. Cross-validation with time-aware splits
8. Point forecast with confidence intervals
9. Anomaly detection in historical data
10. Scenario analysis (optimistic/pessimistic)
11. Accuracy metrics (MAPE, RMSE, MAE)
12. Automated retraining recommendations

Provide Python code and visual forecast plot description.`,isFree:!1},{id:"da-014",title:"Website Analytics Auditor",category:"Data Analysis",prompt:`Audit website analytics for actionable insights:

**Site**: [Website URL/type]
**Data Source**: [GA4/Plausible/Mixpanel/etc.]
**Period**: [Analysis time frame]
**Goal**: [Increase traffic/conversions/engagement]

Analyze:
1. Traffic overview: sessions, users, page views trends
2. Acquisition channels: ranking and trends
3. Top pages by traffic and by conversion
4. Bounce rate analysis by page type
5. User flow and common paths
6. Conversion funnel performance
7. Device and browser breakdown
8. Geographic performance
9. Page load speed correlation with bounce rate
10. Content gap analysis
11. SEO performance (organic traffic trends)
12. Recommendations ranked by expected impact

Framework: find the biggest leaks, prioritize by impact \xd7 effort.`,isFree:!1},{id:"da-015",title:"Financial Ratio Calculator",category:"Data Analysis",prompt:`Calculate and interpret financial ratios:

**Company**: [Company name or financial data]
**Data**: [Income statement, balance sheet, cash flow]
**Period**: [Fiscal year or quarters]
**Industry**: [For benchmarking]

Calculate:
1. Liquidity: Current Ratio, Quick Ratio, Cash Ratio
2. Profitability: Gross Margin, Operating Margin, Net Margin, ROE, ROA
3. Efficiency: Asset Turnover, Inventory Turnover, DSO, DPO
4. Leverage: Debt-to-Equity, Interest Coverage, Debt-to-Assets
5. Growth: Revenue Growth, Earnings Growth, Book Value Growth
6. Valuation: P/E, P/S, EV/EBITDA, PEG
7. Cash Flow: FCF Yield, Operating Cash Flow Ratio
8. SaaS Metrics (if applicable): Rule of 40, Magic Number
9. Trend analysis over multiple periods
10. Peer comparison
11. DuPont analysis decomposition
12. Overall financial health assessment`,isFree:!1},{id:"da-016",title:"Churn Prediction Framework",category:"Data Analysis",prompt:`Build a churn prediction framework:

**Product**: [Your product/service]
**Available Data**: [User behavior, transactions, support tickets, etc.]
**Current Churn Rate**: [If known]
**Definition**: [What counts as churned]

Framework:
1. Churn definition and measurement methodology
2. Feature engineering from behavioral data
3. Leading indicators of churn (early warning signals)
4. Risk scoring model design
5. Segmentation of at-risk users
6. Intervention strategies per risk level
7. Churn reason categorization
8. Win-back campaign design
9. Revenue impact quantification
10. Monitoring dashboard metrics
11. A/B test framework for retention interventions
12. Monthly reporting template

Combine quantitative signals with qualitative insights. Focus on actionable prevention.`,isFree:!1},{id:"da-017",title:"Pricing Analysis Framework",category:"Data Analysis",prompt:`Analyze and optimize pricing strategy:

**Product**: [Your product/service]
**Current Pricing**: [Existing prices/tiers]
**Competitors**: [Competitor pricing]
**Goal**: [Maximize revenue/Increase adoption/Reduce churn]

Analysis:
1. Current pricing performance metrics
2. Price sensitivity analysis (Van Westendorp)
3. Willingness-to-pay research framework
4. Competitive pricing landscape
5. Value metric identification (what to charge for)
6. Tier structure optimization
7. Psychological pricing tactics
8. Discount strategy and policies
9. Price increase playbook
10. Free tier / freemium analysis
11. Revenue simulation at different price points
12. Implementation and communication plan`,isFree:!1},{id:"da-018",title:"ETL Pipeline Designer",category:"Data Analysis",prompt:`Design an ETL pipeline:

**Sources**: [List data sources]
**Destination**: [Data warehouse/lake]
**Volume**: [Data volume and velocity]
**Stack**: [Airflow/dbt/Fivetran/custom]

Design:
1. Source system catalog with schemas
2. Extraction strategy per source (CDC/full/incremental)
3. Data staging area design
4. Transformation logic documentation
5. Data quality checks at each stage
6. Schema mapping and type conversions
7. Slowly Changing Dimension handling
8. Error handling and dead letter queues
9. Orchestration DAG design
10. Monitoring and alerting
11. Backfill strategy
12. Performance optimization
13. Data lineage documentation`,isFree:!1},{id:"da-019",title:"Experiment Design Framework",category:"Data Analysis",prompt:`Design a rigorous experiment:

**Hypothesis**: [What you want to test]
**Primary Metric**: [Success measure]
**Context**: [Product/feature/audience]
**Constraints**: [Time, traffic, resources]

Design:
1. Null and alternative hypotheses
2. Primary and guardrail metrics
3. Sample size calculation
4. Expected effect size justification
5. Randomization unit and method
6. Duration estimation
7. Pre-analysis plan
8. Segmentation strategy
9. Exclusion criteria
10. Multiple testing correction (if needed)
11. Analysis plan (frequentist and Bayesian)
12. Decision criteria (ship/iterate/kill)
13. Risk assessment and mitigation

Document everything before starting. Pre-registration prevents p-hacking.`,isFree:!1},{id:"da-020",title:"Visualization Best Practices",category:"Data Analysis",prompt:`Recommend the best visualization for this data:

**Data**: [Describe your dataset]
**Audience**: [Who will view this]
**Message**: [What story to tell]
**Tool**: [D3/Chart.js/Matplotlib/Tableau/etc.]

Provide:
1. Chart type recommendation with justification
2. Alternative chart types and tradeoffs
3. Axis labels and scale choices
4. Color palette selection (accessible)
5. Annotation strategy for key data points
6. Interactive elements to add
7. Small multiples vs single chart decision
8. Data-to-ink ratio optimization
9. Common mistakes to avoid for this chart type
10. Responsive design considerations
11. Accessibility (alt text, color blind safe)
12. Code implementation with the chosen tool

Follow Tufte's principles: above all, show the data.`,isFree:!1},{id:"da-021",title:"Unit Economics Calculator",category:"Data Analysis",prompt:`Calculate unit economics for a business:

**Model**: [SaaS/E-commerce/Marketplace/Services]
**Data**: [Available metrics and financial data]
**Stage**: [Startup/Growth/Mature]

Calculate:
1. Customer Acquisition Cost (CAC) by channel
2. Lifetime Value (LTV) with churn-based model
3. LTV:CAC ratio and payback period
4. Gross margin per customer
5. Contribution margin analysis
6. Blended vs channel-specific CAC
7. Cohort-based LTV refinement
8. Expansion revenue impact on LTV
9. Break-even analysis
10. Sensitivity analysis on key inputs
11. Scaling economics (how metrics change with scale)
12. Investor-ready unit economics dashboard`,isFree:!1},{id:"da-022",title:"Log Analysis Pattern Finder",category:"Data Analysis",prompt:`Analyze application logs to find patterns and issues:

**Log Format**: [Structured/Unstructured, format details]
**Volume**: [Log volume per day]
**Issues**: [Known problems to investigate]
**Stack**: [ELK/Grafana Loki/CloudWatch/etc.]

Analysis:
1. Error rate trends and spikes
2. Most common error types and messages
3. Error clustering by root cause
4. Response time distribution analysis
5. Slow request pattern identification
6. User journey reconstruction from logs
7. Correlation between errors and deployments
8. Resource utilization patterns
9. Security anomaly detection
10. Log quality improvement recommendations
11. Alert rule suggestions
12. Dashboard design for operations team`,isFree:!1},{id:"da-023",title:"Geographic Data Analyzer",category:"Data Analysis",prompt:`Analyze geographic/location data:

**Data**: [Describe the geographic dataset]
**Scope**: [City/Country/Global]
**Goal**: [Site selection/Market analysis/Delivery optimization]

Analysis:
1. Geographic distribution visualization
2. Density mapping and hotspot identification
3. Clustering of geographic points
4. Distance and travel time analysis
5. Trade area / catchment analysis
6. Demographic overlay by region
7. Market penetration by geography
8. Competitive proximity analysis
9. Route optimization suggestions
10. Expansion opportunity identification
11. Seasonal geographic patterns
12. Census data integration recommendations`,isFree:!1},{id:"da-024",title:"Social Media Analytics Report",category:"Data Analysis",prompt:`Create a social media analytics report:

**Platforms**: [Which social platforms]
**Period**: [Reporting period]
**Goals**: [Awareness/Engagement/Conversions]
**Data**: [Metrics available]

Report sections:
1. Executive summary with trend arrows
2. Follower growth by platform
3. Engagement rate trends (likes, comments, shares)
4. Top performing content analysis
5. Best posting times from data
6. Content type performance (video vs image vs text)
7. Hashtag performance
8. Audience demographics insights
9. Competitor benchmarking
10. Sentiment analysis summary
11. Traffic driven to website
12. ROI calculation (if paid social)
13. Recommendations for next period`,isFree:!1},{id:"da-025",title:"Data Quality Scorecard",category:"Data Analysis",prompt:`Create a data quality scorecard for a dataset:

**Dataset**: [Describe the dataset]
**Purpose**: [How this data is used]
**Systems**: [Source systems]
**Stakeholders**: [Who relies on this data]

Score these dimensions (0-100):
1. Completeness: % of fields populated
2. Accuracy: % of values correct (sample validation)
3. Consistency: cross-field and cross-system agreement
4. Timeliness: data freshness vs requirements
5. Uniqueness: duplicate rate
6. Validity: % conforming to business rules

For each dimension:
- Current score with methodology
- Specific issues found with examples
- Root cause analysis
- Remediation recommendations
- Target score and timeline
- Monitoring queries/scripts
- Data steward assignment

Create an overall Data Quality Index and trending dashboard.`,isFree:!1},{id:"mk-001",title:"Ad Copy Generator (Multi-Platform)",category:"Marketing",prompt:`Write high-converting ad copy for multiple platforms:

**Product/Service**: [What you're advertising]
**Target Audience**: [Demographics and psychographics]
**Goal**: [Awareness/Traffic/Conversions/App installs]
**Budget**: [Monthly ad spend]
**USP**: [Unique selling proposition]

Create ads for:
1. **Google Search Ads**: 3 responsive ads with 15 headlines (30 chars each) + 4 descriptions (90 chars each)
2. **Facebook/Instagram**: 3 primary text versions + 5 headline variants + image/video descriptions
3. **LinkedIn**: 3 sponsored content posts + InMail template
4. **YouTube**: Pre-roll script (15s and 30s versions)
5. **Twitter/X**: 3 promoted tweet variants

For each platform:
- A/B test suggestions
- Audience targeting recommendations
- Bid strategy suggestion
- Landing page alignment notes`,isFree:!0},{id:"mk-002",title:"Social Media Content Calendar",category:"Marketing",prompt:`Create a 30-day social media content calendar:

**Brand**: [Brand name and industry]
**Platforms**: [List active platforms]
**Goals**: [Monthly objectives]
**Resources**: [Team size, content budget]
**Voice**: [Brand personality]

For each day provide:
1. Platform(s) to post on
2. Content type (educational/entertaining/promotional/engaging)
3. Post copy (platform-optimized)
4. Visual description or template suggestion
5. Hashtags (platform-specific)
6. Best posting time
7. Engagement strategy (how to respond to comments)

Include:
- Content pillar rotation (educate 40% / engage 30% / promote 20% / humanize 10%)
- Trending topic integration points
- User-generated content prompts
- Monthly themes and weekly sub-themes
- Performance tracking metrics per post type`,isFree:!0},{id:"mk-003",title:"SEO Keyword Strategy Builder",category:"Marketing",prompt:`Build a comprehensive SEO keyword strategy:

**Website**: [Your site and niche]
**Competitors**: [Top 3 competitors]
**Current Rankings**: [If known]
**Goals**: [Traffic/Leads/Sales targets]

Deliver:
1. Seed keyword list (50+ keywords)
2. Keyword clustering by topic
3. Search intent mapping (informational/commercial/transactional)
4. Difficulty vs opportunity matrix
5. Long-tail keyword opportunities
6. Content gap analysis vs competitors
7. Keyword-to-page mapping
8. New content recommendations per keyword cluster
9. Existing content optimization priorities
10. Featured snippet opportunities
11. Local SEO keywords (if applicable)
12. Monthly search volume estimates
13. Priority ranking (Quick Wins vs Long-term Plays)
14. 90-day execution roadmap`,isFree:!1},{id:"mk-004",title:"Email Marketing Campaign Designer",category:"Marketing",prompt:`Design a complete email marketing campaign:

**Campaign Goal**: [Sales/Engagement/Announcement/Nurture]
**Audience Segment**: [Who receives this]
**Product/Offer**: [What you're promoting]
**Timeline**: [Campaign duration]

Create:
1. Campaign strategy and objectives
2. Audience segmentation criteria
3. Email sequence (4-7 emails) with:
   - Send timing and triggers
   - Subject lines (+ 2 A/B variants each)
   - Email body copy
   - CTA buttons (text and placement)
   - Design notes (layout, images)
4. Landing page recommendations
5. Lead magnet (if lead gen campaign)
6. Automation workflow diagram
7. Success metrics and KPIs
8. A/B testing plan
9. List hygiene recommendations
10. Post-campaign analysis framework`,isFree:!1},{id:"mk-005",title:"Influencer Outreach Strategy",category:"Marketing",prompt:`Create an influencer marketing strategy:

**Brand**: [Your brand and product]
**Budget**: [Influencer marketing budget]
**Niche**: [Industry/topic area]
**Goal**: [Awareness/Content/Sales]

Deliver:
1. Influencer tier strategy (nano/micro/macro/mega)
2. Ideal influencer profile (audience, content style, values)
3. Platform prioritization
4. Outreach email templates (3 versions: cold/warm/referral)
5. Compensation models (pay/product/affiliate/hybrid)
6. Campaign brief template
7. Content guidelines and requirements
8. FTC disclosure requirements
9. Contract key terms checklist
10. Performance tracking metrics
11. Relationship management workflow
12. ROI calculation framework
13. Scaling from pilot to ongoing program`,isFree:!1},{id:"mk-006",title:"Product Launch Marketing Plan",category:"Marketing",prompt:`Create a complete product launch marketing plan:

**Product**: [What's launching]
**Market**: [Target market]
**Launch Date**: [When]
**Budget**: [Marketing budget]

Phases:
1. **Pre-launch (8-4 weeks before)**:
   - Teaser campaign strategy
   - Waitlist/early access setup
   - Beta user recruitment
   - Press and media outreach plan
   - Influencer seeding

2. **Launch week**:
   - Day-by-day activity calendar
   - Channel-by-channel content plan
   - PR and media kit
   - Social media blitz plan
   - Email sequence to segments
   - Community engagement plan

3. **Post-launch (4 weeks after)**:
   - Momentum maintenance
   - User feedback collection
   - Iteration communication
   - Case study development
   - Retargeting campaigns

Include KPIs for each phase and contingency plans.`,isFree:!1},{id:"mk-007",title:"Brand Voice & Style Guide",category:"Marketing",prompt:`Create a comprehensive brand voice and style guide:

**Brand**: [Brand name]
**Industry**: [Your industry]
**Target Audience**: [Primary audience]
**Personality**: [3-5 brand personality traits]
**Competitors**: [Who you want to sound different from]

Define:
1. Brand personality (personified — "If our brand were a person...")
2. Voice attributes with spectrum (e.g., Casual ←→ Formal: where you fall)
3. Tone variations by context (support, marketing, social, crisis)
4. Vocabulary: words we use vs words we never use
5. Grammar and style rules (Oxford comma, contractions, etc.)
6. Headline formulas with examples
7. Email communication standards
8. Social media guidelines per platform
9. Error and apology communication
10. Inclusive language guidelines
11. 10 example before/after rewrites
12. Quick reference card for new team members`,isFree:!1},{id:"mk-008",title:"Referral Program Designer",category:"Marketing",prompt:`Design a viral referral program:

**Product**: [Your product/service]
**Current Users**: [Active user count]
**Average Order Value**: [If applicable]
**Goal**: [Growth rate target]

Design:
1. Referral mechanism (link/code/in-app/email)
2. Incentive structure:
   - Referrer reward
   - Referee reward
   - Tiered rewards for multiple referrals
3. Viral loop design (how referred users become referrers)
4. Sharing mechanics (email, social, SMS, copy link)
5. Referral tracking and attribution
6. Fraud prevention measures
7. Terms and conditions
8. Communication strategy (how to promote the program)
9. In-app prompts and timing
10. Email templates (invitation, reminder, reward notification)
11. Leaderboard and gamification elements
12. Success metrics and benchmarks
13. A/B tests to optimize conversion`,isFree:!1},{id:"mk-009",title:"Competitive Analysis Framework",category:"Marketing",prompt:`Conduct a comprehensive competitive analysis:

**Your Product**: [What you offer]
**Competitors**: [3-5 competitors to analyze]
**Market**: [Industry and segment]

Analyze each competitor:
1. Product overview and positioning
2. Pricing and business model
3. Target audience comparison
4. Feature comparison matrix
5. Strengths and weaknesses (SWOT)
6. Marketing channels and strategy
7. Content strategy and SEO performance
8. Social media presence and engagement
9. Customer reviews and sentiment
10. Technology stack (if applicable)
11. Team size and funding (if public)
12. Recent product updates and direction

Synthesize:
- Your competitive advantages
- Gaps in the market to exploit
- Threats to monitor
- Strategic recommendations
- Positioning statement refinement`,isFree:!1},{id:"mk-010",title:"Content Repurposing Machine",category:"Marketing",prompt:`Repurpose one piece of content into 20+ assets:

**Original Content**: [Blog post/Video/Podcast/Webinar]
**Topic**: [Subject matter]
**Platforms**: [Where you're active]

Transform into:
1. Twitter/X thread (10 tweets)
2. LinkedIn article
3. LinkedIn carousel (10 slides — text for each)
4. Instagram carousel with captions
5. Instagram Reel/TikTok script (60 seconds)
6. YouTube Shorts script (30 seconds)
7. Email newsletter edition
8. Podcast episode talking points
9. Infographic content outline
10. Quote graphics (5 key quotes)
11. Blog post (if original was video)
12. Slide deck for presentations
13. Community discussion prompts (3)
14. Medium article adaptation
15. Reddit post version
16. Quora answer template

Include optimal timing for each piece to maximize the content lifecycle.`,isFree:!1},{id:"mk-011",title:"PPC Campaign Architect",category:"Marketing",prompt:`Design a PPC advertising campaign:

**Product/Service**: [What you're advertising]
**Platform**: [Google/Bing/Facebook/LinkedIn]
**Budget**: [Monthly spend]
**Goal**: [CPA target or ROAS target]

Deliver:
1. Campaign structure (campaigns, ad groups, keywords)
2. Keyword research with match types
3. Negative keyword list
4. Ad copy variations (3 per ad group)
5. Landing page recommendations
6. Bid strategy selection with rationale
7. Audience targeting layers
8. Remarketing setup
9. Conversion tracking setup
10. Budget allocation across campaigns
11. Day-parting schedule
12. Geographic targeting
13. Device bid adjustments
14. Monthly optimization checklist
15. Reporting template with KPIs`,isFree:!1},{id:"mk-012",title:"Webinar Funnel Builder",category:"Marketing",prompt:`Build a complete webinar marketing funnel:

**Topic**: [Webinar subject]
**Goal**: [Lead gen/Sales/Education]
**Product**: [What you'll pitch at the end]
**Audience**: [Target attendees]

Create:
1. Registration page copy (headline, bullets, speaker bio)
2. Registration confirmation email
3. Reminder sequence (3 emails: 1 week, 1 day, 1 hour before)
4. Ad copy to drive registrations
5. Social media promotion posts
6. Webinar slide outline
7. Attendee engagement plan (polls, Q&A, offers)
8. Offer presentation strategy
9. Post-webinar follow-up sequence:
   - Attended: thank you + offer + replay
   - No-show: replay + FOMO + offer
10. Replay page with urgency
11. Sales page for those who need more time
12. Metrics to track at each stage`,isFree:!1},{id:"mk-013",title:"Customer Journey Mapper",category:"Marketing",prompt:`Map the complete customer journey:

**Product**: [Your product/service]
**Persona**: [Target customer profile]
**Touchpoints**: [Known interaction points]

Map each stage:
1. **Awareness**: How they discover you
2. **Consideration**: How they evaluate you
3. **Decision**: What triggers the purchase
4. **Onboarding**: First experience after purchase
5. **Adoption**: Regular usage patterns
6. **Advocacy**: How they become promoters

For each stage document:
- Customer actions and behaviors
- Thoughts and emotions (empathy mapping)
- Touchpoints and channels
- Pain points and friction
- Opportunities for improvement
- Metrics to measure
- Content needed
- Team responsible

Identify the "moments of truth" — critical touchpoints that make or break the relationship.`,isFree:!1},{id:"mk-014",title:"Lead Magnet Creator",category:"Marketing",prompt:`Create a high-converting lead magnet:

**Industry**: [Your niche]
**Target Audience**: [Ideal customer profile]
**Goal**: [Email list / Qualify leads / Nurture]
**Format**: [Checklist/Guide/Template/Quiz/Calculator]

Deliver:
1. Lead magnet title (curiosity + benefit driven)
2. Value proposition (why download this)
3. Complete content outline
4. Landing page copy
5. Opt-in form design recommendations
6. Thank you page copy with next step
7. Delivery email
8. Follow-up nurture sequence (5 emails)
9. Social proof elements to add
10. Promotion strategy across channels
11. A/B test variations
12. Lead scoring criteria based on engagement

The lead magnet must deliver genuine value — it's a first impression. Don't gate basic information; gate implementation shortcuts.`,isFree:!1},{id:"mk-015",title:"Partnership Pitch Template",category:"Marketing",prompt:`Write a partnership/collaboration pitch:

**Your Brand**: [Your company and strengths]
**Target Partner**: [Who you're pitching to]
**Partnership Type**: [Co-marketing/Integration/Affiliate/Content]
**Value Exchange**: [What each side gets]

Create:
1. Research notes template (know them before pitching)
2. Cold email pitch (short, specific, mutual benefit)
3. Warm introduction request email
4. Partnership proposal document:
   - Executive summary
   - Market opportunity
   - Partnership structure
   - Responsibilities per party
   - Success metrics
   - Timeline
   - Resource requirements
5. Follow-up sequence (3 touchpoints)
6. One-pager PDF outline
7. Partnership agreement key terms
8. Launch plan if they say yes`,isFree:!1},{id:"mk-016",title:"Brand Positioning Statement",category:"Marketing",prompt:`Craft a brand positioning strategy:

**Brand**: [Your brand name]
**Category**: [Market category]
**Audience**: [Target customer]
**Competitors**: [Key alternatives]

Develop:
1. Positioning statement (For [target], [brand] is the [category] that [key benefit] because [reason to believe])
2. 5 alternative positioning angles
3. Value proposition canvas
4. Brand messaging hierarchy:
   - Brand promise (one sentence)
   - Supporting messages (3 pillars)
   - Proof points per pillar
5. Elevator pitch (30 seconds)
6. One-liner for cocktail parties
7. Tagline options (5 candidates)
8. Brand story narrative
9. "We are / We are not" definition
10. Positioning map vs competitors
11. Messaging by audience segment
12. Objection responses aligned to positioning`,isFree:!1},{id:"mk-017",title:"Product Hunt Launch Strategy",category:"Marketing",prompt:`Plan a successful Product Hunt launch:

**Product**: [What you're launching]
**Category**: [PH category]
**Previous Launches**: [Any prior launches]

Pre-launch (2-4 weeks):
1. Profile and maker profile optimization
2. Hunter selection strategy
3. Community building on PH
4. Teaser posts and "coming soon" page
5. Support network activation plan

Launch day:
6. Optimal posting time and day
7. Tagline (60 chars max)
8. Description copy
9. First comment (maker's story)
10. Gallery images and demo video
11. Social media promotion schedule
12. Email blast to supporters
13. Community outreach (Slack, Discord, Twitter)
14. Response strategy for comments

Post-launch:
15. Follow-up content
16. Lead capture from PH traffic
17. Retrospective template`,isFree:!1},{id:"mk-018",title:"Podcast Guest Pitch Email",category:"Marketing",prompt:`Write pitch emails to get booked as a podcast guest:

**Your Expertise**: [What you can speak about]
**Target Podcasts**: [Type/size of podcasts]
**Goal**: [Brand awareness/Lead gen/Authority building]
**Unique Angle**: [What makes your perspective different]

Create:
1. Podcast research template (10 things to know before pitching)
2. Short pitch email (under 150 words)
3. Medium pitch with topic suggestions
4. Follow-up email (if no response after 1 week)
5. Topic/episode ideas (5 unique angles with titles)
6. One-sheet/media kit content
7. Bio versions (25 words, 50 words, 100 words)
8. Social proof compilation
9. Pre-interview preparation checklist
10. Post-interview thank you email
11. Content repurposing plan from the appearance
12. Tracking spreadsheet columns`,isFree:!1},{id:"mk-019",title:"Retention Marketing Playbook",category:"Marketing",prompt:`Build a customer retention marketing playbook:

**Product**: [Your product/service]
**Current Retention**: [Retention rate]
**Customer Lifecycle**: [Average customer lifespan]
**Churn Reasons**: [Known reasons customers leave]

Strategies:
1. Onboarding optimization (first 7 days)
2. Engagement scoring and triggers
3. Win-back campaigns for at-risk customers
4. Loyalty/rewards program design
5. Community building strategy
6. Customer education content plan
7. Surprise and delight program
8. NPS survey and follow-up workflow
9. Annual review/recap email
10. Feature adoption campaigns
11. Cross-sell and upsell sequences
12. Renewal/reactivation campaigns
13. Customer health score dashboard
14. Escalation playbook for unhappy customers

For each strategy: trigger, message, channel, timing, success metric.`,isFree:!1},{id:"mk-020",title:"Marketing Budget Allocator",category:"Marketing",prompt:`Create an optimized marketing budget allocation:

**Total Budget**: [Monthly/Annual budget]
**Business Stage**: [Startup/Growth/Mature]
**Current Channels**: [Active marketing channels]
**Goals**: [Revenue/Lead/Traffic targets]

Deliver:
1. Channel performance audit (current ROI per channel)
2. Budget allocation recommendation with percentages
3. Channel-by-channel spending plan
4. Expected returns per channel
5. Testing budget allocation (10-20% for experiments)
6. Quarterly reallocation triggers
7. Tool and platform costs
8. Agency vs in-house cost comparison
9. Headcount recommendations
10. Seasonal adjustment plan
11. Emergency fund for opportunities
12. Monthly reporting template
13. Budget vs actual tracking framework`,isFree:!1},{id:"mk-021",title:"Landing Page A/B Test Ideas",category:"Marketing",prompt:`Generate A/B test ideas for a landing page:

**Current Page**: [Describe or provide URL]
**Conversion Rate**: [Current CVR]
**Traffic**: [Monthly visitors]
**Goal**: [Sign up/Purchase/Download]

Generate 15 test ideas across:
1. Headlines (3 variations with rationale)
2. Hero image/video (3 concepts)
3. CTA button (copy, color, placement, size)
4. Social proof (placement, type, format)
5. Form optimization (fields, layout, steps)
6. Pricing display (anchoring, framing)
7. Above-the-fold content
8. Page length (long vs short)
9. Navigation (with vs without)
10. Trust signals (badges, guarantees)
11. Urgency/scarcity elements
12. Personalization opportunities

For each test: hypothesis, expected impact, effort level, statistical requirements.`,isFree:!1},{id:"mk-022",title:"Crisis Communication Plan",category:"Marketing",prompt:`Create a crisis communication plan:

**Organization**: [Your company]
**Industry**: [Your industry]
**Audience**: [Customers, investors, public, employees]

Plan:
1. Crisis types and severity classification
2. Response team and roles (who does what)
3. Communication chain of command
4. Initial response templates by crisis type:
   - Data breach
   - Service outage
   - PR incident
   - Product defect
   - Legal issue
5. Channel-specific response guidelines
6. Social media monitoring and response
7. Media statement templates
8. Internal communication templates
9. Timeline expectations (respond within X hours)
10. Post-crisis analysis framework
11. Stakeholder notification priority list
12. Legal review checkpoints

Speed matters. Empathy matters more. Have templates ready so you can respond in minutes, not days.`,isFree:!1},{id:"mk-023",title:"Affiliate Program Designer",category:"Marketing",prompt:`Design an affiliate marketing program:

**Product**: [What affiliates will promote]
**Price Point**: [Product price]
**Industry**: [Your niche]
**Goal**: [Revenue target from affiliates]

Design:
1. Commission structure (percentage, tiers, bonuses)
2. Cookie duration and attribution model
3. Affiliate types to recruit (bloggers, influencers, partners)
4. Application and vetting process
5. Onboarding sequence for new affiliates
6. Marketing materials to provide:
   - Banner ads (sizes and designs)
   - Email swipe copy
   - Social media posts
   - Landing pages
7. Tracking and reporting dashboard
8. Payment terms and methods
9. Program rules and compliance
10. Recruitment email templates
11. Top affiliate retention strategy
12. Fraud detection and prevention
13. Legal requirements (FTC, disclosures)`,isFree:!1},{id:"mk-024",title:"Video Marketing Strategy",category:"Marketing",prompt:`Create a video marketing strategy:

**Brand**: [Your brand]
**Budget**: [Video production budget]
**Platforms**: [YouTube, TikTok, Instagram, etc.]
**Goal**: [Awareness/Education/Conversion]

Plan:
1. Content pillars (3-5 video series concepts)
2. Video types: educational, behind-the-scenes, testimonial, product, culture
3. Platform-specific format strategy
4. Production workflow (script → shoot → edit → publish)
5. Thumbnail strategy and templates
6. SEO: titles, descriptions, tags per platform
7. Publishing calendar (frequency per platform)
8. Repurposing strategy (long → short clips)
9. Engagement strategy (community, comments)
10. Collaboration opportunities
11. Equipment and tool recommendations
12. Performance metrics and reporting
13. Budget allocation (production vs promotion)
14. First 90-day execution plan`,isFree:!1},{id:"mk-025",title:"Customer Feedback Loop System",category:"Marketing",prompt:`Design a systematic customer feedback collection system:

**Product**: [Your product/service]
**Channels**: [Where customers interact with you]
**Team Size**: [Support/Product team size]

System design:
1. Feedback collection touchpoints mapping
2. In-app feedback widgets (when and where to show)
3. NPS survey strategy (timing, frequency, follow-up)
4. CSAT measurement at key moments
5. Customer interview program (recruitment, questions, cadence)
6. Feature request management (collection, voting, status updates)
7. Bug report workflow
8. Review solicitation strategy (G2, Capterra, App Store)
9. Social media listening setup
10. Feedback categorization taxonomy
11. Prioritization framework (impact \xd7 frequency)
12. Closing the loop (communicating what you built)
13. Quarterly insights report template
14. Feedback-to-roadmap pipeline`,isFree:!1},{id:"bz-001",title:"Business Plan Writer",category:"Business",prompt:`Write a comprehensive business plan:

**Business**: [Company name and concept]
**Industry**: [Market sector]
**Stage**: [Idea/MVP/Revenue/Scaling]
**Funding Goal**: [If seeking investment]

Sections:
1. Executive Summary (write last, summarize everything)
2. Company Description and Mission
3. Market Analysis:
   - Industry overview and trends
   - Target market size (TAM/SAM/SOM)
   - Customer segments and personas
4. Competitive Analysis with positioning
5. Products/Services description
6. Business Model and Revenue Streams
7. Marketing and Sales Strategy
8. Operations Plan
9. Management Team and advisors
10. Financial Projections (3-5 years):
    - Revenue forecast
    - Expense budget
    - Cash flow projection
    - Break-even analysis
11. Funding Requirements and Use of Funds
12. Milestones and Timeline
13. Risk Assessment and Mitigation
14. Appendix (supporting data)

Write for your audience: investors want ROI, banks want stability.`,isFree:!0},{id:"bz-002",title:"Pitch Deck Outline Creator",category:"Business",prompt:`Create a compelling pitch deck outline:

**Company**: [Name and one-line description]
**Stage**: [Pre-seed/Seed/Series A/B/C]
**Ask**: [Funding amount]
**Traction**: [Key metrics]

Slide-by-slide:
1. **Cover**: Company name, tagline, visual identity
2. **Problem**: The pain point (make it visceral)
3. **Solution**: Your product in action
4. **Demo/Product**: Screenshots or demo video notes
5. **Market**: TAM/SAM/SOM with credible sources
6. **Business Model**: How you make money (unit economics)
7. **Traction**: Growth chart (up and to the right)
8. **Competition**: 2x2 matrix (your unique position)
9. **Go-to-Market**: Customer acquisition strategy
10. **Team**: Why this team wins
11. **Financials**: 3-year projection summary
12. **The Ask**: Amount, use of funds, milestones it enables
13. **Vision**: The big picture (if everything works)

For each slide: key message, supporting data, design notes, speaker notes. Follow Guy Kawasaki's 10/20/30 rule.`,isFree:!0},{id:"bz-003",title:"Revenue Model Designer",category:"Business",prompt:`Design and validate a revenue model:

**Product/Service**: [What you sell]
**Target Market**: [Who buys it]
**Current Model**: [If any exists]
**Industry**: [For benchmarking]

Analyze:
1. Revenue model options evaluation:
   - Subscription (monthly/annual)
   - Usage-based/metered
   - Freemium with paid tiers
   - One-time purchase
   - Marketplace/commission
   - Advertising
   - Licensing
   - Hybrid models
2. Recommended model with justification
3. Pricing tiers design (Good/Better/Best)
4. Value metric selection (what determines price)
5. Pricing psychology application
6. Revenue projections (conservative/moderate/aggressive)
7. Sensitivity analysis on key variables
8. Expansion revenue opportunities
9. Pricing page wireframe copy
10. Competitive pricing analysis
11. Price increase strategy
12. Metrics to monitor (ARPU, LTV, churn by tier)`,isFree:!1},{id:"bz-004",title:"OKR Framework Builder",category:"Business",prompt:`Create OKRs for a team or company:

**Context**: [Company stage, team, quarter]
**Company Mission**: [Overall mission]
**Current Priorities**: [What matters most right now]
**Team**: [Who these OKRs are for]

Deliver:
1. 3-5 Objectives (inspirational, qualitative)
2. 3-4 Key Results per Objective (measurable, time-bound)
3. Confidence level for each KR (0.3 = stretch, 0.7 = committed)
4. Initiatives/projects that drive each KR
5. Leading indicators to track weekly
6. Dependencies and risks per Objective
7. Alignment mapping (how team OKRs connect to company OKRs)
8. Grading rubric (how to score at end of quarter)
9. Check-in cadence and format
10. Common OKR anti-patterns to avoid

Rules: Each KR must be measurable with a number. "Improve" is never a KR — quantify it. Start with 0.5 confidence (achievable but challenging).`,isFree:!1},{id:"bz-005",title:"Hiring Job Description Writer",category:"Business",prompt:`Write a job description that attracts top talent:

**Role**: [Job title]
**Level**: [Junior/Mid/Senior/Lead]
**Company**: [Company name and what you do]
**Team**: [Team they'll join]
**Location**: [Remote/Hybrid/Office + location]

Include:
1. Compelling opening (sell the opportunity, not the requirements)
2. What they'll do (specific projects, not generic responsibilities)
3. What success looks like (30/60/90 day expectations)
4. Must-have qualifications (keep it to 5-6 max)
5. Nice-to-have qualifications (clearly separated)
6. Tech stack or tools they'll use
7. What you offer:
   - Compensation range (be transparent)
   - Benefits that matter
   - Growth opportunities
   - Culture highlights
8. Interview process overview (steps and timeline)
9. How to apply (make it easy)
10. Equal opportunity statement

Remove bias: no "rockstar" language, no unnecessary degree requirements, focus on skills and outcomes.`,isFree:!1},{id:"bz-006",title:"Strategic Partnership Proposal",category:"Business",prompt:`Write a strategic partnership proposal:

**Your Company**: [Who you are]
**Partner**: [Target partner company]
**Partnership Type**: [Technology/Distribution/Co-marketing/Revenue share]
**Mutual Benefit**: [Value for both sides]

Proposal structure:
1. Executive Summary
2. About Your Company (credibility and scale)
3. Partnership Opportunity (market context)
4. Proposed Partnership Structure
5. Value Proposition for Partner:
   - Revenue opportunity
   - Customer access
   - Technology benefit
   - Market positioning
6. Implementation Plan and Timeline
7. Resource Requirements (both sides)
8. Revenue/Cost Sharing Model
9. Success Metrics and KPIs
10. Governance and Communication
11. Risk Assessment
12. Term and Exit Clauses
13. Next Steps

Be specific about the financial opportunity. Quantify everything. Make it easy to say yes.`,isFree:!1},{id:"bz-007",title:"Customer Persona Builder",category:"Business",prompt:`Create detailed customer personas:

**Product**: [Your product/service]
**Market**: [Industry and geography]
**Data Available**: [Customer data, interviews, surveys]

For each persona (create 3):
1. Name and photo description
2. Demographics (age, location, income, education)
3. Job title and company type
4. Goals and motivations
5. Pain points and frustrations
6. A typical day in their life
7. How they currently solve the problem
8. Decision-making process and criteria
9. Objections to your product
10. Preferred communication channels
11. Content consumption habits
12. Quotes (what they actually say)
13. Technology comfort level
14. Budget authority
15. Success metrics they care about

Base personas on data, not assumptions. Include "anti-personas" — who is NOT your customer.`,isFree:!1},{id:"bz-008",title:"Board Meeting Deck Preparer",category:"Business",prompt:`Prepare a board meeting deck:

**Company**: [Company name and stage]
**Period**: [Quarter/Month reporting on]
**Board Members**: [Types — investors, independents, executives]
**Key Issues**: [Topics needing board input]

Slides:
1. Agenda and key decisions needed
2. Executive Summary (TL;DR in 5 bullet points)
3. KPI Dashboard (vs targets, vs last quarter)
4. Financial Performance:
   - Revenue and growth
   - Burn rate and runway
   - Cash position
5. Product Update (shipped, in progress, planned)
6. Customer Metrics (acquisition, retention, NPS)
7. Team Update (hires, departures, org changes)
8. Market and Competitive Update
9. Key Wins and Challenges
10. Strategic Discussion Topics (for board input)
11. Risks and Mitigation Plans
12. Next Quarter Priorities
13. Appendix: Detailed Financials

Format: facts first, opinions second. Pre-read materials vs presentation materials.`,isFree:!1},{id:"bz-009",title:"SWOT Analysis Framework",category:"Business",prompt:`Conduct a comprehensive SWOT analysis:

**Company/Product**: [What to analyze]
**Industry**: [Market context]
**Competitors**: [Key competitors]
**Timeframe**: [Short-term vs long-term focus]

Analyze:
**Strengths** (internal, positive):
- Core competencies and resources
- Unique advantages and IP
- Team expertise and culture

**Weaknesses** (internal, negative):
- Resource gaps and limitations
- Process inefficiencies
- Competitive disadvantages

**Opportunities** (external, positive):
- Market trends and shifts
- Technology changes
- Regulatory changes
- Competitor weaknesses

**Threats** (external, negative):
- Market risks
- Competitive threats
- Economic factors
- Technology disruption

For each quadrant: list 5-8 items, prioritize by impact, and create TOWS matrix (strategies that use strengths to capture opportunities, etc.)

End with: 3 strategic priorities derived from the analysis.`,isFree:!1},{id:"bz-010",title:"Process Documentation Template",category:"Business",prompt:`Document a business process:

**Process**: [Process name and purpose]
**Owner**: [Team/role responsible]
**Frequency**: [How often it runs]
**Stakeholders**: [Who is involved]

Document:
1. Process overview and purpose
2. Trigger: what initiates this process
3. Inputs: what's needed to start
4. Step-by-step procedure:
   - Action
   - Who performs it
   - Tools used
   - Decision points (if/then)
   - Time estimate
5. Outputs: what's produced
6. Quality checks at each stage
7. Exception handling (what to do when things go wrong)
8. Escalation procedures
9. Metrics: how to measure process performance
10. Automation opportunities
11. Training requirements
12. Version history and changelog

Include a flowchart description (Mermaid syntax) for visual representation.`,isFree:!1},{id:"bz-011",title:"Pricing Strategy Playbook",category:"Business",prompt:`Develop a pricing strategy:

**Product**: [Your product]
**Current Price**: [If exists]
**Cost Structure**: [Fixed and variable costs]
**Market Position**: [Premium/Mid-market/Value]

Cover:
1. Cost-plus analysis (floor price)
2. Value-based pricing assessment
3. Competitive pricing comparison
4. Willingness-to-pay research methodology
5. Price sensitivity testing approach
6. Tier structure (if applicable)
7. Psychological pricing tactics
8. Discounting policy and guidelines
9. Bundle pricing opportunities
10. Dynamic pricing considerations
11. International pricing (purchasing power parity)
12. Price increase communication plan
13. Free tier / trial strategy
14. Enterprise pricing approach
15. Annual vs monthly pricing gap`,isFree:!1},{id:"bz-012",title:"Investor Email Templates",category:"Business",prompt:`Write investor communication templates:

**Company**: [Your company and stage]
**Round**: [What you're raising]
**Traction**: [Key metrics to highlight]

Create:
1. Cold outreach email (warm intro request)
2. Direct pitch email (concise, with ask)
3. Warm introduction facilitation email (for the connector)
4. Follow-up after meeting (recap + next steps)
5. Monthly investor update template
6. Term sheet received — negotiation response
7. Closing the round — final steps email
8. Rejection response (graceful, leave door open)
9. Investor reference request email
10. Quarterly board update email
11. Bad news communication (proactive)
12. Good news sharing (milestone announcement)

Each email: under 200 words, clear ask, specific numbers, easy to forward.`,isFree:!1},{id:"bz-013",title:"Go-to-Market Strategy",category:"Business",prompt:`Create a go-to-market strategy:

**Product**: [What you're launching]
**Market**: [Target market]
**Stage**: [New market or existing market entry]
**Resources**: [Team, budget, timeline]

Strategy:
1. Market definition and sizing
2. Ideal Customer Profile (ICP)
3. Value proposition per segment
4. Positioning and messaging
5. Pricing and packaging strategy
6. Distribution channels:
   - Direct sales
   - Self-serve/PLG
   - Channel partners
   - Marketplace
7. Marketing plan by channel
8. Sales process and playbook
9. Customer success approach
10. Competitive differentiation
11. Launch timeline and milestones
12. Success metrics and KPIs
13. Budget allocation
14. 90-day sprint plan
15. Risk mitigation`,isFree:!1},{id:"bz-014",title:"Meeting Agenda Optimizer",category:"Business",prompt:`Create an effective meeting agenda:

**Meeting Type**: [Team sync/Decision meeting/Brainstorm/Review]
**Duration**: [Time allotted]
**Participants**: [Who's attending and their roles]
**Goal**: [What must be decided/accomplished]

Deliver:
1. Pre-read materials list with deadlines
2. Timed agenda:
   - Topic
   - Type (inform/discuss/decide)
   - Owner
   - Time allocation
   - Desired outcome
3. Ground rules for this meeting type
4. Decision-making framework (RACI or RAPID)
5. Parking lot system for off-topic items
6. Action items template (who, what, when)
7. Follow-up email template
8. Meeting effectiveness survey (2 questions)
9. Standing items (if recurring meeting)
10. Cancel criteria (when to skip this meeting)

Rule: if there's no agenda, there's no meeting. If there's no decision needed, it's an email.`,isFree:!1},{id:"bz-015",title:"SaaS Metrics Dashboard Designer",category:"Business",prompt:`Design a SaaS metrics tracking system:

**Product**: [Your SaaS product]
**Stage**: [Early/Growth/Scale]
**Audience**: [Founders/Board/Team]

Track and display:
1. **Revenue**: MRR, ARR, MRR growth rate, revenue breakdown
2. **Customers**: total, new, churned, net new, by plan
3. **Unit Economics**: CAC, LTV, LTV:CAC, payback period
4. **Growth**: MoM growth, YoY growth, growth rate trend
5. **Retention**: gross churn, net churn, NRR, logo retention
6. **Engagement**: DAU/MAU ratio, feature adoption, sessions
7. **Sales**: pipeline, conversion rates, ACV, sales cycle
8. **Support**: ticket volume, response time, CSAT, NPS
9. **Financial**: burn rate, runway, gross margin, EBITDA
10. **Product**: velocity, bug rate, uptime

For each metric: definition, formula, data source, target, alert threshold.
Include a weekly report template and monthly board summary.`,isFree:!1},{id:"bz-016",title:"Vendor Evaluation Scorecard",category:"Business",prompt:`Create a vendor evaluation framework:

**Category**: [What type of vendor/tool]
**Options**: [Vendors to evaluate]
**Budget**: [Available budget]
**Requirements**: [Must-have vs nice-to-have]

Scorecard:
1. Evaluation criteria with weights:
   - Functionality (feature completeness)
   - Ease of use and UX
   - Integration capabilities
   - Scalability
   - Security and compliance
   - Pricing and total cost of ownership
   - Support and documentation
   - Vendor stability and reputation
   - Implementation timeline
   - Customization flexibility
2. Scoring rubric (1-5 scale with definitions)
3. Weighted scoring matrix
4. Reference check questions (5 key questions)
5. Proof of concept test plan
6. Contract negotiation checklist
7. Migration/implementation plan
8. Decision presentation template`,isFree:!1},{id:"bz-017",title:"Remote Team Operating Manual",category:"Business",prompt:`Create a remote team operating manual:

**Team**: [Team size and functions]
**Time Zones**: [Distribution across zones]
**Tools**: [Current tool stack]
**Culture**: [Company values and style]

Sections:
1. Communication guidelines:
   - Async-first principles
   - Response time expectations by channel
   - When to use Slack vs email vs video vs doc
2. Meeting policies (max meetings, recording, agendas)
3. Work hours and availability expectations
4. Documentation standards
5. Decision-making process
6. Onboarding checklist for new remotes
7. Tool usage guidelines
8. Security and data handling
9. Performance management approach
10. Social and culture activities
11. Equipment and workspace policy
12. Time off and schedule flexibility
13. Escalation and conflict resolution
14. Feedback and 1:1 cadence`,isFree:!1},{id:"bz-018",title:"Contract Negotiation Playbook",category:"Business",prompt:`Create a contract negotiation playbook:

**Contract Type**: [SaaS/Services/Partnership/Employment/Vendor]
**Your Position**: [Buyer/Seller/Partner]
**Value**: [Contract value]
**Priority**: [What matters most to you]

Playbook:
1. Pre-negotiation preparation:
   - BATNA (Best Alternative) definition
   - Reservation price (walk-away point)
   - Target price/terms
   - Research on counterparty
2. Key terms to negotiate:
   - Pricing and payment terms
   - Term and renewal
   - SLAs and penalties
   - Liability caps
   - Termination clauses
   - IP ownership
   - Non-compete/exclusivity
   - Data ownership and portability
3. Negotiation tactics per term
4. Concession strategy (what to give, what to protect)
5. Red flags and walk-away triggers
6. Email templates for each negotiation stage
7. Final review checklist`,isFree:!1},{id:"bz-019",title:"Product Roadmap Builder",category:"Business",prompt:`Build a product roadmap:

**Product**: [Your product]
**Vision**: [Where the product is headed]
**Timeframe**: [Quarterly/Annual]
**Audience**: [Internal team/Board/Customers]

Create:
1. Product vision statement
2. Strategic themes (3-5 focus areas)
3. Now/Next/Later framework:
   - Now: committed work this quarter
   - Next: planned for next quarter
   - Later: future exploration
4. Feature prioritization using RICE scoring
5. Dependencies and risks per initiative
6. Success metrics per feature
7. Resource requirements
8. Technical debt allocation (% of capacity)
9. Customer request tracking system
10. Release planning methodology
11. Communication plan (internal and external)
12. Quarterly review and adjustment process

No dates on long-term items — use timeframes. The roadmap is a strategy document, not a project plan.`,isFree:!1},{id:"bz-020",title:"Exit Strategy Planner",category:"Business",prompt:`Plan an exit strategy:

**Company**: [Your company]
**Stage**: [Current stage and metrics]
**Exit Type**: [Acquisition/IPO/PE buyout/Merger]
**Timeline**: [Target exit window]

Plan:
1. Exit readiness assessment
2. Valuation methodology and current estimate
3. Potential acquirers / investors list
4. Value drivers to maximize before exit:
   - Revenue growth and quality
   - Profitability improvements
   - Customer concentration reduction
   - IP and competitive moat
   - Team retention
5. Financial housekeeping checklist
6. Legal preparation
7. Due diligence preparation:
   - Data room contents
   - Financial audit readiness
   - Contract review
   - IP audit
8. Advisor selection (banker, lawyer, accountant)
9. Negotiation strategy
10. Employee communication plan
11. Post-exit integration considerations
12. Tax optimization strategies
13. Timeline with milestones`,isFree:!1},{id:"cr-001",title:"Short Story Writer",category:"Creative",prompt:`Write a compelling short story:

**Genre**: [Literary fiction/Sci-fi/Fantasy/Horror/Romance/Mystery/Thriller]
**Theme**: [The underlying message]
**Setting**: [Time and place]
**Length**: [Word count target]
**Audience**: [Age group/readership type]

Requirements:
1. Open with a hook that creates immediate intrigue
2. Establish a vivid, immersive setting within the first paragraph
3. Create a protagonist with a clear desire and obstacle
4. Build tension through conflict (internal, external, or both)
5. Use "show, don't tell" — convey emotion through action and detail
6. Include sensory details (all five senses)
7. Write naturalistic dialogue that reveals character
8. Build to a climax that feels both surprising and inevitable
9. End with resonance — not everything needs resolution
10. Maintain consistent point of view and tense

Style: [Sparse/Lyrical/Conversational/Dark/Humorous]. Read like [comparison author] meets [comparison author].`,isFree:!0},{id:"cr-002",title:"Logo Concept Generator",category:"Creative",prompt:`Generate detailed logo design concepts:

**Brand**: [Brand name]
**Industry**: [Business type]
**Values**: [3-5 brand values]
**Competitors**: [Brands to look different from]
**Usage**: [Where it will appear: web, print, app icon, merch]

Generate 5 distinct concepts:
For each concept provide:
1. Concept name and one-line description
2. Logo type: wordmark, lettermark, icon, combination, emblem
3. Detailed visual description (shapes, symbols, composition)
4. Typography recommendation (font style, weight, spacing)
5. Color palette: primary, secondary, accent (with hex codes)
6. Symbolism explanation (why these visual elements)
7. Versatility notes (how it works at different sizes)
8. Mockup descriptions (business card, website header, app icon)

Style directions: [Minimal/Bold/Vintage/Geometric/Organic/Tech/Luxury]

Include guidance on what NOT to do for this type of brand.`,isFree:!0},{id:"cr-003",title:"Creative Brief Generator",category:"Creative",prompt:`Write a creative brief for a design/marketing project:

**Project**: [What needs to be created]
**Brand**: [Brand name and identity]
**Deadline**: [Timeline]
**Budget**: [Available budget]

Brief sections:
1. Project Overview (what and why)
2. Background (context and history)
3. Objective (specific, measurable goal)
4. Target Audience (who we're speaking to)
5. Key Message (one sentence the audience should take away)
6. Supporting Messages (proof points)
7. Tone and Voice (how it should feel)
8. Mandatory Elements (logos, legal, disclaimers)
9. Deliverables List (exact specifications)
10. Competitive Reference (what others are doing)
11. Inspiration / Mood Board Description
12. Success Metrics (how we'll know it worked)
13. Stakeholders and Approval Process
14. Timeline with milestones

A great brief enables great work. Be specific about what success looks like but flexible about how to get there.`,isFree:!1},{id:"cr-004",title:"Fictional World Builder",category:"Creative",prompt:`Build a detailed fictional world:

**Genre**: [Fantasy/Sci-fi/Alternate History/etc.]
**Scope**: [City/Nation/Planet/Universe]
**Story Purpose**: [What narratives will take place here]
**Tone**: [Gritty/Whimsical/Epic/Intimate]

Develop:
1. Geography and climate (maps description)
2. History: 5 defining events and eras
3. Political systems and power structures
4. Economy and trade (what's valued)
5. Technology or magic system (rules and limitations)
6. Social structure and class system
7. Religion/belief systems
8. Languages and communication
9. Flora and fauna (unique species)
10. Cultural traditions and customs
11. Conflicts: current tensions and historical wounds
12. Daily life for different social classes
13. Art, music, and entertainment
14. Notable locations (5 places with descriptions)
15. Secrets: things not commonly known

The world should feel lived-in. Consistency matters more than complexity. Every element should serve the story.`,isFree:!1},{id:"cr-005",title:"Character Development Workshop",category:"Creative",prompt:`Create a deeply developed character:

**Role**: [Protagonist/Antagonist/Supporting]
**Genre**: [Story genre]
**Story Context**: [Brief plot description]

Build layers:
1. **Surface**: Name, age, appearance, mannerisms, voice
2. **Social**: Job, relationships, reputation, social class
3. **Personal**: Goals, fears, secrets, regrets, values
4. **Psychological**: Attachment style, defense mechanisms, core wound
5. **History**: Formative events, family dynamics, turning points
6. **Arc**: How they change through the story (before → after)

Also provide:
7. Character voice: 3 example dialogue lines
8. Internal monologue sample (200 words)
9. Their relationship to 3 other characters
10. Their biggest contradiction (what makes them human)
11. Their tic or signature behavior
12. What they want vs what they need

A character should be able to surprise you while remaining consistent.`,isFree:!1},{id:"cr-006",title:"Poetry Generator",category:"Creative",prompt:`Write a poem with the following specifications:

**Theme**: [Subject/emotion/concept]
**Form**: [Free verse/Sonnet/Haiku/Limerick/Villanelle/Spoken word]
**Tone**: [Melancholic/Joyful/Dark/Contemplative/Angry/Playful]
**Inspiration**: [Poet or style to draw from]

Requirements:
1. Strong opening image or line that hooks
2. Consistent voice throughout
3. Concrete imagery (no abstractions without grounding)
4. Sound patterns: alliteration, assonance, rhythm
5. Enjambment and line breaks with purpose
6. Emotional arc (not just a mood, but movement)
7. Surprising turn or volta
8. Ending that resonates (echoes or inverts the opening)
9. Title that adds meaning (not just the topic)
10. Every word earns its place (cut ruthlessly)

Write 3 versions: one tight and compressed, one expansive and lyrical, one experimental in form.`,isFree:!1},{id:"cr-007",title:"Brand Story Narrative",category:"Creative",prompt:`Craft a compelling brand origin story:

**Brand**: [Brand name and what you do]
**Founder Story**: [Key details about the founder/founding]
**Problem**: [What problem inspired the brand]
**Values**: [Core brand values]

Write the story using the Hero's Journey:
1. The Ordinary World (life before the brand)
2. The Call (the problem that demanded a solution)
3. The Refusal (doubts and obstacles)
4. The Mentor/Catalyst (what pushed you forward)
5. The Journey (building the product)
6. The Ordeal (biggest challenge faced)
7. The Reward (breakthrough moment)
8. The Return (how the brand now serves others)

Deliver in 3 formats:
- Full narrative (500 words) for About page
- Medium version (150 words) for pitch decks
- One-liner for social bios
- Video script version (60 seconds)

Make it authentic, not fairy tale. Vulnerability builds trust.`,isFree:!1},{id:"cr-008",title:"Screenplay Scene Writer",category:"Creative",prompt:`Write a screenplay scene:

**Genre**: [Drama/Comedy/Thriller/Horror/Sci-fi]
**Setting**: [Location and time]
**Characters**: [Who's in the scene, 2-4 characters]
**Conflict**: [What's at stake in this scene]
**Subtext**: [What's really being discussed beneath the surface]

Requirements:
1. Proper screenplay format (INT./EXT., action lines, dialogue)
2. Action lines: present tense, visual, sparse (what the camera sees)
3. Dialogue: naturalistic, each character has distinct voice
4. Subtext: characters don't say exactly what they mean
5. Physical behavior reveals emotion (not dialogue alone)
6. Scene has its own arc (beginning, turn, end)
7. Enter late, leave early (start in the middle of action)
8. Conflict escalation through the scene
9. Silence and pauses used effectively
10. Environment interacts with characters

Scene length: 3-5 pages. Include parentheticals sparingly. Less is more.`,isFree:!1},{id:"cr-009",title:"Game Design Document",category:"Creative",prompt:`Create a game design document:

**Game Concept**: [Core idea in one sentence]
**Platform**: [Mobile/PC/Console/Web/Tabletop]
**Genre**: [RPG/Puzzle/Strategy/Action/Simulation]
**Target Audience**: [Player demographics]

Document:
1. High Concept (2-3 sentence pitch)
2. Core Gameplay Loop (the main thing players do repeatedly)
3. Player Experience Goals (how it should feel)
4. Game Mechanics:
   - Core mechanics (what you do)
   - Secondary mechanics (variety and depth)
   - Progression system
5. Art Direction and Visual Style
6. Sound Design Direction
7. Level/Stage Design Principles
8. Narrative and World (if applicable)
9. Monetization Strategy
10. Technical Requirements
11. Competitive Analysis (similar games)
12. Development Milestones
13. MVP Feature List vs Full Feature List
14. Player Persona Profiles (3 types)

Focus on what makes this game fun and unique. The core loop must be satisfying in isolation.`,isFree:!1},{id:"cr-010",title:"Song Lyrics Writer",category:"Creative",prompt:`Write song lyrics:

**Genre**: [Pop/Rock/Hip-hop/Country/R&B/Indie/Electronic]
**Theme**: [What the song is about]
**Mood**: [Upbeat/Melancholic/Angry/Romantic/Nostalgic]
**Reference**: [Songs with a similar vibe]

Structure:
1. Verse 1: Set the scene, introduce the narrative
2. Pre-chorus: Build tension, bridge to chorus
3. Chorus: The hook — catchy, memorable, emotional core
4. Verse 2: Deepen the story, new perspective
5. Pre-chorus 2: Slight variation
6. Chorus 2: Same or evolved
7. Bridge: Emotional climax, key change moment, shift
8. Final Chorus: With variation or added power

Requirements:
- Syllable-conscious writing (singable)
- Rhyme scheme that serves the song (not forced)
- Imagery over abstraction
- Hook that sticks after one listen
- Title comes from the chorus
- Conversational where appropriate, poetic where powerful

Provide the complete lyrics with section labels and notes on melody contour.`,isFree:!1},{id:"cr-011",title:"UI/UX Design Direction",category:"Creative",prompt:`Define the UI/UX design direction for a product:

**Product**: [App/website type]
**Target Users**: [User demographics and tech savviness]
**Mood**: [Modern/Minimal/Playful/Premium/Enterprise]
**Competitors**: [Products to differentiate from]

Define:
1. Design Principles (5 guiding rules)
2. Visual Language:
   - Color system (primary, secondary, semantic, neutrals — with hex)
   - Typography scale (headings, body, caption — font families + sizes)
   - Spacing system (4px/8px grid)
   - Border radius strategy
   - Shadow system (elevation levels)
   - Icon style (outlined/filled/duotone)
3. Component Patterns:
   - Buttons (variants, sizes, states)
   - Cards (layout patterns)
   - Forms (input styles, validation)
   - Navigation patterns
   - Modal/dialog approach
4. Motion Design:
   - Transition timing and easing
   - Micro-interaction principles
   - Loading state patterns
5. Dark/Light mode considerations
6. Accessibility requirements (WCAG AA minimum)
7. Responsive breakpoint strategy`,isFree:!1},{id:"cr-012",title:"Mood Board Description Creator",category:"Creative",prompt:`Create a detailed mood board description for a creative project:

**Project**: [What's being designed]
**Brand/Client**: [Who it's for]
**Feeling**: [Emotional target]
**Constraints**: [Any requirements]

Describe a mood board with:
1. Overall Aesthetic (3-word summary)
2. Color Palette:
   - 5 colors with hex codes
   - Proportions (60-30-10 rule)
   - Color relationships and mood
3. Photography Style:
   - Subjects and compositions
   - Lighting (natural, studio, moody, bright)
   - Color grading / filter style
   - 5 specific image descriptions
4. Typography Inspiration:
   - Font personality
   - 3 font pairing suggestions
   - Layout rhythm
5. Texture and Pattern:
   - Material references
   - Organic vs geometric
   - Tactile quality
6. Cultural/Era References
7. "This, Not That" Comparisons (5 pairs)
8. Music that matches the mood (3 songs)
9. Keywords cloud (20 evocative words)
10. Anti-references (what this is NOT)`,isFree:!1},{id:"cr-013",title:"Dialogue Generator",category:"Creative",prompt:`Write a dialogue scene between characters:

**Characters**: [Describe 2-3 characters with their personalities]
**Situation**: [What's happening]
**Conflict**: [What they disagree about or what's at stake]
**Subtext**: [What's really going on beneath the words]
**Setting**: [Where this takes place]

Rules for great dialogue:
1. Each character has a distinct voice (vocabulary, rhythm, patterns)
2. No one says exactly what they mean (subtext)
3. Characters have agendas — they want something from the conversation
4. Interruptions and overlaps feel natural
5. Actions and body language punctuate the words
6. The balance of power shifts during the conversation
7. Some things are left unsaid
8. The conversation changes something (it has stakes)
9. Avoid "maid and butler" dialogue (don't explain what both characters already know)
10. End the scene at the point of maximum tension or change

Write 2-3 pages of dialogue with minimal direction. Let the words carry the weight.`,isFree:!1},{id:"cr-014",title:"Children's Book Concept",category:"Creative",prompt:`Create a children's book concept:

**Age Range**: [Picture book 2-5 / Early reader 5-8 / Middle grade 8-12]
**Theme/Lesson**: [What children will learn or feel]
**Tone**: [Funny/Heartwarming/Adventurous/Soothing]

Develop:
1. Title options (3 candidates)
2. One-sentence concept ("It's [comparison] meets [comparison] for kids")
3. Main character description (relatable, with a clear desire)
4. Supporting characters (friend, mentor, comic relief)
5. Setting (vivid, imaginative)
6. Story arc:
   - Opening: character in their world
   - Problem: what disrupts their world
   - Attempt 1: they try and fail
   - Attempt 2: they try differently and fail
   - Solution: they succeed by learning the lesson
   - Resolution: new normal
7. Page-by-page breakdown (for picture book, 32 pages)
8. Art direction notes per spread
9. Read-aloud quality notes (rhythm, repetition, rhyme if applicable)
10. Back cover copy
11. Series potential (2-3 sequel concepts)`,isFree:!1},{id:"cr-015",title:"Podcast Concept Developer",category:"Creative",prompt:`Develop a complete podcast concept:

**Niche**: [Topic area]
**Format**: [Solo/Interview/Narrative/Panel/Hybrid]
**Target Listener**: [Who would subscribe]
**Unique Angle**: [What makes this different]

Develop:
1. Podcast name (5 options with reasoning)
2. Tagline / subtitle
3. Show description (for Apple Podcasts)
4. Cover art description
5. Episode format and structure (minute by minute)
6. Intro script (30 seconds)
7. Outro script with CTA
8. Music and sound design direction
9. First 10 episode titles and descriptions
10. Guest wishlist (10 ideal guests with why)
11. Content calendar (first quarter)
12. Monetization strategy
13. Launch plan (7 episodes at launch?)
14. Growth strategy
15. Equipment and software recommendations
16. Key differentiators from similar podcasts`,isFree:!1},{id:"cr-016",title:"Naming Generator (Products/Brands)",category:"Creative",prompt:`Generate names for a brand, product, or feature:

**What It Is**: [Description of what's being named]
**Values**: [What the name should convey]
**Audience**: [Who will use/see this name]
**Constraints**: [Length, starting letter, available domains, trademark concerns]
**Avoid**: [Words or styles to stay away from]

Generate 30 name candidates across categories:
1. Descriptive (says what it does): 5 names
2. Evocative (creates a feeling): 5 names
3. Invented (new word): 5 names
4. Metaphorical (from another domain): 5 names
5. Acronym/Abbreviation: 3 names
6. Compound words: 4 names
7. Foreign language origin: 3 names

For each name:
- Pronunciation guide
- Meaning/rationale
- Domain availability check suggestion (.com, .io, .co)
- Potential issues (unintended meanings, similar brands)
- Rating: memorability (1-5), uniqueness (1-5), relevance (1-5)

Top 3 recommendations with full justification.`,isFree:!1},{id:"cr-017",title:"Animation/Motion Storyboard",category:"Creative",prompt:`Create a storyboard for an animated sequence:

**Purpose**: [Explainer/Ad/Title sequence/Social content]
**Duration**: [Target length]
**Style**: [2D/3D/Motion graphics/Stop motion/Mixed]
**Message**: [Core message to communicate]

For each scene/frame (10-20 frames):
1. Frame number and timestamp
2. Visual description (what's on screen)
3. Camera movement (zoom, pan, reveal)
4. Character/element action
5. Text overlays
6. Transition to next frame (cut, dissolve, morph, wipe)
7. Sound effects
8. Voiceover line (if narrated)
9. Music mood at this point
10. Duration of this frame

Also include:
- Overall visual style guide
- Color palette for the animation
- Typography choices for text elements
- Pacing notes (fast/slow/rhythmic)
- Emotional journey map alongside the frames`,isFree:!1},{id:"cr-018",title:"Fantasy Map Description Writer",category:"Creative",prompt:`Describe a fantasy map in rich detail for an artist:

**World Name**: [The name of this world/land]
**Scale**: [Continent/Kingdom/City/Dungeon]
**Story Context**: [What stories take place here]
**Inspiration**: [Real-world or fictional references]

Describe:
1. Overall geography (continents, oceans, proportions)
2. Major landforms:
   - Mountain ranges (names, heights, character)
   - Rivers (sources, paths, significance)
   - Forests (types, dangers, inhabitants)
   - Deserts, tundras, swamps
3. Bodies of water (seas, lakes, notable coastlines)
4. Political boundaries (nations, territories)
5. Major cities and settlements (20+):
   - Name, population, character
   - Strategic location reasoning
   - Notable landmarks
6. Roads and trade routes
7. Dangerous/unexplored regions
8. Points of interest (ruins, magical sites, natural wonders)
9. Climate zones
10. Cartographic style direction (medieval/nautical/modern)
11. Legend and compass rose style
12. Scale and distance references`,isFree:!1},{id:"cr-019",title:"Stand-up Comedy Bit Writer",category:"Creative",prompt:`Write a stand-up comedy bit:

**Topic**: [Subject to find humor in]
**Style**: [Observational/Self-deprecating/Dark/Absurdist/Political/Storytelling]
**Audience**: [Club/Corporate/Online/Late night set]
**Length**: [5-minute bit = ~750 words]

Structure:
1. Opening: premise that gets first laugh within 15 seconds
2. Build: escalate the absurdity or insight
3. Tags: secondary punchlines that follow the main joke
4. Callbacks: reference earlier bits for compounding laughs
5. Act-outs: physical comedy or voices
6. Misdirection: setup leads audience one way, punchline goes another
7. Closer: strongest laugh to end on

Rules:
- Rhythm: setup (short) → punchline (shorter) → tag (shortest)
- Rule of three: two normal, third subverts
- Specificity is funnier than generality
- Truth is the foundation of comedy
- Pause for laughs (mark with [BEAT])
- Tight — cut every unnecessary word

Write 5 jokes on the topic, then connect them into a flowing 5-minute bit.`,isFree:!1},{id:"cr-020",title:"Newsletter Name & Identity Creator",category:"Creative",prompt:`Create a complete newsletter brand identity:

**Topic/Niche**: [What the newsletter covers]
**Tone**: [Voice and personality]
**Audience**: [Who subscribes]
**Frequency**: [How often it ships]
**Platform**: [Substack/Beehiiv/ConvertKit/Ghost]

Develop:
1. Newsletter name (10 candidates with reasoning):
   - Clever/punny options
   - Descriptive options
   - One-word options
   - Two-word combinations
2. Tagline (3 options)
3. Visual identity:
   - Color palette (3 colors with hex)
   - Logo/header concept description
   - Typography recommendations
   - Email template style
4. Voice and tone guide (with examples)
5. About page copy
6. Welcome email copy
7. Social media bio versions (Twitter, LinkedIn)
8. First 5 edition themes
9. Section names and structure
10. Sign-up page copy with value proposition
11. Growth strategy outline
12. Monetization path`,isFree:!1},{id:"ed-001",title:"Explain Like I'm 5",category:"Education",prompt:`Explain this complex topic as if talking to a 5-year-old:

**Topic**: [The complex concept to explain]

Rules:
1. Use words a 5-year-old knows (simple, short, common)
2. Start with something they already understand (analogy from their world)
3. Build understanding in small steps — one idea at a time
4. Use concrete examples, not abstract concepts
5. Relate to things they experience: toys, food, playground, family
6. Ask engaging questions ("You know how...?")
7. Use stories or scenarios ("Imagine you have a lemonade stand...")
8. Avoid jargon completely — if you must use a term, define it simply
9. Keep it under 200 words
10. End with a fun summary or memorable image

Then provide:
- The same explanation for a 10-year-old (more detail, bigger vocabulary)
- The same explanation for a high schooler (introduce proper terminology)
- A one-sentence expert definition

This creates a "zoom lens" of understanding at different depths.`,isFree:!0},{id:"ed-002",title:"Study Guide Creator",category:"Education",prompt:`Create a comprehensive study guide:

**Subject**: [Course or topic]
**Level**: [High school/Undergraduate/Graduate/Professional]
**Exam Type**: [Multiple choice/Essay/Problem solving/Mixed]
**Time Available**: [Study time before exam]

Generate:
1. Topic outline with priority levels (must-know / should-know / nice-to-know)
2. Key concepts with concise definitions
3. Relationships between concepts (concept map description)
4. Formulas or rules to memorize (if applicable)
5. Mnemonics for difficult-to-remember content
6. Common exam questions for each topic
7. Practice problems with solutions (5-10)
8. Common mistakes and misconceptions
9. Study schedule (based on time available)
10. Active recall questions for self-testing
11. Spaced repetition flashcard suggestions (20 cards)
12. Quick reference "cheat sheet" (one page)
13. Essay answer frameworks for potential topics
14. Last-minute review priorities (30-minute version)`,isFree:!0},{id:"cr-003b",title:"Lesson Plan Builder",category:"Education",prompt:`Create a detailed lesson plan:

**Subject**: [What you're teaching]
**Grade/Level**: [Student level]
**Duration**: [Class time]
**Standards**: [Curriculum standards to align with]
**Students**: [Class size and any special needs]

Plan:
1. Learning objectives (SWBAT — Students Will Be Able To)
2. Prior knowledge required
3. Materials and technology needed
4. Lesson structure:
   - Hook/Engagement (5 min): grab attention
   - Direct Instruction (10-15 min): teach the concept
   - Guided Practice (10-15 min): work together
   - Independent Practice (10-15 min): students work alone
   - Assessment/Closure (5 min): check understanding
5. Differentiation strategies:
   - Struggling students: scaffolding options
   - Advanced students: extension activities
   - ELL students: language supports
6. Formative assessment techniques
7. Higher-order thinking questions (Bloom's taxonomy)
8. Homework/follow-up assignment
9. Cross-curricular connections
10. Reflection prompts for teacher`,isFree:!1},{id:"ed-004",title:"Concept Analogy Generator",category:"Education",prompt:`Create powerful analogies to explain a concept:

**Concept**: [The thing to explain]
**Audience**: [Who needs to understand it]
**Context**: [Why they need to understand it]

Generate:
1. Five distinct analogies from different domains:
   - From everyday life
   - From nature/biology
   - From sports/games
   - From cooking/food
   - From business/money

For each analogy:
   a. The analogy in one sentence
   b. Detailed mapping: concept element → analogy element
   c. Where the analogy breaks down (limitations)
   d. Extended version: push the analogy further
   e. Visual/diagram description

2. Best analogy recommendation with justification
3. Anti-analogy: common but misleading analogies to avoid
4. Progressive analogy chain: start simple, each analogy adds complexity

The best analogy maps multiple aspects of the concept, not just one. Test by asking: "Could someone who understands the analogy predict aspects of the concept?"`,isFree:!1},{id:"ed-005",title:"Quiz and Assessment Generator",category:"Education",prompt:`Create a comprehensive assessment:

**Subject**: [Topic being assessed]
**Level**: [Student level]
**Duration**: [Test time]
**Bloom's Levels**: [Remember through Create]

Generate:
1. Multiple Choice (10 questions):
   - 4 options each
   - One clearly best answer
   - Plausible distractors (common misconceptions)
   - Varying difficulty (3 easy, 4 medium, 3 hard)

2. Short Answer (5 questions):
   - Clear, specific questions
   - Model answers with grading rubric
   - Point values

3. Essay Questions (2 options, students choose 1):
   - Open-ended but focused
   - Rubric with criteria and levels (exemplary/proficient/developing/beginning)

4. Problem Solving (3 problems, if applicable):
   - Step-by-step solution
   - Partial credit guidelines

5. Answer key with explanations
6. Grading scale recommendation
7. Test statistics predictions (expected distribution)
8. Accommodation versions for special needs`,isFree:!1},{id:"ed-006",title:"Research Paper Outline",category:"Education",prompt:`Create a detailed research paper outline:

**Topic**: [Research question or thesis]
**Field**: [Academic discipline]
**Length**: [Target page/word count]
**Format**: [APA/MLA/Chicago/IEEE]

Outline:
1. Title (informative, specific, under 15 words)
2. Abstract structure (background, method, results, conclusion)
3. Introduction:
   - Opening hook
   - Background and context
   - Literature review organization
   - Research gap identification
   - Thesis statement / research question
   - Paper overview
4. Literature Review organization (thematic or chronological)
5. Methodology section structure
6. Results/Findings presentation plan
7. Discussion:
   - Interpretation of findings
   - Connection to existing literature
   - Implications (theoretical and practical)
   - Limitations
8. Conclusion and future research directions
9. Reference suggestions (seminal works to cite)
10. Appendix items to include

Include: transition sentences between sections, estimated word count per section, and writing timeline.`,isFree:!1},{id:"ed-007",title:"Flashcard Set Generator",category:"Education",prompt:`Create an optimized flashcard set for spaced repetition:

**Subject**: [What to study]
**Scope**: [Chapter/Unit/Entire course]
**Level**: [Student level]
**Card Count**: [Target number of cards]

For each flashcard:
1. Front: clear, specific question or prompt
2. Back: concise answer with key details
3. Difficulty tag: easy/medium/hard
4. Category/topic tag

Follow these principles:
- One concept per card (atomic)
- Question from multiple angles (recognition AND recall)
- Include "why" cards, not just "what" cards
- Use cloze deletion for definitions
- Image descriptions where visual memory helps
- Mnemonics for difficult items
- Common confusion pairs (similar concepts side by side)
- Application questions (not just memorization)

Organize by topic. Suggest a study schedule using spaced repetition intervals (1, 3, 7, 14, 30 days). Include 5 "interleaving" cards that connect concepts across topics.`,isFree:!1},{id:"ed-008",title:"Debate Preparation Kit",category:"Education",prompt:`Prepare comprehensive debate materials:

**Topic/Resolution**: [The debate question]
**Format**: [Lincoln-Douglas/Parliamentary/Policy/Informal]
**Side**: [For/Against/Both sides]
**Level**: [High school/College/Professional]

Prepare:
1. Resolution analysis and key definitions
2. FOR arguments (5 main points):
   - Claim
   - Warrant (reasoning)
   - Impact (why it matters)
   - Evidence suggestions
3. AGAINST arguments (5 main points):
   - Same structure as above
4. Rebuttals for each opposing argument
5. Cross-examination questions (10 trap questions per side)
6. Common logical fallacies to identify and call out
7. Opening statement draft (2 minutes)
8. Closing statement draft (2 minutes)
9. Persuasive statistics and quotes to cite
10. Concession strategy (which minor points to give up)
11. Flow sheet template for tracking arguments
12. Judge psychology: what wins debates`,isFree:!1},{id:"ed-009",title:"Science Experiment Designer",category:"Education",prompt:`Design a science experiment:

**Topic**: [Scientific concept to explore]
**Level**: [Elementary/Middle/High school/College]
**Resources**: [Available equipment and materials]
**Duration**: [Time available]
**Safety**: [Any constraints]

Design:
1. Research Question (clear, testable)
2. Hypothesis (if...then...because...)
3. Variables:
   - Independent (what you change)
   - Dependent (what you measure)
   - Controlled (what stays the same)
4. Materials list with quantities
5. Step-by-step procedure (numbered, specific)
6. Safety precautions
7. Data collection table template
8. Expected results
9. Data analysis method
10. Potential sources of error
11. Extension activities
12. Real-world applications
13. Connection to scientific principles
14. Presentation/report template

Make it hands-on, engaging, and safe. Include a "what went wrong" troubleshooting guide.`,isFree:!1},{id:"ed-010",title:"Math Problem Set Builder",category:"Education",prompt:`Create a math problem set:

**Topic**: [Mathematical concept]
**Level**: [Grade level or course]
**Difficulty Progression**: [Build from basic to challenging]
**Problem Count**: [Number of problems needed]

Create:
1. Concept review (key formulas and definitions)
2. Worked examples (3, with detailed step-by-step solutions)
3. Basic problems (40% of set): direct application
4. Intermediate problems (35%): multi-step, combining concepts
5. Challenge problems (20%): require insight or multiple approaches
6. Word problems (5%): real-world applications
7. Common errors section ("Students often make this mistake...")
8. Full answer key with solutions (not just answers)
9. Hints for challenge problems
10. Extension: connect to next topic
11. Alternative solution methods where applicable
12. Self-assessment rubric

Follow Polya's problem-solving steps: understand, plan, execute, review.`,isFree:!1},{id:"ed-011",title:"Language Learning Curriculum",category:"Education",prompt:`Design a language learning curriculum:

**Language**: [Target language]
**Student Level**: [Absolute beginner to advanced]
**Goal**: [Conversational/Business/Academic/Travel]
**Duration**: [Course timeline]
**Method**: [Self-study/Classroom/Tutoring/App-based]

Design:
1. Proficiency levels and milestones (A1→C2 aligned)
2. Unit progression (15-20 units)
3. Per unit:
   - Topic and context (real-life situation)
   - Vocabulary list (20-30 words)
   - Grammar point with simple explanation
   - Dialogue or reading text
   - Listening exercises description
   - Speaking activities
   - Writing prompts
   - Cultural note
4. Assessment strategy per level
5. Vocabulary acquisition schedule
6. Grammar spiral (revisit and deepen)
7. Immersion activities
8. Resource recommendations (apps, podcasts, media)
9. Common plateau strategies
10. Fluency metrics and self-assessment`,isFree:!1},{id:"ed-012",title:"Critical Thinking Exercise",category:"Education",prompt:`Create a critical thinking exercise:

**Subject**: [Topic area]
**Age/Level**: [Student age or education level]
**Skill Focus**: [Analysis/Evaluation/Synthesis/Logic]
**Duration**: [Time for the activity]

Design:
1. Scenario or case study presentation
2. Claim identification exercise:
   - Identify the main claim
   - Identify supporting claims
   - Identify hidden assumptions
3. Evidence evaluation:
   - What evidence supports each claim?
   - Is the evidence sufficient?
   - What evidence is missing?
4. Logical reasoning exercises:
   - Identify logical fallacies in given arguments (5 examples)
   - Construct valid arguments
   - Counter-argument development
5. Perspective-taking:
   - View the issue from 3 different stakeholder perspectives
   - Identify biases in each perspective
6. Synthesis:
   - Form an evidence-based conclusion
   - Acknowledge uncertainty and limitations
7. Discussion questions for group debate
8. Reflection prompts
9. Assessment rubric
10. Extension: research and present findings`,isFree:!1},{id:"ed-013",title:"History Timeline Constructor",category:"Education",prompt:`Create an educational history timeline:

**Period**: [Historical era or topic]
**Scope**: [Region/Global]
**Level**: [Student level]
**Focus**: [Political/Social/Technological/Cultural/Economic]

Build:
1. Timeline overview (the big picture in 3 sentences)
2. Major periods/eras with date ranges
3. Key events (20-30) with:
   - Date
   - Event description (2-3 sentences)
   - Significance (why it mattered)
   - Connection to previous and subsequent events
4. Key figures (10-15) with brief bios
5. Cause-and-effect chains (5 sequences)
6. Primary source excerpts (5 key documents/quotes)
7. Counter-narratives and multiple perspectives
8. "What if?" counterfactual questions (3)
9. Maps needed (description of geographic context)
10. Cross-connections with other regions/topics
11. Legacy: how this period shapes today
12. Discussion questions for deeper engagement
13. Project ideas for students
14. Recommended further reading/viewing`,isFree:!1},{id:"ed-014",title:"Presentation Skills Coach",category:"Education",prompt:`Create a presentation skills coaching guide:

**Presentation**: [Topic and context]
**Audience**: [Who they're presenting to]
**Duration**: [Time limit]
**Experience**: [Presenter's comfort level]
**Format**: [In-person/Virtual/Hybrid]

Guide:
1. Content structure:
   - Strong opening (3 techniques to choose from)
   - Key points organization (rule of 3)
   - Evidence and story integration
   - Memorable closing
2. Slide design principles:
   - One idea per slide
   - Visual hierarchy
   - Font and color choices
   - Image vs text balance
3. Delivery techniques:
   - Voice: pace, pause, volume, emphasis
   - Body language: posture, gestures, eye contact
   - Stage movement
   - Handling nervousness (specific techniques)
4. Engagement strategies:
   - Questions to audience
   - Interactive elements
   - Humor (when and how)
5. Q&A handling:
   - Bridging techniques
   - "I don't know" responses
   - Hostile questions
6. Practice schedule (rehearsal plan)
7. Technical checklist (equipment, backup plan)
8. Post-presentation follow-up`,isFree:!1},{id:"ed-015",title:"Reading Comprehension Toolkit",category:"Education",prompt:`Create a reading comprehension toolkit:

**Text Type**: [Fiction/Non-fiction/Academic/News/Poetry]
**Level**: [Student reading level]
**Skills**: [Main idea/Inference/Vocabulary/Analysis/Synthesis]

Toolkit:
1. Pre-reading activities:
   - Vocabulary preview (10 key words with student-friendly definitions)
   - Background knowledge activation prompts
   - Prediction questions
   - Purpose-setting questions

2. During-reading strategies:
   - Annotation guide (what to mark and how)
   - Think-aloud prompts every 2-3 paragraphs
   - Graphic organizer templates (story map, cause-effect, comparison)
   - Questioning stems by Bloom's level
   - Context clues vocabulary strategy

3. Post-reading activities:
   - Comprehension questions (literal, inferential, evaluative)
   - Summary writing template
   - Discussion questions (text-to-self, text-to-text, text-to-world)
   - Creative response options
   - Written response with rubric

4. Differentiation:
   - Modified text suggestions for struggling readers
   - Extension activities for advanced readers
   - ELL supports`,isFree:!1},{id:"ed-016",title:"STEM Project Designer",category:"Education",prompt:`Design a STEM project:

**Topic**: [Science/Technology/Engineering/Math focus]
**Level**: [Student level]
**Duration**: [Project timeline]
**Budget**: [Materials budget]
**Group Size**: [Individual/Pairs/Teams]

Project plan:
1. Project title and driving question
2. Learning objectives aligned to standards
3. Real-world connection (why this matters)
4. Engineering design process application
5. Materials list with budget breakdown
6. Phase 1: Research (what students investigate)
7. Phase 2: Design (brainstorming and planning)
8. Phase 3: Build/Create (hands-on construction)
9. Phase 4: Test (how to evaluate success)
10. Phase 5: Iterate (improve based on results)
11. Phase 6: Present (share findings)
12. Daily work plan for each phase
13. Assessment rubric (process AND product)
14. Reflection questions
15. Cross-disciplinary connections
16. Career connections (who does this professionally)`,isFree:!1},{id:"ed-017",title:"Academic Essay Framework",category:"Education",prompt:`Create a framework for writing an academic essay:

**Essay Type**: [Argumentative/Analytical/Expository/Compare-Contrast/Narrative]
**Topic**: [Essay subject]
**Length**: [Word/page count]
**Level**: [Student level]
**Citation Style**: [APA/MLA/Chicago]

Framework:
1. Thesis statement development:
   - Arguable claim formula
   - 3 thesis statement options with analysis
   - Scope and limitations
2. Outline template:
   - Introduction: hook → context → thesis
   - Body paragraphs: TEEL structure (Topic, Explain, Evidence, Link)
   - Counter-argument paragraph
   - Conclusion: synthesis, not summary
3. Paragraph templates with sentence starters
4. Transition words organized by function
5. Evidence integration:
   - Quote sandwich method
   - Paraphrase vs direct quote decision tree
   - Citation formatting examples
6. Common mistakes checklist
7. Self-revision checklist
8. Peer review guide
9. Grading rubric
10. Before/after paragraph examples (weak → strong)`,isFree:!1},{id:"ed-018",title:"Tutorial Script Writer",category:"Education",prompt:`Write a tutorial script for teaching a skill:

**Skill**: [What you're teaching]
**Format**: [Video/Written/Interactive/Workshop]
**Level**: [Beginner/Intermediate/Advanced]
**Duration**: [Learning time]

Script structure:
1. Hook: why this skill matters (real-world impact)
2. Prerequisites: what they need to know/have
3. Overview: what they'll be able to do after
4. Step 1: [The first fundamental] — explain, demonstrate, practice
5. Step 2: [Build on step 1] — explain, demonstrate, practice
6. Continue with progressive steps...
7. Common mistakes at each step and how to fix them
8. Checkpoint exercises (verify understanding before continuing)
9. Real-world project: apply all steps together
10. Troubleshooting guide
11. Next steps and further learning path
12. Resources and references

Principles:
- Show, then tell (demonstrate before explaining)
- Active, not passive (learner does things, not just watches)
- Spiral learning (revisit earlier concepts at deeper levels)
- Celebrate progress (acknowledge difficulty and achievement)`,isFree:!1},{id:"ed-019",title:"Book Club Discussion Guide",category:"Education",prompt:`Create a book club discussion guide:

**Book**: [Title and author]
**Genre**: [Fiction/Non-fiction/Memoir/etc.]
**Group**: [Casual/Academic/Professional/Community]
**Sessions**: [Number of meetings]

Guide:
1. Pre-reading context:
   - Author background
   - Historical/cultural context
   - Themes to watch for
2. Reading schedule (chapters per session)
3. Per session discussion questions:
   - Comprehension (what happened)
   - Analysis (why it happened)
   - Interpretation (what it means)
   - Connection (how it relates to us)
   - Evaluation (what we think about it)
4. Key quotes to discuss (5 per session)
5. Character evolution tracking
6. Theme development across chapters
7. Writing style and craft observations
8. Discussion facilitation tips
9. Creative response activities
10. Related reading recommendations
11. Author interview questions (if they could ask)
12. Rating and reflection template`,isFree:!1},{id:"ed-020",title:"Skill Assessment Rubric Builder",category:"Education",prompt:`Create a detailed assessment rubric:

**Skill/Task**: [What's being assessed]
**Level**: [Student/Professional level]
**Purpose**: [Formative/Summative/Self-assessment/Peer review]
**Scale**: [3-point/4-point/5-point]

Build:
1. Criteria identification (5-8 dimensions to evaluate)
2. For each criterion:
   - Clear description of what's being measured
   - Performance level descriptions:
     - Exemplary: exceeds expectations
     - Proficient: meets expectations
     - Developing: approaching expectations
     - Beginning: below expectations
   - Specific, observable indicators at each level
   - Examples of student work at each level
3. Weighting of criteria (if not equal)
4. Total points calculation
5. Grade conversion table
6. Student-friendly version (simplified language)
7. Self-assessment checklist
8. Peer review version
9. Feedback sentence starters for each criterion
10. Calibration guide for multiple graders`,isFree:!1},{id:"pr-001",title:"Meeting Summary Generator",category:"Productivity",prompt:`Summarize this meeting transcript into actionable output:

[Paste meeting transcript or notes]

Generate:
1. **Meeting Summary** (3-5 sentences covering the key discussion)
2. **Key Decisions Made** (numbered list with context)
3. **Action Items** (table format):
   | # | Action | Owner | Due Date | Priority |
   Each action item must be:
   - Specific (not vague)
   - Assigned to one person
   - Time-bound
4. **Open Questions** (items that need follow-up)
5. **Parking Lot** (ideas raised but not discussed)
6. **Key Insights** (important points that aren't actions)
7. **Next Meeting**: suggested agenda items
8. **Follow-up Email Draft** (ready to send to attendees)

Format for skimming: headers, bullet points, bold key terms. Someone who missed the meeting should understand everything in 2 minutes.`,isFree:!0},{id:"pr-002",title:"Action Items Extractor",category:"Productivity",prompt:`Extract and organize action items from this text:

[Paste email thread, document, chat log, or notes]

For each action item:
1. **Action**: Clear, specific task description (start with a verb)
2. **Owner**: Who's responsible (infer from context if not explicit)
3. **Due Date**: When it's due (infer reasonable deadline if not stated)
4. **Priority**: High/Medium/Low (based on urgency and importance)
5. **Dependencies**: What needs to happen first
6. **Context**: Brief note on why this matters
7. **Status**: Not started / In progress / Blocked

Then organize by:
- Priority view (High → Low)
- Owner view (grouped by person)
- Timeline view (chronological by due date)
- Project/topic view (grouped by theme)

Flag any conflicting or duplicate actions. Highlight items that seem urgent but have no owner.

End with: "Missing information" — questions to ask to clarify ambiguous items.`,isFree:!0},{id:"pr-003",title:"Weekly Review Framework",category:"Productivity",prompt:`Create a weekly review template:

**Role**: [Your job/function]
**Key Areas**: [Main responsibility areas]
**Tools**: [Where your tasks live]

Weekly Review Checklist:
1. **Capture** (10 min):
   - Process inbox to zero
   - Review notes from the week
   - Brain dump: anything on your mind
   - Check "waiting for" items

2. **Review** (15 min):
   - Calendar review: past week (anything missed?)
   - Calendar review: next 2 weeks (prepare for what's coming)
   - Project list: status of each active project
   - Someday/Maybe list: anything to activate?

3. **Reflect** (10 min):
   - What went well this week? (3 wins)
   - What didn't go well? (3 improvements)
   - What did I learn?
   - Am I working on the right things?
   - Energy audit: what energized vs drained me?

4. **Plan** (10 min):
   - Top 3 priorities for next week
   - Schedule deep work blocks
   - Identify potential obstacles
   - One thing to stop doing
   - One thing to start doing

5. **Reset** (5 min):
   - Clean physical/digital workspace
   - Set Monday morning intention`,isFree:!1},{id:"pr-004",title:"Email Template Library",category:"Productivity",prompt:`Create a library of professional email templates:

**Context**: [Your role and industry]
**Communication Style**: [Formal/Casual/Mixed]

Templates for:
1. **Introduction email** (meeting someone new)
2. **Follow-up after meeting** (recap and next steps)
3. **Request for information** (polite but clear)
4. **Declining a request** (firm but kind)
5. **Apology/correction** (own the mistake)
6. **Deadline extension request** (proactive)
7. **Project update** (status report)
8. **Feedback request** (specific asks)
9. **Thank you** (genuine, not generic)
10. **Cold outreach** (value-first approach)
11. **Escalation** (raising an issue professionally)
12. **Meeting request** (with clear agenda)
13. **Delegation** (assigning work clearly)
14. **Bad news delivery** (compassionate but direct)
15. **Re-engagement** (following up after silence)

Each template:
- Subject line
- Body with [VARIABLE] placeholders
- When to use it
- What NOT to do
- Under 150 words`,isFree:!1},{id:"pr-005",title:"Decision Matrix Builder",category:"Productivity",prompt:`Create a decision matrix for a complex choice:

**Decision**: [What you're deciding]
**Options**: [2-5 alternatives]
**Stakeholders**: [Who's affected]
**Timeline**: [When you need to decide]

Framework:
1. Define decision criteria (5-8 factors that matter)
2. Weight each criterion (1-10 importance)
3. Score each option on each criterion (1-10)
4. Calculate weighted scores
5. Present the matrix in a clear table
6. Sensitivity analysis: what changes if weights shift?
7. Qualitative factors not captured in scores
8. Risk assessment per option
9. Reversibility analysis (how hard to undo each choice)
10. Second-order effects (consequences of consequences)
11. "Pre-mortem": imagine each option failed — why?
12. Recommendation with confidence level

Also provide:
- One-page executive summary of the decision
- Stakeholder communication plan for the chosen option
- 30/60/90 day check-in plan post-decision`,isFree:!1},{id:"pr-006",title:"Standard Operating Procedure Writer",category:"Productivity",prompt:`Write a Standard Operating Procedure (SOP):

**Process**: [What this SOP covers]
**Team**: [Who will follow this]
**Frequency**: [How often it's performed]
**Current State**: [Documented or tribal knowledge]

SOP format:
1. **Header**: SOP title, version, owner, last updated, next review date
2. **Purpose**: Why this process exists (1-2 sentences)
3. **Scope**: What's covered and what's NOT covered
4. **Definitions**: Key terms specific to this process
5. **Roles and Responsibilities**: Who does what
6. **Prerequisites**: What's needed before starting
7. **Procedure** (numbered steps):
   - Step description (one action per step)
   - Sub-steps if complex
   - Decision points with clear criteria
   - Screenshots or diagram descriptions where helpful
   - Expected duration per step
8. **Quality Checks**: How to verify each step was done correctly
9. **Exception Handling**: What to do when things go wrong
10. **Escalation**: When and who to contact for help
11. **Revision History**: Track all changes
12. **Appendix**: Templates, checklists, reference materials`,isFree:!1},{id:"pr-007",title:"Project Kickoff Document",category:"Productivity",prompt:`Create a project kickoff document:

**Project**: [Project name and description]
**Sponsor**: [Who's funding/authorizing]
**Team**: [Who's working on it]
**Duration**: [Expected timeline]

Document:
1. **Project Overview**: What, why, and for whom
2. **Objectives**: 3-5 SMART goals
3. **Scope**:
   - In scope (explicit)
   - Out of scope (equally explicit)
   - Scope change process
4. **Success Criteria**: How we know we're done
5. **Stakeholder Map**: Who, their interest, communication needs
6. **Team Roles**: RACI matrix
7. **Timeline**: Major milestones with dates
8. **Budget**: Breakdown by category
9. **Risks**: Top 5 risks with mitigation plans
10. **Dependencies**: External and internal
11. **Communication Plan**: Who gets what, how often
12. **Tools and Access**: What the team needs
13. **Decision Log Template**
14. **Meeting Cadence**: Regular check-ins
15. **Definition of Done**: Acceptance criteria`,isFree:!1},{id:"pr-008",title:"Retrospective Facilitator",category:"Productivity",prompt:`Design and facilitate a team retrospective:

**Team**: [Team name and size]
**Sprint/Period**: [What we're reflecting on]
**Format**: [In-person/Remote/Hybrid]
**Duration**: [Meeting length]
**Previous Issues**: [Known recurring themes]

Retro structure:
1. **Check-in** (5 min): One word describing the sprint/period
2. **Data Gathering** (15 min):
   - Format options (pick one):
     a. Start/Stop/Continue
     b. Mad/Sad/Glad
     c. Sailboat (wind/anchor/rocks/island)
     d. 4Ls (Liked/Learned/Lacked/Longed for)
   - Silent brainstorming on sticky notes
   - Sharing and clustering
3. **Discussion** (15 min):
   - Dot voting on topics
   - Deep dive on top 2-3 items
   - Root cause analysis (5 Whys)
4. **Action Items** (10 min):
   - Specific, assigned, time-bound improvements
   - Maximum 3 action items (more won't get done)
5. **Close** (5 min):
   - Team health check
   - Appreciation round
   - Rate the retro

Include: facilitator tips, Miro/FigJam board description, async version for distributed teams.`,isFree:!1},{id:"pr-009",title:"Knowledge Base Article Writer",category:"Productivity",prompt:`Write a knowledge base / help center article:

**Topic**: [What the article covers]
**Audience**: [Users/Internal team/Both]
**Product**: [Product or service context]
**Complexity**: [Simple how-to / Complex troubleshooting]

Article structure:
1. **Title**: Clear, searchable (how users would ask)
2. **Summary**: What this article covers (2 sentences)
3. **Applies to**: Product version, plan, or user type
4. **Prerequisites**: What they need before starting
5. **Steps** (numbered, specific):
   - One action per step
   - Expected result after each step
   - Screenshot descriptions
   - Warnings before destructive actions
6. **Troubleshooting**: Common issues and solutions
7. **FAQ**: 3-5 related questions
8. **Related Articles**: Links to connect
9. **Feedback**: "Was this helpful?" prompt

Guidelines:
- Write at 8th grade reading level
- Active voice, present tense
- Avoid jargon (or define it inline)
- Chunk content with headers for scanning
- Tested by someone unfamiliar with the feature`,isFree:!1},{id:"pr-010",title:"Goal Setting (SMART Goals)",category:"Productivity",prompt:`Create SMART goals with an execution plan:

**Area**: [Career/Business/Health/Learning/Financial/Personal]
**Timeframe**: [30/60/90 days / Quarterly / Annual]
**Context**: [Current situation and desired outcome]

For each goal (create 3-5):
1. **Goal statement** (SMART format):
   - Specific: exactly what you'll achieve
   - Measurable: the number or metric
   - Achievable: stretch but realistic
   - Relevant: why this matters now
   - Time-bound: specific deadline
2. **Current baseline**: where you are now
3. **Target**: where you want to be
4. **Key milestones** (4-6 checkpoints)
5. **Daily/weekly habits** that drive progress
6. **Potential obstacles** and mitigation strategies
7. **Accountability system**: how you'll stay on track
8. **Resources needed**: tools, people, money, time
9. **Leading indicators**: early signs of progress
10. **Celebration plan**: how you'll reward completion

Include a tracking template (weekly check-in format) and a "when motivation drops" protocol.`,isFree:!1},{id:"pr-011",title:"Delegation Framework",category:"Productivity",prompt:`Create a delegation plan for a task or project:

**Task**: [What needs to be delegated]
**Delegate**: [Who you're delegating to]
**Your Role**: [Your position]
**Urgency**: [Timeline]

Framework:
1. **Task Analysis**:
   - Is this the right task to delegate? (Decision tree)
   - What level of authority are you granting?
   - What resources does the delegate need?

2. **Delegation Brief**:
   - Task description (clear outcome, not just activity)
   - Why this matters (context and importance)
   - Success criteria (how you'll know it's done well)
   - Boundaries (what they can decide vs what needs approval)
   - Deadline and milestones
   - Resources available
   - Who to contact for help

3. **Check-in Plan**:
   - Frequency based on delegate's experience level
   - What to ask vs what to tell
   - How to give feedback without micromanaging

4. **Handoff conversation template** (what to say)
5. **Follow-up email template** (document the delegation)
6. **Post-completion review**: learning for both parties`,isFree:!1},{id:"pr-012",title:"Personal Productivity Audit",category:"Productivity",prompt:`Conduct a personal productivity audit:

**Role**: [Your job and key responsibilities]
**Current Challenge**: [What feels broken]
**Hours**: [Work hours per week]
**Tools**: [Current tools and systems]

Audit:
1. **Time audit framework**:
   - Track activities for one week (template provided)
   - Categorize: deep work / shallow work / meetings / admin / wasted
   - Calculate percentages
   - Compare to ideal ratio

2. **Energy audit**:
   - Map your energy levels across the day
   - Identify peak performance windows
   - Align high-value work to high-energy times

3. **Systems audit**:
   - Task management: capture → organize → do → review
   - Calendar management: meeting load, buffer time, time blocks
   - Communication: email, chat, calls — time spent
   - Information management: notes, files, knowledge base

4. **Improvement plan**:
   - Top 3 time wasters to eliminate
   - Top 3 systems to implement/improve
   - Ideal week template
   - 30-day implementation schedule
   - Tools to add/remove/change

5. **Metrics to track**: weekly review checklist`,isFree:!1},{id:"pr-013",title:"One-on-One Meeting Framework",category:"Productivity",prompt:`Create a 1:1 meeting framework:

**Relationship**: [Manager-report / Peer-peer / Skip-level / Mentor-mentee]
**Frequency**: [Weekly/Biweekly/Monthly]
**Duration**: [30/45/60 minutes]

Framework:
1. **Standing agenda template**:
   - Check-in (2 min): mood/energy level
   - Their updates (10 min): what they want to discuss
   - Your updates (5 min): context they need
   - Growth/Development (5 min): career conversation
   - Action items (3 min): clear next steps

2. **Question bank by category** (5 questions each):
   - Progress and blockers
   - Feedback (both directions)
   - Career development
   - Team dynamics
   - Work-life balance
   - Strategic thinking

3. **Different 1:1 types**:
   - Regular check-in
   - Career conversation (quarterly)
   - Feedback session
   - Problem-solving session
   - Goal-setting session

4. **Notes template**: date, discussed, action items, follow-ups
5. **Anti-patterns**: common 1:1 mistakes to avoid
6. **Remote 1:1 adaptations**`,isFree:!1},{id:"pr-014",title:"Incident Report Template",category:"Productivity",prompt:`Create a post-incident report (PIR):

**Incident**: [Brief description]
**Severity**: [Critical/Major/Minor]
**Duration**: [Start to resolution]
**Impact**: [Who and what was affected]

Report structure:
1. **Executive Summary** (5 sentences max):
   - What happened
   - Impact
   - Root cause
   - Resolution
   - Key action items

2. **Timeline** (minute-by-minute for severe incidents):
   - Detection time
   - Response time
   - Key decisions and actions
   - Resolution time
   - All-clear time

3. **Root Cause Analysis**:
   - 5 Whys analysis
   - Contributing factors
   - Trigger vs root cause distinction

4. **Impact Assessment**:
   - Users affected
   - Revenue impact
   - Data impact
   - Reputation impact

5. **Action Items** (categorized):
   - Immediate fixes (done)
   - Short-term improvements (next sprint)
   - Long-term prevention (next quarter)
   - Process changes

6. **Lessons Learned**:
   - What went well in the response
   - What could improve
   - Detection improvements
   - Communication improvements

7. **Blameless culture note**: focus on systems, not individuals`,isFree:!1},{id:"pr-015",title:"Handoff Document Creator",category:"Productivity",prompt:`Create a role/project handoff document:

**Context**: [Why the handoff is happening]
**Current Owner**: [You / departing person]
**New Owner**: [Who's taking over]
**Transition Timeline**: [Available overlap time]

Document:
1. **Overview**: What this role/project entails
2. **Current Status**: Where things stand right now
3. **Key Contacts**: People, their roles, relationship notes
4. **Access and Credentials**: Systems, tools, accounts needed
5. **Recurring Tasks**: Daily/weekly/monthly responsibilities with how-to
6. **Active Projects**: Status, next steps, deadlines for each
7. **Pending Decisions**: Choices that need to be made
8. **Known Issues**: Problems and workarounds
9. **Historical Context**: Why things are the way they are
10. **Documentation Location**: Where to find everything
11. **Tribal Knowledge**: Things not written down anywhere else
12. **Calendar Items**: Recurring meetings to join/leave
13. **Quick Wins**: Easy improvements the new person could make
14. **Landmines**: Things to avoid or be careful with
15. **Training Plan**: Step-by-step ramp-up schedule
16. **30-day Check-in Plan**: Support after handoff`,isFree:!1},{id:"db-001",title:"Bug Detective",category:"Debug",prompt:`Find and fix the bug in this code:

[Paste your buggy code here]

**Language**: [Programming language]
**Expected Behavior**: [What should happen]
**Actual Behavior**: [What actually happens]
**Error Message**: [If any]
**When it occurs**: [Always/Sometimes/Under specific conditions]

Analysis approach:
1. Read the code line by line and identify potential issues
2. Categorize the bug type:
   - Logic error
   - Off-by-one error
   - Null/undefined reference
   - Race condition
   - Memory leak
   - Type mismatch
   - Scope issue
   - Edge case not handled
3. Explain the root cause (not just the symptom)
4. Provide the fixed code with clear comments on changes
5. Explain why the fix works
6. Identify any additional bugs or code smells found
7. Suggest defensive coding practices to prevent this class of bug
8. Write a test case that would have caught this bug
9. Rate the severity: critical / major / minor / cosmetic`,isFree:!0},{id:"db-002",title:"Performance Profiler",category:"Debug",prompt:`Optimize this code for performance:

[Paste your slow code here]

**Language**: [Programming language]
**Current Performance**: [How slow is it — time/memory]
**Target Performance**: [Desired speed/memory]
**Data Scale**: [Input size and growth expectations]
**Environment**: [Where it runs]

Analysis:
1. Big O analysis of current code (time and space)
2. Identify bottlenecks:
   - Unnecessary iterations
   - Redundant computations
   - Expensive operations in loops
   - Memory allocation patterns
   - I/O blocking
   - Missing caching opportunities
3. Optimized version with:
   - Algorithm improvements
   - Data structure changes
   - Caching/memoization
   - Lazy evaluation
   - Parallel processing opportunities
4. Before/after Big O comparison
5. Benchmarking approach to verify improvements
6. Trade-offs of the optimization (readability, memory, complexity)
7. Profile-guided optimization suggestions
8. Language-specific performance tips`,isFree:!0},{id:"db-003",title:"Error Message Decoder",category:"Debug",prompt:`Explain and resolve this error:

**Error Message**: [Paste the full error/stack trace]
**Language/Framework**: [Tech stack]
**Context**: [What you were doing when it occurred]
**Recent Changes**: [What changed recently]
**Environment**: [Dev/Staging/Production, OS, versions]

Provide:
1. **Plain English Translation**: What this error actually means
2. **Root Cause**: The most likely cause (and 2 alternative causes)
3. **Stack Trace Analysis**: Walk through the trace, identify the originating line
4. **Fix**: Step-by-step resolution
5. **Verification**: How to confirm the fix works
6. **Prevention**: How to avoid this error in the future
7. **Related Errors**: Similar errors you might see next
8. **Quick Check**: 5 things to verify immediately:
   - Dependencies up to date?
   - Environment variables set?
   - Correct file permissions?
   - Network/DB connectivity?
   - Cache/build artifacts stale?

If the error is from a known library, include a link to relevant documentation or GitHub issue.`,isFree:!1},{id:"db-004",title:"Code Review Checklist",category:"Debug",prompt:`Review this code for issues:

[Paste code for review]

**Language**: [Programming language]
**Purpose**: [What this code does]
**Standards**: [Team coding standards, if any]

Review across these dimensions:

1. **Correctness**: Does it do what it's supposed to?
   - Logic errors
   - Edge cases unhandled
   - Off-by-one errors
   - Null safety

2. **Security**:
   - Injection vulnerabilities (SQL, XSS, command)
   - Authentication/authorization gaps
   - Sensitive data exposure
   - Input validation

3. **Performance**:
   - N+1 queries
   - Unnecessary loops or computations
   - Missing indexes
   - Memory leaks

4. **Maintainability**:
   - Naming clarity
   - Function length and complexity
   - DRY violations
   - Comments where needed

5. **Testing**:
   - Is it testable?
   - Missing test coverage
   - Edge cases to test

6. **Style**:
   - Consistency with codebase
   - Formatting issues
   - Import organization

Provide: severity (critical/warning/suggestion), line reference, explanation, and suggested fix for each issue.`,isFree:!1},{id:"db-005",title:"Memory Leak Hunter",category:"Debug",prompt:`Find and fix memory leaks in this code:

[Paste code or describe the symptoms]

**Language**: [Programming language]
**Runtime**: [Node.js/Browser/Python/Java/etc.]
**Symptoms**: [Growing memory, OOM crashes, slowdown over time]
**Scale**: [How long until problems appear]

Investigation:
1. Common memory leak patterns for this language:
   - Unclosed connections/handles
   - Growing arrays/maps without cleanup
   - Event listener accumulation
   - Closure capturing large objects
   - Circular references
   - Cache without eviction
   - Timer/interval not cleared

2. Code analysis for each pattern
3. Diagnostic approach:
   - How to measure memory usage
   - How to take heap snapshots
   - How to identify growing objects
   - How to trace allocation sources

4. Fixes for identified leaks
5. Prevention patterns:
   - Resource cleanup patterns (try-finally, using/with)
   - Weak references where appropriate
   - Bounded data structures
   - Disposal/cleanup hooks

6. Monitoring setup to detect future leaks early
7. Load testing approach to verify the fix`,isFree:!1},{id:"db-006",title:"API Response Debugger",category:"Debug",prompt:`Debug an unexpected API response:

**Endpoint**: [URL and method]
**Expected Response**: [What you expected]
**Actual Response**: [What you got — status code, body, headers]
**Request Details**: [Headers, body, auth used]
**Works in**: [Where it works: Postman, curl, browser — if anywhere]

Debug checklist:
1. **Status code analysis**: What does this code really mean?
2. **Response body**: Parse error messages, error codes
3. **Headers check**: Content-Type, CORS, auth headers
4. **Request comparison**: diff working vs non-working request
5. **Common issues**:
   - Auth token expired or malformed
   - Wrong Content-Type header
   - Missing required fields
   - URL encoding issues
   - CORS preflight failing
   - Rate limit exceeded
   - Request body format (JSON vs form-data)
   - API version mismatch
   - SSL/TLS certificate issues
6. **cURL command**: equivalent cURL for testing
7. **Fix**: specific resolution steps
8. **Logging**: what to log for future debugging
9. **Test**: how to write a test that catches this`,isFree:!1},{id:"db-007",title:"Database Query Debugger",category:"Debug",prompt:`Debug a problematic database query:

**Query**: [Paste the SQL query]
**Database**: [PostgreSQL/MySQL/SQLite/etc.]
**Expected Result**: [What you expected]
**Actual Result**: [Wrong data, slow, error, empty]
**Table Schema**: [Relevant table structures]
**Data Sample**: [Sample data if possible]

Debug:
1. **Syntax check**: validate query syntax
2. **Logic analysis**: does the WHERE clause match your intent?
3. **JOIN analysis**: correct join types and conditions?
4. **Common SQL bugs**:
   - NULL comparisons (= vs IS)
   - GROUP BY missing columns
   - HAVING vs WHERE confusion
   - Implicit type conversion
   - Timezone issues with dates
   - Case sensitivity
   - Aggregate function misuse
   - Subquery correlation errors
5. **Query plan analysis**: EXPLAIN output interpretation
6. **Data quality check**: are assumptions about data correct?
7. **Fixed query**: corrected SQL with explanation
8. **Performance**: is it also slow? Optimization suggestions
9. **Test queries**: verify step by step with simpler queries
10. **Parameterization**: prevent SQL injection if applicable`,isFree:!1},{id:"db-008",title:"CSS Layout Debugger",category:"Debug",prompt:`Fix CSS layout issues:

**Expected Layout**: [Describe or sketch what you want]
**Actual Layout**: [Describe what's happening]
**Code**: [Paste HTML and CSS]
**Browser**: [Which browsers are affected]
**Responsive**: [Does it break at certain screen sizes?]

Debug:
1. **Box model audit**: Check padding, margin, border, box-sizing
2. **Display and position analysis**:
   - Flexbox: alignment, wrapping, gap issues
   - Grid: template areas, spanning, alignment
   - Positioning: stacking context, z-index, overflow
3. **Common CSS bugs**:
   - Margin collapse
   - Overflow hidden cutting content
   - Percentage heights without parent height
   - Flex item shrinking unexpectedly
   - Grid blowout from content overflow
   - Z-index stacking context confusion
   - vh units on mobile (viewport height issues)
   - Font-size affecting layout
4. **Fixed CSS with explanation of each change**
5. **Responsive fixes**: media query adjustments
6. **Cross-browser considerations**
7. **DevTools inspection guide**: what to check and where
8. **Preventive practices**: layout patterns that don't break`,isFree:!1},{id:"db-009",title:"Race Condition Finder",category:"Debug",prompt:`Find and fix race conditions in this code:

[Paste concurrent/async code]

**Language**: [Programming language]
**Concurrency Model**: [Threads/Async-await/Goroutines/Actors]
**Symptoms**: [Intermittent failures, data corruption, deadlocks]

Analysis:
1. **Identify shared mutable state**: what data is accessed by multiple concurrent operations?
2. **Critical section analysis**: where do reads and writes overlap?
3. **Race condition types found**:
   - Read-modify-write races
   - Check-then-act races (TOCTOU)
   - Double-checked locking issues
   - Order-dependent initialization
4. **Deadlock potential**: circular wait analysis
5. **Fix strategies**:
   - Mutex/Lock placement
   - Atomic operations
   - Immutable data structures
   - Channel-based communication
   - Compare-and-swap (CAS)
   - Actor model isolation
6. **Fixed code with annotations**
7. **Testing for race conditions**:
   - Race detector tools for the language
   - Stress test approach
   - Deterministic test strategies
8. **Monitoring**: how to detect races in production`,isFree:!1},{id:"db-010",title:"Deployment Failure Troubleshooter",category:"Debug",prompt:`Troubleshoot a failed deployment:

**Platform**: [Vercel/AWS/GCP/Docker/K8s/Heroku]
**Error**: [Error message or symptoms]
**Recent Changes**: [What changed since last working deploy]
**Logs**: [Paste relevant log output]

Troubleshooting checklist:
1. **Build phase**:
   - Dependencies installed correctly?
   - Node/Python/Go version match?
   - Build command correct?
   - Environment variables set?
   - Build output artifacts present?

2. **Deploy phase**:
   - Image pushed successfully?
   - Container starts?
   - Port binding correct?
   - Health check passing?
   - Resource limits (CPU/memory) sufficient?

3. **Runtime phase**:
   - Application starts without errors?
   - Database connection established?
   - External service connectivity?
   - DNS resolution working?
   - SSL certificates valid?

4. **Environment differences**:
   - Local vs CI vs production config diff
   - Secret/env var comparison
   - Version differences

5. **Rollback plan**: how to revert immediately
6. **Fix**: specific resolution steps
7. **Prevention**: CI check to catch this next time`,isFree:!1},{id:"db-011",title:"Security Vulnerability Scanner",category:"Debug",prompt:`Audit this code for security vulnerabilities:

[Paste code to audit]

**Language/Framework**: [Tech stack]
**Application Type**: [Web app/API/Mobile backend/CLI]
**Data Sensitivity**: [PII/Financial/Healthcare/Public]

Check for:
1. **Injection**: SQL, NoSQL, OS command, LDAP, XPath
2. **Broken Authentication**: weak passwords, session issues, token flaws
3. **Sensitive Data Exposure**: plaintext storage, weak encryption, logging PII
4. **XSS**: reflected, stored, DOM-based
5. **Broken Access Control**: IDOR, privilege escalation, CORS misconfiguration
6. **Security Misconfiguration**: default credentials, verbose errors, unnecessary features
7. **CSRF**: missing tokens, SameSite cookie issues
8. **Insecure Deserialization**: untrusted data deserialization
9. **Known Vulnerable Components**: outdated dependencies
10. **Insufficient Logging**: missing audit trail

For each finding:
- Severity: Critical/High/Medium/Low
- CWE reference number
- Code location
- Attack scenario (how it could be exploited)
- Fix with code example
- Verification: how to confirm the fix works

Provide a remediation priority list.`,isFree:!1},{id:"db-012",title:"TypeScript Error Resolver",category:"Debug",prompt:`Fix TypeScript type errors:

**Error**: [Paste the TypeScript error(s)]
**Code**: [Paste relevant code]
**tsconfig**: [Relevant compiler options]
**TypeScript Version**: [Version number]

For each error:
1. **Decode the error message**: What TypeScript is actually saying
2. **Why it's happening**: The type system's perspective
3. **Fix options** (ranked by correctness):
   a. The proper fix (correct the types/code)
   b. The practical fix (type assertion or narrowing)
   c. The escape hatch (when to use 'as' or 'any' — rarely)
4. **Code with fix applied**
5. **Explanation**: Why this fix satisfies the type checker

Common TypeScript error patterns:
- Generic constraint issues
- Union type narrowing
- Conditional type inference
- Module declaration problems
- Strict null checks
- Index signature issues
- Declaration merging conflicts
- Overload resolution failures

Never use @ts-ignore as a fix. Explain how to read complex type errors (read from bottom to top).`,isFree:!1},{id:"db-013",title:"Network Request Debugger",category:"Debug",prompt:`Debug network/HTTP request issues:

**Request**: [Method, URL, headers, body]
**Expected**: [What should happen]
**Actual**: [What's happening — timeout, wrong response, error]
**Environment**: [Local/Staging/Production]
**Tools**: [Browser DevTools/cURL/Postman]

Systematic debug:
1. **DNS resolution**: Does the domain resolve? (dig/nslookup)
2. **Connectivity**: Can you reach the server? (ping/telnet)
3. **TLS/SSL**: Certificate valid? Handshake succeeding?
4. **Request formation**:
   - URL correct (encoding, path parameters)?
   - HTTP method correct?
   - Headers complete and correct?
   - Body format and content-type matching?
   - Authentication header present and valid?
5. **Server-side**:
   - Request reaching the server (check server logs)?
   - Server processing correctly?
   - Response code interpretation
6. **Response handling**:
   - Client parsing the response correctly?
   - Content-Type header matching body?
   - Character encoding issues?
7. **Network issues**:
   - Proxy/VPN interference
   - Firewall blocking
   - CORS preflight
   - Redirect chains
8. **Diagnostic commands**: cURL, httpie, dig commands to run
9. **Wireshark/tcpdump**: when to use packet capture`,isFree:!1},{id:"db-014",title:"React Rendering Debugger",category:"Debug",prompt:`Debug React rendering issues:

**Problem**: [What's rendering wrong — infinite loop, stale state, missing updates, poor performance]
**Component**: [Paste the component code]
**React Version**: [Version]
**State Management**: [useState/useReducer/Redux/Zustand/etc.]

Debug:
1. **Infinite re-render detection**:
   - State updates inside render
   - useEffect missing/wrong dependency array
   - Object/array references changing each render

2. **Stale state/closure issues**:
   - useEffect with stale closures
   - Event handlers with stale state
   - setTimeout/setInterval capturing old values

3. **Missing updates**:
   - Direct state mutation (object/array)
   - Incorrect key prop on lists
   - Conditional rendering logic errors
   - Context provider not wrapping correctly

4. **Performance issues**:
   - Unnecessary re-renders (React.memo, useMemo, useCallback analysis)
   - Large list rendering (need virtualization?)
   - Heavy computations in render
   - Context value reference stability

5. **DevTools diagnostics**:
   - React DevTools Profiler usage
   - Component highlight on re-render
   - Strict Mode double-render explanation

6. **Fixed code with annotations**
7. **React best practices** to prevent these issues`,isFree:!1},{id:"db-015",title:"Git Disaster Recovery",category:"Debug",prompt:`Help recover from a Git disaster:

**Situation**: [Describe what happened]
**What you ran**: [Git commands that caused the problem]
**What you lost**: [Commits, branches, files]
**Remote status**: [Is the remote intact?]

Recovery for common disasters:
1. **Accidental commit to wrong branch**: cherry-pick and reset
2. **Force pushed and lost commits**: reflog recovery
3. **Deleted branch with unmerged work**: reflog + checkout
4. **Merge conflict nightmare**: abort and restart strategy
5. **Accidentally committed secrets**: BFG repo cleaner
6. **Detached HEAD with uncommitted changes**: create branch from HEAD
7. **Corrupted repository**: clone fresh + apply changes
8. **Wrong rebase ruined history**: reflog to pre-rebase state
9. **Large file committed**: git filter-branch or BFG
10. **Submodule mess**: reinitialize strategy

For your specific situation:
1. Assess: what's recoverable
2. Recovery commands (step by step with explanation)
3. Verify: how to confirm recovery worked
4. Prevent: practices to avoid this in the future
5. Nuclear option: when to start fresh and how

GOLDEN RULE: Almost nothing in Git is truly lost. The reflog is your friend. Don't panic.`,isFree:!1}],oI=oF.filter(e=>e.isFree);oF.filter(e=>!e.isFree);let oL=oF.length;e.s(["ALL_PROMPTS",0,oF,"CATEGORIES",0,[{name:"Code Generation",icon:"terminal",count:30},{name:"Content Writing",icon:"pen",count:30},{name:"Data Analysis",icon:"chart",count:25},{name:"Marketing",icon:"megaphone",count:25},{name:"Business",icon:"briefcase",count:20},{name:"Creative",icon:"sparkles",count:20},{name:"Education",icon:"book",count:20},{name:"Productivity",icon:"clock",count:15},{name:"Debug",icon:"bug",count:15}],"FREE_PROMPTS",0,oI,"TOTAL_PROMPTS",0,oL],65880)}]);