/* Publish by EComposer at 2024-06-11 09:38:09*/
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-w2il4drd6v8"]=  window.__ectimmers["ecom-w2il4drd6v8"] || {};
if(!this.$el)return!1;const e=this.$el;this.settings.animation&&function(t){if(!e)return;const n=e.querySelector(".ecom__element--button");if(!n)return;let s=parseInt(t.settings.animation_loop_time)*1e3||6e3,o=1e3;window.__ectimmers["ecom-w2il4drd6v8"]["ymcko7ug4"] = setInterval(function(){n.classList.add("animated"),setTimeout(function(){n.classList.remove("animated")},o)},s)}(this);var i=e.querySelector(".ecom__element--button");this.isLive&&i&&i.dataset.ecTrackingId&&i.addEventListener("click",function(t){if(window.Shopify.analytics){t.preventDefault();let n=document.createElement("div");document.body.appendChild(n),n.click(),Shopify.analytics.publish("ec_custom_events",{button_id:i.id,tracking_id:i.dataset.ecTrackingId}),i.cloneNode(!0).click()}},{once:!0}),this.isLive&&i&&i.dataset.eventTrackingFb&&i.addEventListener("click",function(t){window.fbq&&window.fbq("track",`${i.dataset.eventTrackingFb}`)},{once:!0})

                    });
                    
                        document.querySelectorAll('.ecom-w2il4drd6v8').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-w2il4drd6v8', settings: {"animation":false},isLive: true});
                        });
                    

                })();
            
;try{
 
} catch(error){console.error(error);}