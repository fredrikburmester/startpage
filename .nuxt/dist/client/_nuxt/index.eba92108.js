import{a as Z,h as c,q as J,s as K,w as L,u as E,v as Q,i as k,e as B,x as W,o as m,k as x,y as o,m as R,z as ee,A as H,t as b,B as P,C as A,D as I,E as te,F as z,c as j,G as F,T as X,H as q,J as G,K as M,L as N,M as ne,N as ae,O as oe,P as se,Q as U,R as le}from"./entry.29484125.js";import re from"./Icon.15a25d2b.js";import"./_plugin-vue_export-helper.a1a6add7.js";const ce=()=>null;function ie(...s){var p,_,C,d,f,T,S,D,h;const a=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(a);let[e,r,n={}]=s;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof r!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");n.server=(p=n.server)!=null?p:!0,n.default=(_=n.default)!=null?_:ce,n.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),n.lazy=(d=(C=n.lazy)!=null?C:n.defer)!=null?d:!1,n.initialCache=(f=n.initialCache)!=null?f:!0,n.immediate=(T=n.immediate)!=null?T:!0;const t=Z(),i=()=>(t.isHydrating||n.initialCache)&&t.payload.data[e]!==void 0;t._asyncData[e]||(t._asyncData[e]={data:c(i()?t.payload.data[e]:(D=(S=n.default)==null?void 0:S.call(n))!=null?D:null),pending:c(!i()),error:c((h=t.payload._errors[e])!=null?h:null)});const l={...t._asyncData[e]};l.refresh=l.execute=(w={})=>{if(t._asyncDataPromises[e]){if(w.dedupe===!1)return t._asyncDataPromises[e];t._asyncDataPromises[e].cancelled=!0}if(w._initial&&i())return t.payload.data[e];l.pending.value=!0;const $=new Promise((v,O)=>{try{v(r(t))}catch(V){O(V)}}).then(v=>{if($.cancelled)return t._asyncDataPromises[e];n.transform&&(v=n.transform(v)),n.pick&&(v=ue(v,n.pick)),l.data.value=v,l.error.value=null}).catch(v=>{var O,V;if($.cancelled)return t._asyncDataPromises[e];l.error.value=v,l.data.value=E((V=(O=n.default)==null?void 0:O.call(n))!=null?V:null)}).finally(()=>{$.cancelled||(l.pending.value=!1,t.payload.data[e]=l.data.value,l.error.value&&(t.payload._errors[e]=!0),delete t._asyncDataPromises[e])});return t._asyncDataPromises[e]=$,t._asyncDataPromises[e]};const u=()=>l.refresh({_initial:!0}),g=n.server!==!1&&t.payload.serverRendered;{const w=Q();if(w&&!w._nuxtOnBeforeMountCbs){w._nuxtOnBeforeMountCbs=[];const v=w._nuxtOnBeforeMountCbs;w&&(J(()=>{v.forEach(O=>{O()}),v.splice(0,v.length)}),K(()=>v.splice(0,v.length)))}g&&t.isHydrating&&e in t.payload.data?l.pending.value=!1:w&&(t.payload.serverRendered&&t.isHydrating||n.lazy)&&n.immediate?w._nuxtOnBeforeMountCbs.push(u):n.immediate&&u(),n.watch&&L(n.watch,()=>l.refresh());const $=t.hook("app:data:refresh",v=>{if(!v||v.includes(e))return l.refresh()});w&&K($)}const y=Promise.resolve(t._asyncDataPromises[e]).then(()=>l);return Object.assign(y,l),y}function ue(s,a){const e={};for(const r of a)e[r]=s[r];return e}function Y(s,a,e){const[r={},n]=typeof a=="string"?[{},a]:[a,e],t=r.key||n;if(!t||typeof t!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+t);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const i="$f"+t,l=k(()=>{let $=s;return typeof $=="function"&&($=$()),E($)}),{server:u,lazy:g,default:y,transform:p,pick:_,watch:C,initialCache:d,immediate:f,...T}=r,S={...T,cache:typeof r.cache=="boolean"?void 0:r.cache},D={server:u,lazy:g,default:y,transform:p,pick:_,initialCache:d,immediate:f,watch:[l,...C||[]]};let h;return ie(i,()=>{var $;return($=h==null?void 0:h.abort)==null||$.call(h),h=typeof AbortController<"u"?new AbortController:{},$fetch(l.value,{signal:h.signal,...S})},D)}const de={style:{"max-height":"100%"},class:"rounded-3xl max-h-[calc(30vh)] flex justify-items-center items-center"},me=["src"],pe=B({__name:"ImageComponent",setup(s){const a=["https://mj-gallery.com/2812b085-5451-4cfe-a511-b797a8adb6fb/grid_0.png","https://mj-gallery.com/0edf827b-e308-4521-ba93-90e498cfe48b/grid_0.png","https://mj-gallery.com/271d74ce-349e-4865-a18e-0438845a0bb4/grid_0.png","https://mj-gallery.com/b79206ba-8edf-4dec-bd47-e7fb3bc0d368/grid_0.png","https://mj-gallery.com/7bf4774a-985d-4244-a46d-d05c859b6920/grid_0.png","https://mj-gallery.com/62308fbb-5274-421d-b7ae-84b89e249428/grid_0.png","https://mj-gallery.com/62d7898a-0d04-41b2-8091-f08576a643f8/grid_0.png","https://mj-gallery.com/83283aaa-44db-4f5c-b5e9-8a5aa5559a9d/grid_0.png","https://mj-gallery.com/f7b965ff-71eb-4e75-b788-1651c20cdcd5/grid_0.png","https://mj-gallery.com/c4bd6b31-5824-4f86-a6a1-9c4408f7c091/grid_0.png","https://mj-gallery.com/c30016e1-ca57-4b19-840b-21b5e9c05a83/grid_0.png","https://mj-gallery.com/b2f7ecab-725a-476b-9e6d-d08f535f0d4e/grid_0.png","https://mj-gallery.com/47ef2540-f911-41f6-8a68-75b49be79a2d/grid_0.png","https://mj-gallery.com/f2e9fd82-a879-4c63-8827-a0e316d669f9/grid_0.png","https://mj-gallery.com/473c2fdd-8207-4ddb-bd20-ffa0833cdca2/grid_0.png","https://mj-gallery.com/8009e2a6-062a-4057-bbf6-bdcb0508d558/grid_0.png","https://mj-gallery.com/b0129365-3bac-453b-a198-9bc3ce176b98/grid_0.png","https://mj-gallery.com/0c6b3646-c95e-4e10-b486-3276c2cd0a7b/grid_0.png"],e=W(),r=()=>e.image!==""?e.image:a[Math.floor(Math.random()*a.length)],n=c(r()),t=c(!0),i=c(e.getImageOpacity);return L(()=>e.image,()=>{n.value=r()}),L(()=>e.imageOpacity,()=>{i.value=e.getImageOpacity}),(l,u)=>(m(),x("div",de,[o("img",{class:"w-100 h-100 object-contain rounded-3xl",style:R(`opacity: ${i.value/100}`),onLoad:u[0]||(u[0]=g=>t.value=!1),src:n.value,alt:"image"},null,44,me)]))}}),fe={key:0,class:"flex flex-row justify-items-center items-center capitalize space-x-4"},_e=["src"],ge={class:"opacity-50"},he={class:"flex flex-row place-content-start items-start"},ye={class:"text-2xl"},ve=o("span",{class:"text-sm"},"\xB0C",-1),xe=B({__name:"WeatherComponent",setup(s){const a=ee(),e=c(k(()=>a.token)),r=c(k(()=>a.lat)),n=c(k(()=>a.lon)),t=c(null),i=c(""),l=c(!1),u=async()=>{if(e.value){const g="https://api.openweathermap.org/data/2.5/weather?",{data:y}=await Y(`${g}lat=${r.value}&lon=${n.value}&appid=${e.value}&units=metric`,"$qaDAzZ5rpf");t.value=y.value,i.value="http://openweathermap.org/img/w/"+t.value.weather[0].icon+".png",l.value=!0}};return H(()=>{u()}),L(()=>a.token,()=>{u()}),L(()=>a.lat,()=>{u()}),L(()=>a.lon,()=>{u()}),setInterval(()=>{u()},6e5),(g,y)=>l.value?(m(),x("div",fe,[o("img",{src:i.value,alt:"Weather icon"},null,8,_e),o("div",null,[o("p",null,b(t.value.weather[0].description),1),o("p",ge,b(t.value.name),1)]),o("div",he,[o("span",ye,b(parseInt(t.value.main.temp)),1),ve])])):P("",!0)}}),be=o("span",{class:"text-xs ml-6 opacity-30"},"Search:",-1),ke={class:"flex flex-row items-center p-2 rounded-full bg-neutral glass opacity-75 border-0 hover:bg-neutral hover:opacity-60 transition-all"},we=["onKeyup"],$e=B({__name:"SearchBar",setup(s){const a=c(""),e=c(null),r=n=>{n.keyCode===13&&a.value!==""&&(location.href=`https://google.com/search?q=${a.value}`)};return(n,t)=>(m(),x("div",null,[be,o("div",ke,[A(o("input",{autofocus:"",ref_key:"search",ref:e,"onUpdate:modelValue":t[0]||(t[0]=i=>a.value=i),type:"text",class:"ml-4 text-start text-neutral-content bg-transparent border-none appearance-none outline-none focus:outline-none text-3xl font-bold w-full",onKeyup:te(r,["enter"])},null,40,we),[[I,a.value]])])]))}}),Ce={class:"countdown font-mono text-6xl p-0 text-primary"},De=B({__name:"ClockComponent",setup(s){const a=c(null),e=c(null),r=c(null);return setInterval(()=>{const t=new Date,i=t.getHours(),l=t.getMinutes(),u=t.getSeconds();a.value.style=i<10?`--value: 0${i}`:`--value: ${i.toString()}`,e.value.style=l<10?`--value: 0${l}`:`--value: ${l.toString()}`,r.value.style=u<10?`--value: 0${u}`:`--value: ${u.toString()}`},500),(t,i)=>(m(),x("span",Ce,[o("span",{ref_key:"hours",ref:a},null,512),z(": "),o("span",{ref_key:"minutes",ref:e},null,512),z(": "),o("span",{ref_key:"seconds",ref:r},null,512)]))}}),Te=B({__name:"DateComponent",setup(s){const a=c(null),e=()=>{const n=new Date,t=n.toLocaleString("en-us",{weekday:"long"}),i=n.getDate();return`${t} ${i}`},r=k(()=>e());return(n,t)=>(m(),x("p",{class:"text-xl",ref_key:"dateRef",ref:a},b(E(r)),513))}}),Se={class:"modal modal-bottom sm:modal-middle z-50 fixed top-0 left-0 w-screen h-screen visible opacity-100 pointer-events-auto"},Be={class:"modal-box"},je={class:"font-bold text-lg"},Pe={class:"py-4"},Ee={class:"form-control w-full max-w-xs"},Oe={class:"modal-action"},Le=B({__name:"ModalComponent",props:{onConfirm:null,onClose:null,open:{type:Boolean},confirm:null,cancel:null},setup(s){return(a,e)=>(m(),j(X,{to:"body"},[o("div",Se,[o("div",Be,[o("h3",je,[F(a.$slots,"title")]),o("p",Pe,[F(a.$slots,"description")]),o("div",Ee,[F(a.$slots,"form")]),o("div",Oe,[o("label",{class:"btn",onClick:e[0]||(e[0]=(...r)=>s.onClose&&s.onClose(...r))},b(s.cancel),1),o("label",{class:"btn btn-secondary",onClick:e[1]||(e[1]=(...r)=>s.onConfirm&&s.onConfirm(...r))},b(s.confirm),1)])])])]))}}),Me={class:"font-bold"},Ne=o("label",{class:"label"},[o("span",{class:"label-text"},"Link name")],-1),Ae=o("label",{class:"label"},[o("span",{class:"label-text"},"Link url")],-1),Ie=o("label",{class:"label"},[o("span",{class:"label-text"},"Group")],-1),Re={class:"mt-2 flex flex-row flex-wrap"},Ve=["onClick"],Ue=o("label",{class:"label"},[o("span",{class:"label-text"},"Color")],-1),ze={class:"mt-2 flex flex-row flex-wrap"},Fe=["onClick"],Ge=B({__name:"EditLinkModal",props:{link:null,onClose:null},setup(s){const{link:a,onClose:e}=s,r=["Productivity","School","Work","Home","Entertainment","Other"],n=[{name:"Red",color:"#dc2626"},{name:"Blue",color:"#2563eb"},{name:"Green",color:"#059669"},{name:"Yellow",color:"#fbbf24"},{name:"Purple",color:"#8b5cf6"},{name:"Pink",color:"#ec4899"},{name:"Gray",color:"#6b7280"},{name:"Black",color:"#111827"}],t=q(),i=c(a.name),l=c(a.url),u=c(a.color),g=c(a.group),y=()=>{if(t.links.find(_=>_.name===a.name)){const _={name:i.value,url:l.value,color:u.value,group:g.value!==""?g.value:"Other"};t.editLink(a,_)}e()};return(p,_)=>{const C=Le;return m(),j(C,{open:!0,confirm:"Save",cancel:"Cancel",onClose:s.onClose,onConfirm:y},{title:G(()=>[z(" Edit "),o("span",Me,b(s.link.name),1)]),form:G(()=>[Ne,A(o("input",{"onUpdate:modelValue":_[0]||(_[0]=d=>i.value=d),type:"text",placeholder:"(ex. Github)",class:"input input-bordered w-full max-w-xs"},null,512),[[I,i.value]]),Ae,A(o("input",{"onUpdate:modelValue":_[1]||(_[1]=d=>l.value=d),type:"text",placeholder:"(ex. https://github.com)",class:"input input-bordered w-full max-w-xs"},null,512),[[I,l.value]]),Ie,A(o("input",{"onUpdate:modelValue":_[2]||(_[2]=d=>g.value=d),type:"text",placeholder:"(ex. Productivity)",class:"input input-bordered w-full max-w-xs"},null,512),[[I,g.value]]),o("div",Re,[(m(),x(M,null,N(r,d=>o("span",{class:"badge cursor-pointer mr-1 mb-1",onClick:f=>g.value=d},b(d),9,Ve)),64))]),Ue,A(o("input",{"onUpdate:modelValue":_[3]||(_[3]=d=>u.value=d),type:"text",placeholder:"(ex. #FFF000)",class:"input input-bordered w-full max-w-xs"},null,512),[[I,u.value]]),o("div",ze,[o("span",{class:"badge cursor-pointer mr-1 mb-1",onClick:_[4]||(_[4]=d=>u.value="")},"Follow theme"),(m(),x(M,null,N(n,d=>o("span",{class:"badge cursor-pointer mr-1 mb-1",style:R(`background-color: ${d.color}`),onClick:f=>u.value=d.color},b(d.name),13,Fe)),64))])]),_:1},8,["onClose"])}}}),We=o("div",{class:"fixed w-screen h-screen top-0 left-0"},null,-1),He=["onClick"],qe=B({__name:"ContextMenu",props:{x:null,y:null,actions:null},emits:["close"],setup(s,{emit:a}){const e=s,r=c(null),{right:n,width:t}=ne(r),{width:i}=ae(),l=k(()=>({top:e.y+"px",left:e.x+"px"}));return H(()=>{n.value>i.value&&r.value.setAttribute("style",`top: ${e.y}px; left: ${e.x-t.value}px`)}),oe(r,()=>a("close")),(u,g)=>(m(),j(X,{to:"body"},[We,o("div",{ref_key:"target",ref:r,class:"bg-transparent rounded-xl shadow fixed top-0 left-0 flex flex-col text-start items-start",style:R(E(l))},[(m(!0),x(M,null,N(s.actions,y=>(m(),x("button",{class:"[&:nth-child(1)]:rounded-b-none [&:last-child]:rounded-t-none btn btn-sm bg-neutral hover:bg-neutral-focus text-base text-start flex-1 w-32 justify-start rounded-xl",key:y.name,onClick:y.fn},b(y.name),9,He))),128))],4)]))}}),Ke={class:"hidden group-hover:flex ml-2 items-center"},Xe=B({__name:"LinkBadge",props:{link:null},setup(s){const{link:a}=s,{x:e,y:r}=se(),n=c(0),t=c(0),i=q(),l=c(!1),u=c(!1),g=c(!1),y=[{name:"Edit",fn:()=>l.value=!0},{name:"Remove",fn:()=>i.removeLinkByName(a.name)}],p=()=>{l.value=!1},_=d=>{d.preventDefault(),n.value=e.value,t.value=r.value,g.value=!0},C=k(()=>a.color!==""&&a.color!==void 0&&a.color!==null?{backgroundColor:a.color}:{});return(d,f)=>{const T=re,S=le,D=Ge,h=qe;return m(),x("div",null,[u.value?P("",!0):(m(),j(S,{key:0,to:s.link.url,onContextmenu:f[0]||(f[0]=w=>_(w))},{default:G(()=>[o("div",{class:"whitespace-nowrap flex items-center group badge bg-primary p-4 m-1 text-center border-0 text-white cursor-pointer hover:opacity-80 overflow-hidden",style:R(E(C))},[z(b(s.link.name)+" ",1),o("span",Ke,[U(T,{name:"ei:external-link"})])],4)]),_:1},8,["to"])),l.value?(m(),j(D,{key:1,link:s.link,onClose:p},null,8,["link"])):P("",!0),g.value?(m(),j(h,{key:2,x:n.value,y:t.value,onClose:f[1]||(f[1]=w=>g.value=!1),actions:y},null,8,["x","y"])):P("",!0)])}}}),Ye=""+new URL("plex.d89dcfe5.jpg",import.meta.url).href,Ze={class:"grid grid-cols-1 lg:grid-cols-2 gap-4"},Je=o("img",{src:Ye,alt:"",class:"w-12 h-12"},null,-1),Qe={class:"flex flex-col text-white"},et={class:"text-xs"},tt={class:"font-bold"},nt={class:"text-xs opacity-50"},at=B({__name:"PlexSessionsComponent",setup(s){const a=W(),e=c(k(()=>a.plexURL)),r=c(k(()=>a.plexToken)),n=c(k(()=>a.plexUpdateInterval*1e3)),t=c(0),i=c([]),l=c("/status/sessions"),u=async()=>{const{data:g}=await Y(e.value+l.value+"?X-Plex-Token="+r.value,{initialCache:!1},"$N6ZBp4D7HI");if(!window.DOMParser||!g)return;const p=new DOMParser().parseFromString(g.value,"text/xml"),_=p.getElementsByTagName("Track").length,C=p.getElementsByTagName("Video").length;t.value=_+C,i.value=[];let d=0;for(let f=0;f<_;f++){const T=p.getElementsByTagName("Track")[f].getAttribute("grandparentTitle"),S=p.getElementsByTagName("Track")[f].getAttribute("parentTitle"),D=p.getElementsByTagName("Track")[f].getAttribute("librarySectionTitle"),h=p.getElementsByTagName("Track")[f].getAttribute("parentThumb");i.value.push({id:d,artist:T,title:S,type:D,art:h}),d++}for(let f=0;f<C;f++){const T=p.getElementsByTagName("Video")[f].getAttribute("grandparentTitle"),S=p.getElementsByTagName("Video")[f].getAttribute("title"),D=p.getElementsByTagName("Video")[f].getAttribute("librarySectionTitle"),h=p.getElementsByTagName("Video")[f].getAttribute("art");i.value.push({id:d,artist:T||"",title:S,type:D,art:h}),d++}};return H(()=>{u(),setInterval(()=>{u()},n.value)}),(g,y)=>(m(),x("div",Ze,[(m(!0),x(M,null,N(i.value,p=>(m(),x("div",{class:"bg-neutral rounded-xl p-4 flex flex-row space-x-4",key:p.id,style:R(`background: linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(${e.value+p.art+"?X-Plex-Token="+r.value}); background-size: cover;`)},[Je,o("div",Qe,[o("span",et,b(p.artist),1),o("span",tt,b(p.title),1),o("span",nt,b(p.type),1)])],4))),128))]))}}),ot=()=>{const s=new Date().getHours();return s<3||s>23?"Good night":s<12?"Good morning":s<18?"Good afternoon":"Good evening"},st={class:"grid grid-cols-1 md:place-items-center justify-around md:px-24 max-w-scren h-screen"},lt={class:"grid grid-cols-1 md:grid-cols-6 md:grid-rows-1 items-center gap-2 md:gap-16 py-16 xl:py-24 max-h-screen"},rt={class:"flex flex-col space-y-4 min-w-[calc(50%)] items-start mt-4 md:mt-0 justify-between md:col-span-4 self-start"},ct={class:"font-bold text-4xl md:text-5xl"},it={class:"flex flex-col flex-wrap justify-items-start mr-4"},ut={class:"text-xl"},ft=B({__name:"index",setup(s){const a=q(),e=W(),r=c(k(()=>a.getUniqueGroups)),n=c(k(()=>e.username)),t=c(k(()=>a.links)),i=c(k(()=>e.searchbar)),l=c(k(()=>e.showDate)),u=c(k(()=>e.showClock));return(g,y)=>{const p=pe,_=xe,C=$e,d=De,f=Te,T=Xe,S=at;return m(),x("div",st,[o("div",lt,[U(p,{class:"overflow-clip h-[calc(40vh)] md:h-full md:col-span-2"}),o("div",rt,[U(_),i.value?(m(),j(C,{key:0})):P("",!0),o("h1",ct,b(E(ot)())+" "+b(n.value),1),u.value?(m(),j(d,{key:1})):P("",!0),l.value?(m(),j(f,{key:2})):P("",!0),(m(),x("div",{class:"flex flex-row overflow-x-scroll pt-2",style:{"max-width":"-webkit-fill-available"},key:E(a).linkChanged},[(m(!0),x(M,null,N(r.value,D=>(m(),x("div",it,[o("h1",ut,b(D),1),(m(!0),x(M,null,N(t.value.filter(h=>h.group==D),h=>(m(),j(T,{key:h.name,link:h},null,8,["link"]))),128))]))),256))])),U(S,{class:"mt-auto"})])])])}}});export{ft as default};
