(window["webpackJsonppromotions-page-inspector"]=window["webpackJsonppromotions-page-inspector"]||[]).push([[0],[,function(e,t,n){},,,,,,,,,,,,function(e,t,n){},function(e,t,n){e.exports=n(25)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),i=n.n(o),s=(n(19),n(20),n(21),n(3)),c=n.n(s),l=n(9),p=n(4),m=n(5),u=n(7),h=n(6),d=n(8),f=n(13),v=n.n(f),E=n(10),g=n(1),b=n.n(g),D=function(e){function t(e){return Object(p.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=function(e){return{__html:e}};return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h5",null,"img: "),r.a.createElement("div",{className:b.a.contentDiv},r.a.createElement("img",{src:(this.props.configapp.botemaniaUrl+this.props.data.image).replace("/scale-s%s/banner-r%s-w%s.jpg","/scale-1/banner-20-300.jpg")}))),r.a.createElement("div",null,r.a.createElement("h5",null,"Path: "),r.a.createElement("div",{className:b.a.contentDiv},this.props.data.path)),this.props.promoinfo.content&&r.a.createElement("div",null,this.props.promoinfo.content.labels&&r.a.createElement("div",null,r.a.createElement("h5",null,"Labels: "),r.a.createElement("div",{className:b.a.contentDiv,dangerouslySetInnerHTML:e(JSON.stringify(this.props.promoinfo.content.labels).split('":"').join(":</b>").split('","').join("<br/><b>").split('{"').join("<b>").split('"}').join(""))})),this.props.promoinfo.content.preScreen&&r.a.createElement("div",null,r.a.createElement("h5",null,"preScreen: "),r.a.createElement("div",{className:b.a.contentDiv,dangerouslySetInnerHTML:e(this.props.promoinfo.content.preScreen.copy)})),this.props.promoinfo.content.expiredScreen&&r.a.createElement("div",null,r.a.createElement("h5",null,"expiredScreen: "),r.a.createElement("div",{className:b.a.contentDiv,dangerouslySetInnerHTML:e(this.props.promoinfo.content.expiredScreen.copy)})),this.props.promoinfo.content.loggedoutScreen&&r.a.createElement("div",null,r.a.createElement("h5",null,"loggedoutScreen: "),r.a.createElement("div",{className:b.a.contentDiv,dangerouslySetInnerHTML:e(this.props.promoinfo.content.loggedoutScreen.copy)})),this.props.promoinfo.content.ineligibleScreen&&r.a.createElement("div",null,r.a.createElement("h5",null,"ineligibleScreen: "),r.a.createElement("div",{className:b.a.contentDiv,dangerouslySetInnerHTML:e(this.props.promoinfo.content.ineligibleScreen.copy)})),this.props.promoinfo.content.optInScreen&&r.a.createElement("div",null,r.a.createElement("h5",null,"optInScreen: "),r.a.createElement("div",{className:b.a.contentDiv,dangerouslySetInnerHTML:e(this.props.promoinfo.content.optInScreen.copy)})),this.props.promoinfo.content.completeScreen&&this.props.promoinfo.content.completeScreen.copy&&r.a.createElement("div",null,r.a.createElement("h5",null,"completeScreen: "),r.a.createElement("div",{className:b.a.contentDiv,dangerouslySetInnerHTML:e(Array.isArray(this.props.promoinfo.content.completeScreen.copy)?this.props.promoinfo.content.completeScreen.copy.join():this.props.promoinfo.content.completeScreen.copy)}))))}}]),t}(a.Component),y=n(2);y.locale("es");var Y=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={showInfo:!1},n.changeShowInfo=n.changeShowInfo.bind(Object(E.a)(n)),n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"changeShowInfo",value:function(){this.setState(function(e){return{showInfo:!e.showInfo}})}},{key:"render",value:function(){var e={settings:{env:{prod:{promoID:""}}}},t="",n=this.props.configapp.botemaniaUrl+this.props.data.url.replace("index.html","");try{var a=function(){var e=Object(l.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n+"config.json",{mode:"no-cors"}).then(function(e){return e.json()});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(l.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n+"terms.html").then(function(e){return e.json()});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();e=a(),t=o()}catch(p){}var i,s=y();return r.a.createElement("tbody",{className:b.a.container,"data-tid":"container"},r.a.createElement("tr",{onClick:this.changeShowInfo,style:{background:this.state.showInfo?"whitesmoke":"",cursor:"pointer",borderBottom:this.state.showInfo?"":"1px solid #bfbfbf"}},r.a.createElement("td",null,this.props.proximamente?(y(this.props.proximamente.expiryDate,"DD/MM/YYYY").isSame(y(this.props.data.startDate,"DD/MM/YYYY"),"day")&&y(this.props.proximamente.startDate,"DD/MM/YYYY").isSame(y(this.props.data.startDate,"DD/MM/YYYY").subtract(5,"days"),"day")?"\u2714\ufe0f":"\u2716\ufe0f")+"\ud83d\udd1c"+(y(this.props.proximamente.startDate,"DD/MM/YYYY")>s?"\ud83d\udd2e":y(this.props.proximamente.expiryDate,"DD/MM/YYYY")<s?"\ud83e\udddf\u200d\ufe0f":"\ud83d\udd25\ufe0f"):""),r.a.createElement("td",null,"\u26d3  \ufe0f",this.props.data.image=="/api/content/promotions/"+this.props.data.path+"/images/banner/scale-s%s/banner-r%s-w%s.jpg"&&this.props.data.url=="/api/content/promotions/"+this.props.data.path+"/index.html"||this.props.data.image=="/api/content/promotions/vip/"+this.props.data.path+"/images/banner/scale-s%s/banner-r%s-w%s.jpg"&&this.props.data.url=="/api/content/promotions/vip/"+this.props.data.path+"/index.html"?"\u2714\ufe0f":"\u2716\ufe0f"),r.a.createElement("td",null,this.props.data.title),r.a.createElement("td",null,e.settings.env.prod.promoID),r.a.createElement("td",null,y(this.props.data.startDate,"DD/MM/YYYY")>s?"\ud83d\udd2e":y(this.props.data.expiryDate,"DD/MM/YYYY")<s?"\ud83e\udddf\u200d\ufe0f":"\ud83d\udd25\ufe0f"),r.a.createElement("td",{style:{color:this.props.data.startDate==e.settings.startDate?"green":"red"}},y(this.props.data.startDate,"DD/MM/YYYY").format("DD MMM YY")),r.a.createElement("td",{style:{color:this.props.data.expiryDate==e.settings.expiryDate?"green":"red"}},y(this.props.data.expiryDate,"DD/MM/YYYY").format("DD MMM YY")),r.a.createElement("td",null,this.props.data.bucket),r.a.createElement("td",null,this.props.data.partners?this.props.data.partners.join(","):""),r.a.createElement("td",null,this.props.data.devices?this.props.data.devices.join(","):"")),r.a.createElement("tr",{style:{display:this.state.showInfo?"table-row":"none"}},r.a.createElement("td",{colSpan:"10",className:b.a.infoRow},r.a.createElement("div",{style:{width:"50%",display:"inline-block",verticalAlign:"top"}},r.a.createElement(D,{data:this.props.data,configapp:this.props.configapp,promoinfo:e})),r.a.createElement("div",{style:{width:"50%",display:"inline-block",verticalAlign:"top"}},r.a.createElement("h5",null,"T\xe9rminos: "),r.a.createElement("div",{className:b.a.contentDiv,style:{maxHeight:"500px",overflow:"auto"},dangerouslySetInnerHTML:(i=t,{__html:i})})))))}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={data:!0},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){n(24).homedir();var e={promotionsPagePath:"https://www.botemania.es/api/config/promotions/v2/promotions-page.json",botemaniaUrl:"https://botemania.es"},t=function(){var t=Object(l.a)(c.a.mark(function t(n){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.promotionsPagePath).then(function(e){return e.json()});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()(),a=JSON.parse(t).categories,o=[];return a[1].promotions.map(function(e){return o[e.path]=e}),r.a.createElement("div",{className:v.a.container,"data-tid":"container"},r.a.createElement("h2",null,"Promociones"),r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"ID"),r.a.createElement("th",null),r.a.createElement("th",null,"Start"),r.a.createElement("th",null,"End"),r.a.createElement("th",null,"Bucket"),r.a.createElement("th",null,"Partner"),r.a.createElement("th",null,"Devices"))),a[0].promotions.map(function(t,n){return r.a.createElement(Y,{configapp:e,data:t,proximamente:o[t.path],key:n})}))))}}]),t}(a.Component);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,1,2]]]);
//# sourceMappingURL=main.ea98b6ca.chunk.js.map