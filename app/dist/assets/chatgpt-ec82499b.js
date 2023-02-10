import{r as i,a as d,c as u,b as t,F as m,j as b,d as r,k as h,q as y,m as x,v as _,e as v,n as w,p as k,i as M}from"./index-59bf63be.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const l=n=>(k("data-v-a5cd412a"),n=n(),M(),n),B={class:"main"},L={class:"chat-all"},T=l(()=>t("div",{class:"chat card"},[t("div",{class:"triangle"}),t("div",{class:"card2"},"您好，很高兴能够遇到你！我是人工智能AI,可以跟我聊聊吗？")],-1)),E=["innerHTML"],I={class:"group"},H=l(()=>t("span",{class:"highlight"},null,-1)),j=l(()=>t("span",{class:"bar"},null,-1)),z={type:"submit",class:"cssbuttons-io-button",value:"发送"},N=l(()=>t("div",{class:"icon"},[t("svg",{height:"24",width:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M0 0h24v24H0z",fill:"none"}),t("path",{d:"M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z",fill:"currentColor"})])],-1)),V={disabled:"",type:"button",class:"cssbuttons-io-button"},Z=l(()=>t("svg",{"aria-hidden":"true",role:"status",class:"inline w-4 h-4 mr-3 text-white animate-spin",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})],-1)),q={__name:"chatgpt",setup(n){let e=i(""),f=i(""),o=i(!1),c=i([]);async function C(p){if(p.preventDefault(),!!e.value){o.value=!0,c.value.push({keyword:e.value,who:"me"});try{const a=await fetch("/api/chatgpt",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:e.value})}),s=await a.json();if(a.status!==200)throw s.error||new Error(`Request failed with status ${a.status}`);f.value=s.result,c.value.push({keyword:s.result,who:"ai"}),e.value="",o.value=!1}catch(a){o.value=!1,console.error(a)}}}return(p,a)=>(d(),u("div",B,[t("div",L,[T,(d(!0),u(m,null,b(r(c),(s,g)=>(d(),u("div",{class:w(["chat",s.who=="me"?"card_two":"card"]),key:g+1},[t("div",{class:w(s.who=="me"?"triangle_two":"triangle")},null,2),t("div",{class:"card2",innerHTML:s.keyword},null,8,E)],2))),128))]),t("form",{onSubmit:C,class:"input-btn"},[t("div",I,[h(t("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=s=>x(e)?e.value=s:e=s),class:"input",placeholder:"请输入您的问题"},null,512),[[y,r(e)]]),H,j]),h(t("button",z,[v(" 发送 "),N],512),[[_,!r(o)]]),h(t("button",V,[Z,v(" Loading... ")],512),[[_,r(o)]])],32)]))}},O=S(q,[["__scopeId","data-v-a5cd412a"]]);export{O as default};
