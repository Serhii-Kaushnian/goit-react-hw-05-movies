"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var a,r,i,o=t(861),s=t(885),p=t(687),c=t.n(p),l=t(791),u=t(689),f=t(44),h=t(275),d=t(842),x=t(596),m=t(168),Z=t(921),A=Z.Z.div(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 10px;\n"]))),g=Z.Z.ul(r||(r=(0,m.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  grid-gap: 16px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),k=Z.Z.li(i||(i=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  border-radius: 10px;\n  -webkit-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.53);\n  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.53);\n"]))),v=t(184),S="8fcb73b25bea8ff19ff1e6b792856201",M="https://api.themoviedb.org/3/";function N(){var n=(0,u.UO)().id,e=(0,l.useState)([]),t=(0,s.Z)(e,2),a=t[0],r=t[1];console.log("cast: ",a);var i=(0,l.useState)(!1),p=(0,s.Z)(i,2),m=p[0],Z=p[1];return(0,l.useEffect)((function(){function e(){return(e=(0,o.Z)(c().mark((function e(t){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.prev=1,e.next=4,f.Z.get("".concat(M,"movie/").concat(n,"/credits?api_key=").concat(S,"&language=en-US"));case 4:if(0!==(a=e.sent).data.cast.length){e.next=9;break}return x.Am.info("There is no cast for this movie"),Z(!1),e.abrupt("return");case 9:r(a.data.cast),Z(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}!function(n){e.apply(this,arguments)}(n)}),[n]),console.log(a),(0,v.jsxs)(A,{children:[m&&(0,v.jsx)(h.Z,{}),0!==a.length&&(0,v.jsx)(g,{children:a.map((function(n){return(0,v.jsxs)(k,{children:[(0,v.jsx)("h3",{children:n.name}),(0,v.jsx)("img",{src:n.profile_path?"https://image.tmdb.org/t/p/original".concat(n.profile_path):d,alt:n.name,width:"200"}),(0,v.jsxs)("p",{children:["Character:",n.character]})]},n.id)}))})]})}},842:function(n){n.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=387.9b9fd8a6.chunk.js.map