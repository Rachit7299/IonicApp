(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{upP9:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_toggle",(function(){return h}));var i=n("rePB"),o=n("o0o1"),r=n.n(o),a=n("HaE+"),s=n("1OyB"),c=n("vuIU"),d=n("c1op"),l=(n("AfW+"),n("aiEM")),g=n("Dl6n"),u=n("opz7"),h=function(){function t(e){var n=this;Object(s.a)(this,t),Object(d.l)(this,e),this.inputId="ion-tg-".concat(p++),this.lastDrag=0,this.activated=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onClick=function(){n.lastDrag+300<Date.now()&&(n.checked=!n.checked)},this.onFocus=function(){n.ionFocus.emit()},this.onBlur=function(){n.ionBlur.emit()},this.ionChange=Object(d.e)(this,"ionChange",7),this.ionFocus=Object(d.e)(this,"ionFocus",7),this.ionBlur=Object(d.e)(this,"ionBlur",7),this.ionStyle=Object(d.e)(this,"ionStyle",7)}var e;return Object(c.a)(t,[{key:"checkedChanged",value:function(t){this.ionChange.emit({checked:t,value:this.value})}},{key:"disabledChanged",value:function(){this.emitStyle(),this.gesture&&this.gesture.setDisabled(this.disabled)}},{key:"connectedCallback",value:(e=Object(a.a)(r.a.mark((function t(){var e=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.bind(null,"mUkt"));case 2:this.gesture=t.sent.createGesture({el:this.el,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:function(){return e.onStart()},onMove:function(t){return e.onMove(t)},onEnd:function(t){return e.onEnd(t)}}),this.disabledChanged();case 4:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"componentWillLoad",value:function(){this.emitStyle()}},{key:"emitStyle",value:function(){this.ionStyle.emit({"interactive-disabled":this.disabled})}},{key:"onStart",value:function(){this.activated=!0,this.setFocus()}},{key:"onMove",value:function(t){b(document,this.checked,t.deltaX,-10)&&(this.checked=!this.checked,Object(u.d)())}},{key:"onEnd",value:function(t){this.activated=!1,this.lastDrag=Date.now(),t.event.preventDefault(),t.event.stopImmediatePropagation()}},{key:"getValue",value:function(){return this.value||""}},{key:"setFocus",value:function(){this.buttonEl&&this.buttonEl.focus()}},{key:"render",value:function(){var t,e=this,n=this.inputId,o=this.disabled,r=this.checked,a=this.activated,s=this.color,c=this.el,u=Object(d.d)(this),h=n+"-lbl",b=Object(l.f)(c),p=this.getValue();return b&&(b.id=h),Object(l.a)(!0,c,this.name,r?p:"",o),Object(d.i)(d.a,{onClick:this.onClick,role:"checkbox","aria-disabled":o?"true":null,"aria-checked":"".concat(r),"aria-labelledby":h,class:Object.assign(Object.assign({},Object(g.a)(s)),(t={},Object(i.a)(t,u,!0),Object(i.a)(t,"in-item",Object(g.c)("ion-item",c)),Object(i.a)(t,"toggle-activated",a),Object(i.a)(t,"toggle-checked",r),Object(i.a)(t,"toggle-disabled",o),Object(i.a)(t,"interactive",!0),t))},Object(d.i)("div",{class:"toggle-icon"},Object(d.i)("div",{class:"toggle-inner"})),Object(d.i)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:o,ref:function(t){return e.buttonEl=t}}))}},{key:"el",get:function(){return Object(d.f)(this)}}],[{key:"watchers",get:function(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}},{key:"style",get:function(){return":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}:host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.3);--background-checked:rgba(var(--ion-color-primary-rgb,56,128,255),0.5);--handle-background:#fff;--handle-background-checked:var(--ion-color-primary,#3880ff);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb),.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}.toggle-icon{border-radius:14px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .16s;transition:background-color .16s;background:var(--background);pointer-events:none}.toggle-inner{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;-webkit-transition-duration:.16s;transition-duration:.16s;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);background:var(--handle-background);-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);will-change:transform,background-color;contain:strict}:host-context([dir=rtl]) .toggle-inner,[dir=rtl] .toggle-inner{left:unset;right:unset;right:0}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(16px,0,0);transform:translate3d(16px,0,0);background:var(--handle-background-checked)}:host-context([dir=rtl]).toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(-1 * 16px),0,0);transform:translate3d(calc(-1 * 16px),0,0)}:host(.toggle-disabled){opacity:.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:0;padding-top:12px;padding-bottom:12px;cursor:pointer}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0}}:host(.in-item[slot=start]){padding-left:2px;padding-right:18px;padding-top:12px;padding-bottom:12px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px}}"}}]),t}(),b=function(t,e,n,i){var o="rtl"===t.dir;return e?!o&&i>n||o&&-i<n:!o&&-i<n||o&&i>n},p=0}}]);