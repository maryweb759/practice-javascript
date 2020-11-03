
const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
const totalTasks = document.querySelector(".total-tasks span");
const completedTasks = document.querySelector(".completed-tasks span");
const remainingTasks = document.querySelector(".remaining-tasks span");
let tasks = JSON.parse(localStorage.getItem("tasks")) || []; 

if (localStorage.getItem("tasks")) { 
  tasks.map((task) => { 
    createTask(task);
  });
} 

todoForm.addEventListener("submit", function(e)  { 
  // 1
  e.preventDefault(); 
  // 2 
  const input = this.name; 
  const inputValue = input.value; 
  console.log(input); 
  if (inputValue != "" ) { 
      //3 
      const task = { 
          id : new Date().getTime(), 
          name : inputValue, 
          isCompleted : false
      }; 
      // 4
      tasks.push(task); 
      // 5 
      localStorage.setItem("tasks", JSON.stringify(tasks)); 
      //6 
     createTask(task); 
      // 7 
      todoForm.reset(); 
      //8 
      input.focus();
  }
});  

// update task - change status or name 
todoList.addEventListener("input", (e) => { 
  const taskId = e.target.closest("li").id; // look for the father element and grap its id The closest() method traverses the Element and its parents (heading toward the document root) until it finds a node that matches the provided selector string.
  updateTask(taskId, e.target);
}); 

// remove task
todoList.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("remove-task") ||
    e.target.parentElement.classList.contains("remove-task")
  ) {
    const taskId = e.target.closest("li").id;
    removeTask(taskId);
  }
});
//  prevent new lines with Enter 
todoList.addEventListener("keydown", function(e) { 
  if (e.keyCode === 13) { 
      e.preventDefault(); 
  }
}); 

function createTask(task) { 
    const taskEl = document.createElement("li"); 
    taskEl.setAttribute("id", task.id); 
    const taskElMarkup = `
    <div class="checkbox-wrapper">
      <input type="checkbox" id="${task.name}-${task.id}" name="tasks" ${
    task.isCompleted ? "checked" : ""
      }>
      <label for="${task.name}-${task.id}">
        <svg class="checkbox-empty">
          <use xlink:href="#checkbox_empty"></use>
        </svg>
        <svg class="checkmark">
          <use xlink:href="#checkmark"></use>
        </svg>
      </label>
      <span ${!task.isCompleted ? "contenteditable" : ""}>${task.name}</span>
    </div>
    <button class="remove-task" title="Remove ${task.name} task">
      <svg>
        <use xlink:href="#close"></use>
      </svg>
    </button>
  `; 
  taskEl.innerHTML = taskElMarkup; 
  todoList.appendChild(taskEl); 
  countTasks();
} 

// update task
function updateTask(taskId, el) { 
    // 1
    const task = tasks.find((task) =>  task.id == parseInt(taskId)); 
    if (el.hasAttribute("contenteditable")) { // if we click on the span we change its content to the name conntent
        // 2
       task.name = el.textContent; // grap the task name from the array
    } else { 
      // 3 
      const span = el.nextElementSibling.nextElementSibling; 
      task.isCompleted = !task.isCompleted; 
      console.log(task.isCompleted); 
      if ( task.isCompleted) { // if it is cheched "true"
         span.removeAttribute("contenteditable");
         el.setAttribute("checked", "");
      } else { // if it is false
        span.setAttribute("contenteditable", "");
        el.removeAttribute("checked"); 
      }
    } 
    localStorage.setItem("tasks", JSON.stringify(tasks));
    countTasks();
}  

// removeTask function 
function removeTask(taskId) { 
    //1
 tasks = tasks.filter((task) => task.id !== parseInt(taskId));  // return back the ids that are different from the taskId and storm them in the localstorage
 //2
 localStorage.setItem("tasks", JSON.stringify(tasks)); 
//3 
document.getElementById(taskId).remove(); 
// 4 
  countTasks();
} 
// countTasks function 
function countTasks () { 
    totalTasks.textContent = tasks.length; 
    const complatedTasksArray = tasks.filter((task) => task.isCompleted == true); 
    completedTasks.textContent = complatedTasksArray.length; 
    remainingTasks.textContent = tasks.length -  complatedTasksArray.length;
} 