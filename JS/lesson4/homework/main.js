// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaRectangle(a, b) {
    let result = a * b;
    return result;
}
console.log(areaRectangle(5, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaCircle(r) {
    let result = 3.14 * r * 2;
    return result;
}
console.log(areaCircle(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaCylinder(r, h) {
    let result = 2 * 3.14 * r * h;
    return result;
}
console.log(areaCylinder(5,10));

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [ 5, 4, 9, 'string', 13];
function bringArray (array) {
    for (let i = 0; i < arr.length; i++) {
       console.log(arr[i]);
    }
}
bringArray(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph (text) {
    document.write(`<p>${text}</p>`)
    };
createParagraph('Тут типу багато тексту');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createUl(item) {
    document.write(`<ul>`)
    document.write(`<li>${item}</li>`)
    document.write(`<li>${item}</li>`)
    document.write(`<li>${item}</li>`)
    document.write(`</ul>`)
}
createUl('The same');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createUlList(item, quantity) {
    document.write(`<ul>`)
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`)
}
createUlList('The same', 8);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let someArr = [13, false, 'string', 8, true];
function list (array){
    document.write(`<ul>`)
        for (let i = 0; i < array.length; i++) {
            document.write(`<li>${array[i]}</li>`);
        }
    document.write(`</ul>`)
}
list(someArr);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , ' +
// 'та виводить їх в документ. Для кожного об'єкту окремий блок.

let somePersons = [{id: 0, name: 'Akakii', age: 25}, {id: 1, name: 'Dazdraperma', age: 95}, {id: 2, name: 'Alevtina', age: 92}, {id: 3, name: 'Santa', age: 0.7}];
function objArray(array) {
    for (const some of array) {
        document.write(`<div>${some.id}.${some.name} - ${some.age}</div>`);
    }
}
objArray(somePersons);