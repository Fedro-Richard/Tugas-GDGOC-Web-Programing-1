const mainInputEl = document.getElementById("tf-input");
const mainButtonEl = document.getElementById("main-button");
mainButtonEl.addEventListener("click", addTask);

function addTask() {
  const task = document.createElement("li");
  task.textContent = mainInputEl.value;
  task.id =
    new Date().valueOf().toString() +
    Math.random().toString(36).substring(2, 7);
  task.classList.add("list-item");


  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit-button");
  editButton.addEventListener("click", () => {
    editTask(task.id);
  });

  task.appendChild(editButton);
  document.getElementById("task-container").appendChild(task);
  document.getElementById("tf-input").value = "";


  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", () => {
    deleteTask(task.id);
  });

  task.appendChild(deleteButton);
  document.getElementById("task-container").appendChild(task);
  document.getElementById("tf-input").value = "";
}

function deleteTask(id) {
  const task = document.getElementById(id);
  task.remove();
}

function editTask(id) {
  const task = document.getElementById(id);
  mainInputEl.value = task.childNodes[0].textContent.trim();
  mainButtonEl.textContent = "Edit";
  mainButtonEl.removeEventListener("click", addTask);
  mainButtonEl.addEventListener("click", editTaskHandler);

  function editTaskHandler() {
    task.childNodes[0].textContent = mainInputEl.value;
    mainInputEl.value = "";
    mainButtonEl.textContent = "Add Task";
    mainButtonEl.removeEventListener("click", editTaskHandler);
    mainButtonEl.addEventListener("click", addTask);
  }
}
