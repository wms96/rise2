if(!self.define){let e,s={};const t=(t,i)=>(t=new URL(t+".js",i).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const o=e=>t(e,r),l={module:{uri:r},exports:c,require:o};s[r]=Promise.all(i.map((e=>l[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-e904d115"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/static/css/client.b60dec79.css",revision:null},{url:"/static/js/client.c4fe9be5.js",revision:null},{url:"/static/js/client.c4fe9be5.js.LICENSE.txt",revision:"f4b5a773f215768a06cc098186327fd0"},{url:"/static/media/thin_arrow_right.5d3a9de6.svg",revision:"5d3a9de618099abf98c2c325d22c2871"}],{}),e.registerRoute(/\/(images|assets|admin-assets)\//,new e.NetworkFirst,"GET"),e.registerRoute(/\/api\//,new e.NetworkOnly,"GET"),e.registerRoute(/\/ajax\/payment_form_settings/,new e.NetworkOnly,"GET"),e.registerRoute(/\//,new e.NetworkFirst({networkTimeoutSeconds:10,plugins:[]}),"GET")}));