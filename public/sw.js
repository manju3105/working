if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"91d7f78b5b4003c8"},{url:"/_next/static/chunks/main-a3406a5be3e50d3f.js",revision:"a3406a5be3e50d3f"},{url:"/_next/static/chunks/pages/_app-8b8a9c480b6d8bc4.js",revision:"8b8a9c480b6d8bc4"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"2280fa386d040b66"},{url:"/_next/static/chunks/pages/about-888d8ece7139a815.js",revision:"888d8ece7139a815"},{url:"/_next/static/chunks/pages/blog-84b002330adaf95c.js",revision:"84b002330adaf95c"},{url:"/_next/static/chunks/pages/blogpost/%5Bslug%5D-23f1be333a79da3f.js",revision:"23f1be333a79da3f"},{url:"/_next/static/chunks/pages/contact-60baa3d89f1551bc.js",revision:"60baa3d89f1551bc"},{url:"/_next/static/chunks/pages/index-d3e7f918b35a7168.js",revision:"d3e7f918b35a7168"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-69bfa6990bb9e155.js",revision:"69bfa6990bb9e155"},{url:"/_next/static/css/0ff159014fcca750.css",revision:"0ff159014fcca750"},{url:"/_next/static/css/658843e151a6049a.css",revision:"658843e151a6049a"},{url:"/_next/static/css/8aff753f88411d95.css",revision:"8aff753f88411d95"},{url:"/_next/static/css/ae3c09ef5fbb04c0.css",revision:"ae3c09ef5fbb04c0"},{url:"/_next/static/css/e3e8ae9725dbe926.css",revision:"e3e8ae9725dbe926"},{url:"/_next/static/lLqC-9sSaWKbUTyhZ8QJD/_buildManifest.js",revision:"fcb2dd8b74de19ccf11e716fdedade88"},{url:"/_next/static/lLqC-9sSaWKbUTyhZ8QJD/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/lLqC-9sSaWKbUTyhZ8QJD/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/homeimg.jfif",revision:"0d25a50c65374c54511f4b1fcf75f8ac"},{url:"/icon-192x192.png",revision:"7ba4e4acf5e72194f03b36fbb3fa3719"},{url:"/icon-256x256.png",revision:"29f9caf78c412fb201ce7622e93951b1"},{url:"/icon-384x384.png",revision:"0baa03fc629fc962a80e348a3ca22ae5"},{url:"/icon-512x512.png",revision:"70b75d57c58a026aa1513bee63d5f992"},{url:"/manifest.json",revision:"fda90b389e61583b2f104508258b87f9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
