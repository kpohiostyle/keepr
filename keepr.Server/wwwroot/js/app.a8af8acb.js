(function(e){function t(t){for(var c,n,s=t[0],i=t[1],l=t[2],d=0,u=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);b&&b(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],c=!0,n=1;n<a.length;n++){var s=a[n];0!==r[s]&&(c=!1)}c&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var c={},n={app:0},r={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-051a4aec":"b5ea3c83","chunk-29d0c9ac":"87d4b311","chunk-2d0c19e3":"54b005f3","chunk-347e6932":"fdc5db7a"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={"chunk-051a4aec":1,"chunk-29d0c9ac":1,"chunk-347e6932":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var c="css/"+({}[e]||e)+"."+{"chunk-051a4aec":"d86e5cd2","chunk-29d0c9ac":"211424f4","chunk-2d0c19e3":"31d6cfe0","chunk-347e6932":"6bbdcb39"}[e]+".css",r=i.p+c,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===c||d===r))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===c||d===r)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var c=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete n[e],b.parentNode.removeChild(b),a(o)},b.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){n[e]=0})));var c=r[e];if(0!==c)if(c)t.push(c[2]);else{var o=new Promise((function(t,a){c=r[e]=[t,a]}));t.push(c[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=s(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(b);var a=r[e];if(0!==a){if(a){var c=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+c+": "+n+")",u.name="ChunkLoadError",u.type=c,u.request=n,a[1](u)}r[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(a,c,function(t){return e[t]}.bind(null,c));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var b=d;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1cac":function(e,t,a){"use strict";a("1dd0")},"1dd0":function(e,t,a){},2255:function(e,t,a){},"255a":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["G"])("data-v-09fa406c");Object(c["t"])("data-v-09fa406c");const r={class:"col-md-12"},o={class:"card shadow flex-grow-1 "},s={class:"card-img-overlay d-flex align-items-end inline"},i={class:"card-title"};Object(c["r"])();const l=n((e,t,a,l,d,u)=>{const b=Object(c["x"])("router-link"),p=Object(c["x"])("KeepModal");return Object(c["q"])(),Object(c["d"])("div",r,[Object(c["g"])("div",o,[Object(c["g"])("button",{title:"Open Keep Details",type:"button",class:"","data-toggle":"modal","data-target":"#keepDetailsModal",onClick:t[1]||(t[1]=e=>l.keepDetails())},[Object(c["g"])("img",{src:a.keep.img,class:"card-img"},null,8,["src"]),Object(c["g"])("div",s,[Object(c["g"])("h5",i,Object(c["z"])(a.keep.name),1)])]),Object(c["g"])(b,{to:{name:"ProfilePage",params:{id:a.keep.creatorId}}},{default:n(()=>[Object(c["g"])("img",{src:a.keep.creator.picture,class:"rounded-circle small-image profile",alt:""},null,8,["src"])]),_:1},8,["to"])]),Object(c["g"])(p,{keep:a.keep},null,8,["keep"])])});var d=a("83fc"),u=a("6c96"),b={name:"KeepComponent",props:{keep:{type:Object,required:!0}},setup(e){const t=Object(c["u"])({activeKeep:Object(c["b"])(()=>d["a"].activeKeep)});return{state:t,keepDetails(){d["a"].activeKeep=e.keep,u["a"].getKeepById(d["a"].activeKeep.id)}}},components:{}};a("66ce");b.render=l,b.__scopeId="data-v-09fa406c";t["default"]=b},"2b20":function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var c=a("bc3a"),n=a.n(c),r=a("8c89");const o=n.a.create({baseURL:r["b"],timeout:8e3}),s=function(e){o.defaults.headers.authorization=e}},"38f7":function(e,t,a){"use strict";a("2255")},"41cb":function(e,t,a){"use strict";var c=a("6c02"),n=a("8816");function r(e){return()=>a("a2f9")(`./${e}.vue`)}const o=[{path:"/",name:"Home",component:r("HomePage")},{path:"/about",name:"About",component:r("AboutPage")},{path:"/vault/:id",name:"VaultPage",component:r("VaultPage")},{path:"/account",name:"Account",component:r("AccountPage"),beforeEnter:n["a"]},{path:"/profile/:id",name:"ProfilePage",component:r("ProfilePage")}],s=Object(c["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(c["b"])(),routes:o});t["a"]=s},"473f":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var c=a("83fc"),n=a("8c89");function r(e,t){if(n["d"])console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t);else{switch(e){case"log":case"assert":return}console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t)}}const o={log(){r("log",arguments)},error(){r("error",arguments)},warn(){r("warn",arguments)},assert(){r("assert",arguments)},trace(){r("trace",arguments)}};var s=a("2b20");class i{async getAccount(){try{const e=await s["a"].get("/account");c["a"].account=e.data}catch(e){o.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}async getProfile(e){const t=await s["a"].get("api/profiles/"+e);c["a"].activeProfile=t.data}}const l=new i},5108:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n={class:"modal fade",id:"addvaultmodal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r={class:"modal-dialog"},o={class:"modal-content"},s=Object(c["g"])("div",{class:"modal-header"},[Object(c["g"])("h5",{class:"modal-title",id:"exampleModalLabel"}," Create A Vault "),Object(c["g"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(c["g"])("span",{"aria-hidden":"true"},"×")])],-1),i={class:"modal-body"},l={class:"form-group"},d=Object(c["g"])("label",{for:"title"},"Vault Name",-1),u={class:"form-group"},b=Object(c["g"])("label",{for:"comment"},"Description",-1),p={class:"form-group"},f=Object(c["g"])("label",{for:"comment"},"Private",-1),g=Object(c["g"])("div",{class:"modal-footer"},[Object(c["g"])("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close "),Object(c["g"])("button",{type:"submit",class:"btn btn-primary"}," Add ")],-1);function m(e,t,a,m,O,v){return Object(c["q"])(),Object(c["d"])("div",n,[Object(c["g"])("div",r,[Object(c["g"])("div",o,[s,Object(c["g"])("div",i,[m.state.account.id===m.state.activeProfile.id?(Object(c["q"])(),Object(c["d"])("form",{key:0,onSubmit:t[4]||(t[4]=Object(c["F"])((...e)=>m.createVault&&m.createVault(...e),["prevent"]))},[Object(c["g"])("div",l,[d,Object(c["E"])(Object(c["g"])("input",{type:"text",class:"form-control",id:"title","aria-describedby":"title",placeholder:"Vault Name","onUpdate:modelValue":t[1]||(t[1]=e=>m.state.newVault.name=e),required:""},null,512),[[c["C"],m.state.newVault.name]])]),Object(c["g"])("div",u,[b,Object(c["E"])(Object(c["g"])("input",{type:"text",class:"form-control",id:"vaultDescription","aria-describedby":"comment",placeholder:"Vault Description","onUpdate:modelValue":t[2]||(t[2]=e=>m.state.newVault.description=e),required:""},null,512),[[c["C"],m.state.newVault.description]])]),Object(c["g"])("div",p,[f,Object(c["E"])(Object(c["g"])("input",{type:"checkbox",class:"form-control",id:"isPrivate","aria-describedby":"comment",placeholder:"","onUpdate:modelValue":t[3]||(t[3]=e=>m.state.newVault.isPrivate=e)},null,512),[[c["B"],m.state.newVault.isPrivate]])]),g],32)):Object(c["e"])("",!0)])])])])}var O=a("83fc"),v=a("d10d"),j=a("5d40"),h={name:"AddVaultModal",setup(){const e=Object(c["u"])({newVault:{},account:Object(c["b"])(()=>O["a"].account),activeProfile:Object(c["b"])(()=>O["a"].activeProfile),user:Object(c["b"])(()=>O["a"].user)});return{state:e,async createVault(){try{await v["a"].createVault(e.newVault),j["a"].toast("Successfully Created","success")}catch(t){j["a"].toast("Error: "+t,"error")}}}}};h.render=m;t["default"]=h},"56d7":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["g"])("footer",null,[Object(c["g"])("div",{class:"bg-dark text-light text-center p-4"})],-1);function r(e,t,a,r,o,s){const i=Object(c["x"])("Navbar"),l=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("header",null,[Object(c["g"])(i)]),Object(c["g"])("main",null,[Object(c["g"])(l)]),n],64)}var o=a("83fc"),s={name:"App",setup(){return{appState:Object(c["b"])(()=>o["a"])}}};a("1cac");s.render=r;var i=s;function l(e){const t=a("ccc2");t.keys().forEach(a=>{const c=t(a),n=c.default||c,r=n.name||a.substr(a.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(r,n)})}var d=a("41cb"),u=a("4989"),b=a.n(u),p=a("f0bd");const f=Object(c["c"])(i);l(f),f.use(d["a"],b.a,p["default"]).mount("#app")},"5d40":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a("3d20"),n=a.n(c);class r{static async confirmAction(e="Are you sure?",t="You won't be able to revert this!",a="warning",c="Yes, delete it!"){try{const r=await n.a.fire({title:e,text:t,icon:a,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:c});return!!r.isConfirmed}catch(r){return!1}}static toast(e="Warning!",t="warning",a="top-end",c=3e3,r=!0){n.a.fire({title:e,icon:t,position:a,timer:c,timerProgressBar:r,toast:!0,showConfirmButton:!1})}}},"66ce":function(e,t,a){"use strict";a("fcfb")},"6c96":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a("83fc"),n=a("2b20");class r{async getKeeps(){const e=await n["a"].get("api/keeps");c["a"].keeps=e.data}async getKeepsByProfile(e){const t=await n["a"].get(`api/profiles/${e}/keeps`);c["a"].profileKeeps=t.data}async getKeepById(e){const t=await n["a"].get("api/keeps/"+e);c["a"].activeKeep=t.data}async createKeep(e){const t=await n["a"].post("api/keeps",e);this.getKeeps(t.data)}async deleteKeep(e){await n["a"].delete("api/keeps/"+e),c["a"].keeps=c["a"].keeps.filter(t=>t.id!==e)}async removeKeep(e){await n["a"].delete("api/vaultkeeps/"+e)}async getUserKeeps(){const e=await n["a"].get("account/keeps");c["a"].userKeeps=e.data}}const o=new r},"83fc":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a("7a23");const n=Object(c["u"])({user:{},account:{},keeps:{},vaults:[],activeVault:{},activeKeep:{},activeProfile:{},profileKeeps:[],vaultKeeps:[],userKeeps:[],userVaults:[]})},"8c89":function(e,t,a){"use strict";a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return n})),a.d(t,"e",(function(){return r})),a.d(t,"a",(function(){return o})),a.d(t,"c",(function(){return s}));const c=window.location.origin.includes("localhost"),n=c?"https://localhost:5001":"",r="kevincodeworks.us.auth0.com",o="http://kanban",s="MV7tjf8CPDJceBrMRZ0aUlr920C2cMVq"},"9d8d":function(e,t,a){"use strict";a.r(t);var c=a("7a23"),n=a("f01c"),r=a.n(n);const o=Object(c["G"])("data-v-f323e4e6");Object(c["t"])("data-v-f323e4e6");const s={class:"navbar navbar-expand-lg navbar-dark"},i=Object(c["g"])("div",{class:"d-flex  align-items-center inline"},[Object(c["g"])("img",{alt:"logo",src:r.a,height:"45"}),Object(c["g"])("h5",{class:"nav-header"}," eepr ")],-1),l=Object(c["g"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["g"])("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarText"},u={class:"navbar-nav mr-auto"},b={class:"nav-item"},p=Object(c["f"])(" Home "),f={class:"nav-item"},g=Object(c["f"])(" About "),m={class:"navbar-text"},O={key:1,class:"dropdown"},v={class:"mx-3"},j=Object(c["g"])("div",{class:"list-group-item list-group-item-action hoverable"}," Profile ",-1);Object(c["r"])();const h=o((e,t,a,n,r,h)=>{const y=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["d"])("nav",s,[Object(c["g"])(y,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:o(()=>[i]),_:1}),l,Object(c["g"])("div",d,[Object(c["g"])("ul",u,[Object(c["g"])("li",b,[Object(c["g"])(y,{to:{name:"Home"},class:"nav-link"},{default:o(()=>[p]),_:1})]),Object(c["g"])("li",f,[Object(c["g"])(y,{to:{name:"About"},class:"nav-link"},{default:o(()=>[g]),_:1})])]),Object(c["g"])("span",m,[n.user.isAuthenticated?(Object(c["q"])(),Object(c["d"])("div",O,[Object(c["g"])("div",{class:"dropdown-toggle",onClick:t[2]||(t[2]=e=>n.state.dropOpen=!n.state.dropOpen)},[Object(c["g"])("img",{src:n.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),Object(c["g"])("span",v,Object(c["z"])(n.user.name),1)]),Object(c["g"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:n.state.dropOpen}],onClick:t[4]||(t[4]=e=>n.state.dropOpen=!1)},[n.state.user?(Object(c["q"])(),Object(c["d"])(y,{key:0,to:{name:"ProfilePage",params:{id:n.state.user.id}}},{default:o(()=>[j]),_:1},8,["to"])):Object(c["e"])("",!0),Object(c["g"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:t[3]||(t[3]=(...e)=>n.logout&&n.logout(...e))}," logout ")],2)])):(Object(c["q"])(),Object(c["d"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:t[1]||(t[1]=(...e)=>n.login&&n.login(...e))}," Login "))])])])});var y=a("8816"),w=a("83fc"),k=a("8c89"),K=a("41cb"),A=a("473f"),x=a("2b20"),V=a("6c96"),P=a("d10d");const D=Object(y["b"])({domain:k["e"],clientId:k["c"],audience:k["a"],onRedirectCallback:e=>{K["a"].push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}});D.on(D.AUTH_EVENTS.AUTHENTICATED,(async function(){Object(x["b"])(D.bearer),w["a"].user=D.user,await A["a"].getAccount(),await P["a"].getUserVaults(),await V["a"].getUserKeeps()}));var C={name:"Navbar",setup(){const e=Object(c["u"])({dropOpen:!1});return{state:e,user:Object(c["b"])(()=>w["a"].user),async login(){D.loginWithPopup()},async logout(){await D.logout({returnTo:window.location.origin})}}}};a("fd57");C.render=h,C.__scopeId="data-v-f323e4e6";t["default"]=C},a2f9:function(e,t,a){var c={"./AboutPage.vue":["478b","chunk-2d0c19e3"],"./HomePage.vue":["78a7","chunk-347e6932"],"./ProfilePage.vue":["1a3e","chunk-051a4aec"],"./VaultPage.vue":["e6f4","chunk-29d0c9ac"]};function n(e){if(!a.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],n=t[0];return a.e(t[1]).then((function(){return a(n)}))}n.keys=function(){return Object.keys(c)},n.id="a2f9",e.exports=n},ab41:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["G"])("data-v-23e934e9");Object(c["t"])("data-v-23e934e9");const r={class:"col-md-3 my-2 col-6"},o={class:"card p-5 shadow "},s={class:"card-img-overlay d-flex align-items-center justify-content-center"},i={class:"card-title vault-title"};Object(c["r"])();const l=n((e,t,a,l,d,u)=>{const b=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["d"])("div",r,[Object(c["g"])(b,{to:{name:"VaultPage",params:{id:a.vault.id}}},{default:n(()=>[Object(c["g"])("div",o,[Object(c["g"])("div",s,[Object(c["g"])("h5",i,Object(c["z"])(a.vault.name),1)])])]),_:1},8,["to"])])});var d=a("83fc"),u={name:"VaultComponent",props:{vault:{type:Object,required:!0}},setup(e){const t=Object(c["u"])({activeVault:Object(c["b"])(()=>d["a"].activeVault)});return{state:t}},components:{}};a("38f7");u.render=l,u.__scopeId="data-v-23e934e9";t["default"]=u},bc36:function(e,t,a){},c11c:function(e,t,a){"use strict";a("bc36")},ccc2:function(e,t,a){var c={"./AddKeepModal.vue":"fcfd","./AddVaultModal.vue":"5108","./KeepComponent.vue":"255a","./KeepModal.vue":"ef08","./VaultComponent.vue":"ab41","./navbar.vue":"9d8d"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}n.keys=function(){return Object.keys(c)},n.resolve=r,e.exports=n,n.id="ccc2"},d10d:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a("83fc"),n=a("2b20"),r=a("41cb");class o{async getVaults(e){const t=await n["a"].get(`api/profiles/${e}/vaults`);c["a"].vaults=t.data}async getVaultById(e){const t=await n["a"].get("api/vaults/"+e);c["a"].activeVault=t.data}async createVault(e){const t=await n["a"].post("api/vaults",e);this.getVaults(t.data)}async getUserVaults(){const e=await n["a"].get("account/vaults");c["a"].userVaults=e.data}async deleteVault(e){await n["a"].delete("api/vaults/"+e),c["a"].vaults=c["a"].vaults.filter(t=>t.id!==e),r["a"].push({name:"ProfilePage",params:{id:c["a"].account.id}})}async addKeep(e,t){const a={vaultId:e,keepId:t},r=await n["a"].post("api/vaultkeeps",a);c["a"].vaultKeeps=r.data}async getKeepsByVaultId(e){const t=await n["a"].get(`api/vaults/${e}/keeps`);c["a"].vaultKeeps=t.data}}const s=new o},ef08:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["G"])("data-v-54df6e0f");Object(c["t"])("data-v-54df6e0f");const r={key:0,class:"container-fluid"},o={class:"modal",id:"keepDetailsModal",tabindex:"-1","aria-labelledby":"#keepDetailsModal","aria-hidden":"true"},s={class:"modal-dialog modal-xl"},i={class:"modal-content"},l={class:"row"},d={class:"col-lg-6"},u={class:"col-lg-6 p-3 d-flex flex-column align-items-center"},b={class:"d-flex flex-inline justify-content-around"},p={class:"p-3 mb-2"},f={class:"far fa-eye"},g={class:"p-3 mb-2"},m={class:"fab fa-korvue"},O={class:"p-3 mb-2"},v={class:"fas fa-share-alt"},j=Object(c["g"])("button",{type:"button",class:"close btn-close","data-dismiss":"modal","aria-label":"Close"},[Object(c["g"])("span",{"aria-hidden":"true"},"×")],-1),h={class:"p-3 mb-2"},y={class:" pb-5 pl-3 mr-5 mr-ml-1 b-border"},w={class:"row"},k={class:"col-12 m-2 d-flex flex-inline justify-content-around align-items-end"},K={class:"dropdown text-dark"},A=Object(c["g"])("button",{class:"btn btn-add dropdown-toggle text-dark",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}," Add To Vault ",-1),x={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},V=Object(c["g"])("i",{class:"far fa-trash-alt"},null,-1);Object(c["r"])();const P=n((e,t,a,P,D,C)=>{const B=Object(c["x"])("router-link");return P.state.activeKeep?(Object(c["q"])(),Object(c["d"])("div",r,[Object(c["g"])("div",o,[Object(c["g"])("div",s,[Object(c["g"])("div",i,[Object(c["g"])("div",l,[Object(c["g"])("div",d,[Object(c["g"])("img",{src:P.state.activeKeep.img,alt:"",class:"w-100 h-100 p-2"},null,8,["src"])]),Object(c["g"])("div",u,[Object(c["g"])("div",b,[Object(c["g"])("span",p,[Object(c["g"])("i",f,Object(c["z"])(P.state.activeKeep.views),1)]),Object(c["g"])("span",g,[Object(c["g"])("i",m,Object(c["z"])(P.state.activeKeep.keeps),1)]),Object(c["g"])("span",O,[Object(c["g"])("i",v,Object(c["z"])(P.state.activeKeep.shares),1)]),j]),Object(c["g"])("h3",h,Object(c["z"])(P.state.activeKeep.name),1),Object(c["g"])("p",y,Object(c["z"])(P.state.activeKeep.description)+" Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, facere maiores, ad sint cum nam eos non repudiandae officiis laudantium aut, minima atque aspernatur facilis quod inventore est magni dolores. ",1),Object(c["g"])("div",w,[Object(c["g"])("div",k,[Object(c["g"])("div",K,[A,Object(c["g"])("div",x,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(P.state.userVaults,e=>(Object(c["q"])(),Object(c["d"])("a",{class:"dropdown-item text-dark",key:e.id},[Object(c["g"])("p",{onClick:t=>P.addKeep(e.id)},Object(c["z"])(e.name),9,["onClick"])]))),128))])]),"VaultPage"==e.$route.name&&P.state.activeVault.creatorId==P.state.account.id&&a.keep.vaultKeepId?(Object(c["q"])(),Object(c["d"])("button",{key:0,class:"btn-del",onClick:t[1]||(t[1]=e=>P.removeKeep())}," Remove ")):P.state.activeKeep.creatorId==P.state.account.id?(Object(c["q"])(),Object(c["d"])("button",{key:1,class:"btn-del",onClick:t[2]||(t[2]=e=>P.deleteKeep(P.state.activeKeep))},[V])):Object(c["e"])("",!0),P.state.activeKeep.creator?(Object(c["q"])(),Object(c["d"])(B,{key:2,to:{name:"ProfilePage",params:{id:P.state.activeKeep.creatorId}}},{default:n(()=>[Object(c["g"])("small",null,Object(c["z"])(P.state.activeKeep.creator.name),1),Object(c["g"])("img",{src:P.state.activeKeep.creator.picture,class:"rounded-circle small-image profile",alt:""},null,8,["src"])]),_:1},8,["to"])):Object(c["e"])("",!0)])])])])])])])])):Object(c["e"])("",!0)});var D=a("83fc"),C=a("6c96"),B=a("5d40"),E=a("1157"),M=a.n(E),N=a("d10d"),U={name:"KeepModal",props:{keep:{type:Object,required:!0}},setup(e){const t=Object(c["u"])({activeKeep:Object(c["b"])(()=>D["a"].activeKeep),activeProfile:Object(c["b"])(()=>D["a"].activeProfile),activeVault:Object(c["b"])(()=>D["a"].activeVault),keeps:Object(c["b"])(()=>D["a"].keeps),user:Object(c["b"])(()=>D["a"].user),userVaults:Object(c["b"])(()=>D["a"].userVaults),account:Object(c["b"])(()=>D["a"].account)});return{state:t,async deleteKeep(e){try{await B["a"].confirmAction()&&await C["a"].deleteKeep(e.id),M()("#keepDetailsModal").modal("hide")}catch(t){B["a"].toast("Error: "+t,"error")}},async removeKeep(){try{await B["a"].confirmAction()&&await C["a"].removeKeep(e.keep.vaultKeepId),M()("#keepDetailsModal").modal("hide")}catch(t){B["a"].toast("Error: "+t,"error")}},async addKeep(e){try{await N["a"].addKeep(e,t.activeKeep.id),M()("#keepDetailsModal").modal("hide"),B["a"].toast("Added To Vault","success")}catch(a){B["a"].toast("Error:"+a,"error")}}}}};a("c11c");U.render=P,U.__scopeId="data-v-54df6e0f";t["default"]=U},ef31:function(e,t,a){},f01c:function(e,t){e.exports="data:image/png;base64,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"},fcfb:function(e,t,a){},fcfd:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n={class:"modal",id:"addkeepmodal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r={class:"modal-dialog"},o={class:"modal-content"},s=Object(c["g"])("div",{class:"modal-header"},[Object(c["g"])("h5",{class:"modal-title",id:"exampleModalLabel"}," Create A New Keep "),Object(c["g"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(c["g"])("span",{"aria-hidden":"true"},"×")])],-1),i={class:"modal-body"},l={class:"form-group"},d=Object(c["g"])("label",{for:"title"},"Title",-1),u={class:"form-group"},b=Object(c["g"])("label",{for:"comment"},"Img Url:",-1),p={class:"form-group"},f=Object(c["g"])("label",{for:"comment"},"Description",-1),g=Object(c["g"])("div",{class:"modal-footer"},[Object(c["g"])("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close "),Object(c["g"])("button",{type:"submit",class:"btn btn-primary"}," Add ")],-1);function m(e,t,a,m,O,v){return Object(c["q"])(),Object(c["d"])("div",n,[Object(c["g"])("div",r,[Object(c["g"])("div",o,[s,Object(c["g"])("div",i,[m.state.activeProfile.id===m.state.account.id?(Object(c["q"])(),Object(c["d"])("form",{key:0,onSubmit:t[4]||(t[4]=Object(c["F"])((...e)=>m.createKeep&&m.createKeep(...e),["prevent"]))},[Object(c["g"])("div",l,[d,Object(c["E"])(Object(c["g"])("input",{type:"text",class:"form-control",id:"title","aria-describedby":"title",placeholder:"Keep Title","onUpdate:modelValue":t[1]||(t[1]=e=>m.state.newKeep.name=e),required:""},null,512),[[c["C"],m.state.newKeep.name]])]),Object(c["g"])("div",u,[b,Object(c["E"])(Object(c["g"])("input",{type:"text",class:"form-control",id:"imgUrl","aria-describedby":"comment",placeholder:"Img Url:","onUpdate:modelValue":t[2]||(t[2]=e=>m.state.newKeep.img=e),required:""},null,512),[[c["C"],m.state.newKeep.img]])]),Object(c["g"])("div",p,[f,Object(c["E"])(Object(c["g"])("input",{type:"text",class:"form-control",id:"keepDescription","aria-describedby":"comment",placeholder:"Keep description","onUpdate:modelValue":t[3]||(t[3]=e=>m.state.newKeep.description=e),required:""},null,512),[[c["C"],m.state.newKeep.description]])]),g],32)):Object(c["e"])("",!0)])])])])}var O=a("83fc"),v=a("6c96"),j=a("5d40"),h=a("1157"),y=a.n(h),w={name:"AddKeepModal",setup(){const e=Object(c["u"])({newKeep:{},account:Object(c["b"])(()=>O["a"].account),activeProfile:Object(c["b"])(()=>O["a"].activeProfile),user:Object(c["b"])(()=>O["a"].user)});return{state:e,async createKeep(){try{await v["a"].createKeep(e.newKeep),e.newKeep={},y()("#addkeepmodal").modal("hide"),j["a"].toast("Successfully Created","success")}catch(t){j["a"].toast("Error: "+t,"error")}}}}};w.render=m;t["default"]=w},fd57:function(e,t,a){"use strict";a("ef31")}});