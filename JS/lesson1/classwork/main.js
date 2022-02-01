// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
// Скласти результат цих чисел в змінній result.

let arr = [];
for (let i=0, t=10; i<t; i++) {
    arr.push(Math.floor(Math.random() * t))
}
document.write(arr);

function arraySum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return(sum)
}

let result = arraySum(arr);
console.log(result);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book1 = {
    name: 'The Master and Margarita',
    pages: 427,
    genre: 'fantasy, farce, supernatural, romance, satire,'
};

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book2 = {
    name: 'Monday Begins on Saturday',
    pages: 312,
    genre: 'science fiction',
    writers: 'Arkady and Boris Strugatsky'
}

// 4. Створити масив об'єктів book з наступними полями  - назва,
// кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let books = {
    book3  : {
        name: 'The Master and Margarita',
        pages: 427,
        genre: 'fantasy, farce, supernatural, romance, satire,',
        writer: 'Mikhail Bulgakov'
    },
    book4 : {
        name: 'Monday Begins on Saturday',
        pages: 312,
        genre: 'science fiction',
        writers: 'Arkady and Boris Strugatsky'
    }
}

console.log(books.book3);
console.log(books.book4);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

    let height = 23;
    let width = 10;
    let s = height * width;

   console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let h = 10;
let d = 4;
let v= 3.14*Math.pow((d/2), 2)*h;
let vnew = v.toFixed(1);

console.log(vnew);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow
// (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;
let k = Math.sqrt( Math.pow(3, 2) + Math.pow(4, 2) );

console.log(k);