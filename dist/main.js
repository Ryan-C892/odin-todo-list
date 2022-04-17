(()=>{"use strict";const e=document.getElementById("newProjectForm");class t{constructor(e,t,s,a){this.title=e,this.date=t,this.priority=s,this.done=a}}class s{static displayTasks(){a.getTasks().forEach((e=>s.addTaskList(e)))}static addTaskList(e){const t=document.getElementById("task"),s=document.createElement("li");s.innerHTML=`\n        <p>${e.title}</p>\n        <p>${e.date}</p>\n        <p>${e.priority}</p>\n        <p>${e.done}</p>`,t.appendChild(s)}static showAlert(e,t){const s=document.createElement("div");s.className=`${t}`,s.appendChild(document.createTextNode(e));const a=document.getElementById("newProjectForm"),n=document.getElementById("form-label");a.insertBefore(s,n),setTimeout((()=>document.querySelector(".validate").remove()),5e3),setTimeout((()=>document.querySelector(".success").remove()),5e3)}static clearForm(){document.getElementById("title").value="",document.getElementById("date").value="",document.getElementById("priority").value="",document.getElementById("done").value=!1}}class a{static getTasks(){let e;return e=null===localStorage.getItem("tasks")?[]:JSON.parse(localStorage.getItem("tasks")),e}static addTasks(e){const t=a.getTasks();t.push(e),localStorage.setItem("tasks",JSON.stringify(t))}static removeTasks(e){const t=a.getTasks();t.forEach(((s,a)=>{s.taskItems===e&&t.splice(a,1)})),localStorage.setItem("tasks",JSON.stringify(t))}}document.addEventListener("DOMContentLoaded",s.displayTasks),e.addEventListener("submit",(e=>{e.preventDefault();const n=document.getElementById("title").value,o=document.getElementById("date").value,l=document.getElementById("priority").value,d=document.getElementById("done").value;if(""===n||""===o||""===l||""===d)s.showAlert("Please fill in all fields","validate");else{const e=new t(n,o,l,d);console.log(e),s.addTaskList(e),a.addTasks(e),s.showAlert("Success!","success"),s.clearForm()}}));let n=document.getElementById("done");n.addEventListener("change",(e=>{e.target.checked?n.value=!0:n.value=!1})),function(){let e=document.querySelector(".modal"),t=document.querySelector(".trigger"),s=document.querySelector(".close-btn");t.onclick=function(){e.classList.toggle("show-modal")},s.onclick=function(){e.classList.toggle("show-modal")}}(),window.onload=function(){var e,t;t=(e=["/dist/images/ashim-d-silva-WeYamle9fDM-unsplash.jpg","/dist/images/buzz-andersen-E4944K_4SvI-unsplash.jpg","/dist/images/daniel-tong-dxYdPSuBr-U-unsplash.jpg","/dist/images/stephen-leonardi-eSNjFDbw_i4-unsplash.jpg","/dist/images/maud-bocquillod-bj7EB5my6og-unsplash.jpg","/dist/images/john-fowler-9qgKQewttVs-unsplash.jpg"])[Math.floor(Math.random()*e.length)],document.querySelector("section").style.backgroundImage="url("+t+")"}})();