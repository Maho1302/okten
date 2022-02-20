// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let arrClassesNames = [];
function allClasses(startElement) {
    // console.log(startElement.className);
    let children = startElement.children;
    for (const child of children) {
        if (child.classList != 0) {
            arrClassesNames.push(child.className);
        }
        allClasses(child);
    }
}

console.log(allClasses(document.body));
console.log(arrClassesNames);

let str = arrClassesNames.join();
// console.log(str);
let str2 = (str.replaceAll(',', ' '));
// console.log(str2);

function removeDuplicate(str) {
    str = str.split(' ');
    let str3 = [];
    for(let i = 0; i < str.length ; i++) {
        if(str3.indexOf(str[i]) == -1) str3.push(str[i]);
    }
    return str3 = str3.join(' ');
}
removeDuplicate(str2)

let arr3 = removeDuplicate(str2).split(' ');
console.log(arr3);

























//не зважайте
// function allClasses(startElement) {
//     // console.log(startElement.className);
//     let children = startElement.children;
//     for (const child of children) {
//         if (child.classList != 0) {
//             arrClassesNames.push(child.classList);
//             // console.log(child.classList);
//         }
//         allClasses(child);
//     }
// }
// console.log(allClasses(document.body));
// console.log(arrClassesNames);
