(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))p(h);new MutationObserver(h=>{for(const j of h)if(j.type==="childList")for(const b of j.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&p(b)}).observe(document,{childList:!0,subtree:!0});function l(h){const j={};return h.integrity&&(j.integrity=h.integrity),h.referrerPolicy&&(j.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?j.credentials="include":h.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function p(h){if(h.ep)return;h.ep=!0;const j=l(h);fetch(h.href,j)}})();function Km(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Po={exports:{}},ts={},_o={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd;function Zm(){if(Yd)return te;Yd=1;var i=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),b=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),J=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),W=Symbol.iterator;function Z(f){return f===null||typeof f!="object"?null:(f=W&&f[W]||f["@@iterator"],typeof f=="function"?f:null)}var oe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,G={};function V(f,N,X){this.props=f,this.context=N,this.refs=G,this.updater=X||oe}V.prototype.isReactComponent={},V.prototype.setState=function(f,N){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,N,"setState")},V.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function he(){}he.prototype=V.prototype;function ce(f,N,X){this.props=f,this.context=N,this.refs=G,this.updater=X||oe}var ne=ce.prototype=new he;ne.constructor=ce,Y(ne,V.prototype),ne.isPureReactComponent=!0;var _=Array.isArray,K=Object.prototype.hasOwnProperty,H={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function B(f,N,X){var ee,ie={},se=null,de=null;if(N!=null)for(ee in N.ref!==void 0&&(de=N.ref),N.key!==void 0&&(se=""+N.key),N)K.call(N,ee)&&!M.hasOwnProperty(ee)&&(ie[ee]=N[ee]);var le=arguments.length-2;if(le===1)ie.children=X;else if(1<le){for(var xe=Array(le),Se=0;Se<le;Se++)xe[Se]=arguments[Se+2];ie.children=xe}if(f&&f.defaultProps)for(ee in le=f.defaultProps,le)ie[ee]===void 0&&(ie[ee]=le[ee]);return{$$typeof:i,type:f,key:se,ref:de,props:ie,_owner:H.current}}function ge(f,N){return{$$typeof:i,type:f.type,key:N,ref:f.ref,props:f.props,_owner:f._owner}}function Pe(f){return typeof f=="object"&&f!==null&&f.$$typeof===i}function ae(f){var N={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(X){return N[X]})}var Ie=/\/+/g;function ke(f,N){return typeof f=="object"&&f!==null&&f.key!=null?ae(""+f.key):N.toString(36)}function qe(f,N,X,ee,ie){var se=typeof f;(se==="undefined"||se==="boolean")&&(f=null);var de=!1;if(f===null)de=!0;else switch(se){case"string":case"number":de=!0;break;case"object":switch(f.$$typeof){case i:case c:de=!0}}if(de)return de=f,ie=ie(de),f=ee===""?"."+ke(de,0):ee,_(ie)?(X="",f!=null&&(X=f.replace(Ie,"$&/")+"/"),qe(ie,N,X,"",function(Se){return Se})):ie!=null&&(Pe(ie)&&(ie=ge(ie,X+(!ie.key||de&&de.key===ie.key?"":(""+ie.key).replace(Ie,"$&/")+"/")+f)),N.push(ie)),1;if(de=0,ee=ee===""?".":ee+":",_(f))for(var le=0;le<f.length;le++){se=f[le];var xe=ee+ke(se,le);de+=qe(se,N,X,xe,ie)}else if(xe=Z(f),typeof xe=="function")for(f=xe.call(f),le=0;!(se=f.next()).done;)se=se.value,xe=ee+ke(se,le++),de+=qe(se,N,X,xe,ie);else if(se==="object")throw N=String(f),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return de}function Ze(f,N,X){if(f==null)return f;var ee=[],ie=0;return qe(f,ee,"","",function(se){return N.call(X,se,ie++)}),ee}function Ve(f){if(f._status===-1){var N=f._result;N=N(),N.then(function(X){(f._status===0||f._status===-1)&&(f._status=1,f._result=X)},function(X){(f._status===0||f._status===-1)&&(f._status=2,f._result=X)}),f._status===-1&&(f._status=0,f._result=N)}if(f._status===1)return f._result.default;throw f._result}var ve={current:null},I={transition:null},D={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:I,ReactCurrentOwner:H};function z(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:Ze,forEach:function(f,N,X){Ze(f,function(){N.apply(this,arguments)},X)},count:function(f){var N=0;return Ze(f,function(){N++}),N},toArray:function(f){return Ze(f,function(N){return N})||[]},only:function(f){if(!Pe(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},te.Component=V,te.Fragment=l,te.Profiler=h,te.PureComponent=ce,te.StrictMode=p,te.Suspense=g,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,te.act=z,te.cloneElement=function(f,N,X){if(f==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+f+".");var ee=Y({},f.props),ie=f.key,se=f.ref,de=f._owner;if(N!=null){if(N.ref!==void 0&&(se=N.ref,de=H.current),N.key!==void 0&&(ie=""+N.key),f.type&&f.type.defaultProps)var le=f.type.defaultProps;for(xe in N)K.call(N,xe)&&!M.hasOwnProperty(xe)&&(ee[xe]=N[xe]===void 0&&le!==void 0?le[xe]:N[xe])}var xe=arguments.length-2;if(xe===1)ee.children=X;else if(1<xe){le=Array(xe);for(var Se=0;Se<xe;Se++)le[Se]=arguments[Se+2];ee.children=le}return{$$typeof:i,type:f.type,key:ie,ref:se,props:ee,_owner:de}},te.createContext=function(f){return f={$$typeof:b,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},f.Provider={$$typeof:j,_context:f},f.Consumer=f},te.createElement=B,te.createFactory=function(f){var N=B.bind(null,f);return N.type=f,N},te.createRef=function(){return{current:null}},te.forwardRef=function(f){return{$$typeof:S,render:f}},te.isValidElement=Pe,te.lazy=function(f){return{$$typeof:q,_payload:{_status:-1,_result:f},_init:Ve}},te.memo=function(f,N){return{$$typeof:J,type:f,compare:N===void 0?null:N}},te.startTransition=function(f){var N=I.transition;I.transition={};try{f()}finally{I.transition=N}},te.unstable_act=z,te.useCallback=function(f,N){return ve.current.useCallback(f,N)},te.useContext=function(f){return ve.current.useContext(f)},te.useDebugValue=function(){},te.useDeferredValue=function(f){return ve.current.useDeferredValue(f)},te.useEffect=function(f,N){return ve.current.useEffect(f,N)},te.useId=function(){return ve.current.useId()},te.useImperativeHandle=function(f,N,X){return ve.current.useImperativeHandle(f,N,X)},te.useInsertionEffect=function(f,N){return ve.current.useInsertionEffect(f,N)},te.useLayoutEffect=function(f,N){return ve.current.useLayoutEffect(f,N)},te.useMemo=function(f,N){return ve.current.useMemo(f,N)},te.useReducer=function(f,N,X){return ve.current.useReducer(f,N,X)},te.useRef=function(f){return ve.current.useRef(f)},te.useState=function(f){return ve.current.useState(f)},te.useSyncExternalStore=function(f,N,X){return ve.current.useSyncExternalStore(f,N,X)},te.useTransition=function(){return ve.current.useTransition()},te.version="18.3.1",te}var Kd;function Jo(){return Kd||(Kd=1,_o.exports=Zm()),_o.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd;function Xm(){if(Zd)return ts;Zd=1;var i=Jo(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,h=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function b(S,g,J){var q,W={},Z=null,oe=null;J!==void 0&&(Z=""+J),g.key!==void 0&&(Z=""+g.key),g.ref!==void 0&&(oe=g.ref);for(q in g)p.call(g,q)&&!j.hasOwnProperty(q)&&(W[q]=g[q]);if(S&&S.defaultProps)for(q in g=S.defaultProps,g)W[q]===void 0&&(W[q]=g[q]);return{$$typeof:c,type:S,key:Z,ref:oe,props:W,_owner:h.current}}return ts.Fragment=l,ts.jsx=b,ts.jsxs=b,ts}var Xd;function eh(){return Xd||(Xd=1,Po.exports=Xm()),Po.exports}var r=eh(),ja={},zo={exports:{}},ir={},Ro={exports:{}},Ao={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep;function rh(){return ep||(ep=1,(function(i){function c(I,D){var z=I.length;I.push(D);e:for(;0<z;){var f=z-1>>>1,N=I[f];if(0<h(N,D))I[f]=D,I[z]=N,z=f;else break e}}function l(I){return I.length===0?null:I[0]}function p(I){if(I.length===0)return null;var D=I[0],z=I.pop();if(z!==D){I[0]=z;e:for(var f=0,N=I.length,X=N>>>1;f<X;){var ee=2*(f+1)-1,ie=I[ee],se=ee+1,de=I[se];if(0>h(ie,z))se<N&&0>h(de,ie)?(I[f]=de,I[se]=z,f=se):(I[f]=ie,I[ee]=z,f=ee);else if(se<N&&0>h(de,z))I[f]=de,I[se]=z,f=se;else break e}}return D}function h(I,D){var z=I.sortIndex-D.sortIndex;return z!==0?z:I.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;i.unstable_now=function(){return j.now()}}else{var b=Date,S=b.now();i.unstable_now=function(){return b.now()-S}}var g=[],J=[],q=1,W=null,Z=3,oe=!1,Y=!1,G=!1,V=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(I){for(var D=l(J);D!==null;){if(D.callback===null)p(J);else if(D.startTime<=I)p(J),D.sortIndex=D.expirationTime,c(g,D);else break;D=l(J)}}function _(I){if(G=!1,ne(I),!Y)if(l(g)!==null)Y=!0,Ve(K);else{var D=l(J);D!==null&&ve(_,D.startTime-I)}}function K(I,D){Y=!1,G&&(G=!1,he(B),B=-1),oe=!0;var z=Z;try{for(ne(D),W=l(g);W!==null&&(!(W.expirationTime>D)||I&&!ae());){var f=W.callback;if(typeof f=="function"){W.callback=null,Z=W.priorityLevel;var N=f(W.expirationTime<=D);D=i.unstable_now(),typeof N=="function"?W.callback=N:W===l(g)&&p(g),ne(D)}else p(g);W=l(g)}if(W!==null)var X=!0;else{var ee=l(J);ee!==null&&ve(_,ee.startTime-D),X=!1}return X}finally{W=null,Z=z,oe=!1}}var H=!1,M=null,B=-1,ge=5,Pe=-1;function ae(){return!(i.unstable_now()-Pe<ge)}function Ie(){if(M!==null){var I=i.unstable_now();Pe=I;var D=!0;try{D=M(!0,I)}finally{D?ke():(H=!1,M=null)}}else H=!1}var ke;if(typeof ce=="function")ke=function(){ce(Ie)};else if(typeof MessageChannel!="undefined"){var qe=new MessageChannel,Ze=qe.port2;qe.port1.onmessage=Ie,ke=function(){Ze.postMessage(null)}}else ke=function(){V(Ie,0)};function Ve(I){M=I,H||(H=!0,ke())}function ve(I,D){B=V(function(){I(i.unstable_now())},D)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(I){I.callback=null},i.unstable_continueExecution=function(){Y||oe||(Y=!0,Ve(K))},i.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ge=0<I?Math.floor(1e3/I):5},i.unstable_getCurrentPriorityLevel=function(){return Z},i.unstable_getFirstCallbackNode=function(){return l(g)},i.unstable_next=function(I){switch(Z){case 1:case 2:case 3:var D=3;break;default:D=Z}var z=Z;Z=D;try{return I()}finally{Z=z}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(I,D){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var z=Z;Z=I;try{return D()}finally{Z=z}},i.unstable_scheduleCallback=function(I,D,z){var f=i.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?f+z:f):z=f,I){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=z+N,I={id:q++,callback:D,priorityLevel:I,startTime:z,expirationTime:N,sortIndex:-1},z>f?(I.sortIndex=z,c(J,I),l(g)===null&&I===l(J)&&(G?(he(B),B=-1):G=!0,ve(_,z-f))):(I.sortIndex=N,c(g,I),Y||oe||(Y=!0,Ve(K))),I},i.unstable_shouldYield=ae,i.unstable_wrapCallback=function(I){var D=Z;return function(){var z=Z;Z=D;try{return I.apply(this,arguments)}finally{Z=z}}}})(Ao)),Ao}var rp;function nh(){return rp||(rp=1,Ro.exports=rh()),Ro.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np;function th(){if(np)return ir;np=1;var i=Jo(),c=nh();function l(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,h={};function j(e,n){b(e,n),b(e+"Capture",n)}function b(e,n){for(h[e]=n,e=0;e<n.length;e++)p.add(n[e])}var S=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),g=Object.prototype.hasOwnProperty,J=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,q={},W={};function Z(e){return g.call(W,e)?!0:g.call(q,e)?!1:J.test(e)?W[e]=!0:(q[e]=!0,!1)}function oe(e,n,t,s){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y(e,n,t,s){if(n===null||typeof n=="undefined"||oe(e,n,t,s))return!0;if(s)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function G(e,n,t,s,a,o,d){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=d}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){V[e]=new G(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];V[n]=new G(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){V[e]=new G(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){V[e]=new G(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){V[e]=new G(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){V[e]=new G(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){V[e]=new G(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){V[e]=new G(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){V[e]=new G(e,5,!1,e.toLowerCase(),null,!1,!1)});var he=/[\-:]([a-z])/g;function ce(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(he,ce);V[n]=new G(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(he,ce);V[n]=new G(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(he,ce);V[n]=new G(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){V[e]=new G(e,1,!1,e.toLowerCase(),null,!1,!1)}),V.xlinkHref=new G("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){V[e]=new G(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,n,t,s){var a=V.hasOwnProperty(n)?V[n]:null;(a!==null?a.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Y(n,t,a,s)&&(t=null),s||a===null?Z(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,s=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,s?e.setAttributeNS(s,n,t):e.setAttribute(n,t))))}var _=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,K=Symbol.for("react.element"),H=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),ge=Symbol.for("react.profiler"),Pe=Symbol.for("react.provider"),ae=Symbol.for("react.context"),Ie=Symbol.for("react.forward_ref"),ke=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),Ze=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),I=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var z=Object.assign,f;function N(e){if(f===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);f=n&&n[1]||""}return`
`+f+e}var X=!1;function ee(e,n){if(!e||X)return"";X=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(w){var s=w}Reflect.construct(e,[],n)}else{try{n.call()}catch(w){s=w}e.call(n.prototype)}else{try{throw Error()}catch(w){s=w}e()}}catch(w){if(w&&s&&typeof w.stack=="string"){for(var a=w.stack.split(`
`),o=s.stack.split(`
`),d=a.length-1,u=o.length-1;1<=d&&0<=u&&a[d]!==o[u];)u--;for(;1<=d&&0<=u;d--,u--)if(a[d]!==o[u]){if(d!==1||u!==1)do if(d--,u--,0>u||a[d]!==o[u]){var m=`
`+a[d].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=d&&0<=u);break}}}finally{X=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?N(e):""}function ie(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case H:return"Portal";case ge:return"Profiler";case B:return"StrictMode";case ke:return"Suspense";case qe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ae:return(e.displayName||"Context")+".Consumer";case Pe:return(e._context.displayName||"Context")+".Provider";case Ie:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ze:return n=e.displayName||null,n!==null?n:se(e.type)||"Memo";case Ve:n=e._payload,e=e._init;try{return se(e(n))}catch{}}return null}function de(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(n);case 8:return n===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Se(e){var n=xe(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(d){s=""+d,o.call(this,d)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return s},setValue:function(d){s=""+d},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Kr(e){e._valueTracker||(e._valueTracker=Se(e))}function wn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),s="";return e&&(s=xe(e)?e.checked?"true":"false":e.value),e=s,e!==t?(n.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oa(e,n){var t=n.checked;return z({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function tl(e,n){var t=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;t=le(n.value!=null?n.value:t),e._wrapperState={initialChecked:s,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function sl(e,n){n=n.checked,n!=null&&ne(e,"checked",n,!1)}function Ba(e,n){sl(e,n);var t=le(n.value),s=n.type;if(t!=null)s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Fa(e,n.type,t):n.hasOwnProperty("defaultValue")&&Fa(e,n.type,le(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function al(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Fa(e,n,t){(n!=="number"||Tr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var vt=Array.isArray;function Wn(e,n,t,s){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&s&&(e[t].defaultSelected=!0)}else{for(t=""+le(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Da(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(l(91));return z({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function il(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(l(92));if(vt(t)){if(1<t.length)throw Error(l(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:le(t)}}function ol(e,n){var t=le(n.value),s=le(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),s!=null&&(e.defaultValue=""+s)}function ll(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function cl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wa(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?cl(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ps,dl=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(n,t,s,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,s,a)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ps=ps||document.createElement("div"),ps.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ps.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function jt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var yt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ru=["Webkit","ms","Moz","O"];Object.keys(yt).forEach(function(e){ru.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),yt[n]=yt[e]})});function pl(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||yt.hasOwnProperty(e)&&yt[e]?(""+n).trim():n+"px"}function ul(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var s=t.indexOf("--")===0,a=pl(t,n[t],s);t==="float"&&(t="cssFloat"),s?e.setProperty(t,a):e[t]=a}}var nu=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ga(e,n){if(n){if(nu[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(l(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(l(61))}if(n.style!=null&&typeof n.style!="object")throw Error(l(62))}}function Ha(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ua=null;function $a(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qa=null,Gn=null,Hn=null;function ml(e){if(e=Gt(e)){if(typeof qa!="function")throw Error(l(280));var n=e.stateNode;n&&(n=Rs(n),qa(e.stateNode,e.type,n))}}function hl(e){Gn?Hn?Hn.push(e):Hn=[e]:Gn=e}function xl(){if(Gn){var e=Gn,n=Hn;if(Hn=Gn=null,ml(e),n)for(e=0;e<n.length;e++)ml(n[e])}}function fl(e,n){return e(n)}function gl(){}var Va=!1;function vl(e,n,t){if(Va)return e(n,t);Va=!0;try{return fl(e,n,t)}finally{Va=!1,(Gn!==null||Hn!==null)&&(gl(),xl())}}function wt(e,n){var t=e.stateNode;if(t===null)return null;var s=Rs(t);if(s===null)return null;t=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(l(231,n,typeof t));return t}var Qa=!1;if(S)try{var bt={};Object.defineProperty(bt,"passive",{get:function(){Qa=!0}}),window.addEventListener("test",bt,bt),window.removeEventListener("test",bt,bt)}catch{Qa=!1}function tu(e,n,t,s,a,o,d,u,m){var w=Array.prototype.slice.call(arguments,3);try{n.apply(t,w)}catch(T){this.onError(T)}}var Nt=!1,us=null,ms=!1,Ja=null,su={onError:function(e){Nt=!0,us=e}};function au(e,n,t,s,a,o,d,u,m){Nt=!1,us=null,tu.apply(su,arguments)}function iu(e,n,t,s,a,o,d,u,m){if(au.apply(this,arguments),Nt){if(Nt){var w=us;Nt=!1,us=null}else throw Error(l(198));ms||(ms=!0,Ja=w)}}function bn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function jl(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function yl(e){if(bn(e)!==e)throw Error(l(188))}function ou(e){var n=e.alternate;if(!n){if(n=bn(e),n===null)throw Error(l(188));return n!==e?null:e}for(var t=e,s=n;;){var a=t.return;if(a===null)break;var o=a.alternate;if(o===null){if(s=a.return,s!==null){t=s;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===t)return yl(a),e;if(o===s)return yl(a),n;o=o.sibling}throw Error(l(188))}if(t.return!==s.return)t=a,s=o;else{for(var d=!1,u=a.child;u;){if(u===t){d=!0,t=a,s=o;break}if(u===s){d=!0,s=a,t=o;break}u=u.sibling}if(!d){for(u=o.child;u;){if(u===t){d=!0,t=o,s=a;break}if(u===s){d=!0,s=o,t=a;break}u=u.sibling}if(!d)throw Error(l(189))}}if(t.alternate!==s)throw Error(l(190))}if(t.tag!==3)throw Error(l(188));return t.stateNode.current===t?e:n}function wl(e){return e=ou(e),e!==null?bl(e):null}function bl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=bl(e);if(n!==null)return n;e=e.sibling}return null}var Nl=c.unstable_scheduleCallback,kl=c.unstable_cancelCallback,lu=c.unstable_shouldYield,cu=c.unstable_requestPaint,_e=c.unstable_now,du=c.unstable_getCurrentPriorityLevel,Ya=c.unstable_ImmediatePriority,Tl=c.unstable_UserBlockingPriority,hs=c.unstable_NormalPriority,pu=c.unstable_LowPriority,Sl=c.unstable_IdlePriority,xs=null,Ar=null;function uu(e){if(Ar&&typeof Ar.onCommitFiberRoot=="function")try{Ar.onCommitFiberRoot(xs,e,void 0,(e.current.flags&128)===128)}catch{}}var Sr=Math.clz32?Math.clz32:xu,mu=Math.log,hu=Math.LN2;function xu(e){return e>>>=0,e===0?32:31-(mu(e)/hu|0)|0}var fs=64,gs=4194304;function kt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vs(e,n){var t=e.pendingLanes;if(t===0)return 0;var s=0,a=e.suspendedLanes,o=e.pingedLanes,d=t&268435455;if(d!==0){var u=d&~a;u!==0?s=kt(u):(o&=d,o!==0&&(s=kt(o)))}else d=t&~a,d!==0?s=kt(d):o!==0&&(s=kt(o));if(s===0)return 0;if(n!==0&&n!==s&&(n&a)===0&&(a=s&-s,o=n&-n,a>=o||a===16&&(o&4194240)!==0))return n;if((s&4)!==0&&(s|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)t=31-Sr(n),a=1<<t,s|=e[t],n&=~a;return s}function fu(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gu(e,n){for(var t=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var d=31-Sr(o),u=1<<d,m=a[d];m===-1?((u&t)===0||(u&s)!==0)&&(a[d]=fu(u,n)):m<=n&&(e.expiredLanes|=u),o&=~u}}function Ka(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cl(){var e=fs;return fs<<=1,(fs&4194240)===0&&(fs=64),e}function Za(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Tt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Sr(n),e[n]=t}function vu(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Sr(t),o=1<<a;n[a]=0,s[a]=-1,e[a]=-1,t&=~o}}function Xa(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var s=31-Sr(t),a=1<<s;a&n|e[s]&n&&(e[s]|=n),t&=~a}}var fe=0;function El(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Il,ei,Ml,Pl,_l,ri=!1,js=[],Zr=null,Xr=null,en=null,St=new Map,Ct=new Map,rn=[],ju="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zl(e,n){switch(e){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":Xr=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":St.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ct.delete(n.pointerId)}}function Et(e,n,t,s,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:s,nativeEvent:o,targetContainers:[a]},n!==null&&(n=Gt(n),n!==null&&ei(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function yu(e,n,t,s,a){switch(n){case"focusin":return Zr=Et(Zr,e,n,t,s,a),!0;case"dragenter":return Xr=Et(Xr,e,n,t,s,a),!0;case"mouseover":return en=Et(en,e,n,t,s,a),!0;case"pointerover":var o=a.pointerId;return St.set(o,Et(St.get(o)||null,e,n,t,s,a)),!0;case"gotpointercapture":return o=a.pointerId,Ct.set(o,Et(Ct.get(o)||null,e,n,t,s,a)),!0}return!1}function Rl(e){var n=Nn(e.target);if(n!==null){var t=bn(n);if(t!==null){if(n=t.tag,n===13){if(n=jl(t),n!==null){e.blockedOn=n,_l(e.priority,function(){Ml(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ys(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ti(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var s=new t.constructor(t.type,t);Ua=s,t.target.dispatchEvent(s),Ua=null}else return n=Gt(t),n!==null&&ei(n),e.blockedOn=t,!1;n.shift()}return!0}function Al(e,n,t){ys(e)&&t.delete(n)}function wu(){ri=!1,Zr!==null&&ys(Zr)&&(Zr=null),Xr!==null&&ys(Xr)&&(Xr=null),en!==null&&ys(en)&&(en=null),St.forEach(Al),Ct.forEach(Al)}function It(e,n){e.blockedOn===n&&(e.blockedOn=null,ri||(ri=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,wu)))}function Mt(e){function n(a){return It(a,e)}if(0<js.length){It(js[0],e);for(var t=1;t<js.length;t++){var s=js[t];s.blockedOn===e&&(s.blockedOn=null)}}for(Zr!==null&&It(Zr,e),Xr!==null&&It(Xr,e),en!==null&&It(en,e),St.forEach(n),Ct.forEach(n),t=0;t<rn.length;t++)s=rn[t],s.blockedOn===e&&(s.blockedOn=null);for(;0<rn.length&&(t=rn[0],t.blockedOn===null);)Rl(t),t.blockedOn===null&&rn.shift()}var Un=_.ReactCurrentBatchConfig,ws=!0;function bu(e,n,t,s){var a=fe,o=Un.transition;Un.transition=null;try{fe=1,ni(e,n,t,s)}finally{fe=a,Un.transition=o}}function Nu(e,n,t,s){var a=fe,o=Un.transition;Un.transition=null;try{fe=4,ni(e,n,t,s)}finally{fe=a,Un.transition=o}}function ni(e,n,t,s){if(ws){var a=ti(e,n,t,s);if(a===null)yi(e,n,s,bs,t),zl(e,s);else if(yu(a,e,n,t,s))s.stopPropagation();else if(zl(e,s),n&4&&-1<ju.indexOf(e)){for(;a!==null;){var o=Gt(a);if(o!==null&&Il(o),o=ti(e,n,t,s),o===null&&yi(e,n,s,bs,t),o===a)break;a=o}a!==null&&s.stopPropagation()}else yi(e,n,s,null,t)}}var bs=null;function ti(e,n,t,s){if(bs=null,e=$a(s),e=Nn(e),e!==null)if(n=bn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=jl(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return bs=e,null}function Ll(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(du()){case Ya:return 1;case Tl:return 4;case hs:case pu:return 16;case Sl:return 536870912;default:return 16}default:return 16}}var nn=null,si=null,Ns=null;function Ol(){if(Ns)return Ns;var e,n=si,t=n.length,s,a="value"in nn?nn.value:nn.textContent,o=a.length;for(e=0;e<t&&n[e]===a[e];e++);var d=t-e;for(s=1;s<=d&&n[t-s]===a[o-s];s++);return Ns=a.slice(e,1<s?1-s:void 0)}function ks(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ts(){return!0}function Bl(){return!1}function pr(e){function n(t,s,a,o,d){this._reactName=t,this._targetInst=a,this.type=s,this.nativeEvent=o,this.target=d,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ts:Bl,this.isPropagationStopped=Bl,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ts)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ts)},persist:function(){},isPersistent:Ts}),n}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ai=pr($n),Pt=z({},$n,{view:0,detail:0}),ku=pr(Pt),ii,oi,_t,Ss=z({},Pt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ci,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_t&&(_t&&e.type==="mousemove"?(ii=e.screenX-_t.screenX,oi=e.screenY-_t.screenY):oi=ii=0,_t=e),ii)},movementY:function(e){return"movementY"in e?e.movementY:oi}}),Fl=pr(Ss),Tu=z({},Ss,{dataTransfer:0}),Su=pr(Tu),Cu=z({},Pt,{relatedTarget:0}),li=pr(Cu),Eu=z({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),Iu=pr(Eu),Mu=z({},$n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pu=pr(Mu),_u=z({},$n,{data:0}),Dl=pr(_u),zu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ru={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Au={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lu(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Au[e])?!!n[e]:!1}function ci(){return Lu}var Ou=z({},Pt,{key:function(e){if(e.key){var n=zu[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ks(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ru[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ci,charCode:function(e){return e.type==="keypress"?ks(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ks(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bu=pr(Ou),Fu=z({},Ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wl=pr(Fu),Du=z({},Pt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ci}),Wu=pr(Du),Gu=z({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hu=pr(Gu),Uu=z({},Ss,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$u=pr(Uu),qu=[9,13,27,32],di=S&&"CompositionEvent"in window,zt=null;S&&"documentMode"in document&&(zt=document.documentMode);var Vu=S&&"TextEvent"in window&&!zt,Gl=S&&(!di||zt&&8<zt&&11>=zt),Hl=" ",Ul=!1;function $l(e,n){switch(e){case"keyup":return qu.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ql(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function Qu(e,n){switch(e){case"compositionend":return ql(n);case"keypress":return n.which!==32?null:(Ul=!0,Hl);case"textInput":return e=n.data,e===Hl&&Ul?null:e;default:return null}}function Ju(e,n){if(qn)return e==="compositionend"||!di&&$l(e,n)?(e=Ol(),Ns=si=nn=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gl&&n.locale!=="ko"?null:n.data;default:return null}}var Yu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Yu[e.type]:n==="textarea"}function Ql(e,n,t,s){hl(s),n=Ps(n,"onChange"),0<n.length&&(t=new ai("onChange","change",null,t,s),e.push({event:t,listeners:n}))}var Rt=null,At=null;function Ku(e){uc(e,0)}function Cs(e){var n=Kn(e);if(wn(n))return e}function Zu(e,n){if(e==="change")return n}var Jl=!1;if(S){var pi;if(S){var ui="oninput"in document;if(!ui){var Yl=document.createElement("div");Yl.setAttribute("oninput","return;"),ui=typeof Yl.oninput=="function"}pi=ui}else pi=!1;Jl=pi&&(!document.documentMode||9<document.documentMode)}function Kl(){Rt&&(Rt.detachEvent("onpropertychange",Zl),At=Rt=null)}function Zl(e){if(e.propertyName==="value"&&Cs(At)){var n=[];Ql(n,At,e,$a(e)),vl(Ku,n)}}function Xu(e,n,t){e==="focusin"?(Kl(),Rt=n,At=t,Rt.attachEvent("onpropertychange",Zl)):e==="focusout"&&Kl()}function em(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cs(At)}function rm(e,n){if(e==="click")return Cs(n)}function nm(e,n){if(e==="input"||e==="change")return Cs(n)}function tm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Cr=typeof Object.is=="function"?Object.is:tm;function Lt(e,n){if(Cr(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),s=Object.keys(n);if(t.length!==s.length)return!1;for(s=0;s<t.length;s++){var a=t[s];if(!g.call(n,a)||!Cr(e[a],n[a]))return!1}return!0}function Xl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ec(e,n){var t=Xl(e);e=0;for(var s;t;){if(t.nodeType===3){if(s=e+t.textContent.length,e<=n&&s>=n)return{node:t,offset:n-e};e=s}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Xl(t)}}function rc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?rc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function nc(){for(var e=window,n=Tr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Tr(e.document)}return n}function mi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function sm(e){var n=nc(),t=e.focusedElem,s=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&rc(t.ownerDocument.documentElement,t)){if(s!==null&&mi(t)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,o=Math.min(s.start,a);s=s.end===void 0?o:Math.min(s.end,a),!e.extend&&o>s&&(a=s,s=o,o=a),a=ec(t,o);var d=ec(t,s);a&&d&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),o>s?(e.addRange(n),e.extend(d.node,d.offset)):(n.setEnd(d.node,d.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var am=S&&"documentMode"in document&&11>=document.documentMode,Vn=null,hi=null,Ot=null,xi=!1;function tc(e,n,t){var s=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;xi||Vn==null||Vn!==Tr(s)||(s=Vn,"selectionStart"in s&&mi(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ot&&Lt(Ot,s)||(Ot=s,s=Ps(hi,"onSelect"),0<s.length&&(n=new ai("onSelect","select",null,n,t),e.push({event:n,listeners:s}),n.target=Vn)))}function Es(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Qn={animationend:Es("Animation","AnimationEnd"),animationiteration:Es("Animation","AnimationIteration"),animationstart:Es("Animation","AnimationStart"),transitionend:Es("Transition","TransitionEnd")},fi={},sc={};S&&(sc=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function Is(e){if(fi[e])return fi[e];if(!Qn[e])return e;var n=Qn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in sc)return fi[e]=n[t];return e}var ac=Is("animationend"),ic=Is("animationiteration"),oc=Is("animationstart"),lc=Is("transitionend"),cc=new Map,dc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,n){cc.set(e,n),j(n,[e])}for(var gi=0;gi<dc.length;gi++){var vi=dc[gi],im=vi.toLowerCase(),om=vi[0].toUpperCase()+vi.slice(1);tn(im,"on"+om)}tn(ac,"onAnimationEnd"),tn(ic,"onAnimationIteration"),tn(oc,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(lc,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bt));function pc(e,n,t){var s=e.type||"unknown-event";e.currentTarget=t,iu(s,n,void 0,e),e.currentTarget=null}function uc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var s=e[t],a=s.event;s=s.listeners;e:{var o=void 0;if(n)for(var d=s.length-1;0<=d;d--){var u=s[d],m=u.instance,w=u.currentTarget;if(u=u.listener,m!==o&&a.isPropagationStopped())break e;pc(a,u,w),o=m}else for(d=0;d<s.length;d++){if(u=s[d],m=u.instance,w=u.currentTarget,u=u.listener,m!==o&&a.isPropagationStopped())break e;pc(a,u,w),o=m}}}if(ms)throw e=Ja,ms=!1,Ja=null,e}function we(e,n){var t=n[Si];t===void 0&&(t=n[Si]=new Set);var s=e+"__bubble";t.has(s)||(mc(n,e,2,!1),t.add(s))}function ji(e,n,t){var s=0;n&&(s|=4),mc(t,e,s,n)}var Ms="_reactListening"+Math.random().toString(36).slice(2);function Ft(e){if(!e[Ms]){e[Ms]=!0,p.forEach(function(t){t!=="selectionchange"&&(lm.has(t)||ji(t,!1,e),ji(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ms]||(n[Ms]=!0,ji("selectionchange",!1,n))}}function mc(e,n,t,s){switch(Ll(n)){case 1:var a=bu;break;case 4:a=Nu;break;default:a=ni}t=a.bind(null,n,t,e),a=void 0,!Qa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function yi(e,n,t,s,a){var o=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var d=s.tag;if(d===3||d===4){var u=s.stateNode.containerInfo;if(u===a||u.nodeType===8&&u.parentNode===a)break;if(d===4)for(d=s.return;d!==null;){var m=d.tag;if((m===3||m===4)&&(m=d.stateNode.containerInfo,m===a||m.nodeType===8&&m.parentNode===a))return;d=d.return}for(;u!==null;){if(d=Nn(u),d===null)return;if(m=d.tag,m===5||m===6){s=o=d;continue e}u=u.parentNode}}s=s.return}vl(function(){var w=o,T=$a(t),C=[];e:{var k=cc.get(e);if(k!==void 0){var R=ai,L=e;switch(e){case"keypress":if(ks(t)===0)break e;case"keydown":case"keyup":R=Bu;break;case"focusin":L="focus",R=li;break;case"focusout":L="blur",R=li;break;case"beforeblur":case"afterblur":R=li;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Fl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Su;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Wu;break;case ac:case ic:case oc:R=Iu;break;case lc:R=Hu;break;case"scroll":R=ku;break;case"wheel":R=$u;break;case"copy":case"cut":case"paste":R=Pu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Wl}var O=(n&4)!==0,ze=!O&&e==="scroll",v=O?k!==null?k+"Capture":null:k;O=[];for(var x=w,y;x!==null;){y=x;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,v!==null&&(E=wt(x,v),E!=null&&O.push(Dt(x,E,y)))),ze)break;x=x.return}0<O.length&&(k=new R(k,L,null,t,T),C.push({event:k,listeners:O}))}}if((n&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",k&&t!==Ua&&(L=t.relatedTarget||t.fromElement)&&(Nn(L)||L[Wr]))break e;if((R||k)&&(k=T.window===T?T:(k=T.ownerDocument)?k.defaultView||k.parentWindow:window,R?(L=t.relatedTarget||t.toElement,R=w,L=L?Nn(L):null,L!==null&&(ze=bn(L),L!==ze||L.tag!==5&&L.tag!==6)&&(L=null)):(R=null,L=w),R!==L)){if(O=Fl,E="onMouseLeave",v="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(O=Wl,E="onPointerLeave",v="onPointerEnter",x="pointer"),ze=R==null?k:Kn(R),y=L==null?k:Kn(L),k=new O(E,x+"leave",R,t,T),k.target=ze,k.relatedTarget=y,E=null,Nn(T)===w&&(O=new O(v,x+"enter",L,t,T),O.target=y,O.relatedTarget=ze,E=O),ze=E,R&&L)r:{for(O=R,v=L,x=0,y=O;y;y=Jn(y))x++;for(y=0,E=v;E;E=Jn(E))y++;for(;0<x-y;)O=Jn(O),x--;for(;0<y-x;)v=Jn(v),y--;for(;x--;){if(O===v||v!==null&&O===v.alternate)break r;O=Jn(O),v=Jn(v)}O=null}else O=null;R!==null&&hc(C,k,R,O,!1),L!==null&&ze!==null&&hc(C,ze,L,O,!0)}}e:{if(k=w?Kn(w):window,R=k.nodeName&&k.nodeName.toLowerCase(),R==="select"||R==="input"&&k.type==="file")var F=Zu;else if(Vl(k))if(Jl)F=nm;else{F=em;var U=Xu}else(R=k.nodeName)&&R.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(F=rm);if(F&&(F=F(e,w))){Ql(C,F,t,T);break e}U&&U(e,k,w),e==="focusout"&&(U=k._wrapperState)&&U.controlled&&k.type==="number"&&Fa(k,"number",k.value)}switch(U=w?Kn(w):window,e){case"focusin":(Vl(U)||U.contentEditable==="true")&&(Vn=U,hi=w,Ot=null);break;case"focusout":Ot=hi=Vn=null;break;case"mousedown":xi=!0;break;case"contextmenu":case"mouseup":case"dragend":xi=!1,tc(C,t,T);break;case"selectionchange":if(am)break;case"keydown":case"keyup":tc(C,t,T)}var $;if(di)e:{switch(e){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else qn?$l(e,t)&&(Q="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Q="onCompositionStart");Q&&(Gl&&t.locale!=="ko"&&(qn||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&qn&&($=Ol()):(nn=T,si="value"in nn?nn.value:nn.textContent,qn=!0)),U=Ps(w,Q),0<U.length&&(Q=new Dl(Q,e,null,t,T),C.push({event:Q,listeners:U}),$?Q.data=$:($=ql(t),$!==null&&(Q.data=$)))),($=Vu?Qu(e,t):Ju(e,t))&&(w=Ps(w,"onBeforeInput"),0<w.length&&(T=new Dl("onBeforeInput","beforeinput",null,t,T),C.push({event:T,listeners:w}),T.data=$))}uc(C,n)})}function Dt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ps(e,n){for(var t=n+"Capture",s=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=wt(e,t),o!=null&&s.unshift(Dt(e,o,a)),o=wt(e,n),o!=null&&s.push(Dt(e,o,a))),e=e.return}return s}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hc(e,n,t,s,a){for(var o=n._reactName,d=[];t!==null&&t!==s;){var u=t,m=u.alternate,w=u.stateNode;if(m!==null&&m===s)break;u.tag===5&&w!==null&&(u=w,a?(m=wt(t,o),m!=null&&d.unshift(Dt(t,m,u))):a||(m=wt(t,o),m!=null&&d.push(Dt(t,m,u)))),t=t.return}d.length!==0&&e.push({event:n,listeners:d})}var cm=/\r\n?/g,dm=/\u0000|\uFFFD/g;function xc(e){return(typeof e=="string"?e:""+e).replace(cm,`
`).replace(dm,"")}function _s(e,n,t){if(n=xc(n),xc(e)!==n&&t)throw Error(l(425))}function zs(){}var wi=null,bi=null;function Ni(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ki=typeof setTimeout=="function"?setTimeout:void 0,pm=typeof clearTimeout=="function"?clearTimeout:void 0,fc=typeof Promise=="function"?Promise:void 0,um=typeof queueMicrotask=="function"?queueMicrotask:typeof fc!="undefined"?function(e){return fc.resolve(null).then(e).catch(mm)}:ki;function mm(e){setTimeout(function(){throw e})}function Ti(e,n){var t=n,s=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(s===0){e.removeChild(a),Mt(n);return}s--}else t!=="$"&&t!=="$?"&&t!=="$!"||s++;t=a}while(t);Mt(n)}function sn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function gc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),Lr="__reactFiber$"+Yn,Wt="__reactProps$"+Yn,Wr="__reactContainer$"+Yn,Si="__reactEvents$"+Yn,hm="__reactListeners$"+Yn,xm="__reactHandles$"+Yn;function Nn(e){var n=e[Lr];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Wr]||t[Lr]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=gc(e);e!==null;){if(t=e[Lr])return t;e=gc(e)}return n}e=t,t=e.parentNode}return null}function Gt(e){return e=e[Lr]||e[Wr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Rs(e){return e[Wt]||null}var Ci=[],Zn=-1;function an(e){return{current:e}}function be(e){0>Zn||(e.current=Ci[Zn],Ci[Zn]=null,Zn--)}function je(e,n){Zn++,Ci[Zn]=e.current,e.current=n}var on={},Qe=an(on),rr=an(!1),kn=on;function Xn(e,n){var t=e.type.contextTypes;if(!t)return on;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in t)a[o]=n[o];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function nr(e){return e=e.childContextTypes,e!=null}function As(){be(rr),be(Qe)}function vc(e,n,t){if(Qe.current!==on)throw Error(l(168));je(Qe,n),je(rr,t)}function jc(e,n,t){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return t;s=s.getChildContext();for(var a in s)if(!(a in n))throw Error(l(108,de(e)||"Unknown",a));return z({},t,s)}function Ls(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,kn=Qe.current,je(Qe,e),je(rr,rr.current),!0}function yc(e,n,t){var s=e.stateNode;if(!s)throw Error(l(169));t?(e=jc(e,n,kn),s.__reactInternalMemoizedMergedChildContext=e,be(rr),be(Qe),je(Qe,e)):be(rr),je(rr,t)}var Gr=null,Os=!1,Ei=!1;function wc(e){Gr===null?Gr=[e]:Gr.push(e)}function fm(e){Os=!0,wc(e)}function ln(){if(!Ei&&Gr!==null){Ei=!0;var e=0,n=fe;try{var t=Gr;for(fe=1;e<t.length;e++){var s=t[e];do s=s(!0);while(s!==null)}Gr=null,Os=!1}catch(a){throw Gr!==null&&(Gr=Gr.slice(e+1)),Nl(Ya,ln),a}finally{fe=n,Ei=!1}}return null}var et=[],rt=0,Bs=null,Fs=0,vr=[],jr=0,Tn=null,Hr=1,Ur="";function Sn(e,n){et[rt++]=Fs,et[rt++]=Bs,Bs=e,Fs=n}function bc(e,n,t){vr[jr++]=Hr,vr[jr++]=Ur,vr[jr++]=Tn,Tn=e;var s=Hr;e=Ur;var a=32-Sr(s)-1;s&=~(1<<a),t+=1;var o=32-Sr(n)+a;if(30<o){var d=a-a%5;o=(s&(1<<d)-1).toString(32),s>>=d,a-=d,Hr=1<<32-Sr(n)+a|t<<a|s,Ur=o+e}else Hr=1<<o|t<<a|s,Ur=e}function Ii(e){e.return!==null&&(Sn(e,1),bc(e,1,0))}function Mi(e){for(;e===Bs;)Bs=et[--rt],et[rt]=null,Fs=et[--rt],et[rt]=null;for(;e===Tn;)Tn=vr[--jr],vr[jr]=null,Ur=vr[--jr],vr[jr]=null,Hr=vr[--jr],vr[jr]=null}var ur=null,mr=null,Te=!1,Er=null;function Nc(e,n){var t=Nr(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function kc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ur=e,mr=sn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ur=e,mr=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Tn!==null?{id:Hr,overflow:Ur}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Nr(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ur=e,mr=null,!0):!1;default:return!1}}function Pi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _i(e){if(Te){var n=mr;if(n){var t=n;if(!kc(e,n)){if(Pi(e))throw Error(l(418));n=sn(t.nextSibling);var s=ur;n&&kc(e,n)?Nc(s,t):(e.flags=e.flags&-4097|2,Te=!1,ur=e)}}else{if(Pi(e))throw Error(l(418));e.flags=e.flags&-4097|2,Te=!1,ur=e}}}function Tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ur=e}function Ds(e){if(e!==ur)return!1;if(!Te)return Tc(e),Te=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ni(e.type,e.memoizedProps)),n&&(n=mr)){if(Pi(e))throw Sc(),Error(l(418));for(;n;)Nc(e,n),n=sn(n.nextSibling)}if(Tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){mr=sn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}mr=null}}else mr=ur?sn(e.stateNode.nextSibling):null;return!0}function Sc(){for(var e=mr;e;)e=sn(e.nextSibling)}function nt(){mr=ur=null,Te=!1}function zi(e){Er===null?Er=[e]:Er.push(e)}var gm=_.ReactCurrentBatchConfig;function Ht(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(l(309));var s=t.stateNode}if(!s)throw Error(l(147,e));var a=s,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(d){var u=a.refs;d===null?delete u[o]:u[o]=d},n._stringRef=o,n)}if(typeof e!="string")throw Error(l(284));if(!t._owner)throw Error(l(290,e))}return e}function Ws(e,n){throw e=Object.prototype.toString.call(n),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Cc(e){var n=e._init;return n(e._payload)}function Ec(e){function n(v,x){if(e){var y=v.deletions;y===null?(v.deletions=[x],v.flags|=16):y.push(x)}}function t(v,x){if(!e)return null;for(;x!==null;)n(v,x),x=x.sibling;return null}function s(v,x){for(v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function a(v,x){return v=fn(v,x),v.index=0,v.sibling=null,v}function o(v,x,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<x?(v.flags|=2,x):y):(v.flags|=2,x)):(v.flags|=1048576,x)}function d(v){return e&&v.alternate===null&&(v.flags|=2),v}function u(v,x,y,E){return x===null||x.tag!==6?(x=To(y,v.mode,E),x.return=v,x):(x=a(x,y),x.return=v,x)}function m(v,x,y,E){var F=y.type;return F===M?T(v,x,y.props.children,E,y.key):x!==null&&(x.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ve&&Cc(F)===x.type)?(E=a(x,y.props),E.ref=Ht(v,x,y),E.return=v,E):(E=pa(y.type,y.key,y.props,null,v.mode,E),E.ref=Ht(v,x,y),E.return=v,E)}function w(v,x,y,E){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=So(y,v.mode,E),x.return=v,x):(x=a(x,y.children||[]),x.return=v,x)}function T(v,x,y,E,F){return x===null||x.tag!==7?(x=Rn(y,v.mode,E,F),x.return=v,x):(x=a(x,y),x.return=v,x)}function C(v,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=To(""+x,v.mode,y),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case K:return y=pa(x.type,x.key,x.props,null,v.mode,y),y.ref=Ht(v,null,x),y.return=v,y;case H:return x=So(x,v.mode,y),x.return=v,x;case Ve:var E=x._init;return C(v,E(x._payload),y)}if(vt(x)||D(x))return x=Rn(x,v.mode,y,null),x.return=v,x;Ws(v,x)}return null}function k(v,x,y,E){var F=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return F!==null?null:u(v,x,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case K:return y.key===F?m(v,x,y,E):null;case H:return y.key===F?w(v,x,y,E):null;case Ve:return F=y._init,k(v,x,F(y._payload),E)}if(vt(y)||D(y))return F!==null?null:T(v,x,y,E,null);Ws(v,y)}return null}function R(v,x,y,E,F){if(typeof E=="string"&&E!==""||typeof E=="number")return v=v.get(y)||null,u(x,v,""+E,F);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case K:return v=v.get(E.key===null?y:E.key)||null,m(x,v,E,F);case H:return v=v.get(E.key===null?y:E.key)||null,w(x,v,E,F);case Ve:var U=E._init;return R(v,x,y,U(E._payload),F)}if(vt(E)||D(E))return v=v.get(y)||null,T(x,v,E,F,null);Ws(x,E)}return null}function L(v,x,y,E){for(var F=null,U=null,$=x,Q=x=0,Ge=null;$!==null&&Q<y.length;Q++){$.index>Q?(Ge=$,$=null):Ge=$.sibling;var ue=k(v,$,y[Q],E);if(ue===null){$===null&&($=Ge);break}e&&$&&ue.alternate===null&&n(v,$),x=o(ue,x,Q),U===null?F=ue:U.sibling=ue,U=ue,$=Ge}if(Q===y.length)return t(v,$),Te&&Sn(v,Q),F;if($===null){for(;Q<y.length;Q++)$=C(v,y[Q],E),$!==null&&(x=o($,x,Q),U===null?F=$:U.sibling=$,U=$);return Te&&Sn(v,Q),F}for($=s(v,$);Q<y.length;Q++)Ge=R($,v,Q,y[Q],E),Ge!==null&&(e&&Ge.alternate!==null&&$.delete(Ge.key===null?Q:Ge.key),x=o(Ge,x,Q),U===null?F=Ge:U.sibling=Ge,U=Ge);return e&&$.forEach(function(gn){return n(v,gn)}),Te&&Sn(v,Q),F}function O(v,x,y,E){var F=D(y);if(typeof F!="function")throw Error(l(150));if(y=F.call(y),y==null)throw Error(l(151));for(var U=F=null,$=x,Q=x=0,Ge=null,ue=y.next();$!==null&&!ue.done;Q++,ue=y.next()){$.index>Q?(Ge=$,$=null):Ge=$.sibling;var gn=k(v,$,ue.value,E);if(gn===null){$===null&&($=Ge);break}e&&$&&gn.alternate===null&&n(v,$),x=o(gn,x,Q),U===null?F=gn:U.sibling=gn,U=gn,$=Ge}if(ue.done)return t(v,$),Te&&Sn(v,Q),F;if($===null){for(;!ue.done;Q++,ue=y.next())ue=C(v,ue.value,E),ue!==null&&(x=o(ue,x,Q),U===null?F=ue:U.sibling=ue,U=ue);return Te&&Sn(v,Q),F}for($=s(v,$);!ue.done;Q++,ue=y.next())ue=R($,v,Q,ue.value,E),ue!==null&&(e&&ue.alternate!==null&&$.delete(ue.key===null?Q:ue.key),x=o(ue,x,Q),U===null?F=ue:U.sibling=ue,U=ue);return e&&$.forEach(function(Ym){return n(v,Ym)}),Te&&Sn(v,Q),F}function ze(v,x,y,E){if(typeof y=="object"&&y!==null&&y.type===M&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case K:e:{for(var F=y.key,U=x;U!==null;){if(U.key===F){if(F=y.type,F===M){if(U.tag===7){t(v,U.sibling),x=a(U,y.props.children),x.return=v,v=x;break e}}else if(U.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ve&&Cc(F)===U.type){t(v,U.sibling),x=a(U,y.props),x.ref=Ht(v,U,y),x.return=v,v=x;break e}t(v,U);break}else n(v,U);U=U.sibling}y.type===M?(x=Rn(y.props.children,v.mode,E,y.key),x.return=v,v=x):(E=pa(y.type,y.key,y.props,null,v.mode,E),E.ref=Ht(v,x,y),E.return=v,v=E)}return d(v);case H:e:{for(U=y.key;x!==null;){if(x.key===U)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){t(v,x.sibling),x=a(x,y.children||[]),x.return=v,v=x;break e}else{t(v,x);break}else n(v,x);x=x.sibling}x=So(y,v.mode,E),x.return=v,v=x}return d(v);case Ve:return U=y._init,ze(v,x,U(y._payload),E)}if(vt(y))return L(v,x,y,E);if(D(y))return O(v,x,y,E);Ws(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(t(v,x.sibling),x=a(x,y),x.return=v,v=x):(t(v,x),x=To(y,v.mode,E),x.return=v,v=x),d(v)):t(v,x)}return ze}var tt=Ec(!0),Ic=Ec(!1),Gs=an(null),Hs=null,st=null,Ri=null;function Ai(){Ri=st=Hs=null}function Li(e){var n=Gs.current;be(Gs),e._currentValue=n}function Oi(e,n,t){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===t)break;e=e.return}}function at(e,n){Hs=e,Ri=st=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(tr=!0),e.firstContext=null)}function yr(e){var n=e._currentValue;if(Ri!==e)if(e={context:e,memoizedValue:n,next:null},st===null){if(Hs===null)throw Error(l(308));st=e,Hs.dependencies={lanes:0,firstContext:e}}else st=st.next=e;return n}var Cn=null;function Bi(e){Cn===null?Cn=[e]:Cn.push(e)}function Mc(e,n,t,s){var a=n.interleaved;return a===null?(t.next=t,Bi(n)):(t.next=a.next,a.next=t),n.interleaved=t,$r(e,s)}function $r(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var cn=!1;function Fi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qr(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function dn(e,n,t){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(pe&2)!==0){var a=s.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),s.pending=n,$r(e,t)}return a=s.interleaved,a===null?(n.next=n,Bi(s)):(n.next=a.next,a.next=n),s.interleaved=n,$r(e,t)}function Us(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,Xa(e,t)}}function _c(e,n){var t=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,t===s)){var a=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var d={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?a=o=d:o=o.next=d,t=t.next}while(t!==null);o===null?a=o=n:o=o.next=n}else a=o=n;t={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:s.shared,effects:s.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function $s(e,n,t,s){var a=e.updateQueue;cn=!1;var o=a.firstBaseUpdate,d=a.lastBaseUpdate,u=a.shared.pending;if(u!==null){a.shared.pending=null;var m=u,w=m.next;m.next=null,d===null?o=w:d.next=w,d=m;var T=e.alternate;T!==null&&(T=T.updateQueue,u=T.lastBaseUpdate,u!==d&&(u===null?T.firstBaseUpdate=w:u.next=w,T.lastBaseUpdate=m))}if(o!==null){var C=a.baseState;d=0,T=w=m=null,u=o;do{var k=u.lane,R=u.eventTime;if((s&k)===k){T!==null&&(T=T.next={eventTime:R,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var L=e,O=u;switch(k=n,R=t,O.tag){case 1:if(L=O.payload,typeof L=="function"){C=L.call(R,C,k);break e}C=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=O.payload,k=typeof L=="function"?L.call(R,C,k):L,k==null)break e;C=z({},C,k);break e;case 2:cn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,k=a.effects,k===null?a.effects=[u]:k.push(u))}else R={eventTime:R,lane:k,tag:u.tag,payload:u.payload,callback:u.callback,next:null},T===null?(w=T=R,m=C):T=T.next=R,d|=k;if(u=u.next,u===null){if(u=a.shared.pending,u===null)break;k=u,u=k.next,k.next=null,a.lastBaseUpdate=k,a.shared.pending=null}}while(!0);if(T===null&&(m=C),a.baseState=m,a.firstBaseUpdate=w,a.lastBaseUpdate=T,n=a.shared.interleaved,n!==null){a=n;do d|=a.lane,a=a.next;while(a!==n)}else o===null&&(a.shared.lanes=0);Mn|=d,e.lanes=d,e.memoizedState=C}}function zc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],a=s.callback;if(a!==null){if(s.callback=null,s=t,typeof a!="function")throw Error(l(191,a));a.call(s)}}}var Ut={},Or=an(Ut),$t=an(Ut),qt=an(Ut);function En(e){if(e===Ut)throw Error(l(174));return e}function Di(e,n){switch(je(qt,n),je($t,e),je(Or,Ut),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Wa(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Wa(n,e)}be(Or),je(Or,n)}function it(){be(Or),be($t),be(qt)}function Rc(e){En(qt.current);var n=En(Or.current),t=Wa(n,e.type);n!==t&&(je($t,e),je(Or,t))}function Wi(e){$t.current===e&&(be(Or),be($t))}var Ce=an(0);function qs(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gi=[];function Hi(){for(var e=0;e<Gi.length;e++)Gi[e]._workInProgressVersionPrimary=null;Gi.length=0}var Vs=_.ReactCurrentDispatcher,Ui=_.ReactCurrentBatchConfig,In=0,Ee=null,Oe=null,De=null,Qs=!1,Vt=!1,Qt=0,vm=0;function Je(){throw Error(l(321))}function $i(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Cr(e[t],n[t]))return!1;return!0}function qi(e,n,t,s,a,o){if(In=o,Ee=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Vs.current=e===null||e.memoizedState===null?bm:Nm,e=t(s,a),Vt){o=0;do{if(Vt=!1,Qt=0,25<=o)throw Error(l(301));o+=1,De=Oe=null,n.updateQueue=null,Vs.current=km,e=t(s,a)}while(Vt)}if(Vs.current=Ks,n=Oe!==null&&Oe.next!==null,In=0,De=Oe=Ee=null,Qs=!1,n)throw Error(l(300));return e}function Vi(){var e=Qt!==0;return Qt=0,e}function Br(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?Ee.memoizedState=De=e:De=De.next=e,De}function wr(){if(Oe===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var n=De===null?Ee.memoizedState:De.next;if(n!==null)De=n,Oe=e;else{if(e===null)throw Error(l(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},De===null?Ee.memoizedState=De=e:De=De.next=e}return De}function Jt(e,n){return typeof n=="function"?n(e):n}function Qi(e){var n=wr(),t=n.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var s=Oe,a=s.baseQueue,o=t.pending;if(o!==null){if(a!==null){var d=a.next;a.next=o.next,o.next=d}s.baseQueue=a=o,t.pending=null}if(a!==null){o=a.next,s=s.baseState;var u=d=null,m=null,w=o;do{var T=w.lane;if((In&T)===T)m!==null&&(m=m.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),s=w.hasEagerState?w.eagerState:e(s,w.action);else{var C={lane:T,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};m===null?(u=m=C,d=s):m=m.next=C,Ee.lanes|=T,Mn|=T}w=w.next}while(w!==null&&w!==o);m===null?d=s:m.next=u,Cr(s,n.memoizedState)||(tr=!0),n.memoizedState=s,n.baseState=d,n.baseQueue=m,t.lastRenderedState=s}if(e=t.interleaved,e!==null){a=e;do o=a.lane,Ee.lanes|=o,Mn|=o,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ji(e){var n=wr(),t=n.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var s=t.dispatch,a=t.pending,o=n.memoizedState;if(a!==null){t.pending=null;var d=a=a.next;do o=e(o,d.action),d=d.next;while(d!==a);Cr(o,n.memoizedState)||(tr=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,s]}function Ac(){}function Lc(e,n){var t=Ee,s=wr(),a=n(),o=!Cr(s.memoizedState,a);if(o&&(s.memoizedState=a,tr=!0),s=s.queue,Yi(Fc.bind(null,t,s,e),[e]),s.getSnapshot!==n||o||De!==null&&De.memoizedState.tag&1){if(t.flags|=2048,Yt(9,Bc.bind(null,t,s,a,n),void 0,null),We===null)throw Error(l(349));(In&30)!==0||Oc(t,n,a)}return a}function Oc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Ee.updateQueue,n===null?(n={lastEffect:null,stores:null},Ee.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Bc(e,n,t,s){n.value=t,n.getSnapshot=s,Dc(n)&&Wc(e)}function Fc(e,n,t){return t(function(){Dc(n)&&Wc(e)})}function Dc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Cr(e,t)}catch{return!0}}function Wc(e){var n=$r(e,1);n!==null&&_r(n,e,1,-1)}function Gc(e){var n=Br();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:e},n.queue=e,e=e.dispatch=wm.bind(null,Ee,e),[n.memoizedState,e]}function Yt(e,n,t,s){return e={tag:e,create:n,destroy:t,deps:s,next:null},n=Ee.updateQueue,n===null?(n={lastEffect:null,stores:null},Ee.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(s=t.next,t.next=e,e.next=s,n.lastEffect=e)),e}function Hc(){return wr().memoizedState}function Js(e,n,t,s){var a=Br();Ee.flags|=e,a.memoizedState=Yt(1|n,t,void 0,s===void 0?null:s)}function Ys(e,n,t,s){var a=wr();s=s===void 0?null:s;var o=void 0;if(Oe!==null){var d=Oe.memoizedState;if(o=d.destroy,s!==null&&$i(s,d.deps)){a.memoizedState=Yt(n,t,o,s);return}}Ee.flags|=e,a.memoizedState=Yt(1|n,t,o,s)}function Uc(e,n){return Js(8390656,8,e,n)}function Yi(e,n){return Ys(2048,8,e,n)}function $c(e,n){return Ys(4,2,e,n)}function qc(e,n){return Ys(4,4,e,n)}function Vc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Qc(e,n,t){return t=t!=null?t.concat([e]):null,Ys(4,4,Vc.bind(null,n,e),t)}function Ki(){}function Jc(e,n){var t=wr();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&$i(n,s[1])?s[0]:(t.memoizedState=[e,n],e)}function Yc(e,n){var t=wr();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&$i(n,s[1])?s[0]:(e=e(),t.memoizedState=[e,n],e)}function Kc(e,n,t){return(In&21)===0?(e.baseState&&(e.baseState=!1,tr=!0),e.memoizedState=t):(Cr(t,n)||(t=Cl(),Ee.lanes|=t,Mn|=t,e.baseState=!0),n)}function jm(e,n){var t=fe;fe=t!==0&&4>t?t:4,e(!0);var s=Ui.transition;Ui.transition={};try{e(!1),n()}finally{fe=t,Ui.transition=s}}function Zc(){return wr().memoizedState}function ym(e,n,t){var s=hn(e);if(t={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null},Xc(e))ed(n,t);else if(t=Mc(e,n,t,s),t!==null){var a=er();_r(t,e,s,a),rd(t,n,s)}}function wm(e,n,t){var s=hn(e),a={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null};if(Xc(e))ed(n,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var d=n.lastRenderedState,u=o(d,t);if(a.hasEagerState=!0,a.eagerState=u,Cr(u,d)){var m=n.interleaved;m===null?(a.next=a,Bi(n)):(a.next=m.next,m.next=a),n.interleaved=a;return}}catch{}finally{}t=Mc(e,n,a,s),t!==null&&(a=er(),_r(t,e,s,a),rd(t,n,s))}}function Xc(e){var n=e.alternate;return e===Ee||n!==null&&n===Ee}function ed(e,n){Vt=Qs=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function rd(e,n,t){if((t&4194240)!==0){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,Xa(e,t)}}var Ks={readContext:yr,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},bm={readContext:yr,useCallback:function(e,n){return Br().memoizedState=[e,n===void 0?null:n],e},useContext:yr,useEffect:Uc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Js(4194308,4,Vc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Js(4194308,4,e,n)},useInsertionEffect:function(e,n){return Js(4,2,e,n)},useMemo:function(e,n){var t=Br();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var s=Br();return n=t!==void 0?t(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=ym.bind(null,Ee,e),[s.memoizedState,e]},useRef:function(e){var n=Br();return e={current:e},n.memoizedState=e},useState:Gc,useDebugValue:Ki,useDeferredValue:function(e){return Br().memoizedState=e},useTransition:function(){var e=Gc(!1),n=e[0];return e=jm.bind(null,e[1]),Br().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var s=Ee,a=Br();if(Te){if(t===void 0)throw Error(l(407));t=t()}else{if(t=n(),We===null)throw Error(l(349));(In&30)!==0||Oc(s,n,t)}a.memoizedState=t;var o={value:t,getSnapshot:n};return a.queue=o,Uc(Fc.bind(null,s,o,e),[e]),s.flags|=2048,Yt(9,Bc.bind(null,s,o,t,n),void 0,null),t},useId:function(){var e=Br(),n=We.identifierPrefix;if(Te){var t=Ur,s=Hr;t=(s&~(1<<32-Sr(s)-1)).toString(32)+t,n=":"+n+"R"+t,t=Qt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=vm++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Nm={readContext:yr,useCallback:Jc,useContext:yr,useEffect:Yi,useImperativeHandle:Qc,useInsertionEffect:$c,useLayoutEffect:qc,useMemo:Yc,useReducer:Qi,useRef:Hc,useState:function(){return Qi(Jt)},useDebugValue:Ki,useDeferredValue:function(e){var n=wr();return Kc(n,Oe.memoizedState,e)},useTransition:function(){var e=Qi(Jt)[0],n=wr().memoizedState;return[e,n]},useMutableSource:Ac,useSyncExternalStore:Lc,useId:Zc,unstable_isNewReconciler:!1},km={readContext:yr,useCallback:Jc,useContext:yr,useEffect:Yi,useImperativeHandle:Qc,useInsertionEffect:$c,useLayoutEffect:qc,useMemo:Yc,useReducer:Ji,useRef:Hc,useState:function(){return Ji(Jt)},useDebugValue:Ki,useDeferredValue:function(e){var n=wr();return Oe===null?n.memoizedState=e:Kc(n,Oe.memoizedState,e)},useTransition:function(){var e=Ji(Jt)[0],n=wr().memoizedState;return[e,n]},useMutableSource:Ac,useSyncExternalStore:Lc,useId:Zc,unstable_isNewReconciler:!1};function Ir(e,n){if(e&&e.defaultProps){n=z({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Zi(e,n,t,s){n=e.memoizedState,t=t(s,n),t=t==null?n:z({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Zs={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var s=er(),a=hn(e),o=qr(s,a);o.payload=n,t!=null&&(o.callback=t),n=dn(e,o,a),n!==null&&(_r(n,e,a,s),Us(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var s=er(),a=hn(e),o=qr(s,a);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=dn(e,o,a),n!==null&&(_r(n,e,a,s),Us(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=er(),s=hn(e),a=qr(t,s);a.tag=2,n!=null&&(a.callback=n),n=dn(e,a,s),n!==null&&(_r(n,e,s,t),Us(n,e,s))}};function nd(e,n,t,s,a,o,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,o,d):n.prototype&&n.prototype.isPureReactComponent?!Lt(t,s)||!Lt(a,o):!0}function td(e,n,t){var s=!1,a=on,o=n.contextType;return typeof o=="object"&&o!==null?o=yr(o):(a=nr(n)?kn:Qe.current,s=n.contextTypes,o=(s=s!=null)?Xn(e,a):on),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Zs,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),n}function sd(e,n,t,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,s),n.state!==e&&Zs.enqueueReplaceState(n,n.state,null)}function Xi(e,n,t,s){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},Fi(e);var o=n.contextType;typeof o=="object"&&o!==null?a.context=yr(o):(o=nr(n)?kn:Qe.current,a.context=Xn(e,o)),a.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Zi(e,n,o,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&Zs.enqueueReplaceState(a,a.state,null),$s(e,t,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ot(e,n){try{var t="",s=n;do t+=ie(s),s=s.return;while(s);var a=t}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:a,digest:null}}function eo(e,n,t){return{value:e,source:null,stack:t!=null?t:null,digest:n!=null?n:null}}function ro(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Tm=typeof WeakMap=="function"?WeakMap:Map;function ad(e,n,t){t=qr(-1,t),t.tag=3,t.payload={element:null};var s=n.value;return t.callback=function(){aa||(aa=!0,go=s),ro(e,n)},t}function id(e,n,t){t=qr(-1,t),t.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=n.value;t.payload=function(){return s(a)},t.callback=function(){ro(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){ro(e,n),typeof s!="function"&&(un===null?un=new Set([this]):un.add(this));var d=n.stack;this.componentDidCatch(n.value,{componentStack:d!==null?d:""})}),t}function od(e,n,t){var s=e.pingCache;if(s===null){s=e.pingCache=new Tm;var a=new Set;s.set(n,a)}else a=s.get(n),a===void 0&&(a=new Set,s.set(n,a));a.has(t)||(a.add(t),e=Fm.bind(null,e,n,t),n.then(e,e))}function ld(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function cd(e,n,t,s,a){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=qr(-1,1),n.tag=2,dn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Sm=_.ReactCurrentOwner,tr=!1;function Xe(e,n,t,s){n.child=e===null?Ic(n,null,t,s):tt(n,e.child,t,s)}function dd(e,n,t,s,a){t=t.render;var o=n.ref;return at(n,a),s=qi(e,n,t,s,o,a),t=Vi(),e!==null&&!tr?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Vr(e,n,a)):(Te&&t&&Ii(n),n.flags|=1,Xe(e,n,s,a),n.child)}function pd(e,n,t,s,a){if(e===null){var o=t.type;return typeof o=="function"&&!ko(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,ud(e,n,o,s,a)):(e=pa(t.type,null,s,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,(e.lanes&a)===0){var d=o.memoizedProps;if(t=t.compare,t=t!==null?t:Lt,t(d,s)&&e.ref===n.ref)return Vr(e,n,a)}return n.flags|=1,e=fn(o,s),e.ref=n.ref,e.return=n,n.child=e}function ud(e,n,t,s,a){if(e!==null){var o=e.memoizedProps;if(Lt(o,s)&&e.ref===n.ref)if(tr=!1,n.pendingProps=s=o,(e.lanes&a)!==0)(e.flags&131072)!==0&&(tr=!0);else return n.lanes=e.lanes,Vr(e,n,a)}return no(e,n,t,s,a)}function md(e,n,t){var s=n.pendingProps,a=s.children,o=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(ct,hr),hr|=t;else{if((t&1073741824)===0)return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,je(ct,hr),hr|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=o!==null?o.baseLanes:t,je(ct,hr),hr|=s}else o!==null?(s=o.baseLanes|t,n.memoizedState=null):s=t,je(ct,hr),hr|=s;return Xe(e,n,a,t),n.child}function hd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function no(e,n,t,s,a){var o=nr(t)?kn:Qe.current;return o=Xn(n,o),at(n,a),t=qi(e,n,t,s,o,a),s=Vi(),e!==null&&!tr?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Vr(e,n,a)):(Te&&s&&Ii(n),n.flags|=1,Xe(e,n,t,a),n.child)}function xd(e,n,t,s,a){if(nr(t)){var o=!0;Ls(n)}else o=!1;if(at(n,a),n.stateNode===null)ea(e,n),td(n,t,s),Xi(n,t,s,a),s=!0;else if(e===null){var d=n.stateNode,u=n.memoizedProps;d.props=u;var m=d.context,w=t.contextType;typeof w=="object"&&w!==null?w=yr(w):(w=nr(t)?kn:Qe.current,w=Xn(n,w));var T=t.getDerivedStateFromProps,C=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function";C||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==s||m!==w)&&sd(n,d,s,w),cn=!1;var k=n.memoizedState;d.state=k,$s(n,s,d,a),m=n.memoizedState,u!==s||k!==m||rr.current||cn?(typeof T=="function"&&(Zi(n,t,T,s),m=n.memoizedState),(u=cn||nd(n,t,u,s,k,m,w))?(C||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=m),d.props=s,d.state=m,d.context=w,s=u):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{d=n.stateNode,Pc(e,n),u=n.memoizedProps,w=n.type===n.elementType?u:Ir(n.type,u),d.props=w,C=n.pendingProps,k=d.context,m=t.contextType,typeof m=="object"&&m!==null?m=yr(m):(m=nr(t)?kn:Qe.current,m=Xn(n,m));var R=t.getDerivedStateFromProps;(T=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==C||k!==m)&&sd(n,d,s,m),cn=!1,k=n.memoizedState,d.state=k,$s(n,s,d,a);var L=n.memoizedState;u!==C||k!==L||rr.current||cn?(typeof R=="function"&&(Zi(n,t,R,s),L=n.memoizedState),(w=cn||nd(n,t,w,s,k,L,m)||!1)?(T||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(s,L,m),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(s,L,m)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=L),d.props=s,d.state=L,d.context=m,s=w):(typeof d.componentDidUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(n.flags|=1024),s=!1)}return to(e,n,t,s,o,a)}function to(e,n,t,s,a,o){hd(e,n);var d=(n.flags&128)!==0;if(!s&&!d)return a&&yc(n,t,!1),Vr(e,n,o);s=n.stateNode,Sm.current=n;var u=d&&typeof t.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&d?(n.child=tt(n,e.child,null,o),n.child=tt(n,null,u,o)):Xe(e,n,u,o),n.memoizedState=s.state,a&&yc(n,t,!0),n.child}function fd(e){var n=e.stateNode;n.pendingContext?vc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&vc(e,n.context,!1),Di(e,n.containerInfo)}function gd(e,n,t,s,a){return nt(),zi(a),n.flags|=256,Xe(e,n,t,s),n.child}var so={dehydrated:null,treeContext:null,retryLane:0};function ao(e){return{baseLanes:e,cachePool:null,transitions:null}}function vd(e,n,t){var s=n.pendingProps,a=Ce.current,o=!1,d=(n.flags&128)!==0,u;if((u=d)||(u=e!==null&&e.memoizedState===null?!1:(a&2)!==0),u?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),je(Ce,a&1),e===null)return _i(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(d=s.children,e=s.fallback,o?(s=n.mode,o=n.child,d={mode:"hidden",children:d},(s&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=d):o=ua(d,s,0,null),e=Rn(e,s,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=ao(t),n.memoizedState=so,e):io(n,d));if(a=e.memoizedState,a!==null&&(u=a.dehydrated,u!==null))return Cm(e,n,d,s,u,a,t);if(o){o=s.fallback,d=n.mode,a=e.child,u=a.sibling;var m={mode:"hidden",children:s.children};return(d&1)===0&&n.child!==a?(s=n.child,s.childLanes=0,s.pendingProps=m,n.deletions=null):(s=fn(a,m),s.subtreeFlags=a.subtreeFlags&14680064),u!==null?o=fn(u,o):(o=Rn(o,d,t,null),o.flags|=2),o.return=n,s.return=n,s.sibling=o,n.child=s,s=o,o=n.child,d=e.child.memoizedState,d=d===null?ao(t):{baseLanes:d.baseLanes|t,cachePool:null,transitions:d.transitions},o.memoizedState=d,o.childLanes=e.childLanes&~t,n.memoizedState=so,s}return o=e.child,e=o.sibling,s=fn(o,{mode:"visible",children:s.children}),(n.mode&1)===0&&(s.lanes=t),s.return=n,s.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=s,n.memoizedState=null,s}function io(e,n){return n=ua({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Xs(e,n,t,s){return s!==null&&zi(s),tt(n,e.child,null,t),e=io(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Cm(e,n,t,s,a,o,d){if(t)return n.flags&256?(n.flags&=-257,s=eo(Error(l(422))),Xs(e,n,d,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=s.fallback,a=n.mode,s=ua({mode:"visible",children:s.children},a,0,null),o=Rn(o,a,d,null),o.flags|=2,s.return=n,o.return=n,s.sibling=o,n.child=s,(n.mode&1)!==0&&tt(n,e.child,null,d),n.child.memoizedState=ao(d),n.memoizedState=so,o);if((n.mode&1)===0)return Xs(e,n,d,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var u=s.dgst;return s=u,o=Error(l(419)),s=eo(o,s,void 0),Xs(e,n,d,s)}if(u=(d&e.childLanes)!==0,tr||u){if(s=We,s!==null){switch(d&-d){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(s.suspendedLanes|d))!==0?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,$r(e,a),_r(s,e,a,-1))}return No(),s=eo(Error(l(421))),Xs(e,n,d,s)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Dm.bind(null,e),a._reactRetry=n,null):(e=o.treeContext,mr=sn(a.nextSibling),ur=n,Te=!0,Er=null,e!==null&&(vr[jr++]=Hr,vr[jr++]=Ur,vr[jr++]=Tn,Hr=e.id,Ur=e.overflow,Tn=n),n=io(n,s.children),n.flags|=4096,n)}function jd(e,n,t){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Oi(e.return,n,t)}function oo(e,n,t,s,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:t,tailMode:a}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=t,o.tailMode=a)}function yd(e,n,t){var s=n.pendingProps,a=s.revealOrder,o=s.tail;if(Xe(e,n,s.children,t),s=Ce.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jd(e,t,n);else if(e.tag===19)jd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(je(Ce,s),(n.mode&1)===0)n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&qs(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),oo(n,!1,a,t,o);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&qs(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}oo(n,!0,t,null,o);break;case"together":oo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ea(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Vr(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Mn|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(l(153));if(n.child!==null){for(e=n.child,t=fn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=fn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Em(e,n,t){switch(n.tag){case 3:fd(n),nt();break;case 5:Rc(n);break;case 1:nr(n.type)&&Ls(n);break;case 4:Di(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,a=n.memoizedProps.value;je(Gs,s._currentValue),s._currentValue=a;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(je(Ce,Ce.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?vd(e,n,t):(je(Ce,Ce.current&1),e=Vr(e,n,t),e!==null?e.sibling:null);je(Ce,Ce.current&1);break;case 19:if(s=(t&n.childLanes)!==0,(e.flags&128)!==0){if(s)return yd(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),je(Ce,Ce.current),s)break;return null;case 22:case 23:return n.lanes=0,md(e,n,t)}return Vr(e,n,t)}var wd,lo,bd,Nd;wd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},lo=function(){},bd=function(e,n,t,s){var a=e.memoizedProps;if(a!==s){e=n.stateNode,En(Or.current);var o=null;switch(t){case"input":a=Oa(e,a),s=Oa(e,s),o=[];break;case"select":a=z({},a,{value:void 0}),s=z({},s,{value:void 0}),o=[];break;case"textarea":a=Da(e,a),s=Da(e,s),o=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=zs)}Ga(t,s);var d;t=null;for(w in a)if(!s.hasOwnProperty(w)&&a.hasOwnProperty(w)&&a[w]!=null)if(w==="style"){var u=a[w];for(d in u)u.hasOwnProperty(d)&&(t||(t={}),t[d]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(h.hasOwnProperty(w)?o||(o=[]):(o=o||[]).push(w,null));for(w in s){var m=s[w];if(u=a!=null?a[w]:void 0,s.hasOwnProperty(w)&&m!==u&&(m!=null||u!=null))if(w==="style")if(u){for(d in u)!u.hasOwnProperty(d)||m&&m.hasOwnProperty(d)||(t||(t={}),t[d]="");for(d in m)m.hasOwnProperty(d)&&u[d]!==m[d]&&(t||(t={}),t[d]=m[d])}else t||(o||(o=[]),o.push(w,t)),t=m;else w==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,u=u?u.__html:void 0,m!=null&&u!==m&&(o=o||[]).push(w,m)):w==="children"?typeof m!="string"&&typeof m!="number"||(o=o||[]).push(w,""+m):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(h.hasOwnProperty(w)?(m!=null&&w==="onScroll"&&we("scroll",e),o||u===m||(o=[])):(o=o||[]).push(w,m))}t&&(o=o||[]).push("style",t);var w=o;(n.updateQueue=w)&&(n.flags|=4)}},Nd=function(e,n,t,s){t!==s&&(n.flags|=4)};function Kt(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,s=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=t,n}function Im(e,n,t){var s=n.pendingProps;switch(Mi(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return nr(n.type)&&As(),Ye(n),null;case 3:return s=n.stateNode,it(),be(rr),be(Qe),Hi(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Ds(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Er!==null&&(yo(Er),Er=null))),lo(e,n),Ye(n),null;case 5:Wi(n);var a=En(qt.current);if(t=n.type,e!==null&&n.stateNode!=null)bd(e,n,t,s,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(l(166));return Ye(n),null}if(e=En(Or.current),Ds(n)){s=n.stateNode,t=n.type;var o=n.memoizedProps;switch(s[Lr]=n,s[Wt]=o,e=(n.mode&1)!==0,t){case"dialog":we("cancel",s),we("close",s);break;case"iframe":case"object":case"embed":we("load",s);break;case"video":case"audio":for(a=0;a<Bt.length;a++)we(Bt[a],s);break;case"source":we("error",s);break;case"img":case"image":case"link":we("error",s),we("load",s);break;case"details":we("toggle",s);break;case"input":tl(s,o),we("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!o.multiple},we("invalid",s);break;case"textarea":il(s,o),we("invalid",s)}Ga(t,o),a=null;for(var d in o)if(o.hasOwnProperty(d)){var u=o[d];d==="children"?typeof u=="string"?s.textContent!==u&&(o.suppressHydrationWarning!==!0&&_s(s.textContent,u,e),a=["children",u]):typeof u=="number"&&s.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&_s(s.textContent,u,e),a=["children",""+u]):h.hasOwnProperty(d)&&u!=null&&d==="onScroll"&&we("scroll",s)}switch(t){case"input":Kr(s),al(s,o,!0);break;case"textarea":Kr(s),ll(s);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(s.onclick=zs)}s=a,n.updateQueue=s,s!==null&&(n.flags|=4)}else{d=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cl(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=d.createElement(t,{is:s.is}):(e=d.createElement(t),t==="select"&&(d=e,s.multiple?d.multiple=!0:s.size&&(d.size=s.size))):e=d.createElementNS(e,t),e[Lr]=n,e[Wt]=s,wd(e,n,!1,!1),n.stateNode=e;e:{switch(d=Ha(t,s),t){case"dialog":we("cancel",e),we("close",e),a=s;break;case"iframe":case"object":case"embed":we("load",e),a=s;break;case"video":case"audio":for(a=0;a<Bt.length;a++)we(Bt[a],e);a=s;break;case"source":we("error",e),a=s;break;case"img":case"image":case"link":we("error",e),we("load",e),a=s;break;case"details":we("toggle",e),a=s;break;case"input":tl(e,s),a=Oa(e,s),we("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=z({},s,{value:void 0}),we("invalid",e);break;case"textarea":il(e,s),a=Da(e,s),we("invalid",e);break;default:a=s}Ga(t,a),u=a;for(o in u)if(u.hasOwnProperty(o)){var m=u[o];o==="style"?ul(e,m):o==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&dl(e,m)):o==="children"?typeof m=="string"?(t!=="textarea"||m!=="")&&jt(e,m):typeof m=="number"&&jt(e,""+m):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(h.hasOwnProperty(o)?m!=null&&o==="onScroll"&&we("scroll",e):m!=null&&ne(e,o,m,d))}switch(t){case"input":Kr(e),al(e,s,!1);break;case"textarea":Kr(e),ll(e);break;case"option":s.value!=null&&e.setAttribute("value",""+le(s.value));break;case"select":e.multiple=!!s.multiple,o=s.value,o!=null?Wn(e,!!s.multiple,o,!1):s.defaultValue!=null&&Wn(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=zs)}switch(t){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ye(n),null;case 6:if(e&&n.stateNode!=null)Nd(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(l(166));if(t=En(qt.current),En(Or.current),Ds(n)){if(s=n.stateNode,t=n.memoizedProps,s[Lr]=n,(o=s.nodeValue!==t)&&(e=ur,e!==null))switch(e.tag){case 3:_s(s.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_s(s.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else s=(t.nodeType===9?t:t.ownerDocument).createTextNode(s),s[Lr]=n,n.stateNode=s}return Ye(n),null;case 13:if(be(Ce),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&mr!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Sc(),nt(),n.flags|=98560,o=!1;else if(o=Ds(n),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(l(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[Lr]=n}else nt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),o=!1}else Er!==null&&(yo(Er),Er=null),o=!0;if(!o)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Ce.current&1)!==0?Be===0&&(Be=3):No())),n.updateQueue!==null&&(n.flags|=4),Ye(n),null);case 4:return it(),lo(e,n),e===null&&Ft(n.stateNode.containerInfo),Ye(n),null;case 10:return Li(n.type._context),Ye(n),null;case 17:return nr(n.type)&&As(),Ye(n),null;case 19:if(be(Ce),o=n.memoizedState,o===null)return Ye(n),null;if(s=(n.flags&128)!==0,d=o.rendering,d===null)if(s)Kt(o,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=qs(e),d!==null){for(n.flags|=128,Kt(o,!1),s=d.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=t,t=n.child;t!==null;)o=t,e=s,o.flags&=14680066,d=o.alternate,d===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=d.childLanes,o.lanes=d.lanes,o.child=d.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=d.memoizedProps,o.memoizedState=d.memoizedState,o.updateQueue=d.updateQueue,o.type=d.type,e=d.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return je(Ce,Ce.current&1|2),n.child}e=e.sibling}o.tail!==null&&_e()>dt&&(n.flags|=128,s=!0,Kt(o,!1),n.lanes=4194304)}else{if(!s)if(e=qs(d),e!==null){if(n.flags|=128,s=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Kt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Te)return Ye(n),null}else 2*_e()-o.renderingStartTime>dt&&t!==1073741824&&(n.flags|=128,s=!0,Kt(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=_e(),n.sibling=null,t=Ce.current,je(Ce,s?t&1|2:t&1),n):(Ye(n),null);case 22:case 23:return bo(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&(n.mode&1)!==0?(hr&1073741824)!==0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),null;case 24:return null;case 25:return null}throw Error(l(156,n.tag))}function Mm(e,n){switch(Mi(n),n.tag){case 1:return nr(n.type)&&As(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return it(),be(rr),be(Qe),Hi(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Wi(n),null;case 13:if(be(Ce),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(l(340));nt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return be(Ce),null;case 4:return it(),null;case 10:return Li(n.type._context),null;case 22:case 23:return bo(),null;case 24:return null;default:return null}}var ra=!1,Ke=!1,Pm=typeof WeakSet=="function"?WeakSet:Set,A=null;function lt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(s){Me(e,n,s)}else t.current=null}function co(e,n,t){try{t()}catch(s){Me(e,n,s)}}var kd=!1;function _m(e,n){if(wi=ws,e=nc(),mi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var s=t.getSelection&&t.getSelection();if(s&&s.rangeCount!==0){t=s.anchorNode;var a=s.anchorOffset,o=s.focusNode;s=s.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var d=0,u=-1,m=-1,w=0,T=0,C=e,k=null;r:for(;;){for(var R;C!==t||a!==0&&C.nodeType!==3||(u=d+a),C!==o||s!==0&&C.nodeType!==3||(m=d+s),C.nodeType===3&&(d+=C.nodeValue.length),(R=C.firstChild)!==null;)k=C,C=R;for(;;){if(C===e)break r;if(k===t&&++w===a&&(u=d),k===o&&++T===s&&(m=d),(R=C.nextSibling)!==null)break;C=k,k=C.parentNode}C=R}t=u===-1||m===-1?null:{start:u,end:m}}else t=null}t=t||{start:0,end:0}}else t=null;for(bi={focusedElem:e,selectionRange:t},ws=!1,A=n;A!==null;)if(n=A,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,A=e;else for(;A!==null;){n=A;try{var L=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(L!==null){var O=L.memoizedProps,ze=L.memoizedState,v=n.stateNode,x=v.getSnapshotBeforeUpdate(n.elementType===n.type?O:Ir(n.type,O),ze);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(E){Me(n,n.return,E)}if(e=n.sibling,e!==null){e.return=n.return,A=e;break}A=n.return}return L=kd,kd=!1,L}function Zt(e,n,t){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&co(n,t,o)}a=a.next}while(a!==s)}}function na(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var s=t.create;t.destroy=s()}t=t.next}while(t!==n)}}function po(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Td(e){var n=e.alternate;n!==null&&(e.alternate=null,Td(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Lr],delete n[Wt],delete n[Si],delete n[hm],delete n[xm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sd(e){return e.tag===5||e.tag===3||e.tag===4}function Cd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uo(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=zs));else if(s!==4&&(e=e.child,e!==null))for(uo(e,n,t),e=e.sibling;e!==null;)uo(e,n,t),e=e.sibling}function mo(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(mo(e,n,t),e=e.sibling;e!==null;)mo(e,n,t),e=e.sibling}var Ue=null,Mr=!1;function pn(e,n,t){for(t=t.child;t!==null;)Ed(e,n,t),t=t.sibling}function Ed(e,n,t){if(Ar&&typeof Ar.onCommitFiberUnmount=="function")try{Ar.onCommitFiberUnmount(xs,t)}catch{}switch(t.tag){case 5:Ke||lt(t,n);case 6:var s=Ue,a=Mr;Ue=null,pn(e,n,t),Ue=s,Mr=a,Ue!==null&&(Mr?(e=Ue,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ue.removeChild(t.stateNode));break;case 18:Ue!==null&&(Mr?(e=Ue,t=t.stateNode,e.nodeType===8?Ti(e.parentNode,t):e.nodeType===1&&Ti(e,t),Mt(e)):Ti(Ue,t.stateNode));break;case 4:s=Ue,a=Mr,Ue=t.stateNode.containerInfo,Mr=!0,pn(e,n,t),Ue=s,Mr=a;break;case 0:case 11:case 14:case 15:if(!Ke&&(s=t.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var o=a,d=o.destroy;o=o.tag,d!==void 0&&((o&2)!==0||(o&4)!==0)&&co(t,n,d),a=a.next}while(a!==s)}pn(e,n,t);break;case 1:if(!Ke&&(lt(t,n),s=t.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=t.memoizedProps,s.state=t.memoizedState,s.componentWillUnmount()}catch(u){Me(t,n,u)}pn(e,n,t);break;case 21:pn(e,n,t);break;case 22:t.mode&1?(Ke=(s=Ke)||t.memoizedState!==null,pn(e,n,t),Ke=s):pn(e,n,t);break;default:pn(e,n,t)}}function Id(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Pm),n.forEach(function(s){var a=Wm.bind(null,e,s);t.has(s)||(t.add(s),s.then(a,a))})}}function Pr(e,n){var t=n.deletions;if(t!==null)for(var s=0;s<t.length;s++){var a=t[s];try{var o=e,d=n,u=d;e:for(;u!==null;){switch(u.tag){case 5:Ue=u.stateNode,Mr=!1;break e;case 3:Ue=u.stateNode.containerInfo,Mr=!0;break e;case 4:Ue=u.stateNode.containerInfo,Mr=!0;break e}u=u.return}if(Ue===null)throw Error(l(160));Ed(o,d,a),Ue=null,Mr=!1;var m=a.alternate;m!==null&&(m.return=null),a.return=null}catch(w){Me(a,n,w)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Md(n,e),n=n.sibling}function Md(e,n){var t=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pr(n,e),Fr(e),s&4){try{Zt(3,e,e.return),na(3,e)}catch(O){Me(e,e.return,O)}try{Zt(5,e,e.return)}catch(O){Me(e,e.return,O)}}break;case 1:Pr(n,e),Fr(e),s&512&&t!==null&&lt(t,t.return);break;case 5:if(Pr(n,e),Fr(e),s&512&&t!==null&&lt(t,t.return),e.flags&32){var a=e.stateNode;try{jt(a,"")}catch(O){Me(e,e.return,O)}}if(s&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,d=t!==null?t.memoizedProps:o,u=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&sl(a,o),Ha(u,d);var w=Ha(u,o);for(d=0;d<m.length;d+=2){var T=m[d],C=m[d+1];T==="style"?ul(a,C):T==="dangerouslySetInnerHTML"?dl(a,C):T==="children"?jt(a,C):ne(a,T,C,w)}switch(u){case"input":Ba(a,o);break;case"textarea":ol(a,o);break;case"select":var k=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var R=o.value;R!=null?Wn(a,!!o.multiple,R,!1):k!==!!o.multiple&&(o.defaultValue!=null?Wn(a,!!o.multiple,o.defaultValue,!0):Wn(a,!!o.multiple,o.multiple?[]:"",!1))}a[Wt]=o}catch(O){Me(e,e.return,O)}}break;case 6:if(Pr(n,e),Fr(e),s&4){if(e.stateNode===null)throw Error(l(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(O){Me(e,e.return,O)}}break;case 3:if(Pr(n,e),Fr(e),s&4&&t!==null&&t.memoizedState.isDehydrated)try{Mt(n.containerInfo)}catch(O){Me(e,e.return,O)}break;case 4:Pr(n,e),Fr(e);break;case 13:Pr(n,e),Fr(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(fo=_e())),s&4&&Id(e);break;case 22:if(T=t!==null&&t.memoizedState!==null,e.mode&1?(Ke=(w=Ke)||T,Pr(n,e),Ke=w):Pr(n,e),Fr(e),s&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!T&&(e.mode&1)!==0)for(A=e,T=e.child;T!==null;){for(C=A=T;A!==null;){switch(k=A,R=k.child,k.tag){case 0:case 11:case 14:case 15:Zt(4,k,k.return);break;case 1:lt(k,k.return);var L=k.stateNode;if(typeof L.componentWillUnmount=="function"){s=k,t=k.return;try{n=s,L.props=n.memoizedProps,L.state=n.memoizedState,L.componentWillUnmount()}catch(O){Me(s,t,O)}}break;case 5:lt(k,k.return);break;case 22:if(k.memoizedState!==null){zd(C);continue}}R!==null?(R.return=k,A=R):zd(C)}T=T.sibling}e:for(T=null,C=e;;){if(C.tag===5){if(T===null){T=C;try{a=C.stateNode,w?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=C.stateNode,m=C.memoizedProps.style,d=m!=null&&m.hasOwnProperty("display")?m.display:null,u.style.display=pl("display",d))}catch(O){Me(e,e.return,O)}}}else if(C.tag===6){if(T===null)try{C.stateNode.nodeValue=w?"":C.memoizedProps}catch(O){Me(e,e.return,O)}}else if((C.tag!==22&&C.tag!==23||C.memoizedState===null||C===e)&&C.child!==null){C.child.return=C,C=C.child;continue}if(C===e)break e;for(;C.sibling===null;){if(C.return===null||C.return===e)break e;T===C&&(T=null),C=C.return}T===C&&(T=null),C.sibling.return=C.return,C=C.sibling}}break;case 19:Pr(n,e),Fr(e),s&4&&Id(e);break;case 21:break;default:Pr(n,e),Fr(e)}}function Fr(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Sd(t)){var s=t;break e}t=t.return}throw Error(l(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(jt(a,""),s.flags&=-33);var o=Cd(e);mo(e,o,a);break;case 3:case 4:var d=s.stateNode.containerInfo,u=Cd(e);uo(e,u,d);break;default:throw Error(l(161))}}catch(m){Me(e,e.return,m)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function zm(e,n,t){A=e,Pd(e)}function Pd(e,n,t){for(var s=(e.mode&1)!==0;A!==null;){var a=A,o=a.child;if(a.tag===22&&s){var d=a.memoizedState!==null||ra;if(!d){var u=a.alternate,m=u!==null&&u.memoizedState!==null||Ke;u=ra;var w=Ke;if(ra=d,(Ke=m)&&!w)for(A=a;A!==null;)d=A,m=d.child,d.tag===22&&d.memoizedState!==null?Rd(a):m!==null?(m.return=d,A=m):Rd(a);for(;o!==null;)A=o,Pd(o),o=o.sibling;A=a,ra=u,Ke=w}_d(e)}else(a.subtreeFlags&8772)!==0&&o!==null?(o.return=a,A=o):_d(e)}}function _d(e){for(;A!==null;){var n=A;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ke||na(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!Ke)if(t===null)s.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:Ir(n.type,t.memoizedProps);s.componentDidUpdate(a,t.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&zc(n,o,s);break;case 3:var d=n.updateQueue;if(d!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}zc(n,d,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var m=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&t.focus();break;case"img":m.src&&(t.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var w=n.alternate;if(w!==null){var T=w.memoizedState;if(T!==null){var C=T.dehydrated;C!==null&&Mt(C)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ke||n.flags&512&&po(n)}catch(k){Me(n,n.return,k)}}if(n===e){A=null;break}if(t=n.sibling,t!==null){t.return=n.return,A=t;break}A=n.return}}function zd(e){for(;A!==null;){var n=A;if(n===e){A=null;break}var t=n.sibling;if(t!==null){t.return=n.return,A=t;break}A=n.return}}function Rd(e){for(;A!==null;){var n=A;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{na(4,n)}catch(m){Me(n,t,m)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var a=n.return;try{s.componentDidMount()}catch(m){Me(n,a,m)}}var o=n.return;try{po(n)}catch(m){Me(n,o,m)}break;case 5:var d=n.return;try{po(n)}catch(m){Me(n,d,m)}}}catch(m){Me(n,n.return,m)}if(n===e){A=null;break}var u=n.sibling;if(u!==null){u.return=n.return,A=u;break}A=n.return}}var Rm=Math.ceil,ta=_.ReactCurrentDispatcher,ho=_.ReactCurrentOwner,br=_.ReactCurrentBatchConfig,pe=0,We=null,Ae=null,$e=0,hr=0,ct=an(0),Be=0,Xt=null,Mn=0,sa=0,xo=0,es=null,sr=null,fo=0,dt=1/0,Qr=null,aa=!1,go=null,un=null,ia=!1,mn=null,oa=0,rs=0,vo=null,la=-1,ca=0;function er(){return(pe&6)!==0?_e():la!==-1?la:la=_e()}function hn(e){return(e.mode&1)===0?1:(pe&2)!==0&&$e!==0?$e&-$e:gm.transition!==null?(ca===0&&(ca=Cl()),ca):(e=fe,e!==0||(e=window.event,e=e===void 0?16:Ll(e.type)),e)}function _r(e,n,t,s){if(50<rs)throw rs=0,vo=null,Error(l(185));Tt(e,t,s),((pe&2)===0||e!==We)&&(e===We&&((pe&2)===0&&(sa|=t),Be===4&&xn(e,$e)),ar(e,s),t===1&&pe===0&&(n.mode&1)===0&&(dt=_e()+500,Os&&ln()))}function ar(e,n){var t=e.callbackNode;gu(e,n);var s=vs(e,e===We?$e:0);if(s===0)t!==null&&kl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(t!=null&&kl(t),n===1)e.tag===0?fm(Ld.bind(null,e)):wc(Ld.bind(null,e)),um(function(){(pe&6)===0&&ln()}),t=null;else{switch(El(s)){case 1:t=Ya;break;case 4:t=Tl;break;case 16:t=hs;break;case 536870912:t=Sl;break;default:t=hs}t=Ud(t,Ad.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ad(e,n){if(la=-1,ca=0,(pe&6)!==0)throw Error(l(327));var t=e.callbackNode;if(pt()&&e.callbackNode!==t)return null;var s=vs(e,e===We?$e:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||n)n=da(e,s);else{n=s;var a=pe;pe|=2;var o=Bd();(We!==e||$e!==n)&&(Qr=null,dt=_e()+500,_n(e,n));do try{Om();break}catch(u){Od(e,u)}while(!0);Ai(),ta.current=o,pe=a,Ae!==null?n=0:(We=null,$e=0,n=Be)}if(n!==0){if(n===2&&(a=Ka(e),a!==0&&(s=a,n=jo(e,a))),n===1)throw t=Xt,_n(e,0),xn(e,s),ar(e,_e()),t;if(n===6)xn(e,s);else{if(a=e.current.alternate,(s&30)===0&&!Am(a)&&(n=da(e,s),n===2&&(o=Ka(e),o!==0&&(s=o,n=jo(e,o))),n===1))throw t=Xt,_n(e,0),xn(e,s),ar(e,_e()),t;switch(e.finishedWork=a,e.finishedLanes=s,n){case 0:case 1:throw Error(l(345));case 2:zn(e,sr,Qr);break;case 3:if(xn(e,s),(s&130023424)===s&&(n=fo+500-_e(),10<n)){if(vs(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){er(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ki(zn.bind(null,e,sr,Qr),n);break}zn(e,sr,Qr);break;case 4:if(xn(e,s),(s&4194240)===s)break;for(n=e.eventTimes,a=-1;0<s;){var d=31-Sr(s);o=1<<d,d=n[d],d>a&&(a=d),s&=~o}if(s=a,s=_e()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Rm(s/1960))-s,10<s){e.timeoutHandle=ki(zn.bind(null,e,sr,Qr),s);break}zn(e,sr,Qr);break;case 5:zn(e,sr,Qr);break;default:throw Error(l(329))}}}return ar(e,_e()),e.callbackNode===t?Ad.bind(null,e):null}function jo(e,n){var t=es;return e.current.memoizedState.isDehydrated&&(_n(e,n).flags|=256),e=da(e,n),e!==2&&(n=sr,sr=t,n!==null&&yo(n)),e}function yo(e){sr===null?sr=e:sr.push.apply(sr,e)}function Am(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var s=0;s<t.length;s++){var a=t[s],o=a.getSnapshot;a=a.value;try{if(!Cr(o(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function xn(e,n){for(n&=~xo,n&=~sa,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Sr(n),s=1<<t;e[t]=-1,n&=~s}}function Ld(e){if((pe&6)!==0)throw Error(l(327));pt();var n=vs(e,0);if((n&1)===0)return ar(e,_e()),null;var t=da(e,n);if(e.tag!==0&&t===2){var s=Ka(e);s!==0&&(n=s,t=jo(e,s))}if(t===1)throw t=Xt,_n(e,0),xn(e,n),ar(e,_e()),t;if(t===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,zn(e,sr,Qr),ar(e,_e()),null}function wo(e,n){var t=pe;pe|=1;try{return e(n)}finally{pe=t,pe===0&&(dt=_e()+500,Os&&ln())}}function Pn(e){mn!==null&&mn.tag===0&&(pe&6)===0&&pt();var n=pe;pe|=1;var t=br.transition,s=fe;try{if(br.transition=null,fe=1,e)return e()}finally{fe=s,br.transition=t,pe=n,(pe&6)===0&&ln()}}function bo(){hr=ct.current,be(ct)}function _n(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,pm(t)),Ae!==null)for(t=Ae.return;t!==null;){var s=t;switch(Mi(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&As();break;case 3:it(),be(rr),be(Qe),Hi();break;case 5:Wi(s);break;case 4:it();break;case 13:be(Ce);break;case 19:be(Ce);break;case 10:Li(s.type._context);break;case 22:case 23:bo()}t=t.return}if(We=e,Ae=e=fn(e.current,null),$e=hr=n,Be=0,Xt=null,xo=sa=Mn=0,sr=es=null,Cn!==null){for(n=0;n<Cn.length;n++)if(t=Cn[n],s=t.interleaved,s!==null){t.interleaved=null;var a=s.next,o=t.pending;if(o!==null){var d=o.next;o.next=a,s.next=d}t.pending=s}Cn=null}return e}function Od(e,n){do{var t=Ae;try{if(Ai(),Vs.current=Ks,Qs){for(var s=Ee.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}Qs=!1}if(In=0,De=Oe=Ee=null,Vt=!1,Qt=0,ho.current=null,t===null||t.return===null){Be=1,Xt=n,Ae=null;break}e:{var o=e,d=t.return,u=t,m=n;if(n=$e,u.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var w=m,T=u,C=T.tag;if((T.mode&1)===0&&(C===0||C===11||C===15)){var k=T.alternate;k?(T.updateQueue=k.updateQueue,T.memoizedState=k.memoizedState,T.lanes=k.lanes):(T.updateQueue=null,T.memoizedState=null)}var R=ld(d);if(R!==null){R.flags&=-257,cd(R,d,u,o,n),R.mode&1&&od(o,w,n),n=R,m=w;var L=n.updateQueue;if(L===null){var O=new Set;O.add(m),n.updateQueue=O}else L.add(m);break e}else{if((n&1)===0){od(o,w,n),No();break e}m=Error(l(426))}}else if(Te&&u.mode&1){var ze=ld(d);if(ze!==null){(ze.flags&65536)===0&&(ze.flags|=256),cd(ze,d,u,o,n),zi(ot(m,u));break e}}o=m=ot(m,u),Be!==4&&(Be=2),es===null?es=[o]:es.push(o),o=d;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var v=ad(o,m,n);_c(o,v);break e;case 1:u=m;var x=o.type,y=o.stateNode;if((o.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(un===null||!un.has(y)))){o.flags|=65536,n&=-n,o.lanes|=n;var E=id(o,u,n);_c(o,E);break e}}o=o.return}while(o!==null)}Dd(t)}catch(F){n=F,Ae===t&&t!==null&&(Ae=t=t.return);continue}break}while(!0)}function Bd(){var e=ta.current;return ta.current=Ks,e===null?Ks:e}function No(){(Be===0||Be===3||Be===2)&&(Be=4),We===null||(Mn&268435455)===0&&(sa&268435455)===0||xn(We,$e)}function da(e,n){var t=pe;pe|=2;var s=Bd();(We!==e||$e!==n)&&(Qr=null,_n(e,n));do try{Lm();break}catch(a){Od(e,a)}while(!0);if(Ai(),pe=t,ta.current=s,Ae!==null)throw Error(l(261));return We=null,$e=0,Be}function Lm(){for(;Ae!==null;)Fd(Ae)}function Om(){for(;Ae!==null&&!lu();)Fd(Ae)}function Fd(e){var n=Hd(e.alternate,e,hr);e.memoizedProps=e.pendingProps,n===null?Dd(e):Ae=n,ho.current=null}function Dd(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Im(t,n,hr),t!==null){Ae=t;return}}else{if(t=Mm(t,n),t!==null){t.flags&=32767,Ae=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,Ae=null;return}}if(n=n.sibling,n!==null){Ae=n;return}Ae=n=e}while(n!==null);Be===0&&(Be=5)}function zn(e,n,t){var s=fe,a=br.transition;try{br.transition=null,fe=1,Bm(e,n,t,s)}finally{br.transition=a,fe=s}return null}function Bm(e,n,t,s){do pt();while(mn!==null);if((pe&6)!==0)throw Error(l(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(vu(e,o),e===We&&(Ae=We=null,$e=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ia||(ia=!0,Ud(hs,function(){return pt(),null})),o=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||o){o=br.transition,br.transition=null;var d=fe;fe=1;var u=pe;pe|=4,ho.current=null,_m(e,t),Md(t,e),sm(bi),ws=!!wi,bi=wi=null,e.current=t,zm(t),cu(),pe=u,fe=d,br.transition=o}else e.current=t;if(ia&&(ia=!1,mn=e,oa=a),o=e.pendingLanes,o===0&&(un=null),uu(t.stateNode),ar(e,_e()),n!==null)for(s=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],s(a.value,{componentStack:a.stack,digest:a.digest});if(aa)throw aa=!1,e=go,go=null,e;return(oa&1)!==0&&e.tag!==0&&pt(),o=e.pendingLanes,(o&1)!==0?e===vo?rs++:(rs=0,vo=e):rs=0,ln(),null}function pt(){if(mn!==null){var e=El(oa),n=br.transition,t=fe;try{if(br.transition=null,fe=16>e?16:e,mn===null)var s=!1;else{if(e=mn,mn=null,oa=0,(pe&6)!==0)throw Error(l(331));var a=pe;for(pe|=4,A=e.current;A!==null;){var o=A,d=o.child;if((A.flags&16)!==0){var u=o.deletions;if(u!==null){for(var m=0;m<u.length;m++){var w=u[m];for(A=w;A!==null;){var T=A;switch(T.tag){case 0:case 11:case 15:Zt(8,T,o)}var C=T.child;if(C!==null)C.return=T,A=C;else for(;A!==null;){T=A;var k=T.sibling,R=T.return;if(Td(T),T===w){A=null;break}if(k!==null){k.return=R,A=k;break}A=R}}}var L=o.alternate;if(L!==null){var O=L.child;if(O!==null){L.child=null;do{var ze=O.sibling;O.sibling=null,O=ze}while(O!==null)}}A=o}}if((o.subtreeFlags&2064)!==0&&d!==null)d.return=o,A=d;else e:for(;A!==null;){if(o=A,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Zt(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,A=v;break e}A=o.return}}var x=e.current;for(A=x;A!==null;){d=A;var y=d.child;if((d.subtreeFlags&2064)!==0&&y!==null)y.return=d,A=y;else e:for(d=x;A!==null;){if(u=A,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:na(9,u)}}catch(F){Me(u,u.return,F)}if(u===d){A=null;break e}var E=u.sibling;if(E!==null){E.return=u.return,A=E;break e}A=u.return}}if(pe=a,ln(),Ar&&typeof Ar.onPostCommitFiberRoot=="function")try{Ar.onPostCommitFiberRoot(xs,e)}catch{}s=!0}return s}finally{fe=t,br.transition=n}}return!1}function Wd(e,n,t){n=ot(t,n),n=ad(e,n,1),e=dn(e,n,1),n=er(),e!==null&&(Tt(e,1,n),ar(e,n))}function Me(e,n,t){if(e.tag===3)Wd(e,e,t);else for(;n!==null;){if(n.tag===3){Wd(n,e,t);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(un===null||!un.has(s))){e=ot(t,e),e=id(n,e,1),n=dn(n,e,1),e=er(),n!==null&&(Tt(n,1,e),ar(n,e));break}}n=n.return}}function Fm(e,n,t){var s=e.pingCache;s!==null&&s.delete(n),n=er(),e.pingedLanes|=e.suspendedLanes&t,We===e&&($e&t)===t&&(Be===4||Be===3&&($e&130023424)===$e&&500>_e()-fo?_n(e,0):xo|=t),ar(e,n)}function Gd(e,n){n===0&&((e.mode&1)===0?n=1:(n=gs,gs<<=1,(gs&130023424)===0&&(gs=4194304)));var t=er();e=$r(e,n),e!==null&&(Tt(e,n,t),ar(e,t))}function Dm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Gd(e,t)}function Wm(e,n){var t=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(l(314))}s!==null&&s.delete(n),Gd(e,t)}var Hd;Hd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||rr.current)tr=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return tr=!1,Em(e,n,t);tr=(e.flags&131072)!==0}else tr=!1,Te&&(n.flags&1048576)!==0&&bc(n,Fs,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;ea(e,n),e=n.pendingProps;var a=Xn(n,Qe.current);at(n,t),a=qi(null,n,s,e,a,t);var o=Vi();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,nr(s)?(o=!0,Ls(n)):o=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Fi(n),a.updater=Zs,n.stateNode=a,a._reactInternals=n,Xi(n,s,e,t),n=to(null,n,s,!0,o,t)):(n.tag=0,Te&&o&&Ii(n),Xe(null,n,a,t),n=n.child),n;case 16:s=n.elementType;e:{switch(ea(e,n),e=n.pendingProps,a=s._init,s=a(s._payload),n.type=s,a=n.tag=Hm(s),e=Ir(s,e),a){case 0:n=no(null,n,s,e,t);break e;case 1:n=xd(null,n,s,e,t);break e;case 11:n=dd(null,n,s,e,t);break e;case 14:n=pd(null,n,s,Ir(s.type,e),t);break e}throw Error(l(306,s,""))}return n;case 0:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:Ir(s,a),no(e,n,s,a,t);case 1:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:Ir(s,a),xd(e,n,s,a,t);case 3:e:{if(fd(n),e===null)throw Error(l(387));s=n.pendingProps,o=n.memoizedState,a=o.element,Pc(e,n),$s(n,s,null,t);var d=n.memoizedState;if(s=d.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){a=ot(Error(l(423)),n),n=gd(e,n,s,t,a);break e}else if(s!==a){a=ot(Error(l(424)),n),n=gd(e,n,s,t,a);break e}else for(mr=sn(n.stateNode.containerInfo.firstChild),ur=n,Te=!0,Er=null,t=Ic(n,null,s,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(nt(),s===a){n=Vr(e,n,t);break e}Xe(e,n,s,t)}n=n.child}return n;case 5:return Rc(n),e===null&&_i(n),s=n.type,a=n.pendingProps,o=e!==null?e.memoizedProps:null,d=a.children,Ni(s,a)?d=null:o!==null&&Ni(s,o)&&(n.flags|=32),hd(e,n),Xe(e,n,d,t),n.child;case 6:return e===null&&_i(n),null;case 13:return vd(e,n,t);case 4:return Di(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=tt(n,null,s,t):Xe(e,n,s,t),n.child;case 11:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:Ir(s,a),dd(e,n,s,a,t);case 7:return Xe(e,n,n.pendingProps,t),n.child;case 8:return Xe(e,n,n.pendingProps.children,t),n.child;case 12:return Xe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(s=n.type._context,a=n.pendingProps,o=n.memoizedProps,d=a.value,je(Gs,s._currentValue),s._currentValue=d,o!==null)if(Cr(o.value,d)){if(o.children===a.children&&!rr.current){n=Vr(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var u=o.dependencies;if(u!==null){d=o.child;for(var m=u.firstContext;m!==null;){if(m.context===s){if(o.tag===1){m=qr(-1,t&-t),m.tag=2;var w=o.updateQueue;if(w!==null){w=w.shared;var T=w.pending;T===null?m.next=m:(m.next=T.next,T.next=m),w.pending=m}}o.lanes|=t,m=o.alternate,m!==null&&(m.lanes|=t),Oi(o.return,t,n),u.lanes|=t;break}m=m.next}}else if(o.tag===10)d=o.type===n.type?null:o.child;else if(o.tag===18){if(d=o.return,d===null)throw Error(l(341));d.lanes|=t,u=d.alternate,u!==null&&(u.lanes|=t),Oi(d,t,n),d=o.sibling}else d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===n){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}Xe(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,s=n.pendingProps.children,at(n,t),a=yr(a),s=s(a),n.flags|=1,Xe(e,n,s,t),n.child;case 14:return s=n.type,a=Ir(s,n.pendingProps),a=Ir(s.type,a),pd(e,n,s,a,t);case 15:return ud(e,n,n.type,n.pendingProps,t);case 17:return s=n.type,a=n.pendingProps,a=n.elementType===s?a:Ir(s,a),ea(e,n),n.tag=1,nr(s)?(e=!0,Ls(n)):e=!1,at(n,t),td(n,s,a),Xi(n,s,a,t),to(null,n,s,!0,e,t);case 19:return yd(e,n,t);case 22:return md(e,n,t)}throw Error(l(156,n.tag))};function Ud(e,n){return Nl(e,n)}function Gm(e,n,t,s){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nr(e,n,t,s){return new Gm(e,n,t,s)}function ko(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hm(e){if(typeof e=="function")return ko(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ie)return 11;if(e===Ze)return 14}return 2}function fn(e,n){var t=e.alternate;return t===null?(t=Nr(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function pa(e,n,t,s,a,o){var d=2;if(s=e,typeof e=="function")ko(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case M:return Rn(t.children,a,o,n);case B:d=8,a|=8;break;case ge:return e=Nr(12,t,n,a|2),e.elementType=ge,e.lanes=o,e;case ke:return e=Nr(13,t,n,a),e.elementType=ke,e.lanes=o,e;case qe:return e=Nr(19,t,n,a),e.elementType=qe,e.lanes=o,e;case ve:return ua(t,a,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pe:d=10;break e;case ae:d=9;break e;case Ie:d=11;break e;case Ze:d=14;break e;case Ve:d=16,s=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return n=Nr(d,t,n,a),n.elementType=e,n.type=s,n.lanes=o,n}function Rn(e,n,t,s){return e=Nr(7,e,s,n),e.lanes=t,e}function ua(e,n,t,s){return e=Nr(22,e,s,n),e.elementType=ve,e.lanes=t,e.stateNode={isHidden:!1},e}function To(e,n,t){return e=Nr(6,e,null,n),e.lanes=t,e}function So(e,n,t){return n=Nr(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Um(e,n,t,s,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Za(0),this.expirationTimes=Za(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Za(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Co(e,n,t,s,a,o,d,u,m){return e=new Um(e,n,t,u,m),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Nr(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:s,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fi(o),e}function $m(e,n,t){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:s==null?null:""+s,children:e,containerInfo:n,implementation:t}}function $d(e){if(!e)return on;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(l(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(nr(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(l(171))}if(e.tag===1){var t=e.type;if(nr(t))return jc(e,t,n)}return n}function qd(e,n,t,s,a,o,d,u,m){return e=Co(t,s,!0,e,a,o,d,u,m),e.context=$d(null),t=e.current,s=er(),a=hn(t),o=qr(s,a),o.callback=n!=null?n:null,dn(t,o,a),e.current.lanes=a,Tt(e,a,s),ar(e,s),e}function ma(e,n,t,s){var a=n.current,o=er(),d=hn(a);return t=$d(t),n.context===null?n.context=t:n.pendingContext=t,n=qr(o,d),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=dn(a,n,d),e!==null&&(_r(e,a,d,o),Us(e,a,d)),d}function ha(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Eo(e,n){Vd(e,n),(e=e.alternate)&&Vd(e,n)}function qm(){return null}var Qd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Io(e){this._internalRoot=e}xa.prototype.render=Io.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(l(409));ma(e,n,null,null)},xa.prototype.unmount=Io.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Pn(function(){ma(null,e,null,null)}),n[Wr]=null}};function xa(e){this._internalRoot=e}xa.prototype.unstable_scheduleHydration=function(e){if(e){var n=Pl();e={blockedOn:null,target:e,priority:n};for(var t=0;t<rn.length&&n!==0&&n<rn[t].priority;t++);rn.splice(t,0,e),t===0&&Rl(e)}};function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Jd(){}function Vm(e,n,t,s,a){if(a){if(typeof s=="function"){var o=s;s=function(){var w=ha(d);o.call(w)}}var d=qd(n,s,e,0,null,!1,!1,"",Jd);return e._reactRootContainer=d,e[Wr]=d.current,Ft(e.nodeType===8?e.parentNode:e),Pn(),d}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var u=s;s=function(){var w=ha(m);u.call(w)}}var m=Co(e,0,!1,null,null,!1,!1,"",Jd);return e._reactRootContainer=m,e[Wr]=m.current,Ft(e.nodeType===8?e.parentNode:e),Pn(function(){ma(n,m,t,s)}),m}function ga(e,n,t,s,a){var o=t._reactRootContainer;if(o){var d=o;if(typeof a=="function"){var u=a;a=function(){var m=ha(d);u.call(m)}}ma(n,d,e,a)}else d=Vm(t,n,e,a,s);return ha(d)}Il=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=kt(n.pendingLanes);t!==0&&(Xa(n,t|1),ar(n,_e()),(pe&6)===0&&(dt=_e()+500,ln()))}break;case 13:Pn(function(){var s=$r(e,1);if(s!==null){var a=er();_r(s,e,1,a)}}),Eo(e,1)}},ei=function(e){if(e.tag===13){var n=$r(e,134217728);if(n!==null){var t=er();_r(n,e,134217728,t)}Eo(e,134217728)}},Ml=function(e){if(e.tag===13){var n=hn(e),t=$r(e,n);if(t!==null){var s=er();_r(t,e,n,s)}Eo(e,n)}},Pl=function(){return fe},_l=function(e,n){var t=fe;try{return fe=e,n()}finally{fe=t}},qa=function(e,n,t){switch(n){case"input":if(Ba(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var s=t[n];if(s!==e&&s.form===e.form){var a=Rs(s);if(!a)throw Error(l(90));wn(s),Ba(s,a)}}}break;case"textarea":ol(e,t);break;case"select":n=t.value,n!=null&&Wn(e,!!t.multiple,n,!1)}},fl=wo,gl=Pn;var Qm={usingClientEntryPoint:!1,Events:[Gt,Kn,Rs,hl,xl,wo]},ns={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jm={bundleType:ns.bundleType,version:ns.version,rendererPackageName:ns.rendererPackageName,rendererConfig:ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wl(e),e===null?null:e.stateNode},findFiberByHostInstance:ns.findFiberByHostInstance||qm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!va.isDisabled&&va.supportsFiber)try{xs=va.inject(Jm),Ar=va}catch{}}return ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qm,ir.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mo(n))throw Error(l(200));return $m(e,n,null,t)},ir.createRoot=function(e,n){if(!Mo(e))throw Error(l(299));var t=!1,s="",a=Qd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Co(e,1,!1,null,null,t,!1,s,a),e[Wr]=n.current,Ft(e.nodeType===8?e.parentNode:e),new Io(n)},ir.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=wl(n),e=e===null?null:e.stateNode,e},ir.flushSync=function(e){return Pn(e)},ir.hydrate=function(e,n,t){if(!fa(n))throw Error(l(200));return ga(null,e,n,!0,t)},ir.hydrateRoot=function(e,n,t){if(!Mo(e))throw Error(l(405));var s=t!=null&&t.hydratedSources||null,a=!1,o="",d=Qd;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),n=qd(n,null,e,1,t!=null?t:null,a,!1,o,d),e[Wr]=n.current,Ft(e),s)for(e=0;e<s.length;e++)t=s[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new xa(n)},ir.render=function(e,n,t){if(!fa(n))throw Error(l(200));return ga(null,e,n,!1,t)},ir.unmountComponentAtNode=function(e){if(!fa(e))throw Error(l(40));return e._reactRootContainer?(Pn(function(){ga(null,null,e,!1,function(){e._reactRootContainer=null,e[Wr]=null})}),!0):!1},ir.unstable_batchedUpdates=wo,ir.unstable_renderSubtreeIntoContainer=function(e,n,t,s){if(!fa(t))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return ga(e,n,t,!1,s)},ir.version="18.3.1-next-f1338f8080-20240426",ir}var tp;function sh(){if(tp)return zo.exports;tp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),zo.exports=th(),zo.exports}var sp;function ah(){if(sp)return ja;sp=1;var i=sh();return ja.createRoot=i.createRoot,ja.hydrateRoot=i.hydrateRoot,ja}var ih=ah(),P=Jo();const fr=Km(P);var or=function(){return or=Object.assign||function(c){for(var l,p=1,h=arguments.length;p<h;p++){l=arguments[p];for(var j in l)Object.prototype.hasOwnProperty.call(l,j)&&(c[j]=l[j])}return c},or.apply(this,arguments)};function Ta(i,c,l){if(l||arguments.length===2)for(var p=0,h=c.length,j;p<h;p++)(j||!(p in c))&&(j||(j=Array.prototype.slice.call(c,0,p)),j[p]=c[p]);return i.concat(j||Array.prototype.slice.call(c))}var Ne="-ms-",is="-moz-",me="-webkit-",Sp="comm",Pa="rule",Yo="decl",oh="@import",lh="@namespace",Cp="@keyframes",ch="@layer",Ep=Math.abs,Ko=String.fromCharCode,Go=Object.assign;function dh(i,c){return Fe(i,0)^45?(((c<<2^Fe(i,0))<<2^Fe(i,1))<<2^Fe(i,2))<<2^Fe(i,3):0}function Ip(i){return i.trim()}function Jr(i,c){return(i=c.exec(i))?i[0]:i}function re(i,c,l){return i.replace(c,l)}function ya(i,c,l){return i.indexOf(c,l)}function Fe(i,c){return i.charCodeAt(c)|0}function Fn(i,c,l){return i.slice(c,l)}function zr(i){return i.length}function Mp(i){return i.length}function ss(i,c){return c.push(i),i}function ph(i,c){return i.map(c).join("")}function ap(i,c){return i.filter(function(l){return!Jr(l,c)})}var _a=1,mt=1,Pp=0,kr=0,Le=0,gt="";function za(i,c,l,p,h,j,b,S){return{value:i,root:c,parent:l,type:p,props:h,children:j,line:_a,column:mt,length:b,return:"",siblings:S}}function vn(i,c){return Go(za("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},c)}function ut(i){for(;i.root;)i=vn(i.root,{children:[i]});ss(i,i.siblings)}function uh(){return Le}function mh(){return Le=kr>0?Fe(gt,--kr):0,mt--,Le===10&&(mt=1,_a--),Le}function Rr(){return Le=kr<Pp?Fe(gt,kr++):0,mt++,Le===10&&(mt=1,_a++),Le}function jn(){return Fe(gt,kr)}function wa(){return kr}function Ra(i,c){return Fn(gt,i,c)}function ls(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hh(i){return _a=mt=1,Pp=zr(gt=i),kr=0,[]}function xh(i){return gt="",i}function Lo(i){return Ip(Ra(kr-1,Ho(i===91?i+2:i===40?i+1:i)))}function fh(i){for(;(Le=jn())&&Le<33;)Rr();return ls(i)>2||ls(Le)>3?"":" "}function gh(i,c){for(;--c&&Rr()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return Ra(i,wa()+(c<6&&jn()==32&&Rr()==32))}function Ho(i){for(;Rr();)switch(Le){case i:return kr;case 34:case 39:i!==34&&i!==39&&Ho(Le);break;case 40:i===41&&Ho(i);break;case 92:Rr();break}return kr}function vh(i,c){for(;Rr()&&i+Le!==57;)if(i+Le===84&&jn()===47)break;return"/*"+Ra(c,kr-1)+"*"+Ko(i===47?i:Rr())}function jh(i){for(;!ls(jn());)Rr();return Ra(i,kr)}function yh(i){return xh(ba("",null,null,null,[""],i=hh(i),0,[0],i))}function ba(i,c,l,p,h,j,b,S,g){for(var J=0,q=0,W=b,Z=0,oe=0,Y=0,G=1,V=1,he=1,ce=0,ne="",_=h,K=j,H=p,M=ne;V;)switch(Y=ce,ce=Rr()){case 40:if(Y!=108&&Fe(M,W-1)==58){ya(M+=re(Lo(ce),"&","&\f"),"&\f",Ep(J?S[J-1]:0))!=-1&&(he=-1);break}case 34:case 39:case 91:M+=Lo(ce);break;case 9:case 10:case 13:case 32:M+=fh(Y);break;case 92:M+=gh(wa()-1,7);continue;case 47:switch(jn()){case 42:case 47:ss(wh(vh(Rr(),wa()),c,l,g),g),(ls(Y||1)==5||ls(jn()||1)==5)&&zr(M)&&Fn(M,-1,void 0)!==" "&&(M+=" ");break;default:M+="/"}break;case 123*G:S[J++]=zr(M)*he;case 125*G:case 59:case 0:switch(ce){case 0:case 125:V=0;case 59+q:he==-1&&(M=re(M,/\f/g,"")),oe>0&&(zr(M)-W||G===0&&Y===47)&&ss(oe>32?op(M+";",p,l,W-1,g):op(re(M," ","")+";",p,l,W-2,g),g);break;case 59:M+=";";default:if(ss(H=ip(M,c,l,J,q,h,S,ne,_=[],K=[],W,j),j),ce===123)if(q===0)ba(M,c,H,H,_,j,W,S,K);else{switch(Z){case 99:if(Fe(M,3)===110)break;case 108:if(Fe(M,2)===97)break;default:q=0;case 100:case 109:case 115:}q?ba(i,H,H,p&&ss(ip(i,H,H,0,0,h,S,ne,h,_=[],W,K),K),h,K,W,S,p?_:K):ba(M,H,H,H,[""],K,0,S,K)}}J=q=oe=0,G=he=1,ne=M="",W=b;break;case 58:W=1+zr(M),oe=Y;default:if(G<1){if(ce==123)--G;else if(ce==125&&G++==0&&mh()==125)continue}switch(M+=Ko(ce),ce*G){case 38:he=q>0?1:(M+="\f",-1);break;case 44:S[J++]=(zr(M)-1)*he,he=1;break;case 64:jn()===45&&(M+=Lo(Rr())),Z=jn(),q=W=zr(ne=M+=jh(wa())),ce++;break;case 45:Y===45&&zr(M)==2&&(G=0)}}return j}function ip(i,c,l,p,h,j,b,S,g,J,q,W){for(var Z=h-1,oe=h===0?j:[""],Y=Mp(oe),G=0,V=0,he=0;G<p;++G)for(var ce=0,ne=Fn(i,Z+1,Z=Ep(V=b[G])),_=i;ce<Y;++ce)(_=Ip(V>0?oe[ce]+" "+ne:re(ne,/&\f/g,oe[ce])))&&(g[he++]=_);return za(i,c,l,h===0?Pa:S,g,J,q,W)}function wh(i,c,l,p){return za(i,c,l,Sp,Ko(uh()),Fn(i,2,-2),0,p)}function op(i,c,l,p,h){return za(i,c,l,Yo,Fn(i,0,p),Fn(i,p+1,-1),p,h)}function _p(i,c,l){switch(dh(i,c)){case 5103:return me+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return me+i+i;case 4855:return me+i.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+i;case 4789:return is+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return me+i+is+i+Ne+i+i;case 5936:switch(Fe(i,c+11)){case 114:return me+i+Ne+re(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return me+i+Ne+re(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return me+i+Ne+re(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return me+i+Ne+i+i;case 6165:return me+i+Ne+"flex-"+i+i;case 5187:return me+i+re(i,/(\w+).+(:[^]+)/,me+"box-$1$2"+Ne+"flex-$1$2")+i;case 5443:return me+i+Ne+"flex-item-"+re(i,/flex-|-self/g,"")+(Jr(i,/flex-|baseline/)?"":Ne+"grid-row-"+re(i,/flex-|-self/g,""))+i;case 4675:return me+i+Ne+"flex-line-pack"+re(i,/align-content|flex-|-self/g,"")+i;case 5548:return me+i+Ne+re(i,"shrink","negative")+i;case 5292:return me+i+Ne+re(i,"basis","preferred-size")+i;case 6060:return me+"box-"+re(i,"-grow","")+me+i+Ne+re(i,"grow","positive")+i;case 4554:return me+re(i,/([^-])(transform)/g,"$1"+me+"$2")+i;case 6187:return re(re(re(i,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),i,"")+i;case 5495:case 3959:return re(i,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return re(re(i,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+Ne+"flex-pack:$3"),/space-between/,"justify")+me+i+i;case 4200:if(!Jr(i,/flex-|baseline/))return Ne+"grid-column-align"+Fn(i,c)+i;break;case 2592:case 3360:return Ne+re(i,"template-","")+i;case 4384:case 3616:return l&&l.some(function(p,h){return c=h,Jr(p.props,/grid-\w+-end/)})?~ya(i+(l=l[c].value),"span",0)?i:Ne+re(i,"-start","")+i+Ne+"grid-row-span:"+(~ya(l,"span",0)?Jr(l,/\d+/):+Jr(l,/\d+/)-+Jr(i,/\d+/))+";":Ne+re(i,"-start","")+i;case 4896:case 4128:return l&&l.some(function(p){return Jr(p.props,/grid-\w+-start/)})?i:Ne+re(re(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return re(i,/(.+)-inline(.+)/,me+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zr(i)-1-c>6)switch(Fe(i,c+1)){case 109:if(Fe(i,c+4)!==45)break;case 102:return re(i,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+is+(Fe(i,c+3)==108?"$3":"$2-$3"))+i;case 115:return~ya(i,"stretch",0)?_p(re(i,"stretch","fill-available"),c,l)+i:i}break;case 5152:case 5920:return re(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(p,h,j,b,S,g,J){return Ne+h+":"+j+J+(b?Ne+h+"-span:"+(S?g:+g-+j)+J:"")+i});case 4949:if(Fe(i,c+6)===121)return re(i,":",":"+me)+i;break;case 6444:switch(Fe(i,Fe(i,14)===45?18:11)){case 120:return re(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(Fe(i,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+Ne+"$2box$3")+i;case 100:return re(i,":",":"+Ne)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(i,"scroll-","scroll-snap-")+i}return i}function Sa(i,c){for(var l="",p=0;p<i.length;p++)l+=c(i[p],p,i,c)||"";return l}function bh(i,c,l,p){switch(i.type){case ch:if(i.children.length)break;case oh:case lh:case Yo:return i.return=i.return||i.value;case Sp:return"";case Cp:return i.return=i.value+"{"+Sa(i.children,p)+"}";case Pa:if(!zr(i.value=i.props.join(",")))return""}return zr(l=Sa(i.children,p))?i.return=i.value+"{"+l+"}":""}function Nh(i){var c=Mp(i);return function(l,p,h,j){for(var b="",S=0;S<c;S++)b+=i[S](l,p,h,j)||"";return b}}function kh(i){return function(c){c.root||(c=c.return)&&i(c)}}function Th(i,c,l,p){if(i.length>-1&&!i.return)switch(i.type){case Yo:i.return=_p(i.value,i.length,l);return;case Cp:return Sa([vn(i,{value:re(i.value,"@","@"+me)})],p);case Pa:if(i.length)return ph(l=i.props,function(h){switch(Jr(h,p=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ut(vn(i,{props:[re(h,/:(read-\w+)/,":"+is+"$1")]})),ut(vn(i,{props:[h]})),Go(i,{props:ap(l,p)});break;case"::placeholder":ut(vn(i,{props:[re(h,/:(plac\w+)/,":"+me+"input-$1")]})),ut(vn(i,{props:[re(h,/:(plac\w+)/,":"+is+"$1")]})),ut(vn(i,{props:[re(h,/:(plac\w+)/,Ne+"input-$1")]})),ut(vn(i,{props:[h]})),Go(i,{props:ap(l,p)});break}return""})}}var Sh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xr={},ht=typeof process!="undefined"&&xr!==void 0&&(xr.REACT_APP_SC_ATTR||xr.SC_ATTR)||"data-styled",zp="active",Rp="data-styled-version",Aa="6.3.10",Zo=`/*!sc*/
`,os=typeof window!="undefined"&&typeof document!="undefined",Ch=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&xr!==void 0&&xr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xr.REACT_APP_SC_DISABLE_SPEEDY!==""?xr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&xr!==void 0&&xr.SC_DISABLE_SPEEDY!==void 0&&xr.SC_DISABLE_SPEEDY!==""&&xr.SC_DISABLE_SPEEDY!=="false"&&xr.SC_DISABLE_SPEEDY);function ds(i){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Na=new Map,Ca=new Map,ka=1,as=function(i){if(Na.has(i))return Na.get(i);for(;Ca.has(ka);)ka++;var c=ka++;return Na.set(i,c),Ca.set(c,i),c},Eh=function(i,c){ka=c+1,Na.set(i,c),Ca.set(c,i)},Xo=Object.freeze([]),xt=Object.freeze({});function Ih(i,c,l){return l===void 0&&(l=xt),i.theme!==l.theme&&i.theme||c||l.theme}var Ap=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Mh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ph=/(^-|-$)/g;function lp(i){return i.replace(Mh,"-").replace(Ph,"")}var _h=/(a)(d)/gi,cp=function(i){return String.fromCharCode(i+(i>25?39:97))};function Uo(i){var c,l="";for(c=Math.abs(i);c>52;c=c/52|0)l=cp(c%52)+l;return(cp(c%52)+l).replace(_h,"$1-$2")}var Oo,An=function(i,c){for(var l=c.length;l;)i=33*i^c.charCodeAt(--l);return i},Lp=function(i){return An(5381,i)};function zh(i){return Uo(Lp(i)>>>0)}function Rh(i){return i.displayName||i.name||"Component"}function Bo(i){return typeof i=="string"&&!0}var Op=typeof Symbol=="function"&&Symbol.for,Bp=Op?Symbol.for("react.memo"):60115,Ah=Op?Symbol.for("react.forward_ref"):60112,Lh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Oh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Bh=((Oo={})[Ah]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Oo[Bp]=Fp,Oo);function dp(i){return("type"in(c=i)&&c.type.$$typeof)===Bp?Fp:"$$typeof"in i?Bh[i.$$typeof]:Lh;var c}var Fh=Object.defineProperty,Dh=Object.getOwnPropertyNames,pp=Object.getOwnPropertySymbols,Wh=Object.getOwnPropertyDescriptor,Gh=Object.getPrototypeOf,up=Object.prototype;function Dp(i,c,l){if(typeof c!="string"){if(up){var p=Gh(c);p&&p!==up&&Dp(i,p,l)}var h=Dh(c);pp&&(h=h.concat(pp(c)));for(var j=dp(i),b=dp(c),S=0;S<h.length;++S){var g=h[S];if(!(g in Oh||l&&l[g]||b&&g in b||j&&g in j)){var J=Wh(c,g);try{Fh(i,g,J)}catch{}}}}return i}function ft(i){return typeof i=="function"}function el(i){return typeof i=="object"&&"styledComponentId"in i}function On(i,c){return i&&c?"".concat(i," ").concat(c):i||c||""}function mp(i,c){return i.join("")}function cs(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function $o(i,c,l){if(l===void 0&&(l=!1),!l&&!cs(i)&&!Array.isArray(i))return c;if(Array.isArray(c))for(var p=0;p<c.length;p++)i[p]=$o(i[p],c[p]);else if(cs(c))for(var p in c)i[p]=$o(i[p],c[p]);return i}function rl(i,c){Object.defineProperty(i,"toString",{value:c})}var Hh=(function(){function i(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return i.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var l=this._cIndex;if(c>this._cGroup)for(var p=this._cGroup;p<c;p++)l+=this.groupSizes[p];else for(p=this._cGroup-1;p>=c;p--)l-=this.groupSizes[p];return this._cGroup=c,this._cIndex=l,l},i.prototype.insertRules=function(c,l){if(c>=this.groupSizes.length){for(var p=this.groupSizes,h=p.length,j=h;c>=j;)if((j<<=1)<0)throw ds(16,"".concat(c));this.groupSizes=new Uint32Array(j),this.groupSizes.set(p),this.length=j;for(var b=h;b<j;b++)this.groupSizes[b]=0}for(var S=this.indexOfGroup(c+1),g=0,J=(b=0,l.length);b<J;b++)this.tag.insertRule(S,l[b])&&(this.groupSizes[c]++,S++,g++);g>0&&this._cGroup>c&&(this._cIndex+=g)},i.prototype.clearGroup=function(c){if(c<this.length){var l=this.groupSizes[c],p=this.indexOfGroup(c),h=p+l;this.groupSizes[c]=0;for(var j=p;j<h;j++)this.tag.deleteRule(p);l>0&&this._cGroup>c&&(this._cIndex-=l)}},i.prototype.getGroup=function(c){var l="";if(c>=this.length||this.groupSizes[c]===0)return l;for(var p=this.groupSizes[c],h=this.indexOfGroup(c),j=h+p,b=h;b<j;b++)l+=this.tag.getRule(b)+Zo;return l},i})(),Uh="style[".concat(ht,"][").concat(Rp,'="').concat(Aa,'"]'),$h=new RegExp("^".concat(ht,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),hp=function(i){return typeof ShadowRoot!="undefined"&&i instanceof ShadowRoot||"host"in i&&i.nodeType===11},qo=function(i){if(!i)return document;if(hp(i))return i;if("getRootNode"in i){var c=i.getRootNode();if(hp(c))return c}return document},qh=function(i,c,l){for(var p,h=l.split(","),j=0,b=h.length;j<b;j++)(p=h[j])&&i.registerName(c,p)},Vh=function(i,c){for(var l,p=((l=c.textContent)!==null&&l!==void 0?l:"").split(Zo),h=[],j=0,b=p.length;j<b;j++){var S=p[j].trim();if(S){var g=S.match($h);if(g){var J=0|parseInt(g[1],10),q=g[2];J!==0&&(Eh(q,J),qh(i,q,g[3]),i.getTag().insertRules(J,h)),h.length=0}else h.push(S)}}},Fo=function(i){for(var c=qo(i.options.target).querySelectorAll(Uh),l=0,p=c.length;l<p;l++){var h=c[l];h&&h.getAttribute(ht)!==zp&&(Vh(i,h),h.parentNode&&h.parentNode.removeChild(h))}};function Qh(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Wp=function(i){var c=document.head,l=i||c,p=document.createElement("style"),h=(function(S){var g=Array.from(S.querySelectorAll("style[".concat(ht,"]")));return g[g.length-1]})(l),j=h!==void 0?h.nextSibling:null;p.setAttribute(ht,zp),p.setAttribute(Rp,Aa);var b=Qh();return b&&p.setAttribute("nonce",b),l.insertBefore(p,j),p},Jh=(function(){function i(c){this.element=Wp(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){var p;if(l.sheet)return l.sheet;for(var h=(p=l.getRootNode().styleSheets)!==null&&p!==void 0?p:document.styleSheets,j=0,b=h.length;j<b;j++){var S=h[j];if(S.ownerNode===l)return S}throw ds(17)})(this.element),this.length=0}return i.prototype.insertRule=function(c,l){try{return this.sheet.insertRule(l,c),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},i.prototype.getRule=function(c){var l=this.sheet.cssRules[c];return l&&l.cssText?l.cssText:""},i})(),Yh=(function(){function i(c){this.element=Wp(c),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(c,l){if(c<=this.length&&c>=0){var p=document.createTextNode(l);return this.element.insertBefore(p,this.nodes[c]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},i.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},i})(),Kh=(function(){function i(c){this.rules=[],this.length=0}return i.prototype.insertRule=function(c,l){return c<=this.length&&(c===this.length?this.rules.push(l):this.rules.splice(c,0,l),this.length++,!0)},i.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},i.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},i})(),xp=os,Zh={isServer:!os,useCSSOMInjection:!Ch},Gp=(function(){function i(c,l,p){c===void 0&&(c=xt),l===void 0&&(l={});var h=this;this.options=or(or({},Zh),c),this.gs=l,this.names=new Map(p),this.server=!!c.isServer,!this.server&&os&&xp&&(xp=!1,Fo(this)),rl(this,function(){return(function(j){for(var b=j.getTag(),S=b.length,g="",J=function(W){var Z=(function(he){return Ca.get(he)})(W);if(Z===void 0)return"continue";var oe=j.names.get(Z);if(oe===void 0||!oe.size)return"continue";var Y=b.getGroup(W);if(Y.length===0)return"continue";var G=ht+".g"+W+'[id="'+Z+'"]',V="";oe.forEach(function(he){he.length>0&&(V+=he+",")}),g+=Y+G+'{content:"'+V+'"}'+Zo},q=0;q<S;q++)J(q);return g})(h)})}return i.registerId=function(c){return as(c)},i.prototype.rehydrate=function(){!this.server&&os&&Fo(this)},i.prototype.reconstructWithOptions=function(c,l){l===void 0&&(l=!0);var p=new i(or(or({},this.options),c),this.gs,l&&this.names||void 0);return!this.server&&os&&c.target!==this.options.target&&qo(this.options.target)!==qo(c.target)&&Fo(p),p},i.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(l){var p=l.useCSSOMInjection,h=l.target;return l.isServer?new Kh(h):p?new Jh(h):new Yh(h)})(this.options),new Hh(c)));var c},i.prototype.hasNameForId=function(c,l){var p,h;return(h=(p=this.names.get(c))===null||p===void 0?void 0:p.has(l))!==null&&h!==void 0&&h},i.prototype.registerName=function(c,l){as(c);var p=this.names.get(c);p?p.add(l):this.names.set(c,new Set([l]))},i.prototype.insertRules=function(c,l,p){this.registerName(c,l),this.getTag().insertRules(as(c),p)},i.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},i.prototype.clearRules=function(c){this.getTag().clearGroup(as(c)),this.clearNames(c)},i.prototype.clearTag=function(){this.tag=void 0},i})(),Xh=/&/g,Yr=47,Ln=42;function fp(i){if(i.indexOf("}")===-1)return!1;for(var c=i.length,l=0,p=0,h=!1,j=0;j<c;j++){var b=i.charCodeAt(j);if(p!==0||h||b!==Yr||i.charCodeAt(j+1)!==Ln)if(h)b===Ln&&i.charCodeAt(j+1)===Yr&&(h=!1,j++);else if(b!==34&&b!==39||j!==0&&i.charCodeAt(j-1)===92){if(p===0){if(b===123)l++;else if(b===125&&--l<0)return!0}}else p===0?p=b:p===b&&(p=0);else h=!0,j++}return l!==0||p!==0}function Hp(i,c){return i.map(function(l){return l.type==="rule"&&(l.value="".concat(c," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(c," ")),l.props=l.props.map(function(p){return"".concat(c," ").concat(p)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=Hp(l.children,c)),l})}function ex(i){var c,l,p,h=xt,j=h.options,b=j===void 0?xt:j,S=h.plugins,g=S===void 0?Xo:S,J=function(Y,G,V){return V.startsWith(l)&&V.endsWith(l)&&V.replaceAll(l,"").length>0?".".concat(c):Y},q=g.slice();q.push(function(Y){Y.type===Pa&&Y.value.includes("&")&&(p||(p=new RegExp("\\".concat(l,"\\b"),"g")),Y.props[0]=Y.props[0].replace(Xh,l).replace(p,J))}),b.prefix&&q.push(Th),q.push(bh);var W=[],Z=Nh(q.concat(kh(function(Y){return W.push(Y)}))),oe=function(Y,G,V,he){G===void 0&&(G=""),V===void 0&&(V=""),he===void 0&&(he="&"),c=he,l=G,p=void 0;var ce=(function(_){if(!fp(_))return _;for(var K=_.length,H="",M=0,B=0,ge=0,Pe=!1,ae=0;ae<K;ae++){var Ie=_.charCodeAt(ae);if(ge!==0||Pe||Ie!==Yr||_.charCodeAt(ae+1)!==Ln)if(Pe)Ie===Ln&&_.charCodeAt(ae+1)===Yr&&(Pe=!1,ae++);else if(Ie!==34&&Ie!==39||ae!==0&&_.charCodeAt(ae-1)===92){if(ge===0)if(Ie===123)B++;else if(Ie===125){if(--B<0){for(var ke=ae+1;ke<K;){var qe=_.charCodeAt(ke);if(qe===59||qe===10)break;ke++}ke<K&&_.charCodeAt(ke)===59&&ke++,B=0,ae=ke-1,M=ke;continue}B===0&&(H+=_.substring(M,ae+1),M=ae+1)}else Ie===59&&B===0&&(H+=_.substring(M,ae+1),M=ae+1)}else ge===0?ge=Ie:ge===Ie&&(ge=0);else Pe=!0,ae++}if(M<K){var Ze=_.substring(M);fp(Ze)||(H+=Ze)}return H})((function(_){if(_.indexOf("//")===-1)return _;for(var K=_.length,H=[],M=0,B=0,ge=0,Pe=0;B<K;){var ae=_.charCodeAt(B);if(ae!==34&&ae!==39||B!==0&&_.charCodeAt(B-1)===92)if(ge===0)if(ae===Yr&&B+1<K&&_.charCodeAt(B+1)===Ln){for(B+=2;B+1<K&&(_.charCodeAt(B)!==Ln||_.charCodeAt(B+1)!==Yr);)B++;B+=2}else if(ae===40&&B>=3&&(32|_.charCodeAt(B-1))==108&&(32|_.charCodeAt(B-2))==114&&(32|_.charCodeAt(B-3))==117)Pe=1,B++;else if(Pe>0)ae===41?Pe--:ae===40&&Pe++,B++;else if(ae===Ln&&B+1<K&&_.charCodeAt(B+1)===Yr)B>M&&H.push(_.substring(M,B)),M=B+=2;else if(ae===Yr&&B+1<K&&_.charCodeAt(B+1)===Yr){for(B>M&&H.push(_.substring(M,B));B<K&&_.charCodeAt(B)!==10;)B++;M=B}else B++;else B++;else ge===0?ge=ae:ge===ae&&(ge=0),B++}return M===0?_:(M<K&&H.push(_.substring(M)),H.join(""))})(Y)),ne=yh(V||G?"".concat(V," ").concat(G," { ").concat(ce," }"):ce);return b.namespace&&(ne=Hp(ne,b.namespace)),W=[],Sa(ne,Z),W};return oe.hash=g.length?g.reduce(function(Y,G){return G.name||ds(15),An(Y,G.name)},5381).toString():"",oe}var rx=new Gp,Vo=ex(),Up=fr.createContext({shouldForwardProp:void 0,styleSheet:rx,stylis:Vo});Up.Consumer;fr.createContext(void 0);function gp(){return fr.useContext(Up)}var nx=(function(){function i(c,l){var p=this;this.inject=function(h,j){j===void 0&&(j=Vo);var b=p.name+j.hash;h.hasNameForId(p.id,b)||h.insertRules(p.id,b,j(p.rules,b,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=l,rl(this,function(){throw ds(12,String(p.name))})}return i.prototype.getName=function(c){return c===void 0&&(c=Vo),this.name+c.hash},i})();function tx(i,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||i in Sh||i.startsWith("--")?String(c).trim():"".concat(c,"px")}var sx=function(i){return i>="A"&&i<="Z"};function vp(i){for(var c="",l=0;l<i.length;l++){var p=i[l];if(l===1&&p==="-"&&i[0]==="-")return i;sx(p)?c+="-"+p.toLowerCase():c+=p}return c.startsWith("ms-")?"-"+c:c}var $p=function(i){return i==null||i===!1||i===""},qp=function(i){var c=[];for(var l in i){var p=i[l];i.hasOwnProperty(l)&&!$p(p)&&(Array.isArray(p)&&p.isCss||ft(p)?c.push("".concat(vp(l),":"),p,";"):cs(p)?c.push.apply(c,Ta(Ta(["".concat(l," {")],qp(p),!1),["}"],!1)):c.push("".concat(vp(l),": ").concat(tx(l,p),";")))}return c};function Bn(i,c,l,p,h){if(h===void 0&&(h=[]),typeof i=="string")return i&&h.push(i),h;if($p(i))return h;if(el(i))return h.push(".".concat(i.styledComponentId)),h;if(ft(i)){if(!ft(b=i)||b.prototype&&b.prototype.isReactComponent||!c)return h.push(i),h;var j=i(c);return Bn(j,c,l,p,h)}var b;if(i instanceof nx)return l?(i.inject(l,p),h.push(i.getName(p))):h.push(i),h;if(cs(i)){for(var S=qp(i),g=0;g<S.length;g++)h.push(S[g]);return h}if(!Array.isArray(i))return h.push(i.toString()),h;for(g=0;g<i.length;g++)Bn(i[g],c,l,p,h);return h}function ax(i){for(var c=0;c<i.length;c+=1){var l=i[c];if(ft(l)&&!el(l))return!1}return!0}var ix=Lp(Aa),ox=(function(){function i(c,l,p){this.rules=c,this.staticRulesId="",this.isStatic=(p===void 0||p.isStatic)&&ax(c),this.componentId=l,this.baseHash=An(ix,l),this.baseStyle=p,Gp.registerId(l)}return i.prototype.generateAndInjectStyles=function(c,l,p){var h=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,l,p).className:"";if(this.isStatic&&!p.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))h=On(h,this.staticRulesId);else{var j=mp(Bn(this.rules,c,l,p)),b=Uo(An(this.baseHash,j)>>>0);if(!l.hasNameForId(this.componentId,b)){var S=p(j,".".concat(b),void 0,this.componentId);l.insertRules(this.componentId,b,S)}h=On(h,b),this.staticRulesId=b}else{for(var g=An(this.baseHash,p.hash),J="",q=0;q<this.rules.length;q++){var W=this.rules[q];if(typeof W=="string")J+=W;else if(W){var Z=mp(Bn(W,c,l,p));g=An(An(g,String(q)),Z),J+=Z}}if(J){var oe=Uo(g>>>0);if(!l.hasNameForId(this.componentId,oe)){var Y=p(J,".".concat(oe),void 0,this.componentId);l.insertRules(this.componentId,oe,Y)}h=On(h,oe)}}return{className:h,css:typeof window=="undefined"?l.getTag().getGroup(as(this.componentId)):""}},i})(),Vp=fr.createContext(void 0);Vp.Consumer;var Do={};function lx(i,c,l){var p=el(i),h=i,j=!Bo(i),b=c.attrs,S=b===void 0?Xo:b,g=c.componentId,J=g===void 0?(function(_,K){var H=typeof _!="string"?"sc":lp(_);Do[H]=(Do[H]||0)+1;var M="".concat(H,"-").concat(zh(Aa+H+Do[H]));return K?"".concat(K,"-").concat(M):M})(c.displayName,c.parentComponentId):g,q=c.displayName,W=q===void 0?(function(_){return Bo(_)?"styled.".concat(_):"Styled(".concat(Rh(_),")")})(i):q,Z=c.displayName&&c.componentId?"".concat(lp(c.displayName),"-").concat(c.componentId):c.componentId||J,oe=p&&h.attrs?h.attrs.concat(S).filter(Boolean):S,Y=c.shouldForwardProp;if(p&&h.shouldForwardProp){var G=h.shouldForwardProp;if(c.shouldForwardProp){var V=c.shouldForwardProp;Y=function(_,K){return G(_,K)&&V(_,K)}}else Y=G}var he=new ox(l,Z,p?h.componentStyle:void 0);function ce(_,K){return(function(H,M,B){var ge=H.attrs,Pe=H.componentStyle,ae=H.defaultProps,Ie=H.foldedComponentIds,ke=H.styledComponentId,qe=H.target,Ze=fr.useContext(Vp),Ve=gp(),ve=H.shouldForwardProp||Ve.shouldForwardProp,I=Ih(M,Ze,ae)||xt,D=(function(se,de,le){for(var xe,Se=or(or({},de),{className:void 0,theme:le}),Kr=0;Kr<se.length;Kr+=1){var wn=ft(xe=se[Kr])?xe(Se):xe;for(var Tr in wn)Tr==="className"?Se.className=On(Se.className,wn[Tr]):Tr==="style"?Se.style=or(or({},Se.style),wn[Tr]):Se[Tr]=wn[Tr]}return"className"in de&&typeof de.className=="string"&&(Se.className=On(Se.className,de.className)),Se})(ge,M,I),z=D.as||qe,f={};for(var N in D)D[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&D.theme===I||(N==="forwardedAs"?f.as=D.forwardedAs:ve&&!ve(N,z)||(f[N]=D[N]));var X=(function(se,de){var le=gp(),xe=se.generateAndInjectStyles(de,le.styleSheet,le.stylis);return xe})(Pe,D),ee=X.className,ie=On(Ie,ke);return ee&&(ie+=" "+ee),D.className&&(ie+=" "+D.className),f[Bo(z)&&!Ap.has(z)?"class":"className"]=ie,B&&(f.ref=B),P.createElement(z,f)})(ne,_,K)}ce.displayName=W;var ne=fr.forwardRef(ce);return ne.attrs=oe,ne.componentStyle=he,ne.displayName=W,ne.shouldForwardProp=Y,ne.foldedComponentIds=p?On(h.foldedComponentIds,h.styledComponentId):"",ne.styledComponentId=Z,ne.target=p?h.target:i,Object.defineProperty(ne,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=p?(function(K){for(var H=[],M=1;M<arguments.length;M++)H[M-1]=arguments[M];for(var B=0,ge=H;B<ge.length;B++)$o(K,ge[B],!0);return K})({},h.defaultProps,_):_}}),rl(ne,function(){return".".concat(ne.styledComponentId)}),j&&Dp(ne,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ne}function jp(i,c){for(var l=[i[0]],p=0,h=c.length;p<h;p+=1)l.push(c[p],i[p+1]);return l}var yp=function(i){return Object.assign(i,{isCss:!0})};function cx(i){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];if(ft(i)||cs(i))return yp(Bn(jp(Xo,Ta([i],c,!0))));var p=i;return c.length===0&&p.length===1&&typeof p[0]=="string"?Bn(p):yp(Bn(jp(p,c)))}function Qo(i,c,l){if(l===void 0&&(l=xt),!c)throw ds(1,c);var p=function(h){for(var j=[],b=1;b<arguments.length;b++)j[b-1]=arguments[b];return i(c,l,cx.apply(void 0,Ta([h],j,!1)))};return p.attrs=function(h){return Qo(i,c,or(or({},l),{attrs:Array.prototype.concat(l.attrs,h).filter(Boolean)}))},p.withConfig=function(h){return Qo(i,c,or(or({},l),h))},p}var Qp=function(i){return Qo(lx,i)},Re=Qp;Ap.forEach(function(i){Re[i]=Qp(i)});const Wo={Wrapper:Re.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:Re.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:Re.main`
        /* border: 1px solid #f00; */
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            /* border: 1px solid #f00; */
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }
    `},wp={Wrapper:Re.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;

        border-bottom: 1px solid var(--color-border);

        background: color-mix(
            in srgb,
            var(--color-bg) 86%,
            var(--color-surface)
        );

        position: sticky;
        top: 0;
        z-index: 50;
        height: 64px;

        box-shadow: 0 10px 30px var(--color-shadow);
        overflow: hidden;

        /* JS internals vibe: "runtime grid + scan beam" */
        &::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                radial-gradient(
                    900px 220px at 20% 0%,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent 62%
                ),
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent
                ),
                repeating-linear-gradient(
                    90deg,
                    color-mix(in srgb, var(--color-border) 22%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 22%, transparent) 1px,
                    transparent 1px,
                    transparent 20px
                );
            opacity: 0.7;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.92),
                rgba(0, 0, 0, 0)
            );
        }

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            pointer-events: none;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 92%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }
    `,Main:Re.div`
        width: 100%;
        max-width: 1440px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        position: relative;
        z-index: 1;

        .leftSide {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 14px;
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 6px;

            background:
                radial-gradient(
                    90px 70px at 20% 20%,
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                    transparent 60%
                ),
                radial-gradient(
                    90px 70px at 85% 80%,
                    color-mix(in srgb, var(--color-accent) 12%, transparent),
                    transparent 60%
                ),
                linear-gradient(
                    180deg,
                    var(--color-surface),
                    var(--color-surface-2)
                );

            border: 1px solid var(--color-border);

            box-shadow:
                0 0 0 1px
                    color-mix(in srgb, var(--color-primary) 12%, transparent),
                0 14px 30px var(--color-shadow);

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
                filter: saturate(1.05) contrast(1.03);
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background:
                    radial-gradient(
                        120px 90px at 20% 20%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 22%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    radial-gradient(
                        120px 90px at 85% 80%,
                        color-mix(
                            in srgb,
                            var(--color-accent) 16%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    var(--color-surface-2);
                opacity: 0.85;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 900;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 560px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .miniStats {
            display: flex;
            align-items: center;
            gap: 8px;
            flex: 0 0 auto;

            @media (width < 860px) {
                display: none;
            }
        }

        .stat {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 10px 22px var(--color-shadow);

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;

            .sIcon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }

            .sIcon svg {
                width: 14px;
                height: 14px;
            }

            .sText {
                line-height: 1;
            }
        }

        .rightSide {
            display: flex;
            align-items: center;
            gap: 10px;
            flex: 0 0 auto;
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 14px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);

            box-shadow: 0 10px 22px var(--color-shadow);

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;

                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }

            .label {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: linear-gradient(
                    180deg,
                    color-mix(in srgb, var(--color-surface) 92%, transparent),
                    color-mix(in srgb, var(--color-surface-2) 78%, #000)
                );
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
                box-shadow:
                    0 0 0 4px
                        color-mix(
                            in srgb,
                            var(--color-primary) 18%,
                            transparent
                        ),
                    0 10px 22px var(--color-shadow);
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `},dx="/engineering-javascript-internals/images/transparentLogo.png";var Jp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},bp=fr.createContext&&fr.createContext(Jp),px=["attr","size","title"];function ux(i,c){if(i==null)return{};var l=mx(i,c),p,h;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(i);for(h=0;h<j.length;h++)p=j[h],!(c.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(i,p)&&(l[p]=i[p])}return l}function mx(i,c){if(i==null)return{};var l={};for(var p in i)if(Object.prototype.hasOwnProperty.call(i,p)){if(c.indexOf(p)>=0)continue;l[p]=i[p]}return l}function Ea(){return Ea=Object.assign?Object.assign.bind():function(i){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&(i[p]=l[p])}return i},Ea.apply(this,arguments)}function Np(i,c){var l=Object.keys(i);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(i);c&&(p=p.filter(function(h){return Object.getOwnPropertyDescriptor(i,h).enumerable})),l.push.apply(l,p)}return l}function Ia(i){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?Np(Object(l),!0).forEach(function(p){hx(i,p,l[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(l)):Np(Object(l)).forEach(function(p){Object.defineProperty(i,p,Object.getOwnPropertyDescriptor(l,p))})}return i}function hx(i,c,l){return c=xx(c),c in i?Object.defineProperty(i,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[c]=l,i}function xx(i){var c=fx(i,"string");return typeof c=="symbol"?c:c+""}function fx(i,c){if(typeof i!="object"||!i)return i;var l=i[Symbol.toPrimitive];if(l!==void 0){var p=l.call(i,c);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(i)}function Yp(i){return i&&i.map((c,l)=>fr.createElement(c.tag,Ia({key:l},c.attr),Yp(c.child)))}function ye(i){return c=>fr.createElement(gx,Ea({attr:Ia({},i.attr)},c),Yp(i.child))}function gx(i){var c=l=>{var{attr:p,size:h,title:j}=i,b=ux(i,px),S=h||l.size||"1em",g;return l.className&&(g=l.className),i.className&&(g=(g?g+" ":"")+i.className),fr.createElement("svg",Ea({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,p,b,{className:g,style:Ia(Ia({color:i.color||l.color},l.style),i.style),height:S,width:S,xmlns:"http://www.w3.org/2000/svg"}),j&&fr.createElement("title",null,j),i.children)};return bp!==void 0?fr.createElement(bp.Consumer,null,l=>c(l)):c(Jp)}function vx(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(i)}function He(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(i)}function jx(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"polyline",attr:{points:"19 12 12 19 5 12"},child:[]}]})(i)}function yx(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(i)}function wx(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(i)}function lr(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(i)}function gr(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(i)}function Dn(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(i)}function La(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(i)}function Dr(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(i)}function nl(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(i)}function bx(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(i)}function Kp(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(i)}function cr(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(i)}function yn(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(i)}function Nx(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(i)}function kx(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(i)}function Tx(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(i)}function Zp(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"},child:[]}]})(i)}function Sx(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(i)}function Ma(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(i)}function Xp(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(i)}function Cx(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(i)}function kp(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(i)}function eu(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(i)}function dr(i){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(i)}const Tp="engineering-javascript-internals-theme",Ex=()=>{const[i,c]=P.useState(!1),[l,p]=P.useState("dark");P.useEffect(()=>{const S=localStorage.getItem(Tp)||"dark";p(S),S==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),P.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem(Tp,l)},[l]);const h=P.useMemo(()=>l==="light"?"dark":"light",[l]),j=()=>{p(h)};return r.jsx(wp.Wrapper,{children:r.jsxs(wp.Main,{children:[r.jsxs("div",{className:"leftSide",children:[r.jsxs("div",{className:"logoNameWrapper",children:[r.jsxs("div",{className:"logoWrapper",children:[!i&&r.jsx("div",{className:"logoSkeleton"}),r.jsx("img",{src:dx,alt:"engineering-javascript-internals",onLoad:()=>c(!0),style:{opacity:i?1:0}})]}),r.jsxs("div",{className:"nameWrapper",children:[r.jsx("div",{className:"title",children:"engineering-javascript-internals"}),r.jsx("div",{className:"subTitle",children:"Runtime mental models - engine, async, memory, objects"})]})]}),r.jsxs("div",{className:"miniStats","aria-label":"Quick focus areas",children:[r.jsxs("span",{className:"stat",children:[r.jsx("span",{className:"sIcon",children:r.jsx(Dr,{})}),r.jsx("span",{className:"sText",children:"Engine"})]}),r.jsxs("span",{className:"stat",children:[r.jsx("span",{className:"sIcon",children:r.jsx(vx,{})}),r.jsx("span",{className:"sText",children:"Async"})]}),r.jsxs("span",{className:"stat",children:[r.jsx("span",{className:"sIcon",children:r.jsx(dr,{})}),r.jsx("span",{className:"sText",children:"Internals"})]})]})]}),r.jsx("div",{className:"rightSide",children:r.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:j,"aria-label":`Switch to ${h} theme`,title:`Switch to ${h}`,children:[r.jsx("span",{className:"icon",children:l==="light"?r.jsx(kx,{}):r.jsx(Cx,{})}),r.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})})]})})},Ix={Wrapper:Re.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 15px;
        border-top: 1px solid var(--color-border);

        font-size: 12px;
        color: var(--color-text-muted);

        .right a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .right a:hover {
            color: var(--color-text-primary);
        }

        a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        a:hover {
            color: var(--color-text-primary);
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
        }
    `},Mx=()=>r.jsxs(Ix.Wrapper,{children:[r.jsxs("div",{className:"left",children:["© ",new Date().getFullYear()," | All rights reserved"]}),r.jsxs("div",{className:"right",children:["By ",r.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),Px={Wrapper:Re.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 60px 20px 40px;

        .container {
            display: grid;
            grid-template-columns: 1.1fr 1fr;
            gap: 40px;
            align-items: center;

            @media (width < 1000px) {
                grid-template-columns: 1fr;
            }
        }

        .left {
            position: relative;
        }

        .badge {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 800;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
            color: var(--color-text-secondary);
        }

        .title {
            margin-top: 18px;
            font-size: 40px;
            font-weight: 900;
            letter-spacing: 0.5px;
            color: var(--color-text-primary);
        }

        .subtitle {
            margin-top: 16px;
            max-width: 560px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .principles {
            margin-top: 28px;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .pItem {
            display: flex;
            align-items: center;
            gap: 12px;
            font-weight: 700;
            color: var(--color-text-secondary);

            svg {
                width: 18px;
                height: 18px;
                color: var(--color-primary);
            }
        }

        .right {
            display: flex;
            justify-content: center;
        }

        .card {
            width: 100%;
            border-radius: 22px;
            padding: 28px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 30px 60px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background: radial-gradient(
                600px 200px at 0% 0%,
                color-mix(in srgb, var(--color-primary) 14%, transparent),
                transparent 70%
            );
            opacity: 0.8;
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 900;
            letter-spacing: 0.3px;
            color: var(--color-text-primary);
            margin-bottom: 20px;
        }

        .grid {
            display: grid;
            gap: 18px;
        }

        .gItem {
            display: flex;
            gap: 14px;
            align-items: flex-start;
        }

        .gItem svg {
            width: 18px;
            height: 18px;
            margin-top: 3px;
            color: var(--color-accent);
        }

        .gHead {
            font-weight: 800;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .gSub {
            margin-top: 4px;
            font-size: 13px;
            color: var(--color-text-muted);
            line-height: 1.6;
        }

        .footerNote {
            margin-top: 24px;
            padding-top: 16px;
            border-top: 1px solid var(--color-border);
            font-weight: 700;
            font-size: 14px;
            color: var(--color-text-secondary);
        }

        .buildMeta {
            margin-top: 18px;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            font-weight: 700;
            color: var(--color-text-muted);

            svg {
                width: 14px;
                height: 14px;
                color: var(--color-primary);
            }
        }
    `},_x=()=>{const i=P.useMemo(()=>new Date("2026-03-03T10:26:37.139Z").toLocaleString("en-IN",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),[]);return r.jsx(Px.Wrapper,{id:"about",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"left",children:[r.jsx("div",{className:"badge",children:"Engineering Series"}),r.jsx("h1",{className:"title",children:"JavaScript Internals"}),r.jsx("p",{className:"subtitle",children:"Understand how JavaScript actually executes. Not syntax. Not surface patterns. The engine, the runtime, and the execution model."}),r.jsxs("div",{className:"principles",children:[r.jsxs("div",{className:"pItem",children:[r.jsx(Dr,{}),r.jsx("span",{children:"Engine level thinking"})]}),r.jsxs("div",{className:"pItem",children:[r.jsx(cr,{}),r.jsx("span",{children:"Mental model clarity"})]}),r.jsxs("div",{className:"pItem",children:[r.jsx(dr,{}),r.jsx("span",{children:"Async behavior mastery"})]})]})]}),r.jsx("div",{className:"right",children:r.jsxs("div",{className:"card",children:[r.jsx("div",{className:"cardTitle",children:"What this repo focuses on"}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"gItem",children:[r.jsx(Dn,{}),r.jsxs("div",{children:[r.jsx("div",{className:"gHead",children:"Execution Flow"}),r.jsx("div",{className:"gSub",children:"Execution context, call stack, event loop"})]})]}),r.jsxs("div",{className:"gItem",children:[r.jsx(nl,{}),r.jsxs("div",{children:[r.jsx("div",{className:"gHead",children:"Memory Model"}),r.jsx("div",{className:"gSub",children:"Stack vs heap, garbage collection"})]})]}),r.jsxs("div",{className:"gItem",children:[r.jsx(La,{}),r.jsxs("div",{children:[r.jsx("div",{className:"gHead",children:"Core Mechanics"}),r.jsx("div",{className:"gSub",children:"Closures, prototypes, this keyword"})]})]}),r.jsxs("div",{className:"gItem",children:[r.jsx(dr,{}),r.jsxs("div",{children:[r.jsx("div",{className:"gHead",children:"Async Patterns"}),r.jsx("div",{className:"gSub",children:"Promises, microtasks, generators"})]})]})]}),i&&r.jsxs("div",{className:"buildMeta",children:[r.jsx(Dn,{}),r.jsxs("span",{children:["Last build: ",i]})]}),r.jsx("div",{className:"footerNote",children:"When you understand the runtime, debugging becomes reasoning instead of guessing."})]})})]})})},zx=220,Rx={Wrapper:Re.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1000px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        700px 240px at 15% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 26%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 26%, transparent)
                            1px,
                        transparent 1px,
                        transparent 18px
                    );
                opacity: 0.75;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${zx}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 55%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    800px 250px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .termGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .term {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .tHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .tag {
            display: inline-flex;
            align-items: center;
            padding: 6px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );

            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
        }

        .tBody {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.65;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .insideGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .inside {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .insideTop {
            display: flex;
            align-items: center;
            gap: 10px;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-accent);
            }
        }

        .insideTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .insideText {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .warn {
            margin-top: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface-2) 64%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .wIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 70%,
                transparent
            );

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-warning);
            }
        }

        .wText {
            min-width: 0;
        }

        .wTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .wSub {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .flowGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 900px) {
                grid-template-columns: 1fr;
            }
        }

        .flow {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .flowTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .list {
            margin-top: 10px;
            display: grid;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-weight: 650;
                line-height: 1.6;
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "-";
                position: absolute;
                left: 0;
                top: 0;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 72%,
                    var(--color-text-primary)
                );
                font-weight: 950;
            }
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .stackBox {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .stackTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .stackCode {
            margin-top: 10px;
            margin-bottom: 0;
            padding: 12px;
            border-radius: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);

            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .stackNote {
            margin-top: 10px;
            color: var(--color-text-muted);
            font-weight: 700;
            line-height: 1.65;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }
    `},Ax=220,Lx=()=>{const[i,c]=P.useState(!1),[l,p]=P.useState(!1),[h,j]=P.useState(!1),b=P.useMemo(()=>({title:"Execution context",sub:"Execution context is the environment where JavaScript runs your code. It decides what variables exist, what `this` means, and how the call stack manages function execution."}),[]),S=()=>c(g=>!g);return P.useEffect(()=>{let g=null;return i?(p(!0),requestAnimationFrame(()=>j(!0))):(j(!1),g=window.setTimeout(()=>{p(!1)},Ax)),()=>{g&&window.clearTimeout(g)}},[i]),r.jsxs(Rx.Wrapper,{id:"execution-context",children:[r.jsxs("div",{className:"top",children:[r.jsx("h2",{className:"title",children:"Execution context"}),r.jsx("p",{className:"sub",children:b.sub}),r.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[r.jsxs("span",{className:"pill",children:[r.jsx(Dr,{})," Where code runs"]}),r.jsxs("span",{className:"pill",children:[r.jsx(cr,{})," Scope + `this`"]}),r.jsxs("span",{className:"pill",children:[r.jsx(dr,{})," Creation then execution"]})]})]}),r.jsxs("div",{className:"accordion",children:[r.jsxs("button",{type:"button",className:"accBtn",onClick:S,"aria-expanded":i,"aria-controls":"execution-context-panel",children:[r.jsxs("div",{className:"accLeft",children:[r.jsx("span",{className:"accIcon",children:r.jsx(lr,{})}),r.jsxs("div",{className:"accText",children:[r.jsx("div",{className:"accTitle",children:b.title}),r.jsxs("div",{className:"accHint",children:["Click to ",i?"collapse":"expand"," for beginner explanation with real examples"]})]})]}),r.jsx("span",{className:`chev ${i?"open":""}`,children:r.jsx(gr,{})})]}),l&&r.jsx("div",{id:"execution-context-panel",className:`panel ${h?"open":""}`,children:r.jsxs("div",{className:"panelInner",children:[r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Meaning"}),r.jsxs("p",{className:"p",children:["An ",r.jsx("strong",{children:"execution context"})," is a container created by the JavaScript engine before running a piece of code.",r.jsx("br",{}),'You can imagine it like a "runtime box" that holds:',r.jsx("br",{}),"- variables and functions available in that code",r.jsx("br",{}),"- the value of"," ",r.jsx("span",{className:"mono",children:"`this`"}),r.jsx("br",{}),"- a link to outer scopes"]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Simple analogy"}),r.jsx("p",{className:"miniText",children:'Every time a function runs, the engine creates a fresh "workspace" for it. That workspace is the function execution context.'})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Why it matters"}),r.jsx("p",{className:"miniText",children:'It explains hoisting, scope, call stack behavior, and why variables sometimes look "undefined".'})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Types of execution context"}),r.jsxs("div",{className:"termGrid",children:[r.jsxs("div",{className:"term",children:[r.jsxs("div",{className:"tHead",children:[r.jsx("span",{className:"mono",children:"GEC"}),r.jsx("span",{className:"tag",children:"Global"})]}),r.jsxs("p",{className:"tBody",children:[r.jsx("strong",{children:"GEC"})," - Global Execution Context. Created once when the script starts. It sets up global variables and global",r.jsxs("span",{className:"mono",children:[" ","`this`"]}),"."]})]}),r.jsxs("div",{className:"term",children:[r.jsxs("div",{className:"tHead",children:[r.jsx("span",{className:"mono",children:"FEC"}),r.jsx("span",{className:"tag",children:"Function"})]}),r.jsxs("p",{className:"tBody",children:[r.jsx("strong",{children:"FEC"})," - Function Execution Context. Created each time a function is called. Each call gets its own independent context."]})]}),r.jsxs("div",{className:"term",children:[r.jsxs("div",{className:"tHead",children:[r.jsx("span",{className:"mono",children:"MEC"}),r.jsx("span",{className:"tag",children:"Module"})]}),r.jsxs("p",{className:"tBody",children:[r.jsx("strong",{children:"MEC"})," - Module Execution Context. Used for ES Modules. Top-level"," ",r.jsx("span",{className:"mono",children:"`this`"})," ","behaves differently."]})]})]}),r.jsx("div",{className:"finalNote",children:"Most interview questions are about GEC and FEC. Module context matters when you use ES modules."})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"What is inside an execution context"}),r.jsxs("div",{className:"insideGrid",children:[r.jsxs("div",{className:"inside",children:[r.jsxs("div",{className:"insideTop",children:[r.jsx(cr,{}),r.jsx("span",{className:"insideTitle",children:"Variable environment"})]}),r.jsx("div",{className:"insideText",children:"Stores variables and function declarations for that context. This is where hoisting comes from."})]}),r.jsxs("div",{className:"inside",children:[r.jsxs("div",{className:"insideTop",children:[r.jsx(Dr,{}),r.jsx("span",{className:"insideTitle",children:"Lexical environment"})]}),r.jsx("div",{className:"insideText",children:"Stores scope information and references to outer scopes. This is how closures work."})]}),r.jsxs("div",{className:"inside",children:[r.jsxs("div",{className:"insideTop",children:[r.jsx(bx,{}),r.jsx("span",{className:"insideTitle",children:"this binding"})]}),r.jsxs("div",{className:"insideText",children:["Decides what"," ",r.jsx("span",{className:"mono",children:"`this`"})," ","points to inside the current execution context."]})]})]}),r.jsxs("div",{className:"warn",children:[r.jsx("span",{className:"wIcon",children:r.jsx(He,{})}),r.jsxs("div",{className:"wText",children:[r.jsx("div",{className:"wTitle",children:"Variable environment vs lexical environment"}),r.jsx("div",{className:"wSub",children:"Many people treat these as the same. For practical understanding, remember this - lexical environment is about scope chain and closures, variable environment is about declarations and hoisting."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Two phases - creation and execution"}),r.jsxs("p",{className:"p",children:["When an execution context is created, the engine does not run your code immediately. It does it in two steps:",r.jsx("br",{}),"- creation phase - allocate memory, set up scope, hoist declarations",r.jsx("br",{}),"- execution phase - run code line by line, assign real values"]}),r.jsxs("div",{className:"flowGrid",children:[r.jsxs("div",{className:"flow",children:[r.jsx("div",{className:"flowTitle",children:"Creation phase"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Memory allocated for variables and functions"}),r.jsx("li",{children:"Function declarations are stored fully"}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"var"})," ","variables become"," ",r.jsx("span",{className:"mono",children:"undefined"})]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"let"})," ","and"," ",r.jsx("span",{className:"mono",children:"const"})," ","are created but not usable yet"]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"`this`"})," ","is decided"]})]})]}),r.jsxs("div",{className:"flow",children:[r.jsx("div",{className:"flowTitle",children:"Execution phase"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Code runs line by line"}),r.jsx("li",{children:"Variables get actual values"}),r.jsx("li",{children:"Function calls create new contexts"}),r.jsx("li",{children:"Call stack grows and shrinks"})]})]})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - hoisting in creation phase"}),r.jsx("pre",{className:"code",children:`console.log(a);
console.log(b);

var a = 10;
let b = 20;`})]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"What happens"}),r.jsxs("p",{className:"miniText",children:[r.jsx("span",{className:"mono",children:"var a"})," ","exists in memory as"," ",r.jsx("span",{className:"mono",children:"undefined"}),", so first log prints"," ",r.jsx("span",{className:"mono",children:"undefined"}),".",r.jsx("br",{}),r.jsx("span",{className:"mono",children:"let b"})," ","exists but is in a restricted state, so accessing it throws an error."]})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"That restricted state"}),r.jsxs("p",{className:"miniText",children:["It is called ",r.jsx("strong",{children:"TDZ"})," - Temporal Dead Zone. It means"," ",r.jsx("span",{className:"mono",children:"let"})," ","and"," ",r.jsx("span",{className:"mono",children:"const"}),"cannot be used before the line where they are declared."]})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Call stack connection"}),r.jsxs("p",{className:"p",children:["The ",r.jsx("strong",{children:"call stack"})," is a stack data structure used by the engine to track active execution contexts.",r.jsx("br",{}),"Rule - the top of the stack is the currently running context."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - call stack growing"}),r.jsx("pre",{className:"code",children:`function one() {
  two();
}

function two() {
  three();
}

function three() {
  return "done";
}

one();`})]}),r.jsxs("div",{className:"stackBox",children:[r.jsx("div",{className:"stackTitle",children:"Stack view (top to bottom)"}),r.jsx("pre",{className:"stackCode",children:`three()  - FEC created
two()    - FEC created
one()    - FEC created
global   - GEC`}),r.jsxs("div",{className:"stackNote",children:["When"," ",r.jsx("span",{className:"mono",children:"three()"})," ","finishes, its context is popped, then"," ",r.jsx("span",{className:"mono",children:"two()"})," ","finishes, then"," ",r.jsx("span",{className:"mono",children:"one()"}),"."]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"this inside execution context"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"`this`"})," is not based on where a function is written. It is based on how the function is called."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - same function, different this"}),r.jsx("pre",{className:"code",children:`function show() {
  console.log(this);
}

show(); // in browser non-module: window (or undefined in strict mode)

const obj = { name: "A", show };
obj.show(); // this is obj`})]}),r.jsxs("div",{className:"finalNote",children:["You will master"," ",r.jsx("span",{className:"mono",children:"`this`"})," easily once execution context becomes clear. Each call creates a context and decides a"," ",r.jsx("span",{className:"mono",children:"`this`"})," value for that call."]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Terms and full forms"}),r.jsxs("div",{className:"abbrGrid",children:[r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"GEC"})," - Global Execution Context"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"FEC"})," - Function Execution Context"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"MEC"})," - Module Execution Context"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"TDZ"})," - Temporal Dead Zone"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"JS"})," - JavaScript"]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"How to say it confidently"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:'"Every time a function is called, the engine creates a new function execution context and pushes it on the call stack."'}),r.jsx("li",{children:'"Execution context is created in two phases - creation phase for hoisting and setup, execution phase for running code."'}),r.jsx("li",{children:'"`this` is part of the execution context, and it is decided by the call-site."'})]})]})]})})]})]})},Ox=220,Bx={Wrapper:Re.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1000px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        700px 240px at 15% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 26%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 26%, transparent)
                            1px,
                        transparent 1px,
                        transparent 18px
                    );
                opacity: 0.75;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${Ox}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 55%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    800px 250px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .flowGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 900px) {
                grid-template-columns: 1fr;
            }
        }

        .flow {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .flowTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .list {
            margin-top: 10px;
            display: grid;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-weight: 650;
                line-height: 1.6;
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "-";
                position: absolute;
                left: 0;
                top: 0;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 72%,
                    var(--color-text-primary)
                );
                font-weight: 950;
            }
        }

        .warn {
            margin-top: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface-2) 64%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .wIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 70%,
                transparent
            );

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-warning);
            }
        }

        .wText {
            min-width: 0;
        }

        .wTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .wSub {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .stackBox {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .stackTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .stackCode {
            margin-top: 10px;
            margin-bottom: 0;
            padding: 12px;
            border-radius: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);

            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .stackNote {
            margin-top: 10px;
            color: var(--color-text-muted);
            font-weight: 700;
            line-height: 1.65;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.65;
            box-shadow: 0 18px 40px var(--color-shadow);
        }
    `},Fx=220,Dx=()=>{const[i,c]=P.useState(!1),[l,p]=P.useState(!1),[h,j]=P.useState(!1),b=P.useMemo(()=>({title:"Call stack",sub:"Call stack is the runtime stack used by the JavaScript engine to track which function is currently running. It follows LIFO - last in, first out."}),[]),S=()=>c(g=>!g);return P.useEffect(()=>{let g=null;return i?(p(!0),requestAnimationFrame(()=>j(!0))):(j(!1),g=window.setTimeout(()=>{p(!1)},Fx)),()=>{g&&window.clearTimeout(g)}},[i]),r.jsxs(Bx.Wrapper,{id:"call-stack",children:[r.jsxs("div",{className:"top",children:[r.jsx("h2",{className:"title",children:"Call stack"}),r.jsx("p",{className:"sub",children:b.sub}),r.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[r.jsxs("span",{className:"pill",children:[r.jsx(cr,{})," LIFO order"]}),r.jsxs("span",{className:"pill",children:[r.jsx(jx,{})," Push on call"]}),r.jsxs("span",{className:"pill",children:[r.jsx(yx,{})," Pop on return"]})]})]}),r.jsxs("div",{className:"accordion",children:[r.jsxs("button",{type:"button",className:"accBtn",onClick:S,"aria-expanded":i,"aria-controls":"call-stack-panel",children:[r.jsxs("div",{className:"accLeft",children:[r.jsx("span",{className:"accIcon",children:r.jsx(lr,{})}),r.jsxs("div",{className:"accText",children:[r.jsx("div",{className:"accTitle",children:b.title}),r.jsxs("div",{className:"accHint",children:["Click to ",i?"collapse":"expand"," for deep explanation with real stack traces and examples"]})]})]}),r.jsx("span",{className:`chev ${i?"open":""}`,children:r.jsx(gr,{})})]}),l&&r.jsx("div",{id:"call-stack-panel",className:`panel ${h?"open":""}`,children:r.jsxs("div",{className:"panelInner",children:[r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Meaning"}),r.jsxs("p",{className:"p",children:["The ",r.jsx("strong",{children:"call stack"})," is a stack data structure maintained by the engine. It stores ",r.jsx("strong",{children:"stack frames"}),". Each stack frame represents one active function call.",r.jsx("br",{}),"The top frame is the function that is currently running."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"LIFO rule"}),r.jsxs("p",{className:"miniText",children:[r.jsx("strong",{children:"LIFO"})," - Last In, First Out.",r.jsx("br",{}),"The most recent function call runs first and returns first."]})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Stack frame"}),r.jsx("p",{className:"miniText",children:"A stack frame stores function info like parameters, local variables, return address, and the execution context reference."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Push and pop behavior"}),r.jsxs("p",{className:"p",children:["When a function is called, its frame is",r.jsx("strong",{children:" pushed"})," on the stack. When it returns or throws, its frame is",r.jsx("strong",{children:" popped"}),"."]}),r.jsxs("div",{className:"flowGrid",children:[r.jsxs("div",{className:"flow",children:[r.jsx("div",{className:"flowTitle",children:"On function call"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"New stack frame is created"}),r.jsx("li",{children:"Frame is pushed on top"}),r.jsx("li",{children:"Control jumps into the function"})]})]}),r.jsxs("div",{className:"flow",children:[r.jsx("div",{className:"flowTitle",children:"On return"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Function finishes execution"}),r.jsx("li",{children:"Frame is popped from top"}),r.jsx("li",{children:"Control returns to caller"})]})]})]}),r.jsxs("div",{className:"stackBox",children:[r.jsx("div",{className:"stackTitle",children:"Mental model"}),r.jsx("div",{className:"stackNote",children:"Think of the call stack as a pile of plates. You can only add a plate on top, and you can only remove the top plate."})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Example 1 - normal nested calls"}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Code"}),r.jsx("pre",{className:"code",children:`function one() {
  two();
}

function two() {
  three();
}

function three() {
  return "ok";
}

one();`})]}),r.jsxs("div",{className:"stackBox",children:[r.jsx("div",{className:"stackTitle",children:"Stack during execution"}),r.jsx("pre",{className:"stackCode",children:`three()  - top
two()
one()
global`}),r.jsxs("div",{className:"stackNote",children:["When"," ",r.jsx("span",{className:"mono",children:"three()"})," ","returns, it is popped. Then"," ",r.jsx("span",{className:"mono",children:"two()"})," ","returns, then"," ",r.jsx("span",{className:"mono",children:"one()"}),"."]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Example 2 - stack trace from an error"}),r.jsx("p",{className:"p",children:"A stack trace is basically the call stack printed at the moment an error happens."}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Code"}),r.jsx("pre",{className:"code",children:`function parseUser() {
  throw new Error("Bad user");
}

function loadProfile() {
  parseUser();
}

function appStart() {
  loadProfile();
}

appStart();`})]}),r.jsxs("div",{className:"stackBox",children:[r.jsx("div",{className:"stackTitle",children:"Stack trace meaning"}),r.jsx("pre",{className:"stackCode",children:`Error: Bad user
  at parseUser()
  at loadProfile()
  at appStart()
  at global`}),r.jsxs("div",{className:"stackNote",children:["Read it as - global called"," ",r.jsx("span",{className:"mono",children:"appStart()"}),", which called"," ",r.jsx("span",{className:"mono",children:"loadProfile()"}),", which called"," ",r.jsx("span",{className:"mono",children:"parseUser()"})," ","where the error happened."]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Why recursion can crash - stack overflow"}),r.jsxs("p",{className:"p",children:["Recursion means a function calls itself. Each call pushes a new frame. If the calls never stop, the stack keeps growing until the engine runs out of stack space. That is called ",r.jsx("strong",{children:"stack overflow"}),"."]}),r.jsxs("div",{className:"warn",children:[r.jsx("span",{className:"wIcon",children:r.jsx(He,{})}),r.jsxs("div",{className:"wText",children:[r.jsx("div",{className:"wTitle",children:"Stack overflow"}),r.jsx("div",{className:"wSub",children:"It happens when too many function calls are active at once, commonly due to infinite recursion or very deep recursion."})]})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - infinite recursion"}),r.jsx("pre",{className:"code",children:`function boom() {
  return boom();
}

boom(); // RangeError: Maximum call stack size exceeded`})]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"How to avoid"}),r.jsxs("p",{className:"miniText",children:["Use a proper base case.",r.jsx("br",{}),"Or convert recursion to an iterative loop when depth can be large."]})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Practical tip"}),r.jsx("p",{className:"miniText",children:"Deep recursion is risky in JS because there is no guaranteed tail call optimization."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Call stack vs event loop"}),r.jsxs("p",{className:"p",children:["The call stack runs"," ",r.jsx("strong",{children:"synchronous"})," code. Async callbacks wait in queues and enter the call stack only when the stack is empty. That scheduling is handled by the event loop."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Synchronous"}),r.jsx("p",{className:"miniText",children:"Runs now, blocks the call stack until finished. Example - normal function call."})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Asynchronous"}),r.jsx("p",{className:"miniText",children:"Runs later, does not immediately occupy the stack. Example - timers, promises, I/O callbacks."})]})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - async order basics"}),r.jsx("pre",{className:"code",children:`console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");

// Output
// A
// C
// B`})]}),r.jsx("div",{className:"finalNote",children:"Key rule - the call stack must be empty before the event loop can push the next callback onto it."})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Terms and full forms"}),r.jsxs("div",{className:"abbrGrid",children:[r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"LIFO"})," - Last In, First Out"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"JS"})," - JavaScript"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"CPU"})," - Central Processing Unit"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"I/O"})," - Input/Output"]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"How to say it confidently"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:'"Call stack stores active function calls as stack frames using LIFO order."'}),r.jsx("li",{children:'"Each function call pushes a frame, each return pops a frame."'}),r.jsx("li",{children:'"Async callbacks run only when the stack is empty, after the event loop schedules them."'})]})]})]})})]})]})},Wx=220,Gx={Wrapper:Re.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1000px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        700px 240px at 15% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 24%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 24%, transparent)
                            1px,
                        transparent 1px,
                        transparent 18px
                    );
                opacity: 0.75;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${Wx}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 55%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    800px 250px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .termGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .term {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .tHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .tag {
            display: inline-flex;
            align-items: center;
            padding: 6px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );

            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
        }

        .tBody {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.65;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .rule {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: color-mix(in srgb, var(--color-surface-2) 62%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .rTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .rText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .flowGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 900px) {
                grid-template-columns: 1fr;
            }
        }

        .flow {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .flowTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .list {
            margin-top: 10px;
            display: grid;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-weight: 650;
                line-height: 1.6;
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "-";
                position: absolute;
                left: 0;
                top: 0;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 72%,
                    var(--color-text-primary)
                );
                font-weight: 950;
            }
        }

        .warn {
            margin-top: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface-2) 64%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .wIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 70%,
                transparent
            );

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-warning);
            }
        }

        .wText {
            min-width: 0;
        }

        .wTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .wSub {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .diagram {
            margin-top: 12px;
            display: grid;
            grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
            gap: 10px;
            align-items: center;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .dCol {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .dTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .dBox {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-weight: 650;
        }

        .dArrow {
            text-align: center;
            color: var(--color-text-muted);
            font-weight: 950;

            @media (width < 980px) {
                display: none;
            }
        }

        .qaGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .qa {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .q {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .a {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }
    `},Hx=220,Ux=()=>{const[i,c]=P.useState(!1),[l,p]=P.useState(!1),[h,j]=P.useState(!1),b=P.useMemo(()=>({title:"Event loop",sub:"The event loop is the runtime mechanism that lets JavaScript handle asynchronous work while still running your code on a single main thread. It decides when callbacks run by moving tasks into the call stack."}),[]),S=()=>c(g=>!g);return P.useEffect(()=>{let g=null;return i?(p(!0),requestAnimationFrame(()=>j(!0))):(j(!1),g=window.setTimeout(()=>p(!1),Hx)),()=>{g&&window.clearTimeout(g)}},[i]),r.jsxs(Gx.Wrapper,{id:"event-loop",children:[r.jsxs("div",{className:"top",children:[r.jsx("h2",{className:"title",children:"Event loop"}),r.jsx("p",{className:"sub",children:b.sub}),r.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[r.jsxs("span",{className:"pill",children:[r.jsx(Ma,{})," Scheduler"]}),r.jsxs("span",{className:"pill",children:[r.jsx(cr,{})," Queues"]}),r.jsxs("span",{className:"pill",children:[r.jsx(dr,{})," Async ordering"]})]})]}),r.jsxs("div",{className:"accordion",children:[r.jsxs("button",{type:"button",className:"accBtn",onClick:S,"aria-expanded":i,"aria-controls":"event-loop-panel",children:[r.jsxs("div",{className:"accLeft",children:[r.jsx("span",{className:"accIcon",children:r.jsx(lr,{})}),r.jsxs("div",{className:"accText",children:[r.jsx("div",{className:"accTitle",children:b.title}),r.jsxs("div",{className:"accHint",children:["Click to ",i?"collapse":"expand"," with beginner explanation and output examples"]})]})]}),r.jsx("span",{className:`chev ${i?"open":""}`,children:r.jsx(gr,{})})]}),l&&r.jsx("div",{id:"event-loop-panel",className:`panel ${h?"open":""}`,children:r.jsxs("div",{className:"panelInner",children:[r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Meaning"}),r.jsxs("p",{className:"p",children:["JavaScript runs your code on a single main thread. That means only one thing can be on the call stack at a time.",r.jsx("br",{}),"The ",r.jsx("strong",{children:"event loop"})," is the runtime system that keeps the program responsive by deciding when waiting tasks can enter the call stack."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Simple idea"}),r.jsx("p",{className:"miniText",children:"When the call stack becomes empty, the event loop pulls the next ready task from queues and pushes it onto the stack."})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Why it exists"}),r.jsx("p",{className:"miniText",children:"Without it, async callbacks would never run and UI would freeze while waiting for timers or network."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Core pieces"}),r.jsxs("div",{className:"termGrid",children:[r.jsxs("div",{className:"term",children:[r.jsxs("div",{className:"tHead",children:[r.jsx("span",{className:"mono",children:"Call stack"}),r.jsx("span",{className:"tag",children:"Run now"})]}),r.jsx("p",{className:"tBody",children:"Stack of execution contexts. The top frame runs. If stack is busy, no other JS can run."})]}),r.jsxs("div",{className:"term",children:[r.jsxs("div",{className:"tHead",children:[r.jsx("span",{className:"mono",children:"Web APIs"}),r.jsx("span",{className:"tag",children:"Wait here"})]}),r.jsx("p",{className:"tBody",children:"Browser provided features like timers, DOM events, network requests. They run outside the JS call stack."})]}),r.jsxs("div",{className:"term",children:[r.jsxs("div",{className:"tHead",children:[r.jsx("span",{className:"mono",children:"Queues"}),r.jsx("span",{className:"tag",children:"Ready list"})]}),r.jsx("p",{className:"tBody",children:"When async work completes, callbacks wait in queues until the event loop schedules them."})]})]}),r.jsx("div",{className:"finalNote",children:"Event loop does not interrupt running code. It waits for the stack to be empty."})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Main rule"}),r.jsxs("div",{className:"rule",children:[r.jsx("div",{className:"rTitle",children:"Only when the call stack is empty"}),r.jsx("div",{className:"rText",children:"The event loop can move a callback from a queue into the call stack only when the current stack is empty."})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - why setTimeout does not run immediately"}),r.jsx("pre",{className:"code",children:`console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");`})]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Output"}),r.jsxs("p",{className:"miniText",children:["A",r.jsx("br",{}),"C",r.jsx("br",{}),"B"]})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Reason"}),r.jsx("p",{className:"miniText",children:"Timer callback waits in a queue. It runs only after current script finishes and stack becomes empty."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Queues - task vs microtask"}),r.jsxs("p",{className:"p",children:["There are multiple queues. The important ones for interviews are:",r.jsx("br",{}),"- task queue (also called macrotask queue)",r.jsx("br",{}),"- microtask queue"]}),r.jsxs("div",{className:"flowGrid",children:[r.jsxs("div",{className:"flow",children:[r.jsx("div",{className:"flowTitle",children:"Task queue (macrotask)"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"setTimeout"}),r.jsx("li",{children:"setInterval"}),r.jsx("li",{children:"UI events"}),r.jsx("li",{children:"message events"})]})]}),r.jsxs("div",{className:"flow",children:[r.jsx("div",{className:"flowTitle",children:"Microtask queue"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Promise then catch finally"}),r.jsx("li",{children:"queueMicrotask"}),r.jsx("li",{children:"MutationObserver (browser)"})]})]})]}),r.jsxs("div",{className:"warn",children:[r.jsx("span",{className:"wIcon",children:r.jsx(He,{})}),r.jsxs("div",{className:"wText",children:[r.jsx("div",{className:"wTitle",children:"Priority rule"}),r.jsx("div",{className:"wSub",children:"After a call stack turn finishes, the runtime drains the microtask queue completely before taking the next task from the task queue."})]})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - microtasks run before timers"}),r.jsx("pre",{className:"code",children:`console.log("A");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("B");`})]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Output"}),r.jsxs("p",{className:"miniText",children:["A",r.jsx("br",{}),"B",r.jsx("br",{}),"promise",r.jsx("br",{}),"timeout"]})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Reason"}),r.jsx("p",{className:"miniText",children:"Promise callbacks are microtasks. Microtasks run fully before next task like setTimeout."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Visual mental model"}),r.jsxs("div",{className:"diagram",children:[r.jsxs("div",{className:"dCol",children:[r.jsx("div",{className:"dTitle",children:"Call stack"}),r.jsx("div",{className:"dBox",children:"Runs sync code now"})]}),r.jsx("div",{className:"dArrow",children:"-"}),r.jsxs("div",{className:"dCol",children:[r.jsx("div",{className:"dTitle",children:"Web APIs"}),r.jsx("div",{className:"dBox",children:"Timers - fetch - DOM events"})]}),r.jsx("div",{className:"dArrow",children:"-"}),r.jsxs("div",{className:"dCol",children:[r.jsx("div",{className:"dTitle",children:"Queues"}),r.jsxs("div",{className:"dBox",children:["Microtask queue first",r.jsx("br",{}),"Task queue next"]})]}),r.jsx("div",{className:"dArrow",children:"-"}),r.jsxs("div",{className:"dCol",children:[r.jsx("div",{className:"dTitle",children:"Event loop"}),r.jsx("div",{className:"dBox",children:"Moves ready callbacks to stack when stack is empty"})]})]}),r.jsx("div",{className:"finalNote",children:"A timer does not mean it runs at that exact time. It means it becomes eligible after that delay. Actual run depends on stack and queue priority."})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Common confusion"}),r.jsxs("div",{className:"qaGrid",children:[r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Is JavaScript single threaded"}),r.jsx("div",{className:"a",children:"The call stack is single threaded. But the runtime uses Web APIs and background threads for timers and network."})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Does event loop run async code"}),r.jsx("div",{className:"a",children:"It schedules callbacks. The callback itself runs on the call stack."})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Can setTimeout run before Promise"}),r.jsx("div",{className:"a",children:"Usually no. Promise microtasks run first after the current stack turn."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Terms and full forms"}),r.jsxs("div",{className:"abbrGrid",children:[r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"JS"})," - JavaScript"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"API"})," - Application Programming Interface"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"UI"})," - User Interface"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"DOM"})," - Document Object Model"]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"How to say it confidently"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:'"The event loop schedules callbacks by moving them from queues to the call stack when the stack is empty."'}),r.jsx("li",{children:'"Microtasks have higher priority than tasks and are drained fully before the next task runs."'}),r.jsx("li",{children:'"setTimeout delay means eligibility time, not guaranteed execution time."'})]})]})]})})]})]})},$x=220,qx={Wrapper:Re.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1000px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        760px 240px at 15% 5%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    repeating-linear-gradient(
                        135deg,
                        color-mix(in srgb, var(--color-border) 24%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 24%, transparent)
                            1px,
                        transparent 1px,
                        transparent 16px
                    );
                opacity: 0.7;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${$x}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 55%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    820px 240px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .ruleCard {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .ruleTop {
            display: flex;
            align-items: center;
            gap: 10px;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-accent);
            }
        }

        .ruleTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .ruleText {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .resultGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: 0.7fr 1.3fr;
            gap: 10px;

            @media (width < 900px) {
                grid-template-columns: 1fr;
            }
        }

        .result {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .rTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .rCode {
            margin-top: 10px;
            margin-bottom: 0;
            padding: 12px;
            border-radius: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);

            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .warn {
            margin-top: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface-2) 64%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .wIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 70%,
                transparent
            );

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-warning);
            }
        }

        .wText {
            min-width: 0;
        }

        .wTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .wSub {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.65;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .list {
            margin-top: 10px;
            display: grid;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-weight: 650;
                line-height: 1.6;
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "-";
                position: absolute;
                left: 0;
                top: 0;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 72%,
                    var(--color-text-primary)
                );
                font-weight: 950;
            }
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }
    `},Vx=220,Qx=()=>{const[i,c]=P.useState(!1),[l,p]=P.useState(!1),[h,j]=P.useState(!1),b=P.useMemo(()=>({title:"Microtask vs macrotask",sub:"JavaScript runs sync code first. Then it processes queues. Microtasks run before macrotasks. This single rule explains most async order confusion."}),[]),S=()=>c(g=>!g);return P.useEffect(()=>{let g=null;return i?(p(!0),requestAnimationFrame(()=>j(!0))):(j(!1),g=window.setTimeout(()=>p(!1),Vx)),()=>{g&&window.clearTimeout(g)}},[i]),r.jsxs(qx.Wrapper,{id:"microtask-vs-macrotask",children:[r.jsxs("div",{className:"top",children:[r.jsx("h2",{className:"title",children:"Microtask vs macrotask"}),r.jsx("p",{className:"sub",children:b.sub}),r.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[r.jsxs("span",{className:"pill",children:[r.jsx(dr,{})," Microtasks first"]}),r.jsxs("span",{className:"pill",children:[r.jsx(Dn,{})," Event loop rule"]}),r.jsxs("span",{className:"pill",children:[r.jsx(cr,{})," Queues matter"]})]})]}),r.jsxs("div",{className:"accordion",children:[r.jsxs("button",{type:"button",className:"accBtn",onClick:S,"aria-expanded":i,"aria-controls":"microtask-macrotask-panel",children:[r.jsxs("div",{className:"accLeft",children:[r.jsx("span",{className:"accIcon",children:r.jsx(lr,{})}),r.jsxs("div",{className:"accText",children:[r.jsx("div",{className:"accTitle",children:b.title}),r.jsxs("div",{className:"accHint",children:["Click to ",i?"collapse":"expand"," with beginner explanation and execution order"]})]})]}),r.jsx("span",{className:`chev ${i?"open":""}`,children:r.jsx(gr,{})})]}),l&&r.jsx("div",{id:"microtask-macrotask-panel",className:`panel ${h?"open":""}`,children:r.jsxs("div",{className:"panelInner",children:[r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"The core rule"}),r.jsxs("p",{className:"p",children:["JavaScript follows this sequence:",r.jsx("br",{}),"- run all synchronous code on the call stack",r.jsx("br",{}),"- drain the microtask queue completely",r.jsx("br",{}),"- run one macrotask from the macrotask queue",r.jsx("br",{}),"- after that macrotask, drain microtasks again",r.jsx("br",{}),"Repeat forever."]}),r.jsxs("div",{className:"ruleCard",children:[r.jsxs("div",{className:"ruleTop",children:[r.jsx(Zp,{}),r.jsx("div",{className:"ruleTitle",children:"Quick mental model"})]}),r.jsxs("div",{className:"ruleText",children:['Microtasks are "run as soon as possible after current code finishes".',r.jsx("br",{}),'Macrotasks are "run later, one per loop turn".']})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"What is a microtask"}),r.jsxs("p",{className:"p",children:["A ",r.jsx("strong",{children:"microtask"})," is a small job scheduled to run right after the current synchronous code finishes, before any timers or UI events."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Common microtasks"}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"Promise.then"})," ","callbacks"]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"Promise.catch"})," ","callbacks"]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"Promise.finally"})," ","callbacks"]}),r.jsx("li",{children:r.jsx("span",{className:"mono",children:"queueMicrotask"})}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"MutationObserver"})," ","(browser)"]})]})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Why they exist"}),r.jsx("p",{className:"miniText",children:'Promises need a reliable "run soon" mechanism so async chains feel fast and consistent.'})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"What is a macrotask"}),r.jsxs("p",{className:"p",children:["A ",r.jsx("strong",{children:"macrotask"})," is a larger job that runs in a future turn of the event loop. After one macrotask runs, microtasks get a chance again."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Common macrotasks"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:r.jsx("span",{className:"mono",children:"setTimeout"})}),r.jsx("li",{children:r.jsx("span",{className:"mono",children:"setInterval"})}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"setImmediate"})," ","(Node.js)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"I/O callbacks"})," ","(Node.js)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"UI events"})," ","(browser)"]}),r.jsxs("li",{children:[r.jsx("span",{className:"mono",children:"MessageChannel"})," ","(browser)"]})]})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Timer confusion"}),r.jsxs("p",{className:"miniText",children:[r.jsx("span",{className:"mono",children:"setTimeout(fn, 0)"})," ",'does not mean "run now".',r.jsx("br",{}),'It means "run after current code and after microtasks".']})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Classic output order example"}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("pre",{className:"code",children:`console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");`})]}),r.jsxs("div",{className:"resultGrid",children:[r.jsxs("div",{className:"result",children:[r.jsx("div",{className:"rTitle",children:"Output"}),r.jsx("pre",{className:"rCode",children:`A
D
C
B`})]}),r.jsxs("div",{className:"result",children:[r.jsx("div",{className:"rTitle",children:"Why"}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:["Sync first - prints"," ",r.jsx("span",{className:"mono",children:"A"})," ","then"," ",r.jsx("span",{className:"mono",children:"D"})]}),r.jsxs("li",{children:["Microtasks next - Promise prints"," ",r.jsx("span",{className:"mono",children:"C"})]}),r.jsxs("li",{children:["Macrotasks after - timer prints"," ",r.jsx("span",{className:"mono",children:"B"})]})]})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Microtasks can starve macrotasks"}),r.jsx("p",{className:"p",children:"If microtasks keep scheduling more microtasks, the event loop will keep draining them and timers can get delayed."}),r.jsxs("div",{className:"warn",children:[r.jsx("span",{className:"wIcon",children:r.jsx(He,{})}),r.jsxs("div",{className:"wText",children:[r.jsx("div",{className:"wTitle",children:"Starvation means delay"}),r.jsx("div",{className:"wSub",children:"Starvation is when one queue keeps getting work and other queues do not get a chance. Here, too many microtasks can delay timers and UI updates."})]})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - microtask chain"}),r.jsx("pre",{className:"code",children:`setTimeout(() => console.log("timer"), 0);

function loop() {
  Promise.resolve().then(loop);
}
loop();`})]}),r.jsx("div",{className:"finalNote",children:"Do not write infinite microtask chains in real apps. It can freeze the UI in browsers or delay timers in Node.js."})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Browser and Node.js note"}),r.jsx("p",{className:"p",children:'The rule "microtasks before macrotasks" is consistent, but the exact macrotask phases can differ between browser and Node.js. For interviews and practical debugging, focus on the queue priority rule and the call stack.'}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Browser example"}),r.jsx("p",{className:"miniText",children:"Microtasks include Promise callbacks. Macrotasks include timers and UI events."})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Node.js example"}),r.jsxs("p",{className:"miniText",children:["Node.js has more phases. Also has"," ",r.jsx("span",{className:"mono",children:"process.nextTick"})," ","which behaves like a very high priority microtask."]})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Terms and full forms"}),r.jsxs("div",{className:"abbrGrid",children:[r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"JS"})," - JavaScript"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"UI"})," - User Interface"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"I/O"})," - Input Output"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"API"})," - Application Programming Interface"]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"How to say it confidently"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:'"JavaScript runs sync code, then drains the microtask queue, then runs a macrotask."'}),r.jsx("li",{children:'"Promises schedule microtasks, timers schedule macrotasks, and microtasks run first."'}),r.jsx("li",{children:'"If microtasks keep adding microtasks, timers can be delayed - microtask starvation."'})]})]})]})})]})]})},Jx=220,Yx={Wrapper:Re.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1000px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        720px 240px at 12% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    radial-gradient(
                        720px 240px at 92% 30%,
                        color-mix(in srgb, var(--color-accent) 8%, transparent),
                        transparent 62%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 24%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 24%, transparent)
                            1px,
                        transparent 1px,
                        transparent 18px
                    );
                opacity: 0.75;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${Jx}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 55%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    820px 260px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .insideGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .inside {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .insideTop {
            display: flex;
            align-items: center;
            gap: 10px;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-accent);
            }
        }

        .insideTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .insideText {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .warn {
            margin-top: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface-2) 64%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .wIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 70%,
                transparent
            );

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-warning);
            }
        }

        .wText {
            min-width: 0;
        }

        .wTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .wSub {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .list {
            margin-top: 10px;
            display: grid;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-weight: 650;
                line-height: 1.6;
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "-";
                position: absolute;
                left: 0;
                top: 0;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 72%,
                    var(--color-text-primary)
                );
                font-weight: 950;
            }
        }

        .quote {
            margin-top: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 82%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .qIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 34px;
            height: 34px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-primary);
            }
        }

        .qText {
            margin-top: 2px;
            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.65;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }
    `},Kx=220,Zx=()=>{const[i,c]=P.useState(!1),[l,p]=P.useState(!1),[h,j]=P.useState(!1),b=P.useMemo(()=>({title:"Closures",sub:"A closure is created when a function remembers variables from its outer scope even after the outer function has finished. This is the core reason why callbacks, private state, and many JS patterns work."}),[]),S=()=>c(g=>!g);return P.useEffect(()=>{let g=null;return i?(p(!0),requestAnimationFrame(()=>j(!0))):(j(!1),g=window.setTimeout(()=>p(!1),Kx)),()=>{g&&window.clearTimeout(g)}},[i]),r.jsxs(Yx.Wrapper,{id:"closures",children:[r.jsxs("div",{className:"top",children:[r.jsx("h2",{className:"title",children:"Closures"}),r.jsx("p",{className:"sub",children:b.sub}),r.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[r.jsxs("span",{className:"pill",children:[r.jsx(yn,{})," Remembers outer scope"]}),r.jsxs("span",{className:"pill",children:[r.jsx(Nx,{})," Private state"]}),r.jsxs("span",{className:"pill",children:[r.jsx(dr,{})," Powers callbacks"]})]})]}),r.jsxs("div",{className:"accordion",children:[r.jsxs("button",{type:"button",className:"accBtn",onClick:S,"aria-expanded":i,"aria-controls":"closures-panel",children:[r.jsxs("div",{className:"accLeft",children:[r.jsx("span",{className:"accIcon",children:r.jsx(lr,{})}),r.jsxs("div",{className:"accText",children:[r.jsx("div",{className:"accTitle",children:b.title}),r.jsxs("div",{className:"accHint",children:["Click to ",i?"collapse":"expand"," with deep beginner friendly examples"]})]})]}),r.jsx("span",{className:`chev ${i?"open":""}`,children:r.jsx(gr,{})})]}),l&&r.jsx("div",{id:"closures-panel",className:`panel ${h?"open":""}`,children:r.jsxs("div",{className:"panelInner",children:[r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Meaning"}),r.jsxs("p",{className:"p",children:["A ",r.jsx("strong",{children:"closure"}),' happens when a function "carries" references to variables from its ',r.jsx("strong",{children:"lexical scope"}),".",r.jsx("br",{}),"That means the inner function can still use those variables later, even if the outer function has already returned."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"One line definition"}),r.jsx("p",{className:"miniText",children:"Closure is a function plus the scope it was created in."})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Why it exists"}),r.jsx("p",{className:"miniText",children:"JavaScript functions are first class values, they can be returned and stored. Closures make them safe and powerful."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"The mental model - what is remembered"}),r.jsxs("div",{className:"insideGrid",children:[r.jsxs("div",{className:"inside",children:[r.jsxs("div",{className:"insideTop",children:[r.jsx(cr,{}),r.jsx("span",{className:"insideTitle",children:"Lexical scope"})]}),r.jsx("div",{className:"insideText",children:'Lexical means based on where code is written. Inner functions can "see" variables of outer functions.'})]}),r.jsxs("div",{className:"inside",children:[r.jsxs("div",{className:"insideTop",children:[r.jsx(yn,{}),r.jsx("span",{className:"insideTitle",children:"Scope chain"})]}),r.jsx("div",{className:"insideText",children:"The lookup path used when a variable is not found locally. The engine searches outer scopes step by step."})]}),r.jsxs("div",{className:"inside",children:[r.jsxs("div",{className:"insideTop",children:[r.jsx(Dr,{}),r.jsx("span",{className:"insideTitle",children:"Reference, not copy"})]}),r.jsx("div",{className:"insideText",children:"Closures keep references to variables, not snapshots. If the variable changes, the closure sees the latest value."})]})]}),r.jsxs("div",{className:"warn",children:[r.jsx("span",{className:"wIcon",children:r.jsx(He,{})}),r.jsxs("div",{className:"wText",children:[r.jsx("div",{className:"wTitle",children:"Important truth"}),r.jsx("div",{className:"wSub",children:"Closure does not freeze values. It keeps access to variables through scope chain."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Classic example - function returning a function"}),r.jsx("p",{className:"p",children:"This is the easiest way to see closures. Outer function creates a variable, returns an inner function that uses it."}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("pre",{className:"code",children:`function makeCounter() {
  let count = 0;

  return function increment() {
    count += 1;
    return count;
  };
}

const c1 = makeCounter();
c1(); // 1
c1(); // 2

const c2 = makeCounter();
c2(); // 1 (separate closure state)`})]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"What is happening"}),r.jsxs("p",{className:"miniText",children:[r.jsx("span",{className:"mono",children:"increment"})," ","remembers"," ",r.jsx("span",{className:"mono",children:"count"})," ","from"," ",r.jsx("span",{className:"mono",children:"makeCounter"}),". That remembered environment is the closure."]})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Why c1 and c2 differ"}),r.jsxs("p",{className:"miniText",children:["Each call to"," ",r.jsx("span",{className:"mono",children:"makeCounter"})," ","creates a new function execution context and a new"," ",r.jsx("span",{className:"mono",children:"count"})," ","variable. So each returned function closes over its own state."]})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Closures in callbacks"}),r.jsx("p",{className:"p",children:"Closures show up most in callbacks. A callback is a function you pass to another function to run later."}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - setTimeout callback"}),r.jsx("pre",{className:"code",children:`function greetLater(name) {
  setTimeout(function () {
    console.log("Hi " + name);
  }, 500);
}

greetLater("Ashish");`})]}),r.jsxs("div",{className:"finalNote",children:["The callback runs later, but it still knows"," ",r.jsx("span",{className:"mono",children:"name"})," because of closure."]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Interview classic - loop closure problem"}),r.jsxs("p",{className:"p",children:["Many people get confused when using"," ",r.jsx("span",{className:"mono",children:"var"})," in loops with async callbacks. The issue is one shared variable reference."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Problem - var shares one binding"}),r.jsx("pre",{className:"code",children:`for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

// prints: 3, 3, 3`})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Fix 1 - let creates a new binding per iteration"}),r.jsx("pre",{className:"code",children:`for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

// prints: 0, 1, 2`})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Fix 2 - IIFE creates a new scope"}),r.jsx("pre",{className:"code",children:`for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 0);
  })(i);
}

// prints: 0, 1, 2`})]}),r.jsxs("div",{className:"warn",children:[r.jsx("span",{className:"wIcon",children:r.jsx(He,{})}),r.jsxs("div",{className:"wText",children:[r.jsx("div",{className:"wTitle",children:"Why var fails here"}),r.jsxs("div",{className:"wSub",children:[r.jsx("span",{className:"mono",children:"var i"})," ","is function scoped, not block scoped. All callbacks close over the same ",r.jsx("span",{className:"mono",children:"i"}),". By the time callbacks run, loop is finished and"," ",r.jsx("span",{className:"mono",children:"i"})," is 3."]})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Closures for private data"}),r.jsx("p",{className:"p",children:'Closures can hide data without classes. This is a common pattern for "private" variables.'}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - private state"}),r.jsx("pre",{className:"code",children:`function createUser(username) {
  let password = "secret";

  return {
    getUsername() {
      return username;
    },
    checkPassword(p) {
      return p === password;
    },
    setPassword(p) {
      password = p;
    },
  };
}

const u = createUser("a2rp");
u.getUsername(); // "a2rp"
u.checkPassword("secret"); // true
u.password; // undefined`})]}),r.jsxs("div",{className:"finalNote",children:["The object methods keep access to"," ",r.jsx("span",{className:"mono",children:"password"})," via closure, but outside code cannot access it directly."]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Performance and memory notes"}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Memory retention"}),r.jsx("p",{className:"miniText",children:"If a closure references large objects, they stay in memory while the closure is reachable. This can cause memory leaks if not cleaned up."})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Good practice"}),r.jsx("p",{className:"miniText",children:"Do not keep unused closures in global variables. Clear references when done."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Terms and full forms"}),r.jsxs("div",{className:"abbrGrid",children:[r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"JS"})," - JavaScript"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"IIFE"})," - Immediately Invoked Function Expression"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"TDZ"})," - Temporal Dead Zone"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"Scope"})," - Where a variable can be accessed"]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"How to say it confidently"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:'"Closure is created when a function retains access to variables from its lexical scope after the outer function returns."'}),r.jsx("li",{children:'"Closures keep references to variables, not copies. That is why updated values are visible."'}),r.jsx("li",{children:'"Callbacks work because closures keep the required scope alive until the callback executes."'})]}),r.jsxs("div",{className:"quote",children:[r.jsx("span",{className:"qIcon",children:r.jsx(La,{})}),r.jsx("div",{className:"qText",children:"If you understand closures, you will stop guessing in async code."})]})]})]})})]})]})},Xx=220,ef={Wrapper:Re.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1000px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        700px 240px at 15% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 26%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 26%, transparent)
                            1px,
                        transparent 1px,
                        transparent 18px
                    );
                opacity: 0.75;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${Xx}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 55%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    800px 250px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .chainBox {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .chainTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .chainCode {
            margin-top: 10px;
            margin-bottom: 0;
            padding: 12px;
            border-radius: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);

            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .chainNote {
            margin-top: 10px;
            color: var(--color-text-muted);
            font-weight: 700;
            line-height: 1.65;
        }

        .termGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .term {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .tHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .tag {
            display: inline-flex;
            align-items: center;
            padding: 6px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );

            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
        }

        .tBody {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .warn {
            margin-top: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface-2) 64%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .wIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 70%,
                transparent
            );

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-warning);
            }
        }

        .wText {
            min-width: 0;
        }

        .wTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .wSub {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .flowGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 900px) {
                grid-template-columns: 1fr;
            }
        }

        .flow {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .flowTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .flowText {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .qaGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .qa {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .q {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .a {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .practice {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .pRow {
            display: grid;
            grid-template-columns: 90px 1fr;
            gap: 10px;
            padding: 8px 0;

            @media (width < 520px) {
                grid-template-columns: 1fr;
            }
        }

        .label {
            font-weight: 950;
            color: var(--color-text-primary);
        }

        .value {
            color: var(--color-text-secondary);
            font-weight: 650;
            line-height: 1.65;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.65;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .list {
            margin-top: 10px;
            display: grid;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-weight: 650;
                line-height: 1.6;
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "-";
                position: absolute;
                left: 0;
                top: 0;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 72%,
                    var(--color-text-primary)
                );
                font-weight: 950;
            }
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }
    `},rf=220,nf=()=>{const[i,c]=P.useState(!1),[l,p]=P.useState(!1),[h,j]=P.useState(!1),b=P.useMemo(()=>({title:"Prototypes",sub:"JavaScript objects can share behavior through a prototype chain. When you access a property, JavaScript searches the object first, then walks up its prototypes until it finds the property or reaches null."}),[]),S=()=>c(g=>!g);return P.useEffect(()=>{let g=null;return i?(p(!0),requestAnimationFrame(()=>j(!0))):(j(!1),g=window.setTimeout(()=>{p(!1)},rf)),()=>{g&&window.clearTimeout(g)}},[i]),r.jsxs(ef.Wrapper,{id:"prototypes",children:[r.jsxs("div",{className:"top",children:[r.jsx("h2",{className:"title",children:"Prototypes"}),r.jsx("p",{className:"sub",children:b.sub}),r.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[r.jsxs("span",{className:"pill",children:[r.jsx(yn,{})," Prototype chain lookup"]}),r.jsxs("span",{className:"pill",children:[r.jsx(cr,{})," Shared methods"]}),r.jsxs("span",{className:"pill",children:[r.jsx(Dr,{})," Objects inherit behavior"]})]})]}),r.jsxs("div",{className:"accordion",children:[r.jsxs("button",{type:"button",className:"accBtn",onClick:S,"aria-expanded":i,"aria-controls":"prototypes-panel",children:[r.jsxs("div",{className:"accLeft",children:[r.jsx("span",{className:"accIcon",children:r.jsx(lr,{})}),r.jsxs("div",{className:"accText",children:[r.jsx("div",{className:"accTitle",children:b.title}),r.jsxs("div",{className:"accHint",children:["Click to ",i?"collapse":"expand"," with deep beginner explanation and examples"]})]})]}),r.jsx("span",{className:`chev ${i?"open":""}`,children:r.jsx(gr,{})})]}),l&&r.jsx("div",{id:"prototypes-panel",className:`panel ${h?"open":""}`,children:r.jsxs("div",{className:"panelInner",children:[r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Meaning"}),r.jsxs("p",{className:"p",children:["In JavaScript, ",r.jsx("strong",{children:"every object"})," ","has a hidden link to another object called its ",r.jsx("strong",{children:"prototype"}),".",r.jsx("br",{}),"When you try to read a property, JavaScript does a lookup:",r.jsx("br",{}),"- check the object itself",r.jsx("br",{}),"- if not found, check the prototype",r.jsx("br",{}),"- keep going up the chain",r.jsx("br",{}),"- stop at"," ",r.jsx("span",{className:"mono",children:"null"})]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Why it exists"}),r.jsx("p",{className:"miniText",children:"To share methods and properties without copying them into every object."})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Common confusion"}),r.jsx("p",{className:"miniText",children:"Prototype is not a class. It is just an object used for delegation."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Prototype chain in one picture"}),r.jsxs("div",{className:"chainBox",children:[r.jsx("div",{className:"chainTitle",children:"Property lookup order"}),r.jsx("pre",{className:"chainCode",children:`obj
  |
  v
obj.[[Prototype]]  ->  (someObject)
  |
  v
someObject.[[Prototype]]  ->  (Object.prototype)
  |
  v
Object.prototype.[[Prototype]]  ->  null`}),r.jsx("div",{className:"chainNote",children:"JavaScript walks this chain when a property is missing on the current object."})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Key pieces - prototype, __proto__, prototype property"}),r.jsxs("div",{className:"termGrid",children:[r.jsxs("div",{className:"term",children:[r.jsxs("div",{className:"tHead",children:[r.jsx("span",{className:"mono",children:"[[Prototype]]"}),r.jsx("span",{className:"tag",children:"Internal"})]}),r.jsx("p",{className:"tBody",children:"The real internal link used by the engine. You do not access it directly in code."})]}),r.jsxs("div",{className:"term",children:[r.jsxs("div",{className:"tHead",children:[r.jsx("span",{className:"mono",children:"__proto__"}),r.jsx("span",{className:"tag",children:"Getter"})]}),r.jsx("p",{className:"tBody",children:"A legacy accessor that points to an object's prototype. Works, but prefer modern methods."})]}),r.jsxs("div",{className:"term",children:[r.jsxs("div",{className:"tHead",children:[r.jsx("span",{className:"mono",children:"function.prototype"}),r.jsx("span",{className:"tag",children:"Template"})]}),r.jsxs("p",{className:"tBody",children:["Only functions have"," ",r.jsx("span",{className:"mono",children:"prototype"})," ","property. It is used when you create objects with"," ",r.jsx("span",{className:"mono",children:"new"}),"."]})]})]}),r.jsxs("div",{className:"warn",children:[r.jsx("span",{className:"wIcon",children:r.jsx(He,{})}),r.jsxs("div",{className:"wText",children:[r.jsx("div",{className:"wTitle",children:"The biggest confusion"}),r.jsxs("div",{className:"wSub",children:[r.jsx("span",{className:"mono",children:"obj.__proto__"})," ","is the object's prototype link.",r.jsx("br",{}),r.jsx("span",{className:"mono",children:"Fn.prototype"})," ","is a property on the function used as the prototype for objects created by"," ",r.jsx("span",{className:"mono",children:"new Fn()"}),"."]})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Example 1 - basic delegation"}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Code"}),r.jsx("pre",{className:"code",children:`const animal = {
  speak() {
    return "sound";
  }
};

const dog = Object.create(animal);

dog.name = "Bruno";

dog.speak(); // "sound"
dog.hasOwnProperty("speak"); // false`})]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"What happened"}),r.jsxs("p",{className:"miniText",children:[r.jsx("span",{className:"mono",children:"dog"})," ","does not have"," ",r.jsx("span",{className:"mono",children:"speak"}),", so JS looks at"," ",r.jsx("span",{className:"mono",children:"animal"}),"and finds it there."]})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Why hasOwnProperty is useful"}),r.jsx("p",{className:"miniText",children:"It tells you whether the property exists directly on the object or is coming from the prototype chain."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Example 2 - new, constructor, and prototype"}),r.jsxs("p",{className:"p",children:["When you use"," ",r.jsx("span",{className:"mono",children:"new"}),", JavaScript does 4 steps:",r.jsx("br",{}),"- create a new object",r.jsx("br",{}),"- set its prototype to"," ",r.jsx("span",{className:"mono",children:"Fn.prototype"}),r.jsx("br",{}),"- call the function with"," ",r.jsx("span",{className:"mono",children:"this"})," bound to the new object",r.jsx("br",{}),"- return the object (unless you return a different object)"]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Code"}),r.jsx("pre",{className:"code",children:`function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  return "hi " + this.name;
};

const u1 = new User("A");
const u2 = new User("B");

u1.sayHi(); // "hi A"
u2.sayHi(); // "hi B"`})]}),r.jsxs("div",{className:"flowGrid",children:[r.jsxs("div",{className:"flow",children:[r.jsx("div",{className:"flowTitle",children:"Memory saving"}),r.jsxs("p",{className:"flowText",children:[r.jsx("span",{className:"mono",children:"sayHi"})," ","exists once on"," ",r.jsx("span",{className:"mono",children:"User.prototype"}),", and all users share it through the chain."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx("div",{className:"flowTitle",children:"Lookup rule"}),r.jsxs("p",{className:"flowText",children:["If ",r.jsx("span",{className:"mono",children:"u1"})," ","does not have"," ",r.jsx("span",{className:"mono",children:"sayHi"}),", JS checks"," ",r.jsx("span",{className:"mono",children:"User.prototype"}),"."]})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Shadowing - when object overrides prototype"}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Code"}),r.jsx("pre",{className:"code",children:`const base = { x: 10 };
const obj = Object.create(base);

obj.x; // 10 (from prototype)

obj.x = 99;
obj.x; // 99 (own property now)

delete obj.x;
obj.x; // 10 (prototype again)`})]}),r.jsx("div",{className:"finalNote",children:"If a property exists on the object, it hides the same property on the prototype. This is called shadowing or overriding."})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Important rules and common pitfalls"}),r.jsxs("div",{className:"qaGrid",children:[r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Does prototype lookup happen on writes?"}),r.jsxs("div",{className:"a",children:["Usually no. Writing"," ",r.jsx("span",{className:"mono",children:"obj.x = ..."})," ","creates or updates an own property on ",r.jsx("span",{className:"mono",children:"obj"}),"."]})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Is prototype chain slow?"}),r.jsx("div",{className:"a",children:"Usually not. Engines optimize heavily. Deep chains can be slower, but normal usage is fine."})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Should I use __proto__?"}),r.jsxs("div",{className:"a",children:["Avoid in production. Prefer"," ",r.jsx("span",{className:"mono",children:"Object.getPrototypeOf"})," ","and"," ",r.jsx("span",{className:"mono",children:"Object.setPrototypeOf"}),"."]})]})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Modern prototype helpers"}),r.jsx("pre",{className:"code",children:`const p = Object.getPrototypeOf(obj);
Object.setPrototypeOf(obj, otherProto);`})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Quick practice"}),r.jsxs("div",{className:"practice",children:[r.jsxs("div",{className:"pRow",children:[r.jsx("span",{className:"label",children:"Try"}),r.jsxs("span",{className:"value",children:["If ",r.jsx("span",{className:"mono",children:"obj"})," ","has no"," ",r.jsx("span",{className:"mono",children:"toString"}),", where does it come from?"]})]}),r.jsxs("div",{className:"pRow",children:[r.jsx("span",{className:"label",children:"Answer"}),r.jsxs("span",{className:"value",children:["From"," ",r.jsx("span",{className:"mono",children:"Object.prototype"})," ","through the prototype chain."]})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Terms and full forms"}),r.jsxs("div",{className:"abbrGrid",children:[r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"JS"})," - JavaScript"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"proto"})," - Prototype (common short form)"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"[[Prototype]]"})," ","- Internal prototype link"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"OOP"})," - Object Oriented Programming"]})]}),r.jsx("div",{className:"finalNote",children:"Prototype based inheritance in JS is delegation. Objects do not copy methods - they find them through the chain."})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"How to say it confidently"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:'"When a property is missing on the object, JavaScript walks up the prototype chain until it finds it or reaches null."'}),r.jsx("li",{children:'"Functions have a prototype property which becomes the [[Prototype]] of objects created with new."'}),r.jsx("li",{children:'"Prototype is not a class - it is an object used for delegation and shared behavior."'})]})]})]})})]})]})},tf=220,sf={Wrapper:Re.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1000px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        700px 240px at 15% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 26%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 26%, transparent)
                            1px,
                        transparent 1px,
                        transparent 18px
                    );
                opacity: 0.75;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${tf}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 55%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    800px 250px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .ruleGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .rule {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .rTop {
            display: flex;
            align-items: center;
            gap: 10px;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-accent);
            }
        }

        .rTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .rText {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .warn {
            margin-top: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface-2) 64%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .wIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 70%,
                transparent
            );

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-warning);
            }
        }

        .wText {
            min-width: 0;
        }

        .wTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .wSub {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .list {
            margin-top: 10px;
            display: grid;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-weight: 650;
                line-height: 1.6;
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "-";
                position: absolute;
                left: 0;
                top: 0;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 72%,
                    var(--color-text-primary)
                );
                font-weight: 950;
            }
        }

        .qaGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .qa {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .q {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .a {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .tip {
            margin-top: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .tipIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(in srgb, var(--color-surface-2) 68%, #000);

            display: inline-flex;
            align-items: center;
            justify-content: center;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-primary);
            }
        }

        .tipText {
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 700;
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.65;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }
    `},af=220,of=()=>{const[i,c]=P.useState(!1),[l,p]=P.useState(!1),[h,j]=P.useState(!1),b=P.useMemo(()=>({title:"this keyword",sub:"`this` is a special value set for a function call. It is decided by how the function is called, not where the function is written."}),[]),S=()=>c(g=>!g);return P.useEffect(()=>{let g=null;return i?(p(!0),requestAnimationFrame(()=>j(!0))):(j(!1),g=window.setTimeout(()=>p(!1),af)),()=>{g&&window.clearTimeout(g)}},[i]),r.jsxs(sf.Wrapper,{id:"this-keyword",children:[r.jsxs("div",{className:"top",children:[r.jsx("h2",{className:"title",children:"this keyword"}),r.jsx("p",{className:"sub",children:b.sub}),r.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[r.jsxs("span",{className:"pill",children:[r.jsx(kp,{})," Call-site decides"]}),r.jsxs("span",{className:"pill",children:[r.jsx(yn,{})," Method vs function"]}),r.jsxs("span",{className:"pill",children:[r.jsx(dr,{})," Arrow is different"]})]})]}),r.jsxs("div",{className:"accordion",children:[r.jsxs("button",{type:"button",className:"accBtn",onClick:S,"aria-expanded":i,"aria-controls":"this-panel",children:[r.jsxs("div",{className:"accLeft",children:[r.jsx("span",{className:"accIcon",children:r.jsx(lr,{})}),r.jsxs("div",{className:"accText",children:[r.jsx("div",{className:"accTitle",children:b.title}),r.jsxs("div",{className:"accHint",children:["Click to ",i?"collapse":"expand"," with beginner rules and examples"]})]})]}),r.jsx("span",{className:`chev ${i?"open":""}`,children:r.jsx(gr,{})})]}),l&&r.jsx("div",{id:"this-panel",className:`panel ${h?"open":""}`,children:r.jsxs("div",{className:"panelInner",children:[r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Meaning"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"`this`"})," is a value the JavaScript engine sets when a function is called.",r.jsx("br",{}),"- it is not a variable you declare",r.jsx("br",{}),"- it changes based on the call-site",r.jsx("br",{}),"- different call types create different"," ",r.jsx("span",{className:"mono",children:"`this`"})]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"The one-line rule"}),r.jsxs("p",{className:"miniText",children:[r.jsx("strong",{children:"Find the dot before the call."}),"If you see"," ",r.jsx("span",{className:"mono",children:"obj.fn()"}),", then"," ",r.jsx("span",{className:"mono",children:"this"})," ","is ",r.jsx("span",{className:"mono",children:"obj"}),"."]})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Why beginners get stuck"}),r.jsxs("p",{className:"miniText",children:["People think"," ",r.jsx("span",{className:"mono",children:"this"})," ","means the object where function is written. It does not. It depends on how it is called."]})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Core rules (practical)"}),r.jsxs("div",{className:"ruleGrid",children:[r.jsxs("div",{className:"rule",children:[r.jsxs("div",{className:"rTop",children:[r.jsx(yn,{}),r.jsx("span",{className:"rTitle",children:"Method call"})]}),r.jsxs("p",{className:"rText",children:[r.jsx("span",{className:"mono",children:"obj.fn()"}),r.jsx("br",{}),r.jsx("span",{className:"mono",children:"this"})," ","is ",r.jsx("span",{className:"mono",children:"obj"})]})]}),r.jsxs("div",{className:"rule",children:[r.jsxs("div",{className:"rTop",children:[r.jsx(La,{}),r.jsx("span",{className:"rTitle",children:"Normal function call"})]}),r.jsxs("p",{className:"rText",children:[r.jsx("span",{className:"mono",children:"fn()"}),r.jsx("br",{}),"In strict mode"," ",r.jsx("span",{className:"mono",children:"this"})," ","is"," ",r.jsx("span",{className:"mono",children:"undefined"}),r.jsx("br",{}),"In browser non-strict scripts it can be"," ",r.jsx("span",{className:"mono",children:"window"})]})]}),r.jsxs("div",{className:"rule",children:[r.jsxs("div",{className:"rTop",children:[r.jsx(kp,{}),r.jsx("span",{className:"rTitle",children:"Constructor call"})]}),r.jsxs("p",{className:"rText",children:[r.jsx("span",{className:"mono",children:"new Fn()"}),r.jsx("br",{}),r.jsx("span",{className:"mono",children:"this"})," ","is the new object"]})]}),r.jsxs("div",{className:"rule",children:[r.jsxs("div",{className:"rTop",children:[r.jsx(dr,{}),r.jsx("span",{className:"rTitle",children:"Arrow function"})]}),r.jsxs("p",{className:"rText",children:["Arrow does not create its own"," ",r.jsx("span",{className:"mono",children:"this"}),r.jsx("br",{}),"It uses"," ",r.jsx("span",{className:"mono",children:"this"})," ","from outer scope"]})]})]}),r.jsxs("div",{className:"warn",children:[r.jsx("span",{className:"wIcon",children:r.jsx(He,{})}),r.jsxs("div",{className:"wText",children:[r.jsx("div",{className:"wTitle",children:"Most mistakes happen here"}),r.jsxs("div",{className:"wSub",children:["If you pass a method as a callback, like"," ",r.jsx("span",{className:"mono",children:"setTimeout(obj.fn, 0)"}),", the dot is lost, so"," ",r.jsx("span",{className:"mono",children:"this"})," ","changes."]})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Example 1 - method vs function"}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Code"}),r.jsx("pre",{className:"code",children:`"use strict";

const user = {
  name: "Ash",
  show() {
    console.log(this.name);
  }
};

user.show(); // this is user -> "Ash"

const f = user.show;
f(); // this is undefined in strict mode -> error`})]}),r.jsxs("div",{className:"finalNote",children:["When you store"," ",r.jsx("span",{className:"mono",children:"user.show"})," into"," ",r.jsx("span",{className:"mono",children:"f"}),", it becomes a plain function call"," ",r.jsx("span",{className:"mono",children:"f()"}),". No dot, no object, so"," ",r.jsx("span",{className:"mono",children:"this"})," is not"," ",r.jsx("span",{className:"mono",children:"user"}),"."]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Fix 1 - bind"}),r.jsxs("p",{className:"p",children:[r.jsx("strong",{children:"bind"})," creates a new function with fixed"," ",r.jsx("span",{className:"mono",children:"this"}),"."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Code"}),r.jsx("pre",{className:"code",children:`"use strict";

const user = {
  name: "Ash",
  show() {
    console.log(this.name);
  }
};

const bound = user.show.bind(user);
bound(); // "Ash"`})]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"bind"}),r.jsx("p",{className:"miniText",children:"Returns a new function. Does not call immediately."})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"call and apply"}),r.jsxs("p",{className:"miniText",children:["Call immediately with a chosen"," ",r.jsx("span",{className:"mono",children:"this"}),". Difference is how arguments are passed."]})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Fix 2 - arrow function in callbacks"}),r.jsxs("p",{className:"p",children:["Arrow functions do not create their own"," ",r.jsx("span",{className:"mono",children:"this"}),". They use outer ",r.jsx("span",{className:"mono",children:"this"}),". This is useful inside class methods and timers."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Code"}),r.jsx("pre",{className:"code",children:`"use strict";

const user = {
  name: "Ash",
  showLater() {
    setTimeout(() => {
      console.log(this.name);
    }, 0);
  }
};

user.showLater(); // "Ash"`})]}),r.jsxs("div",{className:"warn",children:[r.jsx("span",{className:"wIcon",children:r.jsx(He,{})}),r.jsxs("div",{className:"wText",children:[r.jsx("div",{className:"wTitle",children:"Arrow is not a replacement for everything"}),r.jsxs("div",{className:"wSub",children:["Arrow is great for callbacks and preserving outer"," ",r.jsx("span",{className:"mono",children:"this"}),". But do not use arrow as an object method if you want method-style"," ",r.jsx("span",{className:"mono",children:"this"}),"."]})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Example 2 - arrow as method trap"}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Code"}),r.jsx("pre",{className:"code",children:`"use strict";

const user = {
  name: "Ash",
  show: () => {
    console.log(this);
  }
};

user.show(); // this is not user
// arrow takes this from outer scope`})]}),r.jsxs("div",{className:"finalNote",children:["In objects, prefer normal method syntax"," ",r.jsx("span",{className:"mono",children:"show() "})," when you want ",r.jsx("span",{className:"mono",children:"this"})," ","to point to the object."]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Example 3 - constructor and new"}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Code"}),r.jsx("pre",{className:"code",children:`"use strict";

function User(name) {
  this.name = name;
}

const u1 = new User("Ash");
console.log(u1.name); // "Ash"`})]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"What new does"}),r.jsxs("p",{className:"miniText",children:["Creates a new object, sets"," ",r.jsx("span",{className:"mono",children:"this"})," ","to it, links prototype, returns the object."]})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Without new"}),r.jsxs("p",{className:"miniText",children:["In strict mode,"," ",r.jsx("span",{className:"mono",children:"this"})," ","becomes"," ",r.jsx("span",{className:"mono",children:"undefined"})," ","and property assignment fails."]})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Quick interview lines"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:'"`this` is decided by the call-site. Method call uses the object before the dot."'}),r.jsx("li",{children:'"Arrow functions do not have their own `this`. They close over outer `this`."'}),r.jsx("li",{children:'"bind creates a new function with fixed `this`. call and apply invoke immediately."'})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Terms and full forms"}),r.jsxs("div",{className:"abbrGrid",children:[r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"JS"})," - JavaScript"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"TDZ"})," - Temporal Dead Zone"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"API"})," - Application Programming Interface"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"OOP"})," - Object Oriented Programming"]})]}),r.jsxs("div",{className:"finalNote",children:["The fastest way to solve"," ",r.jsx("span",{className:"mono",children:"this"})," questions is: look at the call-site, then identify the rule that matches."]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Mini practice"}),r.jsxs("div",{className:"qaGrid",children:[r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"What is printed here"}),r.jsxs("div",{className:"a",children:[r.jsx("span",{className:"mono",children:"obj.fn()"})," ","prints"," ",r.jsx("span",{className:"mono",children:"obj"})," ","based value."," ",r.jsx("span",{className:"mono",children:"fn()"})," ","does not."]})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Why does callback lose this"}),r.jsxs("div",{className:"a",children:["The dot is lost. The function is called without an owning object. Use"," ",r.jsx("span",{className:"mono",children:"bind"})," ","or arrow callback."]})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"When is arrow best"}),r.jsxs("div",{className:"a",children:["When you want to preserve outer"," ",r.jsx("span",{className:"mono",children:"this"}),", especially in callbacks and event handlers."]})]})]}),r.jsxs("div",{className:"tip",children:[r.jsx("span",{className:"tipIcon",children:r.jsx(wx,{})}),r.jsxs("div",{className:"tipText",children:["Tip - when stuck, rewrite the call-site clearly. For example replace"," ",r.jsx("span",{className:"mono",children:"obj.fn"})," ","with a variable and see if the dot remains."]})]})]})]})})]})]})},lf=220,cf={Wrapper:Re.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1000px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        700px 240px at 15% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    radial-gradient(
                        600px 220px at 88% 20%,
                        color-mix(in srgb, var(--color-accent) 8%, transparent),
                        transparent 62%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 26%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 26%, transparent)
                            1px,
                        transparent 1px,
                        transparent 18px
                    );
                opacity: 0.75;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${lf}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 55%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    800px 250px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .termGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .term {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .tHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .tag {
            display: inline-flex;
            align-items: center;
            padding: 6px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );

            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
        }

        .tBody {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.65;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .warn {
            margin-top: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface-2) 64%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .wIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 70%,
                transparent
            );

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-warning);
            }
        }

        .wText {
            min-width: 0;
        }

        .wTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .wSub {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .flowGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 900px) {
                grid-template-columns: 1fr;
            }
        }

        .flow {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .flowTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .list {
            margin-top: 10px;
            display: grid;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-weight: 650;
                line-height: 1.6;
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "-";
                position: absolute;
                left: 0;
                top: 0;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 72%,
                    var(--color-text-primary)
                );
                font-weight: 950;
            }
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .stackBox {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .stackTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .stackCode {
            margin-top: 10px;
            margin-bottom: 0;
            padding: 12px;
            border-radius: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);

            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .stackNote {
            margin-top: 10px;
            color: var(--color-text-muted);
            font-weight: 700;
            line-height: 1.65;
        }

        .qaGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 860px) {
                grid-template-columns: 1fr;
            }
        }

        .qa {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .q {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .a {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .practice {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );
        }

        .pRow {
            display: grid;
            grid-template-columns: 110px 1fr;
            gap: 10px;
            padding: 8px 0;
            border-bottom: 1px solid
                color-mix(in srgb, var(--color-border) 60%, transparent);
        }

        .pRow:last-child {
            border-bottom: 0;
        }

        .label {
            color: var(--color-text-muted);
            font-weight: 900;
        }

        .value {
            color: var(--color-text-secondary);
            font-weight: 700;
            line-height: 1.65;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }
    `},df=220,pf=()=>{const[i,c]=P.useState(!1),[l,p]=P.useState(!1),[h,j]=P.useState(!1),b=P.useMemo(()=>({title:"Memory management",sub:"Memory management means how JavaScript allocates, uses, and frees memory while your program runs. Understanding stack vs heap, references, and garbage collection helps you avoid memory leaks and weird performance issues."}),[]),S=()=>c(g=>!g);return P.useEffect(()=>{let g=null;return i?(p(!0),requestAnimationFrame(()=>j(!0))):(j(!1),g=window.setTimeout(()=>p(!1),df)),()=>{g&&window.clearTimeout(g)}},[i]),r.jsxs(cf.Wrapper,{id:"memory-management",children:[r.jsxs("div",{className:"top",children:[r.jsx("h2",{className:"title",children:"Memory management"}),r.jsx("p",{className:"sub",children:b.sub}),r.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[r.jsxs("span",{className:"pill",children:[r.jsx(cr,{})," Stack vs heap"]}),r.jsxs("span",{className:"pill",children:[r.jsx(nl,{})," References"]}),r.jsxs("span",{className:"pill",children:[r.jsx(eu,{})," Garbage collection"]})]})]}),r.jsxs("div",{className:"accordion",children:[r.jsxs("button",{type:"button",className:"accBtn",onClick:S,"aria-expanded":i,"aria-controls":"memory-management-panel",children:[r.jsxs("div",{className:"accLeft",children:[r.jsx("span",{className:"accIcon",children:r.jsx(lr,{})}),r.jsxs("div",{className:"accText",children:[r.jsx("div",{className:"accTitle",children:b.title}),r.jsxs("div",{className:"accHint",children:["Click to ",i?"collapse":"expand"," with beginner explanation and practical examples"]})]})]}),r.jsx("span",{className:`chev ${i?"open":""}`,children:r.jsx(gr,{})})]}),l&&r.jsx("div",{id:"memory-management-panel",className:`panel ${h?"open":""}`,children:r.jsxs("div",{className:"panelInner",children:[r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Meaning"}),r.jsxs("p",{className:"p",children:["JavaScript needs memory to store values like numbers, strings, objects, arrays, and functions.",r.jsx("br",{}),r.jsx("strong",{children:"Memory management"})," is about:",r.jsx("br",{}),"- allocating memory when values are created",r.jsx("br",{}),"- keeping memory while values are still reachable",r.jsx("br",{}),"- freeing memory when values are no longer needed"]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Why you should care"}),r.jsx("p",{className:"miniText",children:"Memory issues cause slow apps, browser tab crashes, and random lag. Most bugs happen because something stays referenced by mistake."})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"What you control"}),r.jsx("p",{className:"miniText",children:"JavaScript frees memory automatically, but you control references. If you keep references alive, memory cannot be freed."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Stack vs heap"}),r.jsxs("p",{className:"p",children:["A simple mental model:",r.jsx("br",{}),"- ",r.jsx("strong",{children:"Stack"})," stores function call frames and small fixed size values",r.jsx("br",{}),"- ",r.jsx("strong",{children:"Heap"})," stores objects and dynamic data"]}),r.jsxs("div",{className:"termGrid",children:[r.jsxs("div",{className:"term",children:[r.jsxs("div",{className:"tHead",children:[r.jsx("span",{className:"mono",children:"Stack"}),r.jsx("span",{className:"tag",children:"Fast"})]}),r.jsxs("p",{className:"tBody",children:["Stack is managed like a stack data structure.",r.jsx("br",{}),"Each function call pushes a frame. When it returns, the frame is popped.",r.jsx("br",{}),"It is fast and predictable."]})]}),r.jsxs("div",{className:"term",children:[r.jsxs("div",{className:"tHead",children:[r.jsx("span",{className:"mono",children:"Heap"}),r.jsx("span",{className:"tag",children:"Flexible"})]}),r.jsxs("p",{className:"tBody",children:["Heap is a large pool of memory used for objects, arrays, functions, closures, and everything that can grow.",r.jsx("br",{}),"It is flexible but needs garbage collection."]})]}),r.jsxs("div",{className:"term",children:[r.jsxs("div",{className:"tHead",children:[r.jsx("span",{className:"mono",children:"Reference"}),r.jsx("span",{className:"tag",children:"Pointer"})]}),r.jsxs("p",{className:"tBody",children:["A reference is like an address to a heap object.",r.jsx("br",{}),"Variables often store references rather than full objects."]})]})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - primitives vs objects"}),r.jsx("pre",{className:"code",children:`// primitives - usually stored directly
let a = 10;
let b = a;
b = 20;

// objects - variables hold references
let obj1 = { x: 1 };
let obj2 = obj1;
obj2.x = 99;

console.log(a);    // 10
console.log(obj1); // { x: 99 }`})]}),r.jsx("div",{className:"finalNote",children:"Primitive copy is value copy. Object copy is reference copy. This one idea explains a huge chunk of bugs."})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Call stack and memory"}),r.jsxs("p",{className:"p",children:["Each running function has a stack frame that stores local variables and parameters.",r.jsx("br",{}),"When the function returns, its stack frame is removed. But heap objects referenced from somewhere else can stay alive."]}),r.jsxs("div",{className:"stackBox",children:[r.jsx("div",{className:"stackTitle",children:"Stack frame mental model"}),r.jsx("pre",{className:"stackCode",children:`function greet(name) {
  const msg = "hi " + name;
  return msg;
}

greet("A") creates a stack frame:
- name -> "A"
- msg  -> "hi A"

when greet returns, frame is popped`}),r.jsx("div",{className:"stackNote",children:"Stack frames are short-lived. Heap allocations can live long depending on references."})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Closures keep memory alive"}),r.jsxs("p",{className:"p",children:["A ",r.jsx("strong",{children:"closure"})," happens when a function remembers variables from its outer scope.",r.jsx("br",{}),"That means outer variables cannot be freed while the inner function is still reachable."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - closure retaining memory"}),r.jsx("pre",{className:"code",children:`function makeCounter() {
  let count = 0;

  return function inc() {
    count += 1;
    return count;
  };
}

const c = makeCounter();
c(); // 1
c(); // 2

// count stays alive because inc() still references it`})]}),r.jsxs("div",{className:"warn",children:[r.jsx("span",{className:"wIcon",children:r.jsx(He,{})}),r.jsxs("div",{className:"wText",children:[r.jsx("div",{className:"wTitle",children:"Closures are not bad"}),r.jsx("div",{className:"wSub",children:"Closures are powerful and normal. The problem is keeping big data in a closure for too long."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Garbage collection basics"}),r.jsxs("p",{className:"p",children:[r.jsx("strong",{children:"GC"})," - Garbage Collection. It is the engine process that frees heap memory that is no longer reachable.",r.jsx("br",{}),'Most engines use a "mark and sweep" idea:',r.jsx("br",{}),"- mark reachable objects from root references",r.jsx("br",{}),"- sweep the unmarked objects"]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Root references"}),r.jsxs("p",{className:"miniText",children:["Roots are things like:",r.jsx("br",{}),"- global variables",r.jsx("br",{}),"- active stack variables",r.jsx("br",{}),"- closures that are reachable",r.jsx("br",{}),"- DOM references"]})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Reachable means alive"}),r.jsx("p",{className:"miniText",children:"If an object can be reached by following references from roots, it stays. If not reachable, GC can free it."})]})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - unreachable object"}),r.jsx("pre",{className:"code",children:`let user = { name: "A" };

// later
user = null;

// the old object { name: "A" } has no references now
// it becomes eligible for garbage collection`})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Common memory leak patterns"}),r.jsxs("div",{className:"qaGrid",children:[r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Global growing arrays or maps"}),r.jsx("div",{className:"a",children:"You keep pushing data to a global list and never remove it."})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Timers not cleared"}),r.jsxs("div",{className:"a",children:[r.jsx("span",{className:"mono",children:"setInterval"})," ","keeps running and holds references."]})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Event listeners not removed"}),r.jsx("div",{className:"a",children:"Listeners keep closures alive and prevent objects from being freed."})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Detached DOM nodes"}),r.jsx("div",{className:"a",children:"You remove elements from DOM but still keep references in JS."})]})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - timer leak pattern"}),r.jsx("pre",{className:"code",children:`function start() {
  const big = new Array(100000).fill("x");

  const id = setInterval(() => {
    // big is captured by closure
    console.log(big.length);
  }, 1000);

  // fix is to clear it when not needed
  return () => clearInterval(id);
}

const stop = start();
// later
stop();`})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Practical checks and habits"}),r.jsxs("div",{className:"flowGrid",children:[r.jsxs("div",{className:"flow",children:[r.jsx("div",{className:"flowTitle",children:"What to do"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Clear intervals and timeouts"}),r.jsx("li",{children:"Remove event listeners on cleanup"}),r.jsx("li",{children:"Avoid storing huge data in global scope"}),r.jsx("li",{children:"Null references when large objects are done"}),r.jsx("li",{children:"Use WeakMap for cache keyed by objects"})]})]}),r.jsxs("div",{className:"flow",children:[r.jsx("div",{className:"flowTitle",children:"Debugging tools"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Chrome DevTools - Memory tab"}),r.jsx("li",{children:"Heap snapshot comparisons"}),r.jsx("li",{children:"Allocation instrumentation"}),r.jsx("li",{children:"Performance recordings for GC pauses"})]})]})]}),r.jsx("div",{className:"finalNote",children:'Most memory problems are not about "GC is bad". They are about references that never die.'})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Terms and full forms"}),r.jsxs("div",{className:"abbrGrid",children:[r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"GC"})," - Garbage Collection"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"RAM"})," - Random Access Memory"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"DOM"})," - Document Object Model"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"JS"})," - JavaScript"]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"How to say it confidently"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:'"Stack stores call frames and small values, heap stores objects and dynamic allocations."'}),r.jsx("li",{children:'"Garbage collection frees heap objects that are no longer reachable from roots."'}),r.jsx("li",{children:'"Memory leaks usually happen because some reference stays alive by mistake, like timers, listeners, or caches."'})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Mini practice"}),r.jsxs("div",{className:"practice",children:[r.jsxs("div",{className:"pRow",children:[r.jsx("span",{className:"label",children:"Try"}),r.jsxs("span",{className:"value",children:["Why does"," ",r.jsx("span",{className:"mono",children:"obj2 = obj1"})," ","copy changes back to"," ",r.jsx("span",{className:"mono",children:"obj1"}),"?"]})]}),r.jsxs("div",{className:"pRow",children:[r.jsx("span",{className:"label",children:"Answer"}),r.jsx("span",{className:"value",children:"Because objects are copied by reference, both variables point to the same heap object."})]})]})]})]})})]})]})},uf=220,mf={Wrapper:Re.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1000px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        700px 240px at 15% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    radial-gradient(
                        700px 240px at 90% 40%,
                        color-mix(in srgb, var(--color-accent) 8%, transparent),
                        transparent 62%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 26%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 26%, transparent)
                            1px,
                        transparent 1px,
                        transparent 18px
                    );
                opacity: 0.75;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${uf}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 55%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    800px 250px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .termGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .term {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .tHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .tag {
            display: inline-flex;
            align-items: center;
            padding: 6px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );

            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
        }

        .tBody {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.65;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .insideGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .inside {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .insideTop {
            display: flex;
            align-items: center;
            gap: 10px;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-accent);
            }
        }

        .insideTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .insideText {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .warn {
            margin-top: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface-2) 64%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .wIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 70%,
                transparent
            );

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-warning);
            }
        }

        .wText {
            min-width: 0;
        }

        .wTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .wSub {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .flowGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 900px) {
                grid-template-columns: 1fr;
            }
        }

        .flow {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .flowTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .list {
            margin-top: 10px;
            display: grid;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-weight: 650;
                line-height: 1.6;
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "-";
                position: absolute;
                left: 0;
                top: 0;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 72%,
                    var(--color-text-primary)
                );
                font-weight: 950;
            }
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .qaGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 900px) {
                grid-template-columns: 1fr;
            }
        }

        .qa {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .q {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .a {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .tipGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .tip {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .tipTop {
            display: flex;
            align-items: center;
            gap: 10px;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-accent);
            }
        }

        .tipTitle {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .tipText {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }
    `},hf=220,xf=()=>{const[i,c]=P.useState(!1),[l,p]=P.useState(!1),[h,j]=P.useState(!1),b=P.useMemo(()=>({title:"Garbage collection",sub:"Garbage collection is how JavaScript automatically frees memory that is no longer reachable by your program. It prevents you from manually freeing memory, but you still must avoid keeping unnecessary references."}),[]),S=()=>c(g=>!g);return P.useEffect(()=>{let g=null;return i?(p(!0),requestAnimationFrame(()=>j(!0))):(j(!1),g=window.setTimeout(()=>p(!1),hf)),()=>{g&&window.clearTimeout(g)}},[i]),r.jsxs(mf.Wrapper,{id:"garbage-collection",children:[r.jsxs("div",{className:"top",children:[r.jsx("h2",{className:"title",children:"Garbage collection"}),r.jsx("p",{className:"sub",children:b.sub}),r.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[r.jsxs("span",{className:"pill",children:[r.jsx(eu,{})," Auto memory cleanup"]}),r.jsxs("span",{className:"pill",children:[r.jsx(yn,{})," Reachability based"]}),r.jsxs("span",{className:"pill",children:[r.jsx(dr,{})," Avoid memory leaks"]})]})]}),r.jsxs("div",{className:"accordion",children:[r.jsxs("button",{type:"button",className:"accBtn",onClick:S,"aria-expanded":i,"aria-controls":"garbage-collection-panel",children:[r.jsxs("div",{className:"accLeft",children:[r.jsx("span",{className:"accIcon",children:r.jsx(lr,{})}),r.jsxs("div",{className:"accText",children:[r.jsx("div",{className:"accTitle",children:b.title}),r.jsxs("div",{className:"accHint",children:["Click to ",i?"collapse":"expand"," with deep beginner friendly explanation and examples"]})]})]}),r.jsx("span",{className:`chev ${i?"open":""}`,children:r.jsx(gr,{})})]}),l&&r.jsx("div",{id:"garbage-collection-panel",className:`panel ${h?"open":""}`,children:r.jsxs("div",{className:"panelInner",children:[r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Meaning"}),r.jsxs("p",{className:"p",children:[r.jsx("strong",{children:"Garbage collection"})," is the process of finding objects that your code can no longer use and freeing their memory.",r.jsx("br",{}),"JavaScript does this automatically, because JS has automatic memory management."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"The simple rule"}),r.jsxs("p",{className:"miniText",children:["If an object is"," ",r.jsx("strong",{children:"reachable"})," from your program, it must stay in memory. If it is not reachable, it can be collected."]})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Why leaks still happen"}),r.jsx("p",{className:"miniText",children:"Garbage collector removes memory only when there are no references. If you accidentally keep references, memory stays forever."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Stack vs heap - quick model"}),r.jsxs("div",{className:"insideGrid",children:[r.jsxs("div",{className:"inside",children:[r.jsxs("div",{className:"insideTop",children:[r.jsx(Dr,{}),r.jsx("span",{className:"insideTitle",children:"Stack"})]}),r.jsx("div",{className:"insideText",children:"Stores function call frames and primitive values during execution. Very fast. Managed by push and pop as functions call and return."})]}),r.jsxs("div",{className:"inside",children:[r.jsxs("div",{className:"insideTop",children:[r.jsx(nl,{}),r.jsx("span",{className:"insideTitle",children:"Heap"})]}),r.jsx("div",{className:"insideText",children:"Stores objects, arrays, functions, and closures. Garbage collection mostly deals with heap memory."})]}),r.jsxs("div",{className:"inside",children:[r.jsxs("div",{className:"insideTop",children:[r.jsx(yn,{}),r.jsx("span",{className:"insideTitle",children:"References"})]}),r.jsx("div",{className:"insideText",children:"Variables on the stack often point to objects on the heap by reference. If references remain, objects remain."})]})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - heap object referenced by stack"}),r.jsx("pre",{className:"code",children:`function makeUser() {
  const user = { name: "Ashish", role: "MERN" };
  return user;
}

const u = makeUser(); // u references the object on heap`})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"How GC decides what to remove"}),r.jsxs("p",{className:"p",children:["Modern JavaScript engines use"," ",r.jsx("strong",{children:"reachability"}),".",r.jsx("br",{}),'They start from a set of "roots" and mark everything reachable. Anything not marked is garbage.']}),r.jsxs("div",{className:"termGrid",children:[r.jsxs("div",{className:"term",children:[r.jsxs("div",{className:"tHead",children:[r.jsx("span",{className:"mono",children:"Roots"}),r.jsx("span",{className:"tag",children:"Start"})]}),r.jsx("p",{className:"tBody",children:"Roots are always reachable starting points. Examples - global object, current call stack variables, active closures, active timers and listeners."})]}),r.jsxs("div",{className:"term",children:[r.jsxs("div",{className:"tHead",children:[r.jsx("span",{className:"mono",children:"Mark"}),r.jsx("span",{className:"tag",children:"Visit"})]}),r.jsx("p",{className:"tBody",children:'Engine visits objects reachable from roots and marks them as "keep".'})]}),r.jsxs("div",{className:"term",children:[r.jsxs("div",{className:"tHead",children:[r.jsx("span",{className:"mono",children:"Sweep"}),r.jsx("span",{className:"tag",children:"Free"})]}),r.jsx("p",{className:"tBody",children:"Engine frees memory for objects that were not marked."})]})]}),r.jsx("div",{className:"finalNote",children:'This is commonly called "mark and sweep". You do not need to implement it, but you should understand reachability.'})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Generational GC - why most objects die young"}),r.jsxs("p",{className:"p",children:["Engines optimize garbage collection using the idea that most objects are created and discarded quickly.",r.jsx("br",{}),"So memory is often split into:",r.jsx("br",{}),"- young generation - short lived objects",r.jsx("br",{}),"- old generation - long lived objects"]}),r.jsxs("div",{className:"flowGrid",children:[r.jsxs("div",{className:"flow",children:[r.jsx("div",{className:"flowTitle",children:"Minor GC"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Runs frequently on young objects"}),r.jsx("li",{children:"Usually fast"}),r.jsx("li",{children:"Collects temporary objects"})]})]}),r.jsxs("div",{className:"flow",children:[r.jsx("div",{className:"flowTitle",children:"Major GC"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Runs less often on old objects"}),r.jsx("li",{children:"Can take longer"}),r.jsx("li",{children:"Happens when old space grows"})]})]})]}),r.jsxs("div",{className:"warn",children:[r.jsx("span",{className:"wIcon",children:r.jsx(He,{})}),r.jsxs("div",{className:"wText",children:[r.jsx("div",{className:"wTitle",children:"Stop the world"}),r.jsx("div",{className:"wSub",children:"Some GC work can pause JavaScript execution briefly. Engines work hard to reduce this, but heavy memory pressure can still cause jank."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Common memory leaks in JavaScript"}),r.jsx("p",{className:"p",children:"Garbage collection frees memory only when objects become unreachable. Leaks happen when objects remain reachable accidentally."}),r.jsxs("div",{className:"qaGrid",children:[r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Global references"}),r.jsx("div",{className:"a",children:"Storing large objects on global variables keeps them alive for the entire page lifetime."})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Timers not cleared"}),r.jsx("div",{className:"a",children:"setInterval keeps running and keeps captured references alive until cleared."})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Event listeners not removed"}),r.jsx("div",{className:"a",children:"A listener can keep a closure alive. Always remove listeners when not needed."})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Closures holding big data"}),r.jsx("div",{className:"a",children:"A closure can keep references to large arrays or objects even when you think you are done with them."})]})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - leak with setInterval"}),r.jsx("pre",{className:"code",children:`function start() {
  const big = new Array(1e6).fill("x");

  const id = setInterval(() => {
    // big is captured by closure and kept alive
    console.log(big.length);
  }, 1000);

  // Fix later: clearInterval(id)
}`})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Fix - clear the timer when done"}),r.jsx("pre",{className:"code",children:`function start() {
  const big = new Array(1e6).fill("x");

  const id = setInterval(() => {
    console.log(big.length);
  }, 1000);

  setTimeout(() => {
    clearInterval(id); // now big can become unreachable
  }, 5000);
}`})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"WeakMap and WeakSet - memory friendly references"}),r.jsxs("p",{className:"p",children:["Sometimes you want to associate metadata with objects, but you do not want that association to keep the object alive.",r.jsx("br",{}),r.jsx("strong",{children:"WeakMap"})," and"," ",r.jsx("strong",{children:"WeakSet"})," help with that."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"WeakMap - idea"}),r.jsx("p",{className:"miniText",children:"Keys are objects. If the key object becomes unreachable elsewhere, GC can collect it and the WeakMap entry disappears."})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Where it helps"}),r.jsx("p",{className:"miniText",children:"Caching, private data, DOM element metadata, without accidental memory leaks."})]})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - cache without preventing GC"}),r.jsx("pre",{className:"code",children:`const cache = new WeakMap();

function expensive(obj) {
  if (cache.has(obj)) return cache.get(obj);

  const result = { computed: true };
  cache.set(obj, result);
  return result;
}

let o = { id: 1 };
expensive(o);

// later
o = null; // object can be collected, cache entry can disappear`})]}),r.jsx("div",{className:"finalNote",children:"WeakMap is not for iteration and not for replacing normal maps. It is a tool to avoid keeping objects alive by mistake."})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Practical debugging tips"}),r.jsxs("div",{className:"tipGrid",children:[r.jsxs("div",{className:"tip",children:[r.jsxs("div",{className:"tipTop",children:[r.jsx(Dn,{}),r.jsx("div",{className:"tipTitle",children:"Watch growth over time"})]}),r.jsx("div",{className:"tipText",children:"If memory usage only grows and never falls during repeated actions, you likely keep references unintentionally."})]}),r.jsxs("div",{className:"tip",children:[r.jsxs("div",{className:"tipTop",children:[r.jsx(yn,{}),r.jsx("div",{className:"tipTitle",children:"Track who holds reference"})]}),r.jsx("div",{className:"tipText",children:"Ask - what variable, closure, timer, listener, or cache still points to this object."})]}),r.jsxs("div",{className:"tip",children:[r.jsxs("div",{className:"tipTop",children:[r.jsx(Dr,{}),r.jsx("div",{className:"tipTitle",children:"Clean up on unmount"})]}),r.jsx("div",{className:"tipText",children:"In React, always clear intervals, timeouts, subscriptions, and listeners in cleanup."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Terms and full forms"}),r.jsxs("div",{className:"abbrGrid",children:[r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"GC"})," - Garbage Collection"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"JS"})," - JavaScript"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"RAM"})," - Random Access Memory"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"DOM"})," - Document Object Model"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"V8"})," - JavaScript engine used by Chrome and Node.js"]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"How to say it confidently"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:'"Garbage collection is reachability based - if nothing can reach an object from roots, it can be collected."'}),r.jsx("li",{children:'"Leaks happen when we keep references alive - commonly via globals, closures, timers, and event listeners."'}),r.jsx("li",{children:'"Engines use generational GC - most objects die young, so minor collections are frequent and fast."'})]})]})]})})]})]})},ff=220,gf={Wrapper:Re.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1100px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            /* async vibe: subtle "pulse lanes" */
            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        760px 240px at 18% 0%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    radial-gradient(
                        760px 240px at 85% 10%,
                        color-mix(in srgb, var(--color-accent) 9%, transparent),
                        transparent 66%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 22%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 22%, transparent)
                            1px,
                        transparent 1px,
                        transparent 18px
                    );
                opacity: 0.75;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.92),
                    rgba(0, 0, 0, 0.2)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${ff}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 55%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    860px 260px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .termGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .term {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .tHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .tag {
            display: inline-flex;
            align-items: center;
            padding: 6px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );

            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
        }

        .tBody {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .warn {
            margin-top: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface-2) 64%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .wIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 70%,
                transparent
            );

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-warning);
            }
        }

        .wText {
            min-width: 0;
        }

        .wTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .wSub {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.65;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .flowStrip {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .step {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 12px;
            border-radius: 14px;
            border: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-accent);
                margin-top: 2px;
            }
        }

        .sHead {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .sSub {
            margin-top: 4px;
            font-size: 12.5px;
            font-weight: 700;
            color: var(--color-text-muted);
            line-height: 1.55;
        }

        .qaGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .qa {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .q {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .a {
            margin-top: 6px;
            color: var(--color-text-secondary);
            font-weight: 650;
            line-height: 1.65;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .list {
            margin-top: 10px;
            display: grid;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-weight: 650;
                line-height: 1.6;
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "-";
                position: absolute;
                left: 0;
                top: 0;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 72%,
                    var(--color-text-primary)
                );
                font-weight: 950;
            }
        }

        .practice {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 90%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .pRow {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 12px;
            border-top: 1px solid var(--color-border);

            &:first-child {
                border-top: 0;
            }

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }
        }

        .label {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .value {
            color: var(--color-text-secondary);
            font-weight: 650;
            line-height: 1.65;
        }

        .mentalGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .mCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .mTop {
            display: flex;
            align-items: center;
            gap: 10px;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-accent);
            }
        }

        .mTitle {
            font-weight: 950;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .mText {
            margin-top: 8px;
            color: var(--color-text-secondary);
            font-weight: 650;
            line-height: 1.65;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }
    `},vf=220,jf=()=>{const[i,c]=P.useState(!1),[l,p]=P.useState(!1),[h,j]=P.useState(!1),b=P.useMemo(()=>({title:"Async patterns",sub:"Async patterns are ways to structure non blocking JavaScript code. They help you handle I O, network calls, timers, and user events without freezing the UI."}),[]),S=()=>c(g=>!g);return P.useEffect(()=>{let g=null;return i?(p(!0),requestAnimationFrame(()=>j(!0))):(j(!1),g=window.setTimeout(()=>{p(!1)},vf)),()=>{g&&window.clearTimeout(g)}},[i]),r.jsxs(gf.Wrapper,{id:"async-patterns",children:[r.jsxs("div",{className:"top",children:[r.jsx("h2",{className:"title",children:"Async patterns"}),r.jsx("p",{className:"sub",children:b.sub}),r.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[r.jsxs("span",{className:"pill",children:[r.jsx(dr,{})," Non blocking flow"]}),r.jsxs("span",{className:"pill",children:[r.jsx(Ma,{})," Manage sequences"]}),r.jsxs("span",{className:"pill",children:[r.jsx(cr,{})," Errors + results"]})]})]}),r.jsxs("div",{className:"accordion",children:[r.jsxs("button",{type:"button",className:"accBtn",onClick:S,"aria-expanded":i,"aria-controls":"async-patterns-panel",children:[r.jsxs("div",{className:"accLeft",children:[r.jsx("span",{className:"accIcon",children:r.jsx(lr,{})}),r.jsxs("div",{className:"accText",children:[r.jsx("div",{className:"accTitle",children:b.title}),r.jsxs("div",{className:"accHint",children:["Click to ",i?"collapse":"expand"," with beginner explanations and real code examples"]})]})]}),r.jsx("span",{className:`chev ${i?"open":""}`,children:r.jsx(gr,{})})]}),l&&r.jsx("div",{id:"async-patterns-panel",className:`panel ${h?"open":""}`,children:r.jsxs("div",{className:"panelInner",children:[r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Meaning"}),r.jsxs("p",{className:"p",children:[r.jsx("strong",{children:"Async"})," means your code starts an operation now and continues later when the result is ready.",r.jsx("br",{}),"JavaScript stays responsive while waiting for things like:",r.jsx("br",{}),"- network requests",r.jsx("br",{}),"- file operations",r.jsx("br",{}),"- timers",r.jsx("br",{}),"- user events"]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Non blocking"}),r.jsx("p",{className:"miniText",children:"The main thread does not sit idle waiting. It keeps running other tasks."})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Later delivery"}),r.jsx("p",{className:"miniText",children:"Results arrive through callbacks, promises, or async await."})]})]}),r.jsxs("div",{className:"warn",children:[r.jsx("span",{className:"wIcon",children:r.jsx(He,{})}),r.jsxs("div",{className:"wText",children:[r.jsx("div",{className:"wTitle",children:"Async is not parallel by default"}),r.jsx("div",{className:"wSub",children:'Async means "do not block while waiting". Parallel means "run at the same time". In browsers, JavaScript runs on one main thread, but the platform can do work outside the thread and notify you later.'})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"What makes JS async work"}),r.jsx("p",{className:"p",children:"This repo will cover event loop separately, but for async patterns you should remember this pipeline:"}),r.jsxs("div",{className:"flowStrip",children:[r.jsxs("div",{className:"step",children:[r.jsx(Dr,{}),r.jsxs("div",{children:[r.jsx("div",{className:"sHead",children:"Call stack"}),r.jsx("div",{className:"sSub",children:"Runs synchronous code now"})]})]}),r.jsxs("div",{className:"step",children:[r.jsx(Dn,{}),r.jsxs("div",{children:[r.jsx("div",{className:"sHead",children:"Web APIs"}),r.jsx("div",{className:"sSub",children:"Timers, fetch, DOM events"})]})]}),r.jsxs("div",{className:"step",children:[r.jsx(cr,{}),r.jsxs("div",{children:[r.jsx("div",{className:"sHead",children:"Queues"}),r.jsx("div",{className:"sSub",children:"Microtasks and macrotasks"})]})]}),r.jsxs("div",{className:"step",children:[r.jsx(Ma,{}),r.jsxs("div",{children:[r.jsx("div",{className:"sHead",children:"Event loop"}),r.jsx("div",{className:"sSub",children:"Pushes ready callbacks to stack"})]})]})]}),r.jsx("div",{className:"finalNote",children:"Patterns are basically ways to control order of execution and error handling across this pipeline."})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Pattern 1 - Callbacks"}),r.jsxs("p",{className:"p",children:["A ",r.jsx("strong",{children:"callback"})," is a function you pass to another function, to be called later when work finishes.",r.jsx("br",{}),"Example - timers and DOM event listeners."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Callback example"}),r.jsx("pre",{className:"code",children:`setTimeout(() => {
  console.log("runs later");
}, 1000);

document.addEventListener("click", () => {
  console.log("clicked");
});`})]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Strength"}),r.jsx("p",{className:"miniText",children:"Simple and direct for single async step."})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Weakness"}),r.jsx("p",{className:"miniText",children:'Nested callbacks create "callback hell" and messy error handling.'})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Pattern 2 - Promises"}),r.jsxs("p",{className:"p",children:["A ",r.jsx("strong",{children:"promise"})," represents a future value. It has states:",r.jsx("br",{}),"- pending",r.jsx("br",{}),"- fulfilled",r.jsx("br",{}),"- rejected"]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Promise chain"}),r.jsx("pre",{className:"code",children:`fetch("/api/user")
  .then((res) => res.json())
  .then((data) => {
    console.log("user", data);
  })
  .catch((err) => {
    console.log("error", err);
  })
  .finally(() => {
    console.log("always runs");
  });`})]}),r.jsxs("div",{className:"termGrid",children:[r.jsxs("div",{className:"term",children:[r.jsxs("div",{className:"tHead",children:[r.jsx("span",{className:"mono",children:"then"}),r.jsx("span",{className:"tag",children:"Success"})]}),r.jsx("p",{className:"tBody",children:"Runs when promise is fulfilled and returns a new promise for chaining."})]}),r.jsxs("div",{className:"term",children:[r.jsxs("div",{className:"tHead",children:[r.jsx("span",{className:"mono",children:"catch"}),r.jsx("span",{className:"tag",children:"Error"})]}),r.jsx("p",{className:"tBody",children:"Handles rejection or errors thrown in previous steps."})]}),r.jsxs("div",{className:"term",children:[r.jsxs("div",{className:"tHead",children:[r.jsx("span",{className:"mono",children:"finally"}),r.jsx("span",{className:"tag",children:"Cleanup"})]}),r.jsx("p",{className:"tBody",children:"Runs regardless of success or failure. Useful for cleanup."})]})]}),r.jsx("div",{className:"finalNote",children:"Promise callbacks run in the microtask queue, which usually runs before macrotasks."})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Pattern 3 - Async and await"}),r.jsxs("p",{className:"p",children:[r.jsx("strong",{children:"async await"})," is syntax built on promises. It makes async code read like synchronous code.",r.jsx("br",{}),"Rule - ",r.jsx("span",{className:"mono",children:"await"})," ","pauses the async function, not the whole program."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Async await example"}),r.jsx("pre",{className:"code",children:`async function loadUser() {
  try {
    const res = await fetch("/api/user");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("error", err);
    return null;
  }
}

loadUser().then((user) => console.log(user));`})]}),r.jsxs("div",{className:"warn",children:[r.jsx("span",{className:"wIcon",children:r.jsx(He,{})}),r.jsxs("div",{className:"wText",children:[r.jsx("div",{className:"wTitle",children:"Common beginner mistake"}),r.jsx("div",{className:"wSub",children:"Forgetting to handle errors. Always use try catch in async functions or return the promise and handle with catch."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Pattern 4 - Sequencing styles"}),r.jsx("p",{className:"p",children:"Most real projects need control over order. These are the common sequencing styles."}),r.jsxs("div",{className:"qaGrid",children:[r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Sequential"}),r.jsx("div",{className:"a",children:"Do A, wait, then do B, wait, then C."})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Parallel"}),r.jsx("div",{className:"a",children:"Start A, B, C together and wait for results."})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Race"}),r.jsx("div",{className:"a",children:"Start many tasks and use the first one that finishes."})]})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Parallel with Promise.all"}),r.jsx("pre",{className:"code",children:`async function loadAll() {
  const [user, orders, cart] = await Promise.all([
    fetch("/api/user").then((r) => r.json()),
    fetch("/api/orders").then((r) => r.json()),
    fetch("/api/cart").then((r) => r.json()),
  ]);

  return { user, orders, cart };
}`})]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Promise.all behavior"}),r.jsx("p",{className:"miniText",children:"If any promise rejects, the whole Promise.all rejects."})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Promise.allSettled behavior"}),r.jsx("p",{className:"miniText",children:"Waits for all promises and gives both success and failure results."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Pattern 5 - Retry and backoff"}),r.jsxs("p",{className:"p",children:["A ",r.jsx("strong",{children:"retry"})," pattern repeats a failing operation.",r.jsx("br",{}),"A ",r.jsx("strong",{children:"backoff"})," adds increasing delays between retries so you do not spam the server."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Retry with simple backoff"}),r.jsx("pre",{className:"code",children:`async function retry(fn, maxTries = 3) {
  let attempt = 0;

  while (attempt < maxTries) {
    try {
      return await fn();
    } catch (err) {
      attempt += 1;
      if (attempt >= maxTries) throw err;

      const delayMs = 300 * attempt;
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }
}

// usage
// retry(() => fetch("/api/ping"), 3)`})]}),r.jsx("div",{className:"finalNote",children:"Real systems also cap retries and include jitter to avoid synchronized retry storms."})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Pattern 6 - Cancellation"}),r.jsxs("p",{className:"p",children:["Sometimes you start async work, then you no longer need it, like user typing in search.",r.jsx("br",{}),"In fetch, the common cancellation tool is"," ",r.jsx("strong",{children:"AbortController"}),"."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"AbortController example"}),r.jsx("pre",{className:"code",children:`const controller = new AbortController();
const signal = controller.signal;

fetch("/api/search?q=js", { signal })
  .then((r) => r.json())
  .then(console.log)
  .catch((err) => {
    if (err.name === "AbortError") {
      console.log("request aborted");
      return;
    }
    console.log("error", err);
  });

// later
controller.abort();`})]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Why cancel"}),r.jsx("p",{className:"miniText",children:"Saves bandwidth, prevents race bugs, and keeps UI correct."})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Common place"}),r.jsx("p",{className:"miniText",children:"Search boxes and auto complete."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Pattern 7 - Avoid race bugs"}),r.jsxs("p",{className:"p",children:["A ",r.jsx("strong",{children:"race"})," bug happens when older responses arrive after newer ones and overwrite the UI with stale data."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:'Simple "latest only" guard'}),r.jsx("pre",{className:"code",children:`let requestId = 0;

async function search(q) {
  const id = ++requestId;
  const res = await fetch("/api/search?q=" + encodeURIComponent(q));
  const data = await res.json();

  // only apply latest response
  if (id !== requestId) return;

  console.log("apply", data);
}`})]}),r.jsx("div",{className:"finalNote",children:"Cancellation plus latest only guards are the safest combo in real UI apps."})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Pattern 8 - Debounce and throttle"}),r.jsxs("p",{className:"p",children:["These patterns control how often a function runs.",r.jsx("br",{}),"- debounce - wait until user stops triggering",r.jsx("br",{}),"- throttle - run at most once per time window"]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Debounce example use"}),r.jsx("p",{className:"miniText",children:"Search input. Call API only after user stops typing for 300ms."})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Throttle example use"}),r.jsx("p",{className:"miniText",children:"Scroll handler. Run at most once every 100ms."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Pattern 9 - Async iteration"}),r.jsxs("p",{className:"p",children:["Sometimes you receive data over time, like paginated APIs or streams.",r.jsx("br",{}),"Async iteration pattern uses"," ",r.jsx("span",{className:"mono",children:"for await"}),"."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Async iterator example"}),r.jsx("pre",{className:"code",children:`async function* pages() {
  yield await fetch("/api/page/1").then((r) => r.json());
  yield await fetch("/api/page/2").then((r) => r.json());
}

(async () => {
  for await (const page of pages()) {
    console.log("page", page);
  }
})();`})]}),r.jsx("div",{className:"finalNote",children:"Generators are powerful for controlling async flows, but promises and async await cover most app needs."})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Terms and full forms"}),r.jsxs("div",{className:"abbrGrid",children:[r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"I O"})," - Input Output"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"API"})," - Application Programming Interface"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"HTTP"})," - Hypertext Transfer Protocol"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"JSON"})," - JavaScript Object Notation"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"DOM"})," - Document Object Model"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"CPU"})," - Central Processing Unit"]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"How to say it confidently"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:'"Async patterns control ordering, error handling, and cleanup for non blocking operations."'}),r.jsx("li",{children:'"Promises and async await are about composing async flows without callback nesting."'}),r.jsx("li",{children:'"For UI correctness, use cancellation or latest only guards to prevent race bugs."'}),r.jsx("li",{children:'"Promise.all is parallel but fails fast, Promise.allSettled gives complete results."'})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Mini practice"}),r.jsxs("div",{className:"practice",children:[r.jsxs("div",{className:"pRow",children:[r.jsx("span",{className:"label",children:"Try"}),r.jsx("span",{className:"value",children:"You type fast in a search box and see old results flashing. Which pattern fixes it best?"})]}),r.jsxs("div",{className:"pRow",children:[r.jsx("span",{className:"label",children:"Answer"}),r.jsx("span",{className:"value",children:"Debounce plus AbortController or a latest only guard."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Quick mental model"}),r.jsxs("div",{className:"mentalGrid",children:[r.jsxs("div",{className:"mCard",children:[r.jsxs("div",{className:"mTop",children:[r.jsx(Xp,{}),r.jsx("div",{className:"mTitle",children:"Ordering problems"})]}),r.jsx("div",{className:"mText",children:"Use sequencing patterns - sequential, parallel, race."})]}),r.jsxs("div",{className:"mCard",children:[r.jsxs("div",{className:"mTop",children:[r.jsx(He,{}),r.jsx("div",{className:"mTitle",children:"Failure problems"})]}),r.jsx("div",{className:"mText",children:"Use retries, backoff, and proper error handling."})]}),r.jsxs("div",{className:"mCard",children:[r.jsxs("div",{className:"mTop",children:[r.jsx(Dn,{}),r.jsx("div",{className:"mTitle",children:"Too frequent triggers"})]}),r.jsx("div",{className:"mText",children:"Use debounce or throttle to control calls."})]})]})]})]})})]})]})},yf=220,wf={Wrapper:Re.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1000px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        700px 240px at 15% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 26%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 26%, transparent)
                            1px,
                        transparent 1px,
                        transparent 18px
                    );
                opacity: 0.75;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${yf}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 55%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    800px 250px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .stateGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .state {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .sTop {
            display: flex;
            align-items: center;
            gap: 10px;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-accent);
            }
        }

        .sTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sText {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .warn {
            margin-top: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface-2) 64%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .wIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 70%,
                transparent
            );

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-warning);
            }
        }

        .wText {
            min-width: 0;
        }

        .wTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .wSub {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .callout {
            margin-top: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .cIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-primary);
            }
        }

        .cText {
            min-width: 0;
        }

        .cTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .cSub {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .qaGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 900px) {
                grid-template-columns: 1fr;
            }
        }

        .qa {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .q {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .a {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .list {
            margin-top: 10px;
            display: grid;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-weight: 650;
                line-height: 1.6;
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "-";
                position: absolute;
                left: 0;
                top: 0;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 72%,
                    var(--color-text-primary)
                );
                font-weight: 950;
            }
        }

        .closing {
            margin-top: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface-2) 60%, #000);

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.65;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-primary);
                margin-top: 2px;
                flex: 0 0 auto;
            }
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.65;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }
    `},bf=220,Nf=()=>{const[i,c]=P.useState(!1),[l,p]=P.useState(!1),[h,j]=P.useState(!1),b=P.useMemo(()=>({title:"Promises",sub:"A Promise is a JavaScript object that represents a value that will be available later. It gives you a clean way to handle async work without nesting callbacks."}),[]),S=()=>c(g=>!g);return P.useEffect(()=>{let g=null;return i?(p(!0),requestAnimationFrame(()=>j(!0))):(j(!1),g=window.setTimeout(()=>p(!1),bf)),()=>{g&&window.clearTimeout(g)}},[i]),r.jsxs(wf.Wrapper,{id:"promises",children:[r.jsxs("div",{className:"top",children:[r.jsx("h2",{className:"title",children:"Promises"}),r.jsx("p",{className:"sub",children:b.sub}),r.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[r.jsxs("span",{className:"pill",children:[r.jsx(Dn,{})," Future value"]}),r.jsxs("span",{className:"pill",children:[r.jsx(dr,{})," Async control"]}),r.jsxs("span",{className:"pill",children:[r.jsx(cr,{})," Microtasks"]})]})]}),r.jsxs("div",{className:"accordion",children:[r.jsxs("button",{type:"button",className:"accBtn",onClick:S,"aria-expanded":i,"aria-controls":"promises-panel",children:[r.jsxs("div",{className:"accLeft",children:[r.jsx("span",{className:"accIcon",children:r.jsx(lr,{})}),r.jsxs("div",{className:"accText",children:[r.jsx("div",{className:"accTitle",children:b.title}),r.jsxs("div",{className:"accHint",children:["Click to ",i?"collapse":"expand"," with beginner explanation, patterns, and examples"]})]})]}),r.jsx("span",{className:`chev ${i?"open":""}`,children:r.jsx(gr,{})})]}),l&&r.jsx("div",{id:"promises-panel",className:`panel ${h?"open":""}`,children:r.jsxs("div",{className:"panelInner",children:[r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Meaning"}),r.jsxs("p",{className:"p",children:["A ",r.jsx("strong",{children:"Promise"})," is like a receipt for an async operation.",r.jsx("br",{}),"You start some work now, and you get a Promise back immediately.",r.jsx("br",{}),"Later, the Promise settles and gives you:",r.jsx("br",{}),"- success value",r.jsx("br",{}),"- failure reason"]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Why Promises exist"}),r.jsx("p",{className:"miniText",children:'They avoid "callback hell" and make async code predictable using chaining.'})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"What you get"}),r.jsx("p",{className:"miniText",children:"A single object that represents the future result of your async work."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Promise states"}),r.jsxs("div",{className:"stateGrid",children:[r.jsxs("div",{className:"state",children:[r.jsxs("div",{className:"sTop",children:[r.jsx(Sx,{}),r.jsx("span",{className:"sTitle",children:"pending"})]}),r.jsx("div",{className:"sText",children:"The Promise is created and the async work is still running."})]}),r.jsxs("div",{className:"state",children:[r.jsxs("div",{className:"sTop",children:[r.jsx(lr,{}),r.jsx("span",{className:"sTitle",children:"fulfilled"})]}),r.jsx("div",{className:"sText",children:"The Promise completed successfully and has a value."})]}),r.jsxs("div",{className:"state",children:[r.jsxs("div",{className:"sTop",children:[r.jsx(He,{}),r.jsx("span",{className:"sTitle",children:"rejected"})]}),r.jsx("div",{className:"sText",children:"The Promise failed and has an error reason."})]})]}),r.jsx("div",{className:"finalNote",children:"A Promise settles only once. After it is fulfilled or rejected, it cannot go back to pending."})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Creating a Promise (producer)"}),r.jsxs("p",{className:"p",children:["A Promise is created using"," ",r.jsx("span",{className:"mono",children:"new Promise"}),".",r.jsx("br",{}),"The function inside is called the"," ",r.jsx("strong",{children:"executor"}),".",r.jsx("br",{}),"It receives two functions:",r.jsx("br",{}),"-"," ",r.jsx("span",{className:"mono",children:"resolve"})," for success",r.jsx("br",{}),"- ",r.jsx("span",{className:"mono",children:"reject"})," ","for failure"]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - create a Promise"}),r.jsx("pre",{className:"code",children:`const p = new Promise((resolve, reject) => {
  const ok = true;

  setTimeout(() => {
    if (ok) resolve("data loaded");
    else reject(new Error("failed"));
  }, 500);
});`})]}),r.jsxs("div",{className:"warn",children:[r.jsx("span",{className:"wIcon",children:r.jsx(He,{})}),r.jsxs("div",{className:"wText",children:[r.jsx("div",{className:"wTitle",children:"Executor runs immediately"}),r.jsxs("div",{className:"wSub",children:["When you create a Promise, the executor function starts right away. Promises do not wait for you to call",r.jsx("span",{className:"mono",children:"then"}),"."]})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Consuming a Promise (then, catch, finally)"}),r.jsxs("p",{className:"p",children:["To use a Promise result, you attach handlers:",r.jsx("br",{}),"- ",r.jsx("span",{className:"mono",children:"then"})," ","for fulfilled",r.jsx("br",{}),"- ",r.jsx("span",{className:"mono",children:"catch"})," ","for rejected",r.jsx("br",{}),"-"," ",r.jsx("span",{className:"mono",children:"finally"})," for cleanup"]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - consume a Promise"}),r.jsx("pre",{className:"code",children:`p
  .then((value) => {
    console.log("success:", value);
  })
  .catch((err) => {
    console.log("error:", err.message);
  })
  .finally(() => {
    console.log("done");
  });`})]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"finally is for"}),r.jsx("p",{className:"miniText",children:"Cleanup work like stopping loaders, closing resources, or logging."})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"catch is for"}),r.jsx("p",{className:"miniText",children:"Handling any rejection in the chain. One catch can cover above steps."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Chaining - why then returns a Promise"}),r.jsxs("p",{className:"p",children:["The superpower of Promises is chaining.",r.jsx("br",{}),r.jsx("span",{className:"mono",children:"then"})," returns a new Promise. That allows you to write steps in a row."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - chain steps"}),r.jsx("pre",{className:"code",children:`fetch("/api/user")
  .then((res) => res.json())
  .then((user) => {
    console.log("user:", user.name);
    return fetch("/api/orders");
  })
  .then((res) => res.json())
  .then((orders) => {
    console.log("orders:", orders.length);
  })
  .catch((err) => {
    console.log("chain error:", err.message);
  });`})]}),r.jsxs("div",{className:"callout",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Kp,{})}),r.jsxs("div",{className:"cText",children:[r.jsx("div",{className:"cTitle",children:"Rule"}),r.jsxs("div",{className:"cSub",children:["If you return a value from"," ",r.jsx("span",{className:"mono",children:"then"}),", the next"," ",r.jsx("span",{className:"mono",children:"then"})," ","gets that value.",r.jsx("br",{}),"If you return a Promise, the next"," ",r.jsx("span",{className:"mono",children:"then"})," ","waits for it."]})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Error handling and propagation"}),r.jsxs("p",{className:"p",children:["Errors propagate down the chain until a"," ",r.jsx("span",{className:"mono",children:"catch"})," handles them.",r.jsx("br",{}),"This includes thrown errors inside"," ",r.jsx("span",{className:"mono",children:"then"}),"."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - thrown error becomes rejection"}),r.jsx("pre",{className:"code",children:`Promise.resolve(10)
  .then((n) => {
    if (n === 10) throw new Error("boom");
    return n;
  })
  .then((n) => console.log("never runs", n))
  .catch((e) => console.log("caught:", e.message));`})]}),r.jsx("div",{className:"finalNote",children:'In Promise chains, "throw" is like "reject".'})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Microtask behavior"}),r.jsxs("p",{className:"p",children:["Promise callbacks run in the"," ",r.jsx("strong",{children:"microtask queue"}),".",r.jsx("br",{}),"Microtasks run after the current call stack is empty, and before macrotasks like"," ",r.jsx("span",{className:"mono",children:"setTimeout"}),"."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - Promise vs setTimeout order"}),r.jsx("pre",{className:"code",children:`console.log("A");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("B");

// Output:
// A
// B
// promise
// timeout`})]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Microtask"}),r.jsx("p",{className:"miniText",children:"Promise callbacks, queueMicrotask, MutationObserver"})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Macrotask"}),r.jsx("p",{className:"miniText",children:"setTimeout, setInterval, I/O, rendering tasks"})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Promise helpers (static methods)"}),r.jsxs("div",{className:"qaGrid",children:[r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Promise.resolve(value)"}),r.jsx("div",{className:"a",children:"Creates a fulfilled Promise with value"})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Promise.reject(error)"}),r.jsx("div",{className:"a",children:"Creates a rejected Promise with error"})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Promise.all"}),r.jsx("div",{className:"a",children:"Wait for all, reject if any fails"})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Promise.race"}),r.jsx("div",{className:"a",children:"First one to settle wins"})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Promise.allSettled"}),r.jsx("div",{className:"a",children:"Wait for all, never rejects"})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Promise.any"}),r.jsx("div",{className:"a",children:"First fulfilled wins, rejects if all fail"})]})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - Promise.all"}),r.jsx("pre",{className:"code",children:`const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);

Promise.all([p1, p2])
  .then(([a, b]) => console.log(a + b))
  .catch((e) => console.log("error:", e.message));`})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Async and await connection"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"async"})," and"," ",r.jsx("span",{className:"mono",children:"await"})," are syntax built on top of Promises.",r.jsx("br",{}),"An ",r.jsx("span",{className:"mono",children:"async"})," ","function always returns a Promise.",r.jsx("br",{}),r.jsx("span",{className:"mono",children:"await"})," pauses inside the async function until the Promise settles."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - async and await"}),r.jsx("pre",{className:"code",children:`async function loadUser() {
  const res = await fetch("/api/user");
  const user = await res.json();
  return user.name;
}

loadUser().then((name) => console.log("name:", name));`})]}),r.jsx("div",{className:"finalNote",children:"async and await look synchronous, but they still use the Promise microtask behavior."})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Terms and full forms"}),r.jsxs("div",{className:"abbrGrid",children:[r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"JS"})," - JavaScript"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"API"})," - Application Programming Interface"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"I/O"})," - Input Output"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"HTTP"})," - HyperText Transfer Protocol"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"JSON"})," - JavaScript Object Notation"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"async"})," - asynchronous"]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"How to say it confidently"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:'"A Promise represents a future value and it settles once as fulfilled or rejected."'}),r.jsx("li",{children:'"then returns a new Promise, which enables chaining."'}),r.jsx("li",{children:'"Promise callbacks run as microtasks, so they execute before setTimeout callbacks."'}),r.jsx("li",{children:'"async and await are built on top of Promises, async functions always return a Promise."'})]}),r.jsxs("div",{className:"closing",children:[r.jsx(La,{}),r.jsx("span",{children:"Practice tip - predict output order of mixed console.log, Promise.then, and setTimeout. That single skill fixes most async confusion."})]})]})]})})]})]})},kf=220,Tf={Wrapper:Re.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1000px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        700px 240px at 12% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    radial-gradient(
                        600px 200px at 92% 40%,
                        color-mix(in srgb, var(--color-accent) 8%, transparent),
                        transparent 62%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 24%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 24%, transparent)
                            1px,
                        transparent 1px,
                        transparent 18px
                    );
                opacity: 0.75;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${kf}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 55%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    800px 250px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .flowGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .flow {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .flowTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .flowText {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .warn {
            margin-top: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface-2) 64%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .wIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 70%,
                transparent
            );

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-warning);
            }
        }

        .wText {
            min-width: 0;
        }

        .wTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .wSub {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .callout {
            margin-top: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .cIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(in srgb, var(--color-surface-2) 62%, #000);

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-primary);
            }
        }

        .cText {
            min-width: 0;
        }

        .cTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .cSub {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .qaGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .qa {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .q {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .a {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .practice {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: color-mix(in srgb, var(--color-surface-2) 60%, #000);
        }

        .pRow {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
            padding: 8px 0;

            @media (width < 560px) {
                grid-template-columns: 1fr;
            }
        }

        .label {
            font-weight: 950;
            color: var(--color-text-primary);
        }

        .value {
            color: var(--color-text-secondary);
            font-weight: 650;
            line-height: 1.65;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.65;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .list {
            margin-top: 10px;
            display: grid;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-weight: 650;
                line-height: 1.6;
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "-";
                position: absolute;
                left: 0;
                top: 0;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 72%,
                    var(--color-text-primary)
                );
                font-weight: 950;
            }
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }
    `},Sf=220,Cf=()=>{const[i,c]=P.useState(!1),[l,p]=P.useState(!1),[h,j]=P.useState(!1),b=P.useMemo(()=>({title:"Generators",sub:"Generators are special functions that can pause and resume. They produce values one at a time using `yield`. This helps with lazy iteration, custom iterables, and step-by-step control flow."}),[]),S=()=>c(g=>!g);return P.useEffect(()=>{let g=null;return i?(p(!0),requestAnimationFrame(()=>j(!0))):(j(!1),g=window.setTimeout(()=>p(!1),Sf)),()=>{g&&window.clearTimeout(g)}},[i]),r.jsxs(Tf.Wrapper,{id:"generators",children:[r.jsxs("div",{className:"top",children:[r.jsx("h2",{className:"title",children:"Generators"}),r.jsx("p",{className:"sub",children:b.sub}),r.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[r.jsxs("span",{className:"pill",children:[r.jsx(Ma,{})," Pause and resume"]}),r.jsxs("span",{className:"pill",children:[r.jsx(dr,{})," `yield` values"]}),r.jsxs("span",{className:"pill",children:[r.jsx(Dr,{})," Lazy iteration"]})]})]}),r.jsxs("div",{className:"accordion",children:[r.jsxs("button",{type:"button",className:"accBtn",onClick:S,"aria-expanded":i,"aria-controls":"generators-panel",children:[r.jsxs("div",{className:"accLeft",children:[r.jsx("span",{className:"accIcon",children:r.jsx(lr,{})}),r.jsxs("div",{className:"accText",children:[r.jsx("div",{className:"accTitle",children:b.title}),r.jsxs("div",{className:"accHint",children:["Click to ",i?"collapse":"expand"," with beginner explanation and examples"]})]})]}),r.jsx("span",{className:`chev ${i?"open":""}`,children:r.jsx(gr,{})})]}),l&&r.jsx("div",{id:"generators-panel",className:`panel ${h?"open":""}`,children:r.jsxs("div",{className:"panelInner",children:[r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Meaning"}),r.jsxs("p",{className:"p",children:["A ",r.jsx("strong",{children:"generator"})," is a function that can ",r.jsx("strong",{children:"pause"})," and later"," ",r.jsx("strong",{children:"resume"})," from the same point. It does not return all results at once. Instead, it produces values step by step."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Normal function"}),r.jsxs("p",{className:"miniText",children:["Runs from start to end in one go. It returns once using"," ",r.jsx("span",{className:"mono",children:"return"}),"."]})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Generator function"}),r.jsxs("p",{className:"miniText",children:["Can pause at"," ",r.jsx("span",{className:"mono",children:"yield"})," ","and continue later. It can yield many times."]})]})]}),r.jsx("div",{className:"finalNote",children:'Think of a generator like a "controlled faucet" of values. You pull values when you need them, not all at once.'})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"How to write a generator"}),r.jsxs("p",{className:"p",children:["You create a generator by using"," ",r.jsx("span",{className:"mono",children:"function*"})," and"," ",r.jsx("span",{className:"mono",children:"yield"}),"."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Basic generator"}),r.jsx("pre",{className:"code",children:`function* countUpTo3() {
  yield 1;
  yield 2;
  yield 3;
}

const it = countUpTo3();

it.next(); // { value: 1, done: false }
it.next(); // { value: 2, done: false }
it.next(); // { value: 3, done: false }
it.next(); // { value: undefined, done: true }`})]}),r.jsxs("div",{className:"callout",children:[r.jsx("span",{className:"cIcon",children:r.jsx(cr,{})}),r.jsxs("div",{className:"cText",children:[r.jsx("div",{className:"cTitle",children:"What you get back"}),r.jsxs("div",{className:"cSub",children:["Calling a generator function does not run it immediately. It returns an ",r.jsx("strong",{children:"iterator"})," object. You control execution using"," ",r.jsx("span",{className:"mono",children:"next()"}),"."]})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Generator execution model"}),r.jsxs("p",{className:"p",children:["Each ",r.jsx("span",{className:"mono",children:"next()"})," ","call continues the generator until it hits the next ",r.jsx("span",{className:"mono",children:"yield"})," ","or the end of the function."]}),r.jsxs("div",{className:"flowGrid",children:[r.jsxs("div",{className:"flow",children:[r.jsx("div",{className:"flowTitle",children:"Step 1 - create iterator"}),r.jsxs("p",{className:"flowText",children:[r.jsx("span",{className:"mono",children:"const it = gen()"})," ","creates an iterator. No code runs yet."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx("div",{className:"flowTitle",children:"Step 2 - pull values"}),r.jsxs("p",{className:"flowText",children:[r.jsx("span",{className:"mono",children:"it.next()"})," ","runs code until first"," ",r.jsx("span",{className:"mono",children:"yield"}),"."]})]}),r.jsxs("div",{className:"flow",children:[r.jsx("div",{className:"flowTitle",children:"Step 3 - finish"}),r.jsxs("p",{className:"flowText",children:["When function ends,"," ",r.jsx("span",{className:"mono",children:"done"})," ","becomes"," ",r.jsx("span",{className:"mono",children:"true"}),"."]})]})]}),r.jsxs("div",{className:"warn",children:[r.jsx("span",{className:"wIcon",children:r.jsx(He,{})}),r.jsxs("div",{className:"wText",children:[r.jsx("div",{className:"wTitle",children:"Not the same as async"}),r.jsx("div",{className:"wSub",children:"Generators are about pausing and resuming synchronous execution. Async generators exist, but start with normal generators first."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Why generators matter"}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Lazy iteration"}),r.jsx("p",{className:"miniText",children:"Generate values only when needed. Useful when data is large or infinite."})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Clean custom loops"}),r.jsxs("p",{className:"miniText",children:["Build custom iterable objects that work with"," ",r.jsx("span",{className:"mono",children:"for...of"}),"."]})]})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - infinite sequence (careful)"}),r.jsx("pre",{className:"code",children:`function* infiniteIds() {
  let id = 1;
  while (true) {
    yield id;
    id += 1;
  }
}

const it = infiniteIds();
it.next().value; // 1
it.next().value; // 2
it.next().value; // 3`})]}),r.jsx("div",{className:"finalNote",children:'In interviews, generators often appear as "lazy streams" and "custom iterables".'})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"yield and next() with input"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"yield"})," can both output a value and later receive a value. The value passed to"," ",r.jsx("span",{className:"mono",children:"next(value)"})," ","becomes the result of the paused"," ",r.jsx("span",{className:"mono",children:"yield"}),"."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - send value into generator"}),r.jsx("pre",{className:"code",children:`function* ask() {
  const name = yield "What is your name?";
  yield "Hello " + name;
}

const it = ask();

it.next();          // { value: "What is your name?", done: false }
it.next("Ashish");  // { value: "Hello Ashish", done: false }
it.next();          // { value: undefined, done: true }`})]}),r.jsxs("div",{className:"callout",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Zp,{})}),r.jsxs("div",{className:"cText",children:[r.jsx("div",{className:"cTitle",children:"Important detail"}),r.jsxs("div",{className:"cSub",children:["The first"," ",r.jsx("span",{className:"mono",children:"next()"})," ","starts the generator and reaches the first"," ",r.jsx("span",{className:"mono",children:"yield"}),". There is no paused"," ",r.jsx("span",{className:"mono",children:"yield"})," ","before that."]})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Generators and for...of"}),r.jsxs("p",{className:"p",children:["A generator returns an iterator, and it is also an ",r.jsx("strong",{children:"iterable"}),". That means you can loop it using"," ",r.jsx("span",{className:"mono",children:"for...of"}),"."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - for...of"}),r.jsx("pre",{className:"code",children:`function* nums() {
  yield 10;
  yield 20;
  yield 30;
}

for (const n of nums()) {
  console.log(n);
}
// 10
// 20
// 30`})]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Iterable"}),r.jsxs("p",{className:"miniText",children:["An object you can iterate with"," ",r.jsx("span",{className:"mono",children:"for...of"}),". It has"," ",r.jsx("span",{className:"mono",children:"Symbol.iterator"}),"."]})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Iterator"}),r.jsxs("p",{className:"miniText",children:["An object with"," ",r.jsx("span",{className:"mono",children:"next()"})," ","that returns"," ",r.jsx("span",{className:"mono",children:"{ value, done }"}),"."]})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Common use cases in real projects"}),r.jsxs("div",{className:"qaGrid",children:[r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Paginated APIs"}),r.jsx("div",{className:"a",children:"Yield items page by page, avoid loading everything into memory."})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Parser style code"}),r.jsx("div",{className:"a",children:"Step through tokens, yield states, keep code readable."})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Simulation and streams"}),r.jsx("div",{className:"a",children:"Produce values on demand, control speed and steps."})]})]}),r.jsx("div",{className:"finalNote",children:'If your code benefits from "step by step" production of values, generators are a clean fit.'})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Terms and full forms"}),r.jsxs("div",{className:"abbrGrid",children:[r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"JS"})," - JavaScript"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"API"})," - Application Programming Interface"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"it"})," - Iterator (common variable name)"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"done"})," - Indicates iteration finished"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"yield"})," - Pause and emit a value"]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"How to say it confidently"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:'"A generator is a function that can pause at `yield` and resume later, producing values lazily."'}),r.jsx("li",{children:'"Calling a generator returns an iterator, and execution happens when we call next()."'}),r.jsx("li",{children:'"Generators are great for custom iterables and memory-friendly iteration."'})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Mini practice"}),r.jsxs("div",{className:"practice",children:[r.jsxs("div",{className:"pRow",children:[r.jsx("span",{className:"label",children:"Try"}),r.jsx("span",{className:"value",children:"Write a generator that yields even numbers from 2 to 10."})]}),r.jsxs("div",{className:"pRow",children:[r.jsx("span",{className:"label",children:"Answer"}),r.jsx("span",{className:"value",children:"Use a loop and yield when number is even."})]})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"One solution"}),r.jsx("pre",{className:"code",children:`function* evens() {
  for (let n = 2; n <= 10; n += 1) {
    if (n % 2 === 0) yield n;
  }
}

[...evens()] // [2, 4, 6, 8, 10]`})]})]})]})})]})]})},Ef=220,If={Wrapper:Re.section`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 22px 16px 10px;

        .top {
            padding: 10px 2px 12px;
        }

        .title {
            font-size: 22px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 8px;
            max-width: 1100px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .pillRow {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 900;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 82%,
                    var(--color-text-primary)
                );
            }
        }

        .accordion {
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
            box-shadow: 0 18px 42px var(--color-shadow);
        }

        .accBtn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;

            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;

                background-image:
                    radial-gradient(
                        700px 240px at 15% 10%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 10%,
                            transparent
                        ),
                        transparent 60%
                    ),
                    repeating-linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--color-border) 26%, transparent)
                            0px,
                        color-mix(in srgb, var(--color-border) 26%, transparent)
                            1px,
                        transparent 1px,
                        transparent 18px
                    );
                opacity: 0.75;

                mask-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.9),
                    rgba(0, 0, 0, 0.15)
                );
            }

            &:hover {
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 24%,
                    transparent
                );
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .accLeft {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .accIcon {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 12px 26px var(--color-shadow);

            svg {
                width: 18px;
                height: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }
        }

        .accText {
            min-width: 0;
        }

        .accTitle {
            font-size: 14px;
            font-weight: 950;
            letter-spacing: 0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .accHint {
            margin-top: 3px;
            font-size: 12.5px;
            font-weight: 750;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chev {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;

            width: 38px;
            height: 38px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );

            color: var(--color-text-secondary);
            box-shadow: 0 12px 26px var(--color-shadow);

            transition: transform 160ms ease;

            svg {
                width: 18px;
                height: 18px;
            }
        }

        .chev.open {
            transform: rotate(180deg);
        }

        .panel {
            display: grid;
            grid-template-rows: 0fr;
            overflow: hidden;
            border-top: 1px solid var(--color-border);
            transition: grid-template-rows ${Ef}ms ease;
        }

        .panel.open {
            grid-template-rows: 1fr;
        }

        .panelInner {
            min-height: 0;
            padding: 14px;
        }

        .sec {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            background: color-mix(in srgb, var(--color-surface-2) 55%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
            margin-bottom: 12px;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                background-image: radial-gradient(
                    800px 250px at 10% 0%,
                    color-mix(in srgb, var(--color-primary) 9%, transparent),
                    transparent 62%
                );
                opacity: 0.9;
            }

            > * {
                position: relative;
                z-index: 1;
            }
        }

        .h3 {
            font-size: 15px;
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .miniGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .miniCard {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .miniTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .miniText {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .exampleBlock {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-code-bg);
        }

        .exTitle {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .code {
            padding: 12px;
            margin: 0;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            white-space: pre-wrap;
        }

        .callout {
            margin-top: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface-2) 64%, #000);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 70%,
                transparent
            );

            display: inline-flex;
            align-items: center;
            justify-content: center;

            svg {
                width: 16px;
                height: 16px;
                color: var(--color-accent);
            }
        }

        .cTitle {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .cSub {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .termGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .term {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .tHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .tag {
            display: inline-flex;
            align-items: center;
            padding: 6px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );

            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
        }

        .tBody {
            margin-top: 8px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-weight: 650;
        }

        .qaGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 900px) {
                grid-template-columns: 1fr;
            }
        }

        .qa {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-surface) 92%, transparent),
                color-mix(in srgb, var(--color-surface-2) 86%, transparent)
            );
        }

        .q {
            font-weight: 950;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .a {
            margin-top: 6px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-weight: 650;
        }

        .abbrGrid {
            margin-top: 12px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;

            @media (width < 820px) {
                grid-template-columns: 1fr;
            }
        }

        .abbr {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 60%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            line-height: 1.6;
        }

        .finalNote {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 12px;

            background: color-mix(in srgb, var(--color-surface) 72%, #000);

            color: var(--color-text-secondary);
            font-weight: 850;
            line-height: 1.65;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .list {
            margin-top: 10px;
            display: grid;
            gap: 8px;

            li {
                color: var(--color-text-secondary);
                font-weight: 650;
                line-height: 1.6;
                position: relative;
                padding-left: 14px;
            }

            li::before {
                content: "-";
                position: absolute;
                left: 0;
                top: 0;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 72%,
                    var(--color-text-primary)
                );
                font-weight: 950;
            }
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            letter-spacing: 0.1px;
            color: color-mix(
                in srgb,
                var(--color-primary) 76%,
                var(--color-text-primary)
            );
        }
    `},Mf=220,Pf=()=>{const[i,c]=P.useState(!1),[l,p]=P.useState(!1),[h,j]=P.useState(!1),b=P.useMemo(()=>({title:"ES6+ features",sub:"ES6+ means modern JavaScript features added from ES6 (2015) onwards. These features improve readability, safety, and async code, and they also changed how scope, modules, and functions behave."}),[]),S=()=>c(g=>!g);return P.useEffect(()=>{let g=null;return i?(p(!0),requestAnimationFrame(()=>j(!0))):(j(!1),g=window.setTimeout(()=>{p(!1)},Mf)),()=>{g&&window.clearTimeout(g)}},[i]),r.jsxs(If.Wrapper,{id:"es6-plus-features",children:[r.jsxs("div",{className:"top",children:[r.jsx("h2",{className:"title",children:"ES6+ features"}),r.jsx("p",{className:"sub",children:b.sub}),r.jsxs("div",{className:"pillRow","aria-label":"At a glance",children:[r.jsxs("span",{className:"pill",children:[r.jsx(dr,{})," Modern syntax"]}),r.jsxs("span",{className:"pill",children:[r.jsx(cr,{})," Safer scope"]}),r.jsxs("span",{className:"pill",children:[r.jsx(Tx,{})," Modules"]})]})]}),r.jsxs("div",{className:"accordion",children:[r.jsxs("button",{type:"button",className:"accBtn",onClick:S,"aria-expanded":i,"aria-controls":"es6-plus-panel",children:[r.jsxs("div",{className:"accLeft",children:[r.jsx("span",{className:"accIcon",children:r.jsx(lr,{})}),r.jsxs("div",{className:"accText",children:[r.jsx("div",{className:"accTitle",children:b.title}),r.jsxs("div",{className:"accHint",children:["Click to ",i?"collapse":"expand"," with beginner explanations and examples"]})]})]}),r.jsx("span",{className:`chev ${i?"open":""}`,children:r.jsx(gr,{})})]}),l&&r.jsx("div",{id:"es6-plus-panel",className:`panel ${h?"open":""}`,children:r.jsxs("div",{className:"panelInner",children:[r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Meaning"}),r.jsxs("p",{className:"p",children:[r.jsx("strong",{children:"ES"}),' means "ECMAScript", which is the official standard that JavaScript follows.',r.jsx("br",{}),r.jsx("strong",{children:"ES6"})," is the 2015 update that introduced major features like"," ",r.jsx("span",{className:"mono",children:"let"}),","," ",r.jsx("span",{className:"mono",children:"const"}),", arrow functions, classes, modules, promises, destructuring, and more.",r.jsx("br",{}),r.jsx("strong",{children:"ES6+"})," means ES6 and all later versions."]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Why ES6+ matters"}),r.jsx("p",{className:"miniText",children:"Cleaner code, fewer bugs, better async patterns, and production friendly features used everywhere in modern MERN apps."})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"Interview angle"}),r.jsx("p",{className:"miniText",children:'Many "JS internals" questions become easy once you understand block scope, modules, and promises behavior.'})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"1 - Block scope with let and const"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"var"})," is function scoped, but"," ",r.jsx("span",{className:"mono",children:"let"})," and"," ",r.jsx("span",{className:"mono",children:"const"})," are block scoped.",r.jsx("br",{}),"Block means code inside"," ",r.jsx("span",{className:"mono",children:"{ }"}),".",r.jsx("br",{}),"Also, ",r.jsx("span",{className:"mono",children:"let"})," and"," ",r.jsx("span",{className:"mono",children:"const"})," have"," ",r.jsx("span",{className:"mono",children:"TDZ"})," behavior."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("pre",{className:"code",children:`if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a); // 1
console.log(b); // ReferenceError
console.log(c); // ReferenceError`})]}),r.jsxs("div",{className:"callout",children:[r.jsx("span",{className:"cIcon",children:r.jsx(He,{})}),r.jsxs("div",{className:"cText",children:[r.jsx("div",{className:"cTitle",children:"TDZ"}),r.jsxs("div",{className:"cSub",children:["TDZ - Temporal Dead Zone.",r.jsx("br",{}),"It means you cannot access"," ",r.jsx("span",{className:"mono",children:"let"})," or"," ",r.jsx("span",{className:"mono",children:"const"})," ","before their declaration line."]})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"2 - Arrow functions"}),r.jsxs("p",{className:"p",children:["Arrow functions are shorter syntax and they do not have their own"," ",r.jsx("span",{className:"mono",children:"`this`"}),". They capture ",r.jsx("span",{className:"mono",children:"`this`"})," ","from the surrounding scope."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - this behavior"}),r.jsx("pre",{className:"code",children:`const obj = {
  name: "A",
  normal() {
    console.log(this.name); // "A"
  },
  arrow: () => {
    console.log(this); // not obj
  }
};

obj.normal();
obj.arrow();`})]}),r.jsxs("div",{className:"miniGrid",children:[r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"When to use"}),r.jsxs("p",{className:"miniText",children:["Use arrows for callbacks and small functions, especially when you want outer"," ",r.jsx("span",{className:"mono",children:"`this`"}),"."]})]}),r.jsxs("div",{className:"miniCard",children:[r.jsx("div",{className:"miniTitle",children:"When to avoid"}),r.jsxs("p",{className:"miniText",children:["Avoid arrows as object methods when you need method level"," ",r.jsx("span",{className:"mono",children:"`this`"}),"."]})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"3 - Template literals"}),r.jsxs("p",{className:"p",children:["Template literals use backticks"," ",r.jsx("span",{className:"mono",children:"`"})," and allow:",r.jsx("br",{}),"- string interpolation using"," ",r.jsx("span",{className:"mono",children:"{ }"}),r.jsx("br",{}),"- multiline strings"]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("pre",{className:"code",children:`const name = "Ashish";
const msg = \`Hello \${name}
Welcome to JS internals\`;

console.log(msg);`})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"4 - Destructuring"}),r.jsx("p",{className:"p",children:"Destructuring extracts values from arrays and objects into variables. It reduces repetitive access code."}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - object destructuring"}),r.jsx("pre",{className:"code",children:`const user = { id: 7, name: "A", role: "dev" };

const { id, name } = user;

console.log(id);   // 7
console.log(name); // "A"`})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - array destructuring"}),r.jsx("pre",{className:"code",children:`const arr = [10, 20, 30];

const [x, y] = arr;

console.log(x); // 10
console.log(y); // 20`})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"5 - Spread and rest"}),r.jsxs("p",{className:"p",children:[r.jsx("span",{className:"mono",children:"..."})," has two meanings depending on where you use it:",r.jsx("br",{}),"- spread - expands an array or object",r.jsx("br",{}),"- rest - collects remaining values"]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - spread"}),r.jsx("pre",{className:"code",children:`const a = [1, 2];
const b = [0, ...a, 3]; // [0, 1, 2, 3]

const obj1 = { x: 1 };
const obj2 = { ...obj1, y: 2 }; // { x: 1, y: 2 }`})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - rest"}),r.jsx("pre",{className:"code",children:`function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

sum(1, 2, 3); // 6`})]}),r.jsx("div",{className:"finalNote",children:"Spread is great for immutable updates in React. Rest is great for flexible function arguments."})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"6 - Default parameters"}),r.jsxs("p",{className:"p",children:["Default parameters provide fallback values when arguments are missing or"," ",r.jsx("span",{className:"mono",children:"undefined"}),"."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("pre",{className:"code",children:`function greet(name = "Guest") {
  return \`Hello \${name}\`;
}

greet();       // "Hello Guest"
greet("A");    // "Hello A"`})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"7 - Classes"}),r.jsx("p",{className:"p",children:"Classes are mostly syntax sugar over prototypes. They make object oriented code cleaner to read, but under the hood prototypes still exist."}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example"}),r.jsx("pre",{className:"code",children:`class User {
  constructor(name) {
    this.name = name;
  }

  hello() {
    return "hi " + this.name;
  }
}

const u = new User("A");
u.hello(); // "hi A"`})]}),r.jsxs("div",{className:"callout",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Kp,{})}),r.jsxs("div",{className:"cText",children:[r.jsx("div",{className:"cTitle",children:"Important note"}),r.jsx("div",{className:"cSub",children:"Class methods are stored on the prototype, not copied per object. That saves memory."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"8 - Modules"}),r.jsxs("p",{className:"p",children:["Modules allow you to split code into files. ES modules use"," ",r.jsx("span",{className:"mono",children:"import"})," and"," ",r.jsx("span",{className:"mono",children:"export"}),". They support static analysis and better bundling."]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - export and import"}),r.jsx("pre",{className:"code",children:`// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from "./math.js";
console.log(add(2, 3)); // 5`})]}),r.jsxs("div",{className:"finalNote",children:["In ES modules, top level"," ",r.jsx("span",{className:"mono",children:"`this`"})," is not the global object. This matters for internals."]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"9 - Promises and async/await"}),r.jsx("p",{className:"p",children:"Promises represent a future value. Async/await is syntax that makes promise code look synchronous, but it still uses the event loop under the hood."}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - promise"}),r.jsx("pre",{className:"code",children:`const p = Promise.resolve(7);

p.then((v) => console.log(v)); // 7`})]}),r.jsxs("div",{className:"exampleBlock",children:[r.jsx("div",{className:"exTitle",children:"Example - async/await"}),r.jsx("pre",{className:"code",children:`async function run() {
  const v = await Promise.resolve(10);
  console.log(v); // 10
}

run();`})]}),r.jsxs("div",{className:"callout",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Xp,{})}),r.jsxs("div",{className:"cText",children:[r.jsx("div",{className:"cTitle",children:"Microtasks"}),r.jsx("div",{className:"cSub",children:"Promise callbacks run in the microtask queue. Microtasks run before normal tasks."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"10 - Common ES6+ checklist for MERN"}),r.jsxs("div",{className:"qaGrid",children:[r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Use const by default"}),r.jsx("div",{className:"a",children:"Prefer const unless you need reassignment."})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Avoid var"}),r.jsx("div",{className:"a",children:"var has confusing hoisting and scope rules."})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Prefer modules"}),r.jsx("div",{className:"a",children:"Use import and export for clean structure."})]}),r.jsxs("div",{className:"qa",children:[r.jsx("div",{className:"q",children:"Use spread for immutability"}),r.jsx("div",{className:"a",children:"Common in React state updates."})]})]})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"Terms and full forms"}),r.jsxs("div",{className:"abbrGrid",children:[r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"ES"})," - ECMAScript"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"ES6"})," - ECMAScript 2015"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"ES6+"})," - ES6 and later versions"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"TDZ"})," - Temporal Dead Zone"]}),r.jsxs("div",{className:"abbr",children:[r.jsx("span",{className:"mono",children:"JS"})," - JavaScript"]})]}),r.jsx("div",{className:"finalNote",children:"ES6+ is not just syntax. Many features change runtime behavior, especially scope, modules, and async execution order."})]}),r.jsxs("section",{className:"sec",children:[r.jsx("h3",{className:"h3",children:"How to say it confidently"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:'"ES6 introduced block scope with let and const, and this reduced many var related bugs."'}),r.jsx("li",{children:'"Arrow functions do not bind their own this, they capture it from outer scope."'}),r.jsx("li",{children:'"Classes are syntax sugar over prototypes, the prototype chain is still the real mechanism."'}),r.jsx("li",{children:'"Promises schedule microtasks, which run before macrotasks in the event loop."'})]})]})]})})]})]})},_f=()=>r.jsxs(Wo.Wrapper,{children:[r.jsx(Wo.Header,{children:r.jsx(Ex,{})}),r.jsxs(Wo.Main,{children:[r.jsxs("div",{className:"contentWrapper",children:[r.jsx(_x,{}),r.jsx(Lx,{}),r.jsx(Dx,{}),r.jsx(Ux,{}),r.jsx(Qx,{}),r.jsx(Zx,{}),r.jsx(nf,{}),r.jsx(of,{}),r.jsx(pf,{}),r.jsx(xf,{}),r.jsx(jf,{}),r.jsx(Nf,{}),r.jsx(Cf,{}),r.jsx(Pf,{})]}),r.jsx("div",{className:"footerWrapper",children:r.jsx(Mx,{})})]})]});ih.createRoot(document.getElementById("root")).render(r.jsx(r.Fragment,{children:r.jsx(_f,{})}));
