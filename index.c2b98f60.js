Array.from(document.querySelectorAll("input")).forEach(function(e){var a=document.createElement("label");a.classList.add("field-label"),a.htmlFor=e.id,a.textContent=e.name.replace(/([A-Z])/g," $1"),e.parentNode.insertBefore(a,e),e.placeholder=e.name.charAt(0).toUpperCase()+e.name.slice(1).replace(/([A-Z])/g," $1").toLowerCase()});
//# sourceMappingURL=index.c2b98f60.js.map
