import{b as e,B as s}from"./bootstrap.1adf5f09.js";import"./lang.2d0006f0.js";import"./runtime-dom.esm-bundler.febf7d20.js";import"./runtime-core.esm-bundler.db039fbe.js";class a{constructor(){this._reports={day:e.get("/api/dashboard/day"),bestCustomers:e.get("/api/dashboard/best-customers"),weeksSummary:e.get("/api/dashboard/weeks"),bestCashiers:e.get("/api/dashboard/best-cashiers"),recentOrders:e.get("/api/dashboard/recent-orders")},this._day=new s({}),this._bestCustomers=new s([]),this._weeksSummary=new s({}),this._bestCashiers=new s([]),this._recentOrders=new s([]);for(let t in this._reports)this.loadReport(t)}loadReport(t){return this._reports[t].subscribe(r=>{this[`_${t}`].next(r)})}get day(){return this._day}get bestCustomers(){return this._bestCustomers}get bestCashiers(){return this._bestCashiers}get recentOrders(){return this._recentOrders}get weeksSummary(){return this._weeksSummary}}window.Dashboard=new a;