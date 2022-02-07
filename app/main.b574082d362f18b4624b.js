(()=>{"use strict";var e="todos";function t(){var t=sessionStorage.getItem(e);return t?JSON.parse(t):[]}function o(){var e=document.querySelector(".todo-select-wrapper"),o=document.querySelector(".todo-select");t().length>0?(e.classList.remove("todo-select-wrapper_disabled"),e.classList.remove("todo-select-wrapper_disabled::after"),o.classList.remove("todo-select_disabled")):(e.classList.add("todo-select-wrapper_disabled"),e.classList.add("todo-select-wrapper_disabled::after"),o.classList.add("todo-select_disabled"))}var n=function(n,s){var d=document.createElement("li");d.classList.add("todo-item"),s&&d.classList.add("todo-item_completed");var a=document.createElement("span");a.innerText=n,a.classList.add("todo-text"),d.appendChild(a);var i=document.createElement("button");i.innerHTML='<i class="fas fa-check"></i>',i.classList.add("todo-check-button"),i.addEventListener("click",function(o){return function(n){n.preventDefault(),o.classList.toggle("todo-item_completed"),o.addEventListener("click",(function(){!function(o){var n=t(),s=Array.from(o.childNodes).find((function(e){return e.classList.contains("todo-text")}));if(s){for(var d in n)n[d].value===s.innerText&&(n[d].status=!0);sessionStorage.setItem(e,JSON.stringify(n))}}(o)}))}}(d)),d.appendChild(i);var r=document.createElement("button");return r.innerHTML='<i class="fas fa-trash"></i>',r.classList.add("todo-remove-button"),r.addEventListener("click",function(n){return function(s){s.preventDefault(),n.classList.add("todo-item_fall"),n.addEventListener("transitionend",(function(){!function(o){var n=t(),s=Array.from(o.childNodes).find((function(e){return e.classList.contains("todo-text")}));if(s){var d=n.filter((function(e){return e.value!==s.innerText}));sessionStorage.setItem(e,JSON.stringify(d))}}(n),n.remove(),o()}))}}(d)),d.appendChild(r),d};function s(){return{todoInput:document.querySelector(".todo-input"),todoHelper:document.querySelector(".todo-helper"),todoButton:document.querySelector(".todo-button")}}function d(e){var t=s(),o=t.todoInput,n=t.todoHelper,d=t.todoButton;d.classList.add("todo-button_disabled"),o.addEventListener("focus",(function(){n.classList.add("todo-helper_visible")})),o.addEventListener("blur",(function(){n.classList.remove("todo-helper_visible")})),o.addEventListener("keypress",(function(e){13===e.keyCode&&o.value.length<3&&e.preventDefault()})),o.addEventListener("input",(function(){o.value.length>=3?(d.classList.remove("todo-button_disabled"),n.classList.remove("todo-helper_visible")):(d.classList.add("todo-button_disabled"),n.classList.add("todo-helper_visible"))}))}document.querySelector(".todo-input-wrapper");var a=s(),i=a.todoInput,r=a.todoButton,l=document.querySelector(".todo-list"),c=document.querySelector(".todo-select");document.addEventListener("DOMContentLoaded",(function(){(function(){var e=t();for(var o in e){var s=n(e[o].value,e[o].status);l.appendChild(s)}})(),d(),o()})),i.addEventListener("input",d),r.addEventListener("click",(function(d){var a,r;d.preventDefault(),a=i.value,(r=t()).push({value:a,status:!1}),sessionStorage.setItem(e,JSON.stringify(r));var c=n(i.value);l.appendChild(c),function(e){var t=s(),o=t.todoInput,n=t.todoHelper;t.todoButton.classList.add("todo-button_disabled"),n.classList.add("todo-helper_visible"),o.value=""}(),o()})),c.addEventListener("change",(function(e){var t,o;t=l.childNodes,o=e.target.value,t.length&&t.forEach((function(e){switch(o){case"completed":e.classList.contains("todo-item_completed")?e.style.display="flex":e.style.display="none";break;case"uncompleted":e.classList.contains("todo-item_completed")?e.style.display="none":e.style.display="flex";break;default:return void(e.style.display="flex")}}))}))})();