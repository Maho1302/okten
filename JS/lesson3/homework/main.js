// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let num = [5, 8, 10, 17, 89];
let line = ['here', 'have', 'some', 'short', 'lines'];
let everything = ['line', 'again', 13, true, false];

console.log(num);
console.log(line);
console.log(everything);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
//     Вивести в консоль

let arr = [];
arr[0] = 'some';
arr[1] = 'new';
arr[2] = 'in';
arr [3] = 'this';
arr[4] = 'array';

console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write('<div>some text</div>');
};

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>some text ${i}</div>`);
};

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

for (let i = 0; i < 20; i++) {
    document.write('<h1>some text</h1>');
};

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

for (let i = 0; i < 20; i++) {
    document.write(`<h1>some text ${i}</h1>`);
};

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arrForLoop = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
for (i = 0; i < arrForLoop.length; i++) {
    console.log(arrForLoop[i])
};

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arrString = ['some', 'element', 'and', 'a', 'little', 'more', 'words', 'for', 'this', 'array'];
for (i = 0; i < arrString.length; i++) {
    console.log(arrString[i]);
};

// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arrMix = [ true, false, 0, null, undefined, 'string', 7, 8, 9, 10];
for (i = 0; i < arrMix.length; i++) {
    console.log(arrMix[i]);
};

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
//     За допомогою if та typeof вивести тільки булеві елементи

let arrNext = [true, false, 0, 'string', 12, true, 4, false, '9', 'last'];

for (i = 0; i < arrNext.length; i++) {
    if (typeof arrNext[i] === 'boolean') {
    console.log(arrNext[i]);
};
};

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
//     За допомогою if та typeof вивести тільки числові елементи

for (i = 0; i < arrNext.length; i++) {
    if (typeof arrNext[i] === 'number') {
    console.log(arrNext[i]);
};
};

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
//     За допомогою if та typeof вивести тільки рядкові елементи

for (i = 0; i < arrNext.length; i++) {
    if (typeof arrNext[i] === 'string') {
    console.log(arrNext[i]);
};
};

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//     Вивести в консоль всі його елементи в циклі.

let arrAnother = [];

arrAnother[0] = 'start';
arrAnother[1] = true;
arrAnother[2] = null;
arrAnother[3] = 4;
arrAnother[4] = 777;
arrAnother[5] = false;
arrAnother[6] = undefined;
arrAnother[7] = 'au';
arrAnother[8] = 13;
arrAnother[9] = 'end';

for (let i = 0; i < arrAnother.length; i++) {
    console.log(arrAnother[i]);
};

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log('Поточний номер кроку : ' + i + ' ');
    document.write('Поточний номер кроку :  ' + i + ' ' + '<br>');
};

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log('Поточний номер кроку : ' + i + ' ');
    document.write('Поточний номер кроку :  ' + i + ' ' + '<br>');
};

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i=i+2) {
    console.log('Поточний номер кроку : ' + i + ' ');
    document.write('Поточний номер кроку :  ' + i + ' ' + '<br>');
};

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log('Поточний номер кроку : ' + i + ' ');
        document.write('Поточний номер кроку :  ' + i + ' ' + '<br>');
    };
};

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 !=0) {
        console.log('Поточний номер кроку : ' + i + ' ');
        document.write('Поточний номер кроку :  ' + i + ' ' + '<br>');
    };
};