import{n as a}from"./currency.ec2e3443.js";import{_ as d}from"./lang.2d0006f0.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{b1 as i,aA as _,aB as e,ao as s,x as f,b8 as m}from"./runtime-core.esm-bundler.d70d6a40.js";const x={name:"ns-sale-card-widget",methods:{__:d,nsCurrency:a},data(){return{report:{}}},mounted(){Dashboard.day.subscribe(o=>{this.report=o})}},u={class:"flex card-widget flex-auto flex-col rounded-lg shadow-lg bg-gradient-to-br from-info-secondary to-info-tertiary px-3 py-5"},h={class:"flex flex-row md:flex-col flex-auto"},b={class:"w-1/2 md:w-full flex md:flex-col md:items-start items-center justify-center"},p={class:"flex justify-between w-full items-center"},y={class:"font-bold hidden text-right md:inline-block"},g={class:"text-2xl font-black"},v={class:"w-1/2 md:w-full flex flex-col px-2 justify-end items-end"},w={class:"font-bold inline-block text-right md:hidden"},k={class:"text-xs text-right"};function C(o,n,B,S,r,t){const l=m("ns-close-button");return i(),_("div",u,[e("div",h,[e("div",b,[e("div",p,[e("h6",y,s(t.__("Total Sales")),1),e("div",null,[f(l,{class:"border-info-secondary",onClick:n[0]||(n[0]=j=>o.$emit("onRemove"))})])]),e("h3",g,s(t.nsCurrency(r.report.total_income||0,"abbreviate")),1)]),e("div",v,[e("h6",w,s(t.__("Total Sales")),1),e("h4",k,"+"+s(t.nsCurrency(r.report.day_income||0))+" "+s(t.__("Today")),1)])])])}var A=c(x,[["render",C]]);export{A as default};
