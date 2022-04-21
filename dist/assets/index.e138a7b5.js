var he=Object.defineProperty,ue=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var Y=(s,i,a)=>i in s?he(s,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[i]=a,v=(s,i)=>{for(var a in i||(i={}))me.call(i,a)&&Y(s,a,i[a]);if(J)for(var a of J(i))ge.call(i,a)&&Y(s,a,i[a]);return s},w=(s,i)=>ue(s,pe(i));import{j as e,B as _,r,a as P,b as t,N as f,A as W,F as $,i as _e,g as ve,c as Z,u as ee,d as te,e as F,f as ae,T as se,s as fe,S as Ne,E as ye,P as be,h as Se,k as A,l as Pe,m as xe,R as we,n as z,o as K,C as B,p as O,W as ie,q as Ce,t as Le,v as ke,w as $e,x as Ie,y as De,z as D,D as Ee,G as Te}from"./vendor.eca19b32.js";const Re=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(o){if(o.ep)return;o.ep=!0;const c=a(o);fetch(o.href,c)}};Re();const Ae="http://localhost:8080";function qe(){return e(_,{href:`${Ae}/auth/logout`,children:"Log out"})}const Ue="http://localhost:8080";function q(s){const[i,a]=r.exports.useState(!1),[l,o]=r.exports.useState(""),c=()=>{P.get(`${Ue}/auth/profile`,{withCredentials:!0}).then(d=>{d.data&&(a(!0),o(d.data))}).catch(d=>console.log(d))};return r.exports.useEffect(()=>{c()},[i]),{isLoggedIn:i,userInfo:l}}function Me(){const{userInfo:s,isLoggedIn:i}=q(),[a,l]=r.exports.useState(!1),o=()=>{l(!a)};return t("header",{className:"header",children:[e(f,{className:"navLink fontStyle",activeClassName:"activeheader",to:"/",children:t("div",{className:"header__logo",children:["Vi",e("span",{className:"header__logo--special",children:"ll"}),"ge"]})}),i?t("div",{children:[e(W,{onClick:o,sx:{width:56,height:56},className:"header__userIcon",src:s.avatar_url,alt:"UserIcon"}),a&&t("div",{onClick:o,className:"header__info",children:[e(f,{className:"navLink",to:"/createpost",children:e(_,{variant:"contained",children:" Create a Post"})}),e(f,{className:"navLink header_user",activeClassName:"activeheader",to:`/profile/${s.id}`,children:e(_,{children:"My profile"})}),e(qe,{})]})]}):e($,{children:e(f,{className:"navLink",to:"/loginWithGoogle",children:e(_,{variant:"contained",disableElevation:!0,children:"Log in / Create a new Account"})})}),e("div",{className:"header__nav",children:t("div",{className:"header__nav",children:[e(f,{className:"header__nav--pageDefault",activeClassName:"header__nav--pageState",to:"/home",children:"HOME"}),e(f,{className:"header__nav--pageDefault",activeClassName:"header__nav--pageState",to:"/category",children:"CATEGORY"})]})})]})}function Be(){return e("footer",{className:"footer"})}const Fe={apiKey:"AIzaSyCNMJDGK0pc6sklvk0eHnutZyFO2E5eugo",authDomain:"village-345022.firebaseapp.com",projectId:"village-345022",storageBucket:"village-345022.appspot.com",messagingSenderId:"1059450499873",appId:"1:1059450499873:web:d202c0b796f92795f5c460",measurementId:"G-NDJ9KSQRWT"},He=_e(Fe),oe=ve(He);const Ve="http://localhost:8080";function le(s){const[i,a]=r.exports.useState(0),[l,o]=r.exports.useState(""),c=m=>{m.preventDefault(),console.log("aaaa");const N=m.target[0].files[0];d(N)},d=m=>{if(!m)return;const N=Z(oe,`/files/${m.name}`),p=ee(N,m);p.on("state_changed",u=>{const h=Math.round(u.bytesTransferred/u.totalBytes)*100;a(h)},u=>console.log(u),()=>{te(p.snapshot.ref).then(u=>P.put(`${Ve}/users/${s.userInfo.id}`,{avatar_url:u},{withCredentials:!0}).then(h=>{o(u),console.log(h)}).catch(h=>console.log(h)))})};return t("div",{className:"regform",children:[i?t("div",{className:"regform__photo",children:[e("img",{className:"profilePicture",src:l,alt:"icon"}),t("h3",{children:["Uploaded ",i," %"]})]}):e("img",{className:"profilePicture",src:s.userInfo.avatar_url,alt:"icon"}),t("form",{className:"regform__upload",onSubmit:c,children:[e("input",{className:"navLink",type:"file"}),e("div",{className:"createPostButton",children:e("button",{className:"noStyle",type:"submit",children:e(_,{variant:"contained",children:"Submit"})})})]})]})}const G="http://localhost:8080";function We(s){var g,b;const{isLoggedIn:i}=q(),[a,l]=r.exports.useState(""),[o,c]=r.exports.useState(!1),[d,m]=r.exports.useState(!0),{register:N,handleSubmit:p,reset:u,formState:{errors:h}}=F(""),y=()=>{d&&m(!1)},L=()=>{d||m(!0)},I=()=>{const k=s.match.params.id;P.get(`${G}/users/${k}`).then(x=>{l(x.data)})},C=()=>{const k=s.match.params.id;P.get(`${G}/users/posts/${k}`).then(x=>{c(x.data)}).catch(x=>{console.log("Error fetching posts:",x)})},R=k=>{const x={age:k.age};P.put(`${G}/users/${a.id}`,x,{withCredentials:!0}).then(T=>{s.history.push("/"),location.reload()}).catch(T=>console.log(T))};return r.exports.useEffect(()=>{document.title=`${a.displayName} Profile`,I(),C()},[a.displayName]),r.exports.useEffect(()=>{a&&u({avatar_url:a.avatar_url,displayName:a.displayName})},[a]),console.log(o),t("section",{className:"profile",children:[t("h1",{className:"pageHeader",children:[a.displayName,"'s Profile"]}),i&&e(f,{className:"navLink profile__edit",to:`/updateProfile/${a.id}`,children:e(_,{variant:"contained",children:"Edit Profile"})}),t("div",{className:"profile__info",children:[e("div",{className:"profile__info--areaone",children:e(W,{sx:{width:250,height:250},src:a.avatar_url,alt:"UserIcon"})}),t("div",{className:"profile__info--areatwo",children:[t("div",{className:"profile__info--text",children:[t("section",{className:"profile__info--nameAndPerform",children:[e("h3",{children:"Info"}),t("div",{children:["First Name: ",a.givenName]}),t("div",{children:["Last Name: ",a.familyName]}),t("div",{children:["Age: ",a.age]})]}),t("section",{className:"profile__info--nameAndPerform",children:[e("h3",{children:"Performance"}),t("div",{children:["Rating: ",a.rating]}),t("div",{children:["Done Case: ",a.doneCase]})]})]}),t("section",{className:"profile__info--contact",children:[e("h3",{children:"Contact Me"}),e("div",{className:"profile__info--email",children:a.email}),t("div",{children:["Address: ",a.address]}),t("div",{children:["Accounts create at ",a.updated_at]})]})]})]}),t("div",{className:"profile__info--functionArea",children:[o.length>0&&t("div",{className:"profile__info--areathree",children:[e("h2",{className:"profile__info--subheader",children:"The Latest Post"}),t(f,{className:"navLink ",to:`/post/${o[0].post_id}`,children:[e("h2",{children:o[0].title}),t("div",{className:"profile__info--postTextInfo",children:[e("img",{className:"profile__info--picture",src:o[0].picture_Details,alt:o[0].title}),t("div",{className:"profile__info--postText",children:[e("div",{children:o[0].content}),e("div",{className:"postType",children:o[0].type}),e("div",{className:"postStatus",children:o[0].status})]})]})]}),e(f,{className:"navLink morePost",to:`/users/posts/${a.id}`,children:e(_,{variant:"contained",children:"More posts"})})]}),i&&e($,{children:a.age>0?e($,{}):t("div",{children:[e("div",{className:"register__background"}),e("div",{className:"register",children:d?t($,{children:[e("h1",{className:"register__heading",children:"Two more steps for your Journey..."}),e(le,{userInfo:a}),e("div",{className:"register__button",children:e(_,{variant:"outlined",onClick:y,children:"Next"})})]}):t("div",{className:"regform2",children:[e("h1",{className:"register__heading",children:"One more step for your Journey..."}),t("form",{className:"regform2__form",onSubmit:p(R),children:[t("div",{className:"regform2__box",children:[t("div",{className:"regform2__box--topic",children:["DisplayName:"," "]}),e("input",v({className:"inputStyle"},N("displayName",{required:"This is required"})))]}),e("p",{children:(g=h.age)==null?void 0:g.message}),t("div",{className:"regform2__box",children:[e("div",{className:"regform2__box--topic",children:"Your Age: "}),e("input",v({className:"inputStyle"},N("age",{required:"This is required"})))]}),e("p",{children:(b=h.age)==null?void 0:b.message}),t("div",{className:"regform2__button",children:[e("div",{onClick:L,children:e(_,{variant:"outlined",children:"Back"})}),e("button",{className:"noStyle",type:"submit",children:e(_,{variant:"contained",children:"Starting Your Journey"})})]})]})]})})]})})]})]})}function ne(s){const i=s.posts.filter(a=>s.input===""?a:a.title.toLowerCase().includes(s.input)||a.type.toLowerCase().includes(s.input)||a.status.toLowerCase().includes(s.input)||a.displayName.toLowerCase().includes(s.input));return e("section",{className:"postSection",children:i.map(a=>t(f,{className:"postSection__post",to:`/post/${a.post_id}`,children:[a.picture_Details?e("div",{className:"postSection__replace",children:e("img",{className:"postSection__picture",src:a.picture_Details,alt:`${a.title} picture`})}):e("div",{className:"postSection__noPicture",children:e(ae,{sx:{width:100,height:100}})}),t("div",{className:"postSection__detailBox",children:[t("div",{className:"postSection__details--user",children:["By ",a.displayName]}),e("div",{className:"postSection__details--time",children:a.updated_at})]}),e("div",{className:"postSection__title",children:a.title}),t("div",{className:"postSection__details",children:[t("div",{className:"postType",children:[" ",a.type]}),t("div",{className:"postStatus",children:[" ",a.status]})]})]},a.post_id))})}function Ge(s){const[i,a]=r.exports.useState(s);return{value:i,toggleValue:o=>{a(c=>typeof o=="boolean"?o:!c)}}}const Oe="http://localhost:8080";function je(){const[s,i]=r.exports.useState(""),[a,l]=r.exports.useState(""),{value:o,toggleValue:c}=Ge(!1),d=h=>{var y=h.target.value.toLowerCase();l(y)},[m,N]=r.exports.useState("Cook"),p=()=>{P.get(`${Oe}/posts/category/${m}`).then(h=>{i(h.data)}).catch(h=>{console.log("Error fetching posts:",h)})},u=h=>{N(h.target.innerHTML)};return r.exports.useEffect(()=>{p(),document.title="Category"},[m]),t("div",{className:"category",children:[e("div",{className:"searchBar",children:e(se,{id:"outlined-basic",onChange:d,variant:"outlined",fullWidth:!0,label:"Search Key Words"})}),t("div",{className:"category__wrapper",children:[t("div",{className:"category__area",children:[e("div",{className:"category__area--box account",children:e("div",{className:"category__area--title",type:"text",onClick:u,children:"Accounting"})}),e("div",{className:"category__area--box babysitting",children:e("div",{className:"category__area--title",type:"text",onClick:u,children:"Babysitting"})}),o?t($,{children:[e("div",{className:"category__area--box cook",children:e("div",{className:"category__area--title",type:"text",onClick:u,children:"Cook"})}),e("div",{className:"category__area--box housekeeping",children:e("div",{className:"category__area--title",type:"text",onClick:u,children:"Housekeeping"})}),e("div",{className:"category__area--box design",children:e("div",{className:"category__area--title",type:"text",onClick:u,children:"Design"})}),e("div",{className:"category__area--box gardening",children:e("div",{className:"category__area--title ",type:"text",onClick:u,children:"Gardening"})}),e("div",{className:"category__area--box dog",children:e("div",{className:"category__area--title",type:"text",onClick:u,children:"dog walking"})}),e("div",{className:"category__area--box technician",children:e("div",{className:"category__area--title",type:"text",onClick:u,children:"technician jobs"})}),e("div",{className:"category__area--box house",children:e("div",{className:"category__area--title",type:"text",onClick:u,children:"house moving"})})]}):e("div",{className:"category__area--showMore",onClick:c,children:"MORE ..."})]}),s&&e(ne,{posts:s,input:a})]})]})}const Je=fe.button`
  blackground-color: transparent;
  border: 1px solid black;
  width: 3rem;
  height: 3rem;
`;function j(){return e(Je,{children:" Log in / Create a new Account"})}const Ye="http://localhost:8080";function ze(s){var N,p,u,h,y;const{userInfo:i,isLoggedIn:a}=q(),{register:l,handleSubmit:o,reset:c,formState:{errors:d}}=F(""),m=L=>{const I={givenName:L.givenName,familyName:L.familyName,displayName:L.displayName,age:L.age,address:L.address};P.put(`${Ye}/users/${i.id}`,I,{withCredentials:!0}).then(C=>{location.reload(),s.history.push(`/profile/${i.id}`)}).catch(C=>console.log(C))};return r.exports.useEffect(()=>{i&&c({displayName:i.displayName,familyName:i.familyName,givenName:i.givenName,age:i.age,address:i.address})},[i]),t("div",{className:"updatePage",children:[e("h1",{className:"pageHeader",children:"Update"}),a?t("div",{children:[e(le,{userInfo:i}),t("form",{className:"updatePage__form",onSubmit:o(m),children:[t("div",{className:"updatePage__box boxOne",children:[e("div",{children:"Display Name: "}),e("input",v({className:"inputStyle"},l("displayName",{required:"This is required"}))),e("p",{children:(N=d.displayName)==null?void 0:N.message}),e("div",{children:"First Name: "}),e("input",v({className:"inputStyle"},l("givenName",{required:"This is required"}))),e("p",{children:(p=d.givenName)==null?void 0:p.message}),e("div",{children:"Last Name: "}),e("input",v({className:"inputStyle"},l("familyName",{required:"This is required"}))),e("p",{children:(u=d.familyName)==null?void 0:u.message}),e("div",{children:"Age: "}),e("input",v({className:"inputStyle"},l("age",{required:"This is required"}))),e("p",{children:(h=d.age)==null?void 0:h.message}),e("div",{children:"Address: "}),e("input",v({className:"inputStyle"},l("address",{required:"This is required"}))),e("p",{children:(y=d.address)==null?void 0:y.message}),e("div",{className:"createPostButton",children:e("button",{className:"noStyle",type:"submit",children:e(_,{variant:"contained",children:"Submit"})})})]}),t("div",{className:"updatePage__box boxTwo",children:[e("h2",{children:"Info you cannot change"}),t("div",{children:["Email: ",i.email]}),t("div",{children:["Rating: ",i.rating]}),t("div",{children:["Done Case: ",i.doneCase]}),t("div",{children:["Account creates at ",i.updated_at]})]})]})]}):t($,{children:[e("p",{children:"Login to update your profile."}),e(j,{})]})]})}const Ke="http://localhost:8080";function Qe(){const[s,i]=r.exports.useState(""),[a,l]=r.exports.useState(""),o=d=>{var m=d.target.value.toLowerCase();l(m)},c=()=>{P.get(`${Ke}/posts`).then(d=>{i(d.data)}).catch(d=>{console.log("Error fetching posts:",d)})};return r.exports.useEffect(()=>{document.title="HOME",c()},[s]),t("section",{className:"postPage",children:[t("div",{className:"postPage__text fontStyletwo",children:[e("h1",{className:"postPage__text--header",children:"Welcome!"}),e("div",{className:"animate__animated animate__flipInX postPage__text--subheaderTwo ",children:"A new way to Contribute our Community."}),e("h1",{className:"postPage__text--subheader",children:"This is VILLAGE"})]}),s&&t("div",{className:"newPostSection",children:[e("h2",{className:"newPostSection__topic",children:"Lastest Posts"}),t(Ne,{effect:"flip",grabCursor:!0,pagination:!0,navigation:!0,modules:[ye,be,Se],className:"mySwiper",children:[e(A,{children:e(f,{to:`/post/${s[0].post_id}`,children:e("img",{className:"newPostSection__Picture",src:s[0].picture_Details,alt:""})})}),e(A,{children:e(f,{to:`/post/${s[1].post_id}`,children:e("img",{className:"newPostSection__Picture",src:s[1].picture_Details,alt:""})})}),e(A,{children:e(f,{to:`/post/${s[2].post_id}`,children:e("img",{className:"newPostSection__Picture",src:s[2].picture_Details,alt:""})})}),e(A,{children:e(f,{to:`/post/${s[3].post_id}`,children:e("img",{className:"newPostSection__Picture",src:s[3].picture_Details,alt:""})})}),e(A,{children:e(f,{to:`/post/${s[4].post_id}`,children:e("img",{className:"newPostSection__Picture",src:s[4].picture_Details,alt:""})})}),e(A,{children:e(f,{to:`/post/${s[5].post_id}`,children:e("img",{className:"newPostSection__Picture",src:s[5].picture_Details,alt:""})})})]})]}),e("div",{className:"searchBar",children:e(se,{id:"outlined-basic",onChange:o,variant:"outlined",fullWidth:!0,label:"Search Topic, Category, User... "})}),e("h2",{className:"newPostSection__topic",children:"All Posts"}),s&&e(ne,{posts:s,input:a})]})}const Xe="http://localhost:8080";function Ze(s){const[i,a]=r.exports.useState([]),l=()=>{const o=s.match.params.id;P.get(`${Xe}/users/posts/${o}`).then(c=>{a(c.data)}).catch(c=>{console.log("Error fetching posts:",c)})};return r.exports.useEffect(()=>{l()},[]),t("div",{className:"postList",children:[e("h1",{className:"pageHeader",children:"Post List"}),i&&i.map(o=>t(f,{className:"postSection__post",to:`/post/${o.post_id}`,children:[o.picture_Details?e("div",{className:"postSection__replace",children:e("img",{className:"postSection__picture",src:o.picture_Details,alt:`${o.title} picture`})}):e("div",{className:"postSection__noPicture",children:e(ae,{sx:{width:100,height:100}})}),t("div",{className:"postSection__detailBox",children:[t("div",{className:"postSection__details--user",children:["By ",o.displayName]}),e("div",{className:"postSection__details--time",children:o.updated_at})]}),e("div",{className:"postSection__title",children:o.title}),t("div",{className:"postSection__details",children:[t("div",{className:"postType",children:[" ",o.type]}),t("div",{className:"postStatus",children:[" ",o.status]})]})]},o.post_id))]})}function re(s){return t(Pe,{children:[e(xe,{className:"subTitle",children:"Payment"}),t(we,{"aria-labelledby":"paymentMethod",name:"controlled-radio-buttons-group",value:s.value,onChange:s.handleChange,children:[e(z,{value:"Non-Monetary Payment",control:e(K,{color:"success"}),label:"Non-Monetary Payment"}),e(z,{value:"Money",control:e(K,{color:"default"}),label:"Money"})]})]})}const et="http://localhost:8080";function tt(s){var x,T,U,M;const{userInfo:i,isLoggedIn:a}=q(),[l,o]=r.exports.useState("Non-Monetary Payment"),[c,d]=r.exports.useState(!0),[m,N]=r.exports.useState(""),[p,u]=r.exports.useState(0),{register:h,control:y,handleSubmit:L,formState:{errors:I}}=F({defaultValues:{title:"",content:"",status:"open to apply",type:"",salary:"",requireDate:"",estimate_time:"",salary_replacement:""}}),C=()=>{d(l!=="Money")};r.exports.useEffect(()=>{C(),document.title="Upload Post"},[l]);const R=n=>{o(n.target.value)},g=n=>{P.post(`${et}/posts`,{picture_Details:m,title:n.title,content:n.content,status:n.status,type:n.type.value,requireDate:n.requireDate,salary:n.salary,salary_replacement:n.salary_replacement,estimate_time:n.estimate_time.value},{withCredentials:!0}).then(S=>{s.history.push("/")}).catch(S=>{console.log("Error creating a new post:",S)})},b=n=>{n.preventDefault();const S=n.target[0].files[0];k(S)},k=n=>{if(!n)return;const S=Z(oe,`/files/${n.name}`),H=ee(S,n);H.on("state_changed",E=>{const de=Math.round(E.bytesTransferred/E.totalBytes)*100;u(de)},E=>console.log(E),()=>{te(H.snapshot.ref).then(E=>N(E))})};return e("section",{className:"createPage",children:a?t($,{children:[e("h1",{className:"pageheader",children:"Create New Post"}),t("div",{className:"createPageForm",children:[t("form",{className:"createPageForm__Upload",onSubmit:b,children:[e("h3",{children:"Upload Photo First"}),e("input",{className:"noStyle createPageForm__Upload--button",type:"file"}),e("button",{type:"submit",className:"noStyle createPageForm__Upload--button",children:e(_,{variant:"contained",children:"Upload"})})]}),p?t("div",{className:"createPageForm__Upload--photo",children:[e("img",{className:"profilePicture",src:m,alt:"icon"}),t("h3",{children:["Uploaded ",p," %"]})]}):e("div",{className:"picture-replace"})]}),t("form",{className:"createPostTwo",onSubmit:L(g),children:[t("div",{className:"createPostTwo__textInfo",children:[e("div",{className:"subTitle",children:"TITLE: "}),e("input",w(v({className:"inputStyle"},h("title",{required:"This is required."})),{placeholder:"something like: Looking for a dog walker"})),e("p",{className:"errorMessage",children:(x=I.title)==null?void 0:x.message}),e("div",{className:"subTitle",children:"DETAIlS: "}),e("input",w(v({className:"inputStyleBig"},h("content",{required:"This is required."})),{placeholder:"I need a dog walker"})),e("p",{className:"errorMessage",children:(T=I.content)==null?void 0:T.message}),t("section",{className:"dropdown",children:[e("div",{className:"subTitle",children:"Type"}),e(B,{name:"type",control:y,render:({field:n})=>e(O,w(v({isClearable:!0},n),{options:[{value:"Accounting",label:"Accounting"},{value:"Babysitting",label:"Babysitting"},{value:"Cook",label:"Cook"},{value:"Housekeeping",label:"Housekeeping"},{value:"Design/ video editing",label:"Design/ video editing"},{value:"Gardening",label:"Gardening"},{value:"dog walking",label:"dog walking"},{value:"technician jobs",label:"technician jobs"},{value:"house moving",label:"house moving"}]}))})]})]}),t("div",{className:"createPostTwo__otherInfo",children:[t("div",{className:"createPostTwo__otherInfo--payment",children:[e(re,{handleChange:R,value:l,control:y}),c?t("div",{children:[e("div",{className:"subTitle",children:"What would you like to offer except money?"}),e("input",w(v({className:"inputStyle"},h("salary_replacement",{required:"This is required."})),{placeholder:"a dozen of beer"})),e("p",{className:"errorMessage",children:(U=I.salary_replacement)==null?void 0:U.message})]}):t("div",{children:[t("div",{className:"subTitle",children:["Show a range you would like to offer:"," "]}),e("input",w(v({className:"inputStyle"},h("salary",{required:"This is required."})),{placeholder:"CA$20 - CA$25  per hour"})),e("p",{className:"errorMessage",children:(M=I.salary)==null?void 0:M.message})]})]}),t("div",{className:"createPostTwo__otherInfo--other",children:[t("section",{children:[e("div",{className:"subTitle",children:"Require Date"}),e(B,{control:y,name:"requireDate",render:({field:n})=>e(ie,{className:"inputStyle",placeholderText:"Select date",onChange:S=>n.onChange(S),selected:n.value})})]}),t("section",{className:"dropdown",children:[e("div",{className:"subTitle",children:"Estimate Working Hour"}),e(B,{name:"estimate_time",className:"dropdowninside",control:y,render:({field:n})=>e(O,w(v({isClearable:!0},n),{options:[{value:"less than 30mins",label:"less than 5mins"},{value:"Hours",label:"Hours"},{value:"0.5 - 1 hour",label:"0.5 - 1 hour"},{value:"2 hours",label:"2 hours"},{value:"3 - 5 hours",label:"3 - 5 hours"},{value:"5 - 10 hours",label:"5 - 10 hours"},{value:"Days",label:"Days"},{value:"within 1 day",label:"within 1 day"},{value:"1 - 3 days",label:"1 - 3 days"},{value:"Weeks",label:"Weeks"},{value:"within 1 week",label:"within 1 week"},{value:"1 - 2 weeks",label:"1 - 2 weeks"},{value:"Months",label:"Months"}]}))})]})]}),e("div",{className:"createPostButton",children:e("button",{className:"noStyle",type:"submit",children:e(_,{variant:"contained",endIcon:e(Ce,{}),children:"Send"})})})]})]})]}):t($,{children:[e("p",{children:"Login to create your own posts."}),e(j,{})]})})}function ce(s){var o,c;const{register:i,handleSubmit:a,formState:{errors:l}}=F({});return e($,{children:s.isLoggedIn?t("div",{className:"applyList",children:[e("div",{className:"applyList__background"}),t("form",{className:"applyList__form",onSubmit:a(s.handleApply),children:[t("h2",{className:"applyList__title",children:["leave a message to ",s.postUserId," "]}),e("input",w(v({className:"inputStyle"},i("content",{required:"This is required."})),{placeholder:"Introduction and explain why"})),t("h2",{className:"applyList__title",children:["What would you like to receive?"," "]}),e("p",{children:(o=l.content)==null?void 0:o.message}),e("input",w(v({className:"inputStyle"},i("offer",{required:"This is required."})),{placeholder:"something like: 10 bucks per hour"})),e("p",{children:(c=l.offer)==null?void 0:c.message}),e(_,{onClick:s.hideApplyModal,children:"cancel"}),e("button",{className:"noStyle",type:"submit",children:e(_,{variant:"contained",children:"Sumbit"})}),e("div",{children:"Please apply carefully. Once you applied the job, you are not able the edit / detele it."})]})]}):t("div",{children:[e("div",{className:"applyList__background"}),t("div",{className:"applyList__form",children:[e(_,{onClick:s.hideApplyModal,children:"cancel"}),e("h2",{className:"",children:"OPPS! You haven't logged in yet..."}),e(f,{className:"navLink LinkButton",to:"/loginWithGoogle",children:e(_,{variant:"contained",children:" Click here"})})]})]})})}const V="http://localhost:8080";function at(s){const{userInfo:i,isLoggedIn:a}=q(),[l,o]=r.exports.useState({}),[c,d]=r.exports.useState([]),[m,N]=r.exports.useState(!1),[p,u]=r.exports.useState(""),h=()=>{const g=s.match.params.postID;P.get(`${V}/posts/${g}`).then(b=>{o(b.data)}).catch(b=>{console.log("Error fetching posts:",b)})},y=g=>{P.post(`${V}/apply/${l.post_id}`,{post_id:l.post_id,post_title:l.title,content:g.content,offer:g.offer},{withCredentials:!0}).then(()=>{window.location.reload(!1)}).catch(b=>{console.log("Error creating a new post:",b)})},L=()=>{const g=s.match.params.postID;P.get(`${V}/apply/${g}`).then(b=>{d(b.data);const k=b.data.find(x=>x.user_id===i.id);k.user_id===i.id&&u(k)}).catch(b=>console.log(b))},I=()=>{P.delete(`${V}/posts/${l.post_id}`).then(g=>{s.history.push("/")}).catch(g=>console.log(g))},C=()=>{m||N(!0)},R=()=>{m&&N(!1)};return r.exports.useEffect(()=>{h(),document.title=l.title},[l.title]),r.exports.useEffect(()=>{L()},[i]),t("section",{className:"postDetails",children:[t("div",{className:"postDetails__box",children:[e("div",{className:"postDetails__box1--image"}),t("div",{className:"postDetails__box1--info",children:[t("div",{className:"postDetails__box1--headline",children:[e(f,{className:"navLink postDetails__box1--name",to:`/profile/${l.user_id}`,children:e(W,{alt:l.displayname,src:l.avatar_url})}),t("h2",{children:[" ",l.title]})]}),t("div",{className:"postDetails__box1--StatAndCat",children:[e("div",{className:"postStatus",children:l.status}),e("div",{className:"postType",children:l.type})]})]})]}),t("div",{className:"postSection__postWrapper",children:[e("img",{className:"postSection__postPicture",src:l.picture_Details,alt:`${l.title} picture`}),t("div",{className:"postDetails__box2",children:[e("h2",{children:"Content"}),t(f,{className:"navLink postDetails__box1",to:`/profile/${l.user_id}`,children:["By ",l.displayname]}),t("div",{className:"time",children:["Post at ",l.updated_at]}),l.salary&&t("div",{children:["salary: ",l.salary]}),l.salary_replacement&&t("div",{children:["Non-Monetary Payment: ",l.salary_replacement]}),t("div",{children:["Required Date: ",l.requireDate]}),t("div",{children:["Estimate Time: ",l.estimate_time]}),t("div",{children:["Detail: ",l.content]}),t("div",{children:[c.length," People applied"]})]})]}),a&&i.id===l.user_id?t("div",{children:[t("div",{className:"post__button",children:[e(f,{className:"navLink",to:`/postEdit/${l.post_id}`,children:e(_,{variant:"contained",children:"Edit"})}),e(_,{onClick:I,startIcon:e(Le,{}),variant:"outlined",color:"error",children:"Delete"})]}),c.map(g=>t(f,{className:"post navLink applicantsList",to:`/profile/${g.user_id}`,children:[e(W,{src:g.avatar_url,alt:g.username}),t("div",{children:["message: ",g.content]}),t("div",{className:"applicantsSpe",children:["I Need ",g.offer]}),t("div",{className:"time",children:["time: ",g.updated_at]}),t("div",{children:["By ",g.username]})]},g.id))]}):e("div",{className:"appliants",children:a&&p.user_id===i.id?t("div",{className:"applicantsList",children:[t("h2",{children:["Your application: ",p.content]}),t("div",{children:["Requires: ",p.offer]}),e("div",{className:"time",children:p.updated_at}),e(_,{children:"Applied"})]}):t($,{children:[e("div",{onClick:C,className:"post__apply",children:"Apply Now"}),m&&e(ce,{handleApply:y,hideApplyModal:R,postUserId:l.displayname,isLoggedIn:a})]})})]})}const Q="http://localhost:8080";function st(s){var k,x,T,U,M;const{userInfo:i,isLoggedIn:a}=q(),[l,o]=r.exports.useState("Non-Monetary Payment"),[c,d]=r.exports.useState(!0),[m,N]=r.exports.useState(!0),[p,u]=r.exports.useState(""),{register:h,control:y,handleSubmit:L,reset:I,formState:{errors:C}}=F(""),R=()=>{const n=s.match.params.postID;P.get(`${Q}/posts/${n}`).then(S=>{u(S.data)}).catch(S=>{console.log("Error fetching posts:",S)})};r.exports.useEffect(()=>{p&&I({title:p.title,content:p.content,salary:p.salary,salary_replacement:p.salary_replacement})},[p]),r.exports.useEffect(()=>{R()},[]);const g=n=>{const S=s.match.params.postID,H={title:n.title,content:n.content,status:n.status,requireDate:n.requireDate,salary:n.salary,salary_replacement:n.salary_replacement};P.put(`${Q}/posts/${S}`,H,{withCredentials:!0}).then(E=>{console.log(E),s.history.push(`/post/${S}`)}).catch(E=>console.log(E))},b=n=>{o(n.target.value)};return t("section",{className:"EditPost",children:[e("h1",{className:"headline",children:"Edit Post"}),a&&i.id===p.user_id?t("form",{className:"EditPost__box",onSubmit:L(g),children:[t("div",{className:"EditPost__box--one",children:[e("div",{className:"subTitle",children:"TITLE: "}),e("input",w(v({className:"inputStyle"},h("title",{required:"This is required."})),{placeholder:"something like: Looking for a dog walker"})),e("p",{children:(k=C.title)==null?void 0:k.message}),e("div",{className:"subTitle",children:"DETAIlS: "}),e("input",w(v({className:"inputStyleBig "},h("content",{required:"This is required."})),{placeholder:"I need a dog walker"})),e("p",{children:(x=C.content)==null?void 0:x.message})]}),t("div",{className:"EditPost__box--two",children:[e(re,{handleChange:b,value:l,control:y}),c?t("div",{children:[e("div",{className:"subTitle",children:"What would you like to offer except money?"}),e("input",w(v({className:"inputStyle"},h("salary_replacement",{required:"This is required."})),{placeholder:"a dozen of beer"})),e("p",{children:(T=C.salary_replacement)==null?void 0:T.message})]}):t("div",{children:[t("div",{className:"subTitle",children:["Show a range you would like to offer:"," "]}),e("input",w(v({className:"inputStyle"},h("salary",{required:"This is required."})),{placeholder:"CA$20 - CA$25  per hour"})),e("p",{children:(U=C.salary)==null?void 0:U.message})]}),t("section",{children:[e("div",{className:"subTitle",children:"Require Date"}),m?t($,{children:[t("div",{onClick:n=>N(!1),children:[p.requireDate,"."]}),t("div",{className:"changeDate",children:[e(ke,{}),"Click me to edit the require date"]})]}):e($,{children:e(B,w(v({control:y},h("requireDate",{required:"This is required."})),{render:({field:n})=>e(ie,{className:"inputStyle",placeholderText:"Select date",onChange:S=>n.onChange(S),selected:n.value})}))}),e("p",{children:(M=C.type)==null?void 0:M.message})]}),t("section",{className:"dropdown",children:[e("div",{className:"subTitle",children:"Estimate Working Hour"}),e(B,{name:"estimate_time",className:"dropdowninside",control:y,render:({field:n})=>e(O,w(v({isClearable:!0},n),{options:[{value:"less than 30mins",label:"less than 5mins"},{value:"Hours",label:"Hours"},{value:"0.5 - 1 hour",label:"0.5 - 1 hour"},{value:"2 hours",label:"2 hours"},{value:"3 - 5 hours",label:"3 - 5 hours"},{value:"5 - 10 hours",label:"5 - 10 hours"},{value:"Days",label:"Days"},{value:"within 1 day",label:"within 1 day"},{value:"1 - 3 days",label:"1 - 3 days"},{value:"Weeks",label:"Weeks"},{value:"within 1 week",label:"within 1 week"},{value:"1 - 2 weeks",label:"1 - 2 weeks"},{value:"Months",label:"Months"}]}))})]}),e("div",{className:"createPostButton",children:e("button",{className:"noStyle",type:"submit",children:e(_,{variant:"contained",children:"Submit"})})})]})]}):t($,{children:[e("p",{children:"Login to create your own posts."}),e(j,{})]})]})}const X="http://localhost:8080";function it(){return r.exports.useEffect(()=>{document.title="Login"}),t("div",{className:"login",children:[e("h1",{className:"animate__animated animate__bounce login__header",children:"Login with Google in one step"}),t("div",{className:"login__box",children:[e("div",{className:"login__box--text border",children:e(_,{variant:"contained",className:"navLink",href:`${X}/auth/google`,children:"Login"})}),t("div",{className:"login__box--text",children:[e("h2",{children:"First time? "}),e(_,{variant:"text",href:`${X}/auth/google`,children:"Try to create a new account with google"})]})]})]})}const ot="http://localhost:8080";function lt(){return r.exports.useEffect(()=>{document.title="Successfully Create An Account"}),e("div",{className:"loginSuccessed",children:t("div",{className:"loginSuccessed__background",children:[e("h2",{className:"animate__animated animate__fadeInDown ",children:"Congregate!!! Your account is successfully created..."}),e(_,{variant:"contained",color:"success",href:`${ot}/auth/google`,children:"Click here to login"})]})})}function nt(){return t($e,{children:[e(Me,{}),t(Ie,{children:[e(De,{exact:!0,from:"/",to:"/home"}),e(D,{path:"/home",exact:!0,component:Qe}),e(D,{path:"/loginWithGoogle",component:it}),e(D,{path:"/registerSuccee",component:lt}),e(D,{path:"/profile/:id",component:We}),e(D,{path:"/users/posts/:id",component:Ze}),e(D,{path:"/category",component:je}),e(D,{path:"/updateProfile/:id",component:ze}),e(D,{path:"/createpost",component:tt}),e(D,{path:"/post/:postID",component:at}),e(D,{path:"/postEdit/:postID",component:st}),e(D,{path:"/postApply/:postID",component:ce})]}),e(Be,{})]})}Ee.render(e(Te.StrictMode,{children:e(nt,{})}),document.getElementById("root"));
