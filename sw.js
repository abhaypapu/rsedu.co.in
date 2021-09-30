(()=>{"use strict";var e={895:()=>{try{self["workbox:cacheable-response:6.1.5"]&&_()}catch(e){}},768:(e,t,s)=>{s.r(t),s.d(t,{CacheableResponse:()=>a,CacheableResponsePlugin:()=>n}),s(524),s(125),s(119),s(120),s(895);class a{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}class n{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new a(e)}}},980:(e,t,s)=>{s.d(t,{Q:()=>a}),s(913);class a{constructor(e,t,{onupgradeneeded:s,onversionchange:a}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=s,this._onversionchange=a||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise(((e,t)=>{let s=!1;setTimeout((()=>{s=!0,t(new Error("The open request was blocked and timed out"))}),this.OPEN_TIMEOUT);const a=indexedDB.open(this._name,this._version);a.onerror=()=>t(a.error),a.onupgradeneeded=e=>{s?(a.transaction.abort(),a.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},a.onsuccess=()=>{const t=a.result;s?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}})),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map((e=>e.key))}async getAllMatching(e,{index:t,query:s=null,direction:a="next",count:n,includeKeys:r=!1}={}){return await this.transaction([e],"readonly",((i,c)=>{const o=i.objectStore(e),h=t?o.index(t):o,l=[],u=h.openCursor(s,a);u.onsuccess=()=>{const e=u.result;e?(l.push(r?e:e.value),n&&l.length>=n?c(l):e.continue()):c(l)}}))}async transaction(e,t,s){return await this.open(),await new Promise(((a,n)=>{const r=this._db.transaction(e,t);r.onabort=()=>n(r.error),r.oncomplete=()=>a(),s(r,(e=>a(e)))}))}async _call(e,t,s,...a){return await this.transaction([t],s,((s,n)=>{const r=s.objectStore(t),i=r[e].apply(r,a);i.onsuccess=()=>n(i.result)}))}close(){this._db&&(this._db.close(),this._db=null)}}a.prototype.OPEN_TIMEOUT=2e3;const n={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(n))for(const s of t)s in IDBObjectStore.prototype&&(a.prototype[s]=async function(t,...a){return await this._call(s,t,e,...a)})},259:(e,t,s)=>{s.d(t,{B:()=>a}),s(913);class a{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}},125:(e,t,s)=>{s.d(t,{V:()=>a}),s(913);class a extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}},524:(e,t,s)=>{s.d(t,{h:()=>a}),s(125),s(913);const a=null},594:(e,t,s)=>{function a(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}async function n(e,t,s,n){const r=a(t.url,s);if(t.url===r)return e.match(t,n);const i={...n,ignoreSearch:!0},c=await e.keys(t,i);for(const t of c)if(r===a(t.url,s))return e.match(t,n)}s.d(t,{F:()=>n}),s(913)},536:(e,t,s)=>{s.d(t,{x:()=>r}),s(913);const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),r={updateDetails:e=>{(e=>{for(const t of Object.keys(a))e(t)})((t=>{"string"==typeof e[t]&&(a[t]=e[t])}))},getGoogleAnalyticsName:e=>e||n(a.googleAnalytics),getPrecacheName:e=>e||n(a.precache),getPrefix:()=>a.prefix,getRuntimeName:e=>e||n(a.runtime),getSuffix:()=>a.suffix}},123:(e,t,s)=>{let a;function n(){if(void 0===a){const e=new Response("");if("body"in e)try{new Response(e.body),a=!0}catch(e){a=!1}a=!1}return a}s.d(t,{x:()=>n}),s(913)},10:(e,t,s)=>{s.d(t,{q:()=>a}),s(913);const a=async e=>{await new Promise(((t,s)=>{const a=indexedDB.deleteDatabase(e);a.onerror=()=>{s(a.error)},a.onblocked=()=>{s(new Error("Delete blocked"))},a.onsuccess=()=>{t()}}))}},327:(e,t,s)=>{function a(e){e.then((()=>{}))}s.d(t,{f:()=>a}),s(913)},632:(e,t,s)=>{s.d(t,{Y:()=>n}),s(120);var a=s(565);async function n(){for(const e of a.f)await e()}s(913)},119:(e,t,s)=>{s.d(t,{C:()=>a}),s(913);const a=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"")},120:(e,t,s)=>{s.d(t,{k:()=>a}),s(913);const a=null},902:(e,t,s)=>{function a(e){return new Promise((t=>setTimeout(t,e)))}s.d(t,{V:()=>a}),s(913)},392:(e,t,s)=>{function a(e,t){const s=t();return e.waitUntil(s),s}s.d(t,{A:()=>a}),s(913)},913:()=>{try{self["workbox:core:6.1.5"]&&_()}catch(e){}},194:(e,t,s)=>{s.d(t,{S:()=>r});var a=s(123),n=s(125);async function r(e,t){let s=null;if(e.url&&(s=new URL(e.url).origin),s!==self.location.origin)throw new n.V("cross-origin-copy-response",{origin:s});const r=e.clone(),i={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},c=t?t(i):i,o=(0,a.x)()?r.body:await r.blob();return new Response(o,c)}s(913)},659:(e,t,s)=>{s.r(t),s.d(t,{_private:()=>a,cacheNames:()=>x,clientsClaim:()=>C,copyResponse:()=>b.S,registerQuotaErrorCallback:()=>n.t,setCacheNameDetails:()=>k,skipWaiting:()=>U});var a={};s.r(a),s.d(a,{DBWrapper:()=>d.Q,Deferred:()=>p.B,WorkboxError:()=>v.V,assert:()=>r.h,cacheMatchIgnoreParams:()=>c.F,cacheNames:()=>i.x,canConstructReadableStream:()=>h,canConstructResponseFromBodyStream:()=>l.x,deleteDatabase:()=>f.q,dontWaitFor:()=>u.f,executeQuotaErrorCallbacks:()=>g.Y,getFriendlyURL:()=>w.C,logger:()=>m.k,resultingClientExists:()=>_,timeout:()=>y.V,waitUntil:()=>R.A});var n=s(303),r=s(524),i=s(536),c=s(594);let o;function h(){if(void 0===o)try{new ReadableStream({start(){}}),o=!0}catch(e){o=!1}return o}s(913);var l=s(123),u=s(327),d=s(980),p=s(259),f=s(10),g=s(632),w=s(119),m=s(120),y=s(902);async function _(e){if(!e)return;let t=await self.clients.matchAll({type:"window"});const s=new Set(t.map((e=>e.id)));let a;const n=performance.now();for(;performance.now()-n<2e3&&(t=await self.clients.matchAll({type:"window"}),a=t.find((t=>e?t.id===e:!s.has(t.id))),!a);)await(0,y.V)(100);return a}var R=s(392),v=s(125);const x={get googleAnalytics(){return i.x.getGoogleAnalyticsName()},get precache(){return i.x.getPrecacheName()},get prefix(){return i.x.getPrefix()},get runtime(){return i.x.getRuntimeName()},get suffix(){return i.x.getSuffix()}};var b=s(194);function C(){self.addEventListener("activate",(()=>self.clients.claim()))}function k(e){i.x.updateDetails(e)}function U(){self.skipWaiting()}},565:(e,t,s)=>{s.d(t,{f:()=>a}),s(913);const a=new Set},303:(e,t,s)=>{s.d(t,{t:()=>n}),s(120),s(524);var a=s(565);function n(e){a.f.add(e)}s(913)},550:()=>{try{self["workbox:expiration:6.1.5"]&&_()}catch(e){}},483:(e,t,s)=>{s.r(t),s.d(t,{CacheExpiration:()=>l,ExpirationPlugin:()=>p}),s(524);var a=s(327),n=(s(120),s(125)),r=s(980),i=s(10);s(550);const c="cache-entries",o=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class h{constructor(e){this._cacheName=e,this._db=new r.Q("workbox-expiration",1,{onupgradeneeded:e=>this._handleUpgrade(e)})}_handleUpgrade(e){const t=e.target.result.createObjectStore(c,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(0,i.q)(this._cacheName)}async setTimestamp(e,t){const s={url:e=o(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)};await this._db.put(c,s)}async getTimestamp(e){return(await this._db.get(c,this._getId(e))).timestamp}async expireEntries(e,t){const s=await this._db.transaction(c,"readwrite",((s,a)=>{const n=s.objectStore(c).index("timestamp").openCursor(null,"prev"),r=[];let i=0;n.onsuccess=()=>{const s=n.result;if(s){const a=s.value;a.cacheName===this._cacheName&&(e&&a.timestamp<e||t&&i>=t?r.push(s.value):i++),s.continue()}else a(r)}})),a=[];for(const e of s)await this._db.delete(c,e.id),a.push(e.url);return a}_getId(e){return this._cacheName+"|"+o(e)}}class l{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new h(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,(0,a.f)(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){return!!this._maxAgeSeconds&&await this._timestampModel.getTimestamp(e)<Date.now()-1e3*this._maxAgeSeconds}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}var u=s(536),d=(s(119),s(303));class p{constructor(e={}){this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const r=this._isResponseDateFresh(n),i=this._getCacheExpiration(s);(0,a.f)(i.expireEntries());const c=i.updateTimestamp(t.url);if(e)try{e.waitUntil(c)}catch(e){}return r?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(0,d.t)((()=>this.deleteCacheAndMetadata()))}_getCacheExpiration(e){if(e===u.x.getRuntimeName())throw new n.V("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new l(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}},977:()=>{try{self["workbox:precaching:6.1.5"]&&_()}catch(e){}},340:(e,t,s)=>{s.r(t),s.d(t,{PrecacheController:()=>d,PrecacheFallbackPlugin:()=>U,PrecacheRoute:()=>y,PrecacheStrategy:()=>u,addPlugins:()=>g,addRoute:()=>_,cleanupOutdatedCaches:()=>R,createHandlerBoundToURL:()=>v,getCacheKeyForURL:()=>x,matchPrecache:()=>b,precache:()=>C,precacheAndRoute:()=>k}),s(524);var a=s(536),n=(s(120),s(125)),r=s(392);function i(e){if(!e)throw new n.V("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new n.V("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(s,location.href),r=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:r.href}}s(977);class c{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class o{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s):e},this._precacheController=e}}var h=s(194),l=(s(119),s(951));class u extends l._{constructor(e={}){e.cacheName=a.x.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(u.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;if(!this._fallbackToNetwork)throw new n.V("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s=await t.fetch(e),s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new n.V("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==u.copyRedirectedCacheableResponsesPlugin&&(a===u.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(u.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}u.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},u.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await(0,h.S)(e):e};class d{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new u({cacheName:a.x.getPrecacheName(e),plugins:[...t,new o({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:a}=i(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new n.V("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new n.V("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return(0,r.A)(e,(async()=>{const t=new c;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return(0,r.A)(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new n.V("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params={cacheKey:t,...s.params},this.strategy.handle(s))}}let p;const f=()=>(p||(p=new d),p);function g(e){f().strategy.plugins.push(...e)}var w=s(917),m=s(188);class y extends m.A{constructor(e,t){super((({request:s})=>{const a=e.getURLsToCacheKeys();for(const e of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:a=!0,urlManipulation:n}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(a){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(n){const e=n({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=a.get(e);if(t)return{cacheKey:t}}}),e.strategy)}}function _(e){const t=f(),s=new y(t,e);(0,w.X)(s)}function R(){self.addEventListener("activate",(e=>{const t=a.x.getPrecacheName();e.waitUntil((async(e,t="-precache-")=>{const s=(await self.caches.keys()).filter((s=>s.includes(t)&&s.includes(self.registration.scope)&&s!==e));return await Promise.all(s.map((e=>self.caches.delete(e)))),s})(t).then((e=>{})))}))}function v(e){return f().createHandlerBoundToURL(e)}function x(e){return f().getCacheKeyForURL(e)}function b(e){return f().matchPrecache(e)}function C(e){f().precache(e)}function k(e,t){C(e),_(t)}class U{constructor({fallbackURL:e,precacheController:t}){this.handlerDidError=()=>this._precacheController.matchPrecache(this._fallbackURL),this._fallbackURL=e,this._precacheController=t||f()}}},989:(e,t,s)=>{s.d(t,{t:()=>n}),s(524),s(120);var a=s(188);s(80);class n extends a.A{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}},188:(e,t,s)=>{s.d(t,{A:()=>r}),s(524);var a=s(505),n=s(179);s(80);class r{constructor(e,t,s=a.g){this.handler=(0,n.M)(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=(0,n.M)(e)}}},491:(e,t,s)=>{s.d(t,{F:()=>i}),s(524),s(119);var a=s(505),n=(s(120),s(179)),r=s(125);s(80);class i{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const a=s.origin===location.origin,{params:n,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return;let o;try{o=i.handle({url:s,request:e,event:t,params:n})}catch(e){o=Promise.reject(e)}const h=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async a=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:n})}catch(e){a=e}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw a}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){const n=this._routes.get(s.method)||[];for(const r of n){let n;const i=r.match({url:e,sameOrigin:t,request:s,event:a});if(i)return n=i,(Array.isArray(i)&&0===i.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(n=void 0),{route:r,params:n}}return{}}setDefaultHandler(e,t=a.g){this._defaultHandlerMap.set(t,(0,n.M)(e))}setCatchHandler(e){this._catchHandler=(0,n.M)(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new r.V("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new r.V("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}},80:()=>{try{self["workbox:routing:6.1.5"]&&_()}catch(e){}},301:(e,t,s)=>{s.r(t),s.d(t,{NavigationRoute:()=>n,RegExpRoute:()=>r.t,Route:()=>a.A,Router:()=>c.F,registerRoute:()=>i.X,setCatchHandler:()=>h,setDefaultHandler:()=>l}),s(524),s(120);var a=s(188);s(80);class n extends a.A{constructor(e,{allowlist:t=[/./],denylist:s=[]}={}){super((e=>this._match(e)),e),this._allowlist=t,this._denylist=s}_match({url:e,request:t}){if(t&&"navigate"!==t.mode)return!1;const s=e.pathname+e.search;for(const e of this._denylist)if(e.test(s))return!1;return!!this._allowlist.some((e=>e.test(s)))}}var r=s(989),i=s(917),c=s(491),o=s(486);function h(e){(0,o.u)().setCatchHandler(e)}function l(e){(0,o.u)().setDefaultHandler(e)}},917:(e,t,s)=>{s.d(t,{X:()=>c}),s(120);var a=s(125),n=s(188),r=s(989),i=s(486);function c(e,t,s){let c;if("string"==typeof e){const a=new URL(e,location.href),r=({url:e})=>e.href===a.href;c=new n.A(r,t,s)}else if(e instanceof RegExp)c=new r.t(e,t,s);else if("function"==typeof e)c=new n.A(e,t,s);else{if(!(e instanceof n.A))throw new a.V("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});c=e}return(0,i.u)().registerRoute(c),c}s(80)},505:(e,t,s)=>{s.d(t,{g:()=>a}),s(80);const a="GET"},486:(e,t,s)=>{s.d(t,{u:()=>r});var a=s(491);let n;s(80);const r=()=>(n||(n=new a.F,n.addFetchListener(),n.addCacheListener()),n)},179:(e,t,s)=>{s.d(t,{M:()=>a}),s(524),s(80);const a=e=>e&&"object"==typeof e?e:{handle:e}},951:(e,t,s)=>{s.d(t,{_:()=>i});var a=s(536),n=s(125),r=(s(120),s(119),s(333));s(873);class i{constructor(e={}){this.cacheName=a.x.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new r.G(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(a=await this._handle(t,e),!a||"error"===a.type)throw new n.V("no-response",{url:t.url})}catch(n){for(const r of e.iterateCallbacks("handlerDidError"))if(a=await r({error:n,event:s,request:t}),a)break;if(!a)throw n}for(const n of e.iterateCallbacks("handlerWillRespond"))a=await n({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let n,r;try{n=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){r=e}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:r}),t.destroy(),r)throw r}}},333:(e,t,s)=>{s.d(t,{G:()=>l}),s(524);var a=s(594),n=s(259),r=s(632),i=s(119),c=(s(120),s(902)),o=s(125);function h(e){return"string"==typeof e?new Request(e):e}s(873);class l{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new n.B,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=h(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){throw new o.V("plugin-error-request-will-fetch",{thrownError:e})}const n=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:n,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:a.clone(),request:n.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=h(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,r=await this.getCacheKey(t,"read"),i={...n,cacheName:a};s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=h(e);await(0,c.V)(0);const n=await this.getCacheKey(s,"write");if(!t)throw new o.V("cache-put-with-no-response",{url:(0,i.C)(n.url)});const l=await this._ensureResponseSafeToCache(t);if(!l)return!1;const{cacheName:u,matchOptions:d}=this._strategy,p=await self.caches.open(u),f=this.hasCallback("cacheDidUpdate"),g=f?await(0,a.F)(p,n.clone(),["__WB_REVISION__"],d):null;try{await p.put(n,f?l.clone():l)}catch(e){throw"QuotaExceededError"===e.name&&await(0,r.Y)(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:u,oldResponse:g,newResponse:l.clone(),request:n,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=h(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n={...a,state:s};return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}},873:()=>{try{self["workbox:strategies:6.1.5"]&&_()}catch(e){}},101:(e,t,s)=>{s.r(t),s.d(t,{CacheFirst:()=>r,CacheOnly:()=>i,NetworkFirst:()=>o,NetworkOnly:()=>l,StaleWhileRevalidate:()=>u,Strategy:()=>n._,StrategyHandler:()=>d.G}),s(524),s(120);var a=s(125),n=s(951);s(119),s(873);class r extends n._{async _handle(e,t){let s,n=await t.cacheMatch(e);if(n);else try{n=await t.fetchAndCachePut(e)}catch(e){s=e}if(!n)throw new a.V("no-response",{url:e.url,error:s});return n}}class i extends n._{async _handle(e,t){const s=await t.cacheMatch(e);if(!s)throw new a.V("no-response",{url:e.url});return s}}const c={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class o extends n._{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(c),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const s=[],n=[];let r;if(this._networkTimeoutSeconds){const{id:a,promise:i}=this._getTimeoutPromise({request:e,logs:s,handler:t});r=a,n.push(i)}const i=this._getNetworkPromise({timeoutId:r,request:e,logs:s,handler:t});n.push(i);const c=await t.waitUntil((async()=>await t.waitUntil(Promise.race(n))||await i)());if(!c)throw new a.V("no-response",{url:e.url});return c}_getTimeoutPromise({request:e,logs:t,handler:s}){let a;return{promise:new Promise((t=>{a=setTimeout((async()=>{t(await s.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:a}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,handler:a}){let n,r;try{r=await a.fetchAndCachePut(t)}catch(e){n=e}return e&&clearTimeout(e),!n&&r||(r=await a.cacheMatch(t)),r}}var h=s(902);class l extends n._{constructor(e={}){super(e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){let s,n;try{const s=[t.fetch(e)];if(this._networkTimeoutSeconds){const e=(0,h.V)(1e3*this._networkTimeoutSeconds);s.push(e)}if(n=await Promise.race(s),!n)throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(e){s=e}if(!n)throw new a.V("no-response",{url:e.url,error:s});return n}}class u extends n._{constructor(e){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(c)}async _handle(e,t){const s=t.fetchAndCachePut(e).catch((()=>{}));let n,r=await t.cacheMatch(e);if(r);else try{r=await s}catch(e){n=e}if(!r)throw new a.V("no-response",{url:e.url,error:n});return r}}var d=s(333)}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,s),r.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=s(301),t=s(101),a=s(768),n=s(483),r=s(340),i=s(659);const c=JSON.parse('["research3\\\\.godaddysites\\\\.com(?:/.*)?/ola/services/.*","research3\\\\.godaddysites\\\\.com/ola/meetings/.*","/api/","https://api\\\\.ola\\\\.godaddy\\\\.com","https://235b5400-7ea3-42df-9301-ad17d800978f\\\\.onlinestore\\\\.godaddy\\\\.com","/t/1/tl/event","google-analytics\\\\.com/collect","calendar\\\\.apps\\\\.(dev-|test-)?secureserver\\\\.net"]').map((e=>new RegExp(e))),o=JSON.parse('["research3\\\\.godaddysites\\\\.com(?:/.*)?/f/.*","https://blog\\\\.apps\\\\.secureserver\\\\.net/v1/website/235b5400-7ea3-42df-9301-ad17d800978f/feed/post/","https://blog\\\\.apps\\\\.secureserver\\\\.net/v1/website/235b5400-7ea3-42df-9301-ad17d800978f/feed"]').map((e=>new RegExp(e))),h=JSON.parse('["/contact-us","/blog","/"]').map((e=>({url:e,revision:"1632923171937"})));self.addEventListener("activate",(function(e){e.waitUntil(caches.keys().then((function(e){return Promise.all(e.filter((e=>e.startsWith("research3.godaddysites.com-"))).map((e=>caches.delete(e))))})))})),self.addEventListener("install",(()=>{self.skipWaiting()})),(0,e.registerRoute)((({url:e})=>c.some((t=>t.test(e.href)))),new t.NetworkOnly),(0,r.precache)(h,{directoryIndex:null,cleanUrls:!1}),(0,e.registerRoute)((({url:e})=>o.some((t=>t.test(e.href)))),new t.NetworkFirst({cacheName:"network-first",plugins:[new a.CacheableResponsePlugin({statuses:[200]})]})),(0,e.registerRoute)((({request:e})=>"style"===e.destination||"script"===e.destination),new t.StaleWhileRevalidate({cacheName:"static-resources",plugins:[new a.CacheableResponsePlugin({statuses:[200]})]})),(0,e.registerRoute)((({url:e})=>"https://fonts.googleapis.com"===e.origin),new t.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),(0,e.registerRoute)((({url:e})=>"https://fonts.gstatic.com"===e.origin),new t.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new a.CacheableResponsePlugin({statuses:[0,200]}),new n.ExpirationPlugin({maxAgeSeconds:31536e3,maxEntries:30})]})),(0,e.registerRoute)((({request:e})=>"image"===e.destination||"font"===e.destination),new t.CacheFirst({cacheName:"images-fonts",plugins:[new a.CacheableResponsePlugin({statuses:[200]}),new n.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3})]})),(0,i.clientsClaim)()})()})();