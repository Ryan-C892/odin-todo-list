(()=>{"use strict";function e(){var e=["/dist/images/ashim-d-silva-WeYamle9fDM-unsplash.jpg","/dist/images/buzz-andersen-E4944K_4SvI-unsplash.jpg","/dist/images/daniel-tong-dxYdPSuBr-U-unsplash.jpg","/dist/images/stephen-leonardi-eSNjFDbw_i4-unsplash.jpg","/dist/images/maud-bocquillod-bj7EB5my6og-unsplash.jpg","/dist/images/john-fowler-9qgKQewttVs-unsplash.jpg"];return e[Math.floor(Math.random()*e.length)]}document.querySelector("section").style.backgroundImage="url('"+e()+"')";const t=(()=>{const e=document.getElementById("newProjectForm");class t{constructor(e,t,o,a){this.title=e,this.date=t,this.priority=o,this.done=a}}class o{static getTasks(){var e;return null===localStorage.getItem("tasks")?e=[]:(e=JSON.parse(localStorage.getItem("tasks")),console.log(e)),e}static addTasks(e){var t=o.getTasks();t.push(e),localStorage.setItem("tasks",JSON.stringify(t))}static removeTasksFromStorage(e){var t=o.getTasks();t.forEach(((o,a)=>{o.item===e?t.splice(a,1):localStorage.setItem("tasks",JSON.stringify(t))})),localStorage.setItem("tasks",JSON.stringify(t))}}class a{static displayTasks(){o.getTasks().forEach((e=>a.createTasks(e)))}static createTasks(e){var t=document.getElementById("task"),o=document.createElement("tr");o.innerHTML=`\n            <td>${e.title}</td>\n            <td>${e.date}</td>\n            <td>${e.priority}</td>\n            <td><a href="#" class="doneBtn">${e.done}</a></td>\n            <td><a href="#" class="remove">Remove</a></td>`,t.appendChild(o)}static showAlert(e,t){var o=document.createElement("div");o.className=`${t}`,o.appendChild(document.createTextNode(e));var a=document.getElementById("newProjectForm"),s=document.getElementById("form-label");a.insertBefore(o,s),setTimeout((()=>document.querySelector(".validate").remove()),5e3),setTimeout((()=>document.querySelector(".success").remove()),5e3)}static showTaskRemoved(e,t){var o=document.createElement("div");o.className=`${t}`,o.appendChild(document.createTextNode(e));var a=document.getElementById("task-container"),s=document.querySelector(".todo-container");a.insertBefore(o,s),setTimeout((()=>document.querySelector(".task-removed").remove()),5e3)}static changeDone(e){e.target.classList.contains("doneBtn")&&("true"==e.target.innerHTML?e.target.innerHTML="false":e.target.innerHTML="true")}static removeTask(e){e.target.classList.contains("remove")&&(e.target.parentElement.parentElement.remove(),a.showTaskRemoved("Task Removed","task-removed"))}static clearForm(){document.getElementById("title").value=" ",document.getElementById("date").value=" ",document.getElementById("priority").value=" ",document.getElementById("done").value=!1}}document.addEventListener("DOMContentLoaded",a.displayTasks),e.addEventListener("submit",(e=>{e.preventDefault();var s=document.getElementById("title").value,r=document.getElementById("date").value,n=document.getElementById("priority").value,c=document.getElementById("done").value,l=new Date;if(l.setHours(0,0,0,0),""===s||""===r||""===n)a.showAlert("Please fill in all fields.","validate");else if(new Date(r)<l)a.showAlert("This date has already passed! Please enter another date.","validate");else{var d=new t(s,r,n,c);console.log(d),a.createTasks(d),o.addTasks(d),a.showAlert("Success!","success"),a.clearForm()}})),document.getElementById("task").addEventListener("click",(e=>{a.changeDone(e)})),document.getElementById("task").addEventListener("click",(e=>{a.removeTask(e),o.removeTasksFromStorage()}));var s=document.getElementById("done");return s.addEventListener("change",(e=>{e.target.checked?(s.value=!0,console.log("True!")):(s.value=!1,console.log("False!"))})),{Task:t,Storage:o,EventHandler:a}})();!function(){let e=document.querySelector("#modalToDo"),t=document.getElementById("addToDo"),o=document.querySelector(".close-todo");t.onclick=function(){e.classList.toggle("show-modal")},o.onclick=function(){e.classList.toggle("show-modal")}}(),function(){let e=document.querySelector("#modalNewProject"),t=document.getElementById("addProject"),o=document.querySelector(".close-project");t.onclick=function(){e.classList.toggle("show-modal")},o.onclick=function(){e.classList.toggle("show-modal")}}(),e(),t(),(()=>{const e=document.getElementById("projectForm");class t{constructor(e){this.title=e}}class o{static getProjects(){var e;return null===localStorage.getItem("projects")?e=[]:(e=JSON.parse(localStorage.getItem("projects")),console.log(e)),e}static addProjects(e){var t=o.getProjects();t.push(e),localStorage.setItem("projects",JSON.stringify(t))}static removeProjectsFromStorage(e){var t=o.getProjects();t.forEach(((o,a)=>{o.item===e?t.splice(a,1):localStorage.setItem("projects",JSON.stringify(t))})),localStorage.setItem("projects",JSON.stringify(t))}}class a{static displayProjects(){o.getProjects().forEach((e=>a.createProjects(e)))}static createProjects(e){var t=document.getElementById("project"),o=document.createElement("tr");o.innerHTML=`\n            <td>${e.title}</td>\n            <td><a href="#" class="remove"><img src="/dist/images/delete-circle-outline.svg" alt="add"></a></td>`,t.appendChild(o)}static showAlert(e,t){var o=document.createElement("div");o.className=`${t}`,o.appendChild(document.createTextNode(e));var a=document.getElementById("projectForm"),s=document.getElementById("form-title");a.insertBefore(o,s),setTimeout((()=>document.querySelector(".validate").remove()),5e3),setTimeout((()=>document.querySelector(".success").remove()),5e3)}static showTaskRemoved(e,t){var o=document.createElement("div");o.className=`${t}`,o.appendChild(document.createTextNode(e));var a=document.getElementById("sidebar"),s=document.querySelector(".new-list-container");a.insertBefore(o,s),setTimeout((()=>document.querySelector(".task-removed").remove()),5e3)}static removeProject(e){e.preventDefault(),e.target.classList.contains("remove")&&(e.target.parentElement.parentElement.remove(),a.showTaskRemoved("Task Removed","task-removed"))}static clearForm(){document.getElementById("title").value=" "}}document.addEventListener("DOMContentLoaded",a.displayProjects),e.addEventListener("submit",(e=>{e.preventDefault();var s=document.getElementById("title").value;if(""===s)a.showAlert("Please fill in all fields.","validate");else{var r=new t(s);console.log(r),a.createProjects(r),o.addProjects(r),a.showAlert("Success!","success"),a.clearForm()}})),document.getElementById("project").addEventListener("click",(e=>{a.removeProject(e),o.removeProjectsFromStorage()}))})()})();