!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function i(e){return e&&e.constructor===Symbol?"symbol":typeof e}var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var i,o,u,a,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function j(e){return l=e,f=setTimeout(w,t),d?b(e):a}function h(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function w(){var e=p();if(h(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-c);return s?g(n,u-(e-l)):n}(e))}function O(e){return f=void 0,v&&i?b(e):(i=o=void 0,a)}function T(){var e=p(),n=h(e);if(i=arguments,o=this,c=e,n){if(void 0===f)return j(c);if(s)return f=setTimeout(w,t),b(c)}return void 0===f&&(f=setTimeout(w,t)),a}return t=S(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=c=o=f=void 0},T.flush=function(){return void 0===f?a:O(p())},T}function y(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":i(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||f.test(e)?c(e.slice(2),n?2:8):u.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};var j=document.querySelector(".feedback-form"),h=document.querySelector(".feedback-form input"),w=document.querySelector(".feedback-form textarea"),O="feedback-form-state";j.addEventListener("input",e(t)((function(e){localStorage.setItem(O,JSON.stringify({email:h.value,message:w.value}))}),500)),j.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:h.value,message:w.value}),e.target.reset(),localStorage.removeItem(O)})),function(){var e=localStorage.getItem(O);if(e){var t=JSON.parse(e);h.value=t.email,w.value=t.message}}()}();
//# sourceMappingURL=03-feedback.fd173681.js.map