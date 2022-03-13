// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.addEventListener('click', function (e) {
//     console.log(e.target.tagName);
//     console.log(e.target.classList);
//     console.log(e.target.id);
//     console.log(e.target.offsetHeight);
//     console.log(e.target.offsetWidth);
// })

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.addEventListener('click', function (e) {
//
// })

// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе
// так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

function filterByStatus() {
    let checkBox = document.getElementById("status_false");
    if (checkBox.checked == true){
        let filter = usersWithAddress.filter (value => value.status === false);
        for (const item of filter) {
            let li = document.createElement('li');
            li.innerText = `${item.id} ${item.name} ${item.age} ${item.status} ${item.address.city} ${item.address.street} ${item.address.number}`
            status_result.append(li);
        }
    }
}

function filterByAge() {
    let checkBox = document.getElementById("age_29");
    if (checkBox.checked == true){
        let filter = usersWithAddress.filter (value => value.age >=29);
        for (const item of filter) {
            let li = document.createElement('li');
            li.innerText = `${item.id} ${item.name} ${item.age} ${item.status} ${item.address.city} ${item.address.street} ${item.address.number}`
            age_result.append(li);
        }
    }
}

function filterByCity() {
    let checkBox = document.getElementById("city_Kyiv");
    if (checkBox.checked == true){
        let filter = usersWithAddress.filter (value => value.address.city === 'Kyiv');
        for (const item of filter) {
            let li = document.createElement('li');
            li.innerText = `${item.id} ${item.name} ${item.age} ${item.status} ${item.address.city} ${item.address.street} ${item.address.number}`
            city_result.append(li);
        }
    }
}


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в
// боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему
// дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит
// первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на
// одном уровне



// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let i = 1;
// for(let li of carousel.querySelectorAll('li')) {
//     li.style.position = 'relative';
//     li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
//     i++;
// }
//
// let width = 1170; // ширина картинки
// let count = 1; // видимое количество изображений
//
// let list = carousel.querySelector('ul');
// let listElems = carousel.querySelectorAll('li');
//
// let position = 0; // положение ленты прокрутки
//
// carousel.querySelector('.prev').onclick = function() {
//     // сдвиг влево
//     position += width * count;
//     // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
//     position = Math.min(position, 0)
//     list.style.marginLeft = position + 'px';
// };
//
// carousel.querySelector('.next').onclick = function() {
//     // сдвиг вправо
//     position -= width * count;
//     // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
//     position = Math.max(position, -width * (listElems.length - count));
//     list.style.marginLeft = position + 'px';
// };



// Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// let p=document.createElement('p')
// document.body.append(p)
// p.innerText='Как то так'
// p.onmouseup=function (){
//     this.style.fontWeight='bold'
// }

// document.onselectionchange = function() {
//     let selection = document.getSelection();
//     selection.onmouseup=function (){
//     this.style.fontWeight='bold'
// }

// `let selection = window.getSelection();
// let text = selection.toString();
// let parent = $(selection.focusNode.parentElement);
// let oldHtml = parent.html();
// let newHtml = oldHtml.replace(text, "<span class='highlight'>"+text+"</span>");
// parent.html( newHtml );`
// function boldText(){
//     let target = document.getElementById("all");
//     if( target.style.fontWeight == "bold" ) {
//         target.style.fontWeight = "normal";
//     } else {
//         target.style.fontWeight = "bold";
//     }
// }
