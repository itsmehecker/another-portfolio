(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function c(){const t=document.querySelector(".cursor");t&&(document.addEventListener("mousemove",o=>{t.style.left=o.clientX+"px",t.style.top=o.clientY+"px"}),document.addEventListener("mousedown",()=>{t.style.transform="translate(-50%, -50%) scale(0.8)"}),document.addEventListener("mouseup",()=>{t.style.transform="translate(-50%, -50%) scale(1)"}))}function u(){document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(o){o.preventDefault();const s=this.getAttribute("href").slice(1),n=document.getElementById(s);n&&n.scrollIntoView({behavior:"smooth"})})})}function l(){const t=document.querySelector("form");t&&t.addEventListener("submit",o=>{o.preventDefault(),alert("Message sent successfully!"),t.reset()})}AOS.init({duration:1e3,once:!0,offset:100});document.addEventListener("DOMContentLoaded",()=>{c(),u(),l()});