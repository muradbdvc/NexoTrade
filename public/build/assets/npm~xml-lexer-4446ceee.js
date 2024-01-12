import{e as y}from"./npm~eventemitter3-3e95be7d.js";function a(m,g,d){return g in m?Object.defineProperty(m,g,{value:d,enumerable:!0,configurable:!0,writable:!0}):m[g]=d,m}var M=y,x=function(){},e={data:"state-data",cdata:"state-cdata",tagBegin:"state-tag-begin",tagName:"state-tag-name",tagEnd:"state-tag-end",attributeNameStart:"state-attribute-name-start",attributeName:"state-attribute-name",attributeNameEnd:"state-attribute-name-end",attributeValueBegin:"state-attribute-value-begin",attributeValue:"state-attribute-value"},t={lt:"action-lt",gt:"action-gt",space:"action-space",equal:"action-equal",quote:"action-quote",slash:"action-slash",char:"action-char",error:"action-error"},i={text:"text",openTag:"open-tag",closeTag:"close-tag",attributeName:"attribute-name",attributeValue:"attribute-value"},C={" ":t.space,"	":t.space,"\n":t.space,"\r":t.space,"<":t.lt,">":t.gt,'"':t.quote,"'":t.quote,"=":t.equal,"/":t.slash},O=function(g){return C[g]||t.char},P=function(g){var d,_,V,B,S,v,E,q,p,s;g=Object.assign({debug:!1},g);var $=new M,r=e.data,o="",l="",b="",c="",N="",T="",u=function(h,f){if(!(l[0]==="?"||l[0]==="!")){var A={type:h,value:f};g.debug&&console.log("emit:",A),$.emit("data",A)}};$.stateMachine=(s={},a(s,e.data,(d={},a(d,t.lt,function(){o.trim()&&u(i.text,o),l="",N=!1,r=e.tagBegin}),a(d,t.char,function(n){o+=n}),d)),a(s,e.cdata,a({},t.char,function(n){o+=n,o.substr(-3)==="]]>"&&(u(i.text,o.slice(0,-3)),o="",r=e.data)})),a(s,e.tagBegin,(_={},a(_,t.space,x),a(_,t.char,function(n){l=n,r=e.tagName}),a(_,t.slash,function(){l="",N=!0}),_)),a(s,e.tagName,(V={},a(V,t.space,function(){N?r=e.tagEnd:(r=e.attributeNameStart,u(i.openTag,l))}),a(V,t.gt,function(){u(N?i.closeTag:i.openTag,l),o="",r=e.data}),a(V,t.slash,function(){r=e.tagEnd,u(i.openTag,l)}),a(V,t.char,function(n){l+=n,l==="![CDATA["&&(r=e.cdata,o="",l="")}),V)),a(s,e.tagEnd,(B={},a(B,t.gt,function(){u(i.closeTag,l),o="",r=e.data}),a(B,t.char,x),B)),a(s,e.attributeNameStart,(S={},a(S,t.char,function(n){b=n,r=e.attributeName}),a(S,t.gt,function(){o="",r=e.data}),a(S,t.space,x),a(S,t.slash,function(){N=!0,r=e.tagEnd}),S)),a(s,e.attributeName,(v={},a(v,t.space,function(){r=e.attributeNameEnd}),a(v,t.equal,function(){u(i.attributeName,b),r=e.attributeValueBegin}),a(v,t.gt,function(){c="",u(i.attributeName,b),u(i.attributeValue,c),o="",r=e.data}),a(v,t.slash,function(){N=!0,c="",u(i.attributeName,b),u(i.attributeValue,c),r=e.tagEnd}),a(v,t.char,function(n){b+=n}),v)),a(s,e.attributeNameEnd,(E={},a(E,t.space,x),a(E,t.equal,function(){u(i.attributeName,b),r=e.attributeValueBegin}),a(E,t.gt,function(){c="",u(i.attributeName,b),u(i.attributeValue,c),o="",r=e.data}),a(E,t.char,function(n){c="",u(i.attributeName,b),u(i.attributeValue,c),b=n,r=e.attributeName}),E)),a(s,e.attributeValueBegin,(q={},a(q,t.space,x),a(q,t.quote,function(n){T=n,c="",r=e.attributeValue}),a(q,t.gt,function(){c="",u(i.attributeValue,c),o="",r=e.data}),a(q,t.char,function(n){T="",c=n,r=e.attributeValue}),q)),a(s,e.attributeValue,(p={},a(p,t.space,function(n){T?c+=n:(u(i.attributeValue,c),r=e.attributeNameStart)}),a(p,t.quote,function(n){T===n?(u(i.attributeValue,c),r=e.attributeNameStart):c+=n}),a(p,t.gt,function(n){T?c+=n:(u(i.attributeValue,c),o="",r=e.data)}),a(p,t.slash,function(n){T?c+=n:(u(i.attributeValue,c),N=!0,r=e.tagEnd)}),a(p,t.char,function(n){c+=n}),p)),s);var w=function(h){g.debug&&console.log(r,h);var f=$.stateMachine[r],A=f[O(h)]||f[t.error]||f[t.char];A(h)};return $.write=function(n){for(var h=n.length,f=0;f<h;f++)w(n[f])},$},Q={State:e,Action:t,Type:i,create:P};export{Q as l};