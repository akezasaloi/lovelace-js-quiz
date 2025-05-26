// Question 1
class CustomerOrder {
    constructor(orderId, items, status) {
      this.orderId = orderId;
      this.items = items;
      this.status = status;
    }
    calculateTotal() {
      let totalAmount = 0;
      for (let i = 0; i < this.items.length; i++) {
        totalAmount += this.items[i].quantity * this.items[i].price;
      }
      return totalAmount;
    }
    async processPayment() {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.status = "paid";
      console.log(`Payment for ${this.orderId} was successfull.`);
    }
  }
  let order1 = new CustomerOrder("O01", [
    { name: "Shampoo", quantity: 2, price: 1200 },
    { name: "Hair kit", quantity: 1, price: 3000 },
  ]);
  console.log("Total amount charged:", order1.calculateTotal());
  order1.processPayment();
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

// Question 3
class Candidate {
    constructor(name, position, interviews = []) {
      this.name = name;
      this.position = position;
      this.interviews = interviews;
    }
    scheduleInterview(date) {
      let newInterview = {
        date: date,
        status: "pending"
      };
      this.interviews.push(newInterview);
    }
    async sendConfirmation() {
      return new Promise((resolve) => {
        setTimeout(() => {
          let invite = `Interview confirmed with ${this.name}`;
          resolve(invite);
        }, 1000);
      }).then((invite) => {
        console.log(invite);
        return invite;
      });
    }
  }
  let candidate = new Candidate("Akeza Saloi", "Data analyst");
  candidate.scheduleInterview("2026-01-01");
  candidate.sendConfirmation();
//question 4
class Course {
    constructor(title, instructor) {
        this.title = title;
        this.instructor = instructor;
        this.students = [];
    }
    updateProgress(studentName, value) {
        for (let student of this.students) {
            if (student.name === studentName) {
                student.progress = value;
            }
        }
    }
    generateCertificate(studentName) {
        return new Promise((resolve, reject) => {
            const student = this.students.find(s => s.name === studentName);
            if (student && student.progress === 100) {
                resolve(`Certificate generated for ${studentName}`);
            } else {
                reject("Incomplete progress");
            }
        });
    }
}
const course = new Course("JavaScript", "Hunter");
course.students.push({ name: "Saloi", progress: 90 });
course.students.push({ name: "Akeza", progress: 80 });
course.updateProgress("Saloi", 100);
course.generateCertificate("Saloi")
  .then(message => console.log(message))
  .catch(err => console.log(err));
course.generateCertificate("Akeza")
  .then(message => console.log(message))
  .catch(err => console.log(err));

//Question 5

class StockTracker {
    constructor() {
        this.watchlist = [];
    }
    updatePrice(symbol, newPrice) {
        for (let item of this.watchlist) {
            if (item.symbol === symbol) {
                item.currentPrice = newPrice;
            }
        }
    }
    checkAlerts() {
        return new Promise((resolve, reject) => {
            const alerts = [];
            for (let item of this.watchlist) {
                if (item.currentPrice >= item.threshold) {
                    alerts.push(item);
                }
            }
            if (alerts.length > 0) {
                resolve(alerts);
            } else {
                reject("No alerts triggered");
            }
        });
    }
}
const track1 = new StockTracker();
track1.watchlist.push({ symbol: 'AS1', threshold: 4568, currentPrice: 6800 });
track1.watchlist.push({ symbol: 'AS2', threshold: 3829, currentPrice: 10000 });
track1.updatePrice('AS1', 7898);
track1.updatePrice('AS2', 5798);
track1.checkAlerts()
  .then(alerts => {
    console.log('Alerts triggered:', alerts);
  })
  .catch(err => {
    console.log(err);
  });
 const tracker = new StockTracker();
 tracker.watchlist.push({ symbol: 'AS3', threshold: 6483, currentPrice: 4500 });
tracker.watchlist.push({ symbol: 'AS4', threshold: 2630, currentPrice: 3800 });
tracker.updatePrice('AS3', 4545);
tracker.updatePrice('AS4', 2705);
tracker.checkAlerts()
  .then(alerts => {
    console.log('Alerts triggered for:');
    alerts.forEach(stock => {
     console.log(`${stock.symbol}: Current Price = ${stock.currentPrice}, Threshold = ${stock.threshold}`);
    });
  })
  .catch(err => {
    console.log(err);
  });