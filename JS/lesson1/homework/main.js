// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123,
//     3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let d = 'hello';
let e = 'owu';
let f = 'com';
let g = 'ua';
let h = 1;
let i = 10;
let j = -999;
let k = 123;
let l = 3.14;
let m = 2.7;
let n = 16;
let o = true;
let p = false;

console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log(m);
console.log(n);
console.log(o);
console.log(p);

alert(d);
alert(e);
alert(f);
alert(g);
alert(h);
alert(i);
alert(j);
alert(k);
alert(l);
alert(m);
alert(n);
alert(o);
alert(p);

document.write(d);
document.write(e);
document.write(f);
document.write(g);
document.write(h);
document.write(i);
document.write(j);
document.write(k);
document.write(l);
document.write(m);
document.write(n);
document.write(o);
document.write(p);

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

d = 'It is';
e = 'some';
f = 'new';
g = 'line';
h = 7;
i = 8;
j = -13;
k = 777;
l = 55.8;
m = 43.4;
n = 48;
o = false;
p= true;

console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log(m);
console.log(n);
console.log(o);
console.log(p);

alert(d);
alert(e);
alert(f);
alert(g);
alert(h);
alert(i);
alert(j);
alert(k);
alert(l);
alert(m);
alert(n);
alert(o);
alert(p);

document.write(d);
document.write(e);
document.write(f);
document.write(g);
document.write(h);
document.write(i);
document.write(j);
document.write(k);
document.write(l);
document.write(m);
document.write(n);
document.write(o);
document.write(p);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
//     З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = 'Maria';
let middleName = 'Serhiivna';
let lastName = 'Semchenko';

let person = lastName + ' ' + firstName + ' ' + middleName;

console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let name = prompt("Ваше ім'я");
let fatherName = prompt('По-батькові');
let age = prompt('Скільки вам років');

alert(`Вітаю ${name} ${fatherName} тобі ${age} років!`)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

console.log(5 < 6);
console.log(5 == 6);
console.log(5 === 6);
console.log(5 >= 6);
console.log(10 == 10);
console.log(10 === 10);
console.log(10 > 10);
console.log(10 < 10);
console.log(10 != 10);
console.log(123 === '123');
console.log(123 == '123');

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

let str = "20";
let z = 5;

// 205 строка, бо все, що стоїть за строкою зі знаком + перетворюється в строку (конкатенація)
document.write(str + z + "<br/>");

// 15, бо строка перетворилася на число
document.write(str - z + "<br/>");

// 40, бо строка перетворилася на число
document.write(str * "2" + "<br/>");

// 10, бо строка перетворилася на число
document.write(str / 2 + "<br/>");

