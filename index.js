
// Question 1
// Question 2
class TeamMember{
    constructor(name,role,tasks){
        this.name = name;
        this.role = role;
        this.tasks = tasks;
    }   

}

const teamMember1 = new TeamMember('Akeza','Developer',[{title:'Testcases',completed:true},{title:'Debugging',completed:false}])
TeamMember.prototype.completeTask = function(taskTitle){
 this.tasks.forEach(task => {
       
    if(task.completed){
        taskTitle ='completed';
        console.log(`${task.title} was completed`);
    }
    else{
        taskTitle ='Pending'
      console.log(`${task.title} is pending`);  
    };
});
return taskTitle;
}
teamMember1.completeTask();

const promise = new Promise(function (resolve,reject){

        if(this.taskTitle == 'completed'){
            resolve('All tasks completed!');
        }
        else{
            reject('Pending tasks remaining')
        }

})
promise.then(()=>{
    console.log(`Good Job on completing all tasks`);
})
.catch((response)=>{
    console.log(response);
})
.finally(()=>{
    console.log(`I have learnt alot during these tasks `);
})

