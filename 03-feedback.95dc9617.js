!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){if(Array.isArray(t))return t}function r(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function a(t,e){return n(t)||r(t)||u(t,e)||o()}var f;function c(t){return t&&t.constructor===Symbol?"symbol":typeof t}var l="Expected a function",s=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,y=/^0o[0-7]+$/i,m=parseInt,b="object"==typeof e&&e&&e.Object===Object&&e,p="object"==typeof self&&self&&self.Object===Object&&self,g=b||p||Function("return this")(),h=Object.prototype.toString,j=Math.max,S=Math.min,w=function(){return g.Date.now()};function O(t,e,n){var r,o,i,u,a,f,c=0,s=!1,d=!1,v=!0;if("function"!=typeof t)throw new TypeError(l);function y(e){var n=r,i=o;return r=o=void 0,c=e,u=t.apply(i,n)}function m(t){return c=t,a=setTimeout(p,e),s?y(t):u}function b(t){var n=t-f;return void 0===f||n>=e||n<0||d&&t-c>=i}function p(){var t=w();if(b(t))return g(t);a=setTimeout(p,function(t){var n=e-(t-f);return d?S(n,i-(t-c)):n}(t))}function g(t){return a=void 0,v&&r?y(t):(r=o=void 0,u)}function h(){var t=w(),n=b(t);if(r=arguments,o=this,f=t,n){if(void 0===a)return m(f);if(d)return a=setTimeout(p,e),y(f)}return void 0===a&&(a=setTimeout(p,e)),u}return e=A(e)||0,T(n)&&(s=!!n.leading,i=(d="maxWait"in n)?j(A(n.maxWait)||0,e):i,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=f=o=a=void 0},h.flush=function(){return void 0===a?u:g(w())},h}function T(t){var e=void 0===t?"undefined":c(t);return!!t&&("object"==e||"function"==e)}function A(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":c(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==h.call(t)}(t))return NaN;if(T(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=T(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var n=v.test(t);return n||y.test(t)?m(t.slice(2),n?2:8):d.test(t)?NaN:+t}f=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(l);return T(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),O(t,e,{leading:r,maxWait:e,trailing:o})};var E=document.querySelector(".feedback-form"),I="feedback-form-state";E.addEventListener("input",t(f)((function(t){N[t.target.name]=t.target.value,localStorage.setItem(I,JSON.stringify(N))}),500)),E.addEventListener("submit",(function(t){t.preventDefault(),console.log(N),t.target.reset(),localStorage.removeItem(I)}));var x,N={};(x=localStorage.getItem(I))&&(x=JSON.parse(x),Object.entries(x).forEach((function(t){var e=a(t,2),n=e[0],r=e[1];N[n]=r,E.elements[n].value=r})))}();
//# sourceMappingURL=03-feedback.95dc9617.js.map