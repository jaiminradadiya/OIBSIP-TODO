document.getElementById("saveTask").addEventListener("click", addTask);

function addTask() {
  const title = document.getElementById("taskTitle").value;
  const description = document.getElementById("taskDescription").value;
  
  if (title === "" || description === "") {
    alert("Please fill out both fields.");
    return;
  }

  const task = document.createElement("li");
  task.innerHTML = `<strong>${title}</strong>: ${description} 
                    <button class="complete-btn">Complete</button>
                    <button class="delete-btn">Delete</button>`;
                    
  document.getElementById("pendingTasks").appendChild(task);

  task.querySelector(".complete-btn").addEventListener("click", () => completeTask(task));
  task.querySelector(".delete-btn").addEventListener("click", () => deleteTask(task));

  clearInputs();
}

function completeTask(task) {
  document.getElementById("completedTasks").appendChild(task);
  task.querySelector(".complete-btn").remove();
}

function deleteTask(task) {
  task.remove();
}

function clearInputs() {
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDescription").value = "";
}
