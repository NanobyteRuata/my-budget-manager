import{d as Re}from"./chunk-JKGDERCN.js";import{a as ze,b as Ge}from"./chunk-AJ2S4FYV.js";import{G as ke,R as Pe}from"./chunk-QY7KXSDI.js";import{b as $,g as Ze}from"./chunk-ERUZ4UFU.js";import{$a as U,$b as Be,Aa as ye,B as b,Ba as Se,C,Ca as Te,Db as G,Fb as De,Ga as xe,H as h,Ha as Ie,I as _,Jb as Ue,Ka as Me,Lb as w,M as L,Ma as P,Mb as V,Na as D,O as H,Oa as z,Ob as B,S as he,Ta as we,U as o,Ua as O,Ub as je,V as d,Va as Ee,Vb as Fe,Xb as Ve,Y as _e,_a as Oe,a as fe,aa as ve,ac as le,b as ge,ba as m,bb as R,ca as u,cb as j,cc as pe,da as r,db as K,e as ae,ec as ce,fc as me,ga as S,gb as F,ha as s,hc as de,ia as p,ja as g,ka as oe,la as re,ma as T,mc as ue,na as E,oa as M,pa as c,qa as N,qb as Le,r as be,ra as A,rb as Ne,sa as Q,sb as Ae,tb as Y,ua as q,va as W,wa as x,wb as se,x as v,xa as y,ya as I,yb as J,za as Ce,zb as X}from"./chunk-UH7LMHMT.js";var nt=["*"];function at(t,n){t&1&&T(0)}function ot(t,n){if(t&1&&(s(0,"div",4),m(1,at,1,0,"ng-container",5),p()),t&2){let e=c();u("data-pc-section","start"),o(),r("ngTemplateOutlet",e.startTemplate)}}function rt(t,n){t&1&&T(0)}function st(t,n){if(t&1&&(s(0,"div",6),m(1,rt,1,0,"ng-container",5),p()),t&2){let e=c();u("data-pc-section","center"),o(),r("ngTemplateOutlet",e.centerTemplate)}}function lt(t,n){t&1&&T(0)}function pt(t,n){if(t&1&&(s(0,"div",7),m(1,lt,1,0,"ng-container",5),p()),t&2){let e=c();u("data-pc-section","end"),o(),r("ngTemplateOutlet",e.endTemplate)}}var Qe=(()=>{class t{el;style;styleClass;ariaLabelledBy;templates;startTemplate;endTemplate;centerTemplate;constructor(e){this.el=e}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"start":case"left":this.startTemplate=e.template;break;case"end":case"right":this.endTemplate=e.template;break;case"center":this.centerTemplate=e.template;break}})}static \u0275fac=function(i){return new(i||t)(d(H))};static \u0275cmp=b({type:t,selectors:[["p-toolbar"]],contentQueries:function(i,a,l){if(i&1&&Q(l,w,4),i&2){let f;q(f=W())&&(a.templates=f)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy"},ngContentSelectors:nt,decls:5,vars:9,consts:[["role","toolbar",3,"ngClass","ngStyle"],["class","p-toolbar-group-left p-toolbar-group-start",4,"ngIf"],["class","p-toolbar-group-center",4,"ngIf"],["class","p-toolbar-group-right p-toolbar-group-end",4,"ngIf"],[1,"p-toolbar-group-left","p-toolbar-group-start"],[4,"ngTemplateOutlet"],[1,"p-toolbar-group-center"],[1,"p-toolbar-group-right","p-toolbar-group-end"]],template:function(i,a){i&1&&(N(),s(0,"div",0),A(1),m(2,ot,2,2,"div",1)(3,st,2,2,"div",2)(4,pt,2,2,"div",3),p()),i&2&&(S(a.styleClass),r("ngClass","p-toolbar p-component")("ngStyle",a.style),u("aria-labelledby",a.ariaLabelledBy)("data-pc-name","toolbar"),o(2),r("ngIf",a.startTemplate),o(),r("ngIf",a.centerTemplate),o(),r("ngIf",a.endTemplate))},dependencies:[U,R,K,j],styles:[`@layer primeng{.p-toolbar{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.p-toolbar-group-start,.p-toolbar-group-center,.p-toolbar-group-end,.p-toolbar-group-left,.p-toolbar-group-right{display:flex;align-items:center}}
`],encapsulation:2,changeDetection:0})}return t})(),qe=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=C({type:t});static \u0275inj=v({imports:[F,V,V]})}return t})();var mt=["*"];function dt(t,n){if(t&1&&(s(0,"span",4),y(1),p()),t&2){let e=c();o(),I(e.label)}}function ut(t,n){if(t&1&&g(0,"span",6),t&2){let e=c(2);S(e.icon),r("ngClass","p-avatar-icon")}}function ft(t,n){if(t&1&&m(0,ut,1,3,"span",5),t&2){let e=c(),i=x(6);r("ngIf",e.icon)("ngIfElse",i)}}function gt(t,n){if(t&1){let e=E();s(0,"img",8),M("error",function(a){h(e);let l=c(2);return _(l.imageError(a))}),p()}if(t&2){let e=c(2);r("src",e.image,he),u("aria-label",e.ariaLabel)}}function bt(t,n){if(t&1&&m(0,gt,1,2,"img",7),t&2){let e=c();r("ngIf",e.image)}}var We=(()=>{class t{label;icon;image;size="normal";shape="square";style;styleClass;ariaLabel;ariaLabelledBy;onImageError=new L;containerClass(){return{"p-avatar p-component":!0,"p-avatar-image":this.image!=null,"p-avatar-circle":this.shape==="circle","p-avatar-lg":this.size==="large","p-avatar-xl":this.size==="xlarge"}}imageError(e){this.onImageError.emit(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=b({type:t,selectors:[["p-avatar"]],hostAttrs:[1,"p-element"],inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},ngContentSelectors:mt,decls:7,vars:9,consts:[["iconTemplate",""],["imageTemplate",""],[3,"ngClass","ngStyle"],["class","p-avatar-text",4,"ngIf","ngIfElse"],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(i,a){if(i&1&&(N(),s(0,"div",2),A(1),m(2,dt,2,1,"span",3)(3,ft,1,2,"ng-template",null,0,z)(5,bt,1,1,"ng-template",null,1,z),p()),i&2){let l=x(4);S(a.styleClass),r("ngClass",a.containerClass())("ngStyle",a.style),u("aria-labelledby",a.ariaLabelledBy)("aria-label",a.ariaLabel)("data-pc-name","avatar"),o(2),r("ngIf",a.label)("ngIfElse",l)}},dependencies:[U,R,j],styles:[`@layer primeng{.p-avatar{display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;font-size:1rem}.p-avatar.p-avatar-image{background-color:transparent}.p-avatar.p-avatar-circle{border-radius:50%;overflow:hidden}.p-avatar .p-avatar-icon{font-size:1rem}.p-avatar img{width:100%;height:100%}}
`],encapsulation:2,changeDetection:0})}return t})(),Ke=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=C({type:t});static \u0275inj=v({imports:[F]})}return t})();var Ye=[{label:"DASHBOARD.TITLE",icon:"pi pi-objects-column",routerLink:"/",routerLinkActiveOptions:{exact:!0}},{label:"ACCOUNTS.TITLE",icon:"pi pi-building-columns",routerLink:"/accounts",routerLinkActiveOptions:{exact:!1}},{label:"SETTINGS.TITLE",icon:"pi pi-cog",routerLink:"/settings",routerLinkActiveOptions:{exact:!1}}];var _t=["*"],vt=(t,n,e,i,a,l)=>({"p-sidebar":!0,"p-sidebar-active":t,"p-sidebar-left":n,"p-sidebar-right":e,"p-sidebar-top":i,"p-sidebar-bottom":a,"p-sidebar-full":l}),Ct=(t,n)=>({transform:t,transition:n}),yt=t=>({value:"visible",params:t});function St(t,n){t&1&&T(0)}function Tt(t,n){if(t&1&&(oe(0),m(1,St,1,0,"ng-container",5),re()),t&2){let e=c(2);o(),r("ngTemplateOutlet",e.headlessTemplate)}}function xt(t,n){t&1&&T(0)}function It(t,n){t&1&&g(0,"TimesIcon",13),t&2&&(r("styleClass","p-sidebar-close-icon"),u("data-pc-section","closeicon"))}function Mt(t,n){}function wt(t,n){t&1&&m(0,Mt,0,0,"ng-template")}function Et(t,n){if(t&1&&(s(0,"span",14),m(1,wt,1,0,null,5),p()),t&2){let e=c(4);u("data-pc-section","closeicon"),o(),r("ngTemplateOutlet",e.closeIconTemplate)}}function Ot(t,n){if(t&1){let e=E();s(0,"button",10),M("click",function(a){h(e);let l=c(3);return _(l.close(a))})("keydown.enter",function(a){h(e);let l=c(3);return _(l.close(a))}),m(1,It,1,2,"TimesIcon",11)(2,Et,2,2,"span",12),p()}if(t&2){let e=c(3);u("aria-label",e.ariaCloseLabel)("data-pc-section","closebutton")("data-pc-group-section","iconcontainer"),o(),r("ngIf",!e.closeIconTemplate),o(),r("ngIf",e.closeIconTemplate)}}function kt(t,n){t&1&&T(0)}function Lt(t,n){t&1&&T(0)}function Nt(t,n){if(t&1&&(oe(0),s(1,"div",15),m(2,Lt,1,0,"ng-container",5),p(),re()),t&2){let e=c(3);o(),u("data-pc-section","footer"),o(),r("ngTemplateOutlet",e.footerTemplate)}}function At(t,n){if(t&1&&(s(0,"div",6),m(1,xt,1,0,"ng-container",5)(2,Ot,3,5,"button",7),p(),s(3,"div",8),A(4),m(5,kt,1,0,"ng-container",5),p(),m(6,Nt,3,2,"ng-container",9)),t&2){let e=c(2);u("data-pc-section","header"),o(),r("ngTemplateOutlet",e.headerTemplate),o(),r("ngIf",e.showCloseIcon),o(),u("data-pc-section","content"),o(2),r("ngTemplateOutlet",e.contentTemplate),o(),r("ngIf",e.footerTemplate)}}function Pt(t,n){if(t&1){let e=E();s(0,"div",3,0),M("@panelState.start",function(a){h(e);let l=c();return _(l.onAnimationStart(a))})("@panelState.done",function(a){h(e);let l=c();return _(l.onAnimationEnd(a))})("keydown",function(a){h(e);let l=c();return _(l.onKeyDown(a))}),m(2,Tt,2,1,"ng-container",4)(3,At,7,6,"ng-template",null,1,z),p()}if(t&2){let e=x(4),i=c();S(i.styleClass),r("ngClass",Me(9,vt,i.visible,i.position==="left"&&!i.fullScreen,i.position==="right"&&!i.fullScreen,i.position==="top"&&!i.fullScreen,i.position==="bottom"&&!i.fullScreen,i.fullScreen))("@panelState",xe(19,yt,Ie(16,Ct,i.transformOptions,i.transitionOptions)))("ngStyle",i.style),u("data-pc-name","sidebar")("data-pc-section","root"),o(2),r("ngIf",i.headlessTemplate)("ngIfElse",e)}}var Dt=me([pe({transform:"{{transform}}",opacity:0}),le("{{transition}}")]),Ut=me([le("{{transition}}",pe({transform:"{{transform}}",opacity:0}))]),Xe=(()=>{class t{document;el;renderer;cd;config;appendTo;blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(e){this._visible=e}get position(){return this._position}set position(e){switch(this._position=e,e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e&&(this.transformOptions="none")}templates;onShow=new L;onHide=new L;visibleChange=new L;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions="translate3d(-100%, 0px, 0px)";mask;maskClickListener;documentEscapeListener;animationEndListener;contentTemplate;headerTemplate;footerTemplate;closeIconTemplate;headlessTemplate;constructor(e,i,a,l,f){this.document=e,this.el=i,this.renderer=a,this.cd=l,this.config=f}ngAfterViewInit(){this.initialized=!0}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"header":this.headerTemplate=e.template;break;case"footer":this.footerTemplate=e.template;break;case"closeicon":this.closeIconTemplate=e.template;break;case"headless":this.headlessTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.autoZIndex&&G.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(".p-sidebar-active"),a=e.length==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[0].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),this.renderer.setStyle(this.mask,"zIndex",a),B.addMultipleClasses(this.mask,"p-component-overlay p-sidebar-mask p-component-overlay p-component-overlay-enter"),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",l=>{this.dismissible&&this.close(l)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&B.blockBodyScroll())}disableModality(){this.mask&&(B.addClass(this.mask,"p-component-overlay-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&B.unblockBodyScroll(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),G.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):B.appendChild(this.container,this.appendTo))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",i=>{i.which==27&&parseInt(this.container.style.zIndex)===G.get(this.container)&&this.close(i)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&G.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=function(i){return new(i||t)(d(Oe),d(H),d(_e),d(we),d(Ue))};static \u0275cmp=b({type:t,selectors:[["p-sidebar"]],contentQueries:function(i,a,l){if(i&1&&Q(l,w,4),i&2){let f;q(f=W())&&(a.templates=f)}},hostAttrs:[1,"p-element"],inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",O],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",O],baseZIndex:[2,"baseZIndex","baseZIndex",Ee],modal:[2,"modal","modal",O],dismissible:[2,"dismissible","dismissible",O],showCloseIcon:[2,"showCloseIcon","showCloseIcon",O],closeOnEscape:[2,"closeOnEscape","closeOnEscape",O],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[ve],ngContentSelectors:_t,decls:1,vars:1,consts:[["container",""],["notHeadless",""],["role","complementary",3,"ngClass","ngStyle","class","keydown",4,"ngIf"],["role","complementary",3,"keydown","ngClass","ngStyle"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],[1,"p-sidebar-header"],["type","button","class","p-sidebar-close p-sidebar-icon p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],[1,"p-sidebar-content"],[4,"ngIf"],["type","button","pRipple","",1,"p-sidebar-close","p-sidebar-icon","p-link",3,"click","keydown.enter"],[3,"styleClass",4,"ngIf"],["class","p-sidebar-close-icon",4,"ngIf"],[3,"styleClass"],[1,"p-sidebar-close-icon"],[1,"p-sidebar-footer"]],template:function(i,a){i&1&&(N(),m(0,Pt,5,21,"div",2)),i&2&&r("ngIf",a.visible)},dependencies:()=>[U,R,K,j,je,ue],styles:[`@layer primeng{.p-sidebar{position:fixed;transition:transform .3s;display:flex;flex-direction:column}.p-sidebar-content{position:relative;overflow-y:auto;flex-grow:1}.p-sidebar-header{display:flex;align-items:center}.p-sidebar-footer{margin-top:auto}.p-sidebar-icon{display:flex;align-items:center;justify-content:center;margin-left:auto}.p-sidebar-left{top:0;left:0;width:20rem;height:100%}.p-sidebar-right{top:0;right:0;width:20rem;height:100%}.p-sidebar-top{top:0;left:0;width:100%;height:10rem}.p-sidebar-bottom{bottom:0;left:0;width:100%;height:10rem}.p-sidebar-full{width:100%;height:100%;top:0;left:0;-webkit-transition:none;transition:none}.p-sidebar-left.p-sidebar-sm,.p-sidebar-right.p-sidebar-sm{width:20rem}.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-md{width:40rem}.p-sidebar-left.p-sidebar-lg,.p-sidebar-right.p-sidebar-lg{width:60rem}.p-sidebar-top.p-sidebar-sm,.p-sidebar-bottom.p-sidebar-sm{height:10rem}.p-sidebar-top.p-sidebar-md,.p-sidebar-bottom.p-sidebar-md{height:20rem}.p-sidebar-top.p-sidebar-lg,.p-sidebar-bottom.p-sidebar-lg{height:30rem}@media screen and (max-width: 64em){.p-sidebar-left.p-sidebar-lg,.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-lg,.p-sidebar-right.p-sidebar-md{width:20rem}}}
`],encapsulation:2,data:{animation:[Be("panelState",[ce("void => visible",[de(Dt)]),ce("visible => void",[de(Ut)])])]},changeDetection:0})}return t})(),$e=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=C({type:t});static \u0275inj=v({imports:[F,Fe,V,ue,V]})}return t})();function Vt(t,n){t&1&&(s(0,"h4",4),y(1),P(2,"translate"),p()),t&2&&(o(),I(D(2,1,"COMMON.APP_NAME")))}var ee=class t{constructor(n,e){this.router=n;this.translateService=e;this.detectRouteChanges(),this.initNav()}isSidebarOpen=!1;navItems=[];selectedNavItem;routerNavigationChangeSubscription;initNav=()=>{this.translateService.onLangChange.subscribe({next:()=>this.getNavItemsAndTranslate()}),this.getNavItemsAndTranslate().then()};getNavItemsAndTranslate=()=>ae(this,null,function*(){let n=[];for(let e of Ye)n.push(ge(fe({},e),{label:yield this.getTranslation(e.label),command:()=>this.toggleSidebar(!1)}));this.navItems=n,this.setSelectedNav(this.router.url)});getTranslation=n=>ae(this,null,function*(){return n?new Promise((e,i)=>{this.translateService.get(n).subscribe({next:a=>e(a),error:a=>{console.error(a),i("")}})}):""});detectRouteChanges=()=>{this.routerNavigationChangeSubscription=this.router.events.pipe(be(n=>n instanceof Le)).subscribe(n=>this.setSelectedNav(n.url))};setSelectedNav=n=>{this.selectedNavItem=this.navItems.find(e=>e.routerLink===n)};toggleSidebar=n=>{this.isSidebarOpen=n??!this.isSidebarOpen};ngOnDestroy=()=>{this.routerNavigationChangeSubscription.unsubscribe()};static \u0275fac=function(e){return new(e||t)(d(Y),d(J))};static \u0275cmp=b({type:t,selectors:[["app-nav"]],decls:5,vars:3,consts:[[1,"nav-web"],["id","nav-menu",3,"model"],["position","left",1,"nav-mobile",3,"visibleChange","visible"],["pTemplate","header"],[1,"sidebar-nav-title"]],template:function(e,i){e&1&&(s(0,"div",0),g(1,"p-menu",1),p(),s(2,"p-sidebar",2),Te("visibleChange",function(l){return Se(i.isSidebarOpen,l)||(i.isSidebarOpen=l),l}),m(3,Vt,3,3,"ng-template",3),g(4,"p-menu",1),p()),e&2&&(o(),r("model",i.navItems),o(),ye("visible",i.isSidebarOpen),o(2),r("model",i.navItems))},dependencies:[w,$,Xe,X],styles:[".p-menuitem-content{color:var(--surface-400)}  .p-menuitem-content .p-menuitem-icon,   .p-menuitem-content .p-menuitem-text{color:var(--surface-400)}  .p-menuitem-content:has(.p-menuitem-link-active){background:var(--surface-100);color:var(--surface-900)}  .p-menuitem-content:has(.p-menuitem-link-active) .p-menuitem-icon,   .p-menuitem-content:has(.p-menuitem-link-active) .p-menuitem-text{color:var(--surface-900)}.sidebar-nav-title[_ngcontent-%COMP%]{padding:12px}.nav-web[_ngcontent-%COMP%]{margin-right:16px}.nav-mobile[_ngcontent-%COMP%]{display:none}@media only screen and (max-width: 800px){.nav-web[_ngcontent-%COMP%]{display:none}.nav-mobile[_ngcontent-%COMP%]{display:block}.nav-mobile[_ngcontent-%COMP%]     .p-menu{width:100%}}"]})};function zt(t,n){if(t&1&&(s(0,"div",15)(1,"h4"),y(2),p()()),t&2){let e,i=c();o(2),I((e=i.currentUser==null?null:i.currentUser.displayName)!==null&&e!==void 0?e:i.currentUser==null?null:i.currentUser.email)}}function Gt(t,n){if(t&1&&(s(0,"a",16),g(1,"span"),s(2,"span"),y(3),P(4,"translate"),p()()),t&2){let e=n.$implicit;o(),S(e.icon),o(2),I(D(4,3,e.label))}}var te=class t{constructor(n,e,i,a,l){this.auth=n;this.router=e;this.confirmationService=i;this.translateService=a;this.themeService=l;this.getCurrentUser()}currentUser=null;currentUserPhotoURL;profileActions=[{label:"FEATURES.SIGN_OUT",icon:"pi pi-sign-out",command:()=>this.onLogoutClick()}];getCurrentUser=()=>{this.auth.authStateReady().then(()=>{this.currentUser=this.auth.currentUser,this.currentUser?.photoURL&&(this.currentUserPhotoURL=structuredClone(this.currentUser.photoURL))})};onLogoutClick=()=>{let n=["FEATURES.SIGN_OUT","FEATURES.SIGN_OUT_CONFIRM_MESSAGE","COMMON.YES","COMMON.NO"];this.translateService.get(n).subscribe({next:e=>{this.confirmationService.confirm({message:e["FEATURES.SIGN_OUT_CONFIRM_MESSAGE"],header:e["FEATURES.SIGN_OUT"],icon:"pi pi-sign-out",acceptButtonStyleClass:"p-button-danger p-button-text",rejectButtonStyleClass:"p-button-text",acceptIcon:"none",rejectIcon:"none",acceptLabel:e["COMMON.YES"],rejectLabel:e["COMMON.NO"],accept:()=>{this.auth.signOut().then(()=>this.redirectToLogin())}})}})};redirectToLogin=()=>{this.router.navigateByUrl("/login")};static \u0275fac=function(e){return new(e||t)(d(ke),d(Y),d(De),d(J),d(Pe))};static \u0275cmp=b({type:t,selectors:[["app-layout"]],decls:27,vars:11,consts:[["profileActionsMenu",""],["nav",""],[1,"features-container"],[1,"p-toolbar-group-start"],[1,"web"],["icon","pi pi-bars","severity","secondary",1,"mobile",3,"onClick"],[1,"mobile"],[1,"p-toolbar-group-end"],[1,"profile-actions-toggle",3,"click"],["size","normal","shape","circle",3,"image","label"],[3,"model","popup"],["pTemplate","start"],["pTemplate","item"],[1,"content-wrapper"],[1,"feature-wrapper","p-panel"],[1,"profile-name-wrapper","mobile"],[1,"p-menuitem-link"]],template:function(e,i){if(e&1){let a=E();s(0,"div",2)(1,"p-toolbar")(2,"div",3)(3,"h2",4),y(4),P(5,"translate"),p(),s(6,"p-button",5),M("onClick",function(){h(a);let f=x(23);return _(f.toggleSidebar())}),p(),s(7,"h2",6),y(8),P(9,"translate"),p()(),s(10,"div",7),g(11,"app-language-changer")(12,"app-btn-theme-toggle"),s(13,"div",8),M("click",function(f){h(a);let Z=x(18);return _(Z.toggle(f))}),g(14,"p-avatar",9),s(15,"h4",4),y(16),p()(),s(17,"p-menu",10,0),m(19,zt,3,1,"ng-template",11)(20,Gt,5,5,"ng-template",12),p()()(),s(21,"div",13),g(22,"app-nav",null,1),s(24,"div",14),g(25,"ng-component")(26,"div"),p()()()}if(e&2){let a,l,f,Z=x(23);o(4),I(D(5,7,"COMMON.APP_NAME")),o(4),I(D(9,9,(a=Z.selectedNavItem==null?null:Z.selectedNavItem.label)!==null&&a!==void 0?a:"")),o(6),r("image",(l=i.currentUserPhotoURL)!==null&&l!==void 0?l:void 0)("label",i.currentUserPhotoURL?void 0:i.currentUser==null||i.currentUser.displayName==null?null:i.currentUser.displayName.charAt(0)),o(2),Ce(" ",(f=i.currentUser==null?null:i.currentUser.displayName)!==null&&f!==void 0?f:i.currentUser==null?null:i.currentUser.email," "),o(),r("model",i.profileActions)("popup",!0)}},dependencies:[Ve,w,$,Ae,ze,Ge,Qe,We,ee,X],styles:[".features-container[_ngcontent-%COMP%]{width:100vw;height:100vh;display:flex;flex-direction:column;align-items:stretch;padding:16px;gap:16px}.features-container[_ngcontent-%COMP%]   .p-toolbar-group-start[_ngcontent-%COMP%], .features-container[_ngcontent-%COMP%]   .p-toolbar-group-end[_ngcontent-%COMP%], .features-container[_ngcontent-%COMP%]   .p-menuitem-link[_ngcontent-%COMP%]{gap:8px}.features-container[_ngcontent-%COMP%]   .p-toolbar-group-start[_ngcontent-%COMP%]   .web[_ngcontent-%COMP%], .features-container[_ngcontent-%COMP%]   .p-toolbar-group-start[_ngcontent-%COMP%]   .mobile[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.features-container[_ngcontent-%COMP%]   .p-toolbar-group-end[_ngcontent-%COMP%]   .profile-actions-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;cursor:pointer}.features-container[_ngcontent-%COMP%]   .p-toolbar-group-end[_ngcontent-%COMP%]   .profile-actions-toggle[_ngcontent-%COMP%]   p-avatar[_ngcontent-%COMP%]{height:24px}.features-container[_ngcontent-%COMP%]   .p-toolbar-group-end[_ngcontent-%COMP%]   .profile-name-wrapper[_ngcontent-%COMP%]{padding:8px}.features-container[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{flex:1;display:flex}.features-container[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .feature-wrapper[_ngcontent-%COMP%]{width:100%;padding:.75rem}"]})};var ie=class t{constructor(n){this.settingsService=n}static \u0275fac=function(e){return new(e||t)(d(Re))};static \u0275cmp=b({type:t,selectors:[["app-features"]],decls:2,vars:0,template:function(e,i){e&1&&(s(0,"app-layout"),g(1,"router-outlet"),p())},dependencies:[Ne,te]})};var Ht=[{path:"",component:ie,children:[{path:"",loadChildren:()=>import("./chunk-IP2UOIML.js").then(t=>t.DashboardModule)},{path:"accounts",loadChildren:()=>import("./chunk-PMYR3YQU.js").then(t=>t.AccountsModule)},{path:"settings",loadChildren:()=>import("./chunk-TT5Y4F5Q.js").then(t=>t.SettingsModule)}]}],ne=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=C({type:t});static \u0275inj=v({imports:[se.forChild(Ht),se]})};var it=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=C({type:t});static \u0275inj=v({imports:[Ze,ne,qe,$e,Ke]})};export{it as FeaturesModule};
