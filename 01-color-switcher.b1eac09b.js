const t=document.querySelector("body"),e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");let a=null;function r(){clearInterval(a),e.classList.remove("running"),e.disabled=!1,n.disabled=!0}n.disabled=!0,e.addEventListener("click",(function(){if(e.classList.contains("running"))return;e.classList.add("running"),e.disabled=!0,n.disabled=!1,e.textContent="Continue",a=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.style.backgroundColor=e}),1e3)})),n.addEventListener("click",r);document.querySelector("[data-clear]").addEventListener("click",(()=>{r(),t.style.backgroundColor="#ffffff",e.textContent="Start"}));
//# sourceMappingURL=01-color-switcher.b1eac09b.js.map
