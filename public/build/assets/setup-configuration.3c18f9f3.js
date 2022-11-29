import{F as h,b as m,n as p}from"./bootstrap.ce8e0264.js";import{n as g}from"./setup.a0d5dcd7.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";import{b1 as i,aA as t,ay as a,az as r,aB as o,K as _,b6 as y,x as w,br as k,b8 as n,aF as C}from"./runtime-core.esm-bundler.d70d6a40.js";import"./lang.2d0006f0.js";import"./runtime-dom.esm-bundler.672daa05.js";import"./preload-helper.15853ff5.js";import"./vue-router.dd08a92b.js";import"./components.6b1fa4e4.js";import"./ns-alert-popup.98b34a4a.js";import"./ns-avatar-image.d3cedf0f.js";import"./index.es.f7e98ba1.js";import"./vue-upload-component.9d9b1493.js";import"./vue.runtime.esm-bundler.4d73455d.js";import"./ns-pos-confirm-popup.6352ee90.js";import"./ns-notice.cd816d9e.js";import"./ns-media.56e6d45d.js";import"./ns-numpad.5d6ab815.js";import"./ns-numpad-plus.e24b727a.js";import"./ns-pos-loading-popup.136099e6.js";import"./ns-paginate.a2759a76.js";import"./ns-prompt-popup.b91e58a9.js";const F={data:()=>({form:new h,fields:[],processing:!1,steps:[],failure:0,maxFailure:2}),methods:{validate(){},verifyDBConnectivity(){},saveConfiguration(e){return this.form.disableFields(this.fields),this.processing=!0,m.post("/api/nexopos/v4/setup/configuration",this.form.getValue(this.fields)).subscribe(s=>{document.location="/sign-in"},s=>{this.processing=!1,this.form.enableFields(this.fields),this.form.triggerFieldsErrors(this.fields,s.data),p.error(s.message,"OK").subscribe()})},checkDatabase(){m.get("/api/nexopos/v4/setup/database").subscribe(e=>{this.fields=this.form.createFields([{label:"Application",description:"That is the application name.",name:"ns_store_name",validation:"required"},{label:"Username",description:"Provide the administrator username.",name:"admin_username",validation:"required"},{label:"Email",description:"Provide the administrator email.",name:"admin_email",validation:"required"},{label:"Password",type:"password",description:"What should be the password required for authentication.",name:"password",validation:"required"},{label:"Confirm Password",type:"password",description:"Should be the same as the password above.",name:"confirm_password",validation:"required"}])},e=>{console.log(e),g.push("/database"),p.error("You need to define database settings","OKAY",{duration:3e3}).subscribe()})}},mounted(){this.checkDatabase()}},x={key:1,class:"bg-white rounded shadow my-2"},B={class:"welcome-box border-b border-gray-300 p-3 text-gray-700"},q={class:"bg-gray-200 p-3 flex justify-between items-center"};function V(e,s,N,P,$,u){const d=n("ns-spinner"),c=n("ns-field"),f=n("ns-button");return i(),t("div",null,[e.fields.length===0?(i(),a(d,{key:0,size:"12",border:"4",animation:"fast"})):r("",!0),e.fields.length>0?(i(),t("div",x,[o("div",B,[(i(!0),t(_,null,y(e.fields,(l,b)=>(i(),a(c,{key:b,field:l},null,8,["field"]))),128))]),o("div",q,[o("div",null,[e.processing?(i(),a(d,{key:0,size:"8",border:"4"})):r("",!0)]),w(f,{disabled:e.processing,onClick:s[0]||(s[0]=l=>u.saveConfiguration()),type:"info"},{default:k(()=>[C("Create Installation")]),_:1},8,["disabled"])])])):r("",!0)])}var ee=v(F,[["render",V]]);export{ee as default};
