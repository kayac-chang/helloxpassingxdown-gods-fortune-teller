!function(e=".",o="__import__"){try{self[o]=new Function("u","return import(u)")}catch(t){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[o]=e=>new Promise(((t,s)=>{const a=new URL(e,n);if(self[o].moduleMap[a])return t(self[o].moduleMap[a]);const l=new Blob([`import * as m from '${a}';`,`${o}.moduleMap['${a}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){s(new Error(`Failed to import: ${e}`)),r(c)},onload(){t(self[o].moduleMap[a]),r(c)}});document.head.appendChild(c)})),self[o].moduleMap={}}}("https:/kayac-chang.github.io/helloxpassingxdown-gods-fortune-teller/assets/");