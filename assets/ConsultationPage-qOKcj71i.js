import{r as i,j as t}from"./index-CUYWwivm.js";import{L as d}from"./Logo-B-cILYzE.js";import{S as m}from"./Selector-Csn1LPEX.js";import{B as x}from"./Button-CZEUKJwV.js";import{t as e}from"./tokens-CNsaKOyO.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(...s)=>s.filter((l,r,o)=>!!l&&l.trim()!==""&&o.indexOf(l)===r).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,r,o)=>o?o.toUpperCase():r.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=s=>{const l=S(s);return l.charAt(0).toUpperCase()+l.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var R={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=s=>{for(const l in s)if(l.startsWith("aria-")||l==="role"||l==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=i.forwardRef(({color:s="currentColor",size:l=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:n="",children:a,iconNode:u,...c},y)=>i.createElement("svg",{ref:y,...R,width:l,height:l,stroke:s,strokeWidth:o?Number(r)*24/Number(l):r,className:p("lucide",n),...!a&&!j(c)&&{"aria-hidden":"true"},...c},[...u.map(([f,h])=>i.createElement(f,h)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=(s,l)=>{const r=i.forwardRef(({className:o,...n},a)=>i.createElement(w,{ref:a,iconNode:l,className:p(`lucide-${b(g(s))}`,`lucide-${s}`,o),...n}));return r.displayName=g(s),r};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],v=N("arrow-left",C),E=["HAIR & SCALP","TREATMENTS","LIFESTYLE","PREFERENCES"],z=[{label:"Short",subcopy:"Buzz-cut to early-Beatles"},{label:"Chin-length",subcopy:"Doesn't touch shoulders"},{label:"Shoulder length",subcopy:"Sits on shoulders or falls slightly past"},{label:"Long",subcopy:"Below shoulder blades to mid-back"},{label:"Very Long",subcopy:"Mid-back and beyond"}];function A(){const[s,l]=i.useState(1),[r,o]=i.useState(!1);return t.jsxs("div",{className:"min-h-dvh bg-(--color-neutral-200) flex flex-col max-w-[430px] mx-auto w-full",children:[t.jsx("div",{className:"bg-(--color-primary-400) py-(--spacing-spacing-8) text-center",children:t.jsx("a",{href:"#",className:"text-(--color-neutral-100) underline",style:{fontFamily:e.styles.body5Regular.fontFamily,fontSize:e.styles.body5Regular.fontSize,fontWeight:e.styles.body5Regular.fontWeight,lineHeight:e.styles.body5Regular.lineHeight,letterSpacing:e.styles.body5Regular.letterSpacing},children:"Exclusive Welcome Offer: 60% off + free gift"})}),t.jsxs("header",{className:"flex items-center justify-center px-(--spacing-spacing-24) py-(--spacing-spacing-16) relative",children:[t.jsx(d,{variant:"dark",height:18}),t.jsx("button",{className:"absolute right-(--spacing-spacing-24) text-(--color-neutral-900) cursor-pointer bg-transparent border-none",style:{fontFamily:e.styles.body3Regular.fontFamily,fontSize:e.styles.body3Regular.fontSize,fontWeight:e.styles.body3Regular.fontWeight,lineHeight:e.styles.body3Regular.lineHeight,letterSpacing:e.styles.body3Regular.letterSpacing},children:"Exit"})]}),t.jsx("nav",{className:"flex",children:E.map((n,a)=>t.jsxs("div",{className:"flex-1 flex flex-col items-center",children:[t.jsx("span",{className:`pb-(--spacing-spacing-12) ${a===0?"text-(--color-neutral-900)":"text-(--color-neutral-700)"}`,style:{fontFamily:e.styles.label3Regular.fontFamily,fontSize:e.styles.label3Regular.fontSize,fontWeight:e.styles.label3Regular.fontWeight,lineHeight:e.styles.label3Regular.lineHeight,letterSpacing:e.styles.label3Regular.letterSpacing,textTransform:"uppercase"},children:n}),t.jsx("div",{className:`w-full h-[3px] ${a===0?"bg-(--color-primary-200)":"bg-(--color-neutral-400)"}`})]},n))}),t.jsxs("main",{className:"flex-1 flex flex-col items-center px-(--spacing-spacing-24) pt-(--spacing-spacing-48) pb-(--spacing-spacing-24) overflow-y-auto",children:[t.jsx("h2",{className:"text-center text-(--color-neutral-900)",style:{fontFamily:e.styles.h4.fontFamily,fontSize:e.styles.h4.fontSize,fontWeight:e.styles.h4.fontWeight,lineHeight:e.styles.h4.lineHeight,letterSpacing:e.styles.h4.letterSpacing},children:"How long is your hair?"}),t.jsx("p",{className:"text-center text-(--color-neutral-800) mt-(--spacing-spacing-16) max-w-[480px]",style:{fontFamily:e.styles.body4Regular.fontFamily,fontSize:e.styles.body4Regular.fontSize,fontWeight:e.styles.body4Regular.fontWeight,lineHeight:e.styles.body4Regular.lineHeight,letterSpacing:e.styles.body4Regular.letterSpacing},children:"If you have curly hair, pull the curl all the way down to find your true length."}),t.jsxs("button",{onClick:()=>o(!r),className:"flex items-center gap-(--spacing-spacing-8) mt-(--spacing-spacing-24) cursor-pointer bg-transparent border-none",children:[t.jsx("span",{className:"text-(--color-tertiary-300) flex items-center justify-center w-[20px] h-[20px] rounded-full border border-(--color-tertiary-300) text-xs leading-none",children:"+"}),t.jsx("span",{className:"text-(--color-neutral-800) underline",style:{fontFamily:e.styles.body4Regular.fontFamily,fontSize:e.styles.body4Regular.fontSize,fontWeight:e.styles.body4Regular.fontWeight,lineHeight:e.styles.body4Regular.lineHeight,letterSpacing:e.styles.body4Regular.letterSpacing},children:"More of a visual learner? Tap for pics"})]}),t.jsx("div",{className:"flex flex-col items-center gap-(--spacing-spacing-12) mt-(--spacing-spacing-32) w-full",children:z.map((n,a)=>t.jsx(m,{label:n.label,subcopy:n.subcopy,selected:s===a,onClick:()=>l(a),size:"hug",className:"w-full"},n.label))})]}),t.jsxs("footer",{className:"sticky bottom-0 bg-(--color-neutral-200) pl-(--spacing-spacing-24) pr-(--spacing-spacing-12) py-(--spacing-spacing-16) flex items-center gap-(--spacing-spacing-12)",children:[t.jsx("button",{className:"w-[52px] h-[52px] rounded-full bg-(--color-primary-400) flex items-center justify-center shrink-0 cursor-pointer border-none",children:t.jsx(v,{className:"text-(--color-neutral-100)",size:20})}),t.jsx(x,{variant:"primary-light",size:"flexible",className:"flex-1",children:"Next"})]})]})}export{A as default};
