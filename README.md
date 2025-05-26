# lovelace-js-quiz
Quiz in javascript
## Question 1
### Input
- orderId as a string
- items as an array of objects
### Process
1. Create a class called CustomerOrder
Add a constructor with atributes of
orderId:string
items: array of objects with 
- name:string
- quantity:number 
- price:number
- status:string
2. Create method calculateTotal()
Initialize a variable totalAmount  with 0
Iterate through each item in the items array
For each item, multiply quantity by price
Add the result to the total
Return the total amount
processPayment() and async method
 Returns a promise that waits for 2 seconds and after two seconds resolves successfully and after the Promise resolves
the status property change to paid and a success message is printed including orderId and the new status of the order
### Output
- The total amount charged
- A success message
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
## Question 3
### Input
### Process
1. Create class Candidate with constructor and properties  name, position, and interviews as an array
2. Create a method scheduleInterview that takes in date.
Inside scheduleInterview, 
3. Create newInterview object with date and status = "pending".
4. Push newInterview into this.interviews array.
5. Create async method sendConfirmation().
6. Return a Promise that waits 1 second using setTimeout.
7. Resolve Promise with message Interview confirmed with the name after 1 second as the promise resolves.
8. Console log the message.
9. Create new Candidate instance with name and position.
10. Call scheduleInterview("2025-06-09") on candidate instance.
11. Call sendConfirmation() on candidate instance.

### Output
- A message inviting the candidate
## Question 4
### Input
### Process
1. Create a class with function constructor taking in,title, instructor and array of students
2. Add a function updateProgress that takes in studentName and value that updates student's progress
3. Create an async method taking in student Name that returns a promise resolving only when student's progress is 100 otherwise incomplete progress
### Output
## Question 5
### Input

### Process
1. Create a class StockTracker
2. Create a function constructor watchlist which is an array of symbol,threshold and current Price.
3. Create a function that takes in symbol,newPrice to update the stock's current price.
4. Create an asynchronous method checkAlerts to loop through watchlist and returns alerts when currentPrice>=threshold
or  "No alerts triggered"
### Output