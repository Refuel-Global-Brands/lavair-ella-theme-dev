!function(){const e=function(){"use strict";window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-25l3ce3nzxd"]=window.__ectimmers["ecom-25l3ce3nzxd"]||{};const e=this.$el;if(!e)return;let t=e.querySelector(".ecom-masonry-layout");if(!t)return;t.addEventListener("itemChange",(function(){setTimeout((function(){t.masonry.layout()}),500)}));var o=t.getAttribute("data-ecom-packery-params")||"{}";let n=Object.assign({itemSelector:".ecom-masonry-layout__item",layoutMode:"masonry",percentPosition:!0,resize:!0},JSON.parse(o));var c=new window.EComPackery(t,n);t.masonry=c,t.querySelectorAll("img").forEach((function(e){e.addEventListener("load",(function(){c.layout()}))}))},t={};document.querySelectorAll(".ecom-25l3ce3nzxd").forEach((function(o){e.call({$el:o,settings:t,id:"ecom-25l3ce3nzxd",isLive:!0})}))}();