// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

let addClass = document.getElementById('main_header')
addClass.classList.add('muse')

// b) робить шириниу елементу ul 400px

let ul = document.getElementsByTagName('ul')
console.log(ul)
ul[0].style.width = '400px'

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let li = document.getElementsByClassName('linkList')
for (const child of li) {
    child.style.width = '50%'
}

// d) отримує текст який зберігається в елементі з класом listElement2

let listElement2 = document.getElementsByClassName('listElement2')
console.log(listElement2)

// e) отримує всі елементи li та змінює ім колір фону на сірий

let liAll = document.getElementsByTagName('li')
console.log(liAll)
for (const child of liAll) {
    child.style.backgroundColor = 'grey'
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let aAll = document.getElementsByTagName('a')
console.log(aAll)
for (let child of aAll) {
    child.classList.add('anchor')
    console.log(child)
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів

for (let child of aAll) {
    console.log(child);
    if (child.innerText === 'link3') {
        child.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (let child of aAll) {
    console.log(child);
    let newClass = child.innerText
    child.classList.add(`element_${newClass}`)
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let allSubHeader = document.getElementsByClassName('sub-header')
console.log(allSubHeader)
// allSubHeader[0].style.color = prompt('Enter color:')
// allSubHeader[1].style.color = prompt('Enter color:')

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()

// for (const child of allSubHeader) {
//     console.log(child)
//     if (child.innerText === 'content 2 segment') {
//         child.style.color = prompt('Enter color:')
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let content_1 = document.getElementsByClassName('content_1')
// console.log(content_1[0].innerText)
// content_1[0].innerText = prompt('Enter some new text:')

// l) отримати елементи p та змінити їм padding на 20px

let p = document.getElementsByTagName('p')
for (const child of p) {
    child.style.padding = '20px'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let data = document.getElementsByClassName('text2')
console.log(data)
data[0].innerText = 'feb-2022'