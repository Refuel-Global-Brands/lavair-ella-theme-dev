!function(){const e=function(){"use strict";window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-emtambpmlmo"]=window.__ectimmers["ecom-emtambpmlmo"]||{};const e=this.$el;if(!e)return;let t=this.settings.link_redirect,i=e.querySelector('.ecom-contact-form-file[type="file"]');const o=this.id;!function(){if(!t)return!1;let e=t.href;if(""==e)return!1;let i=t.target;window.location.href.includes("contact_posted=true")&&("_blank"===i?window.open(e):window.location.href=e)}();const n=e.querySelector("#ecom-contact-form-"+o);if(!n)return;const c=n.querySelector(".ecom__form-button");if(!c)return;i&&(n.setAttribute("enctype","multipart/form-data"),n.addEventListener("submit",(function(e){if(!i.value||""===i.value)return;e.preventDefault(),e.stopImmediatePropagation(),c.classList.add("ecom-ajax-loading","ecom-loading");const t=n.querySelector('input[type="file"]');let o=new FormData,r=window.location.origin,l=window.EComposer&&window.EComposer.proxy_path;const s=`${r}${l}/contact-form`;o.append("file",t.files[0]),t.value&&l&&fetch(s,{method:"POST",body:o}).then(e=>e.json()).then(e=>{if("success"===e.status){let i=t.name;t.remove();let o=document.createElement("input");o.value=e.src_file,o.type="hidden",o.name=i,n.appendChild(o),n.submit()}else alert("Notice: "+e.message)}).catch(e=>console.error(e)).finally((function(){c.classList.remove("ecom-ajax-loading","ecom-loading")}))})),i.addEventListener("change",(function(){this.files[0].size>10485760&&(this.value="",alert("File size exceeds the maximum allowed limit (10MB)."))})));let r=e.querySelectorAll(".ecom-required--checkbox");c.addEventListener("click",(function(e){r.length>0&&r.forEach((function(e){let t=e.querySelectorAll("input[type=checkbox]");if(0==t.length)return;let i=!1;t.forEach((function(e){e.checked&&(i=!0)})),i?t.forEach((function(e){e.required=!1})):t.forEach((function(e){e.required=!0}))}))})),n.dataset.ecTrackingId&&n.addEventListener("submit",(function(){window.Shopify&&window.Shopify.analytics&&Shopify.analytics.publish("ec_custom_events",{button_id:n.id,tracking_id:n.dataset.ecTrackingId})}),{once:!0})};document.querySelectorAll(".ecom-emtambpmlmo").forEach((function(t){e.call({$el:t,id:"ecom-emtambpmlmo",settings:{},isLive:!0})}))}(),function(){const e=function(){"use strict";if(window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-t3cyrdxs9aq"]=window.__ectimmers["ecom-t3cyrdxs9aq"]||{},"lightbox"===this.settings.link&&"yes"===this.settings.lightbox&&window.EComModal&&this.$el){var e=this.$el.querySelector("[ecom-modal]");new window.EComModal(e,{cssClass:["ecom-container-lightbox-"+this.id]})}};document.querySelectorAll(".ecom-t3cyrdxs9aq").forEach((function(t){e.call({$el:t,id:"ecom-t3cyrdxs9aq",settings:{link:"lightbox",lightbox:"no"},isLive:!0})}))}();