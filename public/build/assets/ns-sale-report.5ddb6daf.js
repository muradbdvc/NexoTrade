import{h as p,b as g,n as b}from"./bootstrap.ce8e0264.js";import{b as T,e as C}from"./components.6b1fa4e4.js";import{_ as c}from"./lang.2d0006f0.js";import{n as w}from"./ns-notice.cd816d9e.js";import{n as D}from"./currency.ec2e3443.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";import{b1 as i,aA as n,aB as t,x as v,ao as s,K as h,b6 as m,az as y,b8 as U}from"./runtime-core.esm-bundler.d70d6a40.js";import"./runtime-dom.esm-bundler.672daa05.js";import"./ns-alert-popup.98b34a4a.js";import"./ns-avatar-image.d3cedf0f.js";import"./index.es.f7e98ba1.js";import"./vue-upload-component.9d9b1493.js";import"./vue.runtime.esm-bundler.4d73455d.js";import"./ns-pos-confirm-popup.6352ee90.js";import"./ns-media.56e6d45d.js";import"./ns-numpad.5d6ab815.js";import"./ns-numpad-plus.e24b727a.js";import"./ns-pos-loading-popup.136099e6.js";import"./ns-paginate.a2759a76.js";import"./ns-prompt-popup.b91e58a9.js";const S={name:"ns-sale-report",data(){return{saleReport:"",startDate:p(),endDate:p(),result:[],users:[],ns:window.ns,summary:{},selectedUser:"",reportType:{label:c("Report Type"),name:"reportType",type:"select",value:"categories_report",options:[{label:c("Categories Detailed"),name:"categories_report"},{label:c("Categories Summary"),name:"categories_summary"},{label:c("Products"),name:"products_report"}],description:c("Allow you to choose the report type.")},filterUser:{label:c("Filter User"),name:"filterUser",type:"select",value:"",options:[],description:c("Allow you to choose the report type.")},field:{type:"datetimepicker",value:"2021-02-07",name:"date"}}},components:{nsDatepicker:T,nsDateTimePicker:C},computed:{},methods:{__:c,nsCurrency:D,printSaleReport(){this.$htmlToPaper("sale-report")},setStartDate(d){this.startDate=d.format()},async openSettings(){try{const d=await new Promise((l,a)=>{Popup.show(w,{...this.reportType,resolve:l,reject:a})});this.reportType.value=d[0].name,this.result=[],this.loadReport()}catch{}},async openUserFiltering(){try{const d=await new Promise((l,a)=>{g.get("/api/nexopos/v4/users").subscribe({next:_=>{this.users=_,this.filterUser.options=[{label:c("All Users"),value:""},...this.users.map(r=>({label:r.username,value:r.id}))],Popup.show(w,{...this.filterUser,resolve:l,reject:a})},error:_=>{b.error(c("No user was found for proceeding the filtering.")),a(_)}})});this.selectedUser=d[0].label,this.filterUser.value=d[0].value,this.result=[],this.loadReport()}catch{}},getType(d){const l=this.reportType.options.filter(a=>a.name===d);return l.length>0?l[0].label:c("Unknown")},loadReport(){if(this.startDate===null||this.endDate===null)return b.error(c("Unable to proceed. Select a correct time range.")).subscribe();const d=p(this.startDate);if(p(this.endDate).isBefore(d))return b.error(c("Unable to proceed. The current time range is not valid.")).subscribe();g.post("/api/nexopos/v4/reports/sale-report",{startDate:this.startDate,endDate:this.endDate,type:this.reportType.value,user_id:this.filterUser.value}).subscribe({next:a=>{this.result=a.result,this.summary=a.summary},error:a=>{b.error(a.message).subscribe()}})},computeTotal(d,l){return d.length>0?d.map(a=>parseFloat(a[l])).reduce((a,_)=>a+_):0},setEndDate(d){this.endDate=d.format()}},props:["store-logo","store-name"],mounted(){}},P={id:"report-section",class:"px-4"},R={class:"flex -mx-2"},B={class:"px-2"},F={class:"px-2"},q={class:"px-2"},A=t("i",{class:"las la-sync-alt text-xl"},null,-1),N={class:"pl-2"},j={class:"flex -mx-2"},V={class:"px-2"},E=t("i",{class:"las la-print text-xl"},null,-1),L={class:"pl-2"},M={class:"px-2"},Q=t("i",{class:"las la-cogs text-xl"},null,-1),z={class:"pl-2"},H={class:"px-2"},I=t("i",{class:"las la-user text-xl"},null,-1),K={class:"pl-2"},G={id:"sale-report",class:"anim-duration-500 fade-in-entrance"},J={class:"flex w-full"},O={class:"my-4 flex justify-between w-full"},W={class:"text-secondary"},X={class:"pb-1 border-b border-dashed"},Y={class:"pb-1 border-b border-dashed"},Z={class:"pb-1 border-b border-dashed"},$=["src","alt"],tt={class:"-mx-4 flex md:flex-row flex-col"},et={class:"w-full md:w-1/2 px-4"},st={class:"shadow rounded my-4 ns-box"},rt={class:"border-b ns-box-body"},ot={class:"table ns-table w-full"},lt={class:"text-primary"},dt={class:""},at={width:"200",class:"font-semibold p-2 border text-left bg-info-secondary border-info-primary text-white"},ct={class:"p-2 border text-right border-info-primary"},it={class:""},nt={width:"200",class:"font-semibold p-2 border text-left bg-error-secondary border-error-primary text-white"},_t={class:"p-2 border text-right border-error-primary"},ut={class:""},ht={width:"200",class:"font-semibold p-2 border text-left bg-error-secondary border-error-primary text-white"},pt={class:"p-2 border text-right border-error-primary"},bt={class:""},mt={width:"200",class:"font-semibold p-2 border text-left bg-info-secondary border-info-primary text-white"},yt={class:"p-2 border text-right border-success-primary"},xt={class:""},ft={width:"200",class:"font-semibold p-2 border text-left bg-success-secondary border-success-secondary text-white"},gt={class:"p-2 border text-right border-success-primary"},wt=t("div",{class:"w-full md:w-1/2 px-4"},null,-1),vt={key:0,class:"bg-box-background shadow rounded my-4"},Tt={class:"border-b border-box-edge"},Ct={class:"table ns-table w-full"},Dt={class:"text-primary"},kt={class:"border p-2 text-left"},Ut={width:"150",class:"border p-2"},St={width:"150",class:"border p-2"},Pt={width:"150",class:"border p-2"},Rt={width:"150",class:"border p-2"},Bt={class:"text-primary"},Ft={class:"p-2 border"},qt={class:"p-2 border text-right"},At={class:"p-2 border text-right"},Nt={class:"p-2 border text-right"},jt={class:"p-2 border text-right"},Vt={class:"text-primary font-semibold"},Et=t("td",{class:"p-2 border text-primary"},null,-1),Lt={class:"p-2 border text-right text-primary"},Mt={class:"p-2 border text-right text-primary"},Qt={class:"p-2 border text-right text-primary"},zt={class:"p-2 border text-right text-primary"},Ht={key:1,class:"bg-box-background shadow rounded my-4"},It={class:"border-b border-box-edge"},Kt={class:"table ns-table w-full"},Gt={class:"text-primary"},Jt={class:"border p-2 text-left"},Ot={class:"border p-2 text-left"},Wt={width:"100",class:"border p-2"},Xt={width:"150",class:"border p-2"},Yt={width:"150",class:"border p-2"},Zt={width:"150",class:"border p-2"},$t={class:"text-primary"},te={class:"p-2 border"},ee={class:"p-2 border"},se={class:"p-2 border text-right"},re={class:"p-2 border text-right"},oe={class:"p-2 border text-right"},le={class:"p-2 border text-right"},de={class:"bg-info-primary"},ae={colspan:"2",class:"p-2 border border-info-secondary"},ce={class:"p-2 border text-right border-info-secondary"},ie={class:"p-2 border text-right border-info-secondary"},ne={class:"p-2 border text-right border-info-secondary"},_e={class:"p-2 border text-right border-info-secondary"},ue={class:"text-primary font-semibold"},he=t("td",{colspan:"2",class:"p-2 border text-primary"},null,-1),pe={class:"p-2 border text-right text-primary"},be={class:"p-2 border text-right text-primary"},me={class:"p-2 border text-right text-primary"},ye={class:"p-2 border text-right text-primary"},xe={key:2,class:"bg-box-background shadow rounded my-4"},fe={class:"border-b border-box-edge"},ge={class:"table ns-table w-full"},we={class:"text-primary"},ve={class:"border p-2 text-left"},Te={width:"100",class:"border p-2"},Ce={width:"150",class:"border p-2"},De={width:"150",class:"border p-2"},ke={width:"150",class:"border p-2"},Ue={class:"text-primary"},Se={class:"p-2 border text-left border-info-primary"},Pe={class:"p-2 border text-right border-info-primary"},Re={class:"p-2 border text-right border-info-primary"},Be={class:"p-2 border text-right border-info-primary"},Fe={class:"p-2 border text-right border-info-primary"},qe={class:"text-primary font-semibold"},Ae=t("td",{class:"p-2 border text-primary"},null,-1),Ne={class:"p-2 border text-right text-primary"},je={class:"p-2 border text-right text-primary"},Ve={class:"p-2 border text-right text-primary"},Ee={class:"p-2 border text-right text-primary"};function Le(d,l,a,_,r,e){const f=U("ns-date-time-picker");return i(),n("div",P,[t("div",R,[t("div",B,[v(f,{date:r.startDate,onChange:l[0]||(l[0]=o=>e.setStartDate(o))},null,8,["date"])]),t("div",F,[v(f,{date:r.endDate,onChange:l[1]||(l[1]=o=>e.setEndDate(o))},null,8,["date"])]),t("div",q,[t("button",{onClick:l[2]||(l[2]=o=>e.loadReport()),class:"rounded flex justify-between bg-input-button shadow py-1 items-center text-primary px-2"},[A,t("span",N,s(e.__("Load")),1)])])]),t("div",j,[t("div",V,[t("button",{onClick:l[3]||(l[3]=o=>e.printSaleReport()),class:"rounded flex justify-between bg-input-button shadow py-1 items-center text-primary px-2"},[E,t("span",L,s(e.__("Print")),1)])]),t("div",M,[t("button",{onClick:l[4]||(l[4]=o=>e.openSettings()),class:"rounded flex justify-between bg-input-button shadow py-1 items-center text-primary px-2"},[Q,t("span",z,s(e.__("Type"))+" : "+s(e.getType(r.reportType.value)),1)])]),t("div",H,[t("button",{onClick:l[5]||(l[5]=o=>e.openUserFiltering()),class:"rounded flex justify-between bg-input-button shadow py-1 items-center text-primary px-2"},[I,t("span",K,s(e.__("Filter By User"))+" : @"+s(r.selectedUser||e.__("All Users")),1)])])]),t("div",G,[t("div",J,[t("div",O,[t("div",W,[t("ul",null,[t("li",X,s(e.__("Date : {date}").replace("{date}",r.ns.date.current)),1),t("li",Y,s(e.__("Document : Sale Report")),1),t("li",Z,s(e.__("By : {user}").replace("{user}",r.ns.user.username)),1)])]),t("div",null,[t("img",{class:"w-24",src:d.storeLogo,alt:d.storeName},null,8,$)])])]),t("div",null,[t("div",tt,[t("div",et,[t("div",st,[t("div",rt,[t("table",ot,[t("tbody",lt,[t("tr",dt,[t("td",at,s(e.__("Sub Total")),1),t("td",ct,s(e.nsCurrency(r.summary.subtotal)),1)]),t("tr",it,[t("td",nt,s(e.__("Sales Discounts")),1),t("td",_t,s(e.nsCurrency(r.summary.sales_discounts)),1)]),t("tr",ut,[t("td",ht,s(e.__("Sales Taxes")),1),t("td",pt,s(e.nsCurrency(r.summary.sales_taxes)),1)]),t("tr",bt,[t("td",mt,s(e.__("Shipping")),1),t("td",yt,s(e.nsCurrency(r.summary.shipping)),1)]),t("tr",xt,[t("td",ft,s(e.__("Total")),1),t("td",gt,s(e.nsCurrency(r.summary.total)),1)])])])])])]),wt])]),r.reportType.value==="products_report"?(i(),n("div",vt,[t("div",Tt,[t("table",Ct,[t("thead",Dt,[t("tr",null,[t("th",kt,s(e.__("Products")),1),t("th",Ut,s(e.__("Quantity")),1),t("th",St,s(e.__("Discounts")),1),t("th",Pt,s(e.__("Taxes")),1),t("th",Rt,s(e.__("Total")),1)])]),t("tbody",Bt,[(i(!0),n(h,null,m(r.result,o=>(i(),n("tr",{key:o.id},[t("td",Ft,s(o.name),1),t("td",qt,s(o.quantity),1),t("td",At,s(e.nsCurrency(o.discount)),1),t("td",Nt,s(e.nsCurrency(o.tax_value)),1),t("td",jt,s(e.nsCurrency(o.total_price)),1)]))),128))]),t("tfoot",Vt,[t("tr",null,[Et,t("td",Lt,s(e.computeTotal(r.result,"quantity")),1),t("td",Mt,s(e.nsCurrency(e.computeTotal(r.result,"discount"))),1),t("td",Qt,s(e.nsCurrency(e.computeTotal(r.result,"tax_value"))),1),t("td",zt,s(e.nsCurrency(e.computeTotal(r.result,"total_price"))),1)])])])])])):y("",!0),r.reportType.value==="categories_report"?(i(),n("div",Ht,[t("div",It,[t("table",Kt,[t("thead",Gt,[t("tr",null,[t("th",Jt,s(e.__("Category")),1),t("th",Ot,s(e.__("Product")),1),t("th",Wt,s(e.__("Quantity")),1),t("th",Xt,s(e.__("Discounts")),1),t("th",Yt,s(e.__("Taxes")),1),t("th",Zt,s(e.__("Total")),1)])]),t("tbody",$t,[(i(!0),n(h,null,m(r.result,(o,x)=>(i(),n(h,{key:x},[o.products.length>0?(i(!0),n(h,{key:0},m(o.products,u=>(i(),n("tr",{key:parseInt(o.id+""+u.id)},[t("td",te,s(o.name),1),t("td",ee,s(u.name),1),t("td",se,s(u.quantity),1),t("td",re,s(e.nsCurrency(u.discount)),1),t("td",oe,s(e.nsCurrency(u.tax_value)),1),t("td",le,s(e.nsCurrency(u.total_price)),1)]))),128)):y("",!0),t("tr",de,[t("td",ae,s(o.name),1),t("td",ce,s(e.computeTotal(o.products,"quantity")),1),t("td",ie,s(e.nsCurrency(e.computeTotal(o.products,"discount"))),1),t("td",ne,s(e.nsCurrency(e.computeTotal(o.products,"tax_value"))),1),t("td",_e,s(e.nsCurrency(e.computeTotal(o.products,"total_price"))),1)])],64))),128))]),t("tfoot",ue,[t("tr",null,[he,t("td",pe,s(e.computeTotal(r.result,"total_sold_items")),1),t("td",be,s(e.nsCurrency(e.computeTotal(r.result,"total_discount"))),1),t("td",me,s(e.nsCurrency(e.computeTotal(r.result,"total_tax_value"))),1),t("td",ye,s(e.nsCurrency(e.computeTotal(r.result,"total_price"))),1)])])])])])):y("",!0),r.reportType.value==="categories_summary"?(i(),n("div",xe,[t("div",fe,[t("table",ge,[t("thead",we,[t("tr",null,[t("th",ve,s(e.__("Category")),1),t("th",Te,s(e.__("Quantity")),1),t("th",Ce,s(e.__("Discounts")),1),t("th",De,s(e.__("Taxes")),1),t("th",ke,s(e.__("Total")),1)])]),t("tbody",Ue,[(i(!0),n(h,null,m(r.result,(o,x)=>(i(),n("tr",{key:x,class:""},[t("td",Se,s(o.name),1),t("td",Pe,s(e.computeTotal(o.products,"quantity")),1),t("td",Re,s(e.nsCurrency(e.computeTotal(o.products,"discount"))),1),t("td",Be,s(e.nsCurrency(e.computeTotal(o.products,"tax_value"))),1),t("td",Fe,s(e.nsCurrency(e.computeTotal(o.products,"total_price"))),1)]))),128))]),t("tfoot",qe,[t("tr",null,[Ae,t("td",Ne,s(e.computeTotal(r.result,"total_sold_items")),1),t("td",je,s(e.nsCurrency(e.computeTotal(r.result,"total_discount"))),1),t("td",Ve,s(e.nsCurrency(e.computeTotal(r.result,"total_tax_value"))),1),t("td",Ee,s(e.nsCurrency(e.computeTotal(r.result,"total_price"))),1)])])])])])):y("",!0)])])}var ds=k(S,[["render",Le]]);export{ds as default};
