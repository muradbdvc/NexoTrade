import{n as d}from"./currency.ec2e3443.js";import{_ as a}from"./lang.2d0006f0.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{b1 as i,aA as _,aB as e,ao as t,x as f,b8 as m}from"./runtime-core.esm-bundler.d70d6a40.js";const x={name:"ns-sale-card-widget",methods:{__:a,nsCurrency:d},data(){return{report:{}}},mounted(){Dashboard.day.subscribe(o=>{this.report=o})}},u={class:"flex card-widget flex-auto flex-col rounded-lg shadow-lg bg-gradient-to-br from-indigo-400 to-indigo-600 px-3 py-5"},h={class:"flex flex-row md:flex-col flex-auto"},p={class:"w-1/2 md:w-full flex md:flex-col md:items-start items-center justify-center"},b={class:"flex justify-between w-full items-center"},g={class:"font-bold hidden text-right md:inline-block"},y={class:"text-2xl font-black"},v={class:"w-1/2 md:w-full flex flex-col px-2 justify-end items-end"},w={class:"font-bold inline-block text-right md:hidden"},k={class:"text-xs text-right"};function C(o,n,B,E,r,s){const l=m("ns-close-button");return i(),_("div",u,[e("div",h,[e("div",p,[e("div",b,[e("h6",g,t(s.__("Expenses")),1),e("div",null,[f(l,{class:"border-gray-400",onClick:n[0]||(n[0]=j=>o.$emit("onRemove"))})])]),e("h3",y,t(s.nsCurrency(r.report.total_expenses||0,"abbreviate")),1)]),e("div",v,[e("h6",w,t(s.__("Expenses")),1),e("h4",k,"+"+t(s.nsCurrency(r.report.day_expenses||0))+" "+t(s.__("Today")),1)])])])}var R=c(x,[["render",C]]);export{R as default};
