import{t as p,b as d,n as _}from"./bootstrap.ce8e0264.js";import{_ as f}from"./lang.2d0006f0.js";import v from"./ns-pos-confirm-popup.6352ee90.js";import{g as b}from"./components.6b1fa4e4.js";import{b as x}from"./currency.ec2e3443.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";import{b1 as r,aA as c,aB as e,ao as a,az as m,al as k,K as y,b6 as w,b8 as N,x as C}from"./runtime-core.esm-bundler.d70d6a40.js";import"./runtime-dom.esm-bundler.672daa05.js";import"./ns-alert-popup.98b34a4a.js";import"./ns-avatar-image.d3cedf0f.js";import"./index.es.f7e98ba1.js";import"./vue-upload-component.9d9b1493.js";import"./vue.runtime.esm-bundler.4d73455d.js";import"./ns-notice.cd816d9e.js";import"./ns-media.56e6d45d.js";import"./ns-numpad.5d6ab815.js";import"./ns-numpad-plus.e24b727a.js";import"./ns-pos-loading-popup.136099e6.js";import"./ns-paginate.a2759a76.js";import"./ns-prompt-popup.b91e58a9.js";const E={name:"ns-notifications",data(){return{notifications:[],visible:!1,interval:null}},components:{nsCloseButton:b},mounted(){document.addEventListener("click",this.checkClickedItem),ns.websocket.enabled?Echo.private("ns.private-channel").listen("App\\Events\\NotificationDispatchedEvent",t=>{this.pushNotificationIfNew(t.notification)}).listen("App\\Events\\NotificationDeletedEvent",t=>{this.deleteNotificationIfExists(t.notification)}):this.interval=setInterval(()=>{this.loadNotifications()},15e3),this.loadNotifications()},destroyed(){clearInterval(this.interval)},methods:{__:f,timespan:p,nsNumberAbbreviate:x,pushNotificationIfNew(t){this.notifications.filter(s=>s.id===t.id).length>0||this.notifications.push(t)},deleteNotificationIfExists(t){const i=this.notifications.filter(s=>s.id===t.id);if(i.length>0){const s=this.notifications.indexOf(i[0]);this.notifications.splice(s,1)}},deleteAll(){Popup.show(v,{title:f("Confirm Your Action"),message:f("Would you like to clear all the notifications ?"),onAction:t=>{t&&d.delete("/api/nexopos/v4/notifications/all").subscribe(i=>{_.success(i.message).subscribe()})}})},checkClickedItem(t){let i;document.getElementById("notification-center")?i=document.getElementById("notification-center").contains(t.srcElement):i=!1;const s=document.getElementById("notification-button").contains(t.srcElement);!i&&!s&&this.visible&&(this.visible=!1)},loadNotifications(){d.get("/api/nexopos/v4/notifications").subscribe(t=>{this.notifications=t})},triggerLink(t){if(t.url!=="url")return window.open(t.url,"_blank")},closeNotice(t,i){d.delete(`/api/nexopos/v4/notifications/${i.id}`).subscribe(s=>{this.loadNotifications()}),t.stopPropagation()}}},I={id:"notificaton-wrapper"},A={key:0,class:"relative float-right"},B={class:"absolute -ml-6 -mt-8"},j={class:"bg-info-tertiary text-white w-8 h-8 rounded-full text-xs flex items-center justify-center"},z=e("i",{class:"las la-bell"},null,-1),L={key:0,class:"h-0 w-0",id:"notification-center"},P={class:"absolute left-0 top-0 sm:relative w-screen zoom-out-entrance anim-duration-300 h-5/7-screen sm:w-64 sm:h-108 flex flex-row-reverse"},V={class:"z-50 sm:rounded-lg shadow-lg h-full w-full md:mt-2 overflow-y-hidden flex flex-col"},D=e("h3",{class:"font-semibold hover:text-info-primary"},"Close",-1),S=[D],F={class:"overflow-y-auto flex flex-col flex-auto"},H=["onClick"],K={class:"flex items-center justify-between"},O={class:"font-semibold"},W={class:"py-1 text-sm"},Y={class:"flex justify-end"},q={class:"text-xs date"},G={key:0,class:"h-full w-full flex items-center justify-center"},J={class:"flex flex-col items-center"},M=e("i",{class:"las la-laugh-wink text-5xl text-primary"},null,-1),Q={class:"text-secondary text-sm"},R={class:"cursor-pointer clear-all"};function T(t,i,s,U,o,l){const h=N("ns-close-button");return r(),c("div",I,[e("div",{id:"notification-button",onClick:i[0]||(i[0]=n=>o.visible=!o.visible),class:k([o.visible?"panel-visible border-0 shadow-lg":"border panel-hidden","hover:shadow-lg hover:border-opacity-0 rounded-full h-12 w-12 cursor-pointer font-bold text-2xl justify-center items-center flex"])},[o.notifications.length>0?(r(),c("div",A,[e("div",B,[e("div",j,a(l.nsNumberAbbreviate(o.notifications.length,"abbreviate")),1)])])):m("",!0),z],2),o.visible?(r(),c("div",L,[e("div",P,[e("div",V,[e("div",{onClick:i[1]||(i[1]=n=>o.visible=!1),class:"sm:hidden p-2 cursor-pointer flex items-center justify-center border-b border-gray-200"},S),e("div",F,[(r(!0),c(y,null,w(o.notifications,n=>(r(),c("div",{key:n.id,class:"notification-card notice border-b"},[e("div",{class:"p-2 cursor-pointer",onClick:u=>l.triggerLink(n)},[e("div",K,[e("h1",O,a(n.title),1),C(h,{onClick:u=>l.closeNotice(u,n)},null,8,["onClick"])]),e("p",W,a(n.description),1),e("div",Y,[e("span",q,a(l.timespan(n.updated_at)),1)])],8,H)]))),128)),o.notifications.length===0?(r(),c("div",G,[e("div",J,[M,e("p",Q,a(l.__("Nothing to care about !")),1)])])):m("",!0)]),e("div",R,[e("h3",{onClick:i[2]||(i[2]=n=>l.deleteAll()),class:"text-sm p-2 flex items-center justify-center w-full font-semibold"},a(l.__("Clear All")),1)])])])])):m("",!0)])}var vt=g(E,[["render",T]]);export{vt as default};
