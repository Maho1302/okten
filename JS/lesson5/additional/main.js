// - Дано натуральное число n. Выведите все числа от 1 до n.

let getNum = (num) => {
    for (let i = 1; i <= num; i++)
        console.log(i)
}
console.log(getNum(8));

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
//     если A < B, или в порядке убывания в противном случае.

let getAB = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++)
        console.log(i)
    } else if (a > b) {
        for (let i = a; i >= b; i--)
            console.log(i)
    };
}
console.log(getAB(10, 5));

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let foo = (array, num) => {
    let newNum = array[num];
    array[num] = array[num+1];
    array[num+1] = newNum;
    console.log(array);
}
console.log(foo([9,8,0,4], 2));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]

let zeroMover = (arr) => {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if( arr[i] == 0){
            arr.splice(i,1);
            count++;
            i--;
        }
    }
    for( let i = 0; i < count; i++){
        arr.push(0);
    }
    return arr;
}
console.log(zeroMover([0,0,1,0]));
