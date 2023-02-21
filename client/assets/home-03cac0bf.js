import{u as D,r as d,f as S,a as A,c as E,b as s,t as r,d as c,n as $,g as R,v as T,e as q,h as e,i}from"./index-c614ad14.js";import{t as N}from"./common-f91a9924.js";const B={class:"main-index logged-in"},I=s("div",{id:"app-background"},[s("div",{id:"app-background-image",class:"background-image"})],-1),j={id:"app-menu"},M={id:"app-menu-content-wrapper"},O={id:"app-menu-content"},U={id:"app-menu-content-header"},F={class:"app-menu-content-header-section"},H={id:"app-menu-info",class:"info"},J={class:"time"},L={class:"weather"},V={class:"weather-temperature-value"},X={class:"reminder"},z={class:"reminder-text"},G={class:"reminder-time"},P=s("button",{id:"sign-out-button",class:"user-status-button clear-button",type:"button"},[s("i",{class:"i-uil-exit"})],-1),W=[P],Y={class:"scrollable-component",id:"quick-nav"},K=s("span",{class:"quick-nav-item-label"},"天气",-1),Q=[K],Z=s("span",{class:"quick-nav-item-label"},"工具",-1),ss=[Z],as=s("span",{class:"quick-nav-item-label"},"应用",-1),ts=[as],es=s("span",{class:"quick-nav-item-label"},"链接",-1),ns=[es],is=s("i",{class:"i-uil-setting"},null,-1),os=s("span",null,"设置",-1),cs=[is,os],ds=i('<div id="weather-section" class="menu-section"><div class="rainbow-container" id="weather_id"><i class="rainbow"></i></div><div class="menu-section-title"><span class="menu-section-title-text">最近的天气如何?</span></div><div class="scrollable-component menu-section-content"><div class="day-card"><div class="day-card-content"><span class="day-weather-temperature">66<span class="day-weather-temperature-unit">°C</span></span><i class="day-weather-icon sun"></i><span class="day-name">Mon</span></div></div><div class="day-card"><div class="day-card-content"><span class="day-weather-temperature">74<span class="day-weather-temperature-unit">°C</span></span><i class="day-weather-icon cloudy"></i><span class="day-name">Tues</span></div></div><div class="day-card"><div class="day-card-content"><span class="day-weather-temperature">66<span class="day-weather-temperature-unit">°C</span></span><i class="day-weather-icon rainy"></i><span class="day-name">Wed</span></div></div><div class="day-card"><div class="day-card-content"><span class="day-weather-temperature">75<span class="day-weather-temperature-unit">°C</span></span><i class="day-weather-icon breeze"></i><span class="day-name">Thurs</span></div></div><div class="day-card"><div class="day-card-content"><span class="day-weather-temperature">60<span class="day-weather-temperature-unit">°C</span></span><i class="day-weather-icon starry"></i><span class="day-name">Fri</span></div></div><div class="day-card"><div class="day-card-content"><span class="day-weather-temperature">60<span class="day-weather-temperature-unit">°C</span></span><i class="day-weather-icon thunder"></i><span class="day-name">Sat</span></div></div><div class="day-card"><div class="day-card-content"><span class="day-weather-temperature">76<span class="day-weather-temperature-unit">°C</span></span><i class="day-weather-icon snowy"></i><span class="day-name">Sun</span></div></div></div></div>',1),ls={id:"restaurants-section",class:"menu-section"},rs=s("div",{class:"menu-section-title",id:"tools_id"},[s("i",{class:"i-uil-briefcase-alt"}),s("span",{class:"menu-section-title-text"},"Get it tools!")],-1),ps={class:"menu-section-content"},us=s("div",{class:"restaurant-card-content"},[s("div",{class:"restaurant-card-content-items"},[s("span",{class:"restaurant-card-title"},"JSON"),s("span",{class:"restaurant-card-desc"},"最好的JSON 格式化工具")])],-1),vs=[us],ms=s("div",{class:"restaurant-card-content"},[s("div",{class:"restaurant-card-content-items"},[s("span",{class:"restaurant-card-title"},"HTML"),s("span",{class:"restaurant-card-desc"},"在线编写HTML")])],-1),hs=[ms],gs=s("div",{class:"restaurant-card-content"},[s("div",{class:"restaurant-card-content-items"},[s("span",{class:"restaurant-card-title"},"TIME"),s("span",{class:"restaurant-card-desc"},"时间和时间戳转换")])],-1),_s=[gs],bs=s("div",{class:"restaurant-card-content"},[s("div",{class:"restaurant-card-content-items"},[s("span",{class:"restaurant-card-title"},"UNIT"),s("span",{class:"restaurant-card-desc"},"长度、面积、气压等单位转换")])],-1),ks=[bs],ys={id:"tools-section",class:"menu-section"},ws=s("div",{class:"menu-section-title",id:"app_id"},[s("i",{class:"i-uil-apps"}),s("span",{class:"menu-section-title-text"},"What's Apps?")],-1),fs={class:"menu-section-content"},Cs=i('<div class="tool-card-content"><div class="tool-card-content-header"><span class="tool-card-label">Translation</span><span class="tool-card-name">翻译</span></div><i class="i-uil-slack-alt text-sky-500"></i></div>',1),xs=i('<div class="tool-card-content"><div class="tool-card-content-header"><span class="tool-card-label">Note</span><span class="tool-card-name">笔记</span></div><i class="i-uil-notes text-red-400"></i></div>',1),Ds={class:"tool-card"},Ss=i('<div class="tool-card-content"><div class="tool-card-content-header"><span class="tool-card-label">Keyboard</span><span class="tool-card-name">键码</span></div><i class="i-uil-keyboard text-green-300"></i></div>',1),As=i('<div class="tool-card-content"><div class="tool-card-content-header"><span class="tool-card-label">ChatGPT</span><span class="tool-card-name">AI 人工智能</span></div><i class="i-uil-robot text-indigo-300"></i></div>',1),Es={class:"tool-card"},$s=i('<div class="tool-card-content"><div class="tool-card-content-header"><span class="tool-card-label">Qrcode</span><span class="tool-card-name">二维码</span></div><i class="i-uil-qrcode-scan text-pink-300"></i></div>',1),Rs=i('<div class="tool-card-content"><div class="tool-card-content-header"><span class="tool-card-label">Terminal</span><span class="tool-card-name">终端</span></div><i class="i-uil-brackets-curly text-amber-200"></i></div>',1),Ts={id:"movies-section",class:"menu-section"},qs=s("div",{class:"menu-section-title",id:"links_id"},[s("i",{class:"i-uil-link"}),s("span",{class:"menu-section-title-text"},"Link it!")],-1),Ns={class:"scrollable-component menu-section-content"},Bs=i('<div class="movie-card-content"><div class="movie-card-info"><span class="movie-card-title">前端文档</span><span class="movie-card-desc">包含代码编写说明,相关使用方法</span></div><i class="i-uil-notebooks text-blue-200"></i></div>',1),Is=i('<div class="movie-card-content"><div class="movie-card-info"><span class="movie-card-title">生成表格</span><span class="movie-card-desc">快速生成表格</span></div><i class="i-uil-table text-purple-200"></i></div>',1),js=i('<div class="movie-card-content"><div class="movie-card-info"><span class="movie-card-title">项目看板</span><span class="movie-card-desc">接入项目发布信息</span></div><i class="i-uil-comparison text-yellow-200"></i></div>',1),Ms=i('<div class="movie-card-content"><div class="movie-card-info"><span class="movie-card-title">项目地址</span><span class="movie-card-desc">此项目GitHub地址</span></div><i class="i-uil-github-alt text-green-200"></i></div>',1),Hs={__name:"home",setup(Os){const m=D();function f(){m.push({name:"Index"})}function o(n){const a=m.resolve({name:n});window.open(a.href,"_blank")}function l(n){document.getElementById(n).scrollIntoView()}function p(n){window.open(n,"_blank")}function C(){let n=new Date,a=n.getHours(),t=n.getMinutes();return a=a.toString().padStart(2,"0"),t=t.toString().padStart(2,"0"),a+":"+t}let h=d(""),g=setInterval(()=>{h.value=C()}),_=d(""),b=d(""),u=d(""),k=d("");async function x(){var y,w;const a=await(await fetch('http://en.wttr.in?format="%C,%t"')).json();_.value=N.iconList[(y=a.split(","))==null?void 0:y[0]]||"i-uil-sun",b.value=(w=a.split(","))==null?void 0:w[1];const v=await(await fetch("https://api.xygeng.cn/one")).json();u.value=v.data.content,k.value=v.data.origin,console.log(v)}return x(),S(()=>{clearInterval(g),g=null}),(n,a)=>(A(),E("div",B,[I,s("div",j,[s("div",M,[s("div",O,[s("div",U,[s("div",F,[s("div",H,[s("span",J,r(c(h)),1),s("span",L,[s("i",{class:$(c(_))},null,2),s("span",V,r(c(b)),1)])]),s("div",X,[R(s("span",z,[q(r(c(u))+" ",1),s("span",G,"--"+r(c(k)),1)],512),[[T,c(u)]])])]),s("div",{class:"app-menu-content-header-section",onClick:f},W)]),s("div",Y,[s("div",{class:"quick-nav-item clear-button",onClick:a[0]||(a[0]=t=>l("weather_id"))},Q),s("div",{class:"quick-nav-item clear-button",onClick:a[1]||(a[1]=t=>l("tools_id"))},ss),s("div",{class:"quick-nav-item clear-button",onClick:a[2]||(a[2]=t=>l("app_id"))},ts),s("div",{class:"quick-nav-item clear-button",onClick:a[3]||(a[3]=t=>l("links_id"))},ns)]),s("a",{id:"youtube-link",class:"clear-button",onClick:a[4]||(a[4]=t=>o("Setting")),target:"_blank"},cs),ds,s("div",ls,[rs,s("div",ps,[s("div",{class:"restaurant-card background-image",onClick:a[5]||(a[5]=t=>o("Json")),style:e({"background-image":"url(https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhBrJam-help9UezO/root/content)"})},vs,4),s("div",{class:"restaurant-card background-image",onClick:a[6]||(a[6]=t=>o("Html")),style:e({"background-image":"url(https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhBs-vum1YCsYKacN/root/content)"})},hs,4),s("div",{class:"restaurant-card background-image",style:e({"background-image":"url(https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhByphWP_Xfn9L3um/root/content)"})},_s,4),s("div",{class:"restaurant-card background-image",style:e({"background-image":"url(https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhB3f8xOSgYGOKgo2/root/content)"})},ks,4)])]),s("div",ys,[ws,s("div",fs,[s("div",{class:"tool-card",onClick:a[7]||(a[7]=t=>o("Translate"))},[s("div",{class:"tool-card-background background-image",style:e({"background-image":"url(https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhCt4b2Mv8Dvl4Chp/root/content)"})},null,4),Cs]),s("div",{class:"tool-card",onClick:a[8]||(a[8]=t=>o("Note"))},[s("div",{class:"tool-card-background background-image",style:e({"background-image":"url(https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhCcDs4UvuOvnjZyN/root/content)"})},null,4),xs]),s("div",Ds,[s("div",{class:"tool-card-background background-image",style:e({"background-image":"url(https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhChCpZe2N8lBhq5J/root/content)"})},null,4),Ss]),s("div",{class:"tool-card",onClick:a[9]||(a[9]=t=>o("Chatgpt"))},[s("div",{class:"tool-card-background background-image",style:e({"background-image":"url(https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhCn-AXQgChjEAiWy/root/content)"})},null,4),As]),s("div",Es,[s("div",{class:"tool-card-background background-image",style:e({"background-image":"url(https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhCrkDSSirrrja4fb/root/content)"})},null,4),$s]),s("div",{class:"tool-card",onClick:a[10]||(a[10]=t=>o("Shell"))},[s("div",{class:"tool-card-background background-image",style:e({"background-image":"url(https://api.onedrive.com/v1.0/shares/s!Apf952DEby7RhCa39MbOkUCXstCi/root/content)"})},null,4),Rs])])]),s("div",Ts,[qs,s("div",Ns,[s("div",{id:"movie-card-1",class:"movie-card",onClick:a[11]||(a[11]=t=>p("https://wt-front-end.github.io/wt-docs/"))},[s("div",{class:"movie-card-background background-image",style:e({"background-image":"url(https://www.helloimg.com/images/2023/02/15/oFxVdA.webp)"})},null,4),Bs]),s("div",{id:"movie-card-2",class:"movie-card",onClick:a[12]||(a[12]=t=>p("https://www.jixiaokang.com/black-tool/"))},[s("div",{class:"movie-card-background background-image",style:e({"background-image":"url(https://www.helloimg.com/images/2023/02/15/oFx7XX.webp)"})},null,4),Is]),s("div",{id:"movie-card-3",class:"movie-card",onClick:a[13]||(a[13]=(...t)=>n.handleProject&&n.handleProject(...t))},[s("div",{class:"movie-card-background background-image",style:e({"background-image":"url(https://www.helloimg.com/images/2023/02/15/oFxI8M.webp)"})},null,4),js]),s("div",{id:"movie-card-4",class:"movie-card",onClick:a[14]||(a[14]=t=>p("https://github.com/wt-front-end/wt-cli"))},[s("div",{class:"movie-card-background background-image",style:e({"background-image":"url(https://www.helloimg.com/images/2023/02/15/oFxQcY.webp)"})},null,4),Ms])])])])])])]))}};export{Hs as default};
