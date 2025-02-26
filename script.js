//Intialize and empty array element called tasks
let tasks = [];

//Add an ON CLICK event listener to the "add task button" that calls a function
document.getElementById("addTaskBtn").addEventListener("click", function () {
  //Get the value of the input box and store it in a variable called taskInput
  let taskInput = document.getElementById("taskInput").value;

  //Check if task input has something in it
  if (taskInput) {
    //Add the new task to the task array
    tasks.push(taskInput);

    //Clear the Input after adding the push
    document.getElementById("taskInput").value = "";

    //
    //displayTasks();
  }

  console.log(tasks);
});
