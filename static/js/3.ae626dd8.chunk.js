(this.webpackJsonpwallet=this.webpackJsonpwallet||[]).push([[3],{68:function(e,s){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var n=new Uint8Array(16);e.exports=function(){return t(n),n}}else{var r=new Array(16);e.exports=function(){for(var e,s=0;s<16;s++)0===(3&s)&&(e=4294967296*Math.random()),r[s]=e>>>((3&s)<<3)&255;return r}}},69:function(e,s){for(var t=[],n=0;n<256;++n)t[n]=(n+256).toString(16).substr(1);e.exports=function(e,s){var n=s||0,r=t;return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")}},70:function(e,s,t){e.exports={glassWrap__table:"Glass_glassWrap__table__3rBb-",bodyHead:"Glass_bodyHead__2TpJ9",bodyTable:"Glass_bodyTable__3hCPK"}},71:function(e,s,t){var n=t(72),r=t(73),a=r;a.v1=n,a.v4=r,e.exports=a},72:function(e,s,t){var n,r,a=t(68),l=t(69),c=0,o=0;e.exports=function(e,s,t){var i=s&&t||0,d=s||[],b=(e=e||{}).node||n,j=void 0!==e.clockseq?e.clockseq:r;if(null==b||null==j){var u=a();null==b&&(b=n=[1|u[0],u[1],u[2],u[3],u[4],u[5]]),null==j&&(j=r=16383&(u[6]<<8|u[7]))}var h=void 0!==e.msecs?e.msecs:(new Date).getTime(),f=void 0!==e.nsecs?e.nsecs:o+1,g=h-c+(f-o)/1e4;if(g<0&&void 0===e.clockseq&&(j=j+1&16383),(g<0||h>c)&&void 0===e.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=h,o=f,r=j;var p=(1e4*(268435455&(h+=122192928e5))+f)%4294967296;d[i++]=p>>>24&255,d[i++]=p>>>16&255,d[i++]=p>>>8&255,d[i++]=255&p;var x=h/4294967296*1e4&268435455;d[i++]=x>>>8&255,d[i++]=255&x,d[i++]=x>>>24&15|16,d[i++]=x>>>16&255,d[i++]=j>>>8|128,d[i++]=255&j;for(var v=0;v<6;++v)d[i+v]=b[v];return s||l(d)}},73:function(e,s,t){var n=t(68),r=t(69);e.exports=function(e,s,t){var a=s&&t||0;"string"==typeof e&&(s="binary"===e?new Array(16):null,e=null);var l=(e=e||{}).random||(e.rng||n)();if(l[6]=15&l[6]|64,l[8]=63&l[8]|128,s)for(var c=0;c<16;++c)s[a+c]=l[c];return s||r(l)}},76:function(e,s,t){"use strict";t.r(s);t(0);var n=t(24),r=t(25),a=t(70),l=t.n(a),c=t(2),o=function(e){return 0===e.full.length&&e.startConnection(e.symbol)&&e.getGlass(e.symbol),Object(c.jsx)("div",{className:"glassWrap",children:e.full.length>0&&Object(c.jsxs)("div",{className:l.a.glassWrap__table,children:[Object(c.jsx)("table",{className:l.a.bodyHead,cellSpacing:"0",cellPadding:"0",border:"1",children:Object(c.jsxs)("thead",{className:l.a.glassWrap__table_head,children:[Object(c.jsx)("tr",{children:Object(c.jsx)("th",{colSpan:"6",children:e.symbol})}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{colSpan:"3",children:"Bid"}),Object(c.jsx)("th",{colSpan:"3",children:"Ask"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Amount"}),Object(c.jsx)("th",{children:"Price"}),Object(c.jsx)("th",{children:"Total"}),Object(c.jsx)("th",{children:"Amount"}),Object(c.jsx)("th",{children:"Price"}),Object(c.jsx)("th",{children:"Total"})]})]})}),Object(c.jsx)("div",{className:l.a.bodyTable,children:Object(c.jsx)("table",{cellSpacing:"0",cellPadding:"0",border:"1",children:Object(c.jsx)("tbody",{children:e.full})})})]})})},i=t(71),d=t.n(i);s.default=Object(n.b)((function(e){return{symbol:e.trade.symbol,glass:e.trade.glass,messages:e.trade.messages}}),{getGlass:r.c,clearGlass:r.a,startMessagesListening:r.d,stopMessagesListening:r.e})((function(e){for(var s=e.glass.asks,t=e.glass.bids,n=[],r=0;r<s.length;r++)n[r]=Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t[r][0]}),Object(c.jsx)("td",{children:t[r][1]}),Object(c.jsx)("td",{children:(t[r][0]*t[r][1]).toFixed(7)}),Object(c.jsx)("td",{children:s[r][0]}),Object(c.jsx)("td",{children:s[r][1]}),Object(c.jsx)("td",{children:(s[r][0]*s[r][1]).toFixed(7)})]},d()(8));return n=n.reverse(),Object(c.jsx)(o,{symbol:e.symbol,full:n,getGlass:e.getGlass,startConnection:e.startMessagesListening})}))}}]);
//# sourceMappingURL=3.ae626dd8.chunk.js.map