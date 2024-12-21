// Array of team members with their assigned tasks
let teamTasks = [
    { 
      name: "Alice", 
      role: "Frontend Developer", 
      tasks: ["Design UI", "Implement homepage", "Fix CSS bugs"]
    },
    { 
      name: "Bob", 
      role: "Backend Developer", 
      tasks: ["Build API", "Connect database", "Optimize queries"]
    },
    { 
      name: "Charlie", 
      role: "QA Tester", 
      tasks: ["Test homepage", "Report bugs", "Verify fixes"]
    }
  ];


  //console.log the last object in the teamTaks array
  console.log(teamTasks[teamTasks.length -1]);


  //console.log the tasks key in the same object (last element) in teamTasks Array
console.log(teamTasks[2].tasks);

  //add a new team member
  //{name: "David", role: "DevOps Engineer" tasks: ["Set up CI/CD", "Monitor servers"]} 

teamTasks.push({
  name: "David",
  role: "DevOps Engineer",
  tasks: ["Set up CI/CD", 'Monitor servers']
 })
 console.log(teamTasks);

 //template literals example
 console.log(`New Team member is ${teamTasks[teamTasks.length -1].name}`);



 //create a function that pushs a new team member to teamTasks
function addTeamMember(teamTasks, name, role, tasks) {
 teamTasks.push({name,role,tasks})
  };
 addTeamMember(teamTasks, "Emilio", "student", ["planning", "coordinate"]);
 console.log(teamTasks);

 //create a second function that returns the last element of the array teamTasks
function getLastElement(array){
  return array[array.length -1];
};
console.log(getLastElement(teamTasks));
 
 //template literal that says "The newest member of the team is...."

