!function(){const e=function(){"use strict";window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-emtambpmlmo"]=window.__ectimmers["ecom-emtambpmlmo"]||{};const e=this.$el;if(!e)return;let t=this.settings.link_redirect,o=e.querySelector('.ecom-contact-form-file[type="file"]');const i=this.id;!function(){if(!t)return!1;let e=t.href;if(""==e)return!1;let o=t.target;window.location.href.includes("contact_posted=true")&&("_blank"===o?window.open(e):window.location.href=e)}();const n=e.querySelector("#ecom-contact-form-"+i);if(!n)return;const c=n.querySelector(".ecom__form-button");if(!c)return;o&&(n.setAttribute("enctype","multipart/form-data"),n.addEventListener("submit",(function(e){if(!o.value||""===o.value)return;e.preventDefault(),e.stopImmediatePropagation(),c.classList.add("ecom-ajax-loading","ecom-loading");const t=n.querySelector('input[type="file"]');let i=new FormData,r=window.location.origin,l=window.EComposer&&window.EComposer.proxy_path;const a=`${r}${l}/contact-form`;i.append("file",t.files[0]),t.value&&l&&fetch(a,{method:"POST",body:i}).then(e=>e.json()).then(e=>{if("success"===e.status){let o=t.name;t.remove();let i=document.createElement("input");i.value=e.src_file,i.type="hidden",i.name=o,n.appendChild(i),n.submit()}else alert("Notice: "+e.message)}).catch(e=>console.error(e)).finally((function(){c.classList.remove("ecom-ajax-loading","ecom-loading")}))})),o.addEventListener("change",(function(){this.files[0].size>10485760&&(this.value="",alert("File size exceeds the maximum allowed limit (10MB)."))})));let r=e.querySelectorAll(".ecom-required--checkbox");c.addEventListener("click",(function(e){r.length>0&&r.forEach((function(e){let t=e.querySelectorAll("input[type=checkbox]");if(0==t.length)return;let o=!1;t.forEach((function(e){e.checked&&(o=!0)})),o?t.forEach((function(e){e.required=!1})):t.forEach((function(e){e.required=!0}))}))})),n.dataset.ecTrackingId&&n.addEventListener("submit",(function(){window.Shopify&&window.Shopify.analytics&&Shopify.analytics.publish("ec_custom_events",{button_id:n.id,tracking_id:n.dataset.ecTrackingId})}),{once:!0})};document.querySelectorAll(".ecom-emtambpmlmo").forEach((function(t){e.call({$el:t,id:"ecom-emtambpmlmo",settings:{},isLive:!0})}))}(),function(){const e=function(){"use strict";window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-62ot3dorzhg"]=window.__ectimmers["ecom-62ot3dorzhg"]||{};var e=this.$el;if(e&&this.isLive){var t=e.querySelectorAll(".element-social-link:not(.element-social-link__custom)");t.length&&t.forEach((function(e){var t=(e.getAttribute("href")||"#").replace("{current-link}",location.href);e.setAttribute("href",t)}))}};document.querySelectorAll(".ecom-62ot3dorzhg").forEach((function(t){e.call({$el:t,id:"ecom-62ot3dorzhg",settings:{},isLive:!0})}))}();