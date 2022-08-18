try{window.performance.mark("async-scroll-interceptor.js:eval-start")}catch(e){}(window.webpackJsonp=window.webpackJsonp||[]).push([["async-scroll-interceptor"],{fNlx:function(e,t,n){"use strict";var r=n("fiWp"),o=n.n(r);t.a=new o.a},fiWp:function(e,t,n){"use strict";var r,o="object"==typeof Reflect?Reflect:null,i=o&&"function"==typeof o.apply?o.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!=e};function f(){f.init.call(this)}e.exports=f,f.EventEmitter=f,f.prototype._events=void 0,f.prototype._eventsCount=0,f.prototype._maxListeners=void 0;var u=10;function l(e){return void 0===e._maxListeners?f.defaultMaxListeners:e._maxListeners}function c(e,t,n,r){var o,i,s
;if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),s=i[t]),void 0===s)s=i[t]=n,++e._eventsCount;else if("function"==typeof s?s=i[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(o=l(e))>0&&s.length>o&&!s.warned){s.warned=!0;var f=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");f.name="MaxListenersExceededWarning",f.emitter=e,f.type=t,f.count=s.length,function(e){console&&console.warn&&console.warn(e)}(f)}return e}function a(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,i(this.listener,this.target,e))}function p(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,
listener:n},o=a.bind(r);return o.listener=n,r.wrapFn=o,o}function v(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):y(o,o.length)}function h(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function y(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}Object.defineProperty(f,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");u=e}}),f.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},
f.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},f.prototype.getMaxListeners=function(){return l(this)},f.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var f=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw f.context=s,f}var u=o[e];if(void 0===u)return!1;if("function"==typeof u)i(u,this,t);else{var l=u.length,c=y(u,l);for(n=0;n<l;++n)i(c[n],this,t)}return!0},f.prototype.addListener=function(e,t){return c(this,e,t,!1)},f.prototype.on=f.prototype.addListener,f.prototype.prependListener=function(e,t){return c(this,e,t,!0)},f.prototype.once=function(e,t){
if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,p(this,e,t)),this},f.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,p(this,e,t)),this},f.prototype.removeListener=function(e,t){var n,r,o,i,s;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){s=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),
1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},f.prototype.off=f.prototype.removeListener,f.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},f.prototype.listeners=function(e){return v(this,e,!0)},f.prototype.rawListeners=function(e){return v(this,e,!1)},f.listenerCount=function(e,t){
return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},f.prototype.listenerCount=h,f.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},oWrC:function(e,t,n){"use strict";n.r(t),n.d(t,"ScrollInterceptorWrapper",(function(){return f}));var r=n("q1tI"),o=n("3tO9"),i=n.n(o);const s=e=>{Object(r.useEffect)((()=>{if(null==e)return()=>{};const t=()=>{Object.assign(e.style,{overflowX:"auto",overflowY:"auto"})},r=()=>{Object.assign(e.style,{overflowX:"hidden",overflowY:"hidden"})},o=(t={x:0,y:0})=>{Object.assign(e,{scrollLeft:t.x,scrollTop:t.y})},s=e=>{(e=>{Object(n("q2+m").a)({meta:{id:"scrollInterceptor",packageName:"jiraScrollInterceptor",teamName:"jlove-makkuro"},attributes:i()({},e)})})({error:e})};return n("fNlx").a.on("show",t),n("fNlx").a.on("hide",r),n("fNlx").a.on("scrollTo",o),n("fNlx").a.on("error",s),()=>{n("fNlx").a.off("show",t),n("fNlx").a.off("hide",r),n("fNlx").a.off("scrollTo",o),n("fNlx").a.off("error",s)}}),[e])
},f=({scrollEl:e})=>(s(e),null)}}]);try{window.__jsEvalStop("async-scroll-interceptor.js")}catch(e){}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-scroll-interceptor.881460cc70b55a0e5635.8.js.map