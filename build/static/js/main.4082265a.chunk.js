(this["webpackJsonpelsys-nettside"]=this["webpackJsonpelsys-nettside"]||[]).push([[0],{112:function(e,t,a){e.exports=a.p+"static/media/logo_stor.5e6b5f9d.svg"},121:function(e,t){},140:function(e,t,a){},150:function(e,t,a){e.exports=a.p+"static/media/profile.39eb0bbf.jpg"},156:function(e,t,a){e.exports=a.p+"static/media/elsys.f00ade2c.png"},174:function(e,t,a){e.exports=a(229)},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){},219:function(e,t,a){},220:function(e,t,a){},221:function(e,t){},226:function(e,t,a){},227:function(e,t,a){},228:function(e,t,a){},229:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(97),l=a.n(r),c=(a(179),a(180),a(98)),s=a.n(c),i=a(42);a(181);var m=function(){return o.a.createElement("ul",{className:"FlexContainer"},o.a.createElement("div",{className:"logo"},o.a.createElement(i.b,{to:"/",className:"logolink"},o.a.createElement("img",{className:"pic",src:s.a,alt:""}))),o.a.createElement("li",{className:"items-container"},o.a.createElement(i.b,{to:"/",className:"Nav-item"},"Home"),o.a.createElement(i.b,{to:"/about",className:"Nav-item"},"About"),o.a.createElement(i.b,{to:"/dashboard",className:"log-inn"},"Dashboard")))},u=a(112),d=a.n(u);a(186);var p=function(){return o.a.createElement("div",{className:"Home"},o.a.createElement("div",{className:"H-el"},o.a.createElement("img",{className:"pic",src:s.a,alt:""})),o.a.createElement("h1",null,"Enabling renewable energy"))};a(187);var b=function(){return o.a.createElement("div",{className:"About"},o.a.createElement("div",{className:"cont"},o.a.createElement("h1",{className:"h1"},"About"),o.a.createElement("h3",{className:"tekst"},"A group of students at the Norwegian University of Science and Technology poised to change the world.")))},h=a(3),f=a(2),E=a(8),v=a(6),g=a(9),N=(a(188),a(117)),y=a.n(N);y.a.initializeApp({apiKey:"AIzaSyArbzbL-IzJtEaqfRCPuOhP5sMGbsuc2bE",authDomain:"elsys-266317.firebaseapp.com",databaseURL:"https://elsys-266317.firebaseio.com",projectId:"elsys-266317",storageBucket:"elsys-266317.appspot.com",messagingSenderId:"939792803323",appId:"1:939792803323:web:974676fc3f15beeb0e175e",measurementId:"G-XJF2J09B8J"});var C=y.a,k=a(148),S=a.n(k),O=a(150),j=a.n(O);a(219);var x=function(){var e=new Image;return C.auth().currentUser.photoURL?e.src=C.auth().currentUser.photoURL:e.src=j.a,o.a.createElement("div",{className:"Flex-navbar"},o.a.createElement("div",{className:"items-container"},o.a.createElement(i.b,{to:"/",className:"logolink"},o.a.createElement("img",{alt:"pic",src:e.src,className:"pic"})),o.a.createElement("p",{className:"user"}," ",C.auth().currentUser.displayName),o.a.createElement("button",{onClick:function(){return C.auth().signOut()},className:"signout"},"Sign out"),o.a.createElement(i.b,{to:"/dashboard/",className:"Nav-item"},"Dash"),o.a.createElement(i.b,{to:"/dashboard/maps",className:"Nav-item"},"Maps"),o.a.createElement(i.b,{to:"/dashboard/data",className:"Nav-item"},"Data")))},F=a(157),A=a(241),w=a(242),D=(a(220),{width:10,height:10,longitude:-73.75,latitude:40.73,zoom:9,maxZoom:16,pitch:0,bearing:0}),I=function(e){function t(){return Object(h.a)(this,t),Object(E.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"_renderLayers",value:function(){var e=this.props,t=e.data,a=void 0===t?"https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/screen-grid/uber-pickup-locations.json":t,n=e.intensity,o=void 0===n?1:n,r=e.threshold,l=void 0===r?.03:r,c=e.radiusPixels,s=void 0===c?30:c;return[new w.a({data:a,id:"heatmp-layer",pickable:!1,getPosition:function(e){return[e[0],e[1]]},getWeight:function(e){return e[2]},radiusPixels:s,intensity:o,threshold:l})]}},{key:"render",value:function(){var e=this.props.mapStyle,t=void 0===e?"mapbox://styles/mapbox/dark-v9":e;return o.a.createElement("div",{className:"Maps",style:{position:"relative"}},o.a.createElement(A.a,{className:"Maps",initialViewState:D,controller:!0,layers:this._renderLayers(),height:"100%",width:"100%",position:"relative"},o.a.createElement(F.a,{reuseMaps:!0,mapStyle:t,preventStyleDiffing:!0,mapboxApiAccessToken:"pk.eyJ1Ijoib2xpbWIiLCJhIjoiY2s2NndxaG05MDJkajNqc2RoZDY4bjhjcyJ9.qYYAaBGI80WGqTHL6NrP5A",position:"absolute"})))}}]),t}(n.PureComponent);var B=a(12),L=a.n(B),T=a(11);a(226);var W=function(){var e=Object(n.useState)(""),t=Object(T.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),c=Object(T.a)(l,2),s=c[0],i=c[1],m=Object(n.useState)(""),u=Object(T.a)(m,2),d=u[0],p=u[1],b=Object(n.useState)("04d"),h=Object(T.a)(b,2),f=h[0],E=h[1],v=Object(n.useState)(0),g=Object(T.a)(v,2),N=g[0],y=g[1],C=Object(n.useState)(0),k=Object(T.a)(C,2),S=k[0],O=k[1],j=Object(n.useState)(""),x=Object(T.a)(j,2),F=x[0],A=x[1],w=Object(n.useState)("rya"),D=Object(T.a)(w,2),I=D[0],B=D[1];Object(n.useEffect)((function(){W()}),[I]);var W=function(){var e,t,n,o,l,c,m,u;return L.a.async((function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,L.a.awrap(fetch("https://api.openweathermap.org/data/2.5/weather?q="+I+"&units=Metric&appid=a59f23e49b1ddf43f63930034fa5bcfb"));case 2:return e=b.sent,b.next=5,L.a.awrap(e.json());case 5:t=b.sent,n=a,o=s,l=d,c=f,m=N,u=S,console.log(t);try{r(t.name),i(t.main.temp),p(t.weather[0].description),E(t.weather[0].icon),O(t.coord.lat),y(t.coord.lon),document.getElementById("myH2").style.color="#ffffff"}catch(h){r(n),i(o),p(l),E(c),A("Error: Invalid Input"),O(u),y(m),document.getElementById("myH2").style.color="#ff0000"}case 14:case"end":return b.stop()}}))};return o.a.createElement("div",{className:"Weather"},o.a.createElement("div",{className:"margin"},o.a.createElement("div",null,o.a.createElement("h1",null,"Weather")),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),B(F)},className:"search-form"},o.a.createElement("input",{id:"myH2",type:"text",className:"search-bar",value:F,onChange:function(e){A(e.target.value)},placeholder:"Enter location:"}),o.a.createElement("button",{type:"submit",className:"search-button"},"\ud83d\udd0d")),o.a.createElement("h2",null,a),o.a.createElement("p",{className:"mag "},s,"\u2103"),o.a.createElement("p",null,d)))};a(227);var J=function(){return o.a.createElement("div",{className:"Default"},o.a.createElement(W,{className:"Weather"}))},M=a(17),P=a(154),U=(a(140),a(155)),G=a.n(U),H=a(83),R=a.n(H),z=function(e){var t=e.myData,a=e.timeInterval,n=e.timeFrom,r=e.timeTo,l=[];new Date(13135644e5).getMonth();if(1==a)for(var c=1e3*n,s=1e3*n+864e5;c<=1e3*r;){for(var i=0,m=0;m<t.length;m++){var u=1e3*t[m].TimeStamp;u>=c&&s>=u&&(i+=1)}l.push([c,i]),c=s,s+=864e5}if(2==a)for(var d=1e3*n,p=1e3*n+864e5;d<=1e3*r;){var b=0;for(m=0;m<t.length;m++){var h=1e3*t[m].TimeStamp;h>=d&&p>=h&&(b+=1)}l.push([d,b]),d=p,p+=864e5}var f={chart:{backgroundColor:"#1d1d1d",textColor:"#000000"},xAxis:{type:"datetime"},style:{width:"200px",textColor:"#000000"},title:{text:"Birds",color:"#000000"},plotOptions:{series:{label:{connectorAllowed:!1}}},series:[{data:l}]};return R.a.theme={colors:["#2b908f","#90ee7e","#f45b5b","#7798BF","#aaeeee","#ff0066","#eeaaee","#55BF3B","#DF5353","#7798BF","#aaeeee"],chart:{backgroundColor:{linearGradient:{x1:0,y1:0,x2:1,y2:1},stops:[[0,"#2a2a2b"],[1,"#3e3e40"]]},style:{fontFamily:"'Unica One', sans-serif"},plotBorderColor:"#606063"},title:{style:{color:"#E0E0E3",textTransform:"uppercase",fontSize:"20px"}},subtitle:{style:{color:"#E0E0E3",textTransform:"uppercase"}},xAxis:{gridLineColor:"#707073",labels:{style:{color:"#E0E0E3"}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",title:{style:{color:"#A0A0A3"}}},yAxis:{gridLineColor:"#707073",labels:{style:{color:"#E0E0E3"}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",tickWidth:1,title:{style:{color:"#A0A0A3"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.85)",style:{color:"#F0F0F0"}},plotOptions:{series:{dataLabels:{color:"#F0F0F3",style:{fontSize:"13px"}},marker:{lineColor:"#333"}},boxplot:{fillColor:"#505053"},candlestick:{lineColor:"white"},errorbar:{color:"white"}},legend:{backgroundColor:"rgba(0, 0, 0, 0.5)",itemStyle:{color:"#E0E0E3"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#606063"},title:{style:{color:"#C0C0C0"}}},credits:{style:{color:"#666"}},labels:{style:{color:"#707073"}},drilldown:{activeAxisLabelStyle:{color:"#F0F0F3"},activeDataLabelStyle:{color:"#F0F0F3"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:"#505053"}}},rangeSelector:{buttonTheme:{fill:"#505053",stroke:"#000000",style:{color:"#CCC"},states:{hover:{fill:"#707073",stroke:"#000000",style:{color:"white"}},select:{fill:"#000003",stroke:"#000000",style:{color:"white"}}}},inputBoxBorderColor:"#505053",inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(255,255,255,0.1)",series:{color:"#7798BF",lineColor:"#A6C7ED"},xAxis:{gridLineColor:"#505053"}},scrollbar:{barBackgroundColor:"#808083",barBorderColor:"#808083",buttonArrowColor:"#CCC",buttonBackgroundColor:"#606063",buttonBorderColor:"#606063",rifleColor:"#FFF",trackBackgroundColor:"#404043",trackBorderColor:"#404043"}},R.a.setOptions(R.a.theme),o.a.createElement("div",{className:"Chart"},o.a.createElement(G.a,{highcharts:R.a,options:f}))};var _=function(){var e,t=o.a.useState([]),a=Object(T.a)(t,2),n=a[0],r=a[1],l=o.a.useState(),c=Object(T.a)(l,2),s=(c[0],c[1],o.a.useState()),i=Object(T.a)(s,2),m=i[0],u=i[1],d=o.a.useState(),p=Object(T.a)(d,2),b=p[0],h=p[1],f=[];e=n;for(var E=o.a.useState([{id:1}]),v=Object(T.a)(E,2),g=v[0],N=v[1],y=o.a.useState([]),k=Object(T.a)(y,2),S=k[0],O=k[1],j=0;j<e.length;j++)f.push(parseInt(n[j].Bird));return o.a.useEffect((function(){return C.firestore().collection("Unit").doc("Node1").collection("Activity").onSnapshot((function(e){var t=[];e.forEach((function(e){return t.push(Object(P.a)({},e.data(),{id:e.id}))})),r(t)}))}),[]),o.a.createElement("div",{className:"Data"},o.a.createElement("div",{className:"Dato"},o.a.createElement("div",{className:"datoBoks"},o.a.createElement("label",{for:"Node"},"Choose a node:"),o.a.createElement("select",{className:"nodeSelect",id:"Node"},o.a.createElement("option",{value:"Node 1"},"Node 1"),o.a.createElement("option",{value:"Node 2"},"Node 2"),o.a.createElement("option",{value:"Node 3"},"Node 3"))),o.a.createElement("div",{className:"datoBoks"},o.a.createElement("h4",{className:"fromTo"},"From:"),o.a.createElement("input",{type:"date",className:"dateForm",valueAsNumber:m,onChange:function(e){return u(e.target.valueAsNumber/1e3)}})),o.a.createElement("div",{className:"datoBoks"},o.a.createElement("h4",{className:"fromTo"},"To:"),o.a.createElement("input",{type:"date",className:"dateForm",valueAsNumber:b,onChange:function(e){return h(e.target.valueAsNumber/1e3)}})),o.a.createElement("div",{className:"datoBoks"},o.a.createElement("button",{id:"demo",className:"dataButton",onClick:function(){for(var e=[],t=0;t<n.length;t++)n[t].TimeStamp>=m&&n[t].TimeStamp<=b&&e.push(n[t]);N(e)}},"Get data from node"))),o.a.createElement("div",{className:"selectButtons"},o.a.createElement("button",{className:"selectButton",onClick:function(){O([].concat(Object(M.a)(S),[1]))}},"Day"),o.a.createElement("button",{className:"selectButton",onClick:function(){O([].concat(Object(M.a)(S),[2]))}},"Week"),o.a.createElement("button",{className:"selectButton",onClick:function(){O([].concat(Object(M.a)(S),[3]))}},"Month")),S.map((function(e){return o.a.createElement("div",{className:"Card"},o.a.createElement("div",{id:"chart",key:g.id},o.a.createElement(z,{myData:g,timeInterval:e,timeFrom:m,timeTo:b})))})))},q=a(68),Y=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={isSignedIn:!1},a.uiConfig={signInFlow:"popup",signInOptions:[C.auth.GoogleAuthProvider.PROVIDER_ID,C.auth.EmailAuthProvider.PROVIDER_ID],callbacks:{signInSuccess:function(){return!1}}},a.componentDidMount=function(){C.auth().onAuthStateChanged((function(e){a.setState({isSignedIn:!!e}),console.log("user",e)}))},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Dashboard"},this.state.isSignedIn?o.a.createElement("div",{className:"Dash"},o.a.createElement(i.a,null,o.a.createElement("div",{className:"navbar"},o.a.createElement(x,null)),o.a.createElement("div",{className:"screen"},o.a.createElement(q.c,null,o.a.createElement(q.a,{path:"/dashboard/",exact:!0,component:J,className:"Default"}),o.a.createElement(q.a,{path:"/dashboard/maps",component:I,className:"Maps"}),o.a.createElement(q.a,{path:"/dashboard/data",component:_,className:"Data"}))))):o.a.createElement("span",{className:"signin"},o.a.createElement("h1",null,"Sign in to se your Dashboard"),o.a.createElement(S.a,{uiConfig:this.uiConfig,firebaseAuth:C.auth()})))}}]),t}(n.Component),V=(a(228),a(156)),Z=a.n(V);var K=function(){return o.a.createElement("div",{className:"FlexFooter"},o.a.createElement("div",{className:"component"},o.a.createElement("div",{className:"F-items"},o.a.createElement("img",{src:d.a,alt:"",className:"F-Logo"})),o.a.createElement("div",{className:"F-items"},o.a.createElement("img",{src:Z.a,alt:"",className:"F-Logo"}))),o.a.createElement("div",{className:"component"},o.a.createElement("a",{className:"BirdLogo",href:"https://webstockreview.net/image/sample-png-images/2237843.html?fbclid=IwAR3_ezc2F8ttQFWn4SlH8hNcSSEOIJh-ehFaoII1K_v83kUy0tWgZ7oOU3I"},"Logo attribution")))};var Q=function(){return o.a.createElement(i.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(m,null),o.a.createElement(q.c,null,o.a.createElement(q.a,{path:"/",exact:!0,component:p,className:"home"}),o.a.createElement(q.a,{path:"/about",component:b,className:"About"}),o.a.createElement(q.a,{path:"/dashboard",exact:!0,component:Y,className:"Dashboard"})),o.a.createElement(K,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},98:function(e,t,a){e.exports=a.p+"static/media/bird-logos-png.57c4a2ef.png"}},[[174,1,2]]]);
//# sourceMappingURL=main.4082265a.chunk.js.map