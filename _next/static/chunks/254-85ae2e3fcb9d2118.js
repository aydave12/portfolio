(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[254],{6010:function(e,r,t){"use strict";function o(e){var r,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=o(e[r]))&&(n&&(n+=" "),n+=t);else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}r.Z=function(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=o(e))&&(n&&(n+=" "),n+=r);return n}},1210:function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getDomainLocale=function(e,r,t,o){return!1};("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&"undefined"===typeof r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},8418:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t(4941).Z;t(5753).default;Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=t(2648).Z,i=t(7273).Z,a=n(t(7294)),l=t(6273),s=t(2725),c=t(3462),u=t(1018),d=t(7190),f=t(1210),p=t(8684),b={};function m(e,r,t,o){if(e&&l.isLocalURL(r)){Promise.resolve(e.prefetch(r,t,o)).catch((function(e){0}));var n=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;b[r+"%"+t+(n?"%"+n:"")]=!0}}var g=a.default.forwardRef((function(e,r){var t,n=e.href,g=e.as,v=e.children,y=e.prefetch,h=e.passHref,x=e.replace,w=e.shallow,k=e.scroll,j=e.locale,C=e.onClick,O=e.onMouseEnter,z=e.onTouchStart,P=e.legacyBehavior,M=void 0===P?!0!==Boolean(!1):P,E=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);t=v,!M||"string"!==typeof t&&"number"!==typeof t||(t=a.default.createElement("a",null,t));var _=!1!==y,S=a.default.useContext(c.RouterContext),I=a.default.useContext(u.AppRouterContext);I&&(S=I);var N,R=a.default.useMemo((function(){var e=o(l.resolveHref(S,n,!0),2),r=e[0],t=e[1];return{href:r,as:g?l.resolveHref(S,g):t||r}}),[S,n,g]),G=R.href,L=R.as,T=a.default.useRef(G),Z=a.default.useRef(L);M&&(N=a.default.Children.only(t));var A=M?N&&"object"===typeof N&&N.ref:r,D=o(d.useIntersection({rootMargin:"200px"}),3),U=D[0],B=D[1],W=D[2],$=a.default.useCallback((function(e){Z.current===L&&T.current===G||(W(),Z.current=L,T.current=G),U(e),A&&("function"===typeof A?A(e):"object"===typeof A&&(A.current=e))}),[L,A,G,W,U]);a.default.useEffect((function(){var e=B&&_&&l.isLocalURL(G),r="undefined"!==typeof j?j:S&&S.locale,t=b[G+"%"+L+(r?"%"+r:"")];e&&!t&&m(S,G,L,{locale:r})}),[L,G,B,j,_,S]);var H={ref:$,onClick:function(e){M||"function"!==typeof C||C(e),M&&N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,r,t,o,n,i,s,c,u,d){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t)){e.preventDefault();var f=function(){"beforePopState"in r?r[n?"replace":"push"](t,o,{shallow:i,locale:c,scroll:s}):r[n?"replace":"push"](t,{forceOptimisticNavigation:!d})};u?a.default.startTransition(f):f()}}(e,S,G,L,x,w,k,j,Boolean(I),_)},onMouseEnter:function(e){M||"function"!==typeof O||O(e),M&&N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),!_&&I||l.isLocalURL(G)&&m(S,G,L,{priority:!0})},onTouchStart:function(e){M||"function"!==typeof z||z(e),M&&N.props&&"function"===typeof N.props.onTouchStart&&N.props.onTouchStart(e),!_&&I||l.isLocalURL(G)&&m(S,G,L,{priority:!0})}};if(!M||h||"a"===N.type&&!("href"in N.props)){var K="undefined"!==typeof j?j:S&&S.locale,q=S&&S.isLocaleDomain&&f.getDomainLocale(L,K,S.locales,S.domainLocales);H.href=q||p.addBasePath(s.addLocale(L,K,S&&S.defaultLocale))}return M?a.default.cloneElement(N,H):a.default.createElement("a",Object.assign({},E,H),t)}));r.default=g,("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&"undefined"===typeof r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},7190:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t(4941).Z;Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,c=e.disabled||!a,u=o(n.useState(!1),2),d=u[0],f=u[1],p=o(n.useState(null),2),b=p[0],m=p[1];n.useEffect((function(){if(a){if(c||d)return;if(b&&b.tagName){var e=function(e,r,t){var o=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},o=s.find((function(e){return e.root===t.root&&e.margin===t.margin}));if(o&&(r=l.get(o)))return r;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return r={id:t,observer:i,elements:n},s.push(t),l.set(t,r),r}(t),n=o.id,i=o.observer,a=o.elements;return a.set(e,r),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),l.delete(n);var r=s.findIndex((function(e){return e.root===n.root&&e.margin===n.margin}));r>-1&&s.splice(r,1)}}}(b,(function(e){return e&&f(e)}),{root:null==r?void 0:r.current,rootMargin:t});return e}}else if(!d){var o=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(o)}}}),[b,c,t,r,d]);var g=n.useCallback((function(){f(!1)}),[]);return[m,d,g]};var n=t(7294),i=t(9311),a="function"===typeof IntersectionObserver,l=new Map,s=[];("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&"undefined"===typeof r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},1018:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.TemplateContext=r.GlobalLayoutRouterContext=r.LayoutRouterContext=r.AppRouterContext=void 0;var o=(0,t(2648).Z)(t(7294)),n=o.default.createContext(null);r.AppRouterContext=n;var i=o.default.createContext(null);r.LayoutRouterContext=i;var a=o.default.createContext(null);r.GlobalLayoutRouterContext=a;var l=o.default.createContext(null);r.TemplateContext=l},9008:function(e,r,t){e.exports=t(5443)},1664:function(e,r,t){e.exports=t(8418)},1163:function(e,r,t){e.exports=t(387)},8357:function(e,r,t){"use strict";t.d(r,{w_:function(){return c}});var o=t(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=o.createContext&&o.createContext(n),a=function(){return a=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},a.apply(this,arguments)},l=function(e,r){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)r.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(t[o[n]]=e[o[n]])}return t};function s(e){return e&&e.map((function(e,r){return o.createElement(e.tag,a({key:r},e.attr),s(e.child))}))}function c(e){return function(r){return o.createElement(u,a({attr:a({},e.attr)},r),s(e.child))}}function u(e){var r=function(r){var t,n=e.attr,i=e.size,s=e.title,c=l(e,["attr","size","title"]),u=i||r.size||"1em";return r.className&&(t=r.className),e.className&&(t=(t?t+" ":"")+e.className),o.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,c,{className:t,style:a(a({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&o.createElement("title",null,s),e.children)};return void 0!==i?o.createElement(i.Consumer,null,(function(e){return r(e)})):r(n)}},943:function(e,r,t){"use strict";function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}t.d(r,{Z:function(){return o}})},3375:function(e,r,t){"use strict";function o(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}t.d(r,{Z:function(){return o}})},9396:function(e,r,t){"use strict";function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}t.d(r,{Z:function(){return o}})},9534:function(e,r,t){"use strict";function o(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}t.d(r,{Z:function(){return o}})},9815:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var o=t(943);var n=t(3375);var i=t(1566);function a(e){return function(e){if(Array.isArray(e))return(0,o.Z)(e)}(e)||(0,n.Z)(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var o=t(943);function n(e,r){if(e){if("string"===typeof e)return(0,o.Z)(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,o.Z)(e,r):void 0}}},7851:function(e,r,t){"use strict";t.d(r,{m:function(){return $}});function o(e){var r=function(e){var r=e.theme,t=e.prefix,o={nextPart:new Map,validators:[]};return s(Object.entries(e.classGroups),t).forEach((function(e){var t=e[0];a(e[1],o,t,r)})),o}(e),t=e.conflictingClassGroups,o=e.conflictingClassGroupModifiers,l=void 0===o?{}:o;return{getClassGroupId:function(e){var t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),n(t,r)||function(e){if(i.test(e)){var r=i.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}(e)},getConflictingClassGroupIds:function(e,r){var o=t[e]||[];return r&&l[e]?[].concat(o,l[e]):o}}}function n(e,r){if(0===e.length)return r.classGroupId;var t=e[0],o=r.nextPart.get(t),i=o?n(e.slice(1),o):void 0;if(i)return i;if(0!==r.validators.length){var a=e.join("-");return r.validators.find((function(e){return(0,e.validator)(a)}))?.classGroupId}}var i=/^\[(.+)\]$/;function a(e,r,t,o){e.forEach((function(e){if("string"!==typeof e){if("function"===typeof e)return e.isThemeGetter?void a(e(o),r,t,o):void r.validators.push({validator:e,classGroupId:t});Object.entries(e).forEach((function(e){var n=e[0];a(e[1],l(r,n),t,o)}))}else{(""===e?r:l(r,e)).classGroupId=t}}))}function l(e,r){var t=e;return r.split("-").forEach((function(e){t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)})),t}function s(e,r){return r?e.map((function(e){return[e[0],e[1].map((function(e){return"string"===typeof e?r+e:"object"===typeof e?Object.fromEntries(Object.entries(e).map((function(e){var t=e[0],o=e[1];return[r+t,o]}))):e}))]})):e}function c(e){if(e<1)return{get:function(){},set:function(){}};var r=0,t=new Map,o=new Map;function n(n,i){t.set(n,i),++r>e&&(r=0,o=t,t=new Map)}return{get:function(e){var r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set:function(e,r){t.has(e)?t.set(e,r):n(e,r)}}}function u(e){var r=e.separator||":",t=1===r.length,o=r[0],n=r.length;return function(e){for(var i,a=[],l=0,s=0,c=0;c<e.length;c++){var u=e[c];if(0===l){if(u===o&&(t||e.slice(c,c+n)===r)){a.push(e.slice(s,c)),s=c+n;continue}if("/"===u){i=c;continue}}"["===u?l++:"]"===u&&l--}var d=0===a.length?e:e.substring(s),f=d.startsWith("!");return{modifiers:a,hasImportantModifier:f,baseClassName:f?d.substring(1):d,maybePostfixModifierPosition:i&&i>s?i-s:void 0}}}function d(e){return{cache:c(e.cacheSize),splitModifiers:u(e),...o(e)}}var f=/\s+/;function p(e,r){var t=r.splitModifiers,o=r.getClassGroupId,n=r.getConflictingClassGroupIds,i=new Set;return e.trim().split(f).map((function(e){var r=t(e),n=r.modifiers,i=r.hasImportantModifier,a=r.baseClassName,l=r.maybePostfixModifierPosition,s=o(l?a.substring(0,l):a),c=Boolean(l);if(!s){if(!l)return{isTailwindClass:!1,originalClassName:e};if(!(s=o(a)))return{isTailwindClass:!1,originalClassName:e};c=!1}var u=function(e){if(e.length<=1)return e;var r=[],t=[];return e.forEach((function(e){"["===e[0]?(r.push.apply(r,t.sort().concat([e])),t=[]):t.push(e)})),r.push.apply(r,t.sort()),r}(n).join(":");return{isTailwindClass:!0,modifierId:i?u+"!":u,classGroupId:s,originalClassName:e,hasPostfixModifier:c}})).reverse().filter((function(e){if(!e.isTailwindClass)return!0;var r=e.modifierId,t=e.classGroupId,o=e.hasPostfixModifier,a=r+t;return!i.has(a)&&(i.add(a),n(t,o).forEach((function(e){return i.add(r+e)})),!0)})).reverse().map((function(e){return e.originalClassName})).join(" ")}function b(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=m(e))&&(o&&(o+=" "),o+=r);return o}function m(e){if("string"===typeof e)return e;for(var r,t="",o=0;o<e.length;o++)e[o]&&(r=m(e[o]))&&(t&&(t+=" "),t+=r);return t}function g(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var o,n,i,a=l;function l(e){var t=r[0],l=r.slice(1).reduce((function(e,r){return r(e)}),t());return o=d(l),n=o.cache.get,i=o.cache.set,a=s,s(e)}function s(e){var r=n(e);if(r)return r;var t=p(e,o);return i(e,t),t}return function(){return a(b.apply(null,arguments))}}function v(e){var r=function(r){return r[e]||[]};return r.isThemeGetter=!0,r}var y=/^\[(?:([a-z-]+):)?(.+)\]$/i,h=/^\d+\/\d+$/,x=new Set(["px","full","screen"]),w=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,k=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,j=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function C(e){return _(e)||x.has(e)||h.test(e)||O(e)}function O(e){return T(e,"length",Z)}function z(e){return T(e,"size",A)}function P(e){return T(e,"position",A)}function M(e){return T(e,"url",D)}function E(e){return T(e,"number",_)}function _(e){return!Number.isNaN(Number(e))}function S(e){return e.endsWith("%")&&_(e.slice(0,-1))}function I(e){return U(e)||T(e,"number",U)}function N(e){return y.test(e)}function R(){return!0}function G(e){return w.test(e)}function L(e){return T(e,"",B)}function T(e,r,t){var o=y.exec(e);return!!o&&(o[1]?o[1]===r:t(o[2]))}function Z(e){return k.test(e)}function A(){return!1}function D(e){return e.startsWith("url(")}function U(e){return Number.isInteger(Number(e))}function B(e){return j.test(e)}function W(){var e=v("colors"),r=v("spacing"),t=v("blur"),o=v("brightness"),n=v("borderColor"),i=v("borderRadius"),a=v("borderSpacing"),l=v("borderWidth"),s=v("contrast"),c=v("grayscale"),u=v("hueRotate"),d=v("invert"),f=v("gap"),p=v("gradientColorStops"),b=v("gradientColorStopPositions"),m=v("inset"),g=v("margin"),y=v("opacity"),h=v("padding"),x=v("saturate"),w=v("scale"),k=v("sepia"),j=v("skew"),T=v("space"),Z=v("translate"),A=function(){return["auto",N,r]},D=function(){return[N,r]},U=function(){return["",C]},B=function(){return["auto",_,N]},W=function(){return["","0",N]},$=function(){return[_,E]},H=function(){return[_,N]};return{cacheSize:500,theme:{colors:[R],spacing:[C],blur:["none","",G,N],brightness:$(),borderColor:[e],borderRadius:["none","","full",G,N],borderSpacing:D(),borderWidth:U(),contrast:$(),grayscale:W(),hueRotate:H(),invert:W(),gap:D(),gradientColorStops:[e],gradientColorStopPositions:[S,O],inset:A(),margin:A(),opacity:$(),padding:D(),saturate:$(),scale:$(),sepia:W(),skew:H(),space:D(),translate:D()},classGroups:{aspect:[{aspect:["auto","square","video",N]}],container:["container"],columns:[{columns:[G]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],[N])}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",I]}],basis:[{basis:A()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",N]}],grow:[{grow:W()}],shrink:[{shrink:W()}],order:[{order:["first","last","none",I]}],"grid-cols":[{"grid-cols":[R]}],"col-start-end":[{col:["auto",{span:["full",I]},N]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[R]}],"row-start-end":[{row:["auto",{span:[I]},N]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",N]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",N]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal"].concat(["start","end","center","between","around","evenly","stretch"])}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(["start","end","center","between","around","evenly","stretch"],["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(["start","end","center","between","around","evenly","stretch"],["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[h]}],px:[{px:[h]}],py:[{py:[h]}],ps:[{ps:[h]}],pe:[{pe:[h]}],pt:[{pt:[h]}],pr:[{pr:[h]}],pb:[{pb:[h]}],pl:[{pl:[h]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[T]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[T]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",N,r]}],"min-w":[{"min-w":["min","max","fit",N,C]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[G]},G,N]}],h:[{h:[N,r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",N,C]}],"max-h":[{"max-h":[N,r,"min","max","fit"]}],"font-size":[{text:["base",G,O]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",E]}],"font-family":[{font:[R]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",N]}],"line-clamp":[{"line-clamp":["none",_,E]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",N,C]}],"list-image":[{"list-image":["none",N]}],"list-style-type":[{list:["none","disc","decimal",N]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[y]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[y]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(["solid","dashed","dotted","double","none"],["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",C]}],"underline-offset":[{"underline-offset":["auto",N,C]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",N]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",N]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[y]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],[P])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",z]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},M]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[y]}],"border-style":[{border:[].concat(["solid","dashed","dotted","double","none"],["hidden"])}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[y]}],"divide-style":[{divide:["solid","dashed","dotted","double","none"]}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(["solid","dashed","dotted","double","none"])}],"outline-offset":[{"outline-offset":[N,C]}],"outline-w":[{outline:[C]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:U()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[y]}],"ring-offset-w":[{"ring-offset":[C]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",G,L]}],"shadow-color":[{shadow:[R]}],opacity:[{opacity:[y]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",G,N]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[d]}],saturate:[{saturate:[x]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[y]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",N]}],duration:[{duration:H()}],ease:[{ease:["linear","in","out","in-out",N]}],delay:[{delay:H()}],animate:[{animate:["none","spin","ping","pulse","bounce",N]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[I,N]}],"translate-x":[{"translate-x":[Z]}],"translate-y":[{"translate-y":[Z]}],"skew-x":[{"skew-x":[j]}],"skew-y":[{"skew-y":[j]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",N]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",N]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",N]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[C,E]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var $=g(W)}}]);