import{u as f,r as n,f as h,a as v,c as b,b as t,t as d,d as o,n as w}from"./index-ad22e409.js";import{t as k}from"./common-f91a9924.js";const S=t("div",{id:"app-background"},[t("div",{id:"app-background-image",class:"background-image"})],-1),x={id:"app-info",class:"info"},y={class:"time"},B={class:"weather"},C={class:"weather-temperature-value"},D=t("div",{id:"sign-in-button-wrapper"},[t("button",{id:"sign-in-button",class:"user-status-button clear-button",type:"button"},[t("i",{class:"i-uil-corner-up-right-alt"})])],-1),L={__name:"index",setup(H){const i=f();async function m(){(await(await fetch("/api/config")).json()).needPwd?i.push({name:"Login"}):i.push({name:"Home"})}let r=n(""),c=n("");async function _(){var s,p;const e=await(await fetch('http://en.wttr.in?format="%C,%t"')).json();r.value=k.iconList[(s=e.split(","))==null?void 0:s[0]]||"i-uil-sun",c.value=(p=e.split(","))==null?void 0:p[1]}_();function g(){let a=new Date,e=a.getHours(),s=a.getMinutes();return e=e.toString().padStart(2,"0"),s=s.toString().padStart(2,"0"),e+":"+s}let u=n(""),l=setInterval(()=>{u.value=g()});return h(()=>{clearInterval(l),l=null}),(a,e)=>(v(),b("div",{class:"main-index logged-out",onClick:m},[S,t("div",x,[t("span",y,d(o(u)),1),t("span",B,[t("i",{class:w(o(r))},null,2),t("span",C,d(o(c)),1)])]),D]))}};export{L as default};
