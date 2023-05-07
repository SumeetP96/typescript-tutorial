"use strict";
// Index signatures
// interface TransactionObj {
//   readonly [index: string]: number;
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    // Sandwich: 10, // can be added but is optional
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40;
console.log(todaysTransactions["Sandwich"]); // undefined
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test); // undefined
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).forEach((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
console.log(logStudentKey(student, "GPA"));
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 50,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
