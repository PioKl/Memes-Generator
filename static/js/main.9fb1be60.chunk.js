(this.webpackJsonpmemesgenerator=this.webpackJsonpmemesgenerator||[]).push([[0],{27:function(e,t,a){e.exports=a(60)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(25),r=a.n(o),l=(a(32),a(6)),m=(a(33),a(34),function(e){return e.replace(/\s|\?/g,"")}),s=function(e){var t=e.meme,a=e.memesCounter;return c.a.createElement("div",{className:"meme-card"},c.a.createElement("img",{className:"meme-card__img meme-card__img--".concat(m(t.name)," ").concat(a<=4&&"meme-card__img--lengthAdapted"),src:t.url,title:t.name,alt:t.name}),c.a.createElement("div",{className:"meme-card__overlay"},c.a.createElement("div",{className:"meme-card__text"},t.name)))},i=a(10),u=(a(35),function(e){var t=e.tableOfMemes,a=t.length;return c.a.createElement("div",{className:"memes-container ".concat(a<=4&&"memes-container--lengthAdapted")},t.map((function(e){return c.a.createElement(i.b,{key:e.id,to:m(e.name)},c.a.createElement(s,{meme:e,key:e.id,memesCounter:a}))})))}),d=a(11),p=a.n(d),_=(a(58),function(e){var t=e.pickedMeme,a=Object(n.useState)(""),o=Object(l.a)(a,2),r=o[0],s=o[1],i=Object(n.useState)(""),u=Object(l.a)(i,2),d=u[0],_=u[1],h=Object(n.useState)(""),f=Object(l.a)(h,2),g=f[0],x=f[1],v=Object(n.useState)(""),b=Object(l.a)(v,2),E=b[0],M=b[1],N=Object(n.useState)(""),C=Object(l.a)(N,2),w=C[0],y=C[1],O=Object(n.useState)(null),j=Object(l.a)(O,2),k=j[0],T=j[1];return c.a.createElement(c.a.Fragment,null,k?c.a.createElement("div",{className:"createdMeme"},c.a.createElement("a",{href:k,rel:"noopener noreferrer",target:"_blank"},c.a.createElement("img",{className:"createdMeme__img",src:k,alt:"Created Meme"}))):c.a.createElement("div",{className:"chosedMeme__container"},c.a.createElement("form",{className:"chosedMeme__form-container",onSubmit:function(e){e.preventDefault();var a={template_id:t.id,boxText0:r,boxText1:d,boxText2:g,boxText3:E,boxText4:w,username:"Kosiu",password:"Meme919293"};p.a.post("https://api.imgflip.com/caption_image?template_id=".concat(a.template_id,"&boxes[0][text]=").concat(a.boxText0,"&boxes[1][text]=").concat(a.boxText1,"&boxes[2][text]=").concat(a.boxText2,"&boxes[3][text]=").concat(a.boxText3,"&boxes[4][text]=").concat(a.boxText4,"&username=").concat(a.username,"&password=").concat(a.password)).then((function(e){console.log(e.data),T(e.data.data.url)})).catch((function(e){console.log(e)}))}},c.a.createElement("div",{className:"chosedMeme__picture-container"},c.a.createElement("img",{className:"chosedMeme__img chosedMeme__img--".concat(m(t.name)),src:t.url,alt:""})),c.a.createElement("div",{className:"chosedMeme__creation-container"},c.a.createElement("div",{className:"chosedMeme__title-container"},c.a.createElement("h1",{className:"chosedMeme__title"},t.name)),c.a.createElement("div",{className:"chosedMeme__textCreation-container"},t.box_count<=2?c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{className:"chosedMeme__input",type:"text",placeholder:"top title",value:r,onChange:function(e){s(e.target.value)}}),c.a.createElement("input",{className:"chosedMeme__input",type:"text",placeholder:"bottom title",value:d,onChange:function(e){_(e.target.value)}})):t.box_count<=3?c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{className:"chosedMeme__input",type:"text",placeholder:"text 1",value:r,onChange:function(e){s(e.target.value)}}),c.a.createElement("input",{className:"chosedMeme__input",type:"text",placeholder:"text 2",value:d,onChange:function(e){_(e.target.value)}}),c.a.createElement("input",{className:"chosedMeme__input",type:"text",placeholder:"text 3",value:g,onChange:function(e){x(e.target.value)}})):t.box_count<=4?c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{className:"chosedMeme__input",type:"text",placeholder:"text 1",value:r,onChange:function(e){s(e.target.value)}}),c.a.createElement("input",{className:"chosedMeme__input",type:"text",placeholder:"text 2",value:d,onChange:function(e){_(e.target.value)}}),c.a.createElement("input",{className:"chosedMeme__input",type:"text",placeholder:"text 3",value:g,onChange:function(e){x(e.target.value)}}),c.a.createElement("input",{className:"chosedMeme__input",type:"text",placeholder:"text 4",value:E,onChange:function(e){M(e.target.value)}})):c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{className:"chosedMeme__input chosedMeme__input--box5",type:"text",placeholder:"text 1",value:r,onChange:function(e){s(e.target.value)}}),c.a.createElement("input",{className:"chosedMeme__input chosedMeme__input--box5",type:"text",placeholder:"text 2",value:d,onChange:function(e){_(e.target.value)}}),c.a.createElement("input",{className:"chosedMeme__input chosedMeme__input--box5",type:"text",placeholder:"text 3",value:g,onChange:function(e){x(e.target.value)}}),c.a.createElement("input",{className:"chosedMeme__input chosedMeme__input--box5",type:"text",placeholder:"text 4",value:E,onChange:function(e){M(e.target.value)}}),c.a.createElement("input",{className:"chosedMeme__input chosedMeme__input--box5",type:"text",placeholder:"text 5",value:w,onChange:function(e){y(e.target.value)}})),c.a.createElement("button",{className:"chosedMeme__submitButton ".concat("American Chopper Argument"===t.name&&"chosedMeme__submitButton--".concat(m(t.name))),type:"submit"},"Create"))))))}),h=a(1),f=(a(59),function(e){var t=e.memes,a=e.filteredMemes,o=e.setFilteredMemes,r=e.tipChoosed,m=e.setTipChoosed,s=Object(n.useState)(""),i=Object(l.a)(s,2),u=i[0],d=i[1],p=function(){m(!r)},_=function(e){m(!1),d(e.currentTarget.getAttribute("value"));var a=[];a=""!==e.target.value?t.filter((function(t){return t.name.toLowerCase().includes(e.currentTarget.getAttribute("value").toLocaleLowerCase())})):t,o(a)},h=a.sort((function(e,t){return e.name.localeCompare(t.name)}));return h=a.map((function(e){return c.a.createElement("li",{className:"filter__dropdown-item",key:e.id,value:e.name,onClick:_},e.name)})),c.a.createElement("div",{className:"filter__panel"},c.a.createElement("input",{className:"filter__search-input",type:"text",value:u,onClick:p,onChange:function(e){d(e.target.value);var a=[];a=""!==e.target.value?t.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLocaleLowerCase())})):t,o(a)}}),r?c.a.createElement("i",{onClick:p,className:"filter__arrowIcon filter__arrowIcon--arrowUp fas fa-caret-up"}):c.a.createElement("i",{onClick:p,className:"filter__arrowIcon filter__aarrowIcon--arrowDown fas fa-caret-down"}),c.a.createElement("ul",{className:"filter__dropdown ".concat(r?"filter__dropdown--visible":"filter__dropdown--hidden")},r&&h))});var g=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)([]),s=Object(l.a)(r,2),d=s[0],g=s[1],x=Object(n.useState)(!1),v=Object(l.a)(x,2),b=v[0],E=v[1];Object(n.useEffect)((function(){p.a.get("https://api.imgflip.com/get_memes").then((function(e){console.log(e.data.data),o(e.data.data.memes),g(e.data.data.memes)})).catch((function(e){console.log(e)}))}),[]);var M=a.map((function(e){return c.a.createElement(h.a,{key:e.id,path:"/".concat(m(e.name))},c.a.createElement(_,{pickedMeme:e}))}));return c.a.createElement(i.a,{basename:"/Memes-Generator"},c.a.createElement("div",{className:"App",onClick:function(){!0===b&&E(!1)}},c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/"},c.a.createElement("div",{className:"container"},c.a.createElement("header",{className:"header"},c.a.createElement(f,{memes:a,filteredMemes:d,setFilteredMemes:g,tipChoosed:b,setTipChoosed:E})),c.a.createElement("main",{className:"main"},c.a.createElement(u,{tableOfMemes:d})))),M)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.9fb1be60.chunk.js.map