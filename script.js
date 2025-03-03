//Intialize and empty array element called tasks
let tasks = [];

//Add an ON CLICK event listener to the "add task button" that calls a function
document.getElementById("addTaskButton").addEventListener("click", function () {
  //Get the value of the input box and store it in a variable called taskInput
  let taskInput = document.getElementById("taskInput").value;

  //Check if task input has something in it
  if (taskInput) {
    //Add the new task to the task array
    tasks.push(taskInput);

    //Clear the Input after adding the push
    document.getElementById("taskInput").value = "";

    //
    displayTasks();
  }

  console.log(tasks);
});

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

    li.innerHTML = `${task}<button class='btn btn-dark btn-sm' onclick='removeTask(${index})'> √ </button>`;

    //
    taskList.appendChild(li);
  });
}

function removeTask(index) {
  //Funtion to remove a task from the list when the "√" button is clicked
  tasks.splice(index, 1);
  //Call the function to update the task list display
  displayTasks();
}

//Event Listener for the "Clear all Tasks Button"
document.getElementById("clearTasksBtn").addEventListener("click", function () {
  //Empty the tasks array to remove all tasks
  tasks = [];
  //Call the function to update the task list display
  displayTasks();
});

document.getElementById("taskInput").addEventListener("keydown", (event) => {});

onkeypress = (event) => {};

tasks.classList.toggle("completed");

let taskCount = 0;

function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  const taskCountSpan = document.getElementById("task-count");

  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    taskInput.value = "";
    taskCount++;
    taskCountSpan.textContent = taskCount;
  }
}
