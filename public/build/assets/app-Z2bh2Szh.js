import{_ as e}from"./preload-helper-BQ24v_F8.js";import{N as T}from"./ns-hotpress-CiDZwikI.js";import{b as w,n as y,a as I}from"./components-D3ZJWoKw.js";import{c as m,n as L}from"./bootstrap-h44pvWEh.js";import{d as t}from"./runtime-core.esm-bundler-RT2b-_3S.js";import"./ns-alert-popup-SVrn5Xft.js";import"./currency-lOMYG1Wf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ns-avatar-image-CAD6xUGA.js";import"./index.es-Br67aBEV.js";import"./ns-prompt-popup-CS34bXnT.js";function V(o,_){_.forEach(a=>{let r=o.document.createElement("link");r.setAttribute("rel","stylesheet"),r.setAttribute("type","text/css"),r.setAttribute("href",a),o.document.getElementsByTagName("head")[0].appendChild(r)})}const O={install(o,_={}){o.config.globalProperties.$htmlToPaper=(a,r,D=()=>!0)=>{let v="_blank",P=["fullscreen=yes","titlebar=yes","scrollbars=yes"],R=!0,f=[],{name:u=v,specs:i=P,replace:A=R,styles:l=f}=_;r&&(r.name&&(u=r.name),r.specs&&(i=r.specs),r.replace&&(A=r.replace),r.styles&&(l=r.styles)),i=i.length?i.join(","):"";const p=window.document.getElementById(a);if(!p){alert(`Element to print #${a} not found!`);return}const s=window.open("",u,i);return s.document.write(`
          <html>
            <head>
              <title>${window.document.title}</title>
            </head>
            <body>
              ${p.innerHTML}
            </body>
          </html>
        `),V(s,l),setTimeout(()=>{s.document.close(),s.focus(),s.print(),s.close(),D()},1e3),!0}}},S=t(()=>e(()=>import("./rewards-system-B7jb7oVe.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),g=t(()=>e(()=>import("./create-coupons-BfuYJ6KC.js"),__vite__mapDeps([5,1,2,3,4]),import.meta.url)),C=t(()=>e(()=>import("./ns-settings-CUeg0t4W.js"),__vite__mapDeps([6,2,1,3,7,8,4,9,10,11,12]),import.meta.url)),k=t(()=>e(()=>import("./reset-BspUliOp.js"),__vite__mapDeps([13,2,1,3,4]),import.meta.url)),H=t(()=>e(()=>import("./modules-C3Sp3siO.js"),__vite__mapDeps([14,1,2,3,8,4,10,11,12]),import.meta.url)),M=t(()=>e(()=>import("./ns-permissions-4bF-H2rG.js"),__vite__mapDeps([15,1,2,3,4]),import.meta.url)),j=t(()=>e(()=>import("./ns-procurement-YG40zspY.js"),__vite__mapDeps([16,1,2,3,17,11,4,12,18,19,10]),import.meta.url)),N=t(()=>e(()=>import("./manage-products-B2-DbKaf.js"),__vite__mapDeps([17,1,2,3,11,4,12]),import.meta.url)),q=t(()=>e(()=>import("./ns-procurement-invoice-DSSNRCNz.js"),__vite__mapDeps([]),import.meta.url)),x=t(()=>e(()=>import("./ns-notifications-BjomlW3S.js"),__vite__mapDeps([20,1,2,3,11,4,12,7,8,9,10]),import.meta.url)),$=t(()=>e(()=>import("./components-D3ZJWoKw.js").then(o=>o.i),__vite__mapDeps([7,8,2,4,3,9,10,1,11,12]),import.meta.url)),B=t(()=>e(()=>import("./ns-transaction-B6zODSYs.js"),__vite__mapDeps([21,1,2,3,8,4,10,11,12]),import.meta.url)),F=t(()=>e(()=>import("./ns-dashboard-CwoFZ05X.js"),__vite__mapDeps([22,1,2,3,4]),import.meta.url)),Y=t(()=>e(()=>import("./ns-low-stock-report-WsKxXlCs.js"),__vite__mapDeps([23,1,2,3,7,8,4,9,10,11,12,19]),import.meta.url)),z=t(()=>e(()=>import("./ns-sale-report-Cwx0WcHq.js"),__vite__mapDeps([24,1,2,3,7,8,4,9,10,11,12,19]),import.meta.url)),G=t(()=>e(()=>import("./ns-sold-stock-report-DRC40-va.js"),__vite__mapDeps([25,1,2,3,7,8,4,9,10,11,12,18,19]),import.meta.url)),J=t(()=>e(()=>import("./ns-profit-report-C1dSPFWR.js"),__vite__mapDeps([26,1,2,3,7,8,4,9,10,11,12,18,19]),import.meta.url)),K=t(()=>e(()=>import("./ns-stock-combined-report-CSnS7BsK.js"),__vite__mapDeps([27,1,2,3,18,11,4,12,19]),import.meta.url)),Q=t(()=>e(()=>import("./ns-cash-flow-report-BT1bGAca.js"),__vite__mapDeps([28,1,2,3,7,8,4,9,10,11,12]),import.meta.url)),U=t(()=>e(()=>import("./ns-yearly-report-DNfg4je6.js"),__vite__mapDeps([29,1,2,3,7,8,4,9,10,11,12]),import.meta.url)),W=t(()=>e(()=>import("./ns-best-products-report-BGatCUUU.js"),__vite__mapDeps([30,1,2,3,7,8,4,9,10,11,12]),import.meta.url)),X=t(()=>e(()=>import("./ns-payment-types-report-Bix_FSkr.js"),__vite__mapDeps([31,1,2,3,7,8,4,9,10,11,12]),import.meta.url)),Z=t(()=>e(()=>import("./ns-customers-statement-report-DWzLJEA5.js"),__vite__mapDeps([32,2,4,3]),import.meta.url)),ee=t(()=>e(()=>import("./ns-stock-adjustment-HGyDAkTB.js"),__vite__mapDeps([33,1,2,3,34,4,11,12]),import.meta.url)),te=t(()=>e(()=>import("./ns-order-invoice-DoMLCmH7.js"),__vite__mapDeps([35,2,4,3]),import.meta.url)),n=window.nsState,oe=window.nsScreen;nsExtraComponents.nsToken=t(()=>e(()=>import("./ns-token-2mu1upRR.js"),__vite__mapDeps([36,1,2,3,4,10,11,12]),import.meta.url));window.nsHotPress=new T;const d=Object.assign({nsModules:H,nsRewardsSystem:S,nsCreateCoupons:g,nsManageProducts:N,nsSettings:C,nsReset:k,nsPermissions:M,nsProcurement:j,nsProcurementInvoice:q,nsMedia:$,nsTransaction:B,nsDashboard:F,nsNotifications:x,nsSaleReport:z,nsSoldStockReport:G,nsProfitReport:J,nsStockCombinedReport:K,nsCashFlowReport:Q,nsYearlyReport:U,nsPaymentTypesReport:X,nsBestProductsReport:W,nsLowStockReport:Y,nsCustomersStatementReport:Z,nsStockAdjustment:ee,nsOrderInvoice:te,...w},nsExtraComponents);window.nsDashboardAside=m({data(){return{sidebar:"visible",popups:[]}},components:{nsMenu:y,nsSubmenu:I},mounted(){n.subscribe(o=>{o.sidebar&&(this.sidebar=o.sidebar)})}});window.nsDashboardOverlay=m({data(){return{sidebar:null,popups:[]}},components:d,mounted(){n.subscribe(o=>{o.sidebar&&(this.sidebar=o.sidebar)})},methods:{closeMenu(){n.setState({sidebar:this.sidebar==="hidden"?"visible":"hidden"})}}});window.nsDashboardHeader=m({data(){return{menuToggled:!1,sidebar:null}},components:d,methods:{toggleMenu(){this.menuToggled=!this.menuToggled},toggleSideMenu(){["lg","xl"].includes(oe.breakpoint)?n.setState({sidebar:this.sidebar==="hidden"?"visible":"hidden"}):n.setState({sidebar:this.sidebar==="hidden"?"visible":"hidden"})}},mounted(){n.subscribe(o=>{o.sidebar&&(this.sidebar=o.sidebar)})}});window.nsDashboardContent=m({});for(let o in d)window.nsDashboardContent.component(o,d[o]);window.nsDashboardContent.use(O,{styles:Object.values(window.ns.cssFiles)});window.nsComponents=Object.assign(d,w);L.doAction("ns-before-mount");console.log("ns-before-mount");const c=document.querySelector("#dashboard-aside");window.nsDashboardAside&&c&&window.nsDashboardAside.mount(c);const b=document.querySelector("#dashboard-overlay");window.nsDashboardOverlay&&b&&window.nsDashboardOverlay.mount(b);const E=document.querySelector("#dashboard-header");window.nsDashboardHeader&&E&&window.nsDashboardHeader.mount(E);const h=document.querySelector("#dashboard-content");window.nsDashboardContent&&h&&window.nsDashboardContent.mount(h);
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./rewards-system-B7jb7oVe.js","./bootstrap-h44pvWEh.js","./currency-lOMYG1Wf.js","./runtime-core.esm-bundler-RT2b-_3S.js","./_plugin-vue_export-helper-DlAUqK2U.js","./create-coupons-BfuYJ6KC.js","./ns-settings-CUeg0t4W.js","./components-D3ZJWoKw.js","./ns-alert-popup-SVrn5Xft.js","./ns-avatar-image-CAD6xUGA.js","./index.es-Br67aBEV.js","./ns-prompt-popup-CS34bXnT.js","./ns-prompt-popup-BcfgBUqM.css","./reset-BspUliOp.js","./modules-C3Sp3siO.js","./ns-permissions-4bF-H2rG.js","./ns-procurement-YG40zspY.js","./manage-products-B2-DbKaf.js","./select-api-entities-DLAunox8.js","./join-array-DPKtuOQJ.js","./ns-notifications-BjomlW3S.js","./ns-transaction-B6zODSYs.js","./ns-dashboard-CwoFZ05X.js","./ns-low-stock-report-WsKxXlCs.js","./ns-sale-report-Cwx0WcHq.js","./ns-sold-stock-report-DRC40-va.js","./ns-profit-report-C1dSPFWR.js","./ns-stock-combined-report-CSnS7BsK.js","./ns-cash-flow-report-BT1bGAca.js","./ns-yearly-report-DNfg4je6.js","./ns-best-products-report-BGatCUUU.js","./ns-payment-types-report-Bix_FSkr.js","./ns-customers-statement-report-DWzLJEA5.js","./ns-stock-adjustment-HGyDAkTB.js","./ns-procurement-quantity-r05u5gO6.js","./ns-order-invoice-DoMLCmH7.js","./ns-token-2mu1upRR.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
