!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";e=location.href,(d=document.createElement("a")).href=e||window.location.href;const r={source:e,protocol:d.protocol.replace(":",""),host:d.hostname,port:d.port,origin:d.origin,search:d.search,query:d.search,file:(d.pathname.match(/\/([^/?#]+)$/i)||["",""])[1],hash:d.hash.replace("#",""),path:d.pathname.replace(/^([^/])/,"/$1"),relative:(d.href.match(/tps?:\/\/[^/]+(.+)/)||["",""])[1],params:function(){for(var e={},o=[],t=d.search.replace(/^\?/,"").split("&"),n=0;n<t.length;n++){var r=t[n];""!==r&&r.indexOf("=")&&o.push(r)}for(var a=0;a<o.length;a++){var i=o[a],c=i.indexOf("="),s=i.substring(0,c),i=i.substring(c+1);s?e[s]=i:e[i]=null}return e}()};var d,e=["code","tree","form","text","view","preview"];let o=r.params.mode||"code";-1===e.indexOf(o)&&(o="code");var t=document.getElementById("jsoneditor");const a=new window.JSONEditor(t,{mode:o,modes:e,search:!0,mainMenuBar:!0,navigationBar:!0,statusBar:!0,onModeChange:function(e,o){console.log("Mode switched from",o,"to",e)}});function n(){if(window.jsonEditorSaveHandler instanceof Function)window.jsonEditorSaveHandler(a);else{let e=window.prompt("要保存的文件名："),o=(-1===e.indexOf(".")?e+=".json":"json"!==e.split(".").pop().toLowerCase()&&(e=e.split(".")[0]+".json"),a.getText());try{o=JSON.stringify(a.get(),null,2)}catch(e){if(!confirm("JSON 格式错误，继续保存？"))return;o=a.getText()}var t,n,r=new Blob([o],{type:"application/json;charset=utf-8"});r=r,t=e,n=document.createElement("a"),document.body.appendChild(n),n.style="display: none",r=window.URL.createObjectURL(r),n.href=r,n.download=t,n.click(),window.URL.revokeObjectURL(r),document.body.removeChild(n)}}window.jsonEditor=a,async function(){if(r.params.url){var o=decodeURIComponent(r.params.url);try{e=o;var t=await new Promise((o,t)=>{fetch(e).then(e=>e.json()).then(e=>{o(e)}).catch(e=>{t(e)})});return!a.set(t)}catch(e){console.error("URL获取到的JSON数据异常：",e,o),alert(`URL获取到的JSON数据异常：${o}  `+e)}}var e;if(r.params.json){t=decodeURIComponent(r.params.json);try{var n=JSON.parse(t);return!a.set(n)}catch(e){console.error("JSON parse error:",e,t),a.setText(t),alert(`URL参数里的JSON数据格式异常： ${t}  `+e)}}a.set({Array:[1,2,3],Boolean:!0,Null:null,Number:123,Object:{a:"b",c:"d"},Corlor:"#FF0000",String:"Hello World",Hello:"这是JSON示例数据"})}(),document.documentElement.addEventListener("keydown",function(e){83===e.keyCode&&e.ctrlKey&&(e.preventDefault(),e.stopPropagation(),n())},!0)});