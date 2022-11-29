import{_ as r}from"./lang.2d0006f0.js";import{F as w,f as F,b as a,c as p,n as l}from"./bootstrap.ce8e0264.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";import{b1 as t,aA as d,aB as s,K as T,b6 as V,az as u,x as f,ao as _,br as b,b8 as c,ay as g,aF as X}from"./runtime-core.esm-bundler.d70d6a40.js";import"./runtime-dom.esm-bundler.672daa05.js";const B={name:"ns-login",data(){return{fields:[],xXsrfToken:null,validation:new w,isSubitting:!1}},mounted(){F([a.get("/api/nexopos/v4/fields/ns.password-lost"),a.get("/sanctum/csrf-cookie")]).subscribe(i=>{this.fields=this.validation.createFields(i[0]),this.xXsrfToken=a.response.config.headers["X-XSRF-TOKEN"],setTimeout(()=>p.doAction("ns-login-mounted",this),100)},i=>{l.error(i.message||r("An unexpected error occured."),r("OK"),{duration:0}).subscribe()})},methods:{__:r,requestRecovery(){if(!this.validation.validateFields(this.fields))return l.error(r("Unable to proceed the form is not valid.")).subscribe();this.validation.disableFields(this.fields),p.applyFilters("ns-password-lost-submit",!0)&&(this.isSubitting=!0,a.post("/auth/password-lost",this.validation.getValue(this.fields),{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe(e=>{l.success(e.message).subscribe(),setTimeout(()=>{document.location=e.data.redirectTo},500)},e=>{this.isSubitting=!1,this.validation.enableFields(this.fields),e.data&&this.validation.triggerFieldsErrors(this.fields,e.data),l.error(e.message).subscribe()}))}}},N={class:"bg-white rounded shadow overflow-hidden transition-all duration-100"},R={class:"p-3 -my-2"},C={key:0,class:"py-2 fade-in-entrance anim-duration-300"},j={key:0,class:"flex items-center justify-center py-10"},E={class:"flex w-full items-center justify-center py-4"},K={href:"/sign-in",class:"hover:underline text-blue-600 text-sm"},z={class:"flex justify-between items-center bg-gray-200 p-3"};function A(i,e,O,q,n,o){const v=c("ns-field"),m=c("ns-spinner"),y=c("ns-button"),k=c("ns-link");return t(),d("div",N,[s("div",R,[n.fields.length>0?(t(),d("div",C,[(t(!0),d(T,null,V(n.fields,(h,x)=>(t(),g(v,{key:x,field:h},null,8,["field"]))),128))])):u("",!0)]),n.fields.length===0?(t(),d("div",j,[f(m,{border:"4",size:"16"})])):u("",!0),s("div",E,[s("a",K,_(o.__("Remember Your Password ?")),1)]),s("div",z,[s("div",null,[f(y,{onClick:e[0]||(e[0]=h=>o.requestRecovery()),class:"justify-between",type:"info"},{default:b(()=>[n.isSubitting?(t(),g(m,{key:0,class:"mr-2",size:"6",border:"2"})):u("",!0),s("span",null,_(o.__("Submit")),1)]),_:1})]),s("div",null,[f(k,{href:"/sign-up",type:"success"},{default:b(()=>[X(_(o.__("Register")),1)]),_:1})])])])}var U=S(B,[["render",A]]);export{U as default};
