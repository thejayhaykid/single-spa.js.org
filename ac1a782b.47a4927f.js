(window.webpackJsonp=window.webpackJsonp||[]).push([[67,30],{180:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));var n=a(0),l=a.n(n),s=a(190),r=[{languageName:"English",languageNameEnglish:"English",documentationUrl:"https://single-spa.js.org",githubUrl:"https://github.com/single-spa/single-spa.js.org"},{languageName:"Portugu\xeas europeu",languageNameEnglish:"Portuguese (Portugal)",documentationUrl:"https://pt-pt.single-spa.js.org",githubUrl:"https://github.com/single-spa/pt-pt.single-spa.js.org"},{languageName:"\u7b80\u4f53\u4e2d\u6587",languageNameEnglish:"Simplified Chinese",documentationUrl:"https://zh-hans.single-spa.js.org",githubUrl:"https://github.com/single-spa/zh-hans.single-spa.js.org"},{languageName:"Espa\xf1ol",languageNameEnglish:"Spanish",documentationUrl:"https://es.single-spa.js.org",githubUrl:"https://github.com/single-spa/es.single-spa.js.org"},{languageName:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",languageNameEnglish:"Russian",documentationUrl:"https://ru.single-spa.js.org",githubUrl:"https://github.com/single-spa/ru.single-spa.js.org"},{languageName:"Bahasa Indonesia",languageNameEnglish:"Indonesian",documentationUrl:"https://id.single-spa.js.org",githubUrl:"https://github.com/single-spa/id.single-spa.js.org"}];function i(){return l.a.createElement(s.a,{title:"Languages"},l.a.createElement("div",{className:"container container--fluid padding-horiz--xl margin-top--lg"},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},l.a.createElement("h1",null,"Languages"),l.a.createElement("p",null,"The single-spa documentation is available in the following languages:")),l.a.createElement("div",{className:"row text--center"},r.map((function(e){return l.a.createElement("div",{key:e.languageName,className:"col col--6 margin-vert--md padding-horiz--xl"},l.a.createElement("h3",null,e.languageNameEnglish),l.a.createElement("div",null,l.a.createElement("a",{href:e.documentationUrl,style:{fontSize:"1.5rem"}},e.languageName)),l.a.createElement("div",null,l.a.createElement("a",{href:e.githubUrl,style:{fontSize:".75rem"}},"Contribute")))}))),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},"Don't see your language above?",l.a.createElement("a",{href:"https://github.com/single-spa/single-spa.js.org/issues/new",style:{marginLeft:".3rem"}},"Let us know"),".")))}},191:function(e,t,a){"use strict";var n=a(3),l=a(0),s=a.n(l),r=a(189),i=a.n(r),o=a(185),g=a(22),m=a(187);t.a=function(){var e=Object(g.default)().siteConfig,t=void 0===e?{}:e,a=t.themeConfig,r=(void 0===a?{}:a).footer;if(!r)return null;var c=r.copyright,u=r.links,h=void 0===u?[]:u,p=r.logo;return s.a.createElement("footer",{className:i()("footer",{"footer--dark":"dark"===r.style})},s.a.createElement("div",{className:"container"},h&&h.length>0&&s.a.createElement("div",{className:"row footer__links"},h.map((function(e,a){return s.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?s.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?s.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,r,i){return s.a.createElement(l.Fragment,{key:r},s.a.createElement("li",{key:e.href||e.to,className:"footer__item"},e.label&&s.a.createElement(o.a,Object(n.a)({className:"footer__link-item"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{to:Object(m.a)(e.to)}),e.label),e.html&&s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})),i.length-1===r&&2===a&&s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{key:"gh-star",className:"footer__item footer__item--gh"},s.a.createElement("iframe",{title:"github",src:"https://ghbtns.com/github-btn.html?user="+t.organizationName+"&repo="+t.projectName+"&type=star&count=true&size=small"})),s.a.createElement("li",{key:"license",className:"footer__item"},s.a.createElement("a",{href:Object(m.a)("img/icons/148705-essential-collection/license/license.html")},"License for icons"))))}))):null)}))),s.a.createElement("div",{className:"text--center"},p&&p.src&&s.a.createElement("img",{className:"footer__logo margin-bottom--sm",alt:p.alt,src:Object(m.a)(p.src)}),s.a.createElement("div",null,"Originally developed at ",s.a.createElement("a",{href:"https://getcanopy.com"},"Canopy")),c&&c)))}}}]);