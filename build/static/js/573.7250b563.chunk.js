/*! For license information please see 573.7250b563.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkjuleb_test=self.webpackChunkjuleb_test||[]).push([[573],{573:(e,t,i)=>{i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>s,copyVisualViewport:()=>D,keyboardDidClose:()=>u,keyboardDidOpen:()=>g,keyboardDidResize:()=>l,resetKeyboardAssist:()=>n,setKeyboardClose:()=>c,setKeyboardOpen:()=>b,startKeyboardAssist:()=>h,trackViewportChanges:()=>y});const s="ionKeyboardDidShow",o="ionKeyboardDidHide";let a={},d={},r=!1;const n=()=>{a={},d={},r=!1},h=e=>{p(e),e.visualViewport&&(d=D(e.visualViewport),e.visualViewport.onresize=()=>{y(e),g()||l(e)?b(e):u(e)&&c(e)})},p=e=>{e.addEventListener("keyboardDidShow",(t=>b(e,t))),e.addEventListener("keyboardDidHide",(()=>c(e)))},b=(e,t)=>{w(e,t),r=!0},c=e=>{f(e),r=!1},g=()=>{const e=(a.height-d.height)*d.scale;return!r&&a.width===d.width&&e>150},l=e=>r&&!u(e),u=e=>r&&d.height===e.innerHeight,w=(e,t)=>{const i=t?t.keyboardHeight:e.innerHeight-d.height,o=new CustomEvent(s,{detail:{keyboardHeight:i}});e.dispatchEvent(o)},f=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},y=e=>{a=Object.assign({},d),d=D(e.visualViewport)},D=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);
//# sourceMappingURL=573.7250b563.chunk.js.map