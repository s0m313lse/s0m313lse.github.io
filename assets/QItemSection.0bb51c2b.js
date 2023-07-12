import{a as E,b as L}from"./app.store.27bb87ef.js";import{x as f,ar as S,as as I,r as d,c as n,h as o,a3 as K,O as Q,aa as R,g as w,y as $}from"./index.e2a387ad.js";var D=f({name:"QItem",props:{...E,...S,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:i,emit:s}){const{proxy:{$q:r}}=w(),b=L(e,r),{hasLink:c,linkAttrs:q,linkClass:k,linkTag:y,navigateOnClick:g}=I(),u=d(null),l=d(null),v=n(()=>e.clickable===!0||c.value===!0||e.tag==="label"),a=n(()=>e.disable!==!0&&v.value===!0),h=n(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(b.value===!0?" q-item--dark":"")+(c.value===!0&&e.active===null?k.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),_=n(()=>{if(e.insetLevel===void 0)return null;const t=r.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function B(t){a.value===!0&&(l.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===u.value?l.value.focus():document.activeElement===l.value&&u.value.focus()),g(t))}function C(t){if(a.value===!0&&K(t,13)===!0){Q(t),t.qKeyEvent=!0;const m=new MouseEvent("click",t);m.qKeyEvent=!0,u.value.dispatchEvent(m)}s("keyup",t)}function x(){const t=R(i.default,[]);return a.value===!0&&t.unshift(o("div",{class:"q-focus-helper",tabindex:-1,ref:l})),t}return()=>{const t={ref:u,class:h.value,style:_.value,role:"listitem",onClick:B,onKeyup:C};return a.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,q.value)):v.value===!0&&(t["aria-disabled"]="true"),o(y.value,t,x())}}}),O=f({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:i}){const s=n(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>o("div",{class:s.value},$(i.default))}});export{O as Q,D as a};
