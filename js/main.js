
// HOMEWORK 1

// Homework (min)

let firstName = 'Oleksandr';
let lastName = 'Ruban';
let yearBirth = 1990;
let pet = true;

/* Стили написания переменных
Camel case (camelCase)
Pascal case (PascalCase)
Snake case (snake_case)
Screaming snake case (SCREAMING_SNAKE_CASE)
Kebab case (kebab-case)
*/


// Homework (mid)

let firstName = prompt('Как тебя зовут?')
alert('Привет, ' + firstName);

const PRESENT_DAY = 2022;
let date = prompt('В каком году ты родился?');
let result = PRESENT_DAY - date;
alert('Тебе ' + result);

let lenght = 20;
let sum = lenght * 4;
console.log(sum);

// Homework (strong)

const PI = 3.14;
let rad = 8;
alert(PI * rad**2);

let distance = prompt('Напиши расстояние в км между двумя городами');
let time = prompt('За сколько часов ты хочешь добраться от одного города до другого?');
console.log(distance / time)

const USD = 28;
const EUR = 32;
let convertUSD = prompt('Введите кол-во долларов для конвертации');
let resultConv = USD / EUR;
alert(convertUSD * resultConv)
