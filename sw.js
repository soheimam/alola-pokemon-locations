var serviceWorkerOption = {"assets":["/alola-pokemon-locations/26d3d92f0e15bd8289eb531f244c76ed.png","/alola-pokemon-locations/d68fedc80d1f46ee61e71131b45806ef.png","/alola-pokemon-locations/style.css","/alola-pokemon-locations/app.js","/alola-pokemon-locations/images/icons/icon-144x144.png","/alola-pokemon-locations/images/icons/icon-128x128.png","/alola-pokemon-locations/images/icons/icon-192x192.png","/alola-pokemon-locations/images/icons/icon-72x72.png","/alola-pokemon-locations/images/icons/icon-96x96.png","/alola-pokemon-locations/images/icons/icon-152x152.png","/alola-pokemon-locations/images/icons/icon-384x384.png","/alola-pokemon-locations/images/icons/icon-512x512.png"]};
        
        !function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){(function(t){var n=t.serviceWorkerOption.assets,e=(new Date).toISOString(),r=[].concat(function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}(n),["./"]);r=r.map(function(n){return new URL(n,t.location).toString()}),self.addEventListener("install",function(n){n.waitUntil(t.caches.open(e).then(function(t){return t.addAll(r)}).then(function(){0}).catch(function(t){throw console.error(t),t}))}),self.addEventListener("activate",function(n){n.waitUntil(t.caches.keys().then(function(n){return Promise.all(n.map(function(n){return 0===n.indexOf(e)?null:t.caches.delete(n)}))}))}),self.addEventListener("message",function(t){switch(t.data.action){case"skipWaiting":self.skipWaiting&&(self.skipWaiting(),self.clients.claim())}}),self.addEventListener("fetch",function(n){var r=n.request;if("GET"===r.method){var o=new URL(r.url);if(o.origin===location.origin){var i=t.caches.match(r).then(function(o){return o||fetch(r).then(function(n){if(!n||!n.ok)return n;var o=n.clone();return t.caches.open(e).then(function(t){return t.put(r,o)}).then(function(){0}),n}).catch(function(){return"navigate"===n.request.mode?t.caches.match("./"):null})});n.respondWith(i)}}})}).call(this,e(1))},function(t,n){var e,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":r(window))&&(e=window)}t.exports=e}]);
//# sourceMappingURL=sw.js.map