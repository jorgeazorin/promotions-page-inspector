(window["webpackJsonppromotions-page-inspector"]=window["webpackJsonppromotions-page-inspector"]||[]).push([[0],[,function(e,t,n){},,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),i=n.n(r),s=(n(16),n(17),n(18),n(3)),l=n(4),p=n(6),c=n(5),m=n(7),h=(n(19),n(8)),d=n(1),u=n.n(d),f=function(e){function t(e){return Object(s.a)(this,t),Object(p.a)(this,Object(c.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=function(e){return{__html:e}};return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h5",null,"img: "),o.a.createElement("div",{className:u.a.contentDiv},o.a.createElement("img",{src:(this.props.configapp.botemaniaUrl+this.props.data.image).replace("/scale-s%s/banner-r%s-w%s.jpg","/scale-1/banner-20-300.jpg")}))),o.a.createElement("div",null,o.a.createElement("h5",null,"Path: "),o.a.createElement("div",{className:u.a.contentDiv},this.props.data.path)),this.props.promoinfo.content&&o.a.createElement("div",null,this.props.promoinfo.content.labels&&o.a.createElement("div",null,o.a.createElement("h5",null,"Labels: "),o.a.createElement("div",{className:u.a.contentDiv,dangerouslySetInnerHTML:e(JSON.stringify(this.props.promoinfo.content.labels).split('":"').join(":</b>").split('","').join("<br/><b>").split('{"').join("<b>").split('"}').join(""))})),this.props.promoinfo.content.preScreen&&o.a.createElement("div",null,o.a.createElement("h5",null,"preScreen: "),o.a.createElement("div",{className:u.a.contentDiv,dangerouslySetInnerHTML:e(this.props.promoinfo.content.preScreen.copy)})),this.props.promoinfo.content.expiredScreen&&o.a.createElement("div",null,o.a.createElement("h5",null,"expiredScreen: "),o.a.createElement("div",{className:u.a.contentDiv,dangerouslySetInnerHTML:e(this.props.promoinfo.content.expiredScreen.copy)})),this.props.promoinfo.content.loggedoutScreen&&o.a.createElement("div",null,o.a.createElement("h5",null,"loggedoutScreen: "),o.a.createElement("div",{className:u.a.contentDiv,dangerouslySetInnerHTML:e(this.props.promoinfo.content.loggedoutScreen.copy)})),this.props.promoinfo.content.ineligibleScreen&&o.a.createElement("div",null,o.a.createElement("h5",null,"ineligibleScreen: "),o.a.createElement("div",{className:u.a.contentDiv,dangerouslySetInnerHTML:e(this.props.promoinfo.content.ineligibleScreen.copy)})),this.props.promoinfo.content.optInScreen&&o.a.createElement("div",null,o.a.createElement("h5",null,"optInScreen: "),o.a.createElement("div",{className:u.a.contentDiv,dangerouslySetInnerHTML:e(this.props.promoinfo.content.optInScreen.copy)})),this.props.promoinfo.content.completeScreen&&this.props.promoinfo.content.completeScreen.copy&&o.a.createElement("div",null,o.a.createElement("h5",null,"completeScreen: "),o.a.createElement("div",{className:u.a.contentDiv,dangerouslySetInnerHTML:e(Array.isArray(this.props.promoinfo.content.completeScreen.copy)?this.props.promoinfo.content.completeScreen.copy.join():this.props.promoinfo.content.completeScreen.copy)}))))}}]),t}(a.Component),E=n(2);E.locale("es");var v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(p.a)(this,Object(c.a)(t).call(this,e))).state={showInfo:!1,promoInfo:{settings:{env:{prod:{promoID:""}}}},promoTerms:""},n.changeShowInfo=n.changeShowInfo.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"changeShowInfo",value:function(){this.setState(function(e){return{showInfo:!e.showInfo}})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.configapp.botemaniaUrl+this.props.data.url.replace("index.html","");try{fetch("https://cors-anywhere.herokuapp.com/".concat((t+"config.json"))).then(function(e){return e.json()}).then(function(t){e.setState({promoInfo:JSON.parse(t.contents)})})}catch(n){}try{fetch("https://cors-anywhere.herokuapp.com/".concat((t+"terms.html"))).then(function(e){return e.json()}).then(function(t){e.setState({promoTerms:t.contents})})}catch(a){}}},{key:"render",value:function(){var e,t=E();return o.a.createElement("tbody",{className:u.a.container,"data-tid":"container"},o.a.createElement("tr",{onClick:this.changeShowInfo,style:{background:(this.state.showInfo,""),cursor:"pointer",borderBottom:this.state.showInfo?"":"1px solid #bfbfbf"}},o.a.createElement("td",null,this.props.proximamente?(E(this.props.proximamente.expiryDate,"DD/MM/YYYY").isSame(E(this.props.data.startDate,"DD/MM/YYYY"),"day")&&E(this.props.proximamente.startDate,"DD/MM/YYYY").isSame(E(this.props.data.startDate,"DD/MM/YYYY").subtract(5,"days"),"day")?"\u2714\ufe0f":"\u2716\ufe0f")+"\ud83d\udd1c"+(E(this.props.proximamente.startDate,"DD/MM/YYYY")>t?"\ud83d\udd2e":E(this.props.proximamente.expiryDate,"DD/MM/YYYY")<t?"\ud83e\udddf\u200d\ufe0f":"\ud83d\udd25\ufe0f"):""),o.a.createElement("td",null,"\u26d3  \ufe0f",this.props.data.image=="/api/content/promotions/"+this.props.data.path+"/images/banner/scale-s%s/banner-r%s-w%s.jpg"&&this.props.data.url=="/api/content/promotions/"+this.props.data.path+"/index.html"||this.props.data.image=="/api/content/promotions/vip/"+this.props.data.path+"/images/banner/scale-s%s/banner-r%s-w%s.jpg"&&this.props.data.url=="/api/content/promotions/vip/"+this.props.data.path+"/index.html"?"\u2714\ufe0f":"\u2716\ufe0f"),o.a.createElement("td",null,this.props.data.title),o.a.createElement("td",null,this.state.promoInfo.settings.env.prod.promoID),o.a.createElement("td",null,E(this.props.data.startDate,"DD/MM/YYYY")>t?"\ud83d\udd2e":E(this.props.data.expiryDate,"DD/MM/YYYY")<t?"\ud83e\udddf\u200d\ufe0f":"\ud83d\udd25\ufe0f"),o.a.createElement("td",{style:{color:this.props.data.startDate==this.state.promoInfo.settings.startDate?"green":"red"}},E(this.props.data.startDate,"DD/MM/YYYY").format("DD MMM YY")),o.a.createElement("td",{style:{color:this.props.data.expiryDate==this.state.promoInfo.settings.expiryDate?"green":"red"}},E(this.props.data.expiryDate,"DD/MM/YYYY").format("DD MMM YY")),o.a.createElement("td",null,this.props.data.bucket),o.a.createElement("td",null,this.props.data.partners?this.props.data.partners.join(","):""),o.a.createElement("td",null,this.props.data.devices?this.props.data.devices.join(","):"")),o.a.createElement("tr",{style:{display:this.state.showInfo?"table-row":"none"}},o.a.createElement("td",{colSpan:"10",className:u.a.infoRow},o.a.createElement("div",{style:{width:"50%",display:"inline-block",verticalAlign:"top"}},o.a.createElement(f,{data:this.props.data,configapp:this.props.configapp,promoinfo:this.state.promoInfo})),o.a.createElement("div",{style:{width:"50%",display:"inline-block",verticalAlign:"top"}},o.a.createElement("h5",null,"T\xe9rminos: "),o.a.createElement("div",{className:u.a.contentDiv,style:{maxHeight:"500px",overflow:"auto"},dangerouslySetInnerHTML:(e=this.state.promoTerms,{__html:e})})))))}}]),t}(a.Component),g=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(p.a)(this,Object(c.a)(t).call(this,e))).state={data:!0,promos:[{promotions:[]}],proximamente:[],proximamenteMap:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/".concat(("https://www.botemania.es/api/config/promotions/v2/promotions-page.json"))).then(function(e){console.log(e); return e.json()}).then(function(t){var n=JSON.parse(t.contents).categories,a=[];n[1].promotions.map(function(e){return a[e.path]=e}),e.setState({promos:n,proximamente:n[1],proximamenteMap:a})})}},{key:"render",value:function(){var e=this,t={promotionsPagePath:"https://www.botemania.es/api/config/promotions/v2/promotions-page.json",botemaniaUrl:"https://botemania.es"};return o.a.createElement("div",{className:"mierda","data-tid":"container"},o.a.createElement("h2",null,"Promociones"),o.a.createElement("div",null,o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null),o.a.createElement("th",null),o.a.createElement("th",null,"Title"),o.a.createElement("th",null,"ID"),o.a.createElement("th",null),o.a.createElement("th",null,"Start"),o.a.createElement("th",null,"End"),o.a.createElement("th",null,"Bucket"),o.a.createElement("th",null,"Partner"),o.a.createElement("th",null,"Devices"))),this.state.promos[0].promotions.map(function(n,a){return o.a.createElement(v,{configapp:t,data:n,proximamente:e.state.proximamenteMap[n.path],key:a})}))))}}]),t}(a.Component);var D=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.8fc0e907.chunk.js.map
