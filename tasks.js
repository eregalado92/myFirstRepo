// Array of tasks
let tasks = [
  { id: 1, name: "Design UI", status: "pending" },
  { id: 2, name: "Build API", status: "pending" },
  { id: 3, name: "Test Features", status: "pending" }
];



// function to process tasks with a callback
function processTask(task, callback) {
  console.log(`Processing: task: ${task.name}`);
  callback(task);
};

// function expression to mark a task as complete
const markasComplete = function (task) {
  task.status = 'complete'
  console.log(`Task ${task.name}: is now ${task.status}`);
};



// Use an arrow function to display all tasks
const displayTasks = () => {
  //escape sequence
  console.log("\nUpdated Task List:");
  tasks.forEach(task => {
    console.log(`- ${task.name}: ${task.status}`);
  });

};

// Processing each task
processTask(tasks[0], markasComplete);
processTask(tasks[1], markasComplete);
processTask(tasks[2], markasComplete);

displayTasks();



