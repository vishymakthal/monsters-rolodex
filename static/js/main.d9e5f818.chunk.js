(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),c=n.n(a),s=(n(13),n(3)),i=n(4),l=n(6),u=n(5),m=n(7),h=(n(14),n(15),function(e){return o.a.createElement("div",{class:"card-container"},o.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set1&size=180x180")}),o.a.createElement("h2",null," ",e.monster.name),o.a.createElement("p",null," ",e.monster.email))}),d=function(e){return o.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return o.a.createElement(h,{monster:e})})))},f=(n(16),function(e){var t=e.placeholder,n=e.handler;return o.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=(n(17),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={monsters:[],searchField:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,r=t.searchField,a=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement(f,{placeholder:"Search Monsters",handler:function(t){return e.setState({searchField:t.target.value},(function(){return console.log()}))}}),o.a.createElement(d,{monsters:a}))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.d9e5f818.chunk.js.map