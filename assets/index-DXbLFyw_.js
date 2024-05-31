(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();fetch("data.json").then(t=>(console.log(t.status),console.log(t.ok),t.ok&&console.log("ejectutamos cliente"),t.json())).then(t=>{const c=document.getElementById("loop");t.map(r=>{console.log(r);let s=document.createElement("div");s.id=r.id,s.className="space",s.innerHTML=`
        <div class="summary__item" data-color=${r.color}>
        <div class="flex-group">
        <img src=${r.icon} alt=""/>
        <h4>${r.category}</h4>
        </div>
        <p class="summary__score">${r.score}
        <span class="summary__light-text"> / 100</span>
        </p></div>`,c.appendChild(s)})}).catch(t=>console.log("Hay un error que no está entre 200 y 50x"));
