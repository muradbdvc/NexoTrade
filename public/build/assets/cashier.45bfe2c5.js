import{b as e,B as o,n as i}from"./bootstrap.ce8e0264.js";import{_ as r}from"./lang.2d0006f0.js";import"./runtime-dom.esm-bundler.672daa05.js";import"./runtime-core.esm-bundler.d70d6a40.js";class a{constructor(){this._reports={mysales:e.get("/api/nexopos/v4/reports/cashier-report")},this._mysales=new o({});for(let s in this._reports)this.loadReport(s)}loadReport(s){return this._reports[s].subscribe(t=>{this[`_${s}`].next(t)})}refreshReport(){e.get("/api/nexopos/v4/reports/cashier-report?refresh=true").subscribe(s=>{this._mysales.next(s),i.success(r("The report has been refreshed."),r("OK")).subscribe()})}get mysales(){return this._mysales}}window.Cashier=new a;
