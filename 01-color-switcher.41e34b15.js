const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),l=document.querySelector("body");console.log(l);let d=null;e.addEventListener("click",(()=>{d=setInterval((()=>{let e=`#${Math.floor(16777215*Math.random()).toString(16)}`;l.style.backgroundColor=e}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(()=>{t.disabled=!0,e.disabled=!1,clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.41e34b15.js.map