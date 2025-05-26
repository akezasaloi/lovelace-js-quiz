
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
const course = new Course("JavaScript", "Bright");
course.students.push({ name: "Queen", progress: 90 });
course.students.push({ name: "Saloi", progress: 80 });
course.updateProgress("Queen", 100);
course.generateCertificate("Queen")
  .then(msg => console.log(msg))
  .catch(err => console.log(err));
course.generateCertificate("Saloi")
  .then(msg => console.log(msg))
  .catch(err => console.log(err));

//Question 5

class StockTracker {
    constructor() {
        this.watchlist = [];
    }
    updatePrice(symbol, newPrice) {
        for (let stock of this.watchlist) {
            if (stock.symbol === symbol) {
                stock.currentPrice = newPrice;
            }
        }
    }
    checkAlerts() {
        return new Promise((resolve, reject) => {
            const alerts = [];
            for (let stock of this.watchlist) {
                if (stock.currentPrice >= stock.threshold) {
                    alerts.push(stock);
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
const track = new StockTracker();
track.watchlist.push({ symbol: 'AAA', threshold: 150, currentPrice: 170 });
track.watchlist.push({ symbol: 'BBB', threshold: 2700, currentPrice: 3500 });
track.updatePrice('AAA', 141);
track.updatePrice('BBB', 205);
track.checkAlerts()
  .then(alerts => {
    console.log('Alerts triggered:', alerts);
  })
  .catch(err => {
    console.log(err);
  });
 const tracker = new StockTracker();
 tracker.watchlist.push({ symbol: 'CCC', threshold: 140, currentPrice: 145 });
tracker.watchlist.push({ symbol: 'DDD', threshold: 2340, currentPrice: 2680 });
tracker.updatePrice('CCC', 151);
tracker.updatePrice('DDD', 2705);
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