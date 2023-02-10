import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{a as p,c as _,b as t,e as i,t as o,n as u,p as $,i as S,r as x,o as I,F as b,j as k,k as G,v as N,d as c,h as A,l as g,m}from"./index-c1c22dfa.js";const M=l=>($("data-v-7e8ecafe"),l=l(),S(),l),R=["href"],U=M(()=>t("span",null,"→",-1)),V={__name:"Card",props:{msg:String,href:String,title:String,body:String,isactive:String},setup(l){return(n,v)=>(p(),_("li",{class:u(l.isactive?"link-card link-card-isactive":"link-card")},[t("a",{href:l.href},[t("h2",null,[i(o(l.title)+" ",1),U]),t("p",null,o(l.body),1)],8,R)],2))}},y=C(V,[["__scopeId","data-v-7e8ecafe"]]);const E={class:"list-all ml-45 mr-5"},D={class:"tools"},J={class:"blue px-2 py-1 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mx-1"},P={class:"code"},T=t("br",null,null,-1),W=["href"],Y={class:"main"},Z=t("br",null,null,-1),q=["href"],K=t("br",null,null,-1),O={class:"blue"},Q=t("br",null,null,-1),X=["href"],tt=t("br",null,null,-1),et={class:"blue"},st=t("br",null,null,-1),nt={class:"blue"},ot={class:"main"},lt=t("br",null,null,-1),at={class:"blue"},rt={class:"h-screen shadow-lg w-40 fixed top-0 left-0"},it={class:"bg-white h-full dark:bg-gray-700 overflow-y-auto"},ct=A('<div class="flex items-center justify-center pt-2"><svg width="35" height="30" viewBox="0 0 256 366" version="1.1" preserveAspectRatio="xMidYMid"><defs><linearGradient x1="12.5189534%" y1="85.2128611%" x2="88.2282959%" y2="10.0225497%" id="linearGradient-1"><stop stop-color="#FF0057" stop-opacity="0.16" offset="0%"></stop><stop stop-color="#FF0057" offset="86.1354%"></stop></linearGradient></defs><g><path d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z" fill="#001B38"></path><circle fill="url(#linearGradient-1)" transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) " cx="147.013244" cy="147.014675" r="78.9933938"></circle><circle fill="url(#linearGradient-1)" opacity="0.5" transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) " cx="147.013244" cy="147.014675" r="78.9933938"></circle></g></svg></div>',1),dt={class:"mt-2"},ut=t("span",{class:"mx-1 text-sm font-normal"}," 全部 ",-1),pt=[ut],_t=["onClick"],ht={class:"mx-1 text-sm font-normal"},vt={__name:"List",props:{env:{type:[String,Number],default:"all"}},setup(l){const n=l;let v=[{name:"临安web防逃",list:["http://172.18.39.200:33020/version.json","http://172.18.39.197:33020/version.json"]},{name:"临安防逃H5",list:["https://hltm.jw.linan.gov.cn/zzdtest/laft-h5-test/version.json","https://hltm.jw.linan.gov.cn/zzd/laft-h5/version.json"]},{name:"临安大屏",list:["http://172.18.39.200:34020/big/version.json","http://172.18.39.200:33020/big/version.json","http://172.18.39.197:33020/big/version.json"]},{name:"嘉善大屏",list:["http://30.207.88.19:31134/version.json","https://ywjd.jiashan.gov.cn:8443/datav/version.json"]},{name:"嘉善浙里办H5",list:["http://30.207.88.19:31132/version.json","https://cpdev.watone.com.cn:30000/jsjw-zlb/version.json"]},{name:"绍兴卫建机构端",list:["http://30.207.88.19:31153/version.json"]},{name:"绍兴卫建政府端",list:["http://30.207.88.19:31152/version.json"]},{name:"绍兴卫建大屏",list:["http://30.207.88.19:31154/version.json"]},{name:"绍兴卫建家长端H5",list:["http://30.207.88.19:31155/version.json"]}],d=x(0);function h(s,r){d.value=s,r?H(r):j()}let f=x([]);function j(){v.map(s=>{s.list.map(async r=>{try{const a=await(await fetch(`/api/getJson?url=${r}`)).json();a!=null&&a.name&&f.value.push(a)}catch{}})})}I(()=>{j()});function H(s){f.value=[],s.map(async r=>{const a=await(await fetch(`/api/getJson?url=${r}`)).json();a!=null&&a.name&&f.value.push(a)})}function w(s){var r=/^\w+:\/\//;return r.test(s)||(s="http://"+s),new URL(s).port}let B=function(s){let r=s.includes("pro")||s.includes("production")||s.includes("生产");switch(n.env){case"all":return!0;case"pre":return!r;case"prod":return r;default:return!0}},z=function(s){return s.includes("手机")?"📱":"💻"},F=function(s){return s.includes("pro")||s.includes("production")||s.includes("生产")?"🔥🔥🔥":"🍀🍀🍀"};return(s,r)=>(p(),_(b,null,[t("div",E,[(p(!0),_(b,null,k(c(f),(e,a)=>G((p(),_("div",{key:a,class:"note"},[t("div",D,o(c(z)(e.name))+" "+o(e.name)+" "+o(c(F)(e.name)),1),t("div",{class:u(e.version?"main flex items-center":"hidden")},[i("版本号:"),t("span",J,o(e.version||""),1)],2),t("div",{class:u(w(e.url)?"main flex":"hidden")},[i(" 端口: "),t("span",P,o(w(e.url)),1)],2),t("div",{class:u(e.gitlab?"main":"hidden")},[i("gitLab地址:"),T,t("a",{href:e.gitlab,target:"_blank",class:"blue"},o(e.gitlab),9,W)],2),t("div",Y,[i("地址:"),Z,t("a",{href:e.url,target:"_blank",class:"blue"},o(e.url),9,q)]),t("div",{class:u(e.Branch?"main":"hidden")},[i("分支:"),K,t("span",O,o(e.Branch||""),1)],2),t("div",{class:u(e.Hash?"main":"hidden")},[i(o(e.gitlab?"HASH(点击可访问commit)":"HASH")+":",1),Q,t("a",{href:e.gitlab?`${e.gitlab}/commit/${e.Hash}`:"#",target:"_blank",class:"blue"},o(e.Hash.slice(0,10)),9,X)],2),t("div",{class:u(e.CommitUser?"main flex items-center":"hidden")},[i("发布者:"),tt,t("span",et,o(e.CommitUser||""),1)],2),t("div",{class:u(e.CommitContent?"main":"hidden")},[i("发布内容:"),st,t("span",nt,o(e.CommitContent||""),1)],2),t("div",ot,[i("发布时间:"),lt,t("span",at,o(e.time||""),1)])])),[[N,c(B)(e.name)]])),128))]),t("div",rt,[t("div",it,[ct,t("nav",dt,[t("div",null,[t("a",{class:u(c(d)==0?"border-blue-500 text-blue-500 w-full font-thin uppercase  flex items-center p-2 my-1 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4":"w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-2 my-1 transition-colors duration-200 justify-start hover:text-blue-500"),onClick:r[0]||(r[0]=e=>h(0,null))},pt,2),(p(!0),_(b,null,k(c(v),(e,a)=>(p(),_("a",{class:u(c(d)==a+1?"border-blue-500 text-blue-500 w-full font-thin uppercase  flex items-center p-2 my-1 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4":"w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-2 my-1  transition-colors duration-200 justify-start hover:text-blue-500"),onClick:xt=>h(a+1,e.list),key:a},[t("span",ht,o(e.name),1)],10,_t))),128))])])])])],64))}};const L=l=>($("data-v-02d07284"),l=l(),S(),l),ft={class:"ml-45 mr-5"},gt=L(()=>t("h2",null,[t("span",{class:"text-gradient"},"华通云项目看板")],-1)),bt=L(()=>t("p",{class:"instructions"},[t("strong",null,"你可以:"),i("切换"),t("code",null,"下面环境"),i(" 来进行项目筛选     "),t("strong",null,"也可以:"),i("切换 "),t("code",null,"左侧项目"),i("进行筛选 ")],-1)),mt={role:"list",class:"link-card-grid"},yt={__name:"project",setup(l){let n=x("all");return(v,d)=>(p(),_(b,null,[t("div",ft,[gt,bt,t("ul",mt,[g(y,{title:"测试环境🍀🍀🍀",onClick:d[0]||(d[0]=h=>m(n)?n.value="pre":n="pre"),isactive:c(n)=="pre",body:"点击切换「测试环境🍀🍀🍀」,测试环境包含预发和测试"},null,8,["isactive"]),g(y,{title:"全部环境",onClick:d[1]||(d[1]=h=>m(n)?n.value="all":n="all"),isactive:c(n)=="all",body:"点击切换「全部环境」,这里列举了生成项目的所有可用环境"},null,8,["isactive"]),g(y,{title:"生产环境🔥🔥🔥",onClick:d[2]||(d[2]=h=>m(n)?n.value="prod":n="prod"),isactive:c(n)=="prod",body:"点击切换「生产环境🔥🔥🔥」,正式上线可用的环境"},null,8,["isactive"])])]),g(vt,{env:c(n)},null,8,["env"])],64))}},kt=C(yt,[["__scopeId","data-v-02d07284"]]);export{kt as default};
