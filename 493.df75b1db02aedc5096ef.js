"use strict";(self.webpackChunkulby_course=self.webpackChunkulby_course||[]).push([[493],{5493:(e,r,n)=>{n.r(r),n.d(r,{default:()=>O});var t=n(4848),a=n(6540),o=n(5452),l=(0,o.zD)("profile/fetchProfileData",(function(e,r){var n,t,a,o,l=r.extra,c=(r.dispatch,r.rejectWithValue);return n=void 0,t=void 0,o=function(){var e;return function(e,r){var n,t,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(l=0)),l;)try{if(n=1,t&&(a=2&c[0]?t.return:c[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,c[1])).done)return a;switch(t=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return l.label++,{value:c[1],done:!1};case 5:l.label++,t=c[1],c=[0];continue;case 7:c=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==c[0]&&2!==c[0])){l=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){l.label=c[1];break}if(6===c[0]&&l.label<a[1]){l.label=a[1],a=c;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(c);break}a[2]&&l.ops.pop(),l.trys.pop();continue}c=r.call(e,l)}catch(e){c=[6,e],t=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}}(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,l.api.get("/profile")];case 1:return[2,r.sent().data];case 2:return e=r.sent(),console.log(e),[2,c("error")];case 3:return[2]}}))},new((a=void 0)||(a=Promise))((function(e,r){function l(e){try{i(o.next(e))}catch(e){r(e)}}function c(e){try{i(o.throw(e))}catch(e){r(e)}}function i(r){var n;r.done?e(r.value):(n=r.value,n instanceof a?n:new a((function(e){e(n)}))).then(l,c)}i((o=o.apply(n,t||[])).next())}))})),c=(0,o.Z0)({name:"profile",initialState:{readonly:!0,isLoading:!1,error:void 0,data:void 0},reducers:{},extraReducers:function(e){e.addCase(l.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(l.fulfilled,(function(e,r){e.isLoading=!1,e.data=r.payload})).addCase(l.rejected,(function(e,r){e.isLoading=!1,e.error=r.payload}))}}),i=(c.actions,c.reducer),u=n(7101);const s="data--mem1neCT",d="input--ZTyX8_n9";var f=n(1468),v=function(e){var r;return null===(r=null==e?void 0:e.profile)||void 0===r?void 0:r.data},p=function(e){var r;return null===(r=null==e?void 0:e.profile)||void 0===r?void 0:r.error},h=function(e){var r;return null===(r=null==e?void 0:e.profile)||void 0===r?void 0:r.isLoading},m=n(7228),x=n(2389),y=n(895),j=n(3729),b=function(e){var r=e.className,n=(0,x.Bd)("profile").t,a=(0,f.d4)(v);return(0,f.d4)(p),(0,f.d4)(h),(0,t.jsxs)("div",{className:(0,u.x)("ProfileCard--wW9jgKKD",{},[r]),children:[(0,t.jsxs)("div",{className:"header--nP7J5SWY",children:[(0,t.jsx)(m.E,{title:n("Профиль")}),(0,t.jsx)(y.$n,{className:"editBtn--LGXZAu9G",theme:y.Ox.OUTLINE,children:n("Редактировать")})]}),(0,t.jsx)("div",{className:s,children:(0,t.jsx)(j.p,{value:null==a?void 0:a.firstname,placeholder:n("Ваше имя"),className:d})}),(0,t.jsx)("div",{className:s,children:(0,t.jsx)(j.p,{value:null==a?void 0:a.lastname,placeholder:n("Ваша фамилия"),className:d})})]})},g=n(5301),N=n(6423),w={profile:i};const O=function(e){var r=e.className,n=((0,x.Bd)().t,(0,N.j)());return(0,a.useEffect)((function(){n(l())}),[n]),(0,t.jsx)(g.H,{reducers:w,removeAfterUnmount:!0,children:(0,t.jsx)("div",{className:(0,u.x)("",{},[r]),children:(0,t.jsx)(b,{})})})}},5301:(e,r,n)=>{n.d(r,{H:()=>l});var t=n(4848),a=n(6540),o=n(1468),l=function(e){var r=e.children,n=e.reducers,l=e.removeAfterUnmount,c=void 0===l||l,i=(0,o.Pj)(),u=(0,o.wA)();return(0,a.useEffect)((function(){return Object.entries(n).forEach((function(e){var r=e[0],n=e[1];i.reducerManager.add(r,n),u({type:"@INIT ".concat(r," reducer")})})),function(){c&&Object.entries(n).forEach((function(e){var r=e[0];e[1],i.reducerManager.remove(r),u({type:"@DESTROY ".concat(r," reducer")})}))}}),[]),(0,t.jsx)(t.Fragment,{children:r})}},3729:(e,r,n)=>{n.d(r,{p:()=>c});var t=n(4848),a=n(7101);var o=n(6540),l=function(){return l=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var a in r=arguments[n])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},l.apply(this,arguments)},c=function(e){var r=e.className,n=e.value,c=e.onChange,i=e.type,u=void 0===i?"text":i,s=e.placeholder,d=e.autofocus,f=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]])}return n}(e,["className","value","onChange","type","placeholder","autofocus"]),v=(0,o.useRef)(null),p=(0,o.useState)(!1),h=p[0],m=p[1],x=(0,o.useState)(0),y=x[0],j=x[1];return(0,o.useEffect)((function(){var e;d&&(m(!0),null===(e=v.current)||void 0===e||e.focus())}),[d]),(0,t.jsxs)("div",{className:(0,a.x)("InputWrapper--LuFDUWoP",{},[r]),children:[s&&(0,t.jsx)("div",{className:"placeholder--emAQQ85i",children:"".concat(s,">")}),(0,t.jsxs)("div",{className:"caretBlock--BD7irera",children:[(0,t.jsx)("input",l({type:u,value:n,onChange:function(e){null==c||c(e.target.value),j(e.target.value.length)},className:"input--LVdIPwcx",onFocus:function(){m(!0)},onBlur:function(){m(!1)},onSelect:function(e){var r;j(null===(r=null==e?void 0:e.target)||void 0===r?void 0:r.selectionStart)}},f)),h&&(0,t.jsx)("span",{className:"caret--lqMFGBuL",style:{left:"".concat(9*y,"px")}})]})]})}},7228:(e,r,n)=>{n.d(r,{E:()=>i,$:()=>l});var t=n(4848),a=n(7101);const o={title:"title--ikI7VPeL",text:"text--uNJeeCm1",error:"error--F9oLXAK4"};var l,c=n(6540);!function(e){e.NORMAL="normal",e.ERROR="error"}(l||(l={}));var i=(0,c.memo)((function(e){var r,n=e.className,c=e.title,i=e.text,u=e.theme,s=void 0===u?l.NORMAL:u;return(0,t.jsxs)("div",{className:(0,a.x)(o.Text,(r={},r[o[s]]=!0,r),[n]),children:[c&&(0,t.jsx)("p",{className:o.title,children:c}),i&&(0,t.jsx)("p",{className:o.text,children:i})]})}))},6423:(e,r,n)=>{n.d(r,{j:()=>t});var t=n(1468).wA}}]);