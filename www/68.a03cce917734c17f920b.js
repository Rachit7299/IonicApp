(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{N3W9:function(i,e,n){"use strict";n.r(e),n.d(e,"ion_loading",(function(){return x}));var t=n("rePB"),a=n("o0o1"),o=n.n(a),s=n("HaE+"),r=n("1OyB"),d=n("vuIU"),c=n("c1op"),l=n("AfW+"),p=(n("aiEM"),n("+4pY")),m=n("pori"),g=n("Dl6n"),h=n("YtD4"),u=function(i){var e=Object(p.a)(),n=Object(p.a)(),t=Object(p.a)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,.3),t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),e.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,t])},f=function(i){var e=Object(p.a)(),n=Object(p.a)(),t=Object(p.a)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.3,0),t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),e.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,t])},b=function(i){var e=Object(p.a)(),n=Object(p.a)(),t=Object(p.a)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),e.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,t])},y=function(i){var e=Object(p.a)(),n=Object(p.a)(),t=Object(p.a)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.32,0),t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),e.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,t])},x=function(){function i(e){var n=this;Object(r.a)(this,i),Object(c.l)(this,e),this.presented=!1,this.mode=Object(c.d)(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){n.dismiss(void 0,m.a)},Object(m.e)(this.el),this.didPresent=Object(c.e)(this,"ionLoadingDidPresent",7),this.willPresent=Object(c.e)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(c.e)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(c.e)(this,"ionLoadingDidDismiss",7)}var e;return Object(d.a)(i,[{key:"componentWillLoad",value:function(){if(void 0===this.spinner){var i=Object(c.d)(this);this.spinner=l.b.get("loadingSpinner",l.b.get("spinner","ios"===i?"lines":"crescent"))}}},{key:"present",value:(e=Object(s.a)(o.a.mark((function i(){var e=this;return o.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Object(m.f)(this,"loadingEnter",u,b,void 0);case 2:this.duration>0&&(this.durationTimeout=setTimeout((function(){return e.dismiss()}),this.duration+10));case 3:case"end":return i.stop()}}),i,this)}))),function(){return e.apply(this,arguments)})},{key:"dismiss",value:function(i,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(m.g)(this,i,e,"loadingLeave",f,y)}},{key:"onDidDismiss",value:function(){return Object(m.h)(this.el,"ionLoadingDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(m.h)(this.el,"ionLoadingWillDismiss")}},{key:"render",value:function(){var i,e=this.message,n=this.spinner,a=Object(c.d)(this);return Object(c.i)(c.a,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:"".concat(4e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(g.b)(this.cssClass)),(i={},Object(t.a)(i,a,!0),Object(t.a)(i,"loading-translucent",this.translucent),i))},Object(c.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(c.i)("div",{class:"loading-wrapper",role:"dialog"},n&&Object(c.i)("div",{class:"loading-spinner"},Object(c.i)("ion-spinner",{name:n})),e&&Object(c.i)("div",{class:"loading-content",innerHTML:Object(h.a)(e)})))}},{key:"el",get:function(){return Object(c.f)(this)}}],[{key:"style",get:function(){return".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-md, .spinner-circles.sc-ion-loading-md, .spinner-crescent.sc-ion-loading-md, .spinner-dots.sc-ion-loading-md, .spinner-lines.sc-ion-loading-md, .spinner-lines-small.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50,#f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary,#3880ff);color:var(--ion-color-step-850,#262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0,0,0,.4);box-shadow:0 16px 20px rgba(0,0,0,.4)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}}]),i}()}}]);