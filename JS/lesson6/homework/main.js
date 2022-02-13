// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let helloLength = 'hello world';
console.log(helloLength.length);

let loremLength = 'lorem ipsum';
console.log(loremLength.length);

let jsLength = 'javascript is cool';
console.log(jsLength.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let helloUpper = helloLength.toUpperCase();
console.log(helloUpper);

let loremUpper = loremLength.toUpperCase();
console.log(loremUpper);

let jsUpper = jsLength.toUpperCase();
console.log(jsUpper);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let helloLower = helloUpper.toLowerCase();
console.log(helloLower);

let loremLower = loremUpper.toLowerCase();
console.log(loremLower);

let jsLower = jsUpper.toLowerCase();
console.log(jsLower);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirtyString = ' dirty string   ';
let cleanString = dirtyString.trim();
console.log(cleanString);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let str = 'Каждый охотник желает знать';
let split = str.split(' ');
console.log(split);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = str.substring(0,6);
console.log(delete_characters);


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//     При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str2 = "HTML JavaScript PHP";

let insert_dash = (string) => {
    let replaceAndUpper = string.replaceAll(' ', '-').toUpperCase();
    return replaceAndUpper;
    };
console.log(insert_dash(str2));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let firstBig = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1)
};
console.log(firstBig('something here'));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
};
console.log(capitalize('can not think of string'));