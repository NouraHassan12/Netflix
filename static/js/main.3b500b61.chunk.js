(this["webpackJsonpnetflix-app"]=this["webpackJsonpnetflix-app"]||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/logo.2ea85d74.png"},23:function(e,t,n){e.exports=n(65)},28:function(e,t,n){},46:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(16),c=n.n(r),i=(n(28),n(4)),l=n.n(i),s=n(5),u=n(3),m=n(17),v=n.n(m).a.create({baseURL:"https://api.themoviedb.org/3"}),d=(n(46),n(18)),f=n(21),h=n.n(f);function p(e){var t=e.title,n=e.fetchUrl,r=e.isLargeRow,c=Object(a.useState)([]),i=Object(u.a)(c,2),m=i[0],f=i[1],p=Object(a.useState)(""),g=Object(u.a)(p,2),b=g[0],w=g[1];Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(n);case 2:return t=e.sent,console.log(t.data.results),f(t.data.results),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),console.log("movvies",m);return o.a.createElement("div",{className:"row"},o.a.createElement("h1",null,t),o.a.createElement("div",{className:"row_posters"},m.map((function(e){return o.a.createElement("img",{key:e.id,src:"".concat("https://image.tmdb.org/t/p/original/").concat(r?e.poster_path:e.backdrop_path),alt:e.name,className:"row_poster ".concat(r&&"row_PosterLarge"),onClick:function(){return function(e){b?w(""):h()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);w(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)}})}))),b&&o.a.createElement(d.a,{videoId:b,opts:{height:"390",width:"100%",playerVars:{},autoplay:1}}))}var g="aa48e2ed8b81941f2548e862a1f57541",b={fetchtrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchDecumentsMovies:"/discover/movie?api_key=".concat(g,"&with_genres=99")};n(62);var w=function(){var e,t,n=Object(a.useState)([]),r=Object(u.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(b.fetchNetflixOriginals);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(c),o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"banner",style:{backgroundImage:'url(\n            "https://image.tmdb.org/t/p/original/'.concat(null===c||void 0===c?void 0:c.backdrop_path,'"\n        )'),backgroundSize:"cover",backgroundPosition:"center center"}},o.a.createElement("div",{className:"banner_contents"},o.a.createElement("h1",{className:"banner_title"},(null===c||void 0===c?void 0:c.title)||(null===c||void 0===c?void 0:c.name)||(null===c||void 0===c?void 0:c.original_name)),o.a.createElement("div",{className:"banner_buttons"},o.a.createElement("button",{className:"banner_button"},"play"),o.a.createElement("button",{className:"banner_button"},"more info")),o.a.createElement("h1",{className:"banner_description"},null===c||void 0===c?void 0:c.overview,(e=null===c||void 0===c?void 0:c.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))),o.a.createElement("div",{className:"banner_fadebottom"})))},E=(n(63),n(22)),_=n.n(E);n(64);var k=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?r(!0):r(!1)})),function(){window.removeEventListener("scroll")}}),[]),o.a.createElement("div",{className:"nav ".concat(n&&"nav_black")},o.a.createElement("img",{src:_.a,alt:"logo",className:"nav_logo"}))};var y=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(k,null),o.a.createElement(w,null),o.a.createElement(p,{title:"Netflix Originals",fetchUrl:b.fetchNetflixOriginals,isLargeRow:!0}),o.a.createElement(p,{title:"Trending Now",fetchUrl:b.fetchtrending}),o.a.createElement(p,{title:"Top Rated",fetchUrl:b.fetchTopRated}),o.a.createElement(p,{title:"Action Movies",fetchUrl:b.fetchActionMovies}),o.a.createElement(p,{title:"comedy Movies",fetchUrl:b.fetchComedyMovies}),o.a.createElement(p,{title:"Horror Movies",fetchUrl:b.fetchHorrorMovies}),o.a.createElement(p,{title:"Romance Movies",fetchUrl:b.fetchRomanceMovies}),o.a.createElement(p,{title:"Documentaries",fetchUrl:b.fetchDecumentsMovies}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.3b500b61.chunk.js.map