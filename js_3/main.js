// Min

// 1.

let age = +prompt("How old are you?");
if (age <= 11) {
  console.log("Are you a child");
} else if (age <= 17) {
  console.log("Are you a teenager");
} else if (age <= 59) {
  console.log("Are you a adult");
} else if (age <= 111) {
  console.log("Are you a pension");
} else {
  console.log("Not correct age");
}

// 2.

let number = +prompt("Enter number from 0 to 9");
switch (number) {
  case 0:
    console.log("Your symbol )");
    break;
  case 1:
    console.log("Your symbol !");
    break;
  case 2:
    console.log("Your symbol @");
    break;
  case 3:
    console.log("Your symbol #");
    break;
  case 4:
    console.log("Your symbol $");
    break;
  case 5:
    console.log("Your symbol %");
    break;
  case 6:
    console.log("Your symbol ^");
    break;
  case 7:
    console.log("Your symbol &");
    break;
  case 8:
    console.log("Your symbol *");
    break;
  case 9:
    console.log("Your symbol (");
    break;
  default:
    console.log("Not exist");
}

// 3.

let num_1 = +prompt("Enter first number");
let num_2 = +prompt("Enter second number");
let sum = 0;
while (num_1 <= num_2) {
  sum += num_1;
  num_1++;
}
console.log(sum);

// 4.

let num_1 = +prompt("Enter first number");
let num_2 = +prompt("Enter second number");
let denominator;
while (num_1 != num_2) {
  if (num_1 > num_2) {
    num_1 = num_1 - num_2;
  } else {
    num_2 = num_2 - num_1;
  }
}
denominator = num_1;
console.log(denominator);

// 5.

let askNum = +prompt("Enter number");
let i = 2;
for (i; i * 2 <= askNum; i++) {
  if (askNum % i == 0) {
    console.log(`All denominator: ${i}`);
  }
}

// Normal

// 1.

let palindrom = +prompt("Enter your ***** number");
let reverse = 0;
let number = palindrom;
for (; palindrom; palindrom = Math.floor(palindrom / 10)) {
  reverse *= 10;
  reverse += palindrom % 10;
}
if (reverse === number) {
  console.log("This is palindrom");
} else {
  console.log("No, this is not palindrom");
}

// 2.

let price = +prompt("Enter your price");
let result;
if (price < 200) {
  console.log("You dont have discount");
} else if (price < 300) {
  result = (price * 3) / 100;
  console.log(`Your price with discount 3%: ${result}`);
} else if (price < 500) {
  result = (price * 5) / 100;
  console.log(`Your price with discount 5%: ${result}`);
} else {
  result = (price * 7) / 100;
  console.log(`Your price with discount 7%: ${result}`);
}

// 3.

let i = 0; // Немного недоразобрался в этой задаче
for (i; i < 10; i++) {
  let tenNumber = +prompt("Enter 10 numbers");
  if (tenNumber % 2 == 0) {
    console.log(`${tenNumber} is even number`);
  } else if (tenNumber % 2 != 0) {
    console.log(`${tenNumber} is odd number`);
  }
}

// 4. 

const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let currDay = 0;
while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
  currDay = (currDay + 1) % days.length;
}

// Max

// Отстаю по занятиям, с уровнями сложности Максимум могу провести весь день, пропущу пока
