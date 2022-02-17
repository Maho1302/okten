// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

let arr = [];

for (let i = 2, j = 0; i <= 100; i += 2, j++) {
    arr[j] = i;
}

console.log(arr);

// b. заповнити його 50 непарними числами за допомоги циклу.

let newArr = [];

for (let i = 0; i <= 100; i++) {
    if (i % 2) {
        newArr.push(i);
    }
}

console.log(newArr);

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

let arrRandom = [];
for (let i=0, t=20; i<t; i++) {
    arrRandom.push(Math.floor(Math.random() * t))
};

console.log(arrRandom);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let arrRandomInRange = [];

for (let i=0, t=20; i<t; i++) {
   arrRandomInRange.push(Math.floor(Math.random() * (732 - 8 + 1) + 8));
};

console.log(arrRandomInRange);

// 2. Вивести за допомогою console.log кожен третій елемен

let someArr = [0, 4, 3, 8, 10, 4, 9, 10, 5, 11, 15, 6];

// function everyNth(arr, n) {
//     let result = [];
//     for (let i=2; i<arr.length; i+=n) result.push(arr[i]);
//     return result;
// };
//
// console.log(everyNth(someArr, 3));

for (let i = 2; i < arr.length; i += 3) {
    console.log(someArr[i]);
};

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 2; i < someArr.length; i += 3) {
    if ((someArr[i] % 2) === 0) {
        console.log(someArr[i]);
    }
};

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

function everyNth(arr, n) {
    let result = [];
    for (let i=2; i<arr.length; i+=n) {
        if ((someArr[i] % 2) === 0) {
            result.push(arr[i]);
        }
    }
    return result;
};
console.log(everyNth(someArr, 3));

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let arr1 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];

for (let i = 0; i < arr1.length; i++) {
    if(arr1[i + 1] % 2 === 0){
        console.log(arr1[i]);
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let cheks = [100,250,50,168,120,345,188];

function  average(arr) {
    if(arr.length === 0)
    return 0;
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(average(cheks));

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let array = [];
for (let i=0, t=10; i<t; i++) {
    array.push(Math.floor(Math.random() * t))
};
console.log(array);

let arrMultiplied = [];

for (let i = 0; i < array.length; ++i) {
    arrMultiplied[i] = array[i]*5;
};

console.log(arrMultiplied);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
//     і якщо елемент є числом - додати його в інший масив.

let onlyNum = [];
let arrMix = ['string', 23, true, 13, 'kos', 11, 54, false];

for (let i = 0; i < arrMix.length; i++) {
    if (typeof arrMix[i] === "number") {
        onlyNum.push(arrMix[i]);
    }
}
console.log(onlyNum);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

let usersWithCities = [];

for (let user of usersWithId) {
    for (let city of citiesWithId) {
        if (user.id === city.user_id) {
            user.address = city;
        }
    }
}
usersWithCities = usersWithId;
console.log(usersWithCities);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let arrRan = [];
for (let i=0, t=10; i<t; i++) {
    arrRan.push(Math.floor(Math.random() * t))
    if ((arrRan[i] % 2) === 0) {
        console.log(arrRan[i]);
    }
};
console.log(arrRan);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let arrForCopy = [];
for (let i=0, t=10; i<t; i++) {
    arrForCopy.push(Math.floor(Math.random() * t))
};
console.log(arrForCopy);

let copiedArr = [];
for (let i = 0; i < arrForCopy.length; i++) copiedArr[i] = arrForCopy[i]
console.log(copiedArr);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arrABC = [ 'a', 'b', 'c'];

let str = '';

for (let i = 0; i < arrABC.length; i++) {
    str += arrABC[i];
}

console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let str2 = '';
let i = 0;
while (i < arrABC.length) {
    str2 += arrABC[i];
    i++;
}
console.log(str2);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let str3 = '';
for (const j of arrABC) {
    str3 += j;
}
console.log(str3);

