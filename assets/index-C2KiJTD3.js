(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function _0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Gf={exports:{}},Ro={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function ey(){if(a_)return Ro;a_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Ro.Fragment=t,Ro.jsx=i,Ro.jsxs=i,Ro}var s_;function ny(){return s_||(s_=1,Gf.exports=ey()),Gf.exports}var N=ny(),Vf={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function iy(){if(r_)return le;r_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function S(U,$,xt){this.props=U,this.context=$,this.refs=R,this.updater=xt||M}S.prototype.isReactComponent={},S.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=S.prototype;function G(U,$,xt){this.props=U,this.context=$,this.refs=R,this.updater=xt||M}var O=G.prototype=new v;O.constructor=G,E(O,S.prototype),O.isPureReactComponent=!0;var D=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function H(U,$,xt,St,Ct,it){return xt=it.ref,{$$typeof:r,type:U,key:$,ref:xt!==void 0?xt:null,props:it}}function Y(U,$){return H(U.type,$,void 0,void 0,void 0,U.props)}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function w(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(xt){return $[xt]})}var B=/\/+/g;function lt(U,$){return typeof U=="object"&&U!==null&&U.key!=null?w(""+U.key):$.toString(36)}function ct(){}function ht(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(ct,ct):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function dt(U,$,xt,St,Ct){var it=typeof U;(it==="undefined"||it==="boolean")&&(U=null);var pt=!1;if(U===null)pt=!0;else switch(it){case"bigint":case"string":case"number":pt=!0;break;case"object":switch(U.$$typeof){case r:case t:pt=!0;break;case g:return pt=U._init,dt(pt(U._payload),$,xt,St,Ct)}}if(pt)return Ct=Ct(U),pt=St===""?"."+lt(U,0):St,D(Ct)?(xt="",pt!=null&&(xt=pt.replace(B,"$&/")+"/"),dt(Ct,$,xt,"",function(qt){return qt})):Ct!=null&&(C(Ct)&&(Ct=Y(Ct,xt+(Ct.key==null||U&&U.key===Ct.key?"":(""+Ct.key).replace(B,"$&/")+"/")+pt)),$.push(Ct)),1;pt=0;var Mt=St===""?".":St+":";if(D(U))for(var Pt=0;Pt<U.length;Pt++)St=U[Pt],it=Mt+lt(St,Pt),pt+=dt(St,$,xt,it,Ct);else if(Pt=x(U),typeof Pt=="function")for(U=Pt.call(U),Pt=0;!(St=U.next()).done;)St=St.value,it=Mt+lt(St,Pt++),pt+=dt(St,$,xt,it,Ct);else if(it==="object"){if(typeof U.then=="function")return dt(ht(U),$,xt,St,Ct);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return pt}function z(U,$,xt){if(U==null)return U;var St=[],Ct=0;return dt(U,St,"","",function(it){return $.call(xt,it,Ct++)}),St}function K(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(xt){(U._status===0||U._status===-1)&&(U._status=1,U._result=xt)},function(xt){(U._status===0||U._status===-1)&&(U._status=2,U._result=xt)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var q=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function yt(){}return le.Children={map:z,forEach:function(U,$,xt){z(U,function(){$.apply(this,arguments)},xt)},count:function(U){var $=0;return z(U,function(){$++}),$},toArray:function(U){return z(U,function($){return $})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},le.Component=S,le.Fragment=i,le.Profiler=l,le.PureComponent=G,le.StrictMode=s,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,le.__COMPILER_RUNTIME={__proto__:null,c:function(U){return I.H.useMemoCache(U)}},le.cache=function(U){return function(){return U.apply(null,arguments)}},le.cloneElement=function(U,$,xt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var St=E({},U.props),Ct=U.key,it=void 0;if($!=null)for(pt in $.ref!==void 0&&(it=void 0),$.key!==void 0&&(Ct=""+$.key),$)!V.call($,pt)||pt==="key"||pt==="__self"||pt==="__source"||pt==="ref"&&$.ref===void 0||(St[pt]=$[pt]);var pt=arguments.length-2;if(pt===1)St.children=xt;else if(1<pt){for(var Mt=Array(pt),Pt=0;Pt<pt;Pt++)Mt[Pt]=arguments[Pt+2];St.children=Mt}return H(U.type,Ct,void 0,void 0,it,St)},le.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},le.createElement=function(U,$,xt){var St,Ct={},it=null;if($!=null)for(St in $.key!==void 0&&(it=""+$.key),$)V.call($,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(Ct[St]=$[St]);var pt=arguments.length-2;if(pt===1)Ct.children=xt;else if(1<pt){for(var Mt=Array(pt),Pt=0;Pt<pt;Pt++)Mt[Pt]=arguments[Pt+2];Ct.children=Mt}if(U&&U.defaultProps)for(St in pt=U.defaultProps,pt)Ct[St]===void 0&&(Ct[St]=pt[St]);return H(U,it,void 0,void 0,null,Ct)},le.createRef=function(){return{current:null}},le.forwardRef=function(U){return{$$typeof:p,render:U}},le.isValidElement=C,le.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:K}},le.memo=function(U,$){return{$$typeof:d,type:U,compare:$===void 0?null:$}},le.startTransition=function(U){var $=I.T,xt={};I.T=xt;try{var St=U(),Ct=I.S;Ct!==null&&Ct(xt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(yt,q)}catch(it){q(it)}finally{I.T=$}},le.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},le.use=function(U){return I.H.use(U)},le.useActionState=function(U,$,xt){return I.H.useActionState(U,$,xt)},le.useCallback=function(U,$){return I.H.useCallback(U,$)},le.useContext=function(U){return I.H.useContext(U)},le.useDebugValue=function(){},le.useDeferredValue=function(U,$){return I.H.useDeferredValue(U,$)},le.useEffect=function(U,$,xt){var St=I.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(U,$)},le.useId=function(){return I.H.useId()},le.useImperativeHandle=function(U,$,xt){return I.H.useImperativeHandle(U,$,xt)},le.useInsertionEffect=function(U,$){return I.H.useInsertionEffect(U,$)},le.useLayoutEffect=function(U,$){return I.H.useLayoutEffect(U,$)},le.useMemo=function(U,$){return I.H.useMemo(U,$)},le.useOptimistic=function(U,$){return I.H.useOptimistic(U,$)},le.useReducer=function(U,$,xt){return I.H.useReducer(U,$,xt)},le.useRef=function(U){return I.H.useRef(U)},le.useState=function(U){return I.H.useState(U)},le.useSyncExternalStore=function(U,$,xt){return I.H.useSyncExternalStore(U,$,xt)},le.useTransition=function(){return I.H.useTransition()},le.version="19.1.1",le}var o_;function md(){return o_||(o_=1,Vf.exports=iy()),Vf.exports}var ke=md();const ay=_0(ke);var kf={exports:{}},wo={},Xf={exports:{}},jf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function sy(){return l_||(l_=1,(function(r){function t(z,K){var q=z.length;z.push(K);t:for(;0<q;){var yt=q-1>>>1,U=z[yt];if(0<l(U,K))z[yt]=K,z[q]=U,q=yt;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var K=z[0],q=z.pop();if(q!==K){z[0]=q;t:for(var yt=0,U=z.length,$=U>>>1;yt<$;){var xt=2*(yt+1)-1,St=z[xt],Ct=xt+1,it=z[Ct];if(0>l(St,q))Ct<U&&0>l(it,St)?(z[yt]=it,z[Ct]=q,yt=Ct):(z[yt]=St,z[xt]=q,yt=xt);else if(Ct<U&&0>l(it,q))z[yt]=it,z[Ct]=q,yt=Ct;else break t}}return K}function l(z,K){var q=z.sortIndex-K.sortIndex;return q!==0?q:z.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],d=[],g=1,_=null,x=3,M=!1,E=!1,R=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(z){for(var K=i(d);K!==null;){if(K.callback===null)s(d);else if(K.startTime<=z)s(d),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(d)}}function I(z){if(R=!1,D(z),!E)if(i(m)!==null)E=!0,V||(V=!0,lt());else{var K=i(d);K!==null&&dt(I,K.startTime-z)}}var V=!1,H=-1,Y=5,C=-1;function w(){return S?!0:!(r.unstable_now()-C<Y)}function B(){if(S=!1,V){var z=r.unstable_now();C=z;var K=!0;try{t:{E=!1,R&&(R=!1,G(H),H=-1),M=!0;var q=x;try{e:{for(D(z),_=i(m);_!==null&&!(_.expirationTime>z&&w());){var yt=_.callback;if(typeof yt=="function"){_.callback=null,x=_.priorityLevel;var U=yt(_.expirationTime<=z);if(z=r.unstable_now(),typeof U=="function"){_.callback=U,D(z),K=!0;break e}_===i(m)&&s(m),D(z)}else s(m);_=i(m)}if(_!==null)K=!0;else{var $=i(d);$!==null&&dt(I,$.startTime-z),K=!1}}break t}finally{_=null,x=q,M=!1}K=void 0}}finally{K?lt():V=!1}}}var lt;if(typeof O=="function")lt=function(){O(B)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,ht=ct.port2;ct.port1.onmessage=B,lt=function(){ht.postMessage(null)}}else lt=function(){v(B,0)};function dt(z,K){H=v(function(){z(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(z){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var q=x;x=K;try{return z()}finally{x=q}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var q=x;x=z;try{return K()}finally{x=q}},r.unstable_scheduleCallback=function(z,K,q){var yt=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?yt+q:yt):q=yt,z){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=q+U,z={id:g++,callback:K,priorityLevel:z,startTime:q,expirationTime:U,sortIndex:-1},q>yt?(z.sortIndex=q,t(d,z),i(m)===null&&z===i(d)&&(R?(G(H),H=-1):R=!0,dt(I,q-yt))):(z.sortIndex=U,t(m,z),E||M||(E=!0,V||(V=!0,lt()))),z},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(z){var K=x;return function(){var q=x;x=K;try{return z.apply(this,arguments)}finally{x=q}}}})(jf)),jf}var c_;function ry(){return c_||(c_=1,Xf.exports=sy()),Xf.exports}var Wf={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function oy(){if(u_)return Un;u_=1;var r=md();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:d,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,g)},Un.flushSync=function(m){var d=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=g,s.d.f()}},Un.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Un.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Un.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,_=p(g,d.crossOrigin),x=typeof d.integrity=="string"?d.integrity:void 0,M=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Un.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Un.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=p(g,d.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Un.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Un.requestFormReset=function(m){s.d.r(m)},Un.unstable_batchedUpdates=function(m,d){return m(d)},Un.useFormState=function(m,d,g){return h.H.useFormState(m,d,g)},Un.useFormStatus=function(){return h.H.useHostTransitionStatus()},Un.version="19.1.1",Un}var f_;function ly(){if(f_)return Wf.exports;f_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Wf.exports=oy(),Wf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function cy(){if(h_)return wo;h_=1;var r=ry(),t=md(),i=ly();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),e;if(f===o)return p(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,T=u.child;T;){if(T===a){y=!0,a=u,o=f;break}if(T===o){y=!0,o=u,a=f;break}T=T.sibling}if(!y){for(T=f.child;T;){if(T===a){y=!0,a=f,o=u;break}if(T===o){y=!0,o=f,a=u;break}T=T.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function d(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=d(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),G=Symbol.for("react.consumer"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function lt(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var ct=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case R:return"StrictMode";case I:return"Suspense";case V:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case O:return(e.displayName||"Context")+".Provider";case G:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:ht(e.type)||"Memo";case Y:n=e._payload,e=e._init;try{return ht(e(n))}catch{}}return null}var dt=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},yt=[],U=-1;function $(e){return{current:e}}function xt(e){0>U||(e.current=yt[U],yt[U]=null,U--)}function St(e,n){U++,yt[U]=e.current,e.current=n}var Ct=$(null),it=$(null),pt=$(null),Mt=$(null);function Pt(e,n){switch(St(pt,n),St(it,e),St(Ct,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Ng(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Ng(n),e=Lg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}xt(Ct),St(Ct,e)}function qt(){xt(Ct),xt(it),xt(pt)}function ie(e){e.memoizedState!==null&&St(Mt,e);var n=Ct.current,a=Lg(n,e.type);n!==a&&(St(it,e),St(Ct,a))}function He(e){it.current===e&&(xt(Ct),xt(it)),Mt.current===e&&(xt(Mt),Mo._currentValue=q)}var me=Object.prototype.hasOwnProperty,F=r.unstable_scheduleCallback,we=r.unstable_cancelCallback,Qt=r.unstable_shouldYield,Se=r.unstable_requestPaint,Ft=r.unstable_now,Ge=r.unstable_getCurrentPriorityLevel,Ht=r.unstable_ImmediatePriority,re=r.unstable_UserBlockingPriority,Ye=r.unstable_NormalPriority,Ze=r.unstable_LowPriority,L=r.unstable_IdlePriority,b=r.log,tt=r.unstable_setDisableYieldValue,ut=null,vt=null;function ot(e){if(typeof b=="function"&&tt(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(ut,e)}catch{}}var zt=Math.clz32?Math.clz32:Wt,Rt=Math.log,Xt=Math.LN2;function Wt(e){return e>>>=0,e===0?32:31-(Rt(e)/Xt|0)|0}var Et=256,Nt=4194304;function Zt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function kt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=Zt(o):(y&=T,y!==0?u=Zt(y):a||(a=T&~e,a!==0&&(u=Zt(a))))):(T=o&~f,T!==0?u=Zt(T):y!==0?u=Zt(y):a||(a=o&~e,a!==0&&(u=Zt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Dt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function se(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=Et;return Et<<=1,(Et&4194048)===0&&(Et=256),e}function At(){var e=Nt;return Nt<<=1,(Nt&62914560)===0&&(Nt=4194304),e}function wt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function It(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bt(e,n,a,o,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,P=e.expirationTimes,J=e.hiddenUpdates;for(a=y&~a;0<a;){var ft=31-zt(a),gt=1<<ft;T[ft]=0,P[ft]=-1;var nt=J[ft];if(nt!==null)for(J[ft]=null,ft=0;ft<nt.length;ft++){var at=nt[ft];at!==null&&(at.lane&=-536870913)}a&=~gt}o!==0&&_t(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function _t(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Vt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-zt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ce(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Me(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Jg(e.type))}function hi(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var fn=Math.random().toString(36).slice(2),hn="__reactFiber$"+fn,Qe="__reactProps$"+fn,Ti="__reactContainer$"+fn,bs="__reactEvents$"+fn,jo="__reactListeners$"+fn,Ts="__reactHandles$"+fn,Lr="__reactResources$"+fn,Ai="__reactMarker$"+fn;function As(e){delete e[hn],delete e[Qe],delete e[bs],delete e[jo],delete e[Ts]}function Fi(e){var n=e[hn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ti]||a[hn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Ig(e);e!==null;){if(a=e[hn])return a;e=Ig(e)}return n}e=a,a=e.parentNode}return null}function ca(e){if(e=e[hn]||e[Ti]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ja(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ua(e){var n=e[Lr];return n||(n=e[Lr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function on(e){e[Ai]=!0}var Wo=new Set,qo={};function A(e,n){j(e,n),j(e+"Capture",n)}function j(e,n){for(qo[e]=n,e=0;e<n.length;e++)Wo.add(n[e])}var st=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},Z={};function Tt(e){return me.call(Z,e)?!0:me.call(rt,e)?!1:st.test(e)?Z[e]=!0:(rt[e]=!0,!1)}function Ut(e,n,a){if(Tt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Bt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Lt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Jt,te;function jt(e){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+e+te}var ue=!1;function Ee(e,n){if(!e||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(at){var nt=at}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(at){nt=at}e.call(gt.prototype)}}else{try{throw Error()}catch(at){nt=at}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(at){if(at&&nt&&typeof at.stack=="string")return[at.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],T=f[1];if(y&&T){var P=y.split(`
`),J=T.split(`
`);for(u=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===P.length||u===J.length)for(o=P.length-1,u=J.length-1;1<=o&&0<=u&&P[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(P[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||P[o]!==J[u]){var ft=`
`+P[o].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=o&&0<=u);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?jt(a):""}function je(e){switch(e.tag){case 26:case 27:case 5:return jt(e.type);case 16:return jt("Lazy");case 13:return jt("Suspense");case 19:return jt("SuspenseList");case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return jt("Activity");default:return""}}function Ne(e){try{var n="";do n+=je(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xe(e){var n=Kt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){o=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ge(e){e._valueTracker||(e._valueTracker=Xe(e))}function wn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Kt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var On=/[\n"\\]/g;function vn(e){return e.replace(On,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Be(e,n,a,o,u,f,y,T){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+fe(n)):e.value!==""+fe(n)&&(e.value=""+fe(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?Cn(e,y,fe(n)):a!=null?Cn(e,y,fe(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+fe(T):e.removeAttribute("name")}function Pn(e,n,a,o,u,f,y,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function Cn(e,n,a){n==="number"&&di(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Je(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function En(e,n,a){if(n!=null&&(n=""+fe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+fe(a):""}function Rs(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(dt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=fe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Bn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var J0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||J0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ld(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Nd(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Nd(e,f,n[f])}function Fc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yo(e){return tv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Hc=null;function Gc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ws=null,Cs=null;function Od(e){var n=ca(e);if(n&&(e=n.stateNode)){var a=e[Qe]||null;t:switch(e=n.stateNode,n.type){case"input":if(Be(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Qe]||null;if(!u)throw Error(s(90));Be(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&wn(o)}break t;case"textarea":En(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Je(e,!!a.multiple,n,!1)}}}var Vc=!1;function Pd(e,n,a){if(Vc)return e(n,a);Vc=!0;try{var o=e(n);return o}finally{if(Vc=!1,(ws!==null||Cs!==null)&&(Ll(),ws&&(n=ws,e=Cs,Cs=ws=null,Od(n),e)))for(n=0;n<e.length;n++)Od(e[n])}}function Or(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Qe]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kc=!1;if(Hi)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){kc=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{kc=!1}var fa=null,Xc=null,Zo=null;function zd(){if(Zo)return Zo;var e,n=Xc,a=n.length,o,u="value"in fa?fa.value:fa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return Zo=u.slice(e,1<o?1-o:void 0)}function Ko(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Qo(){return!0}function Id(){return!1}function Fn(e){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Qo:Id,this.isPropagationStopped=Id,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jo=Fn(Wa),zr=g({},Wa,{view:0,detail:0}),ev=Fn(zr),jc,Wc,Ir,$o=g({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ir&&(Ir&&e.type==="mousemove"?(jc=e.screenX-Ir.screenX,Wc=e.screenY-Ir.screenY):Wc=jc=0,Ir=e),jc)},movementY:function(e){return"movementY"in e?e.movementY:Wc}}),Bd=Fn($o),nv=g({},$o,{dataTransfer:0}),iv=Fn(nv),av=g({},zr,{relatedTarget:0}),qc=Fn(av),sv=g({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),rv=Fn(sv),ov=g({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lv=Fn(ov),cv=g({},Wa,{data:0}),Fd=Fn(cv),uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=hv[e])?!!n[e]:!1}function Yc(){return dv}var pv=g({},zr,{key:function(e){if(e.key){var n=uv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(e){return e.type==="keypress"?Ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mv=Fn(pv),gv=g({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hd=Fn(gv),_v=g({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),vv=Fn(_v),xv=g({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),yv=Fn(xv),Sv=g({},$o,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mv=Fn(Sv),Ev=g({},Wa,{newState:0,oldState:0}),bv=Fn(Ev),Tv=[9,13,27,32],Zc=Hi&&"CompositionEvent"in window,Br=null;Hi&&"documentMode"in document&&(Br=document.documentMode);var Av=Hi&&"TextEvent"in window&&!Br,Gd=Hi&&(!Zc||Br&&8<Br&&11>=Br),Vd=" ",kd=!1;function Xd(e,n){switch(e){case"keyup":return Tv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ds=!1;function Rv(e,n){switch(e){case"compositionend":return jd(n);case"keypress":return n.which!==32?null:(kd=!0,Vd);case"textInput":return e=n.data,e===Vd&&kd?null:e;default:return null}}function wv(e,n){if(Ds)return e==="compositionend"||!Zc&&Xd(e,n)?(e=zd(),Zo=Xc=fa=null,Ds=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gd&&n.locale!=="ko"?null:n.data;default:return null}}var Cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Cv[e.type]:n==="textarea"}function qd(e,n,a,o){ws?Cs?Cs.push(o):Cs=[o]:ws=o,n=Fl(n,"onChange"),0<n.length&&(a=new Jo("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Fr=null,Hr=null;function Dv(e){Rg(e,0)}function tl(e){var n=ja(e);if(wn(n))return e}function Yd(e,n){if(e==="change")return n}var Zd=!1;if(Hi){var Kc;if(Hi){var Qc="oninput"in document;if(!Qc){var Kd=document.createElement("div");Kd.setAttribute("oninput","return;"),Qc=typeof Kd.oninput=="function"}Kc=Qc}else Kc=!1;Zd=Kc&&(!document.documentMode||9<document.documentMode)}function Qd(){Fr&&(Fr.detachEvent("onpropertychange",Jd),Hr=Fr=null)}function Jd(e){if(e.propertyName==="value"&&tl(Hr)){var n=[];qd(n,Hr,e,Gc(e)),Pd(Dv,n)}}function Uv(e,n,a){e==="focusin"?(Qd(),Fr=n,Hr=a,Fr.attachEvent("onpropertychange",Jd)):e==="focusout"&&Qd()}function Nv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl(Hr)}function Lv(e,n){if(e==="click")return tl(n)}function Ov(e,n){if(e==="input"||e==="change")return tl(n)}function Pv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:Pv;function Gr(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!me.call(n,u)||!qn(e[u],n[u]))return!1}return!0}function $d(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tp(e,n){var a=$d(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=$d(a)}}function ep(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ep(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function np(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=di(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=di(e.document)}return n}function Jc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var zv=Hi&&"documentMode"in document&&11>=document.documentMode,Us=null,$c=null,Vr=null,tu=!1;function ip(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tu||Us==null||Us!==di(o)||(o=Us,"selectionStart"in o&&Jc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Vr&&Gr(Vr,o)||(Vr=o,o=Fl($c,"onSelect"),0<o.length&&(n=new Jo("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Us)))}function qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ns={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},eu={},ap={};Hi&&(ap=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function Ya(e){if(eu[e])return eu[e];if(!Ns[e])return e;var n=Ns[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in ap)return eu[e]=n[a];return e}var sp=Ya("animationend"),rp=Ya("animationiteration"),op=Ya("animationstart"),Iv=Ya("transitionrun"),Bv=Ya("transitionstart"),Fv=Ya("transitioncancel"),lp=Ya("transitionend"),cp=new Map,nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nu.push("scrollEnd");function pi(e,n){cp.set(e,n),A(n,[e])}var up=new WeakMap;function ii(e,n){if(typeof e=="object"&&e!==null){var a=up.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ne(n)},up.set(e,n),n)}return{value:e,source:n,stack:Ne(n)}}var ai=[],Ls=0,iu=0;function el(){for(var e=Ls,n=iu=Ls=0;n<e;){var a=ai[n];ai[n++]=null;var o=ai[n];ai[n++]=null;var u=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&fp(a,u,f)}}function nl(e,n,a,o){ai[Ls++]=e,ai[Ls++]=n,ai[Ls++]=a,ai[Ls++]=o,iu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function au(e,n,a,o){return nl(e,n,a,o),il(e)}function Os(e,n){return nl(e,null,null,n),il(e)}function fp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-zt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function il(e){if(50<po)throw po=0,ff=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ps={};function Hv(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,o){return new Hv(e,n,a,o)}function su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function hp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function al(e,n,a,o,u,f){var y=0;if(o=e,typeof e=="function")su(e)&&(y=1);else if(typeof e=="string")y=Vx(e,a,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Yn(31,a,n,u),e.elementType=C,e.lanes=f,e;case E:return Za(a.children,u,f,n);case R:y=8,u|=24;break;case S:return e=Yn(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case I:return e=Yn(13,a,n,u),e.elementType=I,e.lanes=f,e;case V:return e=Yn(19,a,n,u),e.elementType=V,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case O:y=10;break t;case G:y=9;break t;case D:y=11;break t;case H:y=14;break t;case Y:y=16,o=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Yn(y,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Za(e,n,a,o){return e=Yn(7,e,o,n),e.lanes=a,e}function ru(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function ou(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var zs=[],Is=0,sl=null,rl=0,si=[],ri=0,Ka=null,Vi=1,ki="";function Qa(e,n){zs[Is++]=rl,zs[Is++]=sl,sl=e,rl=n}function dp(e,n,a){si[ri++]=Vi,si[ri++]=ki,si[ri++]=Ka,Ka=e;var o=Vi;e=ki;var u=32-zt(o)-1;o&=~(1<<u),a+=1;var f=32-zt(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Vi=1<<32-zt(n)+u|a<<u|o,ki=f+e}else Vi=1<<f|a<<u|o,ki=e}function lu(e){e.return!==null&&(Qa(e,1),dp(e,1,0))}function cu(e){for(;e===sl;)sl=zs[--Is],zs[Is]=null,rl=zs[--Is],zs[Is]=null;for(;e===Ka;)Ka=si[--ri],si[ri]=null,ki=si[--ri],si[ri]=null,Vi=si[--ri],si[ri]=null}var zn=null,$e=null,Re=!1,Ja=null,Ri=!1,uu=Error(s(519));function $a(e){var n=Error(s(418,""));throw jr(ii(n,e)),uu}function pp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[hn]=e,n[Qe]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<go.length;a++)ve(go[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Pn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ge(n);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Rs(n,o.value,o.defaultValue,o.children),ge(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Ug(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=Hl),n=!0):n=!1,n||$a(e)}function mp(e){for(zn=e.return;zn;)switch(zn.tag){case 5:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:zn=zn.return}}function kr(e){if(e!==zn)return!1;if(!Re)return mp(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Rf(e.type,e.memoizedProps)),a=!a),a&&$e&&$a(e),mp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){$e=gi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}$e=null}}else n===27?(n=$e,Ra(e.type)?(e=Uf,Uf=null,$e=e):$e=n):$e=zn?gi(e.stateNode.nextSibling):null;return!0}function Xr(){$e=zn=null,Re=!1}function gp(){var e=Ja;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),Ja=null),e}function jr(e){Ja===null?Ja=[e]:Ja.push(e)}var fu=$(null),ts=null,Xi=null;function ha(e,n,a){St(fu,n._currentValue),n._currentValue=a}function ji(e){e._currentValue=fu.current,xt(fu)}function hu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function du(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),hu(f.return,a,e),o||(y=null);break t}f=T.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),hu(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Wr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var T=u.type;qn(u.pendingProps.value,y.value)||(e!==null?e.push(T):e=[T])}}else if(u===Mt.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Mo):e=[Mo])}u=u.return}e!==null&&du(n,e,a,o),n.flags|=262144}function ol(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function es(e){ts=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return _p(ts,e)}function ll(e,n){return ts===null&&es(e),_p(e,n)}function _p(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(e===null)throw Error(s(308));Xi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Xi=Xi.next=n;return a}var Gv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Vv=r.unstable_scheduleCallback,kv=r.unstable_NormalPriority,dn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pu(){return{controller:new Gv,data:new Map,refCount:0}}function qr(e){e.refCount--,e.refCount===0&&Vv(kv,function(){e.controller.abort()})}var Yr=null,mu=0,Bs=0,Fs=null;function Xv(e,n){if(Yr===null){var a=Yr=[];mu=0,Bs=vf(),Fs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return mu++,n.then(vp,vp),n}function vp(){if(--mu===0&&Yr!==null){Fs!==null&&(Fs.status="fulfilled");var e=Yr;Yr=null,Bs=0,Fs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function jv(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var xp=z.S;z.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Xv(e,n),xp!==null&&xp(e,n)};var ns=$(null);function gu(){var e=ns.current;return e!==null?e:Ve.pooledCache}function cl(e,n){n===null?St(ns,ns.current):St(ns,n.pool)}function yp(){var e=gu();return e===null?null:{parent:dn._currentValue,pool:e}}var Zr=Error(s(460)),Sp=Error(s(474)),ul=Error(s(542)),_u={then:function(){}};function Mp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fl(){}function Ep(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(fl,fl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tp(e),e;default:if(typeof n.status=="string")n.then(fl,fl);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tp(e),e}throw Kr=n,Zr}}var Kr=null;function bp(){if(Kr===null)throw Error(s(459));var e=Kr;return Kr=null,e}function Tp(e){if(e===Zr||e===ul)throw Error(s(483))}var da=!1;function vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ma(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(De&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=il(e),fp(e,null,a),n}return nl(e,o,n,a),il(e)}function Qr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Vt(e,a)}}function yu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Su=!1;function Jr(){if(Su){var e=Fs;if(e!==null)throw e}}function $r(e,n,a,o){Su=!1;var u=e.updateQueue;da=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var P=T,J=P.next;P.next=null,y===null?f=J:y.next=J,y=P;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,T=ft.lastBaseUpdate,T!==y&&(T===null?ft.firstBaseUpdate=J:T.next=J,ft.lastBaseUpdate=P))}if(f!==null){var gt=u.baseState;y=0,ft=J=P=null,T=f;do{var nt=T.lane&-536870913,at=nt!==T.lane;if(at?(ye&nt)===nt:(o&nt)===nt){nt!==0&&nt===Bs&&(Su=!0),ft!==null&&(ft=ft.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ne=e,$t=T;nt=n;var Pe=a;switch($t.tag){case 1:if(ne=$t.payload,typeof ne=="function"){gt=ne.call(Pe,gt,nt);break t}gt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=$t.payload,nt=typeof ne=="function"?ne.call(Pe,gt,nt):ne,nt==null)break t;gt=g({},gt,nt);break t;case 2:da=!0}}nt=T.callback,nt!==null&&(e.flags|=64,at&&(e.flags|=8192),at=u.callbacks,at===null?u.callbacks=[nt]:at.push(nt))}else at={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ft===null?(J=ft=at,P=gt):ft=ft.next=at,y|=nt;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;at=T,T=at.next,at.next=null,u.lastBaseUpdate=at,u.shared.pending=null}}while(!0);ft===null&&(P=gt),u.baseState=P,u.firstBaseUpdate=J,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),Ea|=y,e.lanes=y,e.memoizedState=gt}}function Ap(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Rp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ap(a[e],n)}var Hs=$(null),hl=$(0);function wp(e,n){e=Ji,St(hl,e),St(Hs,n),Ji=e|n.baseLanes}function Mu(){St(hl,Ji),St(Hs,Hs.current)}function Eu(){Ji=hl.current,xt(Hs),xt(hl)}var ga=0,de=null,Le=null,ln=null,dl=!1,Gs=!1,is=!1,pl=0,to=0,Vs=null,Wv=0;function an(){throw Error(s(321))}function bu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function Tu(e,n,a,o,u,f){return ga=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?fm:hm,is=!1,f=a(o,u),is=!1,Gs&&(f=Dp(n,a,o,u)),Cp(e),f}function Cp(e){z.H=yl;var n=Le!==null&&Le.next!==null;if(ga=0,ln=Le=de=null,dl=!1,to=0,Vs=null,n)throw Error(s(300));e===null||xn||(e=e.dependencies,e!==null&&ol(e)&&(xn=!0))}function Dp(e,n,a,o){de=e;var u=0;do{if(Gs&&(Vs=null),to=0,Gs=!1,25<=u)throw Error(s(301));if(u+=1,ln=Le=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=$v,f=n(a,o)}while(Gs);return f}function qv(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?eo(n):n,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(de.flags|=1024),n}function Au(){var e=pl!==0;return pl=0,e}function Ru(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function wu(e){if(dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}dl=!1}ga=0,ln=Le=de=null,Gs=!1,to=pl=0,Vs=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?de.memoizedState=ln=e:ln=ln.next=e,ln}function cn(){if(Le===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var n=ln===null?de.memoizedState:ln.next;if(n!==null)ln=n,Le=e;else{if(e===null)throw de.alternate===null?Error(s(467)):Error(s(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},ln===null?de.memoizedState=ln=e:ln=ln.next=e}return ln}function Cu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eo(e){var n=to;return to+=1,Vs===null&&(Vs=[]),e=Ep(Vs,e,n),n=de,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?fm:hm),e}function ml(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return eo(e);if(e.$$typeof===O)return Dn(e)}throw Error(s(438,String(e)))}function Du(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Cu(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function Wi(e,n){return typeof n=="function"?n(e):n}function gl(e){var n=cn();return Uu(n,Le,e)}function Uu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=y=null,P=null,J=n,ft=!1;do{var gt=J.lane&-536870913;if(gt!==J.lane?(ye&gt)===gt:(ga&gt)===gt){var nt=J.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),gt===Bs&&(ft=!0);else if((ga&nt)===nt){J=J.next,nt===Bs&&(ft=!0);continue}else gt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(T=P=gt,y=f):P=P.next=gt,de.lanes|=nt,Ea|=nt;gt=J.action,is&&a(f,gt),f=J.hasEagerState?J.eagerState:a(f,gt)}else nt={lane:gt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(T=P=nt,y=f):P=P.next=nt,de.lanes|=gt,Ea|=gt;J=J.next}while(J!==null&&J!==n);if(P===null?y=f:P.next=T,!qn(f,e.memoizedState)&&(xn=!0,ft&&(a=Fs,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=P,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Nu(e){var n=cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);qn(f,n.memoizedState)||(xn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Up(e,n,a){var o=de,u=cn(),f=Re;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!qn((Le||u).memoizedState,a);y&&(u.memoizedState=a,xn=!0),u=u.queue;var T=Op.bind(null,o,u,e);if(no(2048,8,T,[e]),u.getSnapshot!==n||y||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,ks(9,_l(),Lp.bind(null,o,u,a,n),null),Ve===null)throw Error(s(349));f||(ga&124)!==0||Np(o,n,a)}return a}function Np(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=Cu(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Lp(e,n,a,o){n.value=a,n.getSnapshot=o,Pp(n)&&zp(e)}function Op(e,n,a){return a(function(){Pp(n)&&zp(e)})}function Pp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function zp(e){var n=Os(e,2);n!==null&&$n(n,e,2)}function Lu(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),is){ot(!0);try{a()}finally{ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n}function Ip(e,n,a,o){return e.baseState=a,Uu(e,Le,typeof o=="function"?o:Wi)}function Yv(e,n,a,o,u){if(xl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};z.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Bp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Bp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=z.T,y={};z.T=y;try{var T=a(u,o),P=z.S;P!==null&&P(y,T),Fp(e,n,T)}catch(J){Ou(e,n,J)}finally{z.T=f}}else try{f=a(u,o),Fp(e,n,f)}catch(J){Ou(e,n,J)}}function Fp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Hp(e,n,o)},function(o){return Ou(e,n,o)}):Hp(e,n,a)}function Hp(e,n,a){n.status="fulfilled",n.value=a,Gp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Bp(e,a)))}function Ou(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Gp(n),n=n.next;while(n!==o)}e.action=null}function Gp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Vp(e,n){return n}function kp(e,n){if(Re){var a=Ve.formState;if(a!==null){t:{var o=de;if(Re){if($e){e:{for(var u=$e,f=Ri;u.nodeType!==8;){if(!f){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){$e=gi(u.nextSibling),o=u.data==="F!";break t}}$a(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vp,lastRenderedState:n},a.queue=o,a=lm.bind(null,de,o),o.dispatch=a,o=Lu(!1),f=Fu.bind(null,de,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Yv.bind(null,de,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Xp(e){var n=cn();return jp(n,Le,e)}function jp(e,n,a){if(n=Uu(e,n,Vp)[0],e=gl(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=eo(n)}catch(y){throw y===Zr?ul:y}else o=n;n=cn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,ks(9,_l(),Zv.bind(null,u,a),null)),[o,f,e]}function Zv(e,n){e.action=n}function Wp(e){var n=cn(),a=Le;if(a!==null)return jp(n,a,e);cn(),n=n.memoizedState,a=cn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ks(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=de.updateQueue,n===null&&(n=Cu(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function _l(){return{destroy:void 0,resource:void 0}}function qp(){return cn().memoizedState}function vl(e,n,a,o){var u=Hn();o=o===void 0?null:o,de.flags|=e,u.memoizedState=ks(1|n,_l(),a,o)}function no(e,n,a,o){var u=cn();o=o===void 0?null:o;var f=u.memoizedState.inst;Le!==null&&o!==null&&bu(o,Le.memoizedState.deps)?u.memoizedState=ks(n,f,a,o):(de.flags|=e,u.memoizedState=ks(1|n,f,a,o))}function Yp(e,n){vl(8390656,8,e,n)}function Zp(e,n){no(2048,8,e,n)}function Kp(e,n){return no(4,2,e,n)}function Qp(e,n){return no(4,4,e,n)}function Jp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function $p(e,n,a){a=a!=null?a.concat([e]):null,no(4,4,Jp.bind(null,n,e),a)}function Pu(){}function tm(e,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&bu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function em(e,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&bu(n,o[1]))return o[0];if(o=e(),is){ot(!0);try{e()}finally{ot(!1)}}return a.memoizedState=[o,n],o}function zu(e,n,a){return a===void 0||(ga&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=ag(),de.lanes|=e,Ea|=e,a)}function nm(e,n,a,o){return qn(a,n)?a:Hs.current!==null?(e=zu(e,a,o),qn(e,n)||(xn=!0),e):(ga&42)===0?(xn=!0,e.memoizedState=a):(e=ag(),de.lanes|=e,Ea|=e,n)}function im(e,n,a,o,u){var f=K.p;K.p=f!==0&&8>f?f:8;var y=z.T,T={};z.T=T,Fu(e,!1,n,a);try{var P=u(),J=z.S;if(J!==null&&J(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ft=jv(P,o);io(e,n,ft,Jn(e))}else io(e,n,o,Jn(e))}catch(gt){io(e,n,{then:function(){},status:"rejected",reason:gt},Jn())}finally{K.p=f,z.T=y}}function Kv(){}function Iu(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=am(e).queue;im(e,u,n,q,a===null?Kv:function(){return sm(e),a(o)})}function am(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function sm(e){var n=am(e).next.queue;io(e,n,{},Jn())}function Bu(){return Dn(Mo)}function rm(){return cn().memoizedState}function om(){return cn().memoizedState}function Qv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=pa(a);var o=ma(n,e,a);o!==null&&($n(o,n,a),Qr(o,n,a)),n={cache:pu()},e.payload=n;return}n=n.return}}function Jv(e,n,a){var o=Jn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},xl(e)?cm(n,a):(a=au(e,n,a,o),a!==null&&($n(a,e,o),um(a,n,o)))}function lm(e,n,a){var o=Jn();io(e,n,a,o)}function io(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(xl(e))cm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,T=f(y,a);if(u.hasEagerState=!0,u.eagerState=T,qn(T,y))return nl(e,n,u,0),Ve===null&&el(),!1}catch{}finally{}if(a=au(e,n,u,o),a!==null)return $n(a,e,o),um(a,n,o),!0}return!1}function Fu(e,n,a,o){if(o={lane:2,revertLane:vf(),action:o,hasEagerState:!1,eagerState:null,next:null},xl(e)){if(n)throw Error(s(479))}else n=au(e,a,o,2),n!==null&&$n(n,e,2)}function xl(e){var n=e.alternate;return e===de||n!==null&&n===de}function cm(e,n){Gs=dl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function um(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Vt(e,a)}}var yl={readContext:Dn,use:ml,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},fm={readContext:Dn,use:ml,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:Dn,useEffect:Yp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,vl(4194308,4,Jp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return vl(4194308,4,e,n)},useInsertionEffect:function(e,n){vl(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var o=e();if(is){ot(!0);try{e()}finally{ot(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(is){ot(!0);try{a(n)}finally{ot(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Jv.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=Lu(e);var n=e.queue,a=lm.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Pu,useDeferredValue:function(e,n){var a=Hn();return zu(a,e,n)},useTransition:function(){var e=Lu(!1);return e=im.bind(null,de,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=de,u=Hn();if(Re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ve===null)throw Error(s(349));(ye&124)!==0||Np(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Yp(Op.bind(null,o,f,e),[e]),o.flags|=2048,ks(9,_l(),Lp.bind(null,o,f,a,n),null),a},useId:function(){var e=Hn(),n=Ve.identifierPrefix;if(Re){var a=ki,o=Vi;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=pl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Wv++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Bu,useFormState:kp,useActionState:kp,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Fu.bind(null,de,!0,a),a.dispatch=n,[e,n]},useMemoCache:Du,useCacheRefresh:function(){return Hn().memoizedState=Qv.bind(null,de)}},hm={readContext:Dn,use:ml,useCallback:tm,useContext:Dn,useEffect:Zp,useImperativeHandle:$p,useInsertionEffect:Kp,useLayoutEffect:Qp,useMemo:em,useReducer:gl,useRef:qp,useState:function(){return gl(Wi)},useDebugValue:Pu,useDeferredValue:function(e,n){var a=cn();return nm(a,Le.memoizedState,e,n)},useTransition:function(){var e=gl(Wi)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:Up,useId:rm,useHostTransitionStatus:Bu,useFormState:Xp,useActionState:Xp,useOptimistic:function(e,n){var a=cn();return Ip(a,Le,e,n)},useMemoCache:Du,useCacheRefresh:om},$v={readContext:Dn,use:ml,useCallback:tm,useContext:Dn,useEffect:Zp,useImperativeHandle:$p,useInsertionEffect:Kp,useLayoutEffect:Qp,useMemo:em,useReducer:Nu,useRef:qp,useState:function(){return Nu(Wi)},useDebugValue:Pu,useDeferredValue:function(e,n){var a=cn();return Le===null?zu(a,e,n):nm(a,Le.memoizedState,e,n)},useTransition:function(){var e=Nu(Wi)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:Up,useId:rm,useHostTransitionStatus:Bu,useFormState:Wp,useActionState:Wp,useOptimistic:function(e,n){var a=cn();return Le!==null?Ip(a,Le,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Du,useCacheRefresh:om},Xs=null,ao=0;function Sl(e){var n=ao;return ao+=1,Xs===null&&(Xs=[]),Ep(Xs,e,n)}function so(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ml(e,n){throw n.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function dm(e){var n=e._init;return n(e._payload)}function pm(e){function n(W,k){if(e){var Q=W.deletions;Q===null?(W.deletions=[k],W.flags|=16):Q.push(k)}}function a(W,k){if(!e)return null;for(;k!==null;)n(W,k),k=k.sibling;return null}function o(W){for(var k=new Map;W!==null;)W.key!==null?k.set(W.key,W):k.set(W.index,W),W=W.sibling;return k}function u(W,k){return W=Gi(W,k),W.index=0,W.sibling=null,W}function f(W,k,Q){return W.index=Q,e?(Q=W.alternate,Q!==null?(Q=Q.index,Q<k?(W.flags|=67108866,k):Q):(W.flags|=67108866,k)):(W.flags|=1048576,k)}function y(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function T(W,k,Q,mt){return k===null||k.tag!==6?(k=ru(Q,W.mode,mt),k.return=W,k):(k=u(k,Q),k.return=W,k)}function P(W,k,Q,mt){var Gt=Q.type;return Gt===E?ft(W,k,Q.props.children,mt,Q.key):k!==null&&(k.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===Y&&dm(Gt)===k.type)?(k=u(k,Q.props),so(k,Q),k.return=W,k):(k=al(Q.type,Q.key,Q.props,null,W.mode,mt),so(k,Q),k.return=W,k)}function J(W,k,Q,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==Q.containerInfo||k.stateNode.implementation!==Q.implementation?(k=ou(Q,W.mode,mt),k.return=W,k):(k=u(k,Q.children||[]),k.return=W,k)}function ft(W,k,Q,mt,Gt){return k===null||k.tag!==7?(k=Za(Q,W.mode,mt,Gt),k.return=W,k):(k=u(k,Q),k.return=W,k)}function gt(W,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=ru(""+k,W.mode,Q),k.return=W,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return Q=al(k.type,k.key,k.props,null,W.mode,Q),so(Q,k),Q.return=W,Q;case M:return k=ou(k,W.mode,Q),k.return=W,k;case Y:var mt=k._init;return k=mt(k._payload),gt(W,k,Q)}if(dt(k)||lt(k))return k=Za(k,W.mode,Q,null),k.return=W,k;if(typeof k.then=="function")return gt(W,Sl(k),Q);if(k.$$typeof===O)return gt(W,ll(W,k),Q);Ml(W,k)}return null}function nt(W,k,Q,mt){var Gt=k!==null?k.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Gt!==null?null:T(W,k,""+Q,mt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===Gt?P(W,k,Q,mt):null;case M:return Q.key===Gt?J(W,k,Q,mt):null;case Y:return Gt=Q._init,Q=Gt(Q._payload),nt(W,k,Q,mt)}if(dt(Q)||lt(Q))return Gt!==null?null:ft(W,k,Q,mt,null);if(typeof Q.then=="function")return nt(W,k,Sl(Q),mt);if(Q.$$typeof===O)return nt(W,k,ll(W,Q),mt);Ml(W,Q)}return null}function at(W,k,Q,mt,Gt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return W=W.get(Q)||null,T(k,W,""+mt,Gt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case x:return W=W.get(mt.key===null?Q:mt.key)||null,P(k,W,mt,Gt);case M:return W=W.get(mt.key===null?Q:mt.key)||null,J(k,W,mt,Gt);case Y:var pe=mt._init;return mt=pe(mt._payload),at(W,k,Q,mt,Gt)}if(dt(mt)||lt(mt))return W=W.get(Q)||null,ft(k,W,mt,Gt,null);if(typeof mt.then=="function")return at(W,k,Q,Sl(mt),Gt);if(mt.$$typeof===O)return at(W,k,Q,ll(k,mt),Gt);Ml(k,mt)}return null}function ne(W,k,Q,mt){for(var Gt=null,pe=null,Yt=k,ee=k=0,Sn=null;Yt!==null&&ee<Q.length;ee++){Yt.index>ee?(Sn=Yt,Yt=null):Sn=Yt.sibling;var be=nt(W,Yt,Q[ee],mt);if(be===null){Yt===null&&(Yt=Sn);break}e&&Yt&&be.alternate===null&&n(W,Yt),k=f(be,k,ee),pe===null?Gt=be:pe.sibling=be,pe=be,Yt=Sn}if(ee===Q.length)return a(W,Yt),Re&&Qa(W,ee),Gt;if(Yt===null){for(;ee<Q.length;ee++)Yt=gt(W,Q[ee],mt),Yt!==null&&(k=f(Yt,k,ee),pe===null?Gt=Yt:pe.sibling=Yt,pe=Yt);return Re&&Qa(W,ee),Gt}for(Yt=o(Yt);ee<Q.length;ee++)Sn=at(Yt,W,ee,Q[ee],mt),Sn!==null&&(e&&Sn.alternate!==null&&Yt.delete(Sn.key===null?ee:Sn.key),k=f(Sn,k,ee),pe===null?Gt=Sn:pe.sibling=Sn,pe=Sn);return e&&Yt.forEach(function(Na){return n(W,Na)}),Re&&Qa(W,ee),Gt}function $t(W,k,Q,mt){if(Q==null)throw Error(s(151));for(var Gt=null,pe=null,Yt=k,ee=k=0,Sn=null,be=Q.next();Yt!==null&&!be.done;ee++,be=Q.next()){Yt.index>ee?(Sn=Yt,Yt=null):Sn=Yt.sibling;var Na=nt(W,Yt,be.value,mt);if(Na===null){Yt===null&&(Yt=Sn);break}e&&Yt&&Na.alternate===null&&n(W,Yt),k=f(Na,k,ee),pe===null?Gt=Na:pe.sibling=Na,pe=Na,Yt=Sn}if(be.done)return a(W,Yt),Re&&Qa(W,ee),Gt;if(Yt===null){for(;!be.done;ee++,be=Q.next())be=gt(W,be.value,mt),be!==null&&(k=f(be,k,ee),pe===null?Gt=be:pe.sibling=be,pe=be);return Re&&Qa(W,ee),Gt}for(Yt=o(Yt);!be.done;ee++,be=Q.next())be=at(Yt,W,ee,be.value,mt),be!==null&&(e&&be.alternate!==null&&Yt.delete(be.key===null?ee:be.key),k=f(be,k,ee),pe===null?Gt=be:pe.sibling=be,pe=be);return e&&Yt.forEach(function(ty){return n(W,ty)}),Re&&Qa(W,ee),Gt}function Pe(W,k,Q,mt){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:t:{for(var Gt=Q.key;k!==null;){if(k.key===Gt){if(Gt=Q.type,Gt===E){if(k.tag===7){a(W,k.sibling),mt=u(k,Q.props.children),mt.return=W,W=mt;break t}}else if(k.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===Y&&dm(Gt)===k.type){a(W,k.sibling),mt=u(k,Q.props),so(mt,Q),mt.return=W,W=mt;break t}a(W,k);break}else n(W,k);k=k.sibling}Q.type===E?(mt=Za(Q.props.children,W.mode,mt,Q.key),mt.return=W,W=mt):(mt=al(Q.type,Q.key,Q.props,null,W.mode,mt),so(mt,Q),mt.return=W,W=mt)}return y(W);case M:t:{for(Gt=Q.key;k!==null;){if(k.key===Gt)if(k.tag===4&&k.stateNode.containerInfo===Q.containerInfo&&k.stateNode.implementation===Q.implementation){a(W,k.sibling),mt=u(k,Q.children||[]),mt.return=W,W=mt;break t}else{a(W,k);break}else n(W,k);k=k.sibling}mt=ou(Q,W.mode,mt),mt.return=W,W=mt}return y(W);case Y:return Gt=Q._init,Q=Gt(Q._payload),Pe(W,k,Q,mt)}if(dt(Q))return ne(W,k,Q,mt);if(lt(Q)){if(Gt=lt(Q),typeof Gt!="function")throw Error(s(150));return Q=Gt.call(Q),$t(W,k,Q,mt)}if(typeof Q.then=="function")return Pe(W,k,Sl(Q),mt);if(Q.$$typeof===O)return Pe(W,k,ll(W,Q),mt);Ml(W,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,k!==null&&k.tag===6?(a(W,k.sibling),mt=u(k,Q),mt.return=W,W=mt):(a(W,k),mt=ru(Q,W.mode,mt),mt.return=W,W=mt),y(W)):a(W,k)}return function(W,k,Q,mt){try{ao=0;var Gt=Pe(W,k,Q,mt);return Xs=null,Gt}catch(Yt){if(Yt===Zr||Yt===ul)throw Yt;var pe=Yn(29,Yt,null,W.mode);return pe.lanes=mt,pe.return=W,pe}finally{}}}var js=pm(!0),mm=pm(!1),oi=$(null),wi=null;function _a(e){var n=e.alternate;St(pn,pn.current&1),St(oi,e),wi===null&&(n===null||Hs.current!==null||n.memoizedState!==null)&&(wi=e)}function gm(e){if(e.tag===22){if(St(pn,pn.current),St(oi,e),wi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(wi=e)}}else va()}function va(){St(pn,pn.current),St(oi,oi.current)}function qi(e){xt(oi),wi===e&&(wi=null),xt(pn)}var pn=$(0);function El(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Df(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Hu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Gu={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Jn(),u=pa(o);u.payload=n,a!=null&&(u.callback=a),n=ma(e,u,o),n!==null&&($n(n,e,o),Qr(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Jn(),u=pa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ma(e,u,o),n!==null&&($n(n,e,o),Qr(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),o=pa(a);o.tag=2,n!=null&&(o.callback=n),n=ma(e,o,a),n!==null&&($n(n,e,a),Qr(n,e,a))}};function _m(e,n,a,o,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!Gr(a,o)||!Gr(u,f):!0}function vm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Gu.enqueueReplaceState(n,n.state,null)}function as(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function xm(e){bl(e)}function ym(e){console.error(e)}function Sm(e){bl(e)}function Tl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Mm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Vu(e,n,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Tl(e,n)},a}function Em(e){return e=pa(e),e.tag=3,e}function bm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Mm(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Mm(n,a,o),typeof u!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function tx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Wr(n,a,u,!0),a=oi.current,a!==null){switch(a.tag){case 13:return wi===null?df():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===_u?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),mf(e,o,u)),!1;case 22:return a.flags|=65536,o===_u?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),mf(e,o,u)),!1}throw Error(s(435,a.tag))}return mf(e,o,u),df(),!1}if(Re)return n=oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==uu&&(e=Error(s(422),{cause:o}),jr(ii(e,a)))):(o!==uu&&(n=Error(s(423),{cause:o}),jr(ii(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ii(o,a),u=Vu(e.stateNode,o,u),yu(e,u),tn!==4&&(tn=2)),!1;var f=Error(s(520),{cause:o});if(f=ii(f,a),ho===null?ho=[f]:ho.push(f),tn!==4&&(tn=2),n===null)return!0;o=ii(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Vu(a.stateNode,o,e),yu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ba===null||!ba.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Em(u),bm(u,e,a,o),yu(a,u),!1}a=a.return}while(a!==null);return!1}var Tm=Error(s(461)),xn=!1;function bn(e,n,a,o){n.child=e===null?mm(n,null,a,o):js(n,e.child,a,o)}function Am(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var T in o)T!=="ref"&&(y[T]=o[T])}else y=o;return es(n),o=Tu(e,n,a,y,f,u),T=Au(),e!==null&&!xn?(Ru(e,n,u),Yi(e,n,u)):(Re&&T&&lu(n),n.flags|=1,bn(e,n,o,u),n.child)}function Rm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!su(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,wm(e,n,f,o,u)):(e=al(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ku(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Gr,a(y,o)&&e.ref===n.ref)return Yi(e,n,u)}return n.flags|=1,e=Gi(f,o),e.ref=n.ref,e.return=n,n.child=e}function wm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Gr(f,o)&&e.ref===n.ref)if(xn=!1,n.pendingProps=o=f,Ku(e,u))(e.flags&131072)!==0&&(xn=!0);else return n.lanes=e.lanes,Yi(e,n,u)}return ku(e,n,a,o,u)}function Cm(e,n,a){var o=n.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Dm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&cl(n,f!==null?f.cachePool:null),f!==null?wp(n,f):Mu(),gm(n);else return n.lanes=n.childLanes=536870912,Dm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(cl(n,f.cachePool),wp(n,f),va(),n.memoizedState=null):(e!==null&&cl(n,null),Mu(),va());return bn(e,n,u,a),n.child}function Dm(e,n,a,o){var u=gu();return u=u===null?null:{parent:dn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&cl(n,null),Mu(),gm(n),e!==null&&Wr(e,n,o,!0),null}function Al(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ku(e,n,a,o,u){return es(n),a=Tu(e,n,a,o,void 0,u),o=Au(),e!==null&&!xn?(Ru(e,n,u),Yi(e,n,u)):(Re&&o&&lu(n),n.flags|=1,bn(e,n,a,u),n.child)}function Um(e,n,a,o,u,f){return es(n),n.updateQueue=null,a=Dp(n,o,a,u),Cp(e),o=Au(),e!==null&&!xn?(Ru(e,n,f),Yi(e,n,f)):(Re&&o&&lu(n),n.flags|=1,bn(e,n,a,f),n.child)}function Nm(e,n,a,o,u){if(es(n),n.stateNode===null){var f=Ps,y=a.contextType;typeof y=="object"&&y!==null&&(f=Dn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Gu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},vu(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Dn(y):Ps,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Hu(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Gu.enqueueReplaceState(f,f.state,null),$r(n,o,f,u),Jr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,P=as(a,T);f.props=P;var J=f.context,ft=a.contextType;y=Ps,typeof ft=="object"&&ft!==null&&(y=Dn(ft));var gt=a.getDerivedStateFromProps;ft=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==y)&&vm(n,f,o,y),da=!1;var nt=n.memoizedState;f.state=nt,$r(n,o,f,u),Jr(),J=n.memoizedState,T||nt!==J||da?(typeof gt=="function"&&(Hu(n,a,gt,o),J=n.memoizedState),(P=da||_m(n,a,P,o,nt,J,y))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=y,o=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,xu(e,n),y=n.memoizedProps,ft=as(a,y),f.props=ft,gt=n.pendingProps,nt=f.context,J=a.contextType,P=Ps,typeof J=="object"&&J!==null&&(P=Dn(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==gt||nt!==P)&&vm(n,f,o,P),da=!1,nt=n.memoizedState,f.state=nt,$r(n,o,f,u),Jr();var at=n.memoizedState;y!==gt||nt!==at||da||e!==null&&e.dependencies!==null&&ol(e.dependencies)?(typeof T=="function"&&(Hu(n,a,T,o),at=n.memoizedState),(ft=da||_m(n,a,ft,o,nt,at,P)||e!==null&&e.dependencies!==null&&ol(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,at,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,at,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=at),f.props=o,f.state=at,f.context=P,o=ft):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Al(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=js(n,e.child,null,u),n.child=js(n,null,a,u)):bn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Yi(e,n,u),e}function Lm(e,n,a,o){return Xr(),n.flags|=256,bn(e,n,a,o),n.child}var Xu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ju(e){return{baseLanes:e,cachePool:yp()}}function Wu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=li),e}function Om(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(pn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(u?_a(n):va(),Re){var T=$e,P;if(P=T){t:{for(P=T,T=Ri;P.nodeType!==8;){if(!T){T=null;break t}if(P=gi(P.nextSibling),P===null){T=null;break t}}T=P}T!==null?(n.memoizedState={dehydrated:T,treeContext:Ka!==null?{id:Vi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},P=Yn(18,null,null,0),P.stateNode=T,P.return=n,n.child=P,zn=n,$e=null,P=!0):P=!1}P||$a(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Df(T)?n.lanes=32:n.lanes=536870912,null;qi(n)}return T=o.children,o=o.fallback,u?(va(),u=n.mode,T=Rl({mode:"hidden",children:T},u),o=Za(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,u=n.child,u.memoizedState=ju(a),u.childLanes=Wu(e,y,a),n.memoizedState=Xu,o):(_a(n),qu(n,T))}if(P=e.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(f)n.flags&256?(_a(n),n.flags&=-257,n=Yu(e,n,a)):n.memoizedState!==null?(va(),n.child=e.child,n.flags|=128,n=null):(va(),u=o.fallback,T=n.mode,o=Rl({mode:"visible",children:o.children},T),u=Za(u,T,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,js(n,e.child,null,a),o=n.child,o.memoizedState=ju(a),o.childLanes=Wu(e,y,a),n.memoizedState=Xu,n=u);else if(_a(n),Df(T)){if(y=T.nextSibling&&T.nextSibling.dataset,y)var J=y.dgst;y=J,o=Error(s(419)),o.stack="",o.digest=y,jr({value:o,source:null,stack:null}),n=Yu(e,n,a)}else if(xn||Wr(e,n,a,!1),y=(a&e.childLanes)!==0,xn||y){if(y=Ve,y!==null&&(o=a&-a,o=(o&42)!==0?1:ae(o),o=(o&(y.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Os(e,o),$n(y,e,o),Tm;T.data==="$?"||df(),n=Yu(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,$e=gi(T.nextSibling),zn=n,Re=!0,Ja=null,Ri=!1,e!==null&&(si[ri++]=Vi,si[ri++]=ki,si[ri++]=Ka,Vi=e.id,ki=e.overflow,Ka=n),n=qu(n,o.children),n.flags|=4096);return n}return u?(va(),u=o.fallback,T=n.mode,P=e.child,J=P.sibling,o=Gi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,J!==null?u=Gi(J,u):(u=Za(u,T,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,T=e.child.memoizedState,T===null?T=ju(a):(P=T.cachePool,P!==null?(J=dn._currentValue,P=P.parent!==J?{parent:J,pool:J}:P):P=yp(),T={baseLanes:T.baseLanes|a,cachePool:P}),u.memoizedState=T,u.childLanes=Wu(e,y,a),n.memoizedState=Xu,o):(_a(n),a=e.child,e=a.sibling,a=Gi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function qu(e,n){return n=Rl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Rl(e,n){return e=Yn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Yu(e,n,a){return js(n,e.child,null,a),e=qu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Pm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),hu(e.return,n,a)}function Zu(e,n,a,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function zm(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(bn(e,n,o.children,a),o=pn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pm(e,a,n);else if(e.tag===19)Pm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(St(pn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&El(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Zu(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&El(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Zu(n,!0,a,null,f);break;case"together":Zu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ea|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Wr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Gi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Gi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ku(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ol(e)))}function ex(e,n,a){switch(n.tag){case 3:Pt(n,n.stateNode.containerInfo),ha(n,dn,e.memoizedState.cache),Xr();break;case 27:case 5:ie(n);break;case 4:Pt(n,n.stateNode.containerInfo);break;case 10:ha(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(_a(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Om(e,n,a):(_a(n),e=Yi(e,n,a),e!==null?e.sibling:null);_a(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Wr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return zm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(pn,pn.current),o)break;return null;case 22:case 23:return n.lanes=0,Cm(e,n,a);case 24:ha(n,dn,e.memoizedState.cache)}return Yi(e,n,a)}function Im(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)xn=!0;else{if(!Ku(e,a)&&(n.flags&128)===0)return xn=!1,ex(e,n,a);xn=(e.flags&131072)!==0}else xn=!1,Re&&(n.flags&1048576)!==0&&dp(n,rl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")su(o)?(e=as(o,e),n.tag=1,n=Nm(null,n,o,e,a)):(n.tag=0,n=ku(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===D){n.tag=11,n=Am(null,n,o,e,a);break t}else if(u===H){n.tag=14,n=Rm(null,n,o,e,a);break t}}throw n=ht(o)||o,Error(s(306,n,""))}}return n;case 0:return ku(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=as(o,n.pendingProps),Nm(e,n,o,u,a);case 3:t:{if(Pt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,xu(e,n),$r(n,o,null,a);var y=n.memoizedState;if(o=y.cache,ha(n,dn,o),o!==f.cache&&du(n,[dn],a,!0),Jr(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Lm(e,n,o,a);break t}else if(o!==u){u=ii(Error(s(424)),n),jr(u),n=Lm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=gi(e.firstChild),zn=n,Re=!0,Ja=null,Ri=!0,a=mm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Xr(),o===u){n=Yi(e,n,a);break t}bn(e,n,o,a)}n=n.child}return n;case 26:return Al(e,n),e===null?(a=Gg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,o=Gl(pt.current).createElement(a),o[hn]=n,o[Qe]=e,An(o,a,e),on(o),n.stateNode=o):n.memoizedState=Gg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ie(n),e===null&&Re&&(o=n.stateNode=Bg(n.type,n.pendingProps,pt.current),zn=n,Ri=!0,u=$e,Ra(n.type)?(Uf=u,$e=gi(o.firstChild)):$e=u),bn(e,n,n.pendingProps.children,a),Al(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((u=o=$e)&&(o=Cx(o,n.type,n.pendingProps,Ri),o!==null?(n.stateNode=o,zn=n,$e=gi(o.firstChild),Ri=!1,u=!0):u=!1),u||$a(n)),ie(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,Rf(u,f)?o=null:y!==null&&Rf(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Tu(e,n,qv,null,null,a),Mo._currentValue=u),Al(e,n),bn(e,n,o,a),n.child;case 6:return e===null&&Re&&((e=a=$e)&&(a=Dx(a,n.pendingProps,Ri),a!==null?(n.stateNode=a,zn=n,$e=null,e=!0):e=!1),e||$a(n)),null;case 13:return Om(e,n,a);case 4:return Pt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=js(n,null,o,a):bn(e,n,o,a),n.child;case 11:return Am(e,n,n.type,n.pendingProps,a);case 7:return bn(e,n,n.pendingProps,a),n.child;case 8:return bn(e,n,n.pendingProps.children,a),n.child;case 12:return bn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ha(n,n.type,o.value),bn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,es(n),u=Dn(u),o=o(u),n.flags|=1,bn(e,n,o,a),n.child;case 14:return Rm(e,n,n.type,n.pendingProps,a);case 15:return wm(e,n,n.type,n.pendingProps,a);case 19:return zm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Rl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Gi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Cm(e,n,a);case 24:return es(n),o=Dn(dn),e===null?(u=gu(),u===null&&(u=Ve,f=pu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},vu(n),ha(n,dn,u)):((e.lanes&a)!==0&&(xu(e,n),$r(n,null,null,a),Jr()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ha(n,dn,o)):(o=f.cache,ha(n,dn,o),o!==u.cache&&du(n,[dn],a,!0))),bn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Zi(e){e.flags|=4}function Bm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Wg(n)){if(n=oi.current,n!==null&&((ye&4194048)===ye?wi!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==wi))throw Kr=_u,Sp;e.flags|=8192}}function wl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?At():536870912,e.lanes|=n,Zs|=n)}function ro(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function nx(e,n,a){var o=n.pendingProps;switch(cu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ji(dn),qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(kr(n)?Zi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gp())),Ke(n),null;case 26:return a=n.memoizedState,e===null?(Zi(n),a!==null?(Ke(n),Bm(n,a)):(Ke(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Zi(n),Ke(n),Bm(n,a)):(Ke(n),n.flags&=-16777217):(e.memoizedProps!==o&&Zi(n),Ke(n),n.flags&=-16777217),null;case 27:He(n),a=pt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=Ct.current,kr(n)?pp(n):(e=Bg(u,o,a),n.stateNode=e,Zi(n))}return Ke(n),null;case 5:if(He(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(e=Ct.current,kr(n))pp(n);else{switch(u=Gl(pt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[hn]=n,e[Qe]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(An(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Zi(n)}}return Ke(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=pt.current,kr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=zn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[hn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ug(e.nodeValue,a)),e||$a(n)}else e=Gl(e).createTextNode(o),e[hn]=n,n.stateNode=e}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=kr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[hn]=n}else Xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=gp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(qi(n),n):(qi(n),null)}if(qi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),wl(n,n.updateQueue),Ke(n),null;case 4:return qt(),e===null&&Mf(n.stateNode.containerInfo),Ke(n),null;case 10:return ji(n.type),Ke(n),null;case 19:if(xt(pn),u=n.memoizedState,u===null)return Ke(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)ro(u,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=El(e),f!==null){for(n.flags|=128,ro(u,!1),e=f.updateQueue,n.updateQueue=e,wl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)hp(a,e),a=a.sibling;return St(pn,pn.current&1|2),n.child}e=e.sibling}u.tail!==null&&Ft()>Ul&&(n.flags|=128,o=!0,ro(u,!1),n.lanes=4194304)}else{if(!o)if(e=El(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,wl(n,e),ro(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Re)return Ke(n),null}else 2*Ft()-u.renderingStartTime>Ul&&a!==536870912&&(n.flags|=128,o=!0,ro(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ft(),n.sibling=null,e=pn.current,St(pn,o?e&1|2:e&1),n):(Ke(n),null);case 22:case 23:return qi(n),Eu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&wl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&xt(ns),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ji(dn),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function ix(e,n){switch(cu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ji(dn),qt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return He(n),null;case 13:if(qi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Xr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return xt(pn),null;case 4:return qt(),null;case 10:return ji(n.type),null;case 22:case 23:return qi(n),Eu(),e!==null&&xt(ns),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ji(dn),null;case 25:return null;default:return null}}function Fm(e,n){switch(cu(n),n.tag){case 3:ji(dn),qt();break;case 26:case 27:case 5:He(n);break;case 4:qt();break;case 13:qi(n);break;case 19:xt(pn);break;case 10:ji(n.type);break;case 22:case 23:qi(n),Eu(),e!==null&&xt(ns);break;case 24:ji(dn)}}function oo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(T){Fe(n,n.return,T)}}function xa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var y=o.inst,T=y.destroy;if(T!==void 0){y.destroy=void 0,u=n;var P=a,J=T;try{J()}catch(ft){Fe(u,P,ft)}}}o=o.next}while(o!==f)}}catch(ft){Fe(n,n.return,ft)}}function Hm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Rp(n,a)}catch(o){Fe(e,e.return,o)}}}function Gm(e,n,a){a.props=as(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function lo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Fe(e,n,u)}}function Ci(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function Vm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function Qu(e,n,a){try{var o=e.stateNode;bx(o,e.type,a,n),o[Qe]=n}catch(u){Fe(e,e.return,u)}}function km(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function Ju(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||km(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $u(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Hl));else if(o!==4&&(o===27&&Ra(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for($u(e,n,a),e=e.sibling;e!==null;)$u(e,n,a),e=e.sibling}function Cl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Cl(e,n,a),e=e.sibling;e!==null;)Cl(e,n,a),e=e.sibling}function Xm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,o,a),n[hn]=e,n[Qe]=a}catch(f){Fe(e,e.return,f)}}var Ki=!1,sn=!1,tf=!1,jm=typeof WeakSet=="function"?WeakSet:Set,yn=null;function ax(e,n){if(e=e.containerInfo,Tf=ql,e=np(e),Jc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,T=-1,P=-1,J=0,ft=0,gt=e,nt=null;e:for(;;){for(var at;gt!==a||u!==0&&gt.nodeType!==3||(T=y+u),gt!==f||o!==0&&gt.nodeType!==3||(P=y+o),gt.nodeType===3&&(y+=gt.nodeValue.length),(at=gt.firstChild)!==null;)nt=gt,gt=at;for(;;){if(gt===e)break e;if(nt===a&&++J===u&&(T=y),nt===f&&++ft===o&&(P=y),(at=gt.nextSibling)!==null)break;gt=nt,nt=gt.parentNode}gt=at}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Af={focusedElem:e,selectionRange:a},ql=!1,yn=n;yn!==null;)if(n=yn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,yn=e;else for(;yn!==null;){switch(n=yn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ne=as(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ne,f),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){Fe(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Cf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,yn=e;break}yn=n.return}}function Wm(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ya(e,a),o&4&&oo(5,a);break;case 1:if(ya(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Fe(a,a.return,y)}else{var u=as(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Fe(a,a.return,y)}}o&64&&Hm(a),o&512&&lo(a,a.return);break;case 3:if(ya(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Rp(e,n)}catch(y){Fe(a,a.return,y)}}break;case 27:n===null&&o&4&&Xm(a);case 26:case 5:ya(e,a),n===null&&o&4&&Vm(a),o&512&&lo(a,a.return);break;case 12:ya(e,a);break;case 13:ya(e,a),o&4&&Zm(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=dx.bind(null,a),Ux(e,a))));break;case 22:if(o=a.memoizedState!==null||Ki,!o){n=n!==null&&n.memoizedState!==null||sn,u=Ki;var f=sn;Ki=o,(sn=n)&&!f?Sa(e,a,(a.subtreeFlags&8772)!==0):ya(e,a),Ki=u,sn=f}break;case 30:break;default:ya(e,a)}}function qm(e){var n=e.alternate;n!==null&&(e.alternate=null,qm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&As(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Gn=!1;function Qi(e,n,a){for(a=a.child;a!==null;)Ym(e,n,a),a=a.sibling}function Ym(e,n,a){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:sn||Ci(a,n),Qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:sn||Ci(a,n);var o=We,u=Gn;Ra(a.type)&&(We=a.stateNode,Gn=!1),Qi(e,n,a),vo(a.stateNode),We=o,Gn=u;break;case 5:sn||Ci(a,n);case 6:if(o=We,u=Gn,We=null,Qi(e,n,a),We=o,Gn=u,We!==null)if(Gn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:We!==null&&(Gn?(e=We,zg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ao(e)):zg(We,a.stateNode));break;case 4:o=We,u=Gn,We=a.stateNode.containerInfo,Gn=!0,Qi(e,n,a),We=o,Gn=u;break;case 0:case 11:case 14:case 15:sn||xa(2,a,n),sn||xa(4,a,n),Qi(e,n,a);break;case 1:sn||(Ci(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Gm(a,n,o)),Qi(e,n,a);break;case 21:Qi(e,n,a);break;case 22:sn=(o=sn)||a.memoizedState!==null,Qi(e,n,a),sn=o;break;default:Qi(e,n,a)}}function Zm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ao(e)}catch(a){Fe(n,n.return,a)}}function sx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new jm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new jm),n;default:throw Error(s(435,e.tag))}}function ef(e,n){var a=sx(e);n.forEach(function(o){var u=px.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function Zn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,y=n,T=y;t:for(;T!==null;){switch(T.tag){case 27:if(Ra(T.type)){We=T.stateNode,Gn=!1;break t}break;case 5:We=T.stateNode,Gn=!1;break t;case 3:case 4:We=T.stateNode.containerInfo,Gn=!0;break t}T=T.return}if(We===null)throw Error(s(160));Ym(f,y,u),We=null,Gn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Km(n,e),n=n.sibling}var mi=null;function Km(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zn(n,e),Kn(e),o&4&&(xa(3,e,e.return),oo(3,e),xa(5,e,e.return));break;case 1:Zn(n,e),Kn(e),o&512&&(sn||a===null||Ci(a,a.return)),o&64&&Ki&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=mi;if(Zn(n,e),Kn(e),o&512&&(sn||a===null||Ci(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ai]||f[hn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),An(f,o,a),f[hn]=e,on(f),o=f;break t;case"link":var y=Xg("link","href",u).get(o+(a.href||""));if(y){for(var T=0;T<y.length;T++)if(f=y[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(T,1);break e}}f=u.createElement(o),An(f,o,a),u.head.appendChild(f);break;case"meta":if(y=Xg("meta","content",u).get(o+(a.content||""))){for(T=0;T<y.length;T++)if(f=y[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(T,1);break e}}f=u.createElement(o),An(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[hn]=e,on(f),o=f}e.stateNode=o}else jg(u,e.type,e.stateNode);else e.stateNode=kg(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?jg(u,e.type,e.stateNode):kg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Qu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Zn(n,e),Kn(e),o&512&&(sn||a===null||Ci(a,a.return)),a!==null&&o&4&&Qu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Zn(n,e),Kn(e),o&512&&(sn||a===null||Ci(a,a.return)),e.flags&32){u=e.stateNode;try{Bn(u,"")}catch(at){Fe(e,e.return,at)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Qu(e,u,a!==null?a.memoizedProps:u)),o&1024&&(tf=!0);break;case 6:if(Zn(n,e),Kn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(at){Fe(e,e.return,at)}}break;case 3:if(Xl=null,u=mi,mi=Vl(n.containerInfo),Zn(n,e),mi=u,Kn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ao(n.containerInfo)}catch(at){Fe(e,e.return,at)}tf&&(tf=!1,Qm(e));break;case 4:o=mi,mi=Vl(e.stateNode.containerInfo),Zn(n,e),Kn(e),mi=o;break;case 12:Zn(n,e),Kn(e);break;case 13:Zn(n,e),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(lf=Ft()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ef(e,o)));break;case 22:u=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,J=Ki,ft=sn;if(Ki=J||u,sn=ft||P,Zn(n,e),sn=ft,Ki=J,Kn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||P||Ki||sn||ss(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{T=P.stateNode;var gt=P.memoizedProps.style,nt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;T.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(at){Fe(P,P.return,at)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=u?"":P.memoizedProps}catch(at){Fe(P,P.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ef(e,a))));break;case 19:Zn(n,e),Kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ef(e,o)));break;case 30:break;case 21:break;default:Zn(n,e),Kn(e)}}function Kn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(km(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Ju(e);Cl(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(Bn(y,""),a.flags&=-33);var T=Ju(e);Cl(e,T,y);break;case 3:case 4:var P=a.stateNode.containerInfo,J=Ju(e);$u(e,J,P);break;default:throw Error(s(161))}}catch(ft){Fe(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Qm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Qm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ya(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Wm(e,n.alternate,n),n=n.sibling}function ss(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:xa(4,n,n.return),ss(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Gm(n,n.return,a),ss(n);break;case 27:vo(n.stateNode);case 26:case 5:Ci(n,n.return),ss(n);break;case 22:n.memoizedState===null&&ss(n);break;case 30:ss(n);break;default:ss(n)}e=e.sibling}}function Sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:Sa(u,f,a),oo(4,f);break;case 1:if(Sa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Fe(o,o.return,J)}if(o=f,u=o.updateQueue,u!==null){var T=o.stateNode;try{var P=u.shared.hiddenCallbacks;if(P!==null)for(u.shared.hiddenCallbacks=null,u=0;u<P.length;u++)Ap(P[u],T)}catch(J){Fe(o,o.return,J)}}a&&y&64&&Hm(f),lo(f,f.return);break;case 27:Xm(f);case 26:case 5:Sa(u,f,a),a&&o===null&&y&4&&Vm(f),lo(f,f.return);break;case 12:Sa(u,f,a);break;case 13:Sa(u,f,a),a&&y&4&&Zm(u,f);break;case 22:f.memoizedState===null&&Sa(u,f,a),lo(f,f.return);break;case 30:break;default:Sa(u,f,a)}n=n.sibling}}function nf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&qr(a))}function af(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qr(e))}function Di(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Jm(e,n,a,o),n=n.sibling}function Jm(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Di(e,n,a,o),u&2048&&oo(9,n);break;case 1:Di(e,n,a,o);break;case 3:Di(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qr(e)));break;case 12:if(u&2048){Di(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,T=f.onPostCommit;typeof T=="function"&&T(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Fe(n,n.return,P)}}else Di(e,n,a,o);break;case 13:Di(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Di(e,n,a,o):co(e,n):f._visibility&2?Di(e,n,a,o):(f._visibility|=2,Ws(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&nf(y,n);break;case 24:Di(e,n,a,o),u&2048&&af(n.alternate,n);break;default:Di(e,n,a,o)}}function Ws(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,y=n,T=a,P=o,J=y.flags;switch(y.tag){case 0:case 11:case 15:Ws(f,y,T,P,u),oo(8,y);break;case 23:break;case 22:var ft=y.stateNode;y.memoizedState!==null?ft._visibility&2?Ws(f,y,T,P,u):co(f,y):(ft._visibility|=2,Ws(f,y,T,P,u)),u&&J&2048&&nf(y.alternate,y);break;case 24:Ws(f,y,T,P,u),u&&J&2048&&af(y.alternate,y);break;default:Ws(f,y,T,P,u)}n=n.sibling}}function co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:co(a,o),u&2048&&nf(o.alternate,o);break;case 24:co(a,o),u&2048&&af(o.alternate,o);break;default:co(a,o)}n=n.sibling}}var uo=8192;function qs(e){if(e.subtreeFlags&uo)for(e=e.child;e!==null;)$m(e),e=e.sibling}function $m(e){switch(e.tag){case 26:qs(e),e.flags&uo&&e.memoizedState!==null&&Xx(mi,e.memoizedState,e.memoizedProps);break;case 5:qs(e);break;case 3:case 4:var n=mi;mi=Vl(e.stateNode.containerInfo),qs(e),mi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=uo,uo=16777216,qs(e),uo=n):qs(e));break;default:qs(e)}}function tg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function fo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,ng(o,e)}tg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)eg(e),e=e.sibling}function eg(e){switch(e.tag){case 0:case 11:case 15:fo(e),e.flags&2048&&xa(9,e,e.return);break;case 3:fo(e);break;case 12:fo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Dl(e)):fo(e);break;default:fo(e)}}function Dl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,ng(o,e)}tg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:xa(8,n,n.return),Dl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Dl(n));break;default:Dl(n)}e=e.sibling}}function ng(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:qr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else t:for(a=e;yn!==null;){o=yn;var u=o.sibling,f=o.return;if(qm(o),o===a){yn=null;break t}if(u!==null){u.return=f,yn=u;break t}yn=f}}}var rx={getCacheForType:function(e){var n=Dn(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},ox=typeof WeakMap=="function"?WeakMap:Map,De=0,Ve=null,_e=null,ye=0,Ue=0,Qn=null,Ma=!1,Ys=!1,sf=!1,Ji=0,tn=0,Ea=0,rs=0,rf=0,li=0,Zs=0,ho=null,Vn=null,of=!1,lf=0,Ul=1/0,Nl=null,ba=null,Tn=0,Ta=null,Ks=null,Qs=0,cf=0,uf=null,ig=null,po=0,ff=null;function Jn(){if((De&2)!==0&&ye!==0)return ye&-ye;if(z.T!==null){var e=Bs;return e!==0?e:vf()}return Me()}function ag(){li===0&&(li=(ye&536870912)===0||Re?X():536870912);var e=oi.current;return e!==null&&(e.flags|=32),li}function $n(e,n,a){(e===Ve&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(Js(e,0),Aa(e,ye,li,!1)),It(e,a),((De&2)===0||e!==Ve)&&(e===Ve&&((De&2)===0&&(rs|=a),tn===4&&Aa(e,ye,li,!1)),Ui(e))}function sg(e,n,a){if((De&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Dt(e,n),u=o?ux(e,n):pf(e,n,!0),f=o;do{if(u===0){Ys&&!o&&Aa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!lx(a)){u=pf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var T=e;u=ho;var P=T.current.memoizedState.isDehydrated;if(P&&(Js(T,y).flags|=256),y=pf(T,y,!1),y!==2){if(sf&&!P){T.errorRecoveryDisabledLanes|=f,rs|=f,u=4;break t}f=Vn,Vn=u,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){Js(e,0),Aa(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Aa(o,n,li,!Ma);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=lf+300-Ft(),10<u)){if(Aa(o,n,li,!Ma),kt(o,0,!0)!==0)break t;o.timeoutHandle=Og(rg.bind(null,o,a,Vn,Nl,of,n,li,rs,Zs,Ma,f,2,-0,0),u);break t}rg(o,a,Vn,Nl,of,n,li,rs,Zs,Ma,f,0,-0,0)}}break}while(!0);Ui(e)}function rg(e,n,a,o,u,f,y,T,P,J,ft,gt,nt,at){if(e.timeoutHandle=-1,gt=n.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(So={stylesheets:null,count:0,unsuspend:kx},$m(n),gt=jx(),gt!==null)){e.cancelPendingCommit=gt(dg.bind(null,e,n,f,a,o,u,y,T,P,ft,1,nt,at)),Aa(e,f,y,!J);return}dg(e,n,f,a,o,u,y,T,P)}function lx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Aa(e,n,a,o){n&=~rf,n&=~rs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-zt(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&_t(e,a,n)}function Ll(){return(De&6)===0?(mo(0),!1):!0}function hf(){if(_e!==null){if(Ue===0)var e=_e.return;else e=_e,Xi=ts=null,wu(e),Xs=null,ao=0,e=_e;for(;e!==null;)Fm(e.alternate,e),e=e.return;_e=null}}function Js(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ax(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),hf(),Ve=e,_e=a=Gi(e.current,null),ye=n,Ue=0,Qn=null,Ma=!1,Ys=Dt(e,n),sf=!1,Zs=li=rf=rs=Ea=tn=0,Vn=ho=null,of=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-zt(o),f=1<<u;n|=e[u],o&=~f}return Ji=n,el(),a}function og(e,n){de=null,z.H=yl,n===Zr||n===ul?(n=bp(),Ue=3):n===Sp?(n=bp(),Ue=4):Ue=n===Tm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,_e===null&&(tn=1,Tl(e,ii(n,e.current)))}function lg(){var e=z.H;return z.H=yl,e===null?yl:e}function cg(){var e=z.A;return z.A=rx,e}function df(){tn=4,Ma||(ye&4194048)!==ye&&oi.current!==null||(Ys=!0),(Ea&134217727)===0&&(rs&134217727)===0||Ve===null||Aa(Ve,ye,li,!1)}function pf(e,n,a){var o=De;De|=2;var u=lg(),f=cg();(Ve!==e||ye!==n)&&(Nl=null,Js(e,n)),n=!1;var y=tn;t:do try{if(Ue!==0&&_e!==null){var T=_e,P=Qn;switch(Ue){case 8:hf(),y=6;break t;case 3:case 2:case 9:case 6:oi.current===null&&(n=!0);var J=Ue;if(Ue=0,Qn=null,$s(e,T,P,J),a&&Ys){y=0;break t}break;default:J=Ue,Ue=0,Qn=null,$s(e,T,P,J)}}cx(),y=tn;break}catch(ft){og(e,ft)}while(!0);return n&&e.shellSuspendCounter++,Xi=ts=null,De=o,z.H=u,z.A=f,_e===null&&(Ve=null,ye=0,el()),y}function cx(){for(;_e!==null;)ug(_e)}function ux(e,n){var a=De;De|=2;var o=lg(),u=cg();Ve!==e||ye!==n?(Nl=null,Ul=Ft()+500,Js(e,n)):Ys=Dt(e,n);t:do try{if(Ue!==0&&_e!==null){n=_e;var f=Qn;e:switch(Ue){case 1:Ue=0,Qn=null,$s(e,n,f,1);break;case 2:case 9:if(Mp(f)){Ue=0,Qn=null,fg(n);break}n=function(){Ue!==2&&Ue!==9||Ve!==e||(Ue=7),Ui(e)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:Mp(f)?(Ue=0,Qn=null,fg(n)):(Ue=0,Qn=null,$s(e,n,f,7));break;case 5:var y=null;switch(_e.tag){case 26:y=_e.memoizedState;case 5:case 27:var T=_e;if(!y||Wg(y)){Ue=0,Qn=null;var P=T.sibling;if(P!==null)_e=P;else{var J=T.return;J!==null?(_e=J,Ol(J)):_e=null}break e}}Ue=0,Qn=null,$s(e,n,f,5);break;case 6:Ue=0,Qn=null,$s(e,n,f,6);break;case 8:hf(),tn=6;break t;default:throw Error(s(462))}}fx();break}catch(ft){og(e,ft)}while(!0);return Xi=ts=null,z.H=o,z.A=u,De=a,_e!==null?0:(Ve=null,ye=0,el(),tn)}function fx(){for(;_e!==null&&!Qt();)ug(_e)}function ug(e){var n=Im(e.alternate,e,Ji);e.memoizedProps=e.pendingProps,n===null?Ol(e):_e=n}function fg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Um(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Um(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:wu(n);default:Fm(a,n),n=_e=hp(n,Ji),n=Im(a,n,Ji)}e.memoizedProps=e.pendingProps,n===null?Ol(e):_e=n}function $s(e,n,a,o){Xi=ts=null,wu(n),Xs=null,ao=0;var u=n.return;try{if(tx(e,u,n,a,ye)){tn=1,Tl(e,ii(a,e.current)),_e=null;return}}catch(f){if(u!==null)throw _e=u,f;tn=1,Tl(e,ii(a,e.current)),_e=null;return}n.flags&32768?(Re||o===1?e=!0:Ys||(ye&536870912)!==0?e=!1:(Ma=e=!0,(o===2||o===9||o===3||o===6)&&(o=oi.current,o!==null&&o.tag===13&&(o.flags|=16384))),hg(n,e)):Ol(n)}function Ol(e){var n=e;do{if((n.flags&32768)!==0){hg(n,Ma);return}e=n.return;var a=nx(n.alternate,n,Ji);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);tn===0&&(tn=5)}function hg(e,n){do{var a=ix(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);tn=6,_e=null}function dg(e,n,a,o,u,f,y,T,P){e.cancelPendingCommit=null;do Pl();while(Tn!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=iu,bt(e,a,f,y,T,P),e===Ve&&(_e=Ve=null,ye=0),Ks=n,Ta=e,Qs=a,cf=f,uf=u,ig=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,mx(Ye,function(){return vg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=K.p,K.p=2,y=De,De|=4;try{ax(e,n,a)}finally{De=y,K.p=u,z.T=o}}Tn=1,pg(),mg(),gg()}}function pg(){if(Tn===1){Tn=0;var e=Ta,n=Ks,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=K.p;K.p=2;var u=De;De|=4;try{Km(n,e);var f=Af,y=np(e.containerInfo),T=f.focusedElem,P=f.selectionRange;if(y!==T&&T&&T.ownerDocument&&ep(T.ownerDocument.documentElement,T)){if(P!==null&&Jc(T)){var J=P.start,ft=P.end;if(ft===void 0&&(ft=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ft,T.value.length);else{var gt=T.ownerDocument||document,nt=gt&&gt.defaultView||window;if(nt.getSelection){var at=nt.getSelection(),ne=T.textContent.length,$t=Math.min(P.start,ne),Pe=P.end===void 0?$t:Math.min(P.end,ne);!at.extend&&$t>Pe&&(y=Pe,Pe=$t,$t=y);var W=tp(T,$t),k=tp(T,Pe);if(W&&k&&(at.rangeCount!==1||at.anchorNode!==W.node||at.anchorOffset!==W.offset||at.focusNode!==k.node||at.focusOffset!==k.offset)){var Q=gt.createRange();Q.setStart(W.node,W.offset),at.removeAllRanges(),$t>Pe?(at.addRange(Q),at.extend(k.node,k.offset)):(Q.setEnd(k.node,k.offset),at.addRange(Q))}}}}for(gt=[],at=T;at=at.parentNode;)at.nodeType===1&&gt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<gt.length;T++){var mt=gt[T];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}ql=!!Tf,Af=Tf=null}finally{De=u,K.p=o,z.T=a}}e.current=n,Tn=2}}function mg(){if(Tn===2){Tn=0;var e=Ta,n=Ks,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=K.p;K.p=2;var u=De;De|=4;try{Wm(e,n.alternate,n)}finally{De=u,K.p=o,z.T=a}}Tn=3}}function gg(){if(Tn===4||Tn===3){Tn=0,Se();var e=Ta,n=Ks,a=Qs,o=ig;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,Ks=Ta=null,_g(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ba=null),Ce(a),n=n.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=K.p,K.p=2,z.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var T=o[y];f(T.value,{componentStack:T.stack})}}finally{z.T=n,K.p=u}}(Qs&3)!==0&&Pl(),Ui(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===ff?po++:(po=0,ff=e):po=0,mo(0)}}function _g(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,qr(n)))}function Pl(e){return pg(),mg(),gg(),vg()}function vg(){if(Tn!==5)return!1;var e=Ta,n=cf;cf=0;var a=Ce(Qs),o=z.T,u=K.p;try{K.p=32>a?32:a,z.T=null,a=uf,uf=null;var f=Ta,y=Qs;if(Tn=0,Ks=Ta=null,Qs=0,(De&6)!==0)throw Error(s(331));var T=De;if(De|=4,eg(f.current),Jm(f,f.current,y,a),De=T,mo(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(ut,f)}catch{}return!0}finally{K.p=u,z.T=o,_g(e,n)}}function xg(e,n,a){n=ii(a,n),n=Vu(e.stateNode,n,2),e=ma(e,n,2),e!==null&&(It(e,2),Ui(e))}function Fe(e,n,a){if(e.tag===3)xg(e,e,a);else for(;n!==null;){if(n.tag===3){xg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ba===null||!ba.has(o))){e=ii(a,e),a=Em(2),o=ma(n,a,2),o!==null&&(bm(a,o,n,e),It(o,2),Ui(o));break}}n=n.return}}function mf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new ox;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(sf=!0,u.add(a),e=hx.bind(null,e,n,a),n.then(e,e))}function hx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(ye&a)===a&&(tn===4||tn===3&&(ye&62914560)===ye&&300>Ft()-lf?(De&2)===0&&Js(e,0):rf|=a,Zs===ye&&(Zs=0)),Ui(e)}function yg(e,n){n===0&&(n=At()),e=Os(e,n),e!==null&&(It(e,n),Ui(e))}function dx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),yg(e,a)}function px(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),yg(e,a)}function mx(e,n){return F(e,n)}var zl=null,tr=null,gf=!1,Il=!1,_f=!1,os=0;function Ui(e){e!==tr&&e.next===null&&(tr===null?zl=tr=e:tr=tr.next=e),Il=!0,gf||(gf=!0,_x())}function mo(e,n){if(!_f&&Il){_f=!0;do for(var a=!1,o=zl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-zt(42|e)+1)-1,f&=u&~(y&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,bg(o,f))}else f=ye,f=kt(o,o===Ve?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Dt(o,f)||(a=!0,bg(o,f));o=o.next}while(a);_f=!1}}function gx(){Sg()}function Sg(){Il=gf=!1;var e=0;os!==0&&(Tx()&&(e=os),os=0);for(var n=Ft(),a=null,o=zl;o!==null;){var u=o.next,f=Mg(o,n);f===0?(o.next=null,a===null?zl=u:a.next=u,u===null&&(tr=a)):(a=o,(e!==0||(f&3)!==0)&&(Il=!0)),o=u}mo(e)}function Mg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-zt(f),T=1<<y,P=u[y];P===-1?((T&a)===0||(T&o)!==0)&&(u[y]=se(T,n)):P<=n&&(e.expiredLanes|=T),f&=~T}if(n=Ve,a=ye,a=kt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&we(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&we(o),Ce(a)){case 2:case 8:a=re;break;case 32:a=Ye;break;case 268435456:a=L;break;default:a=Ye}return o=Eg.bind(null,e),a=F(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&we(o),e.callbackPriority=2,e.callbackNode=null,2}function Eg(e,n){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Pl()&&e.callbackNode!==a)return null;var o=ye;return o=kt(e,e===Ve?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(sg(e,o,n),Mg(e,Ft()),e.callbackNode!=null&&e.callbackNode===a?Eg.bind(null,e):null)}function bg(e,n){if(Pl())return null;sg(e,n,!0)}function _x(){Rx(function(){(De&6)!==0?F(Ht,gx):Sg()})}function vf(){return os===0&&(os=X()),os}function Tg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yo(""+e)}function Ag(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function vx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Tg((u[Qe]||null).action),y=o.submitter;y&&(n=(n=y[Qe]||null)?Tg(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var T=new Jo("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(os!==0){var P=y?Ag(u,y):new FormData(u);Iu(a,{pending:!0,data:P,method:u.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=y?Ag(u,y):new FormData(u),Iu(a,{pending:!0,data:P,method:u.method,action:f},f,P))},currentTarget:u}]})}}for(var xf=0;xf<nu.length;xf++){var yf=nu[xf],xx=yf.toLowerCase(),yx=yf[0].toUpperCase()+yf.slice(1);pi(xx,"on"+yx)}pi(sp,"onAnimationEnd"),pi(rp,"onAnimationIteration"),pi(op,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(Iv,"onTransitionRun"),pi(Bv,"onTransitionStart"),pi(Fv,"onTransitionCancel"),pi(lp,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(go));function Rg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var T=o[y],P=T.instance,J=T.currentTarget;if(T=T.listener,P!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=J;try{f(u)}catch(ft){bl(ft)}u.currentTarget=null,f=P}else for(y=0;y<o.length;y++){if(T=o[y],P=T.instance,J=T.currentTarget,T=T.listener,P!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=J;try{f(u)}catch(ft){bl(ft)}u.currentTarget=null,f=P}}}}function ve(e,n){var a=n[bs];a===void 0&&(a=n[bs]=new Set);var o=e+"__bubble";a.has(o)||(wg(n,e,2,!1),a.add(o))}function Sf(e,n,a){var o=0;n&&(o|=4),wg(a,e,o,n)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function Mf(e){if(!e[Bl]){e[Bl]=!0,Wo.forEach(function(a){a!=="selectionchange"&&(Sx.has(a)||Sf(a,!1,e),Sf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Bl]||(n[Bl]=!0,Sf("selectionchange",!1,n))}}function wg(e,n,a,o){switch(Jg(n)){case 2:var u=Yx;break;case 8:u=Zx;break;default:u=zf}a=u.bind(null,n,a,e),u=void 0,!kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Ef(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var T=o.stateNode.containerInfo;if(T===u)break;if(y===4)for(y=o.return;y!==null;){var P=y.tag;if((P===3||P===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;T!==null;){if(y=Fi(T),y===null)return;if(P=y.tag,P===5||P===6||P===26||P===27){o=f=y;continue t}T=T.parentNode}}o=o.return}Pd(function(){var J=f,ft=Gc(a),gt=[];t:{var nt=cp.get(e);if(nt!==void 0){var at=Jo,ne=e;switch(e){case"keypress":if(Ko(a)===0)break t;case"keydown":case"keyup":at=mv;break;case"focusin":ne="focus",at=qc;break;case"focusout":ne="blur",at=qc;break;case"beforeblur":case"afterblur":at=qc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=iv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=vv;break;case sp:case rp:case op:at=rv;break;case lp:at=yv;break;case"scroll":case"scrollend":at=ev;break;case"wheel":at=Mv;break;case"copy":case"cut":case"paste":at=lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=Hd;break;case"toggle":case"beforetoggle":at=bv}var $t=(n&4)!==0,Pe=!$t&&(e==="scroll"||e==="scrollend"),W=$t?nt!==null?nt+"Capture":null:nt;$t=[];for(var k=J,Q;k!==null;){var mt=k;if(Q=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||Q===null||W===null||(mt=Or(k,W),mt!=null&&$t.push(_o(k,mt,Q))),Pe)break;k=k.return}0<$t.length&&(nt=new at(nt,ne,null,a,ft),gt.push({event:nt,listeners:$t}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",at=e==="mouseout"||e==="pointerout",nt&&a!==Hc&&(ne=a.relatedTarget||a.fromElement)&&(Fi(ne)||ne[Ti]))break t;if((at||nt)&&(nt=ft.window===ft?ft:(nt=ft.ownerDocument)?nt.defaultView||nt.parentWindow:window,at?(ne=a.relatedTarget||a.toElement,at=J,ne=ne?Fi(ne):null,ne!==null&&(Pe=c(ne),$t=ne.tag,ne!==Pe||$t!==5&&$t!==27&&$t!==6)&&(ne=null)):(at=null,ne=J),at!==ne)){if($t=Bd,mt="onMouseLeave",W="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&($t=Hd,mt="onPointerLeave",W="onPointerEnter",k="pointer"),Pe=at==null?nt:ja(at),Q=ne==null?nt:ja(ne),nt=new $t(mt,k+"leave",at,a,ft),nt.target=Pe,nt.relatedTarget=Q,mt=null,Fi(ft)===J&&($t=new $t(W,k+"enter",ne,a,ft),$t.target=Q,$t.relatedTarget=Pe,mt=$t),Pe=mt,at&&ne)e:{for($t=at,W=ne,k=0,Q=$t;Q;Q=er(Q))k++;for(Q=0,mt=W;mt;mt=er(mt))Q++;for(;0<k-Q;)$t=er($t),k--;for(;0<Q-k;)W=er(W),Q--;for(;k--;){if($t===W||W!==null&&$t===W.alternate)break e;$t=er($t),W=er(W)}$t=null}else $t=null;at!==null&&Cg(gt,nt,at,$t,!1),ne!==null&&Pe!==null&&Cg(gt,Pe,ne,$t,!0)}}t:{if(nt=J?ja(J):window,at=nt.nodeName&&nt.nodeName.toLowerCase(),at==="select"||at==="input"&&nt.type==="file")var Gt=Yd;else if(Wd(nt))if(Zd)Gt=Ov;else{Gt=Nv;var pe=Uv}else at=nt.nodeName,!at||at.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?J&&Fc(J.elementType)&&(Gt=Yd):Gt=Lv;if(Gt&&(Gt=Gt(e,J))){qd(gt,Gt,a,ft);break t}pe&&pe(e,nt,J),e==="focusout"&&J&&nt.type==="number"&&J.memoizedProps.value!=null&&Cn(nt,"number",nt.value)}switch(pe=J?ja(J):window,e){case"focusin":(Wd(pe)||pe.contentEditable==="true")&&(Us=pe,$c=J,Vr=null);break;case"focusout":Vr=$c=Us=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,ip(gt,a,ft);break;case"selectionchange":if(zv)break;case"keydown":case"keyup":ip(gt,a,ft)}var Yt;if(Zc)t:{switch(e){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Ds?Xd(e,a)&&(ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(Gd&&a.locale!=="ko"&&(Ds||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Ds&&(Yt=zd()):(fa=ft,Xc="value"in fa?fa.value:fa.textContent,Ds=!0)),pe=Fl(J,ee),0<pe.length&&(ee=new Fd(ee,e,null,a,ft),gt.push({event:ee,listeners:pe}),Yt?ee.data=Yt:(Yt=jd(a),Yt!==null&&(ee.data=Yt)))),(Yt=Av?Rv(e,a):wv(e,a))&&(ee=Fl(J,"onBeforeInput"),0<ee.length&&(pe=new Fd("onBeforeInput","beforeinput",null,a,ft),gt.push({event:pe,listeners:ee}),pe.data=Yt)),vx(gt,e,J,a,ft)}Rg(gt,n)})}function _o(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Fl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Or(e,a),u!=null&&o.unshift(_o(e,u,f)),u=Or(e,n),u!=null&&o.push(_o(e,u,f))),e.tag===3)return o;e=e.return}return[]}function er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Cg(e,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var T=a,P=T.alternate,J=T.stateNode;if(T=T.tag,P!==null&&P===o)break;T!==5&&T!==26&&T!==27||J===null||(P=J,u?(J=Or(a,f),J!=null&&y.unshift(_o(a,J,P))):u||(J=Or(a,f),J!=null&&y.push(_o(a,J,P)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var Mx=/\r\n?/g,Ex=/\u0000|\uFFFD/g;function Dg(e){return(typeof e=="string"?e:""+e).replace(Mx,`
`).replace(Ex,"")}function Ug(e,n){return n=Dg(n),Dg(e)===n}function Hl(){}function Oe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Bn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Bn(e,""+o);break;case"className":Bt(e,"class",o);break;case"tabIndex":Bt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Bt(e,a,o);break;case"style":Ld(e,o,f);break;case"data":if(n!=="object"){Bt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Yo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",u.name,u,null),Oe(e,n,"formEncType",u.formEncType,u,null),Oe(e,n,"formMethod",u.formMethod,u,null),Oe(e,n,"formTarget",u.formTarget,u,null)):(Oe(e,n,"encType",u.encType,u,null),Oe(e,n,"method",u.method,u,null),Oe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Yo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Hl);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Yo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Ut(e,"popover",o);break;case"xlinkActuate":Lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Lt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Lt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Lt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Lt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ut(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=$0.get(a)||a,Ut(e,a,o))}}function bf(e,n,a,o,u,f){switch(a){case"style":Ld(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Bn(e,o):(typeof o=="number"||typeof o=="bigint")&&Bn(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Hl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Qe]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ut(e,a,o)}}}function An(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Oe(e,n,f,y,a,null)}}u&&Oe(e,n,"srcSet",a.srcSet,a,null),o&&Oe(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var T=f=y=u=null,P=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ft=a[o];if(ft!=null)switch(o){case"name":u=ft;break;case"type":y=ft;break;case"checked":P=ft;break;case"defaultChecked":J=ft;break;case"value":f=ft;break;case"defaultValue":T=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Oe(e,n,o,ft,a,null)}}Pn(e,f,T,P,J,y,u,!1),ge(e);return;case"select":ve("invalid",e),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":y=T;break;case"multiple":o=T;default:Oe(e,n,u,T,a,null)}n=f,a=y,e.multiple=!!o,n!=null?Je(e,!!o,n,!1):a!=null&&Je(e,!!o,a,!0);return;case"textarea":ve("invalid",e),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(T=a[y],T!=null))switch(y){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Oe(e,n,y,T,a,null)}Rs(e,o,u,f),ge(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Oe(e,n,P,o,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<go.length;o++)ve(go[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Oe(e,n,J,o,a,null)}return;default:if(Fc(n)){for(ft in a)a.hasOwnProperty(ft)&&(o=a[ft],o!==void 0&&bf(e,n,ft,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Oe(e,n,T,o,a,null))}function bx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,T=null,P=null,J=null,ft=null;for(at in a){var gt=a[at];if(a.hasOwnProperty(at)&&gt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":P=gt;default:o.hasOwnProperty(at)||Oe(e,n,at,null,o,gt)}}for(var nt in o){var at=o[nt];if(gt=a[nt],o.hasOwnProperty(nt)&&(at!=null||gt!=null))switch(nt){case"type":f=at;break;case"name":u=at;break;case"checked":J=at;break;case"defaultChecked":ft=at;break;case"value":y=at;break;case"defaultValue":T=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:at!==gt&&Oe(e,n,nt,at,o,gt)}}Be(e,y,T,P,J,ft,f,u);return;case"select":at=y=T=nt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":at=P;default:o.hasOwnProperty(f)||Oe(e,n,f,null,o,P)}for(u in o)if(f=o[u],P=a[u],o.hasOwnProperty(u)&&(f!=null||P!=null))switch(u){case"value":nt=f;break;case"defaultValue":T=f;break;case"multiple":y=f;default:f!==P&&Oe(e,n,u,f,o,P)}n=T,a=y,o=at,nt!=null?Je(e,!!a,nt,!1):!!o!=!!a&&(n!=null?Je(e,!!a,n,!0):Je(e,!!a,a?[]:"",!1));return;case"textarea":at=nt=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Oe(e,n,T,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":nt=u;break;case"defaultValue":at=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Oe(e,n,y,u,o,f)}En(e,nt,at);return;case"option":for(var ne in a)if(nt=a[ne],a.hasOwnProperty(ne)&&nt!=null&&!o.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Oe(e,n,ne,null,o,nt)}for(P in o)if(nt=o[P],at=a[P],o.hasOwnProperty(P)&&nt!==at&&(nt!=null||at!=null))switch(P){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Oe(e,n,P,nt,o,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)nt=a[$t],a.hasOwnProperty($t)&&nt!=null&&!o.hasOwnProperty($t)&&Oe(e,n,$t,null,o,nt);for(J in o)if(nt=o[J],at=a[J],o.hasOwnProperty(J)&&nt!==at&&(nt!=null||at!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Oe(e,n,J,nt,o,at)}return;default:if(Fc(n)){for(var Pe in a)nt=a[Pe],a.hasOwnProperty(Pe)&&nt!==void 0&&!o.hasOwnProperty(Pe)&&bf(e,n,Pe,void 0,o,nt);for(ft in o)nt=o[ft],at=a[ft],!o.hasOwnProperty(ft)||nt===at||nt===void 0&&at===void 0||bf(e,n,ft,nt,o,at);return}}for(var W in a)nt=a[W],a.hasOwnProperty(W)&&nt!=null&&!o.hasOwnProperty(W)&&Oe(e,n,W,null,o,nt);for(gt in o)nt=o[gt],at=a[gt],!o.hasOwnProperty(gt)||nt===at||nt==null&&at==null||Oe(e,n,gt,nt,o,at)}var Tf=null,Af=null;function Gl(e){return e.nodeType===9?e:e.ownerDocument}function Ng(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Rf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wf=null;function Tx(){var e=window.event;return e&&e.type==="popstate"?e===wf?!1:(wf=e,!0):(wf=null,!1)}var Og=typeof setTimeout=="function"?setTimeout:void 0,Ax=typeof clearTimeout=="function"?clearTimeout:void 0,Pg=typeof Promise=="function"?Promise:void 0,Rx=typeof queueMicrotask=="function"?queueMicrotask:typeof Pg<"u"?function(e){return Pg.resolve(null).then(e).catch(wx)}:Og;function wx(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function zg(e,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var y=e.ownerDocument;if(a&1&&vo(y.documentElement),a&2&&vo(y.body),a&4)for(a=y.head,vo(a),y=a.firstChild;y;){var T=y.nextSibling,P=y.nodeName;y[Ai]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=T}}if(u===0){e.removeChild(f),Ao(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Ao(n)}function Cf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Cf(a),As(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Cx(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ai])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function Dx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function Df(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Ux(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Uf=null;function Ig(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Bg(e,n,a){switch(n=Gl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function vo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);As(e)}var ci=new Map,Fg=new Set;function Vl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $i=K.d;K.d={f:Nx,r:Lx,D:Ox,C:Px,L:zx,m:Ix,X:Fx,S:Bx,M:Hx};function Nx(){var e=$i.f(),n=Ll();return e||n}function Lx(e){var n=ca(e);n!==null&&n.tag===5&&n.type==="form"?sm(n):$i.r(e)}var nr=typeof document>"u"?null:document;function Hg(e,n,a){var o=nr;if(o&&typeof n=="string"&&n){var u=vn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Fg.has(u)||(Fg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),An(n,"link",e),on(n),o.head.appendChild(n)))}}function Ox(e){$i.D(e),Hg("dns-prefetch",e,null)}function Px(e,n){$i.C(e,n),Hg("preconnect",e,n)}function zx(e,n,a){$i.L(e,n,a);var o=nr;if(o&&e&&n){var u='link[rel="preload"][as="'+vn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+vn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+vn(a.imageSizes)+'"]')):u+='[href="'+vn(e)+'"]';var f=u;switch(n){case"style":f=ir(e);break;case"script":f=ar(e)}ci.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ci.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(xo(f))||n==="script"&&o.querySelector(yo(f))||(n=o.createElement("link"),An(n,"link",e),on(n),o.head.appendChild(n)))}}function Ix(e,n){$i.m(e,n);var a=nr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+vn(o)+'"][href="'+vn(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ar(e)}if(!ci.has(f)&&(e=g({rel:"modulepreload",href:e},n),ci.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yo(f)))return}o=a.createElement("link"),An(o,"link",e),on(o),a.head.appendChild(o)}}}function Bx(e,n,a){$i.S(e,n,a);var o=nr;if(o&&e){var u=ua(o).hoistableStyles,f=ir(e);n=n||"default";var y=u.get(f);if(!y){var T={loading:0,preload:null};if(y=o.querySelector(xo(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ci.get(f))&&Nf(e,a);var P=y=o.createElement("link");on(P),An(P,"link",e),P._p=new Promise(function(J,ft){P.onload=J,P.onerror=ft}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,kl(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:T},u.set(f,y)}}}function Fx(e,n){$i.X(e,n);var a=nr;if(a&&e){var o=ua(a).hoistableScripts,u=ar(e),f=o.get(u);f||(f=a.querySelector(yo(u)),f||(e=g({src:e,async:!0},n),(n=ci.get(u))&&Lf(e,n),f=a.createElement("script"),on(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Hx(e,n){$i.M(e,n);var a=nr;if(a&&e){var o=ua(a).hoistableScripts,u=ar(e),f=o.get(u);f||(f=a.querySelector(yo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ci.get(u))&&Lf(e,n),f=a.createElement("script"),on(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Gg(e,n,a,o){var u=(u=pt.current)?Vl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ir(a.href),a=ua(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ir(a.href);var f=ua(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(xo(e)))&&!f._p&&(y.instance=f,y.state.loading=5),ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(e,a),f||Gx(u,e,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ar(a),a=ua(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ir(e){return'href="'+vn(e)+'"'}function xo(e){return'link[rel="stylesheet"]['+e+"]"}function Vg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Gx(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),An(n,"link",a),on(n),e.head.appendChild(n))}function ar(e){return'[src="'+vn(e)+'"]'}function yo(e){return"script[async]"+e}function kg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+vn(a.href)+'"]');if(o)return n.instance=o,on(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),on(o),An(o,"style",u),kl(o,a.precedence,e),n.instance=o;case"stylesheet":u=ir(a.href);var f=e.querySelector(xo(u));if(f)return n.state.loading|=4,n.instance=f,on(f),f;o=Vg(a),(u=ci.get(u))&&Nf(o,u),f=(e.ownerDocument||e).createElement("link"),on(f);var y=f;return y._p=new Promise(function(T,P){y.onload=T,y.onerror=P}),An(f,"link",o),n.state.loading|=4,kl(f,a.precedence,e),n.instance=f;case"script":return f=ar(a.src),(u=e.querySelector(yo(f)))?(n.instance=u,on(u),u):(o=a,(u=ci.get(f))&&(o=g({},a),Lf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),on(u),An(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,kl(o,a.precedence,e));return n.instance}function kl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var T=o[y];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Nf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Lf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Xl=null;function Xg(e,n,a){if(Xl===null){var o=new Map,u=Xl=new Map;u.set(a,o)}else u=Xl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ai]||f[hn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var T=o.get(y);T?T.push(f):o.set(y,[f])}}return o}function jg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Vx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Wg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var So=null;function kx(){}function Xx(e,n,a){if(So===null)throw Error(s(475));var o=So;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ir(a.href),f=e.querySelector(xo(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=jl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,on(f);return}f=e.ownerDocument||e,a=Vg(a),(u=ci.get(u))&&Nf(a,u),f=f.createElement("link"),on(f);var y=f;y._p=new Promise(function(T,P){y.onload=T,y.onerror=P}),An(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=jl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function jx(){if(So===null)throw Error(s(475));var e=So;return e.stylesheets&&e.count===0&&Of(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Of(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function jl(){if(this.count--,this.count===0){if(this.stylesheets)Of(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wl=null;function Of(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wl=new Map,n.forEach(Wx,e),Wl=null,jl.call(e))}function Wx(e,n){if(!(n.state.loading&4)){var a=Wl.get(e);if(a)var o=a.get(null);else{a=new Map,Wl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=jl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Mo={$$typeof:O,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function qx(e,n,a,o,u,f,y,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function qg(e,n,a,o,u,f,y,T,P,J,ft,gt){return e=new qx(e,n,a,y,T,P,J,gt),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=pu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},vu(f),e}function Yg(e){return e?(e=Ps,e):Ps}function Zg(e,n,a,o,u,f){u=Yg(u),o.context===null?o.context=u:o.pendingContext=u,o=pa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ma(e,o,n),a!==null&&($n(a,e,n),Qr(a,e,n))}function Kg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Pf(e,n){Kg(e,n),(e=e.alternate)&&Kg(e,n)}function Qg(e){if(e.tag===13){var n=Os(e,67108864);n!==null&&$n(n,e,67108864),Pf(e,67108864)}}var ql=!0;function Yx(e,n,a,o){var u=z.T;z.T=null;var f=K.p;try{K.p=2,zf(e,n,a,o)}finally{K.p=f,z.T=u}}function Zx(e,n,a,o){var u=z.T;z.T=null;var f=K.p;try{K.p=8,zf(e,n,a,o)}finally{K.p=f,z.T=u}}function zf(e,n,a,o){if(ql){var u=If(o);if(u===null)Ef(e,n,o,Yl,a),$g(e,o);else if(Qx(u,e,n,a,o))o.stopPropagation();else if($g(e,o),n&4&&-1<Kx.indexOf(e)){for(;u!==null;){var f=ca(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Zt(f.pendingLanes);if(y!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;y;){var P=1<<31-zt(y);T.entanglements[1]|=P,y&=~P}Ui(f),(De&6)===0&&(Ul=Ft()+500,mo(0))}}break;case 13:T=Os(f,2),T!==null&&$n(T,f,2),Ll(),Pf(f,2)}if(f=If(o),f===null&&Ef(e,n,o,Yl,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Ef(e,n,o,null,a)}}function If(e){return e=Gc(e),Bf(e)}var Yl=null;function Bf(e){if(Yl=null,e=Fi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Yl=e,null}function Jg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ge()){case Ht:return 2;case re:return 8;case Ye:case Ze:return 32;case L:return 268435456;default:return 32}default:return 32}}var Ff=!1,wa=null,Ca=null,Da=null,Eo=new Map,bo=new Map,Ua=[],Kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $g(e,n){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(n.pointerId)}}function To(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ca(n),n!==null&&Qg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Qx(e,n,a,o,u){switch(n){case"focusin":return wa=To(wa,e,n,a,o,u),!0;case"dragenter":return Ca=To(Ca,e,n,a,o,u),!0;case"mouseover":return Da=To(Da,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Eo.set(f,To(Eo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,bo.set(f,To(bo.get(f)||null,e,n,a,o,u)),!0}return!1}function t_(e){var n=Fi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,hi(e.priority,function(){if(a.tag===13){var o=Jn();o=ae(o);var u=Os(a,o);u!==null&&$n(u,a,o),Pf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=If(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Hc=o,a.target.dispatchEvent(o),Hc=null}else return n=ca(a),n!==null&&Qg(n),e.blockedOn=a,!1;n.shift()}return!0}function e_(e,n,a){Zl(e)&&a.delete(n)}function Jx(){Ff=!1,wa!==null&&Zl(wa)&&(wa=null),Ca!==null&&Zl(Ca)&&(Ca=null),Da!==null&&Zl(Da)&&(Da=null),Eo.forEach(e_),bo.forEach(e_)}function Kl(e,n){e.blockedOn===n&&(e.blockedOn=null,Ff||(Ff=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Jx)))}var Ql=null;function n_(e){Ql!==e&&(Ql=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ql===e&&(Ql=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Bf(o||a)===null)continue;break}var f=ca(a);f!==null&&(e.splice(n,3),n-=3,Iu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ao(e){function n(P){return Kl(P,e)}wa!==null&&Kl(wa,e),Ca!==null&&Kl(Ca,e),Da!==null&&Kl(Da,e),Eo.forEach(n),bo.forEach(n);for(var a=0;a<Ua.length;a++){var o=Ua[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)t_(a),a.blockedOn===null&&Ua.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[Qe]||null;if(typeof f=="function")y||n_(a);else if(y){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[Qe]||null)T=y.formAction;else if(Bf(u)!==null)continue}else T=y.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),n_(a)}}}function Hf(e){this._internalRoot=e}Jl.prototype.render=Hf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Jn();Zg(a,o,e,n,null,null)},Jl.prototype.unmount=Hf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Zg(e.current,2,null,e,null,null),Ll(),n[Ti]=null}};function Jl(e){this._internalRoot=e}Jl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Me();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ua.length&&n!==0&&n<Ua[a].priority;a++);Ua.splice(a,0,e),a===0&&t_(e)}};var i_=t.version;if(i_!=="19.1.1")throw Error(s(527,i_,"19.1.1"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var $x={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{ut=$l.inject($x),vt=$l}catch{}}return wo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=xm,f=ym,y=Sm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=qg(e,1,!1,null,null,a,o,u,f,y,T,null),e[Ti]=n.current,Mf(e),new Hf(n)},wo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=xm,y=ym,T=Sm,P=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=qg(e,1,!0,n,a??null,o,u,f,y,T,P,J),n.context=Yg(null),a=n.current,o=Jn(),o=ae(o),u=pa(o),u.callback=null,ma(a,u,o),a=o,n.current.lanes=a,It(n,a),Ui(n),e[Ti]=n.current,Mf(e),new Jl(n)},wo.version="19.1.1",wo}var d_;function uy(){if(d_)return kf.exports;d_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),kf.exports=cy(),kf.exports}var fy=uy();const hy=_0(fy);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gd="179",Mr={ROTATE:0,DOLLY:1,PAN:2},yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dy=0,p_=1,py=2,v0=1,my=2,sa=3,ka=0,jn=1,ra=2,Ga=0,Er=1,m_=2,g_=3,__=4,gy=5,gs=100,_y=101,vy=102,xy=103,yy=104,Sy=200,My=201,Ey=202,by=203,Rh=204,wh=205,Ty=206,Ay=207,Ry=208,wy=209,Cy=210,Dy=211,Uy=212,Ny=213,Ly=214,Ch=0,Dh=1,Uh=2,Ar=3,Nh=4,Lh=5,Oh=6,Ph=7,x0=0,Oy=1,Py=2,Va=0,zy=1,Iy=2,By=3,Fy=4,Hy=5,Gy=6,Vy=7,y0=300,Rr=301,wr=302,zh=303,Ih=304,Pc=306,Bh=1e3,vs=1001,Fh=1002,Ei=1003,ky=1004,tc=1005,Li=1006,qf=1007,xs=1008,zi=1009,S0=1010,M0=1011,Po=1012,_d=1013,ys=1014,oa=1015,Ho=1016,vd=1017,xd=1018,zo=1020,E0=35902,b0=1021,T0=1022,Si=1023,Io=1026,Bo=1027,A0=1028,yd=1029,R0=1030,Sd=1031,Md=1033,Ac=33776,Rc=33777,wc=33778,Cc=33779,Hh=35840,Gh=35841,Vh=35842,kh=35843,Xh=36196,jh=37492,Wh=37496,qh=37808,Yh=37809,Zh=37810,Kh=37811,Qh=37812,Jh=37813,$h=37814,td=37815,ed=37816,nd=37817,id=37818,ad=37819,sd=37820,rd=37821,Dc=36492,od=36494,ld=36495,w0=36283,cd=36284,ud=36285,fd=36286,Xy=3200,jy=3201,C0=0,Wy=1,Ha="",ni="srgb",Cr="srgb-linear",Lc="linear",ze="srgb",sr=7680,v_=519,qy=512,Yy=513,Zy=514,D0=515,Ky=516,Qy=517,Jy=518,$y=519,x_=35044,y_="300 es",Oi=2e3,Oc=2001;class Es{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uc=Math.PI/180,hd=180/Math.PI;function Go(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function xe(r,t,i){return Math.max(t,Math.min(i,r))}function tS(r,t){return(r%t+t)%t}function Yf(r,t,i){return(1-i)*r+i*t}function Co(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function kn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const eS={DEG2RAD:Uc};class oe{constructor(t=0,i=0){oe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ss{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,p){let m=s[l+0],d=s[l+1],g=s[l+2],_=s[l+3];const x=c[h+0],M=c[h+1],E=c[h+2],R=c[h+3];if(p===0){t[i+0]=m,t[i+1]=d,t[i+2]=g,t[i+3]=_;return}if(p===1){t[i+0]=x,t[i+1]=M,t[i+2]=E,t[i+3]=R;return}if(_!==R||m!==x||d!==M||g!==E){let S=1-p;const v=m*x+d*M+g*E+_*R,G=v>=0?1:-1,O=1-v*v;if(O>Number.EPSILON){const I=Math.sqrt(O),V=Math.atan2(I,v*G);S=Math.sin(S*V)/I,p=Math.sin(p*V)/I}const D=p*G;if(m=m*S+x*D,d=d*S+M*D,g=g*S+E*D,_=_*S+R*D,S===1-p){const I=1/Math.sqrt(m*m+d*d+g*g+_*_);m*=I,d*=I,g*=I,_*=I}}t[i]=m,t[i+1]=d,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const p=s[l],m=s[l+1],d=s[l+2],g=s[l+3],_=c[h],x=c[h+1],M=c[h+2],E=c[h+3];return t[i]=p*E+g*_+m*M-d*x,t[i+1]=m*E+g*x+d*_-p*M,t[i+2]=d*E+g*M+p*x-m*_,t[i+3]=g*E-p*_-m*x-d*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,p=Math.cos,m=Math.sin,d=p(s/2),g=p(l/2),_=p(c/2),x=m(s/2),M=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=x*g*_+d*M*E,this._y=d*M*_-x*g*E,this._z=d*g*E+x*M*_,this._w=d*g*_-x*M*E;break;case"YXZ":this._x=x*g*_+d*M*E,this._y=d*M*_-x*g*E,this._z=d*g*E-x*M*_,this._w=d*g*_+x*M*E;break;case"ZXY":this._x=x*g*_-d*M*E,this._y=d*M*_+x*g*E,this._z=d*g*E+x*M*_,this._w=d*g*_-x*M*E;break;case"ZYX":this._x=x*g*_-d*M*E,this._y=d*M*_+x*g*E,this._z=d*g*E-x*M*_,this._w=d*g*_+x*M*E;break;case"YZX":this._x=x*g*_+d*M*E,this._y=d*M*_+x*g*E,this._z=d*g*E-x*M*_,this._w=d*g*_-x*M*E;break;case"XZY":this._x=x*g*_-d*M*E,this._y=d*M*_-x*g*E,this._z=d*g*E+x*M*_,this._w=d*g*_+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],g=i[6],_=i[10],x=s+p+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-d)*M,this._z=(h-l)*M}else if(s>p&&s>_){const M=2*Math.sqrt(1+s-p-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+d)/M}else if(p>_){const M=2*Math.sqrt(1+p-s-_);this._w=(c-d)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-s-p);this._w=(h-l)/M,this._x=(c+d)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,p=i._x,m=i._y,d=i._z,g=i._w;return this._x=s*g+h*p+l*d-c*m,this._y=l*g+h*m+c*p-s*d,this._z=c*g+h*d+s*m-l*p,this._w=h*g-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let p=h*t._w+s*t._x+l*t._y+c*t._z;if(p<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,p=-p):this.copy(t),p>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-p*p;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const d=Math.sqrt(m),g=Math.atan2(d,p),_=Math.sin((1-i)*g)/d,x=Math.sin(i*g)/d;return this._w=h*_+this._w*x,this._x=s*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,i=0,s=0){et.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(S_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(S_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,p=t.z,m=t.w,d=2*(h*l-p*s),g=2*(p*i-c*l),_=2*(c*s-h*i);return this.x=i+m*d+h*_-p*g,this.y=s+m*g+p*d-c*_,this.z=l+m*_+c*g-h*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-s*m,this.z=s*p-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Zf.copy(this).projectOnVector(t),this.sub(Zf)}reflect(t){return this.sub(Zf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zf=new et,S_=new Ss;class ce{constructor(t,i,s,l,c,h,p,m,d){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d)}set(t,i,s,l,c,h,p,m,d){const g=this.elements;return g[0]=t,g[1]=l,g[2]=p,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],g=s[4],_=s[7],x=s[2],M=s[5],E=s[8],R=l[0],S=l[3],v=l[6],G=l[1],O=l[4],D=l[7],I=l[2],V=l[5],H=l[8];return c[0]=h*R+p*G+m*I,c[3]=h*S+p*O+m*V,c[6]=h*v+p*D+m*H,c[1]=d*R+g*G+_*I,c[4]=d*S+g*O+_*V,c[7]=d*v+g*D+_*H,c[2]=x*R+M*G+E*I,c[5]=x*S+M*O+E*V,c[8]=x*v+M*D+E*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],g=t[8];return i*h*g-i*p*d-s*c*g+s*p*m+l*c*d-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],g=t[8],_=g*h-p*d,x=p*m-g*c,M=d*c-h*m,E=i*_+s*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=_*R,t[1]=(l*d-g*s)*R,t[2]=(p*s-l*h)*R,t[3]=x*R,t[4]=(g*i-l*m)*R,t[5]=(l*c-p*i)*R,t[6]=M*R,t[7]=(s*m-d*i)*R,t[8]=(h*i-s*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*h+d*p)+h+t,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Kf.makeScale(t,i)),this}rotate(t){return this.premultiply(Kf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Kf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kf=new ce;function U0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Fo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function nS(){const r=Fo("canvas");return r.style.display="block",r}const M_={};function br(r){r in M_||(M_[r]=!0,console.warn(r))}function iS(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const E_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),b_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aS(){const r={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===ze&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ze&&(l.r=Tr(l.r),l.g=Tr(l.g),l.b=Tr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ha?Lc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return br("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return br("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Cr]:{primaries:t,whitePoint:s,transfer:Lc,toXYZ:E_,fromXYZ:b_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:t,whitePoint:s,transfer:ze,toXYZ:E_,fromXYZ:b_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),r}const Te=aS();function la(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Tr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let rr;class sS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{rr===void 0&&(rr=Fo("canvas")),rr.width=t.width,rr.height=t.height;const l=rr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=rr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Fo("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=la(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(la(i[s]/255)*255):i[s]=la(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rS=0;class Ed{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=Go(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(Qf(l[h].image)):c.push(Qf(l[h]))}else c=Qf(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Qf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oS=0;const Jf=new et;class Wn extends Es{constructor(t=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,s=vs,l=vs,c=Li,h=xs,p=Si,m=zi,d=Wn.DEFAULT_ANISOTROPY,g=Ha){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=Go(),this.name="",this.source=new Ed(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jf).x}get height(){return this.source.getSize(Jf).y}get depth(){return this.source.getSize(Jf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==y0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bh:t.x=t.x-Math.floor(t.x);break;case vs:t.x=t.x<0?0:1;break;case Fh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bh:t.y=t.y-Math.floor(t.y);break;case vs:t.y=t.y<0?0:1;break;case Fh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=y0;Wn.DEFAULT_ANISOTROPY=1;class en{constructor(t=0,i=0,s=0,l=1){en.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,d=m[0],g=m[4],_=m[8],x=m[1],M=m[5],E=m[9],R=m[2],S=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-R)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+R)<.1&&Math.abs(E+S)<.1&&Math.abs(d+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(d+1)/2,D=(M+1)/2,I=(v+1)/2,V=(g+x)/4,H=(_+R)/4,Y=(E+S)/4;return O>D&&O>I?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=V/s,c=H/s):D>I?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=V/l,c=Y/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=H/c,l=Y/c),this.set(s,l,c,i),this}let G=Math.sqrt((S-E)*(S-E)+(_-R)*(_-R)+(x-g)*(x-g));return Math.abs(G)<.001&&(G=1),this.x=(S-E)/G,this.y=(_-R)/G,this.z=(x-g)/G,this.w=Math.acos((d+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lS extends Es{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new en(0,0,t,i),this.scissorTest=!1,this.viewport=new en(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Wn(l);this.textures=[];const h=s.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Li,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ed(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends lS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class N0 extends Wn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cS extends Wn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(t=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(_i.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(_i.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=_i.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)t.isMesh===!0?t.getVertexPosition(h,_i):_i.fromBufferAttribute(c,h),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ec.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ec.copy(s.boundingBox)),ec.applyMatrix4(t.matrixWorld),this.union(ec)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Do),nc.subVectors(this.max,Do),or.subVectors(t.a,Do),lr.subVectors(t.b,Do),cr.subVectors(t.c,Do),La.subVectors(lr,or),Oa.subVectors(cr,lr),ls.subVectors(or,cr);let i=[0,-La.z,La.y,0,-Oa.z,Oa.y,0,-ls.z,ls.y,La.z,0,-La.x,Oa.z,0,-Oa.x,ls.z,0,-ls.x,-La.y,La.x,0,-Oa.y,Oa.x,0,-ls.y,ls.x,0];return!$f(i,or,lr,cr,nc)||(i=[1,0,0,0,1,0,0,0,1],!$f(i,or,lr,cr,nc))?!1:(ic.crossVectors(La,Oa),i=[ic.x,ic.y,ic.z],$f(i,or,lr,cr,nc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ta=[new et,new et,new et,new et,new et,new et,new et,new et],_i=new et,ec=new Vo,or=new et,lr=new et,cr=new et,La=new et,Oa=new et,ls=new et,Do=new et,nc=new et,ic=new et,cs=new et;function $f(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){cs.fromArray(r,c);const p=l.x*Math.abs(cs.x)+l.y*Math.abs(cs.y)+l.z*Math.abs(cs.z),m=t.dot(cs),d=i.dot(cs),g=s.dot(cs);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>p)return!1}return!0}const uS=new Vo,Uo=new et,th=new et;class zc{constructor(t=new et,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):uS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Uo.subVectors(t,this.center);const i=Uo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Uo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(th.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Uo.copy(t.center).add(th)),this.expandByPoint(Uo.copy(t.center).sub(th))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ea=new et,eh=new et,ac=new et,Pa=new et,nh=new et,sc=new et,ih=new et;class bd{constructor(t=new et,i=new et(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){eh.copy(t).add(i).multiplyScalar(.5),ac.copy(i).sub(t).normalize(),Pa.copy(this.origin).sub(eh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(ac),p=Pa.dot(this.direction),m=-Pa.dot(ac),d=Pa.lengthSq(),g=Math.abs(1-h*h);let _,x,M,E;if(g>0)if(_=h*m-p,x=h*p-m,E=c*g,_>=0)if(x>=-E)if(x<=E){const R=1/g;_*=R,x*=R,M=_*(_+h*x+2*p)+x*(h*_+x+2*m)+d}else x=c,_=Math.max(0,-(h*x+p)),M=-_*_+x*(x+2*m)+d;else x=-c,_=Math.max(0,-(h*x+p)),M=-_*_+x*(x+2*m)+d;else x<=-E?(_=Math.max(0,-(-h*c+p)),x=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+d):x<=E?(_=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+d):(_=Math.max(0,-(h*c+p)),x=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+d);else x=h>0?-c:c,_=Math.max(0,-(h*x+p)),M=-_*_+x*(x+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(eh).addScaledVector(ac,x),M}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const s=ea.dot(this.direction),l=ea.dot(ea)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,p,m;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return d>=0?(s=(t.min.x-x.x)*d,l=(t.max.x-x.x)*d):(s=(t.max.x-x.x)*d,l=(t.min.x-x.x)*d),g>=0?(c=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(p=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(p=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,s,l,c){nh.subVectors(i,t),sc.subVectors(s,t),ih.crossVectors(nh,sc);let h=this.direction.dot(ih),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;Pa.subVectors(this.origin,t);const m=p*this.direction.dot(sc.crossVectors(Pa,sc));if(m<0)return null;const d=p*this.direction.dot(nh.cross(Pa));if(d<0||m+d>h)return null;const g=-p*Pa.dot(ih);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(t,i,s,l,c,h,p,m,d,g,_,x,M,E,R,S){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d,g,_,x,M,E,R,S)}set(t,i,s,l,c,h,p,m,d,g,_,x,M,E,R,S){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=p,v[13]=m,v[2]=d,v[6]=g,v[10]=_,v[14]=x,v[3]=M,v[7]=E,v[11]=R,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/ur.setFromMatrixColumn(t,0).length(),c=1/ur.setFromMatrixColumn(t,1).length(),h=1/ur.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=h*g,M=h*_,E=p*g,R=p*_;i[0]=m*g,i[4]=-m*_,i[8]=d,i[1]=M+E*d,i[5]=x-R*d,i[9]=-p*m,i[2]=R-x*d,i[6]=E+M*d,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,M=m*_,E=d*g,R=d*_;i[0]=x+R*p,i[4]=E*p-M,i[8]=h*d,i[1]=h*_,i[5]=h*g,i[9]=-p,i[2]=M*p-E,i[6]=R+x*p,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,M=m*_,E=d*g,R=d*_;i[0]=x-R*p,i[4]=-h*_,i[8]=E+M*p,i[1]=M+E*p,i[5]=h*g,i[9]=R-x*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,M=h*_,E=p*g,R=p*_;i[0]=m*g,i[4]=E*d-M,i[8]=x*d+R,i[1]=m*_,i[5]=R*d+x,i[9]=M*d-E,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*d,E=p*m,R=p*d;i[0]=m*g,i[4]=R-x*_,i[8]=E*_+M,i[1]=_,i[5]=h*g,i[9]=-p*g,i[2]=-d*g,i[6]=M*_+E,i[10]=x-R*_}else if(t.order==="XZY"){const x=h*m,M=h*d,E=p*m,R=p*d;i[0]=m*g,i[4]=-_,i[8]=d*g,i[1]=x*_+R,i[5]=h*g,i[9]=M*_-E,i[2]=E*_-M,i[6]=p*g,i[10]=R*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fS,t,hS)}lookAt(t,i,s){const l=this.elements;return ti.subVectors(t,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),za.crossVectors(s,ti),za.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),za.crossVectors(s,ti)),za.normalize(),rc.crossVectors(ti,za),l[0]=za.x,l[4]=rc.x,l[8]=ti.x,l[1]=za.y,l[5]=rc.y,l[9]=ti.y,l[2]=za.z,l[6]=rc.z,l[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],g=s[1],_=s[5],x=s[9],M=s[13],E=s[2],R=s[6],S=s[10],v=s[14],G=s[3],O=s[7],D=s[11],I=s[15],V=l[0],H=l[4],Y=l[8],C=l[12],w=l[1],B=l[5],lt=l[9],ct=l[13],ht=l[2],dt=l[6],z=l[10],K=l[14],q=l[3],yt=l[7],U=l[11],$=l[15];return c[0]=h*V+p*w+m*ht+d*q,c[4]=h*H+p*B+m*dt+d*yt,c[8]=h*Y+p*lt+m*z+d*U,c[12]=h*C+p*ct+m*K+d*$,c[1]=g*V+_*w+x*ht+M*q,c[5]=g*H+_*B+x*dt+M*yt,c[9]=g*Y+_*lt+x*z+M*U,c[13]=g*C+_*ct+x*K+M*$,c[2]=E*V+R*w+S*ht+v*q,c[6]=E*H+R*B+S*dt+v*yt,c[10]=E*Y+R*lt+S*z+v*U,c[14]=E*C+R*ct+S*K+v*$,c[3]=G*V+O*w+D*ht+I*q,c[7]=G*H+O*B+D*dt+I*yt,c[11]=G*Y+O*lt+D*z+I*U,c[15]=G*C+O*ct+D*K+I*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],p=t[5],m=t[9],d=t[13],g=t[2],_=t[6],x=t[10],M=t[14],E=t[3],R=t[7],S=t[11],v=t[15];return E*(+c*m*_-l*d*_-c*p*x+s*d*x+l*p*M-s*m*M)+R*(+i*m*M-i*d*x+c*h*x-l*h*M+l*d*g-c*m*g)+S*(+i*d*_-i*p*M-c*h*_+s*h*M+c*p*g-s*d*g)+v*(-l*p*g-i*m*_+i*p*x+l*h*_-s*h*x+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],g=t[8],_=t[9],x=t[10],M=t[11],E=t[12],R=t[13],S=t[14],v=t[15],G=_*S*d-R*x*d+R*m*M-p*S*M-_*m*v+p*x*v,O=E*x*d-g*S*d-E*m*M+h*S*M+g*m*v-h*x*v,D=g*R*d-E*_*d+E*p*M-h*R*M-g*p*v+h*_*v,I=E*_*m-g*R*m-E*p*x+h*R*x+g*p*S-h*_*S,V=i*G+s*O+l*D+c*I;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/V;return t[0]=G*H,t[1]=(R*x*c-_*S*c-R*l*M+s*S*M+_*l*v-s*x*v)*H,t[2]=(p*S*c-R*m*c+R*l*d-s*S*d-p*l*v+s*m*v)*H,t[3]=(_*m*c-p*x*c-_*l*d+s*x*d+p*l*M-s*m*M)*H,t[4]=O*H,t[5]=(g*S*c-E*x*c+E*l*M-i*S*M-g*l*v+i*x*v)*H,t[6]=(E*m*c-h*S*c-E*l*d+i*S*d+h*l*v-i*m*v)*H,t[7]=(h*x*c-g*m*c+g*l*d-i*x*d-h*l*M+i*m*M)*H,t[8]=D*H,t[9]=(E*_*c-g*R*c-E*s*M+i*R*M+g*s*v-i*_*v)*H,t[10]=(h*R*c-E*p*c+E*s*d-i*R*d-h*s*v+i*p*v)*H,t[11]=(g*p*c-h*_*c-g*s*d+i*_*d+h*s*M-i*p*M)*H,t[12]=I*H,t[13]=(g*R*l-E*_*l+E*s*x-i*R*x-g*s*S+i*_*S)*H,t[14]=(E*p*l-h*R*l-E*s*m+i*R*m+h*s*S-i*p*S)*H,t[15]=(h*_*l-g*p*l+g*s*m-i*_*m-h*s*x+i*p*x)*H,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,p=t.y,m=t.z,d=c*h,g=c*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,g*p+s,g*m-l*h,0,d*m-l*p,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,g=h+h,_=p+p,x=c*d,M=c*g,E=c*_,R=h*g,S=h*_,v=p*_,G=m*d,O=m*g,D=m*_,I=s.x,V=s.y,H=s.z;return l[0]=(1-(R+v))*I,l[1]=(M+D)*I,l[2]=(E-O)*I,l[3]=0,l[4]=(M-D)*V,l[5]=(1-(x+v))*V,l[6]=(S+G)*V,l[7]=0,l[8]=(E+O)*H,l[9]=(S-G)*H,l[10]=(1-(x+R))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=ur.set(l[0],l[1],l[2]).length();const h=ur.set(l[4],l[5],l[6]).length(),p=ur.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],vi.copy(this);const d=1/c,g=1/h,_=1/p;return vi.elements[0]*=d,vi.elements[1]*=d,vi.elements[2]*=d,vi.elements[4]*=g,vi.elements[5]*=g,vi.elements[6]*=g,vi.elements[8]*=_,vi.elements[9]*=_,vi.elements[10]*=_,i.setFromRotationMatrix(vi),s.x=c,s.y=h,s.z=p,this}makePerspective(t,i,s,l,c,h,p=Oi,m=!1){const d=this.elements,g=2*c/(i-t),_=2*c/(s-l),x=(i+t)/(i-t),M=(s+l)/(s-l);let E,R;if(m)E=c/(h-c),R=h*c/(h-c);else if(p===Oi)E=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(p===Oc)E=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=x,d[12]=0,d[1]=0,d[5]=_,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=R,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,s,l,c,h,p=Oi,m=!1){const d=this.elements,g=2/(i-t),_=2/(s-l),x=-(i+t)/(i-t),M=-(s+l)/(s-l);let E,R;if(m)E=1/(h-c),R=h/(h-c);else if(p===Oi)E=-2/(h-c),R=-(h+c)/(h-c);else if(p===Oc)E=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=g,d[4]=0,d[8]=0,d[12]=x,d[1]=0,d[5]=_,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=E,d[14]=R,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const ur=new et,vi=new nn,fS=new et(0,0,0),hS=new et(1,1,1),za=new et,rc=new et,ti=new et,T_=new nn,A_=new Ss;class Ii{constructor(t=0,i=0,s=0,l=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],g=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,d),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(xe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return T_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(T_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return A_.setFromEuler(this),this.setFromQuaternion(A_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class L0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dS=0;const R_=new et,fr=new Ss,na=new nn,oc=new et,No=new et,pS=new et,mS=new Ss,w_=new et(1,0,0),C_=new et(0,1,0),D_=new et(0,0,1),U_={type:"added"},gS={type:"removed"},hr={type:"childadded",child:null},ah={type:"childremoved",child:null};class Rn extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=Go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const t=new et,i=new Ii,s=new Ss,l=new et(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new ce}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new L0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return fr.setFromAxisAngle(t,i),this.quaternion.multiply(fr),this}rotateOnWorldAxis(t,i){return fr.setFromAxisAngle(t,i),this.quaternion.premultiply(fr),this}rotateX(t){return this.rotateOnAxis(w_,t)}rotateY(t){return this.rotateOnAxis(C_,t)}rotateZ(t){return this.rotateOnAxis(D_,t)}translateOnAxis(t,i){return R_.copy(t).applyQuaternion(this.quaternion),this.position.add(R_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(w_,t)}translateY(t){return this.translateOnAxis(C_,t)}translateZ(t){return this.translateOnAxis(D_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?oc.copy(t):oc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(No,oc,this.up):na.lookAt(oc,No,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),fr.setFromRotationMatrix(na),this.quaternion.premultiply(fr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(U_),hr.child=t,this.dispatchEvent(hr),hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(gS),ah.child=t,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(U_),hr.child=t,this.dispatchEvent(hr),hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,t,pS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,mS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const _=m[d];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=h(t.geometries),m=h(t.materials),d=h(t.textures),g=h(t.images),_=h(t.shapes),x=h(t.skeletons),M=h(t.animations),E=h(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(p){const m=[];for(const d in p){const g=p[d];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Rn.DEFAULT_UP=new et(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new et,ia=new et,sh=new et,aa=new et,dr=new et,pr=new et,N_=new et,rh=new et,oh=new et,lh=new et,ch=new en,uh=new en,fh=new en;class yi{constructor(t=new et,i=new et,s=new et){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),xi.subVectors(t,i),l.cross(xi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){xi.subVectors(l,i),ia.subVectors(s,i),sh.subVectors(t,i);const h=xi.dot(xi),p=xi.dot(ia),m=xi.dot(sh),d=ia.dot(ia),g=ia.dot(sh),_=h*d-p*p;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(d*m-p*g)*x,E=(h*g-p*m)*x;return c.set(1-M-E,E,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,i,s,l,c,h,p,m){return this.getBarycoord(t,i,s,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,aa.x),m.addScaledVector(h,aa.y),m.addScaledVector(p,aa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return ch.setScalar(0),uh.setScalar(0),fh.setScalar(0),ch.fromBufferAttribute(t,i),uh.fromBufferAttribute(t,s),fh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(ch,c.x),h.addScaledVector(uh,c.y),h.addScaledVector(fh,c.z),h}static isFrontFacing(t,i,s,l){return xi.subVectors(s,i),ia.subVectors(t,i),xi.cross(ia).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),xi.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return yi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,p;dr.subVectors(l,s),pr.subVectors(c,s),rh.subVectors(t,s);const m=dr.dot(rh),d=pr.dot(rh);if(m<=0&&d<=0)return i.copy(s);oh.subVectors(t,l);const g=dr.dot(oh),_=pr.dot(oh);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*d;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(dr,h);lh.subVectors(t,c);const M=dr.dot(lh),E=pr.dot(lh);if(E>=0&&M<=E)return i.copy(c);const R=M*d-m*E;if(R<=0&&d>=0&&E<=0)return p=d/(d-E),i.copy(s).addScaledVector(pr,p);const S=g*E-M*_;if(S<=0&&_-g>=0&&M-E>=0)return N_.subVectors(c,l),p=(_-g)/(_-g+(M-E)),i.copy(l).addScaledVector(N_,p);const v=1/(S+R+x);return h=R*v,p=x*v,i.copy(s).addScaledVector(dr,h).addScaledVector(pr,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const O0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},lc={h:0,s:0,l:0};function hh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Ae{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ni){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=s,Te.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Te.workingColorSpace){if(t=tS(t,1),i=xe(i,0,1),s=xe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=hh(h,c,t+1/3),this.g=hh(h,c,t),this.b=hh(h,c,t-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(t,i=ni){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ni){const s=O0[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ni){return Te.workingToColorSpace(Ln.copy(this),t),Math.round(xe(Ln.r*255,0,255))*65536+Math.round(xe(Ln.g*255,0,255))*256+Math.round(xe(Ln.b*255,0,255))}getHexString(t=ni){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,c=Ln.b,h=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const g=(p+h)/2;if(p===h)m=0,d=0;else{const _=h-p;switch(d=g<=.5?_/(h+p):_/(2-h-p),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=d,t.l=g,t}getRGB(t,i=Te.workingColorSpace){return Te.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=ni){Te.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,l=Ln.b;return t!==ni?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ia),this.setHSL(Ia.h+t,Ia.s+i,Ia.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ia),t.getHSL(lc);const s=Yf(Ia.h,lc.h,i),l=Yf(Ia.s,lc.s,i),c=Yf(Ia.l,lc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Ae;Ae.NAMES=O0;let _S=0;class Ur extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Go(),this.name="",this.type="Material",this.blending=Er,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=wh,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(s.blending=this.blending),this.side!==ka&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Rh&&(s.blendSrc=this.blendSrc),this.blendDst!==wh&&(s.blendDst=this.blendDst),this.blendEquation!==gs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==v_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class P0 extends Ur{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=x0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new et,cc=new oe;let vS=0;class Pi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=x_,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)cc.fromBufferAttribute(this,i),cc.applyMatrix3(t),this.setXY(i,cc.x,cc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Co(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Co(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Co(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Co(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Co(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),c=kn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==x_&&(t.usage=this.usage),t}}class z0 extends Pi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class I0 extends Pi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class bi extends Pi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let xS=0;const ui=new nn,dh=new Rn,mr=new et,ei=new Vo,Lo=new Vo,Mn=new et;class Bi extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=Go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(U0(t)?I0:z0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ce().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,s){return ui.makeTranslation(t,i,s),this.applyMatrix4(ui),this}scale(t,i,s){return ui.makeScale(t,i,s),this.applyMatrix4(ui),this}lookAt(t){return dh.lookAt(t),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new bi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ei.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const s=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];Lo.setFromBufferAttribute(p),this.morphTargetsRelative?(Mn.addVectors(ei.min,Lo.min),ei.expandByPoint(Mn),Mn.addVectors(ei.max,Lo.max),ei.expandByPoint(Mn)):(ei.expandByPoint(Lo.min),ei.expandByPoint(Lo.max))}ei.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Mn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,g=p.count;d<g;d++)Mn.fromBufferAttribute(p,d),m&&(mr.fromBufferAttribute(t,d),Mn.add(mr)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),p=[],m=[];for(let Y=0;Y<s.count;Y++)p[Y]=new et,m[Y]=new et;const d=new et,g=new et,_=new et,x=new oe,M=new oe,E=new oe,R=new et,S=new et;function v(Y,C,w){d.fromBufferAttribute(s,Y),g.fromBufferAttribute(s,C),_.fromBufferAttribute(s,w),x.fromBufferAttribute(c,Y),M.fromBufferAttribute(c,C),E.fromBufferAttribute(c,w),g.sub(d),_.sub(d),M.sub(x),E.sub(x);const B=1/(M.x*E.y-E.x*M.y);isFinite(B)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(B),S.copy(_).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(B),p[Y].add(R),p[C].add(R),p[w].add(R),m[Y].add(S),m[C].add(S),m[w].add(S))}let G=this.groups;G.length===0&&(G=[{start:0,count:t.count}]);for(let Y=0,C=G.length;Y<C;++Y){const w=G[Y],B=w.start,lt=w.count;for(let ct=B,ht=B+lt;ct<ht;ct+=3)v(t.getX(ct+0),t.getX(ct+1),t.getX(ct+2))}const O=new et,D=new et,I=new et,V=new et;function H(Y){I.fromBufferAttribute(l,Y),V.copy(I);const C=p[Y];O.copy(C),O.sub(I.multiplyScalar(I.dot(C))).normalize(),D.crossVectors(V,C);const B=D.dot(m[Y])<0?-1:1;h.setXYZW(Y,O.x,O.y,O.z,B)}for(let Y=0,C=G.length;Y<C;++Y){const w=G[Y],B=w.start,lt=w.count;for(let ct=B,ht=B+lt;ct<ht;ct+=3)H(t.getX(ct+0)),H(t.getX(ct+1)),H(t.getX(ct+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Pi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new et,c=new et,h=new et,p=new et,m=new et,d=new et,g=new et,_=new et;if(t)for(let x=0,M=t.count;x<M;x+=3){const E=t.getX(x+0),R=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,S),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),p.fromBufferAttribute(s,E),m.fromBufferAttribute(s,R),d.fromBufferAttribute(s,S),p.add(g),m.add(g),d.add(g),s.setXYZ(E,p.x,p.y,p.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(S,d.x,d.y,d.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(p,m){const d=p.array,g=p.itemSize,_=p.normalized,x=new d.constructor(m.length*g);let M=0,E=0;for(let R=0,S=m.length;R<S;R++){p.isInterleavedBufferAttribute?M=m[R]*p.data.stride+p.offset:M=m[R]*g;for(let v=0;v<g;v++)x[E++]=d[M++]}return new Pi(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Bi,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let g=0,_=d.length;g<_;g++){const x=d[g],M=t(x,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let _=0,x=d.length;_<x;_++){const M=d[_];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const g=l[d];this.setAttribute(d,g.clone(i))}const c=t.morphAttributes;for(const d in c){const g=[],_=c[d];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(i));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let d=0,g=h.length;d<g;d++){const _=h[d];this.addGroup(_.start,_.count,_.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const L_=new nn,us=new bd,uc=new zc,O_=new et,fc=new et,hc=new et,dc=new et,ph=new et,pc=new et,P_=new et,mc=new et;class Mi extends Rn{constructor(t=new Bi,i=new P0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){pc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=p[m],_=c[m];g!==0&&(ph.fromBufferAttribute(_,t),h?pc.addScaledVector(ph,g):pc.addScaledVector(ph.sub(i),g))}i.add(pc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),uc.copy(s.boundingSphere),uc.applyMatrix4(c),us.copy(t.ray).recast(t.near),!(uc.containsPoint(us.origin)===!1&&(us.intersectSphere(uc,O_)===null||us.origin.distanceToSquared(O_)>(t.far-t.near)**2))&&(L_.copy(c).invert(),us.copy(t.ray).applyMatrix4(L_),!(s.boundingBox!==null&&us.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,us)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(h))for(let E=0,R=x.length;E<R;E++){const S=x[E],v=h[S.materialIndex],G=Math.max(S.start,M.start),O=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let D=G,I=O;D<I;D+=3){const V=p.getX(D),H=p.getX(D+1),Y=p.getX(D+2);l=gc(this,v,t,s,d,g,_,V,H,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),R=Math.min(p.count,M.start+M.count);for(let S=E,v=R;S<v;S+=3){const G=p.getX(S),O=p.getX(S+1),D=p.getX(S+2);l=gc(this,h,t,s,d,g,_,G,O,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,R=x.length;E<R;E++){const S=x[E],v=h[S.materialIndex],G=Math.max(S.start,M.start),O=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let D=G,I=O;D<I;D+=3){const V=D,H=D+1,Y=D+2;l=gc(this,v,t,s,d,g,_,V,H,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let S=E,v=R;S<v;S+=3){const G=S,O=S+1,D=S+2;l=gc(this,h,t,s,d,g,_,G,O,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function yS(r,t,i,s,l,c,h,p){let m;if(t.side===jn?m=s.intersectTriangle(h,c,l,!0,p):m=s.intersectTriangle(l,c,h,t.side===ka,p),m===null)return null;mc.copy(p),mc.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(mc);return d<i.near||d>i.far?null:{distance:d,point:mc.clone(),object:r}}function gc(r,t,i,s,l,c,h,p,m,d){r.getVertexPosition(p,fc),r.getVertexPosition(m,hc),r.getVertexPosition(d,dc);const g=yS(r,t,i,s,fc,hc,dc,P_);if(g){const _=new et;yi.getBarycoord(P_,fc,hc,dc,_),l&&(g.uv=yi.getInterpolatedAttribute(l,p,m,d,_,new oe)),c&&(g.uv1=yi.getInterpolatedAttribute(c,p,m,d,_,new oe)),h&&(g.normal=yi.getInterpolatedAttribute(h,p,m,d,_,new et),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:p,b:m,c:d,normal:new et,materialIndex:0};yi.getNormal(fc,hc,dc,x.normal),g.face=x,g.barycoord=_}return g}class ko extends Bi{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],g=[],_=[];let x=0,M=0;E("z","y","x",-1,-1,s,i,t,h,c,0),E("z","y","x",1,-1,s,i,-t,h,c,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new bi(d,3)),this.setAttribute("normal",new bi(g,3)),this.setAttribute("uv",new bi(_,2));function E(R,S,v,G,O,D,I,V,H,Y,C){const w=D/H,B=I/Y,lt=D/2,ct=I/2,ht=V/2,dt=H+1,z=Y+1;let K=0,q=0;const yt=new et;for(let U=0;U<z;U++){const $=U*B-ct;for(let xt=0;xt<dt;xt++){const St=xt*w-lt;yt[R]=St*G,yt[S]=$*O,yt[v]=ht,d.push(yt.x,yt.y,yt.z),yt[R]=0,yt[S]=0,yt[v]=V>0?1:-1,g.push(yt.x,yt.y,yt.z),_.push(xt/H),_.push(1-U/Y),K+=1}}for(let U=0;U<Y;U++)for(let $=0;$<H;$++){const xt=x+$+dt*U,St=x+$+dt*(U+1),Ct=x+($+1)+dt*(U+1),it=x+($+1)+dt*U;m.push(xt,St,it),m.push(St,Ct,it),q+=6}p.addGroup(M,q,C),M+=q,x+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Dr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function In(r){const t={};for(let i=0;i<r.length;i++){const s=Dr(r[i]);for(const l in s)t[l]=s[l]}return t}function SS(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function B0(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const MS={clone:Dr,merge:In};var ES=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xa extends Ur{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ES,this.fragmentShader=bS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=SS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class F0 extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new et,z_=new oe,I_=new oe;class fi extends F0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=hd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Uc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hd*2*Math.atan(Math.tan(Uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z)}getViewSize(t,i){return this.getViewBounds(t,z_,I_),i.subVectors(I_,z_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Uc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gr=-90,_r=1;class TS extends Rn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(gr,_r,t,i);l.layers=this.layers,this.add(l);const c=new fi(gr,_r,t,i);c.layers=this.layers,this.add(c);const h=new fi(gr,_r,t,i);h.layers=this.layers,this.add(h);const p=new fi(gr,_r,t,i);p.layers=this.layers,this.add(p);const m=new fi(gr,_r,t,i);m.layers=this.layers,this.add(m);const d=new fi(gr,_r,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(t===Oi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Oc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,p),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,d),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,x,M),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Td extends Wn{constructor(t=[],i=Rr,s,l,c,h,p,m,d,g){super(t,i,s,l,c,h,p,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class AS extends Ms{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Td(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ko(5,5,5),c=new Xa({name:"CubemapFromEquirect",uniforms:Dr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:Ga});c.uniforms.tEquirect.value=i;const h=new Mi(l,c),p=i.minFilter;return i.minFilter===xs&&(i.minFilter=Li),new TS(1,10,this).update(t,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class _c extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RS={type:"move"};class mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _c,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _c,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _c,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){h=!0;for(const R of t.hand.values()){const S=i.getJointPose(R,s),v=this._getHandJoint(d,R);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,E=.005;d.inputState.pinching&&x>M+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&x<=M-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(RS)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new _c;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class wS extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const gh=new et,CS=new et,DS=new ce;class Fa{constructor(t=new et(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=gh.subVectors(s,i).cross(CS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(gh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||DS.getNormalMatrix(t),l=this.coplanarPoint(gh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new zc,US=new oe(.5,.5),vc=new et;class Ad{constructor(t=new Fa,i=new Fa,s=new Fa,l=new Fa,c=new Fa,h=new Fa){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Oi,s=!1){const l=this.planes,c=t.elements,h=c[0],p=c[1],m=c[2],d=c[3],g=c[4],_=c[5],x=c[6],M=c[7],E=c[8],R=c[9],S=c[10],v=c[11],G=c[12],O=c[13],D=c[14],I=c[15];if(l[0].setComponents(d-h,M-g,v-E,I-G).normalize(),l[1].setComponents(d+h,M+g,v+E,I+G).normalize(),l[2].setComponents(d+p,M+_,v+R,I+O).normalize(),l[3].setComponents(d-p,M-_,v-R,I-O).normalize(),s)l[4].setComponents(m,x,S,D).normalize(),l[5].setComponents(d-m,M-x,v-S,I-D).normalize();else if(l[4].setComponents(d-m,M-x,v-S,I-D).normalize(),i===Oi)l[5].setComponents(d+m,M+x,v+S,I+D).normalize();else if(i===Oc)l[5].setComponents(m,x,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(t){fs.center.set(0,0,0);const i=US.distanceTo(t.center);return fs.radius=.7071067811865476+i,fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(vc.x=l.normal.x>0?t.max.x:t.min.x,vc.y=l.normal.y>0?t.max.y:t.min.y,vc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(vc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class H0 extends Ur{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const B_=new nn,dd=new bd,xc=new zc,yc=new et;class NS extends Rn{constructor(t=new Bi,i=new H0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),xc.copy(s.boundingSphere),xc.applyMatrix4(l),xc.radius+=c,t.ray.intersectsSphere(xc)===!1)return;B_.copy(l).invert(),dd.copy(t.ray).applyMatrix4(B_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=s.index,_=s.attributes.position;if(d!==null){const x=Math.max(0,h.start),M=Math.min(d.count,h.start+h.count);for(let E=x,R=M;E<R;E++){const S=d.getX(E);yc.fromBufferAttribute(_,S),F_(yc,S,m,l,t,i,this)}}else{const x=Math.max(0,h.start),M=Math.min(_.count,h.start+h.count);for(let E=x,R=M;E<R;E++)yc.fromBufferAttribute(_,E),F_(yc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function F_(r,t,i,s,l,c,h){const p=dd.distanceSqToPoint(r);if(p<i){const m=new et;dd.closestPointToPoint(r,m),m.applyMatrix4(s);const d=l.ray.origin.distanceTo(m);if(d<l.near||d>l.far)return;c.push({distance:d,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class G0 extends Wn{constructor(t,i,s=ys,l,c,h,p=Ei,m=Ei,d,g=Io,_=1){if(g!==Io&&g!==Bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,h,p,m,g,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ed(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ic extends Bi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,g=m+1,_=t/p,x=i/m,M=[],E=[],R=[],S=[];for(let v=0;v<g;v++){const G=v*x-h;for(let O=0;O<d;O++){const D=O*_-c;E.push(D,-G,0),R.push(0,0,1),S.push(O/p),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let G=0;G<p;G++){const O=G+d*v,D=G+d*(v+1),I=G+1+d*(v+1),V=G+1+d*v;M.push(O,D,V),M.push(D,I,V)}this.setIndex(M),this.setAttribute("position",new bi(E,3)),this.setAttribute("normal",new bi(R,3)),this.setAttribute("uv",new bi(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ic(t.width,t.height,t.widthSegments,t.heightSegments)}}class Rd extends Bi{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+p,Math.PI);let d=0;const g=[],_=new et,x=new et,M=[],E=[],R=[],S=[];for(let v=0;v<=s;v++){const G=[],O=v/s;let D=0;v===0&&h===0?D=.5/i:v===s&&m===Math.PI&&(D=-.5/i);for(let I=0;I<=i;I++){const V=I/i;_.x=-t*Math.cos(l+V*c)*Math.sin(h+O*p),_.y=t*Math.cos(h+O*p),_.z=t*Math.sin(l+V*c)*Math.sin(h+O*p),E.push(_.x,_.y,_.z),x.copy(_).normalize(),R.push(x.x,x.y,x.z),S.push(V+D,1-O),G.push(d++)}g.push(G)}for(let v=0;v<s;v++)for(let G=0;G<i;G++){const O=g[v][G+1],D=g[v][G],I=g[v+1][G],V=g[v+1][G+1];(v!==0||h>0)&&M.push(O,D,V),(v!==s-1||m<Math.PI)&&M.push(D,I,V)}this.setIndex(M),this.setAttribute("position",new bi(E,3)),this.setAttribute("normal",new bi(R,3)),this.setAttribute("uv",new bi(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rd(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class LS extends Ur{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=C0,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class OS extends Ur{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class PS extends Ur{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const _h={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class zS{constructor(t,i,s){const l=this;let c=!1,h=0,p=0,m;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this.abortController=new AbortController,this.itemStart=function(g){p++,c===!1&&l.onStart!==void 0&&l.onStart(g,h,p),c=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,p),h===p&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return d.push(g,_),this},this.removeHandler=function(g){const _=d.indexOf(g);return _!==-1&&d.splice(_,2),this},this.getHandler=function(g){for(let _=0,x=d.length;_<x;_+=2){const M=d[_],E=d[_+1];if(M.global&&(M.lastIndex=0),M.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const IS=new zS;class wd{constructor(t){this.manager=t!==void 0?t:IS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}wd.DEFAULT_MATERIAL_NAME="__DEFAULT";const vr=new WeakMap;class BS extends wd{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,h=_h.get(`image:${t}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(h),c.manager.itemEnd(t)},0);else{let _=vr.get(h);_===void 0&&(_=[],vr.set(h,_)),_.push({onLoad:i,onError:l})}return h}const p=Fo("img");function m(){g(),i&&i(this);const _=vr.get(this)||[];for(let x=0;x<_.length;x++){const M=_[x];M.onLoad&&M.onLoad(this)}vr.delete(this),c.manager.itemEnd(t)}function d(_){g(),l&&l(_),_h.remove(`image:${t}`);const x=vr.get(this)||[];for(let M=0;M<x.length;M++){const E=x[M];E.onError&&E.onError(_)}vr.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){p.removeEventListener("load",m,!1),p.removeEventListener("error",d,!1)}return p.addEventListener("load",m,!1),p.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),_h.add(`image:${t}`,p),c.manager.itemStart(t),p.src=t,p}}class FS extends wd{constructor(t){super(t)}load(t,i,s,l){const c=new Td;c.colorSpace=ni;const h=new BS(this.manager);h.setCrossOrigin(this.crossOrigin),h.setPath(this.path);let p=0;function m(d){h.load(t[d],function(g){c.images[d]=g,p++,p===6&&(c.needsUpdate=!0,i&&i(c))},void 0,l)}for(let d=0;d<t.length;++d)m(d);return c}}class V0 extends Rn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const vh=new nn,H_=new et,G_=new et;class HS{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ad,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;H_.setFromMatrixPosition(t.matrixWorld),i.position.copy(H_),G_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(G_),i.updateMatrixWorld(),vh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(vh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class k0 extends F0{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class GS extends HS{constructor(){super(new k0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class VS extends V0{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new GS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class kS extends V0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class XS extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class V_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(xe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jS extends Es{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function k_(r,t,i,s){const l=WS(s);switch(i){case b0:return r*t;case A0:return r*t/l.components*l.byteLength;case yd:return r*t/l.components*l.byteLength;case R0:return r*t*2/l.components*l.byteLength;case Sd:return r*t*2/l.components*l.byteLength;case T0:return r*t*3/l.components*l.byteLength;case Si:return r*t*4/l.components*l.byteLength;case Md:return r*t*4/l.components*l.byteLength;case Ac:case Rc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case wc:case Cc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Gh:case kh:return Math.max(r,16)*Math.max(t,8)/4;case Hh:case Vh:return Math.max(r,8)*Math.max(t,8)/2;case Xh:case jh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Wh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case qh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Zh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Jh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case $h:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case td:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ed:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case nd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case id:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ad:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case sd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case rd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Dc:case od:case ld:return Math.ceil(r/4)*Math.ceil(t/4)*16;case w0:case cd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ud:case fd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function WS(r){switch(r){case zi:case S0:return{byteLength:1,components:1};case Po:case M0:case Ho:return{byteLength:2,components:1};case vd:case xd:return{byteLength:2,components:4};case ys:case _d:case oa:return{byteLength:4,components:1};case E0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function X0(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function qS(r){const t=new WeakMap;function i(p,m){const d=p.array,g=p.usage,_=d.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,d,g),p.onUploadCallback();let M;if(d instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=r.SHORT;else if(d instanceof Uint32Array)M=r.UNSIGNED_INT;else if(d instanceof Int32Array)M=r.INT;else if(d instanceof Int8Array)M=r.BYTE;else if(d instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:_}}function s(p,m,d){const g=m.array,_=m.updateRanges;if(r.bindBuffer(d,p),_.length===0)r.bufferSubData(d,0,g);else{_.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<_.length;M++){const E=_[x],R=_[M];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++x,_[x]=R)}_.length=x+1;for(let M=0,E=_.length;M<E;M++){const R=_[M];r.bufferSubData(d,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=t.get(p);(!g||g.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var YS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,KS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$S=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,iM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_M=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bM="gl_FragColor = linearToOutputTexel( gl_FragColor );",TM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,UM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,HM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,YM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_E=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ME=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,EE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,NE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,LE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,PE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,IE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ab=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ob=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ub=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,db=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ab=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:YS,alphahash_pars_fragment:ZS,alphamap_fragment:KS,alphamap_pars_fragment:QS,alphatest_fragment:JS,alphatest_pars_fragment:$S,aomap_fragment:tM,aomap_pars_fragment:eM,batching_pars_vertex:nM,batching_vertex:iM,begin_vertex:aM,beginnormal_vertex:sM,bsdfs:rM,iridescence_fragment:oM,bumpmap_pars_fragment:lM,clipping_planes_fragment:cM,clipping_planes_pars_fragment:uM,clipping_planes_pars_vertex:fM,clipping_planes_vertex:hM,color_fragment:dM,color_pars_fragment:pM,color_pars_vertex:mM,color_vertex:gM,common:_M,cube_uv_reflection_fragment:vM,defaultnormal_vertex:xM,displacementmap_pars_vertex:yM,displacementmap_vertex:SM,emissivemap_fragment:MM,emissivemap_pars_fragment:EM,colorspace_fragment:bM,colorspace_pars_fragment:TM,envmap_fragment:AM,envmap_common_pars_fragment:RM,envmap_pars_fragment:wM,envmap_pars_vertex:CM,envmap_physical_pars_fragment:HM,envmap_vertex:DM,fog_vertex:UM,fog_pars_vertex:NM,fog_fragment:LM,fog_pars_fragment:OM,gradientmap_pars_fragment:PM,lightmap_pars_fragment:zM,lights_lambert_fragment:IM,lights_lambert_pars_fragment:BM,lights_pars_begin:FM,lights_toon_fragment:GM,lights_toon_pars_fragment:VM,lights_phong_fragment:kM,lights_phong_pars_fragment:XM,lights_physical_fragment:jM,lights_physical_pars_fragment:WM,lights_fragment_begin:qM,lights_fragment_maps:YM,lights_fragment_end:ZM,logdepthbuf_fragment:KM,logdepthbuf_pars_fragment:QM,logdepthbuf_pars_vertex:JM,logdepthbuf_vertex:$M,map_fragment:tE,map_pars_fragment:eE,map_particle_fragment:nE,map_particle_pars_fragment:iE,metalnessmap_fragment:aE,metalnessmap_pars_fragment:sE,morphinstance_vertex:rE,morphcolor_vertex:oE,morphnormal_vertex:lE,morphtarget_pars_vertex:cE,morphtarget_vertex:uE,normal_fragment_begin:fE,normal_fragment_maps:hE,normal_pars_fragment:dE,normal_pars_vertex:pE,normal_vertex:mE,normalmap_pars_fragment:gE,clearcoat_normal_fragment_begin:_E,clearcoat_normal_fragment_maps:vE,clearcoat_pars_fragment:xE,iridescence_pars_fragment:yE,opaque_fragment:SE,packing:ME,premultiplied_alpha_fragment:EE,project_vertex:bE,dithering_fragment:TE,dithering_pars_fragment:AE,roughnessmap_fragment:RE,roughnessmap_pars_fragment:wE,shadowmap_pars_fragment:CE,shadowmap_pars_vertex:DE,shadowmap_vertex:UE,shadowmask_pars_fragment:NE,skinbase_vertex:LE,skinning_pars_vertex:OE,skinning_vertex:PE,skinnormal_vertex:zE,specularmap_fragment:IE,specularmap_pars_fragment:BE,tonemapping_fragment:FE,tonemapping_pars_fragment:HE,transmission_fragment:GE,transmission_pars_fragment:VE,uv_pars_fragment:kE,uv_pars_vertex:XE,uv_vertex:jE,worldpos_vertex:WE,background_vert:qE,background_frag:YE,backgroundCube_vert:ZE,backgroundCube_frag:KE,cube_vert:QE,cube_frag:JE,depth_vert:$E,depth_frag:tb,distanceRGBA_vert:eb,distanceRGBA_frag:nb,equirect_vert:ib,equirect_frag:ab,linedashed_vert:sb,linedashed_frag:rb,meshbasic_vert:ob,meshbasic_frag:lb,meshlambert_vert:cb,meshlambert_frag:ub,meshmatcap_vert:fb,meshmatcap_frag:hb,meshnormal_vert:db,meshnormal_frag:pb,meshphong_vert:mb,meshphong_frag:gb,meshphysical_vert:_b,meshphysical_frag:vb,meshtoon_vert:xb,meshtoon_frag:yb,points_vert:Sb,points_frag:Mb,shadow_vert:Eb,shadow_frag:bb,sprite_vert:Tb,sprite_frag:Ab},Ot={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Ni={basic:{uniforms:In([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:In([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ae(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:In([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:In([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:In([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Ae(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:In([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:In([Ot.points,Ot.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:In([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:In([Ot.common,Ot.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:In([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:In([Ot.sprite,Ot.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:In([Ot.common,Ot.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:In([Ot.lights,Ot.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Ni.physical={uniforms:In([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Sc={r:0,b:0,g:0},hs=new Ii,Rb=new nn;function wb(r,t,i,s,l,c,h){const p=new Ae(0);let m=c===!0?0:1,d,g,_=null,x=0,M=null;function E(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function R(O){let D=!1;const I=E(O);I===null?v(p,m):I&&I.isColor&&(v(I,1),D=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?s.buffers.color.setClear(0,0,0,1,h):V==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(O,D){const I=E(D);I&&(I.isCubeTexture||I.mapping===Pc)?(g===void 0&&(g=new Mi(new ko(1,1,1),new Xa({name:"BackgroundCubeMaterial",uniforms:Dr(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,H,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),hs.copy(D.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Rb.makeRotationFromEuler(hs)),g.material.toneMapped=Te.getTransfer(I.colorSpace)!==ze,(_!==I||x!==I.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,_=I,x=I.version,M=r.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(d===void 0&&(d=new Mi(new Ic(2,2),new Xa({name:"BackgroundMaterial",uniforms:Dr(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(d)),d.material.uniforms.t2D.value=I,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.toneMapped=Te.getTransfer(I.colorSpace)!==ze,I.matrixAutoUpdate===!0&&I.updateMatrix(),d.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||x!==I.version||M!==r.toneMapping)&&(d.material.needsUpdate=!0,_=I,x=I.version,M=r.toneMapping),d.layers.enableAll(),O.unshift(d,d.geometry,d.material,0,0,null))}function v(O,D){O.getRGB(Sc,B0(r)),s.buffers.color.setClear(Sc.r,Sc.g,Sc.b,D,h)}function G(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return p},setClearColor:function(O,D=1){p.set(O),m=D,v(p,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,v(p,m)},render:R,addToRenderList:S,dispose:G}}function Cb(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function p(w,B,lt,ct,ht){let dt=!1;const z=_(ct,lt,B);c!==z&&(c=z,d(c.object)),dt=M(w,ct,lt,ht),dt&&E(w,ct,lt,ht),ht!==null&&t.update(ht,r.ELEMENT_ARRAY_BUFFER),(dt||h)&&(h=!1,D(w,B,lt,ct),ht!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function m(){return r.createVertexArray()}function d(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,B,lt){const ct=lt.wireframe===!0;let ht=s[w.id];ht===void 0&&(ht={},s[w.id]=ht);let dt=ht[B.id];dt===void 0&&(dt={},ht[B.id]=dt);let z=dt[ct];return z===void 0&&(z=x(m()),dt[ct]=z),z}function x(w){const B=[],lt=[],ct=[];for(let ht=0;ht<i;ht++)B[ht]=0,lt[ht]=0,ct[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:lt,attributeDivisors:ct,object:w,attributes:{},index:null}}function M(w,B,lt,ct){const ht=c.attributes,dt=B.attributes;let z=0;const K=lt.getAttributes();for(const q in K)if(K[q].location>=0){const U=ht[q];let $=dt[q];if($===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;z++}return c.attributesNum!==z||c.index!==ct}function E(w,B,lt,ct){const ht={},dt=B.attributes;let z=0;const K=lt.getAttributes();for(const q in K)if(K[q].location>=0){let U=dt[q];U===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(U=w.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),ht[q]=$,z++}c.attributes=ht,c.attributesNum=z,c.index=ct}function R(){const w=c.newAttributes;for(let B=0,lt=w.length;B<lt;B++)w[B]=0}function S(w){v(w,0)}function v(w,B){const lt=c.newAttributes,ct=c.enabledAttributes,ht=c.attributeDivisors;lt[w]=1,ct[w]===0&&(r.enableVertexAttribArray(w),ct[w]=1),ht[w]!==B&&(r.vertexAttribDivisor(w,B),ht[w]=B)}function G(){const w=c.newAttributes,B=c.enabledAttributes;for(let lt=0,ct=B.length;lt<ct;lt++)B[lt]!==w[lt]&&(r.disableVertexAttribArray(lt),B[lt]=0)}function O(w,B,lt,ct,ht,dt,z){z===!0?r.vertexAttribIPointer(w,B,lt,ht,dt):r.vertexAttribPointer(w,B,lt,ct,ht,dt)}function D(w,B,lt,ct){R();const ht=ct.attributes,dt=lt.getAttributes(),z=B.defaultAttributeValues;for(const K in dt){const q=dt[K];if(q.location>=0){let yt=ht[K];if(yt===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const U=yt.normalized,$=yt.itemSize,xt=t.get(yt);if(xt===void 0)continue;const St=xt.buffer,Ct=xt.type,it=xt.bytesPerElement,pt=Ct===r.INT||Ct===r.UNSIGNED_INT||yt.gpuType===_d;if(yt.isInterleavedBufferAttribute){const Mt=yt.data,Pt=Mt.stride,qt=yt.offset;if(Mt.isInstancedInterleavedBuffer){for(let ie=0;ie<q.locationSize;ie++)v(q.location+ie,Mt.meshPerAttribute);w.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ie=0;ie<q.locationSize;ie++)S(q.location+ie);r.bindBuffer(r.ARRAY_BUFFER,St);for(let ie=0;ie<q.locationSize;ie++)O(q.location+ie,$/q.locationSize,Ct,U,Pt*it,(qt+$/q.locationSize*ie)*it,pt)}else{if(yt.isInstancedBufferAttribute){for(let Mt=0;Mt<q.locationSize;Mt++)v(q.location+Mt,yt.meshPerAttribute);w.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Mt=0;Mt<q.locationSize;Mt++)S(q.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,St);for(let Mt=0;Mt<q.locationSize;Mt++)O(q.location+Mt,$/q.locationSize,Ct,U,$*it,$/q.locationSize*Mt*it,pt)}}else if(z!==void 0){const U=z[K];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(q.location,U);break;case 3:r.vertexAttrib3fv(q.location,U);break;case 4:r.vertexAttrib4fv(q.location,U);break;default:r.vertexAttrib1fv(q.location,U)}}}}G()}function I(){Y();for(const w in s){const B=s[w];for(const lt in B){const ct=B[lt];for(const ht in ct)g(ct[ht].object),delete ct[ht];delete B[lt]}delete s[w]}}function V(w){if(s[w.id]===void 0)return;const B=s[w.id];for(const lt in B){const ct=B[lt];for(const ht in ct)g(ct[ht].object),delete ct[ht];delete B[lt]}delete s[w.id]}function H(w){for(const B in s){const lt=s[B];if(lt[w.id]===void 0)continue;const ct=lt[w.id];for(const ht in ct)g(ct[ht].object),delete ct[ht];delete lt[w.id]}}function Y(){C(),h=!0,c!==l&&(c=l,d(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:Y,resetDefaultState:C,dispose:I,releaseStatesOfGeometry:V,releaseStatesOfProgram:H,initAttributes:R,enableAttribute:S,disableUnusedAttributes:G}}function Db(r,t,i){let s;function l(d){s=d}function c(d,g){r.drawArrays(s,d,g),i.update(g,s,1)}function h(d,g,_){_!==0&&(r.drawArraysInstanced(s,d,g,_),i.update(g,s,_))}function p(d,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,g,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E];i.update(M,s,1)}function m(d,g,_,x){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<d.length;E++)h(d[E],g[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(s,d,0,g,0,x,0,_);let E=0;for(let R=0;R<_;R++)E+=g[R]*x[R];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function Ub(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(H){return!(H!==Si&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(H){const Y=H===Ho&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==zi&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==oa&&!Y)}function m(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const g=m(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),G=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=E>0,V=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:G,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:I,maxSamples:V}}function Nb(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Fa,p=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||s!==0||l;return l=x,s=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,M){const E=_.clippingPlanes,R=_.clipIntersection,S=_.clipShadows,v=r.get(_);if(!l||E===null||E.length===0||c&&!S)c?g(null):d();else{const G=c?0:s,O=G*4;let D=v.clippingState||null;m.value=D,D=g(E,x,O,M);for(let I=0;I!==O;++I)D[I]=i[I];v.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=G}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,M,E){const R=_!==null?_.length:0;let S=null;if(R!==0){if(S=m.value,E!==!0||S===null){const v=M+R*4,G=x.matrixWorldInverse;p.getNormalMatrix(G),(S===null||S.length<v)&&(S=new Float32Array(v));for(let O=0,D=M;O!==R;++O,D+=4)h.copy(_[O]).applyMatrix4(G,p),h.normal.toArray(S,D),S[D+3]=h.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,S}}function Lb(r){let t=new WeakMap;function i(h,p){return p===zh?h.mapping=Rr:p===Ih&&(h.mapping=wr),h}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===zh||p===Ih)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const d=new AS(m.height);return d.fromEquirectangularTexture(r,h),t.set(h,d),h.addEventListener("dispose",l),i(d.texture,h.mapping)}else return null}}return h}function l(h){const p=h.target;p.removeEventListener("dispose",l);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Sr=4,X_=[.125,.215,.35,.446,.526,.582],_s=20,xh=new k0,j_=new Ae;let yh=null,Sh=0,Mh=0,Eh=!1;const ms=(1+Math.sqrt(5))/2,xr=1/ms,W_=[new et(-ms,xr,0),new et(ms,xr,0),new et(-xr,0,ms),new et(xr,0,ms),new et(0,ms,-xr),new et(0,ms,xr),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)],Ob=new et;class q_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:p=Ob}=c;yh=this._renderer.getRenderTarget(),Sh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=K_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Z_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yh,Sh,Mh),this._renderer.xr.enabled=Eh,t.scissorTest=!1,Mc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Rr||t.mapping===wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yh=this._renderer.getRenderTarget(),Sh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Ho,format:Si,colorSpace:Cr,depthBuffer:!1},l=Y_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Y_(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pb(c)),this._blurMaterial=zb(c,t,i)}return l}_compileMaterial(t){const i=new Mi(this._lodPlanes[0],t);this._renderer.compile(i,xh)}_sceneToCubeUV(t,i,s,l,c){const m=new fi(90,1,i,s),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(j_),_.toneMapping=Va,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const R=new P0({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),S=new Mi(new ko,R);let v=!1;const G=t.background;G?G.isColor&&(R.color.copy(G),t.background=null,v=!0):(R.color.copy(j_),v=!0);for(let O=0;O<6;O++){const D=O%3;D===0?(m.up.set(0,d[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[O],c.y,c.z)):D===1?(m.up.set(0,0,d[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[O],c.z)):(m.up.set(0,d[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[O]));const I=this._cubeSize;Mc(l,D*I,O>2?I:0,I,I),_.setRenderTarget(l),v&&_.render(S,m),_.render(t,m)}S.geometry.dispose(),S.material.dispose(),_.toneMapping=M,_.autoClear=x,t.background=G}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Rr||t.mapping===wr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=K_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Z_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Mi(this._lodPlanes[0],c),p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Mc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,xh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),p=W_[(l-c-1)%W_.length];this._blur(t,c-1,c,h,p)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Mi(this._lodPlanes[l],d),x=d.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*_s-1),R=c/E,S=isFinite(c)?1+Math.floor(g*R):_s;S>_s&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${_s}`);const v=[];let G=0;for(let H=0;H<_s;++H){const Y=H/R,C=Math.exp(-Y*Y/2);v.push(C),H===0?G+=C:H<S&&(G+=2*C)}for(let H=0;H<v.length;H++)v[H]=v[H]/G;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=h==="latitudinal",p&&(x.poleAxis.value=p);const{_lodMax:O}=this;x.dTheta.value=E,x.mipInt.value=O-s;const D=this._sizeLods[l],I=3*D*(l>O-Sr?l-O+Sr:0),V=4*(this._cubeSize-D);Mc(i,I,V,3*D,2*D),m.setRenderTarget(i),m.render(_,xh)}}function Pb(r){const t=[],i=[],s=[];let l=r;const c=r-Sr+1+X_.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);i.push(p);let m=1/p;h>r-Sr?m=X_[h-r+Sr-1]:h===0&&(m=0),s.push(m);const d=1/(p-2),g=-d,_=1+d,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,E=6,R=3,S=2,v=1,G=new Float32Array(R*E*M),O=new Float32Array(S*E*M),D=new Float32Array(v*E*M);for(let V=0;V<M;V++){const H=V%3*2/3-1,Y=V>2?0:-1,C=[H,Y,0,H+2/3,Y,0,H+2/3,Y+1,0,H,Y,0,H+2/3,Y+1,0,H,Y+1,0];G.set(C,R*E*V),O.set(x,S*E*V);const w=[V,V,V,V,V,V];D.set(w,v*E*V)}const I=new Bi;I.setAttribute("position",new Pi(G,R)),I.setAttribute("uv",new Pi(O,S)),I.setAttribute("faceIndex",new Pi(D,v)),t.push(I),l>Sr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function Y_(r,t,i){const s=new Ms(r,t,i);return s.texture.mapping=Pc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Mc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function zb(r,t,i){const s=new Float32Array(_s),l=new et(0,1,0);return new Xa({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Z_(){return new Xa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function K_(){return new Xa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Cd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ib(r){let t=new WeakMap,i=null;function s(p){if(p&&p.isTexture){const m=p.mapping,d=m===zh||m===Ih,g=m===Rr||m===wr;if(d||g){let _=t.get(p);const x=_!==void 0?_.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==x)return i===null&&(i=new q_(r)),_=d?i.fromEquirectangular(p,_):i.fromCubemap(p,_),_.texture.pmremVersion=p.pmremVersion,t.set(p,_),_.texture;if(_!==void 0)return _.texture;{const M=p.image;return d&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new q_(r)),_=d?i.fromEquirectangular(p):i.fromCubemap(p),_.texture.pmremVersion=p.pmremVersion,t.set(p,_),p.addEventListener("dispose",c),_.texture):null}}}return p}function l(p){let m=0;const d=6;for(let g=0;g<d;g++)p[g]!==void 0&&m++;return m===d}function c(p){const m=p.target;m.removeEventListener("dispose",c);const d=t.get(m);d!==void 0&&(t.delete(m),d.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Bb(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&br("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Fb(r,t,i,s){const l={},c=new WeakMap;function h(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",h),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function p(_,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const M in x)t.update(x[M],r.ARRAY_BUFFER)}function d(_){const x=[],M=_.index,E=_.attributes.position;let R=0;if(M!==null){const G=M.array;R=M.version;for(let O=0,D=G.length;O<D;O+=3){const I=G[O+0],V=G[O+1],H=G[O+2];x.push(I,V,V,H,H,I)}}else if(E!==void 0){const G=E.array;R=E.version;for(let O=0,D=G.length/3-1;O<D;O+=3){const I=O+0,V=O+1,H=O+2;x.push(I,V,V,H,H,I)}}else return;const S=new(U0(x)?I0:z0)(x,1);S.version=R;const v=c.get(_);v&&t.remove(v),c.set(_,S)}function g(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&d(_)}else d(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:g}}function Hb(r,t,i){let s;function l(x){s=x}let c,h;function p(x){c=x.type,h=x.bytesPerElement}function m(x,M){r.drawElements(s,M,c,x*h),i.update(M,s,1)}function d(x,M,E){E!==0&&(r.drawElementsInstanced(s,M,c,x*h,E),i.update(M,s,E))}function g(x,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,x,0,E);let S=0;for(let v=0;v<E;v++)S+=M[v];i.update(S,s,1)}function _(x,M,E,R){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)d(x[v]/h,M[v],R[v]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,c,x,0,R,0,E);let v=0;for(let G=0;G<E;G++)v+=M[G]*R[G];i.update(v,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function Gb(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,p){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Vb(r,t,i){const s=new WeakMap,l=new en;function c(h,p,m){const d=h.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(p);if(x===void 0||x.count!==_){let w=function(){Y.dispose(),s.delete(p),p.removeEventListener("dispose",w)};var M=w;x!==void 0&&x.texture.dispose();const E=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],G=p.morphAttributes.normal||[],O=p.morphAttributes.color||[];let D=0;E===!0&&(D=1),R===!0&&(D=2),S===!0&&(D=3);let I=p.attributes.position.count*D,V=1;I>t.maxTextureSize&&(V=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const H=new Float32Array(I*V*4*_),Y=new N0(H,I,V,_);Y.type=oa,Y.needsUpdate=!0;const C=D*4;for(let B=0;B<_;B++){const lt=v[B],ct=G[B],ht=O[B],dt=I*V*4*B;for(let z=0;z<lt.count;z++){const K=z*C;E===!0&&(l.fromBufferAttribute(lt,z),H[dt+K+0]=l.x,H[dt+K+1]=l.y,H[dt+K+2]=l.z,H[dt+K+3]=0),R===!0&&(l.fromBufferAttribute(ct,z),H[dt+K+4]=l.x,H[dt+K+5]=l.y,H[dt+K+6]=l.z,H[dt+K+7]=0),S===!0&&(l.fromBufferAttribute(ht,z),H[dt+K+8]=l.x,H[dt+K+9]=l.y,H[dt+K+10]=l.z,H[dt+K+11]=ht.itemSize===4?l.w:1)}}x={count:_,texture:Y,size:new oe(I,V)},s.set(p,x),p.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let S=0;S<d.length;S++)E+=d[S];const R=p.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function kb(r,t,i,s){let l=new WeakMap;function c(m){const d=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==d&&(t.update(_),l.set(_,d)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==d&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,d))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==d&&(x.update(),l.set(x,d))}return _}function h(){l=new WeakMap}function p(m){const d=m.target;d.removeEventListener("dispose",p),i.remove(d.instanceMatrix),d.instanceColor!==null&&i.remove(d.instanceColor)}return{update:c,dispose:h}}const j0=new Wn,Q_=new G0(1,1),W0=new N0,q0=new cS,Y0=new Td,J_=[],$_=[],t0=new Float32Array(16),e0=new Float32Array(9),n0=new Float32Array(4);function Nr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=J_[l];if(c===void 0&&(c=new Float32Array(l),J_[l]=c),t!==0){s.toArray(c,0);for(let h=1,p=0;h!==t;++h)p+=i,r[h].toArray(c,p)}return c}function gn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function _n(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Bc(r,t){let i=$_[t];i===void 0&&(i=new Int32Array(t),$_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function Xb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function jb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2fv(this.addr,t),_n(i,t)}}function Wb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;r.uniform3fv(this.addr,t),_n(i,t)}}function qb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4fv(this.addr,t),_n(i,t)}}function Yb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;n0.set(s),r.uniformMatrix2fv(this.addr,!1,n0),_n(i,s)}}function Zb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;e0.set(s),r.uniformMatrix3fv(this.addr,!1,e0),_n(i,s)}}function Kb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;t0.set(s),r.uniformMatrix4fv(this.addr,!1,t0),_n(i,s)}}function Qb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function Jb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2iv(this.addr,t),_n(i,t)}}function $b(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;r.uniform3iv(this.addr,t),_n(i,t)}}function tT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4iv(this.addr,t),_n(i,t)}}function eT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function nT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2uiv(this.addr,t),_n(i,t)}}function iT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;r.uniform3uiv(this.addr,t),_n(i,t)}}function aT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4uiv(this.addr,t),_n(i,t)}}function sT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Q_.compareFunction=D0,c=Q_):c=j0,i.setTexture2D(t||c,l)}function rT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||q0,l)}function oT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Y0,l)}function lT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||W0,l)}function cT(r){switch(r){case 5126:return Xb;case 35664:return jb;case 35665:return Wb;case 35666:return qb;case 35674:return Yb;case 35675:return Zb;case 35676:return Kb;case 5124:case 35670:return Qb;case 35667:case 35671:return Jb;case 35668:case 35672:return $b;case 35669:case 35673:return tT;case 5125:return eT;case 36294:return nT;case 36295:return iT;case 36296:return aT;case 35678:case 36198:case 36298:case 36306:case 35682:return sT;case 35679:case 36299:case 36307:return rT;case 35680:case 36300:case 36308:case 36293:return oT;case 36289:case 36303:case 36311:case 36292:return lT}}function uT(r,t){r.uniform1fv(this.addr,t)}function fT(r,t){const i=Nr(t,this.size,2);r.uniform2fv(this.addr,i)}function hT(r,t){const i=Nr(t,this.size,3);r.uniform3fv(this.addr,i)}function dT(r,t){const i=Nr(t,this.size,4);r.uniform4fv(this.addr,i)}function pT(r,t){const i=Nr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function mT(r,t){const i=Nr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function gT(r,t){const i=Nr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function _T(r,t){r.uniform1iv(this.addr,t)}function vT(r,t){r.uniform2iv(this.addr,t)}function xT(r,t){r.uniform3iv(this.addr,t)}function yT(r,t){r.uniform4iv(this.addr,t)}function ST(r,t){r.uniform1uiv(this.addr,t)}function MT(r,t){r.uniform2uiv(this.addr,t)}function ET(r,t){r.uniform3uiv(this.addr,t)}function bT(r,t){r.uniform4uiv(this.addr,t)}function TT(r,t,i){const s=this.cache,l=t.length,c=Bc(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||j0,c[h])}function AT(r,t,i){const s=this.cache,l=t.length,c=Bc(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||q0,c[h])}function RT(r,t,i){const s=this.cache,l=t.length,c=Bc(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Y0,c[h])}function wT(r,t,i){const s=this.cache,l=t.length,c=Bc(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||W0,c[h])}function CT(r){switch(r){case 5126:return uT;case 35664:return fT;case 35665:return hT;case 35666:return dT;case 35674:return pT;case 35675:return mT;case 35676:return gT;case 5124:case 35670:return _T;case 35667:case 35671:return vT;case 35668:case 35672:return xT;case 35669:case 35673:return yT;case 5125:return ST;case 36294:return MT;case 36295:return ET;case 36296:return bT;case 35678:case 36198:case 36298:case 36306:case 35682:return TT;case 35679:case 36299:case 36307:return AT;case 35680:case 36300:case 36308:case 36293:return RT;case 36289:case 36303:case 36311:case 36292:return wT}}class DT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=cT(i.type)}}class UT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=CT(i.type)}}class NT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const bh=/(\w+)(\])?(\[|\.)?/g;function i0(r,t){r.seq.push(t),r.map[t.id]=t}function LT(r,t,i){const s=r.name,l=s.length;for(bh.lastIndex=0;;){const c=bh.exec(s),h=bh.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){i0(i,d===void 0?new DT(p,r,t):new UT(p,r,t));break}else{let _=i.map[p];_===void 0&&(_=new NT(p),i0(i,_)),i=_}}}class Nc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);LT(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function a0(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const OT=37297;let PT=0;function zT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const p=h+1;s.push(`${p===t?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const s0=new ce;function IT(r){Te._getMatrix(s0,Te.workingColorSpace,r);const t=`mat3( ${s0.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(r)){case Lc:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function r0(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+zT(r.getShaderSource(t),p)}else return c}function BT(r,t){const i=IT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function FT(r,t){let i;switch(t){case zy:i="Linear";break;case Iy:i="Reinhard";break;case By:i="Cineon";break;case Fy:i="ACESFilmic";break;case Gy:i="AgX";break;case Vy:i="Neutral";break;case Hy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ec=new et;function HT(){Te.getLuminanceCoefficients(Ec);const r=Ec.x.toFixed(4),t=Ec.y.toFixed(4),i=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function VT(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function kT(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:p}}return i}function Oo(r){return r!==""}function o0(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function l0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const XT=/^[ \t]*#include +<([\w\d./]+)>/gm;function pd(r){return r.replace(XT,WT)}const jT=new Map;function WT(r,t){let i=he[t];if(i===void 0){const s=jT.get(t);if(s!==void 0)i=he[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return pd(i)}const qT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c0(r){return r.replace(qT,YT)}function YT(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function u0(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ZT(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===v0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===my?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===sa&&(t="SHADOWMAP_TYPE_VSM"),t}function KT(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Rr:case wr:t="ENVMAP_TYPE_CUBE";break;case Pc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function QT(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case wr:t="ENVMAP_MODE_REFRACTION";break}return t}function JT(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case x0:t="ENVMAP_BLENDING_MULTIPLY";break;case Oy:t="ENVMAP_BLENDING_MIX";break;case Py:t="ENVMAP_BLENDING_ADD";break}return t}function $T(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function tA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=ZT(i),d=KT(i),g=QT(i),_=JT(i),x=$T(i),M=GT(i),E=VT(c),R=l.createProgram();let S,v,G=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Oo).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Oo).join(`
`),v.length>0&&(v+=`
`)):(S=[u0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),v=[u0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Va?"#define TONE_MAPPING":"",i.toneMapping!==Va?he.tonemapping_pars_fragment:"",i.toneMapping!==Va?FT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,BT("linearToOutputTexel",i.outputColorSpace),HT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Oo).join(`
`)),h=pd(h),h=o0(h,i),h=l0(h,i),p=pd(p),p=o0(p,i),p=l0(p,i),h=c0(h),p=c0(p),i.isRawShaderMaterial!==!0&&(G=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===y_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===y_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const O=G+S+h,D=G+v+p,I=a0(l,l.VERTEX_SHADER,O),V=a0(l,l.FRAGMENT_SHADER,D);l.attachShader(R,I),l.attachShader(R,V),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function H(B){if(r.debug.checkShaderErrors){const lt=l.getProgramInfoLog(R)||"",ct=l.getShaderInfoLog(I)||"",ht=l.getShaderInfoLog(V)||"",dt=lt.trim(),z=ct.trim(),K=ht.trim();let q=!0,yt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,I,V);else{const U=r0(l,I,"vertex"),$=r0(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+dt+`
`+U+`
`+$)}else dt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",dt):(z===""||K==="")&&(yt=!1);yt&&(B.diagnostics={runnable:q,programLog:dt,vertexShader:{log:z,prefix:S},fragmentShader:{log:K,prefix:v}})}l.deleteShader(I),l.deleteShader(V),Y=new Nc(l,R),C=kT(l,R)}let Y;this.getUniforms=function(){return Y===void 0&&H(this),Y};let C;this.getAttributes=function(){return C===void 0&&H(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,OT)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=PT++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=I,this.fragmentShader=V,this}let eA=0;class nA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new iA(t),i.set(t,s)),s}}class iA{constructor(t){this.id=eA++,this.code=t,this.usedTimes=0}}function aA(r,t,i,s,l,c,h){const p=new L0,m=new nA,d=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return d.add(C),C===0?"uv":`uv${C}`}function S(C,w,B,lt,ct){const ht=lt.fog,dt=ct.geometry,z=C.isMeshStandardMaterial?lt.environment:null,K=(C.isMeshStandardMaterial?i:t).get(C.envMap||z),q=K&&K.mapping===Pc?K.image.height:null,yt=E[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const U=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,$=U!==void 0?U.length:0;let xt=0;dt.morphAttributes.position!==void 0&&(xt=1),dt.morphAttributes.normal!==void 0&&(xt=2),dt.morphAttributes.color!==void 0&&(xt=3);let St,Ct,it,pt;if(yt){const Me=Ni[yt];St=Me.vertexShader,Ct=Me.fragmentShader}else St=C.vertexShader,Ct=C.fragmentShader,m.update(C),it=m.getVertexShaderID(C),pt=m.getFragmentShaderID(C);const Mt=r.getRenderTarget(),Pt=r.state.buffers.depth.getReversed(),qt=ct.isInstancedMesh===!0,ie=ct.isBatchedMesh===!0,He=!!C.map,me=!!C.matcap,F=!!K,we=!!C.aoMap,Qt=!!C.lightMap,Se=!!C.bumpMap,Ft=!!C.normalMap,Ge=!!C.displacementMap,Ht=!!C.emissiveMap,re=!!C.metalnessMap,Ye=!!C.roughnessMap,Ze=C.anisotropy>0,L=C.clearcoat>0,b=C.dispersion>0,tt=C.iridescence>0,ut=C.sheen>0,vt=C.transmission>0,ot=Ze&&!!C.anisotropyMap,zt=L&&!!C.clearcoatMap,Rt=L&&!!C.clearcoatNormalMap,Xt=L&&!!C.clearcoatRoughnessMap,Wt=tt&&!!C.iridescenceMap,Et=tt&&!!C.iridescenceThicknessMap,Nt=ut&&!!C.sheenColorMap,Zt=ut&&!!C.sheenRoughnessMap,kt=!!C.specularMap,Dt=!!C.specularColorMap,se=!!C.specularIntensityMap,X=vt&&!!C.transmissionMap,At=vt&&!!C.thicknessMap,wt=!!C.gradientMap,It=!!C.alphaMap,bt=C.alphaTest>0,_t=!!C.alphaHash,Vt=!!C.extensions;let ae=Va;C.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(ae=r.toneMapping);const Ce={shaderID:yt,shaderType:C.type,shaderName:C.name,vertexShader:St,fragmentShader:Ct,defines:C.defines,customVertexShaderID:it,customFragmentShaderID:pt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:ie,batchingColor:ie&&ct._colorsTexture!==null,instancing:qt,instancingColor:qt&&ct.instanceColor!==null,instancingMorph:qt&&ct.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Mt===null?r.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Cr,alphaToCoverage:!!C.alphaToCoverage,map:He,matcap:me,envMap:F,envMapMode:F&&K.mapping,envMapCubeUVHeight:q,aoMap:we,lightMap:Qt,bumpMap:Se,normalMap:Ft,displacementMap:x&&Ge,emissiveMap:Ht,normalMapObjectSpace:Ft&&C.normalMapType===Wy,normalMapTangentSpace:Ft&&C.normalMapType===C0,metalnessMap:re,roughnessMap:Ye,anisotropy:Ze,anisotropyMap:ot,clearcoat:L,clearcoatMap:zt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:b,iridescence:tt,iridescenceMap:Wt,iridescenceThicknessMap:Et,sheen:ut,sheenColorMap:Nt,sheenRoughnessMap:Zt,specularMap:kt,specularColorMap:Dt,specularIntensityMap:se,transmission:vt,transmissionMap:X,thicknessMap:At,gradientMap:wt,opaque:C.transparent===!1&&C.blending===Er&&C.alphaToCoverage===!1,alphaMap:It,alphaTest:bt,alphaHash:_t,combine:C.combine,mapUv:He&&R(C.map.channel),aoMapUv:we&&R(C.aoMap.channel),lightMapUv:Qt&&R(C.lightMap.channel),bumpMapUv:Se&&R(C.bumpMap.channel),normalMapUv:Ft&&R(C.normalMap.channel),displacementMapUv:Ge&&R(C.displacementMap.channel),emissiveMapUv:Ht&&R(C.emissiveMap.channel),metalnessMapUv:re&&R(C.metalnessMap.channel),roughnessMapUv:Ye&&R(C.roughnessMap.channel),anisotropyMapUv:ot&&R(C.anisotropyMap.channel),clearcoatMapUv:zt&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&R(C.sheenRoughnessMap.channel),specularMapUv:kt&&R(C.specularMap.channel),specularColorMapUv:Dt&&R(C.specularColorMap.channel),specularIntensityMapUv:se&&R(C.specularIntensityMap.channel),transmissionMapUv:X&&R(C.transmissionMap.channel),thicknessMapUv:At&&R(C.thicknessMap.channel),alphaMapUv:It&&R(C.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(Ft||Ze),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:ct.isPoints===!0&&!!dt.attributes.uv&&(He||It),fog:!!ht,useFog:C.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Pt,skinning:ct.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:xt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:ae,decodeVideoTexture:He&&C.map.isVideoTexture===!0&&Te.getTransfer(C.map.colorSpace)===ze,decodeVideoTextureEmissive:Ht&&C.emissiveMap.isVideoTexture===!0&&Te.getTransfer(C.emissiveMap.colorSpace)===ze,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ra,flipSided:C.side===jn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Vt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&C.extensions.multiDraw===!0||ie)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ce.vertexUv1s=d.has(1),Ce.vertexUv2s=d.has(2),Ce.vertexUv3s=d.has(3),d.clear(),Ce}function v(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const B in C.defines)w.push(B),w.push(C.defines[B]);return C.isRawShaderMaterial===!1&&(G(w,C),O(w,C),w.push(r.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function G(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function O(C,w){p.disableAll(),w.supportsVertexTextures&&p.enable(0),w.instancing&&p.enable(1),w.instancingColor&&p.enable(2),w.instancingMorph&&p.enable(3),w.matcap&&p.enable(4),w.envMap&&p.enable(5),w.normalMapObjectSpace&&p.enable(6),w.normalMapTangentSpace&&p.enable(7),w.clearcoat&&p.enable(8),w.iridescence&&p.enable(9),w.alphaTest&&p.enable(10),w.vertexColors&&p.enable(11),w.vertexAlphas&&p.enable(12),w.vertexUv1s&&p.enable(13),w.vertexUv2s&&p.enable(14),w.vertexUv3s&&p.enable(15),w.vertexTangents&&p.enable(16),w.anisotropy&&p.enable(17),w.alphaHash&&p.enable(18),w.batching&&p.enable(19),w.dispersion&&p.enable(20),w.batchingColor&&p.enable(21),w.gradientMap&&p.enable(22),C.push(p.mask),p.disableAll(),w.fog&&p.enable(0),w.useFog&&p.enable(1),w.flatShading&&p.enable(2),w.logarithmicDepthBuffer&&p.enable(3),w.reversedDepthBuffer&&p.enable(4),w.skinning&&p.enable(5),w.morphTargets&&p.enable(6),w.morphNormals&&p.enable(7),w.morphColors&&p.enable(8),w.premultipliedAlpha&&p.enable(9),w.shadowMapEnabled&&p.enable(10),w.doubleSided&&p.enable(11),w.flipSided&&p.enable(12),w.useDepthPacking&&p.enable(13),w.dithering&&p.enable(14),w.transmission&&p.enable(15),w.sheen&&p.enable(16),w.opaque&&p.enable(17),w.pointsUvs&&p.enable(18),w.decodeVideoTexture&&p.enable(19),w.decodeVideoTextureEmissive&&p.enable(20),w.alphaToCoverage&&p.enable(21),C.push(p.mask)}function D(C){const w=E[C.type];let B;if(w){const lt=Ni[w];B=MS.clone(lt.uniforms)}else B=C.uniforms;return B}function I(C,w){let B;for(let lt=0,ct=g.length;lt<ct;lt++){const ht=g[lt];if(ht.cacheKey===w){B=ht,++B.usedTimes;break}}return B===void 0&&(B=new tA(r,w,C,c),g.push(B)),B}function V(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),C.destroy()}}function H(C){m.remove(C)}function Y(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:D,acquireProgram:I,releaseProgram:V,releaseShaderCache:H,programs:g,dispose:Y}}function sA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let p=r.get(h);return p===void 0&&(p={},r.set(h,p)),p}function s(h){r.delete(h)}function l(h,p,m){r.get(h)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function rA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function f0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function h0(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,x,M,E,R,S){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:M,groupOrder:E,renderOrder:_.renderOrder,z:R,group:S},r[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=M,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=R,v.group=S),t++,v}function p(_,x,M,E,R,S){const v=h(_,x,M,E,R,S);M.transmission>0?s.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(_,x,M,E,R,S){const v=h(_,x,M,E,R,S);M.transmission>0?s.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function d(_,x){i.length>1&&i.sort(_||rA),s.length>1&&s.sort(x||f0),l.length>1&&l.sort(x||f0)}function g(){for(let _=t,x=r.length;_<x;_++){const M=r[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:p,unshift:m,finish:g,sort:d}}function oA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new h0,r.set(s,[h])):l>=c.length?(h=new h0,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function lA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new et,color:new Ae};break;case"SpotLight":i={position:new et,direction:new et,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":i={color:new Ae,position:new et,halfWidth:new et,halfHeight:new et};break}return r[t.id]=i,i}}}function cA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let uA=0;function fA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function hA(r){const t=new lA,i=cA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new et);const l=new et,c=new nn,h=new nn;function p(d){let g=0,_=0,x=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let M=0,E=0,R=0,S=0,v=0,G=0,O=0,D=0,I=0,V=0,H=0;d.sort(fA);for(let C=0,w=d.length;C<w;C++){const B=d[C],lt=B.color,ct=B.intensity,ht=B.distance,dt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=lt.r*ct,_+=lt.g*ct,x+=lt.b*ct;else if(B.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(B.sh.coefficients[z],ct);H++}else if(B.isDirectionalLight){const z=t.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const K=B.shadow,q=i.get(B);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,s.directionalShadow[M]=q,s.directionalShadowMap[M]=dt,s.directionalShadowMatrix[M]=B.shadow.matrix,G++}s.directional[M]=z,M++}else if(B.isSpotLight){const z=t.get(B);z.position.setFromMatrixPosition(B.matrixWorld),z.color.copy(lt).multiplyScalar(ct),z.distance=ht,z.coneCos=Math.cos(B.angle),z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),z.decay=B.decay,s.spot[R]=z;const K=B.shadow;if(B.map&&(s.spotLightMap[I]=B.map,I++,K.updateMatrices(B),B.castShadow&&V++),s.spotLightMatrix[R]=K.matrix,B.castShadow){const q=i.get(B);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,s.spotShadow[R]=q,s.spotShadowMap[R]=dt,D++}R++}else if(B.isRectAreaLight){const z=t.get(B);z.color.copy(lt).multiplyScalar(ct),z.halfWidth.set(B.width*.5,0,0),z.halfHeight.set(0,B.height*.5,0),s.rectArea[S]=z,S++}else if(B.isPointLight){const z=t.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),z.distance=B.distance,z.decay=B.decay,B.castShadow){const K=B.shadow,q=i.get(B);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,s.pointShadow[E]=q,s.pointShadowMap[E]=dt,s.pointShadowMatrix[E]=B.shadow.matrix,O++}s.point[E]=z,E++}else if(B.isHemisphereLight){const z=t.get(B);z.skyColor.copy(B.color).multiplyScalar(ct),z.groundColor.copy(B.groundColor).multiplyScalar(ct),s.hemi[v]=z,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ot.LTC_FLOAT_1,s.rectAreaLTC2=Ot.LTC_FLOAT_2):(s.rectAreaLTC1=Ot.LTC_HALF_1,s.rectAreaLTC2=Ot.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const Y=s.hash;(Y.directionalLength!==M||Y.pointLength!==E||Y.spotLength!==R||Y.rectAreaLength!==S||Y.hemiLength!==v||Y.numDirectionalShadows!==G||Y.numPointShadows!==O||Y.numSpotShadows!==D||Y.numSpotMaps!==I||Y.numLightProbes!==H)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=S,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=G,s.directionalShadowMap.length=G,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=G,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+I-V,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=H,Y.directionalLength=M,Y.pointLength=E,Y.spotLength=R,Y.rectAreaLength=S,Y.hemiLength=v,Y.numDirectionalShadows=G,Y.numPointShadows=O,Y.numSpotShadows=D,Y.numSpotMaps=I,Y.numLightProbes=H,s.version=uA++)}function m(d,g){let _=0,x=0,M=0,E=0,R=0;const S=g.matrixWorldInverse;for(let v=0,G=d.length;v<G;v++){const O=d[v];if(O.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),_++}else if(O.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),M++}else if(O.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(S),h.identity(),c.copy(O.matrixWorld),c.premultiply(S),h.extractRotation(c),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),E++}else if(O.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(S),x++}else if(O.isHemisphereLight){const D=s.hemi[R];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(S),R++}}}return{setup:p,setupView:m,state:s}}function d0(r){const t=new hA(r),i=[],s=[];function l(g){d.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function p(){t.setup(i)}function m(g){t.setupView(i,g)}const d={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:h}}function dA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let p;return h===void 0?(p=new d0(r),t.set(l,[p])):c>=h.length?(p=new d0(r),h.push(p)):p=h[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const pA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gA(r,t,i){let s=new Ad;const l=new oe,c=new oe,h=new en,p=new OS({depthPacking:jy}),m=new PS,d={},g=i.maxTextureSize,_={[ka]:jn,[jn]:ka,[ra]:ra},x=new Xa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:pA,fragmentShader:mA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new Bi;E.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Mi(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v0;let v=this.type;this.render=function(V,H,Y){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||V.length===0)return;const C=r.getRenderTarget(),w=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),lt=r.state;lt.setBlending(Ga),lt.buffers.depth.getReversed()?lt.buffers.color.setClear(0,0,0,0):lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const ct=v!==sa&&this.type===sa,ht=v===sa&&this.type!==sa;for(let dt=0,z=V.length;dt<z;dt++){const K=V[dt],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const yt=q.getFrameExtents();if(l.multiply(yt),c.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/yt.x),l.x=c.x*yt.x,q.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/yt.y),l.y=c.y*yt.y,q.mapSize.y=c.y)),q.map===null||ct===!0||ht===!0){const $=this.type!==sa?{minFilter:Ei,magFilter:Ei}:{};q.map!==null&&q.map.dispose(),q.map=new Ms(l.x,l.y,$),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const U=q.getViewportCount();for(let $=0;$<U;$++){const xt=q.getViewport($);h.set(c.x*xt.x,c.y*xt.y,c.x*xt.z,c.y*xt.w),lt.viewport(h),q.updateMatrices(K,$),s=q.getFrustum(),D(H,Y,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===sa&&G(q,Y),q.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(C,w,B)};function G(V,H){const Y=t.update(R);x.defines.VSM_SAMPLES!==V.blurSamples&&(x.defines.VSM_SAMPLES=V.blurSamples,M.defines.VSM_SAMPLES=V.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Ms(l.x,l.y)),x.uniforms.shadow_pass.value=V.map.texture,x.uniforms.resolution.value=V.mapSize,x.uniforms.radius.value=V.radius,r.setRenderTarget(V.mapPass),r.clear(),r.renderBufferDirect(H,null,Y,x,R,null),M.uniforms.shadow_pass.value=V.mapPass.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,r.setRenderTarget(V.map),r.clear(),r.renderBufferDirect(H,null,Y,M,R,null)}function O(V,H,Y,C){let w=null;const B=Y.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(B!==void 0)w=B;else if(w=Y.isPointLight===!0?m:p,r.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const lt=w.uuid,ct=H.uuid;let ht=d[lt];ht===void 0&&(ht={},d[lt]=ht);let dt=ht[ct];dt===void 0&&(dt=w.clone(),ht[ct]=dt,H.addEventListener("dispose",I)),w=dt}if(w.visible=H.visible,w.wireframe=H.wireframe,C===sa?w.side=H.shadowSide!==null?H.shadowSide:H.side:w.side=H.shadowSide!==null?H.shadowSide:_[H.side],w.alphaMap=H.alphaMap,w.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,w.map=H.map,w.clipShadows=H.clipShadows,w.clippingPlanes=H.clippingPlanes,w.clipIntersection=H.clipIntersection,w.displacementMap=H.displacementMap,w.displacementScale=H.displacementScale,w.displacementBias=H.displacementBias,w.wireframeLinewidth=H.wireframeLinewidth,w.linewidth=H.linewidth,Y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const lt=r.properties.get(w);lt.light=Y}return w}function D(V,H,Y,C,w){if(V.visible===!1)return;if(V.layers.test(H.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&w===sa)&&(!V.frustumCulled||s.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,V.matrixWorld);const ct=t.update(V),ht=V.material;if(Array.isArray(ht)){const dt=ct.groups;for(let z=0,K=dt.length;z<K;z++){const q=dt[z],yt=ht[q.materialIndex];if(yt&&yt.visible){const U=O(V,yt,C,w);V.onBeforeShadow(r,V,H,Y,ct,U,q),r.renderBufferDirect(Y,null,ct,U,V,q),V.onAfterShadow(r,V,H,Y,ct,U,q)}}}else if(ht.visible){const dt=O(V,ht,C,w);V.onBeforeShadow(r,V,H,Y,ct,dt,null),r.renderBufferDirect(Y,null,ct,dt,V,null),V.onAfterShadow(r,V,H,Y,ct,dt,null)}}const lt=V.children;for(let ct=0,ht=lt.length;ct<ht;ct++)D(lt[ct],H,Y,C,w)}function I(V){V.target.removeEventListener("dispose",I);for(const Y in d){const C=d[Y],w=V.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const _A={[Ch]:Dh,[Uh]:Oh,[Nh]:Ph,[Ar]:Lh,[Dh]:Ch,[Oh]:Uh,[Ph]:Nh,[Lh]:Ar};function vA(r,t){function i(){let X=!1;const At=new en;let wt=null;const It=new en(0,0,0,0);return{setMask:function(bt){wt!==bt&&!X&&(r.colorMask(bt,bt,bt,bt),wt=bt)},setLocked:function(bt){X=bt},setClear:function(bt,_t,Vt,ae,Ce){Ce===!0&&(bt*=ae,_t*=ae,Vt*=ae),At.set(bt,_t,Vt,ae),It.equals(At)===!1&&(r.clearColor(bt,_t,Vt,ae),It.copy(At))},reset:function(){X=!1,wt=null,It.set(-1,0,0,0)}}}function s(){let X=!1,At=!1,wt=null,It=null,bt=null;return{setReversed:function(_t){if(At!==_t){const Vt=t.get("EXT_clip_control");_t?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),At=_t;const ae=bt;bt=null,this.setClear(ae)}},getReversed:function(){return At},setTest:function(_t){_t?Mt(r.DEPTH_TEST):Pt(r.DEPTH_TEST)},setMask:function(_t){wt!==_t&&!X&&(r.depthMask(_t),wt=_t)},setFunc:function(_t){if(At&&(_t=_A[_t]),It!==_t){switch(_t){case Ch:r.depthFunc(r.NEVER);break;case Dh:r.depthFunc(r.ALWAYS);break;case Uh:r.depthFunc(r.LESS);break;case Ar:r.depthFunc(r.LEQUAL);break;case Nh:r.depthFunc(r.EQUAL);break;case Lh:r.depthFunc(r.GEQUAL);break;case Oh:r.depthFunc(r.GREATER);break;case Ph:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}It=_t}},setLocked:function(_t){X=_t},setClear:function(_t){bt!==_t&&(At&&(_t=1-_t),r.clearDepth(_t),bt=_t)},reset:function(){X=!1,wt=null,It=null,bt=null,At=!1}}}function l(){let X=!1,At=null,wt=null,It=null,bt=null,_t=null,Vt=null,ae=null,Ce=null;return{setTest:function(Me){X||(Me?Mt(r.STENCIL_TEST):Pt(r.STENCIL_TEST))},setMask:function(Me){At!==Me&&!X&&(r.stencilMask(Me),At=Me)},setFunc:function(Me,hi,fn){(wt!==Me||It!==hi||bt!==fn)&&(r.stencilFunc(Me,hi,fn),wt=Me,It=hi,bt=fn)},setOp:function(Me,hi,fn){(_t!==Me||Vt!==hi||ae!==fn)&&(r.stencilOp(Me,hi,fn),_t=Me,Vt=hi,ae=fn)},setLocked:function(Me){X=Me},setClear:function(Me){Ce!==Me&&(r.clearStencil(Me),Ce=Me)},reset:function(){X=!1,At=null,wt=null,It=null,bt=null,_t=null,Vt=null,ae=null,Ce=null}}}const c=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let g={},_={},x=new WeakMap,M=[],E=null,R=!1,S=null,v=null,G=null,O=null,D=null,I=null,V=null,H=new Ae(0,0,0),Y=0,C=!1,w=null,B=null,lt=null,ct=null,ht=null;const dt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=K>=2);let yt=null,U={};const $=r.getParameter(r.SCISSOR_BOX),xt=r.getParameter(r.VIEWPORT),St=new en().fromArray($),Ct=new en().fromArray(xt);function it(X,At,wt,It){const bt=new Uint8Array(4),_t=r.createTexture();r.bindTexture(X,_t),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Vt=0;Vt<wt;Vt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(At,0,r.RGBA,1,1,It,0,r.RGBA,r.UNSIGNED_BYTE,bt):r.texImage2D(At+Vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,bt);return _t}const pt={};pt[r.TEXTURE_2D]=it(r.TEXTURE_2D,r.TEXTURE_2D,1),pt[r.TEXTURE_CUBE_MAP]=it(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[r.TEXTURE_2D_ARRAY]=it(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),pt[r.TEXTURE_3D]=it(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),Mt(r.DEPTH_TEST),h.setFunc(Ar),Se(!1),Ft(p_),Mt(r.CULL_FACE),we(Ga);function Mt(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function Pt(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function qt(X,At){return _[X]!==At?(r.bindFramebuffer(X,At),_[X]=At,X===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=At),X===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=At),!0):!1}function ie(X,At){let wt=M,It=!1;if(X){wt=x.get(At),wt===void 0&&(wt=[],x.set(At,wt));const bt=X.textures;if(wt.length!==bt.length||wt[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,Vt=bt.length;_t<Vt;_t++)wt[_t]=r.COLOR_ATTACHMENT0+_t;wt.length=bt.length,It=!0}}else wt[0]!==r.BACK&&(wt[0]=r.BACK,It=!0);It&&r.drawBuffers(wt)}function He(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const me={[gs]:r.FUNC_ADD,[_y]:r.FUNC_SUBTRACT,[vy]:r.FUNC_REVERSE_SUBTRACT};me[xy]=r.MIN,me[yy]=r.MAX;const F={[Sy]:r.ZERO,[My]:r.ONE,[Ey]:r.SRC_COLOR,[Rh]:r.SRC_ALPHA,[Cy]:r.SRC_ALPHA_SATURATE,[Ry]:r.DST_COLOR,[Ty]:r.DST_ALPHA,[by]:r.ONE_MINUS_SRC_COLOR,[wh]:r.ONE_MINUS_SRC_ALPHA,[wy]:r.ONE_MINUS_DST_COLOR,[Ay]:r.ONE_MINUS_DST_ALPHA,[Dy]:r.CONSTANT_COLOR,[Uy]:r.ONE_MINUS_CONSTANT_COLOR,[Ny]:r.CONSTANT_ALPHA,[Ly]:r.ONE_MINUS_CONSTANT_ALPHA};function we(X,At,wt,It,bt,_t,Vt,ae,Ce,Me){if(X===Ga){R===!0&&(Pt(r.BLEND),R=!1);return}if(R===!1&&(Mt(r.BLEND),R=!0),X!==gy){if(X!==S||Me!==C){if((v!==gs||D!==gs)&&(r.blendEquation(r.FUNC_ADD),v=gs,D=gs),Me)switch(X){case Er:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case m_:r.blendFunc(r.ONE,r.ONE);break;case g_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case __:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Er:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case m_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case g_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case __:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}G=null,O=null,I=null,V=null,H.set(0,0,0),Y=0,S=X,C=Me}return}bt=bt||At,_t=_t||wt,Vt=Vt||It,(At!==v||bt!==D)&&(r.blendEquationSeparate(me[At],me[bt]),v=At,D=bt),(wt!==G||It!==O||_t!==I||Vt!==V)&&(r.blendFuncSeparate(F[wt],F[It],F[_t],F[Vt]),G=wt,O=It,I=_t,V=Vt),(ae.equals(H)===!1||Ce!==Y)&&(r.blendColor(ae.r,ae.g,ae.b,Ce),H.copy(ae),Y=Ce),S=X,C=!1}function Qt(X,At){X.side===ra?Pt(r.CULL_FACE):Mt(r.CULL_FACE);let wt=X.side===jn;At&&(wt=!wt),Se(wt),X.blending===Er&&X.transparent===!1?we(Ga):we(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const It=X.stencilWrite;p.setTest(It),It&&(p.setMask(X.stencilWriteMask),p.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),p.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ht(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Mt(r.SAMPLE_ALPHA_TO_COVERAGE):Pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Se(X){w!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),w=X)}function Ft(X){X!==dy?(Mt(r.CULL_FACE),X!==B&&(X===p_?r.cullFace(r.BACK):X===py?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pt(r.CULL_FACE),B=X}function Ge(X){X!==lt&&(z&&r.lineWidth(X),lt=X)}function Ht(X,At,wt){X?(Mt(r.POLYGON_OFFSET_FILL),(ct!==At||ht!==wt)&&(r.polygonOffset(At,wt),ct=At,ht=wt)):Pt(r.POLYGON_OFFSET_FILL)}function re(X){X?Mt(r.SCISSOR_TEST):Pt(r.SCISSOR_TEST)}function Ye(X){X===void 0&&(X=r.TEXTURE0+dt-1),yt!==X&&(r.activeTexture(X),yt=X)}function Ze(X,At,wt){wt===void 0&&(yt===null?wt=r.TEXTURE0+dt-1:wt=yt);let It=U[wt];It===void 0&&(It={type:void 0,texture:void 0},U[wt]=It),(It.type!==X||It.texture!==At)&&(yt!==wt&&(r.activeTexture(wt),yt=wt),r.bindTexture(X,At||pt[X]),It.type=X,It.texture=At)}function L(){const X=U[yt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function vt(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ot(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xt(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Wt(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Nt(X){St.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),St.copy(X))}function Zt(X){Ct.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ct.copy(X))}function kt(X,At){let wt=d.get(At);wt===void 0&&(wt=new WeakMap,d.set(At,wt));let It=wt.get(X);It===void 0&&(It=r.getUniformBlockIndex(At,X.name),wt.set(X,It))}function Dt(X,At){const It=d.get(At).get(X);m.get(At)!==It&&(r.uniformBlockBinding(At,It,X.__bindingPointIndex),m.set(At,It))}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},yt=null,U={},_={},x=new WeakMap,M=[],E=null,R=!1,S=null,v=null,G=null,O=null,D=null,I=null,V=null,H=new Ae(0,0,0),Y=0,C=!1,w=null,B=null,lt=null,ct=null,ht=null,St.set(0,0,r.canvas.width,r.canvas.height),Ct.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:Mt,disable:Pt,bindFramebuffer:qt,drawBuffers:ie,useProgram:He,setBlending:we,setMaterial:Qt,setFlipSided:Se,setCullFace:Ft,setLineWidth:Ge,setPolygonOffset:Ht,setScissorTest:re,activeTexture:Ye,bindTexture:Ze,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:tt,texImage2D:Wt,texImage3D:Et,updateUBOMapping:kt,uniformBlockBinding:Dt,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:ut,texSubImage3D:vt,compressedTexSubImage2D:ot,compressedTexSubImage3D:zt,scissor:Nt,viewport:Zt,reset:se}}function xA(r,t,i,s,l,c,h){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new oe,g=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return M?new OffscreenCanvas(L,b):Fo("canvas")}function R(L,b,tt){let ut=1;const vt=Ze(L);if((vt.width>tt||vt.height>tt)&&(ut=tt/Math.max(vt.width,vt.height)),ut<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ot=Math.floor(ut*vt.width),zt=Math.floor(ut*vt.height);_===void 0&&(_=E(ot,zt));const Rt=b?E(ot,zt):_;return Rt.width=ot,Rt.height=zt,Rt.getContext("2d").drawImage(L,0,0,ot,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ot+"x"+zt+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),L;return L}function S(L){return L.generateMipmaps}function v(L){r.generateMipmap(L)}function G(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(L,b,tt,ut,vt=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ot=b;if(b===r.RED&&(tt===r.FLOAT&&(ot=r.R32F),tt===r.HALF_FLOAT&&(ot=r.R16F),tt===r.UNSIGNED_BYTE&&(ot=r.R8)),b===r.RED_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ot=r.R8UI),tt===r.UNSIGNED_SHORT&&(ot=r.R16UI),tt===r.UNSIGNED_INT&&(ot=r.R32UI),tt===r.BYTE&&(ot=r.R8I),tt===r.SHORT&&(ot=r.R16I),tt===r.INT&&(ot=r.R32I)),b===r.RG&&(tt===r.FLOAT&&(ot=r.RG32F),tt===r.HALF_FLOAT&&(ot=r.RG16F),tt===r.UNSIGNED_BYTE&&(ot=r.RG8)),b===r.RG_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ot=r.RG8UI),tt===r.UNSIGNED_SHORT&&(ot=r.RG16UI),tt===r.UNSIGNED_INT&&(ot=r.RG32UI),tt===r.BYTE&&(ot=r.RG8I),tt===r.SHORT&&(ot=r.RG16I),tt===r.INT&&(ot=r.RG32I)),b===r.RGB_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ot=r.RGB8UI),tt===r.UNSIGNED_SHORT&&(ot=r.RGB16UI),tt===r.UNSIGNED_INT&&(ot=r.RGB32UI),tt===r.BYTE&&(ot=r.RGB8I),tt===r.SHORT&&(ot=r.RGB16I),tt===r.INT&&(ot=r.RGB32I)),b===r.RGBA_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ot=r.RGBA8UI),tt===r.UNSIGNED_SHORT&&(ot=r.RGBA16UI),tt===r.UNSIGNED_INT&&(ot=r.RGBA32UI),tt===r.BYTE&&(ot=r.RGBA8I),tt===r.SHORT&&(ot=r.RGBA16I),tt===r.INT&&(ot=r.RGBA32I)),b===r.RGB&&tt===r.UNSIGNED_INT_5_9_9_9_REV&&(ot=r.RGB9_E5),b===r.RGBA){const zt=vt?Lc:Te.getTransfer(ut);tt===r.FLOAT&&(ot=r.RGBA32F),tt===r.HALF_FLOAT&&(ot=r.RGBA16F),tt===r.UNSIGNED_BYTE&&(ot=zt===ze?r.SRGB8_ALPHA8:r.RGBA8),tt===r.UNSIGNED_SHORT_4_4_4_4&&(ot=r.RGBA4),tt===r.UNSIGNED_SHORT_5_5_5_1&&(ot=r.RGB5_A1)}return(ot===r.R16F||ot===r.R32F||ot===r.RG16F||ot===r.RG32F||ot===r.RGBA16F||ot===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function D(L,b){let tt;return L?b===null||b===ys||b===zo?tt=r.DEPTH24_STENCIL8:b===oa?tt=r.DEPTH32F_STENCIL8:b===Po&&(tt=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ys||b===zo?tt=r.DEPTH_COMPONENT24:b===oa?tt=r.DEPTH_COMPONENT32F:b===Po&&(tt=r.DEPTH_COMPONENT16),tt}function I(L,b){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ei&&L.minFilter!==Li?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function V(L){const b=L.target;b.removeEventListener("dispose",V),Y(b),b.isVideoTexture&&g.delete(b)}function H(L){const b=L.target;b.removeEventListener("dispose",H),w(b)}function Y(L){const b=s.get(L);if(b.__webglInit===void 0)return;const tt=L.source,ut=x.get(tt);if(ut){const vt=ut[b.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&C(L),Object.keys(ut).length===0&&x.delete(tt)}s.remove(L)}function C(L){const b=s.get(L);r.deleteTexture(b.__webglTexture);const tt=L.source,ut=x.get(tt);delete ut[b.__cacheKey],h.memory.textures--}function w(L){const b=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(b.__webglFramebuffer[ut]))for(let vt=0;vt<b.__webglFramebuffer[ut].length;vt++)r.deleteFramebuffer(b.__webglFramebuffer[ut][vt]);else r.deleteFramebuffer(b.__webglFramebuffer[ut]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ut])}else{if(Array.isArray(b.__webglFramebuffer))for(let ut=0;ut<b.__webglFramebuffer.length;ut++)r.deleteFramebuffer(b.__webglFramebuffer[ut]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ut=0;ut<b.__webglColorRenderbuffer.length;ut++)b.__webglColorRenderbuffer[ut]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ut]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const tt=L.textures;for(let ut=0,vt=tt.length;ut<vt;ut++){const ot=s.get(tt[ut]);ot.__webglTexture&&(r.deleteTexture(ot.__webglTexture),h.memory.textures--),s.remove(tt[ut])}s.remove(L)}let B=0;function lt(){B=0}function ct(){const L=B;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),B+=1,L}function ht(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function dt(L,b){const tt=s.get(L);if(L.isVideoTexture&&re(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&tt.__version!==L.version){const ut=L.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(tt,L,b);return}}else L.isExternalTexture&&(tt.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,tt.__webglTexture,r.TEXTURE0+b)}function z(L,b){const tt=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){pt(tt,L,b);return}i.bindTexture(r.TEXTURE_2D_ARRAY,tt.__webglTexture,r.TEXTURE0+b)}function K(L,b){const tt=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){pt(tt,L,b);return}i.bindTexture(r.TEXTURE_3D,tt.__webglTexture,r.TEXTURE0+b)}function q(L,b){const tt=s.get(L);if(L.version>0&&tt.__version!==L.version){Mt(tt,L,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture,r.TEXTURE0+b)}const yt={[Bh]:r.REPEAT,[vs]:r.CLAMP_TO_EDGE,[Fh]:r.MIRRORED_REPEAT},U={[Ei]:r.NEAREST,[ky]:r.NEAREST_MIPMAP_NEAREST,[tc]:r.NEAREST_MIPMAP_LINEAR,[Li]:r.LINEAR,[qf]:r.LINEAR_MIPMAP_NEAREST,[xs]:r.LINEAR_MIPMAP_LINEAR},$={[qy]:r.NEVER,[$y]:r.ALWAYS,[Yy]:r.LESS,[D0]:r.LEQUAL,[Zy]:r.EQUAL,[Jy]:r.GEQUAL,[Ky]:r.GREATER,[Qy]:r.NOTEQUAL};function xt(L,b){if(b.type===oa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Li||b.magFilter===qf||b.magFilter===tc||b.magFilter===xs||b.minFilter===Li||b.minFilter===qf||b.minFilter===tc||b.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,yt[b.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,yt[b.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,yt[b.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,U[b.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,U[b.minFilter]),b.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,$[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ei||b.minFilter!==tc&&b.minFilter!==xs||b.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function St(L,b){let tt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",V));const ut=b.source;let vt=x.get(ut);vt===void 0&&(vt={},x.set(ut,vt));const ot=ht(b);if(ot!==L.__cacheKey){vt[ot]===void 0&&(vt[ot]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),vt[ot].usedTimes++;const zt=vt[L.__cacheKey];zt!==void 0&&(vt[L.__cacheKey].usedTimes--,zt.usedTimes===0&&C(b)),L.__cacheKey=ot,L.__webglTexture=vt[ot].texture}return tt}function Ct(L,b,tt){return Math.floor(Math.floor(L/tt)/b)}function it(L,b,tt,ut){const ot=L.updateRanges;if(ot.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,tt,ut,b.data);else{ot.sort((Et,Nt)=>Et.start-Nt.start);let zt=0;for(let Et=1;Et<ot.length;Et++){const Nt=ot[zt],Zt=ot[Et],kt=Nt.start+Nt.count,Dt=Ct(Zt.start,b.width,4),se=Ct(Nt.start,b.width,4);Zt.start<=kt+1&&Dt===se&&Ct(Zt.start+Zt.count-1,b.width,4)===Dt?Nt.count=Math.max(Nt.count,Zt.start+Zt.count-Nt.start):(++zt,ot[zt]=Zt)}ot.length=zt+1;const Rt=r.getParameter(r.UNPACK_ROW_LENGTH),Xt=r.getParameter(r.UNPACK_SKIP_PIXELS),Wt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Et=0,Nt=ot.length;Et<Nt;Et++){const Zt=ot[Et],kt=Math.floor(Zt.start/4),Dt=Math.ceil(Zt.count/4),se=kt%b.width,X=Math.floor(kt/b.width),At=Dt,wt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,se),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,se,X,At,wt,tt,ut,b.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Rt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Wt)}}function pt(L,b,tt){let ut=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ut=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ut=r.TEXTURE_3D);const vt=St(L,b),ot=b.source;i.bindTexture(ut,L.__webglTexture,r.TEXTURE0+tt);const zt=s.get(ot);if(ot.version!==zt.__version||vt===!0){i.activeTexture(r.TEXTURE0+tt);const Rt=Te.getPrimaries(Te.workingColorSpace),Xt=b.colorSpace===Ha?null:Te.getPrimaries(b.colorSpace),Wt=b.colorSpace===Ha||Rt===Xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let Et=R(b.image,!1,l.maxTextureSize);Et=Ye(b,Et);const Nt=c.convert(b.format,b.colorSpace),Zt=c.convert(b.type);let kt=O(b.internalFormat,Nt,Zt,b.colorSpace,b.isVideoTexture);xt(ut,b);let Dt;const se=b.mipmaps,X=b.isVideoTexture!==!0,At=zt.__version===void 0||vt===!0,wt=ot.dataReady,It=I(b,Et);if(b.isDepthTexture)kt=D(b.format===Bo,b.type),At&&(X?i.texStorage2D(r.TEXTURE_2D,1,kt,Et.width,Et.height):i.texImage2D(r.TEXTURE_2D,0,kt,Et.width,Et.height,0,Nt,Zt,null));else if(b.isDataTexture)if(se.length>0){X&&At&&i.texStorage2D(r.TEXTURE_2D,It,kt,se[0].width,se[0].height);for(let bt=0,_t=se.length;bt<_t;bt++)Dt=se[bt],X?wt&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Dt.width,Dt.height,Nt,Zt,Dt.data):i.texImage2D(r.TEXTURE_2D,bt,kt,Dt.width,Dt.height,0,Nt,Zt,Dt.data);b.generateMipmaps=!1}else X?(At&&i.texStorage2D(r.TEXTURE_2D,It,kt,Et.width,Et.height),wt&&it(b,Et,Nt,Zt)):i.texImage2D(r.TEXTURE_2D,0,kt,Et.width,Et.height,0,Nt,Zt,Et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&At&&i.texStorage3D(r.TEXTURE_2D_ARRAY,It,kt,se[0].width,se[0].height,Et.depth);for(let bt=0,_t=se.length;bt<_t;bt++)if(Dt=se[bt],b.format!==Si)if(Nt!==null)if(X){if(wt)if(b.layerUpdates.size>0){const Vt=k_(Dt.width,Dt.height,b.format,b.type);for(const ae of b.layerUpdates){const Ce=Dt.data.subarray(ae*Vt/Dt.data.BYTES_PER_ELEMENT,(ae+1)*Vt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,ae,Dt.width,Dt.height,1,Nt,Ce)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Dt.width,Dt.height,Et.depth,Nt,Dt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,bt,kt,Dt.width,Dt.height,Et.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?wt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Dt.width,Dt.height,Et.depth,Nt,Zt,Dt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,bt,kt,Dt.width,Dt.height,Et.depth,0,Nt,Zt,Dt.data)}else{X&&At&&i.texStorage2D(r.TEXTURE_2D,It,kt,se[0].width,se[0].height);for(let bt=0,_t=se.length;bt<_t;bt++)Dt=se[bt],b.format!==Si?Nt!==null?X?wt&&i.compressedTexSubImage2D(r.TEXTURE_2D,bt,0,0,Dt.width,Dt.height,Nt,Dt.data):i.compressedTexImage2D(r.TEXTURE_2D,bt,kt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?wt&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Dt.width,Dt.height,Nt,Zt,Dt.data):i.texImage2D(r.TEXTURE_2D,bt,kt,Dt.width,Dt.height,0,Nt,Zt,Dt.data)}else if(b.isDataArrayTexture)if(X){if(At&&i.texStorage3D(r.TEXTURE_2D_ARRAY,It,kt,Et.width,Et.height,Et.depth),wt)if(b.layerUpdates.size>0){const bt=k_(Et.width,Et.height,b.format,b.type);for(const _t of b.layerUpdates){const Vt=Et.data.subarray(_t*bt/Et.data.BYTES_PER_ELEMENT,(_t+1)*bt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,Et.width,Et.height,1,Nt,Zt,Vt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Nt,Zt,Et.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,kt,Et.width,Et.height,Et.depth,0,Nt,Zt,Et.data);else if(b.isData3DTexture)X?(At&&i.texStorage3D(r.TEXTURE_3D,It,kt,Et.width,Et.height,Et.depth),wt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Nt,Zt,Et.data)):i.texImage3D(r.TEXTURE_3D,0,kt,Et.width,Et.height,Et.depth,0,Nt,Zt,Et.data);else if(b.isFramebufferTexture){if(At)if(X)i.texStorage2D(r.TEXTURE_2D,It,kt,Et.width,Et.height);else{let bt=Et.width,_t=Et.height;for(let Vt=0;Vt<It;Vt++)i.texImage2D(r.TEXTURE_2D,Vt,kt,bt,_t,0,Nt,Zt,null),bt>>=1,_t>>=1}}else if(se.length>0){if(X&&At){const bt=Ze(se[0]);i.texStorage2D(r.TEXTURE_2D,It,kt,bt.width,bt.height)}for(let bt=0,_t=se.length;bt<_t;bt++)Dt=se[bt],X?wt&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Nt,Zt,Dt):i.texImage2D(r.TEXTURE_2D,bt,kt,Nt,Zt,Dt);b.generateMipmaps=!1}else if(X){if(At){const bt=Ze(Et);i.texStorage2D(r.TEXTURE_2D,It,kt,bt.width,bt.height)}wt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Nt,Zt,Et)}else i.texImage2D(r.TEXTURE_2D,0,kt,Nt,Zt,Et);S(b)&&v(ut),zt.__version=ot.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Mt(L,b,tt){if(b.image.length!==6)return;const ut=St(L,b),vt=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+tt);const ot=s.get(vt);if(vt.version!==ot.__version||ut===!0){i.activeTexture(r.TEXTURE0+tt);const zt=Te.getPrimaries(Te.workingColorSpace),Rt=b.colorSpace===Ha?null:Te.getPrimaries(b.colorSpace),Xt=b.colorSpace===Ha||zt===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const Wt=b.isCompressedTexture||b.image[0].isCompressedTexture,Et=b.image[0]&&b.image[0].isDataTexture,Nt=[];for(let _t=0;_t<6;_t++)!Wt&&!Et?Nt[_t]=R(b.image[_t],!0,l.maxCubemapSize):Nt[_t]=Et?b.image[_t].image:b.image[_t],Nt[_t]=Ye(b,Nt[_t]);const Zt=Nt[0],kt=c.convert(b.format,b.colorSpace),Dt=c.convert(b.type),se=O(b.internalFormat,kt,Dt,b.colorSpace),X=b.isVideoTexture!==!0,At=ot.__version===void 0||ut===!0,wt=vt.dataReady;let It=I(b,Zt);xt(r.TEXTURE_CUBE_MAP,b);let bt;if(Wt){X&&At&&i.texStorage2D(r.TEXTURE_CUBE_MAP,It,se,Zt.width,Zt.height);for(let _t=0;_t<6;_t++){bt=Nt[_t].mipmaps;for(let Vt=0;Vt<bt.length;Vt++){const ae=bt[Vt];b.format!==Si?kt!==null?X?wt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,0,0,ae.width,ae.height,kt,ae.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,se,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,0,0,ae.width,ae.height,kt,Dt,ae.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,se,ae.width,ae.height,0,kt,Dt,ae.data)}}}else{if(bt=b.mipmaps,X&&At){bt.length>0&&It++;const _t=Ze(Nt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,It,se,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Et){X?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Nt[_t].width,Nt[_t].height,kt,Dt,Nt[_t].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,Nt[_t].width,Nt[_t].height,0,kt,Dt,Nt[_t].data);for(let Vt=0;Vt<bt.length;Vt++){const Ce=bt[Vt].image[_t].image;X?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,0,0,Ce.width,Ce.height,kt,Dt,Ce.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,se,Ce.width,Ce.height,0,kt,Dt,Ce.data)}}else{X?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,kt,Dt,Nt[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,kt,Dt,Nt[_t]);for(let Vt=0;Vt<bt.length;Vt++){const ae=bt[Vt];X?wt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,0,0,kt,Dt,ae.image[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,se,kt,Dt,ae.image[_t])}}}S(b)&&v(r.TEXTURE_CUBE_MAP),ot.__version=vt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Pt(L,b,tt,ut,vt,ot){const zt=c.convert(tt.format,tt.colorSpace),Rt=c.convert(tt.type),Xt=O(tt.internalFormat,zt,Rt,tt.colorSpace),Wt=s.get(b),Et=s.get(tt);if(Et.__renderTarget=b,!Wt.__hasExternalTextures){const Nt=Math.max(1,b.width>>ot),Zt=Math.max(1,b.height>>ot);vt===r.TEXTURE_3D||vt===r.TEXTURE_2D_ARRAY?i.texImage3D(vt,ot,Xt,Nt,Zt,b.depth,0,zt,Rt,null):i.texImage2D(vt,ot,Xt,Nt,Zt,0,zt,Rt,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),Ht(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ut,vt,Et.__webglTexture,0,Ge(b)):(vt===r.TEXTURE_2D||vt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ut,vt,Et.__webglTexture,ot),i.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(L,b,tt){if(r.bindRenderbuffer(r.RENDERBUFFER,L),b.depthBuffer){const ut=b.depthTexture,vt=ut&&ut.isDepthTexture?ut.type:null,ot=D(b.stencilBuffer,vt),zt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=Ge(b);Ht(b)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt,ot,b.width,b.height):tt?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,ot,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ot,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,zt,r.RENDERBUFFER,L)}else{const ut=b.textures;for(let vt=0;vt<ut.length;vt++){const ot=ut[vt],zt=c.convert(ot.format,ot.colorSpace),Rt=c.convert(ot.type),Xt=O(ot.internalFormat,zt,Rt,ot.colorSpace),Wt=Ge(b);tt&&Ht(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,Xt,b.width,b.height):Ht(b)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Wt,Xt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Xt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ie(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=s.get(b.depthTexture);ut.__renderTarget=b,(!ut.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),dt(b.depthTexture,0);const vt=ut.__webglTexture,ot=Ge(b);if(b.depthTexture.format===Io)Ht(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,vt,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,vt,0);else if(b.depthTexture.format===Bo)Ht(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,vt,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function He(L){const b=s.get(L),tt=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const ut=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ut){const vt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ut.removeEventListener("dispose",vt)};ut.addEventListener("dispose",vt),b.__depthDisposeCallback=vt}b.__boundDepthTexture=ut}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const ut=L.texture.mipmaps;ut&&ut.length>0?ie(b.__webglFramebuffer[0],L):ie(b.__webglFramebuffer,L)}else if(tt){b.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ut]),b.__webglDepthbuffer[ut]===void 0)b.__webglDepthbuffer[ut]=r.createRenderbuffer(),qt(b.__webglDepthbuffer[ut],L,!1);else{const vt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer[ut];r.bindRenderbuffer(r.RENDERBUFFER,ot),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,ot)}}else{const ut=L.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),qt(b.__webglDepthbuffer,L,!1);else{const vt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ot),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,ot)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function me(L,b,tt){const ut=s.get(L);b!==void 0&&Pt(ut.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),tt!==void 0&&He(L)}function F(L){const b=L.texture,tt=s.get(L),ut=s.get(b);L.addEventListener("dispose",H);const vt=L.textures,ot=L.isWebGLCubeRenderTarget===!0,zt=vt.length>1;if(zt||(ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture()),ut.__version=b.version,h.memory.textures++),ot){tt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<b.mipmaps.length;Xt++)tt.__webglFramebuffer[Rt][Xt]=r.createFramebuffer()}else tt.__webglFramebuffer[Rt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)tt.__webglFramebuffer[Rt]=r.createFramebuffer()}else tt.__webglFramebuffer=r.createFramebuffer();if(zt)for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const Wt=s.get(vt[Rt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=r.createTexture(),h.memory.textures++)}if(L.samples>0&&Ht(L)===!1){tt.__webglMultisampledFramebuffer=r.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<vt.length;Rt++){const Xt=vt[Rt];tt.__webglColorRenderbuffer[Rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt]);const Wt=c.convert(Xt.format,Xt.colorSpace),Et=c.convert(Xt.type),Nt=O(Xt.internalFormat,Wt,Et,Xt.colorSpace,L.isXRRenderTarget===!0),Zt=Ge(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,Nt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(tt.__webglDepthRenderbuffer=r.createRenderbuffer(),qt(tt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ot){i.bindTexture(r.TEXTURE_CUBE_MAP,ut.__webglTexture),xt(r.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)Pt(tt.__webglFramebuffer[Rt][Xt],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else Pt(tt.__webglFramebuffer[Rt],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);S(b)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(zt){for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const Wt=vt[Rt],Et=s.get(Wt);let Nt=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Nt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Nt,Et.__webglTexture),xt(Nt,Wt),Pt(tt.__webglFramebuffer,L,Wt,r.COLOR_ATTACHMENT0+Rt,Nt,0),S(Wt)&&v(Nt)}i.unbindTexture()}else{let Rt=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ut.__webglTexture),xt(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let Xt=0;Xt<b.mipmaps.length;Xt++)Pt(tt.__webglFramebuffer[Xt],L,b,r.COLOR_ATTACHMENT0,Rt,Xt);else Pt(tt.__webglFramebuffer,L,b,r.COLOR_ATTACHMENT0,Rt,0);S(b)&&v(Rt),i.unbindTexture()}L.depthBuffer&&He(L)}function we(L){const b=L.textures;for(let tt=0,ut=b.length;tt<ut;tt++){const vt=b[tt];if(S(vt)){const ot=G(L),zt=s.get(vt).__webglTexture;i.bindTexture(ot,zt),v(ot),i.unbindTexture()}}}const Qt=[],Se=[];function Ft(L){if(L.samples>0){if(Ht(L)===!1){const b=L.textures,tt=L.width,ut=L.height;let vt=r.COLOR_BUFFER_BIT;const ot=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,zt=s.get(L),Rt=b.length>1;if(Rt)for(let Wt=0;Wt<b.length;Wt++)i.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Xt=L.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Wt=0;Wt<b.length;Wt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(vt|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(vt|=r.STENCIL_BUFFER_BIT)),Rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,zt.__webglColorRenderbuffer[Wt]);const Et=s.get(b[Wt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Et,0)}r.blitFramebuffer(0,0,tt,ut,0,0,tt,ut,vt,r.NEAREST),m===!0&&(Qt.length=0,Se.length=0,Qt.push(r.COLOR_ATTACHMENT0+Wt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Qt.push(ot),Se.push(ot),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Se)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Qt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Rt)for(let Wt=0;Wt<b.length;Wt++){i.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.RENDERBUFFER,zt.__webglColorRenderbuffer[Wt]);const Et=s.get(b[Wt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.TEXTURE_2D,Et,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Ge(L){return Math.min(l.maxSamples,L.samples)}function Ht(L){const b=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function re(L){const b=h.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function Ye(L,b){const tt=L.colorSpace,ut=L.format,vt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||tt!==Cr&&tt!==Ha&&(Te.getTransfer(tt)===ze?(ut!==Si||vt!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),b}function Ze(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=ct,this.resetTextureUnits=lt,this.setTexture2D=dt,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=me,this.setupRenderTarget=F,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Ht}function yA(r,t){function i(s,l=Ha){let c;const h=Te.getTransfer(l);if(s===zi)return r.UNSIGNED_BYTE;if(s===vd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===xd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===E0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===S0)return r.BYTE;if(s===M0)return r.SHORT;if(s===Po)return r.UNSIGNED_SHORT;if(s===_d)return r.INT;if(s===ys)return r.UNSIGNED_INT;if(s===oa)return r.FLOAT;if(s===Ho)return r.HALF_FLOAT;if(s===b0)return r.ALPHA;if(s===T0)return r.RGB;if(s===Si)return r.RGBA;if(s===Io)return r.DEPTH_COMPONENT;if(s===Bo)return r.DEPTH_STENCIL;if(s===A0)return r.RED;if(s===yd)return r.RED_INTEGER;if(s===R0)return r.RG;if(s===Sd)return r.RG_INTEGER;if(s===Md)return r.RGBA_INTEGER;if(s===Ac||s===Rc||s===wc||s===Cc)if(h===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Ac)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Rc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Ac)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Rc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hh||s===Gh||s===Vh||s===kh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Hh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xh||s===jh||s===Wh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Xh||s===jh)return h===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Wh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===qh||s===Yh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===qh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$h)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===td)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ed)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===nd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===id)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ad)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Dc||s===od||s===ld)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Dc)return h===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===od)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ld)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===w0||s===cd||s===ud||s===fd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Dc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===cd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ud)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===fd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}class Z0 extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const SA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class EA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Z0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Xa({vertexShader:SA,fragmentShader:MA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Mi(new Ic(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bA extends Es{constructor(t,i){super();const s=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,g=null,_=null,x=null,M=null,E=null;const R=new EA,S={},v=i.getContextAttributes();let G=null,O=null;const D=[],I=[],V=new oe;let H=null;const Y=new fi;Y.viewport=new en;const C=new fi;C.viewport=new en;const w=[Y,C],B=new XS;let lt=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let pt=D[it];return pt===void 0&&(pt=new mh,D[it]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(it){let pt=D[it];return pt===void 0&&(pt=new mh,D[it]=pt),pt.getGripSpace()},this.getHand=function(it){let pt=D[it];return pt===void 0&&(pt=new mh,D[it]=pt),pt.getHandSpace()};function ht(it){const pt=I.indexOf(it.inputSource);if(pt===-1)return;const Mt=D[pt];Mt!==void 0&&(Mt.update(it.inputSource,it.frame,d||h),Mt.dispatchEvent({type:it.type,data:it.inputSource}))}function dt(){l.removeEventListener("select",ht),l.removeEventListener("selectstart",ht),l.removeEventListener("selectend",ht),l.removeEventListener("squeeze",ht),l.removeEventListener("squeezestart",ht),l.removeEventListener("squeezeend",ht),l.removeEventListener("end",dt),l.removeEventListener("inputsourceschange",z);for(let it=0;it<D.length;it++){const pt=I[it];pt!==null&&(I[it]=null,D[it].disconnect(pt))}lt=null,ct=null,R.reset();for(const it in S)delete S[it];t.setRenderTarget(G),M=null,x=null,_=null,l=null,O=null,Ct.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(V.width,V.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){p=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(it){d=it},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(G=t.getRenderTarget(),l.addEventListener("select",ht),l.addEventListener("selectstart",ht),l.addEventListener("selectend",ht),l.addEventListener("squeeze",ht),l.addEventListener("squeezestart",ht),l.addEventListener("squeezeend",ht),l.addEventListener("end",dt),l.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(V),typeof XRWebGLBinding<"u"&&(_=new XRWebGLBinding(l,i)),_!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Pt=null,qt=null;v.depth&&(qt=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=v.stencil?Bo:Io,Pt=v.stencil?zo:ys);const ie={colorFormat:i.RGBA8,depthFormat:qt,scaleFactor:c};x=_.createProjectionLayer(ie),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),O=new Ms(x.textureWidth,x.textureHeight,{format:Si,type:zi,depthTexture:new G0(x.textureWidth,x.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Ms(M.framebufferWidth,M.framebufferHeight,{format:Si,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Ct.setContext(l),Ct.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function z(it){for(let pt=0;pt<it.removed.length;pt++){const Mt=it.removed[pt],Pt=I.indexOf(Mt);Pt>=0&&(I[Pt]=null,D[Pt].disconnect(Mt))}for(let pt=0;pt<it.added.length;pt++){const Mt=it.added[pt];let Pt=I.indexOf(Mt);if(Pt===-1){for(let ie=0;ie<D.length;ie++)if(ie>=I.length){I.push(Mt),Pt=ie;break}else if(I[ie]===null){I[ie]=Mt,Pt=ie;break}if(Pt===-1)break}const qt=D[Pt];qt&&qt.connect(Mt)}}const K=new et,q=new et;function yt(it,pt,Mt){K.setFromMatrixPosition(pt.matrixWorld),q.setFromMatrixPosition(Mt.matrixWorld);const Pt=K.distanceTo(q),qt=pt.projectionMatrix.elements,ie=Mt.projectionMatrix.elements,He=qt[14]/(qt[10]-1),me=qt[14]/(qt[10]+1),F=(qt[9]+1)/qt[5],we=(qt[9]-1)/qt[5],Qt=(qt[8]-1)/qt[0],Se=(ie[8]+1)/ie[0],Ft=He*Qt,Ge=He*Se,Ht=Pt/(-Qt+Se),re=Ht*-Qt;if(pt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(re),it.translateZ(Ht),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),qt[10]===-1)it.projectionMatrix.copy(pt.projectionMatrix),it.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Ye=He+Ht,Ze=me+Ht,L=Ft-re,b=Ge+(Pt-re),tt=F*me/Ze*Ye,ut=we*me/Ze*Ye;it.projectionMatrix.makePerspective(L,b,tt,ut,Ye,Ze),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function U(it,pt){pt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(pt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let pt=it.near,Mt=it.far;R.texture!==null&&(R.depthNear>0&&(pt=R.depthNear),R.depthFar>0&&(Mt=R.depthFar)),B.near=C.near=Y.near=pt,B.far=C.far=Y.far=Mt,(lt!==B.near||ct!==B.far)&&(l.updateRenderState({depthNear:B.near,depthFar:B.far}),lt=B.near,ct=B.far),B.layers.mask=it.layers.mask|6,Y.layers.mask=B.layers.mask&3,C.layers.mask=B.layers.mask&5;const Pt=it.parent,qt=B.cameras;U(B,Pt);for(let ie=0;ie<qt.length;ie++)U(qt[ie],Pt);qt.length===2?yt(B,Y,C):B.projectionMatrix.copy(Y.projectionMatrix),$(it,B,Pt)};function $(it,pt,Mt){Mt===null?it.matrix.copy(pt.matrixWorld):(it.matrix.copy(Mt.matrixWorld),it.matrix.invert(),it.matrix.multiply(pt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(pt.projectionMatrix),it.projectionMatrixInverse.copy(pt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=hd*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(it){m=it,x!==null&&(x.fixedFoveation=it),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=it)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(B)},this.getCameraTexture=function(it){return S[it]};let xt=null;function St(it,pt){if(g=pt.getViewerPose(d||h),E=pt,g!==null){const Mt=g.views;M!==null&&(t.setRenderTargetFramebuffer(O,M.framebuffer),t.setRenderTarget(O));let Pt=!1;Mt.length!==B.cameras.length&&(B.cameras.length=0,Pt=!0);for(let me=0;me<Mt.length;me++){const F=Mt[me];let we=null;if(M!==null)we=M.getViewport(F);else{const Se=_.getViewSubImage(x,F);we=Se.viewport,me===0&&(t.setRenderTargetTextures(O,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(O))}let Qt=w[me];Qt===void 0&&(Qt=new fi,Qt.layers.enable(me),Qt.viewport=new en,w[me]=Qt),Qt.matrix.fromArray(F.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(F.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(we.x,we.y,we.width,we.height),me===0&&(B.matrix.copy(Qt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Pt===!0&&B.cameras.push(Qt)}const qt=l.enabledFeatures;if(qt&&qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const me=_.getDepthInformation(Mt[0]);me&&me.isValid&&me.texture&&R.init(me,l.renderState)}if(qt&&qt.includes("camera-access")&&(t.state.unbindTexture(),_))for(let me=0;me<Mt.length;me++){const F=Mt[me].camera;if(F){let we=S[F];we||(we=new Z0,S[F]=we);const Qt=_.getCameraImage(F);we.sourceTexture=Qt}}}for(let Mt=0;Mt<D.length;Mt++){const Pt=I[Mt],qt=D[Mt];Pt!==null&&qt!==void 0&&qt.update(Pt,pt,d||h)}xt&&xt(it,pt),pt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pt}),E=null}const Ct=new X0;Ct.setAnimationLoop(St),this.setAnimationLoop=function(it){xt=it},this.dispose=function(){}}}const ds=new Ii,TA=new nn;function AA(r,t){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,B0(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,G,O,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),_(S,v)):v.isMeshPhongMaterial?(c(S,v),g(S,v)):v.isMeshStandardMaterial?(c(S,v),x(S,v),v.isMeshPhysicalMaterial&&M(S,v,D)):v.isMeshMatcapMaterial?(c(S,v),E(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),R(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(h(S,v),v.isLineDashedMaterial&&p(S,v)):v.isPointsMaterial?m(S,v,G,O):v.isSpriteMaterial?d(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===jn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===jn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const G=t.get(v),O=G.envMap,D=G.envMapRotation;O&&(S.envMap.value=O,ds.copy(D),ds.x*=-1,ds.y*=-1,ds.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),S.envMapRotation.value.setFromMatrix4(TA.makeRotationFromEuler(ds)),S.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function h(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function p(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,G,O){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*G,S.scale.value=O*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function d(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function M(S,v,G){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===jn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=G.texture,S.transmissionSamplerSize.value.set(G.width,G.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function R(S,v){const G=t.get(v).light;S.referencePosition.value.setFromMatrixPosition(G.matrixWorld),S.nearDistance.value=G.shadow.camera.near,S.farDistance.value=G.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function RA(r,t,i,s){let l={},c={},h=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(G,O){const D=O.program;s.uniformBlockBinding(G,D)}function d(G,O){let D=l[G.id];D===void 0&&(E(G),D=g(G),l[G.id]=D,G.addEventListener("dispose",S));const I=O.program;s.updateUBOMapping(G,I);const V=t.render.frame;c[G.id]!==V&&(x(G),c[G.id]=V)}function g(G){const O=_();G.__bindingPointIndex=O;const D=r.createBuffer(),I=G.__size,V=G.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,I,V),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,D),D}function _(){for(let G=0;G<p;G++)if(h.indexOf(G)===-1)return h.push(G),G;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(G){const O=l[G.id],D=G.uniforms,I=G.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let V=0,H=D.length;V<H;V++){const Y=Array.isArray(D[V])?D[V]:[D[V]];for(let C=0,w=Y.length;C<w;C++){const B=Y[C];if(M(B,V,C,I)===!0){const lt=B.__offset,ct=Array.isArray(B.value)?B.value:[B.value];let ht=0;for(let dt=0;dt<ct.length;dt++){const z=ct[dt],K=R(z);typeof z=="number"||typeof z=="boolean"?(B.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,lt+ht,B.__data)):z.isMatrix3?(B.__data[0]=z.elements[0],B.__data[1]=z.elements[1],B.__data[2]=z.elements[2],B.__data[3]=0,B.__data[4]=z.elements[3],B.__data[5]=z.elements[4],B.__data[6]=z.elements[5],B.__data[7]=0,B.__data[8]=z.elements[6],B.__data[9]=z.elements[7],B.__data[10]=z.elements[8],B.__data[11]=0):(z.toArray(B.__data,ht),ht+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,lt,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(G,O,D,I){const V=G.value,H=O+"_"+D;if(I[H]===void 0)return typeof V=="number"||typeof V=="boolean"?I[H]=V:I[H]=V.clone(),!0;{const Y=I[H];if(typeof V=="number"||typeof V=="boolean"){if(Y!==V)return I[H]=V,!0}else if(Y.equals(V)===!1)return Y.copy(V),!0}return!1}function E(G){const O=G.uniforms;let D=0;const I=16;for(let H=0,Y=O.length;H<Y;H++){const C=Array.isArray(O[H])?O[H]:[O[H]];for(let w=0,B=C.length;w<B;w++){const lt=C[w],ct=Array.isArray(lt.value)?lt.value:[lt.value];for(let ht=0,dt=ct.length;ht<dt;ht++){const z=ct[ht],K=R(z),q=D%I,yt=q%K.boundary,U=q+yt;D+=yt,U!==0&&I-U<K.storage&&(D+=I-U),lt.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=D,D+=K.storage}}}const V=D%I;return V>0&&(D+=I-V),G.__size=D,G.__cache={},this}function R(G){const O={boundary:0,storage:0};return typeof G=="number"||typeof G=="boolean"?(O.boundary=4,O.storage=4):G.isVector2?(O.boundary=8,O.storage=8):G.isVector3||G.isColor?(O.boundary=16,O.storage=12):G.isVector4?(O.boundary=16,O.storage=16):G.isMatrix3?(O.boundary=48,O.storage=48):G.isMatrix4?(O.boundary=64,O.storage=64):G.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",G),O}function S(G){const O=G.target;O.removeEventListener("dispose",S);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function v(){for(const G in l)r.deleteBuffer(l[G]);h=[],l={},c={}}return{bind:m,update:d,dispose:v}}class wA{constructor(t={}){const{canvas:i=nS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),R=new Int32Array(4);let S=null,v=null;const G=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Va,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let I=!1;this._outputColorSpace=ni;let V=0,H=0,Y=null,C=-1,w=null;const B=new en,lt=new en;let ct=null;const ht=new Ae(0);let dt=0,z=i.width,K=i.height,q=1,yt=null,U=null;const $=new en(0,0,z,K),xt=new en(0,0,z,K);let St=!1;const Ct=new Ad;let it=!1,pt=!1;const Mt=new nn,Pt=new et,qt=new en,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function me(){return Y===null?q:1}let F=s;function we(A,j){return i.getContext(A,j)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${gd}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",bt,!1),F===null){const j="webgl2";if(F=we(j,A),F===null)throw we(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Qt,Se,Ft,Ge,Ht,re,Ye,Ze,L,b,tt,ut,vt,ot,zt,Rt,Xt,Wt,Et,Nt,Zt,kt,Dt,se;function X(){Qt=new Bb(F),Qt.init(),kt=new yA(F,Qt),Se=new Ub(F,Qt,t,kt),Ft=new vA(F,Qt),Se.reversedDepthBuffer&&x&&Ft.buffers.depth.setReversed(!0),Ge=new Gb(F),Ht=new sA,re=new xA(F,Qt,Ft,Ht,Se,kt,Ge),Ye=new Lb(D),Ze=new Ib(D),L=new qS(F),Dt=new Cb(F,L),b=new Fb(F,L,Ge,Dt),tt=new kb(F,b,L,Ge),Et=new Vb(F,Se,re),Rt=new Nb(Ht),ut=new aA(D,Ye,Ze,Qt,Se,Dt,Rt),vt=new AA(D,Ht),ot=new oA,zt=new dA(Qt),Wt=new wb(D,Ye,Ze,Ft,tt,M,m),Xt=new gA(D,tt,Se),se=new RA(F,Ge,Se,Ft),Nt=new Db(F,Qt,Ge),Zt=new Hb(F,Qt,Ge),Ge.programs=ut.programs,D.capabilities=Se,D.extensions=Qt,D.properties=Ht,D.renderLists=ot,D.shadowMap=Xt,D.state=Ft,D.info=Ge}X();const At=new bA(D,F);this.xr=At,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=Qt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Qt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(z,K,!1))},this.getSize=function(A){return A.set(z,K)},this.setSize=function(A,j,st=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,K=j,i.width=Math.floor(A*q),i.height=Math.floor(j*q),st===!0&&(i.style.width=A+"px",i.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(z*q,K*q).floor()},this.setDrawingBufferSize=function(A,j,st){z=A,K=j,q=st,i.width=Math.floor(A*st),i.height=Math.floor(j*st),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,j,st,rt){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,j,st,rt),Ft.viewport(B.copy($).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(xt)},this.setScissor=function(A,j,st,rt){A.isVector4?xt.set(A.x,A.y,A.z,A.w):xt.set(A,j,st,rt),Ft.scissor(lt.copy(xt).multiplyScalar(q).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){Ft.setScissorTest(St=A)},this.setOpaqueSort=function(A){yt=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,st=!0){let rt=0;if(A){let Z=!1;if(Y!==null){const Tt=Y.texture.format;Z=Tt===Md||Tt===Sd||Tt===yd}if(Z){const Tt=Y.texture.type,Ut=Tt===zi||Tt===ys||Tt===Po||Tt===zo||Tt===vd||Tt===xd,Bt=Wt.getClearColor(),Lt=Wt.getClearAlpha(),Jt=Bt.r,te=Bt.g,jt=Bt.b;Ut?(E[0]=Jt,E[1]=te,E[2]=jt,E[3]=Lt,F.clearBufferuiv(F.COLOR,0,E)):(R[0]=Jt,R[1]=te,R[2]=jt,R[3]=Lt,F.clearBufferiv(F.COLOR,0,R))}else rt|=F.COLOR_BUFFER_BIT}j&&(rt|=F.DEPTH_BUFFER_BIT),st&&(rt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),Wt.dispose(),ot.dispose(),zt.dispose(),Ht.dispose(),Ye.dispose(),Ze.dispose(),tt.dispose(),Dt.dispose(),se.dispose(),ut.dispose(),At.dispose(),At.removeEventListener("sessionstart",fn),At.removeEventListener("sessionend",hn),Qe.stop()};function wt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const A=Ge.autoReset,j=Xt.enabled,st=Xt.autoUpdate,rt=Xt.needsUpdate,Z=Xt.type;X(),Ge.autoReset=A,Xt.enabled=j,Xt.autoUpdate=st,Xt.needsUpdate=rt,Xt.type=Z}function bt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _t(A){const j=A.target;j.removeEventListener("dispose",_t),Vt(j)}function Vt(A){ae(A),Ht.remove(A)}function ae(A){const j=Ht.get(A).programs;j!==void 0&&(j.forEach(function(st){ut.releaseProgram(st)}),A.isShaderMaterial&&ut.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,st,rt,Z,Tt){j===null&&(j=ie);const Ut=Z.isMesh&&Z.matrixWorld.determinant()<0,Bt=ca(A,j,st,rt,Z);Ft.setMaterial(rt,Ut);let Lt=st.index,Jt=1;if(rt.wireframe===!0){if(Lt=b.getWireframeAttribute(st),Lt===void 0)return;Jt=2}const te=st.drawRange,jt=st.attributes.position;let ue=te.start*Jt,Ee=(te.start+te.count)*Jt;Tt!==null&&(ue=Math.max(ue,Tt.start*Jt),Ee=Math.min(Ee,(Tt.start+Tt.count)*Jt)),Lt!==null?(ue=Math.max(ue,0),Ee=Math.min(Ee,Lt.count)):jt!=null&&(ue=Math.max(ue,0),Ee=Math.min(Ee,jt.count));const je=Ee-ue;if(je<0||je===1/0)return;Dt.setup(Z,rt,Bt,st,Lt);let Ne,fe=Nt;if(Lt!==null&&(Ne=L.get(Lt),fe=Zt,fe.setIndex(Ne)),Z.isMesh)rt.wireframe===!0?(Ft.setLineWidth(rt.wireframeLinewidth*me()),fe.setMode(F.LINES)):fe.setMode(F.TRIANGLES);else if(Z.isLine){let Kt=rt.linewidth;Kt===void 0&&(Kt=1),Ft.setLineWidth(Kt*me()),Z.isLineSegments?fe.setMode(F.LINES):Z.isLineLoop?fe.setMode(F.LINE_LOOP):fe.setMode(F.LINE_STRIP)}else Z.isPoints?fe.setMode(F.POINTS):Z.isSprite&&fe.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)br("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))fe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Kt=Z._multiDrawStarts,Xe=Z._multiDrawCounts,ge=Z._multiDrawCount,wn=Lt?L.get(Lt).bytesPerElement:1,di=Ht.get(rt).currentProgram.getUniforms();for(let On=0;On<ge;On++)di.setValue(F,"_gl_DrawID",On),fe.render(Kt[On]/wn,Xe[On])}else if(Z.isInstancedMesh)fe.renderInstances(ue,je,Z.count);else if(st.isInstancedBufferGeometry){const Kt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Xe=Math.min(st.instanceCount,Kt);fe.renderInstances(ue,je,Xe)}else fe.render(ue,je)};function Ce(A,j,st){A.transparent===!0&&A.side===ra&&A.forceSinglePass===!1?(A.side=jn,A.needsUpdate=!0,Ai(A,j,st),A.side=ka,A.needsUpdate=!0,Ai(A,j,st),A.side=ra):Ai(A,j,st)}this.compile=function(A,j,st=null){st===null&&(st=A),v=zt.get(st),v.init(j),O.push(v),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),A!==st&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const rt=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Bt=Tt[Ut];Ce(Bt,st,Z),rt.add(Bt)}else Ce(Tt,st,Z),rt.add(Tt)}),v=O.pop(),rt},this.compileAsync=function(A,j,st=null){const rt=this.compile(A,j,st);return new Promise(Z=>{function Tt(){if(rt.forEach(function(Ut){Ht.get(Ut).currentProgram.isReady()&&rt.delete(Ut)}),rt.size===0){Z(A);return}setTimeout(Tt,10)}Qt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Me=null;function hi(A){Me&&Me(A)}function fn(){Qe.stop()}function hn(){Qe.start()}const Qe=new X0;Qe.setAnimationLoop(hi),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(A){Me=A,At.setAnimationLoop(A),A===null?Qe.stop():Qe.start()},At.addEventListener("sessionstart",fn),At.addEventListener("sessionend",hn),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(j),j=At.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,j,Y),v=zt.get(A,O.length),v.init(j),O.push(v),Mt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ct.setFromProjectionMatrix(Mt,Oi,j.reversedDepth),pt=this.localClippingEnabled,it=Rt.init(this.clippingPlanes,pt),S=ot.get(A,G.length),S.init(),G.push(S),At.enabled===!0&&At.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&Ti(Tt,j,-1/0,D.sortObjects)}Ti(A,j,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(yt,U),He=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,He&&Wt.addToRenderList(S,A),this.info.render.frame++,it===!0&&Rt.beginShadows();const st=v.state.shadowsArray;Xt.render(st,A,j),it===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=S.opaque,Z=S.transmissive;if(v.setupLights(),j.isArrayCamera){const Tt=j.cameras;if(Z.length>0)for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++){const Lt=Tt[Ut];jo(rt,Z,A,Lt)}He&&Wt.render(A);for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++){const Lt=Tt[Ut];bs(S,A,Lt,Lt.viewport)}}else Z.length>0&&jo(rt,Z,A,j),He&&Wt.render(A),bs(S,A,j);Y!==null&&H===0&&(re.updateMultisampleRenderTarget(Y),re.updateRenderTargetMipmap(Y)),A.isScene===!0&&A.onAfterRender(D,A,j),Dt.resetDefaultState(),C=-1,w=null,O.pop(),O.length>0?(v=O[O.length-1],it===!0&&Rt.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,G.pop(),G.length>0?S=G[G.length-1]:S=null};function Ti(A,j,st,rt){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)st=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ct.intersectsSprite(A)){rt&&qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Mt);const Ut=tt.update(A),Bt=A.material;Bt.visible&&S.push(A,Ut,Bt,st,qt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ct.intersectsObject(A))){const Ut=tt.update(A),Bt=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),qt.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),qt.copy(Ut.boundingSphere.center)),qt.applyMatrix4(A.matrixWorld).applyMatrix4(Mt)),Array.isArray(Bt)){const Lt=Ut.groups;for(let Jt=0,te=Lt.length;Jt<te;Jt++){const jt=Lt[Jt],ue=Bt[jt.materialIndex];ue&&ue.visible&&S.push(A,Ut,ue,st,qt.z,jt)}}else Bt.visible&&S.push(A,Ut,Bt,st,qt.z,null)}}const Tt=A.children;for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++)Ti(Tt[Ut],j,st,rt)}function bs(A,j,st,rt){const Z=A.opaque,Tt=A.transmissive,Ut=A.transparent;v.setupLightsView(st),it===!0&&Rt.setGlobalState(D.clippingPlanes,st),rt&&Ft.viewport(B.copy(rt)),Z.length>0&&Ts(Z,j,st),Tt.length>0&&Ts(Tt,j,st),Ut.length>0&&Ts(Ut,j,st),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function jo(A,j,st,rt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[rt.id]===void 0&&(v.state.transmissionRenderTarget[rt.id]=new Ms(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?Ho:zi,minFilter:xs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const Tt=v.state.transmissionRenderTarget[rt.id],Ut=rt.viewport||B;Tt.setSize(Ut.z*D.transmissionResolutionScale,Ut.w*D.transmissionResolutionScale);const Bt=D.getRenderTarget(),Lt=D.getActiveCubeFace(),Jt=D.getActiveMipmapLevel();D.setRenderTarget(Tt),D.getClearColor(ht),dt=D.getClearAlpha(),dt<1&&D.setClearColor(16777215,.5),D.clear(),He&&Wt.render(st);const te=D.toneMapping;D.toneMapping=Va;const jt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),v.setupLightsView(rt),it===!0&&Rt.setGlobalState(D.clippingPlanes,rt),Ts(A,st,rt),re.updateMultisampleRenderTarget(Tt),re.updateRenderTargetMipmap(Tt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let Ee=0,je=j.length;Ee<je;Ee++){const Ne=j[Ee],fe=Ne.object,Kt=Ne.geometry,Xe=Ne.material,ge=Ne.group;if(Xe.side===ra&&fe.layers.test(rt.layers)){const wn=Xe.side;Xe.side=jn,Xe.needsUpdate=!0,Lr(fe,st,rt,Kt,Xe,ge),Xe.side=wn,Xe.needsUpdate=!0,ue=!0}}ue===!0&&(re.updateMultisampleRenderTarget(Tt),re.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Bt,Lt,Jt),D.setClearColor(ht,dt),jt!==void 0&&(rt.viewport=jt),D.toneMapping=te}function Ts(A,j,st){const rt=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,Tt=A.length;Z<Tt;Z++){const Ut=A[Z],Bt=Ut.object,Lt=Ut.geometry,Jt=Ut.group;let te=Ut.material;te.allowOverride===!0&&rt!==null&&(te=rt),Bt.layers.test(st.layers)&&Lr(Bt,j,st,Lt,te,Jt)}}function Lr(A,j,st,rt,Z,Tt){A.onBeforeRender(D,j,st,rt,Z,Tt),A.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(D,j,st,rt,A,Tt),Z.transparent===!0&&Z.side===ra&&Z.forceSinglePass===!1?(Z.side=jn,Z.needsUpdate=!0,D.renderBufferDirect(st,j,rt,Z,A,Tt),Z.side=ka,Z.needsUpdate=!0,D.renderBufferDirect(st,j,rt,Z,A,Tt),Z.side=ra):D.renderBufferDirect(st,j,rt,Z,A,Tt),A.onAfterRender(D,j,st,rt,Z,Tt)}function Ai(A,j,st){j.isScene!==!0&&(j=ie);const rt=Ht.get(A),Z=v.state.lights,Tt=v.state.shadowsArray,Ut=Z.state.version,Bt=ut.getParameters(A,Z.state,Tt,j,st),Lt=ut.getProgramCacheKey(Bt);let Jt=rt.programs;rt.environment=A.isMeshStandardMaterial?j.environment:null,rt.fog=j.fog,rt.envMap=(A.isMeshStandardMaterial?Ze:Ye).get(A.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,Jt===void 0&&(A.addEventListener("dispose",_t),Jt=new Map,rt.programs=Jt);let te=Jt.get(Lt);if(te!==void 0){if(rt.currentProgram===te&&rt.lightsStateVersion===Ut)return Fi(A,Bt),te}else Bt.uniforms=ut.getUniforms(A),A.onBeforeCompile(Bt,D),te=ut.acquireProgram(Bt,Lt),Jt.set(Lt,te),rt.uniforms=Bt.uniforms;const jt=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(jt.clippingPlanes=Rt.uniform),Fi(A,Bt),rt.needsLights=ua(A),rt.lightsStateVersion=Ut,rt.needsLights&&(jt.ambientLightColor.value=Z.state.ambient,jt.lightProbe.value=Z.state.probe,jt.directionalLights.value=Z.state.directional,jt.directionalLightShadows.value=Z.state.directionalShadow,jt.spotLights.value=Z.state.spot,jt.spotLightShadows.value=Z.state.spotShadow,jt.rectAreaLights.value=Z.state.rectArea,jt.ltc_1.value=Z.state.rectAreaLTC1,jt.ltc_2.value=Z.state.rectAreaLTC2,jt.pointLights.value=Z.state.point,jt.pointLightShadows.value=Z.state.pointShadow,jt.hemisphereLights.value=Z.state.hemi,jt.directionalShadowMap.value=Z.state.directionalShadowMap,jt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,jt.spotShadowMap.value=Z.state.spotShadowMap,jt.spotLightMatrix.value=Z.state.spotLightMatrix,jt.spotLightMap.value=Z.state.spotLightMap,jt.pointShadowMap.value=Z.state.pointShadowMap,jt.pointShadowMatrix.value=Z.state.pointShadowMatrix),rt.currentProgram=te,rt.uniformsList=null,te}function As(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Nc.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Fi(A,j){const st=Ht.get(A);st.outputColorSpace=j.outputColorSpace,st.batching=j.batching,st.batchingColor=j.batchingColor,st.instancing=j.instancing,st.instancingColor=j.instancingColor,st.instancingMorph=j.instancingMorph,st.skinning=j.skinning,st.morphTargets=j.morphTargets,st.morphNormals=j.morphNormals,st.morphColors=j.morphColors,st.morphTargetsCount=j.morphTargetsCount,st.numClippingPlanes=j.numClippingPlanes,st.numIntersection=j.numClipIntersection,st.vertexAlphas=j.vertexAlphas,st.vertexTangents=j.vertexTangents,st.toneMapping=j.toneMapping}function ca(A,j,st,rt,Z){j.isScene!==!0&&(j=ie),re.resetTextureUnits();const Tt=j.fog,Ut=rt.isMeshStandardMaterial?j.environment:null,Bt=Y===null?D.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Cr,Lt=(rt.isMeshStandardMaterial?Ze:Ye).get(rt.envMap||Ut),Jt=rt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,te=!!st.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),jt=!!st.morphAttributes.position,ue=!!st.morphAttributes.normal,Ee=!!st.morphAttributes.color;let je=Va;rt.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(je=D.toneMapping);const Ne=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,fe=Ne!==void 0?Ne.length:0,Kt=Ht.get(rt),Xe=v.state.lights;if(it===!0&&(pt===!0||A!==w)){const Je=A===w&&rt.id===C;Rt.setState(rt,A,Je)}let ge=!1;rt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Xe.state.version||Kt.outputColorSpace!==Bt||Z.isBatchedMesh&&Kt.batching===!1||!Z.isBatchedMesh&&Kt.batching===!0||Z.isBatchedMesh&&Kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Kt.instancing===!1||!Z.isInstancedMesh&&Kt.instancing===!0||Z.isSkinnedMesh&&Kt.skinning===!1||!Z.isSkinnedMesh&&Kt.skinning===!0||Z.isInstancedMesh&&Kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Kt.instancingMorph===!1&&Z.morphTexture!==null||Kt.envMap!==Lt||rt.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Rt.numPlanes||Kt.numIntersection!==Rt.numIntersection)||Kt.vertexAlphas!==Jt||Kt.vertexTangents!==te||Kt.morphTargets!==jt||Kt.morphNormals!==ue||Kt.morphColors!==Ee||Kt.toneMapping!==je||Kt.morphTargetsCount!==fe)&&(ge=!0):(ge=!0,Kt.__version=rt.version);let wn=Kt.currentProgram;ge===!0&&(wn=Ai(rt,j,Z));let di=!1,On=!1,vn=!1;const Be=wn.getUniforms(),Pn=Kt.uniforms;if(Ft.useProgram(wn.program)&&(di=!0,On=!0,vn=!0),rt.id!==C&&(C=rt.id,On=!0),di||w!==A){Ft.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Be.setValue(F,"projectionMatrix",A.projectionMatrix),Be.setValue(F,"viewMatrix",A.matrixWorldInverse);const En=Be.map.cameraPosition;En!==void 0&&En.setValue(F,Pt.setFromMatrixPosition(A.matrixWorld)),Se.logarithmicDepthBuffer&&Be.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Be.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,On=!0,vn=!0)}if(Z.isSkinnedMesh){Be.setOptional(F,Z,"bindMatrix"),Be.setOptional(F,Z,"bindMatrixInverse");const Je=Z.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),Be.setValue(F,"boneTexture",Je.boneTexture,re))}Z.isBatchedMesh&&(Be.setOptional(F,Z,"batchingTexture"),Be.setValue(F,"batchingTexture",Z._matricesTexture,re),Be.setOptional(F,Z,"batchingIdTexture"),Be.setValue(F,"batchingIdTexture",Z._indirectTexture,re),Be.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Be.setValue(F,"batchingColorTexture",Z._colorsTexture,re));const Cn=st.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&Et.update(Z,st,wn),(On||Kt.receiveShadow!==Z.receiveShadow)&&(Kt.receiveShadow=Z.receiveShadow,Be.setValue(F,"receiveShadow",Z.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Pn.envMap.value=Lt,Pn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&j.environment!==null&&(Pn.envMapIntensity.value=j.environmentIntensity),On&&(Be.setValue(F,"toneMappingExposure",D.toneMappingExposure),Kt.needsLights&&ja(Pn,vn),Tt&&rt.fog===!0&&vt.refreshFogUniforms(Pn,Tt),vt.refreshMaterialUniforms(Pn,rt,q,K,v.state.transmissionRenderTarget[A.id]),Nc.upload(F,As(Kt),Pn,re)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Nc.upload(F,As(Kt),Pn,re),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Be.setValue(F,"center",Z.center),Be.setValue(F,"modelViewMatrix",Z.modelViewMatrix),Be.setValue(F,"normalMatrix",Z.normalMatrix),Be.setValue(F,"modelMatrix",Z.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Je=rt.uniformsGroups;for(let En=0,Rs=Je.length;En<Rs;En++){const Bn=Je[En];se.update(Bn,wn),se.bind(Bn,wn)}}return wn}function ja(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function ua(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,j,st){const rt=Ht.get(A);rt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Ht.get(A.texture).__webglTexture=j,Ht.get(A.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:st,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const st=Ht.get(A);st.__webglFramebuffer=j,st.__useDefaultFramebuffer=j===void 0};const on=F.createFramebuffer();this.setRenderTarget=function(A,j=0,st=0){Y=A,V=j,H=st;let rt=!0,Z=null,Tt=!1,Ut=!1;if(A){const Lt=Ht.get(A);if(Lt.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(F.FRAMEBUFFER,null),rt=!1;else if(Lt.__webglFramebuffer===void 0)re.setupRenderTarget(A);else if(Lt.__hasExternalTextures)re.rebindTextures(A,Ht.get(A.texture).__webglTexture,Ht.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const jt=A.depthTexture;if(Lt.__boundDepthTexture!==jt){if(jt!==null&&Ht.has(jt)&&(A.width!==jt.image.width||A.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ut=!0);const te=Ht.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(te[j])?Z=te[j][st]:Z=te[j],Tt=!0):A.samples>0&&re.useMultisampledRTT(A)===!1?Z=Ht.get(A).__webglMultisampledFramebuffer:Array.isArray(te)?Z=te[st]:Z=te,B.copy(A.viewport),lt.copy(A.scissor),ct=A.scissorTest}else B.copy($).multiplyScalar(q).floor(),lt.copy(xt).multiplyScalar(q).floor(),ct=St;if(st!==0&&(Z=on),Ft.bindFramebuffer(F.FRAMEBUFFER,Z)&&rt&&Ft.drawBuffers(A,Z),Ft.viewport(B),Ft.scissor(lt),Ft.setScissorTest(ct),Tt){const Lt=Ht.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+j,Lt.__webglTexture,st)}else if(Ut){const Lt=j;for(let Jt=0;Jt<A.textures.length;Jt++){const te=Ht.get(A.textures[Jt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Jt,te.__webglTexture,st,Lt)}}else if(A!==null&&st!==0){const Lt=Ht.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Lt.__webglTexture,st)}C=-1},this.readRenderTargetPixels=function(A,j,st,rt,Z,Tt,Ut,Bt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Lt=Lt[Ut]),Lt){Ft.bindFramebuffer(F.FRAMEBUFFER,Lt);try{const Jt=A.textures[Bt],te=Jt.format,jt=Jt.type;if(!Se.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-rt&&st>=0&&st<=A.height-Z&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Bt),F.readPixels(j,st,rt,Z,kt.convert(te),kt.convert(jt),Tt))}finally{const Jt=Y!==null?Ht.get(Y).__webglFramebuffer:null;Ft.bindFramebuffer(F.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(A,j,st,rt,Z,Tt,Ut,Bt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Lt=Lt[Ut]),Lt)if(j>=0&&j<=A.width-rt&&st>=0&&st<=A.height-Z){Ft.bindFramebuffer(F.FRAMEBUFFER,Lt);const Jt=A.textures[Bt],te=Jt.format,jt=Jt.type;if(!Se.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Bt),F.readPixels(j,st,rt,Z,kt.convert(te),kt.convert(jt),0);const Ee=Y!==null?Ht.get(Y).__webglFramebuffer:null;Ft.bindFramebuffer(F.FRAMEBUFFER,Ee);const je=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await iS(F,je,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.deleteBuffer(ue),F.deleteSync(je),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,st=0){const rt=Math.pow(2,-st),Z=Math.floor(A.image.width*rt),Tt=Math.floor(A.image.height*rt),Ut=j!==null?j.x:0,Bt=j!==null?j.y:0;re.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,st,0,0,Ut,Bt,Z,Tt),Ft.unbindTexture()};const Wo=F.createFramebuffer(),qo=F.createFramebuffer();this.copyTextureToTexture=function(A,j,st=null,rt=null,Z=0,Tt=null){Tt===null&&(Z!==0?(br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Z,Z=0):Tt=0);let Ut,Bt,Lt,Jt,te,jt,ue,Ee,je;const Ne=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(st!==null)Ut=st.max.x-st.min.x,Bt=st.max.y-st.min.y,Lt=st.isBox3?st.max.z-st.min.z:1,Jt=st.min.x,te=st.min.y,jt=st.isBox3?st.min.z:0;else{const Cn=Math.pow(2,-Z);Ut=Math.floor(Ne.width*Cn),Bt=Math.floor(Ne.height*Cn),A.isDataArrayTexture?Lt=Ne.depth:A.isData3DTexture?Lt=Math.floor(Ne.depth*Cn):Lt=1,Jt=0,te=0,jt=0}rt!==null?(ue=rt.x,Ee=rt.y,je=rt.z):(ue=0,Ee=0,je=0);const fe=kt.convert(j.format),Kt=kt.convert(j.type);let Xe;j.isData3DTexture?(re.setTexture3D(j,0),Xe=F.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(re.setTexture2DArray(j,0),Xe=F.TEXTURE_2D_ARRAY):(re.setTexture2D(j,0),Xe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);const ge=F.getParameter(F.UNPACK_ROW_LENGTH),wn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),di=F.getParameter(F.UNPACK_SKIP_PIXELS),On=F.getParameter(F.UNPACK_SKIP_ROWS),vn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ne.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ne.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Jt),F.pixelStorei(F.UNPACK_SKIP_ROWS,te),F.pixelStorei(F.UNPACK_SKIP_IMAGES,jt);const Be=A.isDataArrayTexture||A.isData3DTexture,Pn=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const Cn=Ht.get(A),Je=Ht.get(j),En=Ht.get(Cn.__renderTarget),Rs=Ht.get(Je.__renderTarget);Ft.bindFramebuffer(F.READ_FRAMEBUFFER,En.__webglFramebuffer),Ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,Rs.__webglFramebuffer);for(let Bn=0;Bn<Lt;Bn++)Be&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(A).__webglTexture,Z,jt+Bn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(j).__webglTexture,Tt,je+Bn)),F.blitFramebuffer(Jt,te,Ut,Bt,ue,Ee,Ut,Bt,F.DEPTH_BUFFER_BIT,F.NEAREST);Ft.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||Ht.has(A)){const Cn=Ht.get(A),Je=Ht.get(j);Ft.bindFramebuffer(F.READ_FRAMEBUFFER,Wo),Ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,qo);for(let En=0;En<Lt;En++)Be?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Cn.__webglTexture,Z,jt+En):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Cn.__webglTexture,Z),Pn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Je.__webglTexture,Tt,je+En):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Je.__webglTexture,Tt),Z!==0?F.blitFramebuffer(Jt,te,Ut,Bt,ue,Ee,Ut,Bt,F.COLOR_BUFFER_BIT,F.NEAREST):Pn?F.copyTexSubImage3D(Xe,Tt,ue,Ee,je+En,Jt,te,Ut,Bt):F.copyTexSubImage2D(Xe,Tt,ue,Ee,Jt,te,Ut,Bt);Ft.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Pn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Xe,Tt,ue,Ee,je,Ut,Bt,Lt,fe,Kt,Ne.data):j.isCompressedArrayTexture?F.compressedTexSubImage3D(Xe,Tt,ue,Ee,je,Ut,Bt,Lt,fe,Ne.data):F.texSubImage3D(Xe,Tt,ue,Ee,je,Ut,Bt,Lt,fe,Kt,Ne):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,ue,Ee,Ut,Bt,fe,Kt,Ne.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,ue,Ee,Ne.width,Ne.height,fe,Ne.data):F.texSubImage2D(F.TEXTURE_2D,Tt,ue,Ee,Ut,Bt,fe,Kt,Ne);F.pixelStorei(F.UNPACK_ROW_LENGTH,ge),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,wn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,di),F.pixelStorei(F.UNPACK_SKIP_ROWS,On),F.pixelStorei(F.UNPACK_SKIP_IMAGES,vn),Tt===0&&j.generateMipmaps&&F.generateMipmap(Xe),Ft.unbindTexture()},this.copyTextureToTexture3D=function(A,j,st=null,rt=null,Z=0){return br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,st,rt,Z)},this.initRenderTarget=function(A){Ht.get(A).__webglFramebuffer===void 0&&re.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?re.setTextureCube(A,0):A.isData3DTexture?re.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?re.setTexture2DArray(A,0):re.setTexture2D(A,0),Ft.unbindTexture()},this.resetState=function(){V=0,H=0,Y=null,Ft.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),i.unpackColorSpace=Te._getUnpackColorSpace()}}const p0={type:"change"},Dd={type:"start"},K0={type:"end"},bc=new bd,m0=new Fa,CA=Math.cos(70*eS.DEG2RAD),mn=new et,Xn=2*Math.PI,Ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Th=1e-6;class DA extends jS{constructor(t,i=null){super(t,i),this.state=Ie.NONE,this.target=new et,this.cursor=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mr.ROTATE,MIDDLE:Mr.DOLLY,RIGHT:Mr.PAN},this.touches={ONE:yr.ROTATE,TWO:yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new et,this._lastQuaternion=new Ss,this._lastTargetPosition=new et,this._quat=new Ss().setFromUnitVectors(t.up,new et(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new V_,this._sphericalDelta=new V_,this._scale=1,this._panOffset=new et,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new et,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=NA.bind(this),this._onPointerDown=UA.bind(this),this._onPointerUp=LA.bind(this),this._onContextMenu=HA.bind(this),this._onMouseWheel=zA.bind(this),this._onKeyDown=IA.bind(this),this._onTouchStart=BA.bind(this),this._onTouchMove=FA.bind(this),this._onMouseDown=OA.bind(this),this._onMouseMove=PA.bind(this),this._interceptControlDown=GA.bind(this),this._interceptControlUp=VA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(p0),this.update(),this.state=Ie.NONE}update(t=null){const i=this.object.position;mn.copy(i).sub(this.target),mn.applyQuaternion(this._quat),this._spherical.setFromVector3(mn),this.autoRotate&&this.state===Ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Xn:s>Math.PI&&(s-=Xn),l<-Math.PI?l+=Xn:l>Math.PI&&(l-=Xn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(mn.setFromSpherical(this._spherical),mn.applyQuaternion(this._quatInverse),i.copy(this.target).add(mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const p=mn.length();h=this._clampDistance(p*this._scale);const m=p-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new et(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new et(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),h=mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(bc.origin.copy(this.object.position),bc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bc.direction))<CA?this.object.lookAt(this.target):(m0.setFromNormalAndCoplanarPoint(this.object.up,this.target),bc.intersectPlane(m0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Th||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Th||this._lastTargetPosition.distanceToSquared(this.target)>Th?(this.dispatchEvent(p0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xn/60*this.autoRotateSpeed*t:Xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){mn.setFromMatrixColumn(i,0),mn.multiplyScalar(-t),this._panOffset.add(mn)}_panUp(t,i){this.screenSpacePanning===!0?mn.setFromMatrixColumn(i,1):(mn.setFromMatrixColumn(i,0),mn.crossVectors(this.object.up,mn)),mn.multiplyScalar(t),this._panOffset.add(mn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;mn.copy(l).sub(this.target);let c=mn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,p=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,p=(t.pageY+i.y)*.5;this._updateZoomParameters(h,p)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new oe,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function UA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function NA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function LA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(K0),this.state=Ie.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function OA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Mr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ie.DOLLY;break;case Mr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ie.ROTATE}break;case Mr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ie.PAN}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(Dd)}function PA(r){switch(this.state){case Ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function zA(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ie.NONE||(r.preventDefault(),this.dispatchEvent(Dd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(K0))}function IA(r){this.enabled!==!1&&this._handleKeyDown(r)}function BA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case yr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ie.TOUCH_ROTATE;break;case yr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ie.TOUCH_PAN;break;default:this.state=Ie.NONE}break;case 2:switch(this.touches.TWO){case yr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ie.TOUCH_DOLLY_PAN;break;case yr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ie.TOUCH_DOLLY_ROTATE;break;default:this.state=Ie.NONE}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(Dd)}function FA(r){switch(this._trackPointer(r),this.state){case Ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ie.NONE}}function HA(r){this.enabled!==!1&&r.preventDefault()}function GA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function VA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const kA=()=>{const r=ke.useRef(null);return ke.useEffect(()=>{if(!r.current)return;const t=r.current;let i,s=!1;const l=new wS,c=new fi(60,t.clientWidth/t.clientHeight,.1,1e3);c.position.set(0,0,5);const h=new wA({antialias:!0,powerPreference:"high-performance"});h.setSize(t.clientWidth,t.clientHeight),h.setPixelRatio(window.devicePixelRatio),t.appendChild(h.domElement);const p=new DA(c,h.domElement);p.enableDamping=!0,p.dampingFactor=.05,p.minDistance=3,p.maxDistance=15,p.autoRotate=!0,p.autoRotateSpeed=.5;const m=()=>{s=!0},d=()=>{s=!1};p.addEventListener("start",m),p.addEventListener("end",d);const g=new kS(4210752,1);l.add(g);const _=new VS(16777215,.5);_.position.set(5,5,5),l.add(_);const M=new FS().load(["https://threejs.org/examples/textures/cube/MilkyWay/dark-s_px.jpg","https://threejs.org/examples/textures/cube/MilkyWay/dark-s_nx.jpg","https://threejs.org/examples/textures/cube/MilkyWay/dark-s_py.jpg","https://threejs.org/examples/textures/cube/MilkyWay/dark-s_ny.jpg","https://threejs.org/examples/textures/cube/MilkyWay/dark-s_pz.jpg","https://threejs.org/examples/textures/cube/MilkyWay/dark-s_nz.jpg"]);l.background=M;const E=new Rd(1,64,64),R=new LS({envMap:M,metalness:1,roughness:0}),S=new Mi(E,R);l.add(S);const v=new Bi,G=[];for(let H=0;H<1e3;H++){const Y=(Math.random()-.5)*100,C=(Math.random()-.5)*100,w=(Math.random()-.5)*100;G.push(Y,C,w)}v.setAttribute("position",new bi(G,3));const O=new H0({color:16777215,size:.1}),D=new NS(v,O);l.add(D);const I=()=>{i=requestAnimationFrame(I);const H=performance.now()*.001;S.scale.setScalar(Math.sin(H*.5)*.02+1),s||(S.rotation.x+=5e-4,S.rotation.y+=.001,D.rotation.y+=2e-4),p.update(),h.render(l,c)};I();const V=()=>{t&&(c.aspect=t.clientWidth/t.clientHeight,c.updateProjectionMatrix(),h.setSize(t.clientWidth,t.clientHeight))};return window.addEventListener("resize",V),()=>{if(window.removeEventListener("resize",V),p.removeEventListener("start",m),p.removeEventListener("end",d),cancelAnimationFrame(i),t&&h.domElement)try{t.removeChild(h.domElement)}catch{}h.dispose(),l.traverse(H=>{var Y;H instanceof Mi&&((Y=H.geometry)==null||Y.dispose(),(Array.isArray(H.material)?H.material:[H.material]).forEach(w=>w==null?void 0:w.dispose()))}),M.dispose()}},[]),N.jsx("div",{ref:r,className:"fixed top-0 left-0 w-full h-full z-0"})},XA=({pageName:r,currentPage:t,onClick:i,children:s})=>N.jsx("button",{onClick:()=>i(r),className:`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${t===r?"text-white bg-white/10":"text-brand-text-muted hover:text-white hover:bg-white/5"}`,children:s}),jA=({currentPage:r,setCurrentPage:t})=>{const[i,s]=ke.useState(!1),l=["Home","Quantum","Spiritual","Research","My Library","Admin"];return N.jsxs("header",{className:"sticky top-0 z-50 bg-brand-surface/80 backdrop-blur-xs border-b border-brand-border",children:[N.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:N.jsxs("div",{className:"flex items-center justify-between h-16",children:[N.jsx("div",{className:"flex items-center",children:N.jsx("button",{onClick:()=>t("Home"),className:"flex-shrink-0 text-white font-bold text-xl tracking-wider",children:"Esoteric Intelligence"})}),N.jsx("div",{className:"hidden md:block",children:N.jsx("div",{className:"ml-10 flex items-baseline space-x-4",children:l.map(c=>N.jsx(XA,{pageName:c,currentPage:r,onClick:t,children:c},c))})}),N.jsx("div",{className:"-mr-2 flex md:hidden items-center space-x-2",children:N.jsxs("button",{onClick:()=>s(!i),type:"button",className:"bg-white/5 inline-flex items-center justify-center p-2 rounded-md text-brand-text-muted hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-indigo-500","aria-controls":"mobile-menu","aria-expanded":"false",children:[N.jsx("span",{className:"sr-only",children:"Open main menu"}),i?N.jsx("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):N.jsx("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})]})})]})}),i&&N.jsx("div",{className:"md:hidden",id:"mobile-menu",children:N.jsx("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:l.map(c=>N.jsx("button",{onClick:()=>{t(c),s(!1)},className:`w-full text-left block px-3 py-2 rounded-md text-base font-medium ${r===c?"text-white bg-white/10":"text-brand-text-muted hover:text-white hover:bg-white/5"}`,children:c},c))})})]})},WA=()=>N.jsx("footer",{className:"bg-brand-surface/50 border-t border-brand-border mt-12",children:N.jsxs("div",{className:"container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-brand-text-muted",children:[N.jsxs("p",{className:"text-sm",children:["© ",new Date().getFullYear()," Esoteric Intelligence. All Rights Reserved."]}),N.jsx("p",{className:"text-xs opacity-50 mt-2",children:"NEURAL BIO-NEURAL-INTERFACE"})]})}),qA=({className:r})=>N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),Xo=({item:r,isPurchased:t,onPurchase:i,showToast:s})=>{const l=()=>{if(r.price<=0||t)return;const p={key:"rzp_test_R7agmXiZNDS0Dh",amount:r.price*100,currency:"INR",name:"Esoteric Intelligence",description:`Purchase: ${r.title}`,handler:function(m){console.log("Payment successful",m),s("Payment successful!","success"),i(r)},prefill:{name:"Test User",email:"test.user@example.com",contact:"9999999999"},notes:{itemId:r.id},theme:{color:"#111827",backdrop_color:"rgba(0, 0, 0, 0.85)"}};try{const m=new window.Razorpay(p);m.on("payment.failed",function(d){s(`Payment failed: ${d.error.description}`,"error"),console.error("Payment failed",d.error)}),m.open()}catch(m){console.error("Razorpay error: ",m),s("Could not load payment gateway.","error")}},c=()=>{if(!r.pdfUrl){s("No file available for this item.","error");return}s(`Preparing download for "${r.title}"...`,"success");const p=`This is a placeholder for the premium content:

Title: ${r.title}
Author: ${r.author}

Thank you for your purchase from Esoteric Intelligence.`,m=new Blob([p],{type:"text/plain"}),d=URL.createObjectURL(m),g=document.createElement("a");g.href=d,g.download=`${r.title.replace(/[^a-zA-Z0-9]/g,"_")}.txt`,document.body.appendChild(g),g.click(),document.body.removeChild(g),URL.revokeObjectURL(d)},h=()=>t&&r.isPremium?N.jsxs("button",{onClick:c,className:"text-sm font-semibold text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700",children:[N.jsx(qA,{className:"w-4 h-4"})," Download"]}):!r.isPremium||r.price<=0?N.jsx("button",{disabled:!0,className:"text-sm font-semibold bg-white/10 text-brand-text-muted cursor-default px-4 py-2 rounded-md",children:"Free Access"}):N.jsxs("button",{onClick:l,className:"text-sm font-semibold text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10",children:["Buy for ₹",r.price]});return N.jsxs("div",{className:"bg-brand-surface border border-brand-border rounded-lg p-6 flex flex-col hover:border-white/20 hover:scale-[1.02] transition-all duration-300 ease-in-out relative overflow-hidden",children:[r.isPremium&&N.jsxs("div",{className:"absolute top-3 right-3 bg-green-500/10 text-green-400 text-xs font-bold px-2 py-1 rounded-full flex items-center",children:[N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-1",viewBox:"0 0 20 20",fill:"currentColor",children:N.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})}),"Premium"]}),N.jsxs("div",{className:"flex-grow",children:[N.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider text-brand-text-muted",children:r.type}),N.jsx("h3",{className:"text-xl font-bold mt-2 text-white",children:r.title}),N.jsx("p",{className:"text-brand-text-muted mt-3 text-sm flex-grow",children:r.preview})]}),N.jsxs("div",{className:"mt-6 pt-4 border-t border-brand-border flex justify-between items-center",children:[N.jsxs("p",{className:"text-xs text-brand-text-muted",children:["By ",r.author]}),h()]})]})},Tc=({children:r})=>N.jsx("div",{className:"flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-500/20 text-indigo-400 mb-4",children:r}),YA=()=>N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),ZA=()=>N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"})}),KA=()=>N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"})}),QA=()=>N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L11 15l-4 6h10l-4-6 4.293-4.293a1 1 0 011.414 0L21 12M5 12a2 2 0 100-4 2 2 0 000 4z"})}),g0=({purchasedItems:r,onPurchase:t,showToast:i,content:s})=>{const l=s.filter(c=>c.published).slice(0,3);return N.jsxs("div",{className:"space-y-24",children:[N.jsxs("section",{className:"text-center pt-20 pb-12",children:[N.jsx("h1",{className:"text-4xl md:text-6xl font-bold tracking-tight text-white",children:"Unlock the Universe Within"}),N.jsx("p",{className:"mt-4 max-w-3xl mx-auto text-lg text-brand-text-muted",children:"Unlock profound insights through a next-generation digital marketplace for wisdom, research, and discovery."})]}),N.jsxs("section",{children:[N.jsx("h2",{className:"text-3xl font-bold text-white mb-8 text-center",children:"Featured Insights"}),N.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:l.map(c=>N.jsx(Xo,{item:c,isPurchased:r.has(c.id),onPurchase:t,showToast:i},c.id))})]}),N.jsxs("section",{children:[N.jsx("h2",{className:"text-3xl font-bold text-white mb-12 text-center",children:"A Marketplace for Modern Seekers"}),N.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-10",children:[N.jsxs("div",{className:"bg-brand-surface border border-brand-border p-6 rounded-lg",children:[N.jsx(Tc,{children:N.jsx(QA,{})}),N.jsx("h3",{className:"text-xl font-bold text-white",children:"Immersive Experience"}),N.jsx("p",{className:"text-brand-text-muted mt-2",children:"A unique, bio-neural network aesthetic sets the tone for deep exploration."})]}),N.jsxs("div",{className:"bg-brand-surface border border-brand-border p-6 rounded-lg",children:[N.jsx(Tc,{children:N.jsx(YA,{})}),N.jsx("h3",{className:"text-xl font-bold text-white",children:"Curated & Organized"}),N.jsx("p",{className:"text-brand-text-muted mt-2",children:"Browse content by category with intelligent filtering to find exactly what you need."})]}),N.jsxs("div",{className:"bg-brand-surface border border-brand-border p-6 rounded-lg",children:[N.jsx(Tc,{children:N.jsx(ZA,{})}),N.jsx("h3",{className:"text-xl font-bold text-white",children:"Seamless & Secure Payments"}),N.jsx("p",{className:"text-brand-text-muted mt-2",children:"Secure checkout powered by Razorpay ensures smooth, trusted transactions."})]}),N.jsxs("div",{className:"bg-brand-surface border border-brand-border p-6 rounded-lg",children:[N.jsx(Tc,{children:N.jsx(KA,{})}),N.jsx("h3",{className:"text-xl font-bold text-white",children:"Your Personal Library"}),N.jsx("p",{className:"text-brand-text-muted mt-2",children:"Every purchase is stored in a “My Library” section for lifetime access and downloads."})]})]})]}),N.jsxs("section",{children:[N.jsx("h2",{className:"text-3xl font-bold text-white mb-12 text-center",children:"Simple & Secure Access"}),N.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 text-center",children:[N.jsxs("div",{className:"bg-brand-surface border border-brand-border p-8 rounded-lg",children:[N.jsx("div",{className:"text-3xl font-bold text-indigo-400 mb-2",children:"1"}),N.jsx("h3",{className:"text-xl font-bold text-white",children:"Discover & Browse"}),N.jsx("p",{className:"text-brand-text-muted mt-2",children:"Explore our curated collections and find insights that resonate with you."})]}),N.jsxs("div",{className:"bg-brand-surface border border-brand-border p-8 rounded-lg",children:[N.jsx("div",{className:"text-3xl font-bold text-indigo-400 mb-2",children:"2"}),N.jsx("h3",{className:"text-xl font-bold text-white",children:"Purchase Securely"}),N.jsx("p",{className:"text-brand-text-muted mt-2",children:"Unlock content with a simple, secure payment through our trusted gateway."})]}),N.jsxs("div",{className:"bg-brand-surface border border-brand-border p-8 rounded-lg",children:[N.jsx("div",{className:"text-3xl font-bold text-indigo-400 mb-2",children:"3"}),N.jsx("h3",{className:"text-xl font-bold text-white",children:"Access Instantly"}),N.jsx("p",{className:"text-brand-text-muted mt-2",children:"Your new content appears in your personal library, ready to download."})]})]})]}),N.jsxs("section",{className:"text-center max-w-3xl mx-auto",children:[N.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:"Our Vision"}),N.jsx("p",{className:"text-lg text-brand-text-muted",children:"At Esoteric Intelligence, we believe knowledge should be sacred, interactive, and alive. This portal is not just a store—it’s a living library where deep thinkers and seekers gain access to curated insights, while creators retain full control and ownership."})]})]})};var rn=(r=>(r.Article="Article",r.Quote="Quote",r.Poem="Poem",r.Research="Research Paper",r))(rn||{}),qe=(r=>(r.Quantum="Quantum",r.Spiritual="Spiritual",r.Research="Research",r))(qe||{});const Ud=({searchQuery:r,setSearchQuery:t,sortOrder:i,setSortOrder:s})=>N.jsxs("div",{className:"flex flex-col md:flex-row gap-4 justify-between items-center bg-brand-surface/50 border border-brand-border p-4 rounded-lg",children:[N.jsxs("div",{className:"relative w-full md:w-auto md:flex-grow",children:[N.jsx("svg",{className:"absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-text-muted",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),N.jsx("input",{type:"text",placeholder:"Search content...",value:r,onChange:l=>t(l.target.value),className:"w-full bg-black/20 border border-brand-border rounded-md py-2 pl-10 pr-4 text-brand-text focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"})]}),N.jsxs("div",{className:"flex items-center gap-2 w-full md:w-auto",children:[N.jsx("label",{htmlFor:"sort-order",className:"text-sm text-brand-text-muted flex-shrink-0",children:"Sort by:"}),N.jsxs("select",{id:"sort-order",value:i,onChange:l=>s(l.target.value),className:"w-full md:w-auto bg-black/20 border border-brand-border rounded-md py-2 px-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors",children:[N.jsx("option",{value:"newest",children:"Newest"}),N.jsx("option",{value:"price-asc",children:"Price: Low to High"}),N.jsx("option",{value:"price-desc",children:"Price: High to Low"})]})]})]}),JA=({title:r,description:t})=>N.jsxs("div",{className:"mb-12",children:[N.jsx("h1",{className:"text-4xl font-bold text-white tracking-tight",children:r}),N.jsx("p",{className:"mt-2 text-lg text-brand-text-muted",children:t})]}),$A=({purchasedItems:r,onPurchase:t,showToast:i,content:s})=>{const[l,c]=ke.useState(""),[h,p]=ke.useState("newest"),m=ke.useMemo(()=>{let d=s.filter(g=>g.category===qe.Quantum&&g.published);switch(l&&(d=d.filter(g=>g.title.toLowerCase().includes(l.toLowerCase())||g.author.toLowerCase().includes(l.toLowerCase())||g.preview.toLowerCase().includes(l.toLowerCase()))),h){case"price-asc":d.sort((g,_)=>g.price-_.price);break;case"price-desc":d.sort((g,_)=>_.price-g.price);break;case"newest":default:d.sort((g,_)=>new Date(_.createdAt).getTime()-new Date(g.createdAt).getTime());break}return d},[s,l,h]);return N.jsxs("div",{children:[N.jsx(JA,{title:"Quantum Consciousness",description:"Explore the intersection of quantum physics, reality, and the nature of the mind."}),N.jsx(Ud,{searchQuery:l,setSearchQuery:c,sortOrder:h,setSortOrder:p}),N.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8",children:m.length>0?m.map(d=>N.jsx(Xo,{item:d,isPurchased:r.has(d.id),onPurchase:t,showToast:i},d.id)):N.jsx("p",{className:"text-brand-text-muted col-span-full text-center",children:"No content found matching your criteria."})})]})},t1=({title:r,description:t})=>N.jsxs("div",{className:"mb-12",children:[N.jsx("h1",{className:"text-4xl font-bold text-white tracking-tight",children:r}),N.jsx("p",{className:"mt-2 text-lg text-brand-text-muted",children:t})]}),e1=({purchasedItems:r,onPurchase:t,showToast:i,content:s})=>{const[l,c]=ke.useState(""),[h,p]=ke.useState("newest"),m=ke.useMemo(()=>{let d=s.filter(g=>g.category===qe.Spiritual&&g.published);switch(l&&(d=d.filter(g=>g.title.toLowerCase().includes(l.toLowerCase())||g.author.toLowerCase().includes(l.toLowerCase())||g.preview.toLowerCase().includes(l.toLowerCase()))),h){case"price-asc":d.sort((g,_)=>g.price-_.price);break;case"price-desc":d.sort((g,_)=>_.price-g.price);break;case"newest":default:d.sort((g,_)=>new Date(_.createdAt).getTime()-new Date(g.createdAt).getTime());break}return d},[s,l,h]);return N.jsxs("div",{children:[N.jsx(t1,{title:"Spiritual Wisdom",description:"Delve into ancient truths, mystical poetry, and timeless insights on the human spirit."}),N.jsx(Ud,{searchQuery:l,setSearchQuery:c,sortOrder:h,setSortOrder:p}),N.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8",children:m.length>0?m.map(d=>N.jsx(Xo,{item:d,isPurchased:r.has(d.id),onPurchase:t,showToast:i},d.id)):N.jsx("p",{className:"text-brand-text-muted col-span-full text-center",children:"No content found matching your criteria."})})]})},n1=({title:r,description:t})=>N.jsxs("div",{className:"mb-12",children:[N.jsx("h1",{className:"text-4xl font-bold text-white tracking-tight",children:r}),N.jsx("p",{className:"mt-2 text-lg text-brand-text-muted",children:t})]}),i1=({purchasedItems:r,onPurchase:t,showToast:i,content:s})=>{const[l,c]=ke.useState(""),[h,p]=ke.useState("newest"),m=ke.useMemo(()=>{let d=s.filter(g=>g.category===qe.Research&&g.published);switch(l&&(d=d.filter(g=>g.title.toLowerCase().includes(l.toLowerCase())||g.author.toLowerCase().includes(l.toLowerCase())||g.preview.toLowerCase().includes(l.toLowerCase()))),h){case"price-asc":d.sort((g,_)=>g.price-_.price);break;case"price-desc":d.sort((g,_)=>_.price-g.price);break;case"newest":default:d.sort((g,_)=>new Date(_.createdAt).getTime()-new Date(g.createdAt).getTime());break}return d},[s,l,h]);return N.jsxs("div",{children:[N.jsx(n1,{title:"Scientific Research",description:"Access peer-reviewed papers and in-depth analysis on the frontiers of consciousness studies."}),N.jsx(Ud,{searchQuery:l,setSearchQuery:c,sortOrder:h,setSortOrder:p}),N.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8",children:m.length>0?m.map(d=>N.jsx(Xo,{item:d,isPurchased:r.has(d.id),onPurchase:t,showToast:i},d.id)):N.jsx("p",{className:"text-brand-text-muted col-span-full text-center",children:"No content found matching your criteria."})})]})},a1=({title:r,description:t})=>N.jsxs("div",{className:"mb-12 text-center",children:[N.jsx("h1",{className:"text-4xl font-bold text-white tracking-tight",children:r}),N.jsx("p",{className:"mt-2 text-lg text-brand-text-muted max-w-2xl mx-auto",children:t})]}),s1=({purchasedItems:r,onPurchase:t,showToast:i,content:s})=>{const l=s.filter(c=>r.has(c.id));return N.jsxs("div",{children:[N.jsx(a1,{title:"My Library",description:"Your personal collection of purchased insights. Access and download your content at any time."}),l.length>0?N.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:l.map(c=>N.jsx(Xo,{item:c,isPurchased:!0,onPurchase:t,showToast:i},c.id))}):N.jsxs("div",{className:"text-center py-16 bg-brand-surface border border-brand-border rounded-lg",children:[N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"mx-auto h-12 w-12 text-brand-text-muted",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"})}),N.jsx("h3",{className:"mt-2 text-lg font-medium text-white",children:"Your library is empty"}),N.jsx("p",{className:"mt-1 text-sm text-brand-text-muted",children:"Start exploring and purchase content to add it to your collection."})]})]})},ps=({label:r,id:t,children:i})=>N.jsxs("div",{children:[N.jsx("label",{htmlFor:t,className:"block text-sm font-medium text-brand-text-muted mb-1",children:r}),i]}),r1=({item:r,onSave:t,onClose:i,showToast:s})=>{const[l,c]=ke.useState(r);ke.useEffect(()=>{const d=g=>{g.key==="Escape"&&i()};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[i]);const h=d=>{const{name:g,value:_,type:x}=d.target;let M=_;x==="checkbox"?M=d.target.checked:g==="price"&&(M=parseFloat(_)||0),c(E=>({...E,[g]:M}))},p=d=>{var _;const g=(_=d.target.files)==null?void 0:_[0];g&&(c(x=>({...x,pdfUrl:g.name})),s(`File "${g.name}" is staged.`,"success"))},m=d=>{if(d.preventDefault(),!l.title||!l.author){s("Title and Author are required fields.","error");return}t(l)};return N.jsx("div",{className:"fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4",onClick:i,"aria-modal":"true",role:"dialog",children:N.jsxs("div",{className:"bg-brand-surface border border-brand-border rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col",onClick:d=>d.stopPropagation(),children:[N.jsx("div",{className:"p-6 border-b border-brand-border",children:N.jsx("h2",{className:"text-xl font-bold text-white",children:r.id.startsWith("new-")?"Create New Content":"Edit Content"})}),N.jsxs("form",{onSubmit:m,className:"p-6 space-y-4 flex-grow",children:[N.jsx(ps,{label:"Title",id:"title",children:N.jsx("input",{type:"text",id:"title",name:"title",value:l.title,onChange:h,required:!0,className:"w-full bg-black/20 border border-brand-border rounded-md p-2 text-brand-text focus:outline-none focus:ring-2 focus:ring-indigo-500"})}),N.jsx(ps,{label:"Author",id:"author",children:N.jsx("input",{type:"text",id:"author",name:"author",value:l.author,onChange:h,required:!0,className:"w-full bg-black/20 border border-brand-border rounded-md p-2 text-brand-text focus:outline-none focus:ring-2 focus:ring-indigo-500"})}),N.jsx(ps,{label:"Preview Text",id:"preview",children:N.jsx("textarea",{id:"preview",name:"preview",value:l.preview,onChange:h,rows:4,className:"w-full bg-black/20 border border-brand-border rounded-md p-2 text-brand-text focus:outline-none focus:ring-2 focus:ring-indigo-500"})}),N.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[N.jsx(ps,{label:"Category",id:"category",children:N.jsx("select",{id:"category",name:"category",value:l.category,onChange:h,className:"w-full bg-black/20 border border-brand-border rounded-md p-2 text-brand-text focus:outline-none focus:ring-2 focus:ring-indigo-500",children:Object.values(qe).map(d=>N.jsx("option",{value:d,children:d},d))})}),N.jsx(ps,{label:"Type",id:"type",children:N.jsx("select",{id:"type",name:"type",value:l.type,onChange:h,className:"w-full bg-black/20 border border-brand-border rounded-md p-2 text-brand-text focus:outline-none focus:ring-2 focus:ring-indigo-500",children:Object.values(rn).map(d=>N.jsx("option",{value:d,children:d},d))})})]}),N.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[N.jsx(ps,{label:"Price (₹)",id:"price",children:N.jsx("input",{type:"number",id:"price",name:"price",value:l.price,onChange:h,min:"0",step:"1",className:"w-full bg-black/20 border border-brand-border rounded-md p-2 text-brand-text focus:outline-none focus:ring-2 focus:ring-indigo-500"})}),N.jsx(ps,{label:"File Upload",id:"file-upload",children:N.jsxs("label",{className:"w-full bg-black/20 border border-brand-border rounded-md p-2 text-brand-text-muted hover:text-white hover:border-white/50 cursor-pointer flex items-center justify-center transition-colors",children:[N.jsx("span",{children:l.pdfUrl?l.pdfUrl:"Attach PDF/Text"}),N.jsx("input",{type:"file",className:"hidden",onChange:p,accept:".pdf,.txt,.md"})]})})]}),N.jsxs("div",{className:"flex items-center justify-between",children:[N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsx("input",{type:"checkbox",id:"published",name:"published",checked:l.published,onChange:h,className:"h-4 w-4 rounded border-brand-border text-indigo-600 focus:ring-indigo-500 bg-black/20"}),N.jsx("label",{htmlFor:"published",className:"text-sm font-medium text-brand-text-muted",children:"Published"})]}),N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsx("input",{type:"checkbox",id:"isPremium",name:"isPremium",checked:l.isPremium,onChange:h,className:"h-4 w-4 rounded border-brand-border text-indigo-600 focus:ring-indigo-500 bg-black/20"}),N.jsx("label",{htmlFor:"isPremium",className:"text-sm font-medium text-brand-text-muted",children:"Premium"})]})]})]}),N.jsxs("div",{className:"p-4 bg-black/20 border-t border-brand-border flex justify-end gap-4",children:[N.jsx("button",{type:"button",onClick:i,className:"bg-white/5 hover:bg-white/10 text-white font-bold py-2 px-4 rounded-lg transition-colors",children:"Cancel"}),N.jsx("button",{type:"submit",onClick:m,className:"bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors",children:"Save Changes"})]})]})})},Ah=({title:r,value:t,icon:i})=>N.jsxs("div",{className:"bg-brand-surface border border-brand-border rounded-lg p-4 flex items-center",children:[N.jsx("div",{className:"p-3 rounded-full bg-indigo-500/20 text-indigo-400 mr-4",children:i}),N.jsxs("div",{children:[N.jsx("p",{className:"text-sm font-medium text-brand-text-muted",children:r}),N.jsx("p",{className:"text-2xl font-bold text-white",children:t})]})]}),o1=({showToast:r,content:t,setContent:i,purchasedItems:s})=>{const[l,c]=ke.useState(null),[h,p]=ke.useState(!1),m=ke.useMemo(()=>({revenue:`₹${t.filter(S=>s.has(S.id)).reduce((S,v)=>S+v.price,0).toLocaleString()}`,sold:s.size,total:t.length}),[t,s]),d=E=>{!t.some(S=>S.id===E.id)?(i([E,...t]),r("New content created successfully.","success")):(i(t.map(S=>S.id===E.id?E:S)),r(`"${E.title}" updated successfully.`,"success")),M()},g=()=>{c({id:`new-${Date.now()}`,title:"",author:"",preview:"",category:qe.Quantum,type:rn.Article,price:0,isPremium:!0,published:!1,createdAt:new Date().toISOString()}),p(!0)},_=E=>{c(E),p(!0)},x=E=>{if(window.confirm("Are you sure you want to delete this item? This action cannot be undone.")){const R=t.find(S=>S.id===E);i(t.filter(S=>S.id!==E)),r(`"${R==null?void 0:R.title}" has been deleted.`,"success")}},M=()=>{p(!1),c(null)};return N.jsxs(N.Fragment,{children:[N.jsxs("div",{className:"space-y-8",children:[N.jsxs("div",{children:[N.jsx("h1",{className:"text-3xl font-bold text-white",children:"Admin Dashboard"}),N.jsx("p",{className:"text-brand-text-muted mt-1",children:"Manage your digital content and view store analytics."})]}),N.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[N.jsx(Ah,{title:"Total Revenue",value:m.revenue,icon:N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01"})})}),N.jsx(Ah,{title:"Items Sold",value:m.sold,icon:N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4z"})})}),N.jsx(Ah,{title:"Total Content",value:m.total,icon:N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})})]}),N.jsxs("div",{className:"bg-brand-surface border border-brand-border rounded-lg p-6 sm:p-8",children:[N.jsxs("div",{className:"flex justify-between items-center mb-6",children:[N.jsx("h2",{className:"text-xl font-bold text-white",children:"Manage Content"}),N.jsxs("button",{onClick:g,className:"bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center gap-2",children:[N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:N.jsx("path",{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"})}),"Create New"]})]}),N.jsx("div",{className:"overflow-x-auto",children:N.jsxs("table",{className:"min-w-full divide-y divide-brand-border",children:[N.jsx("thead",{className:"bg-black/20",children:N.jsxs("tr",{children:[N.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-brand-text-muted uppercase tracking-wider",children:"Title / Author"}),N.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-brand-text-muted uppercase tracking-wider",children:"Price"}),N.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-brand-text-muted uppercase tracking-wider",children:"Status"}),N.jsx("th",{scope:"col",className:"relative px-6 py-3 text-right text-xs font-medium text-brand-text-muted uppercase tracking-wider",children:"Actions"})]})}),N.jsx("tbody",{className:"divide-y divide-brand-border",children:t.map(E=>N.jsxs("tr",{className:"hover:bg-black/10",children:[N.jsxs("td",{className:"px-6 py-4 whitespace-nowrap",children:[N.jsx("div",{className:"text-sm font-medium text-white",children:E.title}),N.jsx("div",{className:"text-sm text-brand-text-muted",children:E.author})]}),N.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-brand-text-muted",children:E.isPremium?`₹${E.price}`:"Free"}),N.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:N.jsx("span",{className:`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${E.published?"bg-green-500/20 text-green-400":"bg-gray-500/20 text-gray-400"}`,children:E.published?"Published":"Draft"})}),N.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4",children:[N.jsx("button",{onClick:()=>_(E),className:"text-indigo-400 hover:text-indigo-300",children:"Edit"}),N.jsx("button",{onClick:()=>x(E.id),className:"text-red-500 hover:text-red-400",children:"Delete"})]})]},E.id))})]})})]})]}),h&&l&&N.jsx(r1,{item:l,onSave:d,onClose:M,showToast:r})]})},l1=({message:r,type:t,onDismiss:i})=>{const[s,l]=ke.useState(!1);ke.useEffect(()=>{l(!0);const g=setTimeout(()=>{l(!1),setTimeout(i,300)},2700);return()=>clearTimeout(g)},[i]);const c="fixed bottom-5 left-1/2 -translate-x-1/2 flex items-center px-6 py-3 rounded-lg text-white shadow-lg transition-all duration-300 ease-in-out z-50",h={success:"bg-green-600/80 backdrop-blur-sm border border-green-500/50",error:"bg-red-600/80 backdrop-blur-sm border border-red-500/50"},p=s?"opacity-100 translate-y-0":"opacity-0 translate-y-5",m=()=>N.jsx("svg",{className:"w-6 h-6 mr-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),d=()=>N.jsx("svg",{className:"w-6 h-6 mr-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})});return N.jsxs("div",{className:`${c} ${h[t]} ${p}`,children:[t==="success"?N.jsx(m,{}):N.jsx(d,{}),N.jsx("span",{className:"font-medium",children:r})]})},c1=[{id:"qa1",type:rn.Article,title:"Quantum Awakening: The Science of Higher Consciousness",author:"Dr. Aris Thorne",preview:"Explore how quantum field theory and consciousness research reveal the science behind spiritual awakening, combining entanglement and non-dual awareness.",category:qe.Quantum,price:79,isPremium:!0,published:!0,pdfUrl:"quantum_awakening_science.pdf",createdAt:"2024-08-01T10:00:00Z"},{id:"vm1",type:rn.Article,title:"Vibrational Mastery: The 3-6-9 Code",author:"Nikola Tesla (Interpreted by A.I.)",preview:"Unlock Nikola Tesla’s 3-6-9 theory, frequency resonance, and how sound and vibration shape reality. Includes frequency maps for manifestation.",category:qe.Spiritual,price:69,isPremium:!0,published:!0,pdfUrl:"vibrational_mastery_369.pdf",createdAt:"2024-07-31T11:00:00Z"},{id:"qeh1",type:rn.Research,title:"Quantum Energy Healing: Science Meets Spirit",author:"The Esoteric Institute",preview:"A bridge between Reiki, Pranic Healing, and Quantum Biology research on energy transfer, with techniques backed by scientific studies.",category:qe.Research,price:129,isPremium:!0,published:!0,pdfUrl:"quantum_energy_healing.pdf",createdAt:"2024-07-30T14:30:00Z"},{id:"hu1",type:rn.Article,title:"The Holographic Universe & Consciousness",author:"Dr. Evelyn Reed",preview:"Delve into the holographic principle and how reality may be a cosmic projection, with references from Bohm, Pribram, and modern physics.",category:qe.Quantum,price:59,isPremium:!0,published:!0,pdfUrl:"holographic_universe_consciousness.pdf",createdAt:"2024-07-29T09:00:00Z"},{id:"qm1",type:rn.Article,title:"Quantum Manifestation: Collapse the Wave",author:"Yash Sharma",preview:"A practical workbook blending the Law of Attraction with Quantum Mechanics to teach scientific manifestation techniques.",category:qe.Spiritual,price:89,isPremium:!0,published:!0,pdfUrl:"quantum_manifestation_workbook.pdf",createdAt:"2024-07-28T18:00:00Z"},{id:"tc1",type:rn.Article,title:"Time & Consciousness: Quantum Time Travel",author:"Dr. Kenji Tanaka",preview:"Explore retrocausality, quantum time loops, and consciousness beyond linear time with meditative exercises for shifting perception.",category:qe.Quantum,price:79,isPremium:!0,published:!0,pdfUrl:"time_consciousness_quantum.pdf",createdAt:"2024-07-27T12:00:00Z"},{id:"sg1",type:rn.Article,title:"Sacred Geometry & Quantum Reality",author:"Ananya Sharma",preview:"Connect fractals, Fibonacci sequences, and quantum fields with spiritual geometry. Includes printable templates.",category:qe.Spiritual,price:59,isPremium:!0,published:!0,pdfUrl:"sacred_geometry_quantum.pdf",createdAt:"2024-07-26T11:00:00Z"},{id:"de1",type:rn.Research,title:"Dark Energy & the Spiritual Void",author:"MIT Consciousness Lab",preview:"How cosmology’s dark energy theory aligns with spiritual concepts of emptiness and void meditation, with insights from Zen and physics.",category:qe.Research,price:99,isPremium:!0,published:!0,pdfUrl:"dark_energy_spiritual_void.pdf",createdAt:"2024-07-25T09:45:00Z"},{id:"qb1",type:rn.Research,title:"Quantum Biology & Spiritual Evolution",author:"Dr. Evelyn Reed",preview:"A report on how microtubules and quantum tunneling in biology hint at cellular consciousness, linking to higher spiritual states.",category:qe.Quantum,price:149,isPremium:!0,published:!0,pdfUrl:"quantum_biology_evolution.pdf",createdAt:"2024-07-24T16:00:00Z"},{id:"fh1",type:rn.Article,title:"Frequency Healing Toolkit",author:"The Esoteric Institute",preview:"A curated set of frequencies (binaural beats, Solfeggio) with physics explanations, guided meditations, and affirmations.",category:qe.Spiritual,price:119,isPremium:!0,published:!0,pdfUrl:"frequency_healing_toolkit.zip",createdAt:"2024-07-23T15:00:00Z"},{id:"q1",type:rn.Article,title:"The Observer Effect in Consciousness",author:"Dr. Evelyn Reed",preview:"Exploring the parallels between quantum mechanics and the subjective experience of reality.",category:qe.Quantum,price:49,isPremium:!0,published:!0,pdfUrl:"consciousness_observer_effect.pdf",createdAt:"2024-05-20T10:00:00Z"},{id:"q2",type:rn.Research,title:"Entanglement and Non-Local Mind",author:"Dr. Kenji Tanaka",preview:"A meta-analysis of studies suggesting consciousness operates beyond classical neural pathways.",category:qe.Quantum,price:99,isPremium:!0,published:!0,pdfUrl:"non_local_mind_entanglement.pdf",createdAt:"2024-06-15T14:30:00Z"},{id:"q3",type:rn.Quote,title:"Planck's Wisdom",author:"Max Planck",preview:'"I regard consciousness as fundamental. I regard matter as derivative from consciousness."',category:qe.Quantum,price:0,isPremium:!1,published:!0,createdAt:"2024-04-01T09:00:00Z"},{id:"s1",type:rn.Article,title:"Vedic Cosmology and Modern Physics",author:"Ananya Sharma",preview:"Discovering the ancient roots of holographic universe theories in Vedic texts.",category:qe.Spiritual,price:29,isPremium:!0,published:!0,pdfUrl:"vedic_cosmology_physics.pdf",createdAt:"2024-07-01T11:00:00Z"},{id:"s2",type:rn.Poem,title:"Ode to the Void",author:"A. Rumi",preview:"From nothingness, all things arise. In silence, the universe speaks...",category:qe.Spiritual,price:0,isPremium:!1,published:!0,createdAt:"2024-03-10T18:00:00Z"},{id:"s3",type:rn.Quote,title:"Gateway to Reality",author:"Carl Jung",preview:'"Who looks outside, dreams; who looks inside, awakes."',category:qe.Spiritual,price:0,isPremium:!1,published:!0,createdAt:"2024-02-22T12:00:00Z"},{id:"r1",type:rn.Research,title:"Neuro-Correlates of Meditative States",author:"MIT Consciousness Lab",preview:"fMRI data on the effects of deep meditation on brainwave patterns and cognitive function.",category:qe.Research,price:129,isPremium:!0,published:!0,pdfUrl:"neuro_correlates_meditation.pdf",createdAt:"2024-07-18T09:45:00Z"},{id:"r2",type:rn.Article,title:"Information Theory of the Soul",author:"Dr. Evelyn Reed",preview:"A theoretical framework for understanding consciousness as a complex informational field.",category:qe.Research,price:59,isPremium:!0,published:!1,pdfUrl:"information_theory_soul.pdf",createdAt:"2024-07-22T16:00:00Z"}],u1=()=>{const[r,t]=ke.useState("Home"),[i,s]=ke.useState(new Set),[l,c]=ke.useState(null),[h,p]=ke.useState(c1),m=ke.useCallback((_,x)=>{c({message:_,type:x}),setTimeout(()=>{c(null)},3e3)},[]),d=_=>{s(x=>new Set(x).add(_.id))},g=ke.useCallback(()=>{const _={purchasedItems:i,onPurchase:d,showToast:m,content:h};switch(r){case"Home":return N.jsx(g0,{..._});case"Quantum":return N.jsx($A,{..._});case"Spiritual":return N.jsx(e1,{..._});case"Research":return N.jsx(i1,{..._});case"My Library":return N.jsx(s1,{..._});case"Admin":return N.jsx(o1,{showToast:m,content:h,setContent:p,purchasedItems:i});default:return N.jsx(g0,{..._})}},[r,i,m,h]);return N.jsxs("div",{className:"bg-transparent text-brand-text font-sans antialiased min-h-screen",children:[N.jsx(kA,{}),N.jsxs("div",{className:"relative z-10 flex flex-col min-h-screen pointer-events-none",children:[N.jsx("div",{className:"pointer-events-auto",children:N.jsx(jA,{currentPage:r,setCurrentPage:t})}),N.jsx("main",{className:"flex-grow py-8",children:N.jsx("div",{className:"container w-full px-4 sm:px-6 lg:px-8 pointer-events-auto mx-auto",children:g()})}),N.jsx("div",{className:"pointer-events-auto",children:N.jsx(WA,{})})]}),l&&N.jsx(l1,{message:l.message,type:l.type,onDismiss:()=>c(null)})]})},Q0=document.getElementById("root");if(!Q0)throw new Error("Could not find root element to mount to");const f1=hy.createRoot(Q0);f1.render(N.jsx(ay.StrictMode,{children:N.jsx(u1,{})}));
