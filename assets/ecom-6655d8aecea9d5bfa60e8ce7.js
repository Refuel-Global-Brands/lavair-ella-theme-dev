/* Publish by EComposer at 2024-06-24 12:56:25*/
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-v4htvohcer"]=  window.__ectimmers["ecom-v4htvohcer"] || {};
if(!this.$el)return;const e=this.$el,i=e.querySelector(".ecom-text_view-more-btn"),t=e.querySelector(".ecom-text_view-less-btn"),n=e.querySelector(".text-content.ecom-html");!n||(i&&i.addEventListener("click",()=>{n.classList.remove("ecom-text--is-mark"),n.style.maxHeight="",i.style.display="none",t.style.display=""}),t&&t.addEventListener("click",()=>{n.classList.add("ecom-text--is-mark"),n.style.maxHeight="var(--ecom-text-height)",t.style.display="none",i.style.display=""}))

                    });
                    
                        document.querySelectorAll('.ecom-v4htvohcer').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-v4htvohcer', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-5u0md1vgyvr').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-5u0md1vgyvr', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-2mih6tud1a7').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-2mih6tud1a7', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-qt3wrujvwi').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-qt3wrujvwi', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-emtambpmlmo"]=  window.__ectimmers["ecom-emtambpmlmo"] || {};
const t=this.$el;if(!t)return;let r=this.settings.link_redirect,i=t.querySelector('.ecom-contact-form-file[type="file"]');const _=this.id;function g(){if(!r)return!1;let l=r.href;if(l=="")return!1;let m=r.target;window.location.href.includes("contact_posted=true")&&(m==="_blank"?window.open(l):window.location.href=l)}g();const o=t.querySelector("#ecom-contact-form-"+_);if(!o)return;const n=o.querySelector(".ecom__form-button");if(!n)return;i&&(o.setAttribute("enctype","multipart/form-data"),o.addEventListener("submit",function(l){if(!i.value||i.value==="")return;l.preventDefault(),l.stopImmediatePropagation(),n.classList.add("ecom-ajax-loading","ecom-loading");const m=o.querySelector('input[type="file"]');let e=new FormData,c=window.location.origin,d=window.EComposer&&window.EComposer.proxy_path;const w=`${c}${d}/contact-form`;e.append("file",m.files[0]),m.value&&d&&fetch(w,{method:"POST",body:e}).then(u=>u.json()).then(u=>{if(u.status==="success"){let q=m.name;m.remove();let x=document.createElement("input");x.value=u.src_file,x.type="hidden",x.name=q,o.appendChild(x),o.submit()}else alert(`Notice: ${u.message}`)}).catch(u=>console.error(u)).finally(function(){n.classList.remove("ecom-ajax-loading","ecom-loading")})}),i.addEventListener("change",function(){this.files[0].size>10485760&&(this.value="",alert("File size exceeds the maximum allowed limit (10MB)."))}));let f=t.querySelectorAll(".ecom-required--checkbox");n.addEventListener("click",function(l){f.length>0&&f.forEach(function(m){let e=m.querySelectorAll("input[type=checkbox]");if(e.length==0)return;let c=!1;e.forEach(function(d){d.checked&&(c=!0)}),c?e.forEach(function(d){d.required=!1}):e.forEach(function(d){d.required=!0})})}),o.dataset.ecTrackingId&&o.addEventListener("submit",function(){window.Shopify&&window.Shopify.analytics&&Shopify.analytics.publish("ec_custom_events",{button_id:o.id,tracking_id:o.dataset.ecTrackingId})},{once:!0})

                    });
                    
                        document.querySelectorAll('.ecom-emtambpmlmo').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-emtambpmlmo', settings: {},isLive: true});
                        });
                    

                })();
            
;try{
 
} catch(error){console.error(error);}