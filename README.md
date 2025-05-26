# lovelace-js-quiz
Quiz in javascript
## Question 1
### Input
### Process
### Output
## Question 2
### Input
- Name as a string
- Role as a string
- Tasks as an array 
### Process
1. Create a class called TeamMember 
2. Create a constructor for the class and give it attributes of name,role, and tasks
- Name:string
- Role:string
- Tasks:array of objects
3. Create prototype method that marks tasks as completed with a parameter of taskTitle using control flow and a loop to iterate through ech task of the task array.
if completed in task = true then  
log to the console taskTitle was completed
else log to the console taskTitle incomplete
4. Create another method that checks the team member's progress using an asynchronous function
create a promise function and pass it the value of taskTitle then if it contains completed resolve with 'All tasks are completed' else resolve with 'Pending tasks remaining' 
### Output
- Task status as a string
- Progress status as a string 