!function(){"use strict";class e{constructor(e){this._element=e}paintGnom(){const e=document.createElement("img");e.classList.add("gnom-img");const t=document.querySelectorAll(".gnom");for(const e of t)e.firstElementChild&&e.firstElementChild.remove();t[Math.floor(Math.random()*t.length)].append(e)}}document.addEventListener("DOMContentLoaded",(()=>{const t=new e(document.querySelector(".gnom-game"));setInterval(t.paintGnom,1e3)}))}();