import{_ as c}from"./currency-dc6217f5.js";import{_ as l}from"./_plugin-vue_export-helper-c27b6911.js";import{af as i,G as n,H as s,A as m,c as u,aH as d,an as f,M as _}from"./npm~@vue~runtime-core_-29a19feb.js";import{V as o,z as h}from"./npm~@vue~shared_-951a29c4.js";import"./npm~numeral-304d6dd9.js";import"./npm~@ckeditor~ckeditor5-build-classic_-b5d88964.js";import"./npm~currency.js-57f74176.js";import"./npm~@vue~reactivity_-beabd60a.js";const x={data(){return{title:"",message:""}},props:["popup"],computed:{size(){return this.popup.params.size||"h-full w-full"}},mounted(){this.title=this.popup.params.title,this.message=this.popup.params.message},methods:{__:c,emitAction(p){this.popup.params.onAction!==void 0&&this.popup.params.onAction(p),this.popup.close()}}},g={class:"flex items-center justify-center flex-col flex-auto p-4"},y={key:0,class:"text-3xl font-body"},w={class:"py-4 text-center"},A={class:"action-buttons flex border-t justify-end items-center p-2"};function b(p,r,k,v,e,t){const a=f("ns-button");return i(),n("div",{id:"alert-popup",class:h([t.size,"w-6/7-screen md:w-4/7-screen lg:w-3/7-screen flex flex-col shadow-lg"])},[s("div",g,[e.title?(i(),n("h2",y,o(e.title),1)):m("",!0),s("p",w,o(e.message),1)]),s("div",A,[u(a,{onClick:r[0]||(r[0]=z=>t.emitAction(!0)),type:"info"},{default:d(()=>[_(o(t.__("Ok")),1)]),_:1})])],2)}const G=l(x,[["render",b]]);export{G as default};