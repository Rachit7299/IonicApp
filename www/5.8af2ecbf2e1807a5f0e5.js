(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{XRsP:function(n,t,r){"use strict";r.r(t),r.d(t,"startHardwareBackButton",(function(){return c}));var e=r("o0o1"),a=r.n(e),o=r("HaE+"),c=function(){var n=document,t=!1;n.addEventListener("backbutton",(function(){if(!t){var r=[],e=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register:function(n,t){r.push({priority:n,handler:t})}}});if(n.dispatchEvent(e),r.length>0){var a,o=Number.MIN_SAFE_INTEGER;r.forEach((function(n){var t=n.priority;t>=o&&(o=t,a=n.handler)})),t=!0,u(a).then((function(){return t=!1}))}}}))},u=function(){var n=Object(o.a)(a.a.mark((function n(t){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!t){n.next=6;break}if(null==(r=t())){n.next=6;break}return n.next=6,r;case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()}}]);