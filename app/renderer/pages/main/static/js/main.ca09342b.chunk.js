(this["webpackJsonpmain--use-npm"]=this["webpackJsonpmain--use-npm"]||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t.n(r),c=t(6),o=t.n(c),i=t(1),s=t.n(i),u=t(3),d=t(4),p=(t(13),t(7)),f=t.n(p),l=window.require("electron"),h=l.ipcRenderer,w=l.desktopCapturer,b=new f.a;window.peer=b,h.on("offer",(function(e,n){console.log("init pc",n);var t=new window.RTCPeerConnection;function r(){return a.apply(this,arguments)}function a(){return(a=Object(u.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getSources({types:["screen"]});case 2:return n=e.sent,e.abrupt("return",new Promise((function(e,t){navigator.webkitGetUserMedia({audio:!1,video:{mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:n[0].id,maxWidth:window.screen.width,maxHeight:window.screen.height}}},(function(n){console.log("add-stream",n),e(n)}),t)})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return(c=Object(u.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&n.type){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.addIceCandidate(new RTCIceCandidate(n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=Object(u.a)(s.a.mark((function e(n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:return a=e.sent,t.addStream(a),e.next=6,t.setRemoteDescription(n);case 6:return e.t0=t,e.next=9,t.createAnswer();case 9:return e.t1=e.sent,e.next=12,e.t0.setLocalDescription.call(e.t0,e.t1);case 12:return console.log("create answer \n",JSON.stringify(t.localDescription)),e.abrupt("return",t.localDescription);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.ondatachannel=function(e){console.log("data",e),e.channel.onmessage=function(e){console.log("onmessage",e,JSON.parse(e.data));var n=JSON.parse(e.data),t=n.type,r=n.data;console.log("robot",t,r),"mouse"===t&&(r.screen={width:window.screen.width,height:window.screen.height}),h.send("robot",t,r)}},t.onicecandidate=function(e){h.send("forward","puppet-candidate",e.candidate)},window.addIceCandidate=function(e){return c.apply(this,arguments)},function(e){return o.apply(this,arguments)}(n).then((function(e){h.send("forward","answer",{type:e.type,sdp:e.sdp})}))}));var g=t(0),j=window.require("electron").ipcRenderer,v=function(e){var n=Object(r.useState)(""),t=Object(d.a)(n,2),a=t[0],c=t[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),p=i[0],f=i[1],l=Object(r.useState)(""),h=Object(d.a)(l,2),w=h[0],b=h[1],v=function(){var e=Object(u.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.invoke("login");case 2:n=e.sent,f(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){return v(),j.on("control-state-change",m),function(){j.removeListener("control-state-change",m)}}),[]);var m=function(e,n,t){var r="";r=1===t?"\u6b63\u5728\u63a7\u5236\u8fdc\u7a0b".concat(n):2===t?"\u88ab".concat(n,"\u63a7\u5236\u4e2d"):"",b(r)};return Object(g.jsx)("div",{className:"container",children:""===w?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{children:["\u4f60\u7684\u63a7\u5236\u7801",p]}),Object(g.jsx)("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)}}),Object(g.jsx)("button",{onClick:function(){return function(e){j.send("control",e)}(a)},children:"\u786e\u8ba4"})]}):Object(g.jsx)("div",{children:w})})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(v,{})}),document.getElementById("root")),m()},7:function(e,n){e.exports=require("events")}},[[15,1,2]]]);
//# sourceMappingURL=main.ca09342b.chunk.js.map