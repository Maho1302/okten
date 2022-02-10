// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let minOfThree = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < c && b < a) {
        console.log(b);
    } else {
        console.log(c);
    }
};
minOfThree(1, 2, 3);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxOfThree = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > c && b > a) {
        console.log(b);
    } else {
        console.log(c);
    }
};
maxOfThree(1, 2, 3);

// - створити функцію яка повертає найбільше число з масиву

let someArr = [5, 31, 13, 44, 88, 9, 3, 100];
let arrayMaxNum = (array) => {
    let max = array[0];
    for (const key of array) {
        if(key > max){
            max = key;
        }
    }
    return max;
}
console.log(arrayMaxNum(someArr));

// - створити функцію яка повертає найменьше число з масиву

let arrayMinNum = (array) => {
    let min = array[0];
    for (const key of array) {
        if(key < min){
            min = key;
        }
    }
    return min;
}
console.log(arrayMinNum(someArr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arr = [4, 4, 5, 2, 15];
let sumArr = (array) => {
    let sum = 0;
    for (const key of array) {
        sum += key;
    }
    return sum;
}
console.log(sumArr(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let average = (array) => {
    let sum = 0;
    for (const key of array) {
        sum += key;
    }
    return sum/array.length;
}
console.log(average(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let minMax = (...arg) => {
    let min = arg[0];
    let max = arg[0];
    for (let key of arg) {
        if (key > max) {
            max = key;
        }
        if (key < min) {
            min = key;
        }
    }
    console.log(max);
    return min;
}
console.log('Найменше число: ' + minMax(8, 13, 88, 9, 3));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let arrRandom = (length) => {
    let arrayEmpty = [];
    for (let i = 0; i < length; i++){
        arrayEmpty.push(Math.floor(Math.random()*100));
    }
    return arrayEmpty
};
console.log(arrRandom(100));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
//     limit - аргумент, який характеризує кінцеве значення діапазону.

let arrRandomRange = (length,limit) => {
    let emptyArray = [];
    for (let i = 0; i < length; i++) {
        emptyArray.push(Math.round(Math.random() * limit));
    }
    return emptyArray;
}
console.log(arrRandomRange(100,200));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let reverse = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
        newArr[j] = arr[i];
    }
    return newArr;
}
console.log(reverse(arr));