// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи
// - складає або конкатенує їх між собою.

function getTogether() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
};
console.log(getTogether(6, 'fhfh'));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let arr1 = [1,2,3,4];
let arr2 = [2,3,4,5];

function sumArrays(arr1, arr2) {
    let arr3 = [];
    for (i = 0, j = 0; i < arr1.length, j <arr2.length; i++, j++) {
        arr3.push(arr1[i] + arr2[j]);
    }
    return arr3;
};
console.log(sumArrays(arr1,arr2));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function onlyKeys(array) {
    array.forEach(function (element) {
        for (let key in element) {
            console.log(key);
        }
        return;
    });
}
console.log(onlyKeys(arr));






