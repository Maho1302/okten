// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// const firstNum = prompt('Введіть перше число:');
// const secondNum = prompt('Введіть друге число:');
//
// if (firstNum < secondNum) {
//     console.log(`Це число більше: ${secondNum}`);
// } else if (firstNum > secondNum) {
//     console.log(`Це число більше: ${firstNum}`);
// } else {
//     console.log('Числа однакові!')
// };


// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let flatNum = prompt('Введіть номер квартири:');
//
// if (flatNum <= 0) {
//     console.log("Такої квартири немає в цьому домі");
// } else if (flatNum <=20) {
//     console.log("Квартира знаходиться у першому під'їзді");
// } else if (flatNum <=48) {
//     console.log("Квартира знаходиться у другому під'їзді");
// } else if (flatNum <=90) {
//     console.log("Квартира знаходиться у третьому під'їзді");
// } else {
//     console.log("Такої квартири немає в цьому домі");
// };

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести
// повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = prompt('Введіть число:');
//
// if (number == 10) {
//     console.log('ВІРНО');
// } else {
//     console.log('НЕВІРНО');
// };

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

// let x;
//
// // x = 3;
// // x = 'cshos';
// // x = false;
// // x = { 1: 1, 2: 2, 3: 3};
// // x = [1, 2 ,3];
// // x = undefined;
//
//  if (typeof x === 'number') {
//      console.log(1);
//  } else if (typeof  x === 'string') {
//      console.log(2);
//  } else if (typeof x === "boolean") {
//      console.log(3);
//  } else if (typeof x === "object" || typeof x === "arrey") {
//      console.log(4);
//  } else {
//      console.log(5);
//  };

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення
// що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temperature = prompt('Введить температуру:');
//
// if (temperature <=9) {
//     console.log('Сидимо вдома і вчимося ОНЛАЙН!');
// }  else if (temperature <= 22) {
//     console.log('Ми йдемо ВЧИТИСЯ!');
// } else {
//     console.log('Сидимо вдома і вчимося ОНЛАЙН!');
// };

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від
//     введеного числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді
//     вивести Повідомлення - що число не вірне ... .

let first = 'Авто';
let second = 'Мото';
let third = 'Телефон';
let fourth = 'Літак';
let fifth = 'Самокат';
let guess = prompt('Введіть ваше число:');

switch (guess) {
    case '1' : console.log(`Ви виграли ${first}!`);
    break;
    case '2' : console.log(`Ви виграли ${second}!`);
    break;
    case '3' : console.log(`Ви виграли ${third}!`);
    break;
    case '4' : console.log(`Ви виграли ${fourth}!`);
    break;
    case '5' : console.log(`Ви виграли ${fifth}!`);
    break;
    default : console.log('Число не вірне!');
    break;
};