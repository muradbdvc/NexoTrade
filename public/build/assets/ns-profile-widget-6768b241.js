import{n as f}from"./ns-avatar-image-e829aee2.js";import{_ as b,n as h}from"./currency-dc6217f5.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{an as n,af as i,G as l,H as e,c as a,F as g,al as x}from"./npm~@vue~runtime-core_-29a19feb.js";import{V as d}from"./npm~@vue~shared_-951a29c4.js";import"./npm~@dicebear~avatars_-24df7cd3.js";import"./npm~pure-color-28f75675.js";import"./npm~svgson-59868252.js";import"./npm~deep-rename-keys-9802c842.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-8dab041c.js";import"./npm~xml-reader-1f1b3f66.js";import"./npm~eventemitter3-e2795b41.js";import"./npm~xml-lexer-a4e87e97.js";import"./npm~@dicebear~avatars-avataaars-sprites_-796ded10.js";import"./npm~numeral-304d6dd9.js";import"./npm~@ckeditor~ckeditor5-build-classic_-b5d88964.js";import"./npm~currency.js-57f74176.js";import"./npm~@vue~reactivity_-beabd60a.js";const w={name:"ns-profile-widget",components:{nsAvatarImage:f},data(){return{svg:"",user:ns.user,profileDetails:[]}},computed:{avatarUrl(){return this.url.length===0?"":this.url}},mounted(){this.loadUserProfileWidget()},methods:{__:b,nsCurrency:h,loadUserProfileWidget(o){nsHttpClient.get(`/api/reports/cashier-report${o?"?refresh=true":""}`).subscribe(t=>{this.profileDetails=t})}}},y={id:"ns-best-cashiers",class:"flex flex-auto flex-col shadow rounded-lg overflow-hidden"},k={class:"flex-auto"},C={class:"head text-center border-b w-full flex justify-between items-center p-2"},P={class:"flex -mx-1"},D={class:"px-1"},U={class:"px-1"},W={class:"body"},j={class:"h-40 flex items-center justify-center"},B={class:"rounded-full border-4 border-gray-400 bg-white shadow-lg overflow-hidden"},V={class:"border-t border-box-edge"};function $(o,t,F,H,r,c){const m=n("ns-icon-button"),p=n("ns-close-button"),u=n("ns-avatar-image");return i(),l("div",y,[e("div",k,[e("div",C,[e("h5",null,d(c.__("Profile")),1),e("div",P,[e("div",D,[a(m,{"class-name":"la-sync-alt",onClick:t[0]||(t[0]=s=>c.loadUserProfileWidget(!0))})]),e("div",U,[a(p,{onClick:t[1]||(t[1]=s=>o.$emit("onRemove"))})])])]),e("div",W,[e("div",j,[e("div",B,[a(u,{size:32,url:r.user.attributes.avatar_link,name:r.user.username},null,8,["url","name"])])]),e("div",V,[e("ul",null,[(i(!0),l(g,null,x(r.profileDetails,(s,_)=>(i(),l("li",{key:_,class:"border-b border-box-edge p-2 flex justify-between"},[e("span",null,d(s.label),1),e("span",null,d(s.value),1)]))),128))])])])])])}const te=v(w,[["render",$]]);export{te as default};