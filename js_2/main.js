// Min

// 1.

let result = 0.1 + 0.2;
console.log(result.toFixed(1));

// 2.

let num1 = "1";
let num2 = 2;
console.log(+num1 + 2);

// 3.

let balance = +prompt("Flash drive size");
console.log(Math.trunc(balance / 820));

// Normal

// 1.

let money = +prompt("Balance a purse");
let price = +prompt("The price of one chocolate bar");
console.log(Math.trunc(money / price));
console.log(money % price);

// 2.

let yourNumber = +prompt("Enter your *** number");
let reverse = 0;
for (; yourNumber; yourNumber = Math.floor(yourNumber / 10)) {
  reverse *= 10;
  reverse += yourNumber % 10;
}
console.log(reverse);


// Max

// 1.

let deposit = +prompt("Enter your deposit");
let sumYear = (deposit * 5) / 100;
let twoMonths = (sumYear / 12) * 2;
console.log(twoMonths.toFixed(2));

// 2. 

2 && 0 && 3 // 0

2 || 0 || 3 // 3 

2 && 0 || 3 // 3

