if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,b)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let r={};const d=e=>a(e,n),s={module:{uri:n},exports:r,require:d};i[n]=Promise.all(c.map((e=>s[e]||d(e)))).then((e=>(b(...e),r)))}}define(["./workbox-0300ce97"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/public/images/favicon.png",revision:"bab4a1445bcb7a86cb13a8bbeba4da6a"},{url:"/public/images/hero-image_2-large.jpg",revision:"0db76ac524f1f284fa90d90abe5540e6"},{url:"/public/images/hero-image_2-small.jpg",revision:"0254f655f480d1a1b29c9849ebdcbae6"},{url:"/public/images/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"/public/images/logo1.png",revision:"353a38623bb714eb0090860bd79fa2e8"},{url:"2.bundle.js",revision:"b4b2b17aa227b04c0216aa24d49be461"},{url:"247.bundle.js",revision:"ec7e1ed58e8e9fe3311f0b85fbceb82e"},{url:"247.bundle.js.LICENSE.txt",revision:"942970bce837881425b92400c78dc2d8"},{url:"287.bundle.js",revision:"1c36a1058c83267956ab0ac82e22be76"},{url:"287.bundle.js.LICENSE.txt",revision:"942970bce837881425b92400c78dc2d8"},{url:"805.bundle.js",revision:"e6e8276c310557af74e900e6d108c1a1"},{url:"805.bundle.js.LICENSE.txt",revision:"942970bce837881425b92400c78dc2d8"},{url:"858.bundle.js",revision:"e85a9160ef554ffb4dbac5121a88892a"},{url:"858.bundle.js.LICENSE.txt",revision:"942970bce837881425b92400c78dc2d8"},{url:"946.bundle.js",revision:"0052e48ef81571a433e619f3a94f83d3"},{url:"app.webmanifest",revision:"b9123e0a23d5b850eb91adf94f7a5d99"},{url:"app~0364721a.bundle.js",revision:"bf02af564070f4c255a0c77267001a72"},{url:"app~04e4ec69.bundle.js",revision:"59a4388a27827636906adce525c9d2de"},{url:"app~56591076.bundle.js",revision:"2dc3ab9b35089550d1714cce66714ad2"},{url:"app~56591076.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~7bd12dde.bundle.js",revision:"a5c8cb13c78def1d26a0ad92f8494d1b"},{url:"app~7bd12dde.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"0801fa1b22f6afb4787dcf5e7079cfb6"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"7c945804d76e1df6b8ffa93021c86838"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"icons/favicon.png",revision:"bab4a1445bcb7a86cb13a8bbeba4da6a"},{url:"icons/icon-128x128.png",revision:"be71e3ca8cde2a5668d76e901296fa14"},{url:"icons/icon-144x144.png",revision:"6fc31f8604801fd61b59ee542187810d"},{url:"icons/icon-152x152.png",revision:"f6f21f558ae60e58b5779b71b4fa48c5"},{url:"icons/icon-192x192.png",revision:"d871c9cbf137bf46dfac33b47ab5cfd2"},{url:"icons/icon-384x384.png",revision:"0dfb5f24ee16b3cde4cf5f9d06cdc0ef"},{url:"icons/icon-512x512.png",revision:"0b391d413441064559de647a4c97be9e"},{url:"icons/icon-72x72.png",revision:"776a0d57e931f415d49fc19b58f5e02b"},{url:"icons/icon-96x96.png",revision:"14b5cee57272172e9a619bed407eeecc"},{url:"images/hero-image_2-large.jpg",revision:"0db76ac524f1f284fa90d90abe5540e6"},{url:"images/hero-image_2-small.jpg",revision:"0254f655f480d1a1b29c9849ebdcbae6"},{url:"images/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"images/logo1-large.jpg",revision:"8e20d4459d590cfda1452a01222bcc6a"},{url:"images/logo1-small.jpg",revision:"1f18239e9ac06e1f883b2b2dd997957c"},{url:"images/logo1.png",revision:"353a38623bb714eb0090860bd79fa2e8"},{url:"index.html",revision:"d4656b8006016c90afc7ab656ed0858c"}],{}),e.registerRoute(/^https:\/\/restaurant-api.dicoding.dev\//,new e.StaleWhileRevalidate({cacheName:"API-Cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
