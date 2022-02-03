// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку
// якщо кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив,
//     в якому  3 і більше елементи. Інакше слід вивести на екран повідомлення про те, що це маленький масив,
//     в якому менше 3-х елементів.

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

if (friends.length === 1) {
    console.log(`Це маленький масив. В ньому ${friends.length} елемент.`);
} else if (friends.length === 2) {
    console.log(`Це маленький масив. В ньому ${friends.length} елементи.`);
} else if (friends.length === 3) {
    console.log(`Це великий масив. В ньому ${friends.length} елементи.`);
} else if (friends.length === 4) {
    console.log(`Це великий масив. В ньому ${friends.length} елементи.`);
} else if (friends.length === 5) {
    console.log(`Це великий масив. В ньому ${friends.length} елементів.`);
} else if (friends.length > 6) {
    console.log(`Це великий масив. В ньому ${friends.length} елементів.`);
};

// - Перепишіть конструкцію if з використанням умовного оператора '?':
//
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

let a = 0;
let b = 2;

let result = (a + b <4) ? 'Мало' : 'Багато';
console.log(result);




