import{K as L}from"./chunk-KF5DAMYZ.js";import{a as _,c as y,d as M,e as b}from"./chunk-CBHB2D62.js";import{Aa as d,B as p,Ba as h,Ca as f,Kb as C,Lb as T,Ma as a,Na as r,V as g,Wb as S,da as s,eb as v,ha as m,ia as l,oa as c}from"./chunk-3FXFYCFX.js";var w=class o{constructor(n){this.themeService=n}static \u0275fac=function(e){return new(e||o)(g(L))};static \u0275cmp=p({type:o,selectors:[["app-btn-theme-toggle"]],decls:5,vars:13,consts:[["tooltipPosition","bottom",1,"btn-theme-switch",3,"onClick","outlined","rounded","icon","severity","pTooltip"]],template:function(e,t){e&1&&(m(0,"p-button",0),a(1,"async"),a(2,"async"),a(3,"async"),a(4,"translate"),c("onClick",function(){return t.themeService.toggleTheme()}),l()),e&2&&s("outlined",!0)("rounded",!0)("icon",r(1,5,t.themeService.activeTheme$)==="dark"?"pi pi-sun":"pi pi-moon")("severity",r(2,7,t.themeService.activeTheme$)==="dark"?"warning":"contrast")("pTooltip",r(4,11,r(3,9,t.themeService.activeTheme$)==="dark"?"COMMON.TOOLTIP_LIGHT":"COMMON.TOOLTIP_DARK"))},dependencies:[_,S,v,T]})};var B=[{value:"en",icon:"\u{1F1EC}\u{1F1E7}"},{value:"mm",icon:"\u{1F1F2}\u{1F1F2}"}];var N=class o{constructor(n){this.translateService=n;this.getSelectedLanguage(this.translateService.store.currentLang)}selectedLanguage;languages=B;getSelectedLanguage=n=>{this.selectedLanguage=this.languages.find(e=>e.value===n)||this.languages[0]};onSelectedLanguageChange=n=>{this.translateService.use(n.value),localStorage.setItem("language",n.value)};static \u0275fac=function(e){return new(e||o)(g(C))};static \u0275cmp=p({type:o,selectors:[["app-language-changer"]],decls:1,vars:2,consts:[["optionLabel","icon",3,"ngModelChange","options","ngModel"]],template:function(e,t){e&1&&(m(0,"p-dropdown",0),f("ngModelChange",function(i){return h(t.selectedLanguage,i)||(t.selectedLanguage=i),i}),c("ngModelChange",function(i){return t.onSelectedLanguageChange(i)}),l()),e&2&&(s("options",t.languages),d("ngModel",t.selectedLanguage))},dependencies:[y,M,b]})};export{w as a,N as b};
