import{A as S,X as W,w as X,Y as B,o as D,g as V,U as L,Z as Y,_ as N,z as p,$ as c,S as j,a0 as I,O as $,R as F}from"./index.fe271617.js";function te(e,o,t){let l;function r(){l!==void 0&&(W.remove(l),l=void 0)}return S(()=>{e.value===!0&&r()}),{removeFromHistory:r,addToHistory(){l={condition:()=>t.value===!0,handler:o},W.add(l)}}}const le={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ie=["beforeShow","show","beforeHide","hide"];function re({showing:e,canShow:o,hideOnRouteChange:t,handleShow:l,handleHide:r,processOnMount:m}){const n=V(),{props:s,emit:u,proxy:H}=n;let d;function _(i){e.value===!0?g(i):x(i)}function x(i){if(s.disable===!0||i!==void 0&&i.qAnchorHandled===!0||o!==void 0&&o(i)!==!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(u("update:modelValue",!0),d=i,L(()=>{d===i&&(d=void 0)})),(s.modelValue===null||f===!1)&&P(i)}function P(i){e.value!==!0&&(e.value=!0,u("beforeShow",i),l!==void 0?l(i):u("show",i))}function g(i){if(s.disable===!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(u("update:modelValue",!1),d=i,L(()=>{d===i&&(d=void 0)})),(s.modelValue===null||f===!1)&&C(i)}function C(i){e.value!==!1&&(e.value=!1,u("beforeHide",i),r!==void 0?r(i):u("hide",i))}function q(i){s.disable===!0&&i===!0?s["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):i===!0!==e.value&&(i===!0?P:C)(d)}X(()=>s.modelValue,q),t!==void 0&&B(n)===!0&&X(()=>H.$route.fullPath,()=>{t.value===!0&&e.value===!0&&g()}),m===!0&&D(()=>{q(s.modelValue)});const M={show:x,hide:g,toggle:_};return Object.assign(H,M),M}const R=[null,document,document.body,document.scrollingElement,document.documentElement];function ne(e,o){let t=N(o);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return R.includes(t)?window:t}function K(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Z(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let h;function se(){if(h!==void 0)return h;const e=document.createElement("p"),o=document.createElement("div");Y(e,{width:"100%",height:"200px"}),Y(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const t=e.offsetWidth;o.style.overflow="scroll";let l=e.offsetWidth;return t===l&&(l=o.clientWidth),o.remove(),h=t-l,h}function G(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let w=0,b,T,v,E=!1,k,A,U,a=null;function J(e){Q(e)&&j(e)}function Q(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=I(e),t=e.shiftKey&&!e.deltaX,l=!t&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),r=t||l?e.deltaY:e.deltaX;for(let m=0;m<o.length;m++){const n=o[m];if(G(n,l))return l?r<0&&n.scrollTop===0?!0:r>0&&n.scrollTop+n.clientHeight===n.scrollHeight:r<0&&n.scrollLeft===0?!0:r>0&&n.scrollLeft+n.clientWidth===n.scrollWidth}return!0}function z(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function y(e){E!==!0&&(E=!0,requestAnimationFrame(()=>{E=!1;const{height:o}=e.target,{clientHeight:t,scrollTop:l}=document.scrollingElement;(v===void 0||o!==window.innerHeight)&&(v=t-o,document.scrollingElement.scrollTop=l),l>v&&(document.scrollingElement.scrollTop-=Math.ceil((l-v)/8))}))}function O(e){const o=document.body,t=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:r}=window.getComputedStyle(o);b=Z(window),T=K(window),k=o.style.left,A=o.style.top,U=window.location.href,o.style.left=`-${b}px`,o.style.top=`-${T}px`,r!=="hidden"&&(r==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,p.is.ios===!0&&(t===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",y,c.passiveCapture),window.visualViewport.addEventListener("scroll",y,c.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",z,c.passiveCapture))}p.is.desktop===!0&&p.is.mac===!0&&window[`${e}EventListener`]("wheel",J,c.notPassive),e==="remove"&&(p.is.ios===!0&&(t===!0?(window.visualViewport.removeEventListener("resize",y,c.passiveCapture),window.visualViewport.removeEventListener("scroll",y,c.passiveCapture)):window.removeEventListener("scroll",z,c.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=k,o.style.top=A,window.location.href===U&&window.scrollTo(b,T),v=void 0)}function ee(e){let o="add";if(e===!0){if(w++,a!==null){clearTimeout(a),a=null;return}if(w>1)return}else{if(w===0||(w--,w>0))return;if(o="remove",p.is.ios===!0&&p.is.nativeMobile===!0){a!==null&&clearTimeout(a),a=setTimeout(()=>{O(o),a=null},100);return}}O(o)}function ue(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,ee(o))}}}function de(){let e=null;const o=V();function t(){e!==null&&(clearTimeout(e),e=null)}return $(t),S(t),{removeTimeout:t,registerTimeout(l,r){t(),F(o)===!1&&(e=setTimeout(l,r))}}}function ce(){let e;const o=V();function t(){e=void 0}return $(t),S(t),{removeTick:t,registerTick(l){e=l,L(()=>{e===l&&(F(o)===!1&&e(),e=void 0)})}}}export{ie as a,de as b,ce as c,re as d,te as e,ue as f,ne as g,K as h,Z as i,se as j,le as u};
