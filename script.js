//Intialize and empty array element called tasks
let tasks = [];
let taskCount = 0;
//Add an ON CLICK event listener to the "add task button" that calls a function
document.getElementById("addTaskButton").addEventListener("click", addTask);
//Get the value of the input box and store it in a variable called taskInput
function addTask() {
  let taskInput = document.getElementById("taskInput").value;
  //Check if task input has something in it
  if (taskInput) {
    //Add the new task to the task array
    tasks.push(taskInput);
    //Clear the Input after adding the push
    document.getElementById("taskInput").value = "";
    //
    taskCount++;
    document.getElementById("taskCount").textContent = `Tasks: ${taskCount}`;
    displayTasks();
  }
  console.log(tasks);
}

//Function to display all the tasks in a list
function displayTasks() {
  //Select the unarardered lsit (taskList) in the HTML
  let taskList = document.getElementById("taskList");

  //Clear the existing task list before updating it
  taskList.innerHTML = "";

  //Loop through each task in the array and create a list item
  tasks.forEach((task, index) => {
    //Create a new <li> element for each task
    let li = document.createElement("li");

    //Add CSS classes for styling
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    li.id = `${index}`;

    li.innerHTML = `<span>${task}</span><button class='btn btn-dark btn-sm' onclick='removeTask(${index})'> √ </button>
    <button class='btn btn-dark btn-sm' onclick='checkTask(${index})'> done </button>`;

    //
    taskList.appendChild(li);
  });
}

function removeTask(index) {
  taskCount--;
  document.getElementById("taskCount").textContent = `Tasks: ${taskCount}`;
  //Funtion to remove a task from the list when the "√" button is clicked
  tasks.splice(index, 1);
  //Call the function to update the task list display
  displayTasks();
}

window.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    addTask();
  }
});

function checkTask(id) {
  document
    .getElementById(id)
    .getElementsByTagName("SPAN")[0]
    .classList.toggle("strikethru");
}

document.getElementById("removeTask").addEventListener("click", function () {
  document.getElementById("taskList").innerHTML = "";
  taskCount = 0;
  `Tasks: ${taskCount}`;
  document.getElementById("taskCount").textContent = `Tasks: ${taskCount}`;
});
