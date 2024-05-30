(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();fetch("data.json").then(t=>{if(!t.ok)throw new Error(`HTTP error, status = ${t.status}`);return t.json()}).then(t=>{const c=document.getElementById("loop");t.map(o=>{console.log(o);let s=document.createElement("div");s.id=o.id,s.className="space",s.innerHTML=`
            <div class="summary__item" data-color=${o.color}>
            <div class="flex-group">
            <img src=${o.icon} alt=""/>
            <h4>${o.category}</h4>
            </div>
            <p class="summary__score">${o.score}
            <span class="summary__light-text"> / 100</span>
            </p></div>`,c.appendChild(s)})}).catch(t=>console.error("Error loading JSON file",t));
