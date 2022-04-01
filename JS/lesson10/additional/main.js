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

// let popupDiv = document.createElement('div');
// document.body.appendChild(popupDiv);
// popupDiv.classList.add('popup');
// popupDiv.id = 'mypopup';
//
// let contentDiv = document.createElement('div');
// popupDiv.appendChild(contentDiv);
// contentDiv.classList.add('popup-content');
//
// let bodyDiv = document.createElement('div');
// contentDiv.appendChild(bodyDiv);
// bodyDiv.classList.add('popup-body');
//
// let popup = document.getElementById('mypopup');
//
// document.addEventListener('click', function (e) {
// popup.style.display = "block";
// bodyDiv.innerHTML = `<h4>Tag name: ${e.target.tagName}</h4><h3>Class: ${e.target.classList}</h3><h3>Id: ${e.target.id}</h3><h3>Height: ${e.target.offsetHeight}</h3><h3>Width: ${e.target.offsetWidth}</h3>`;
// });
//
// window.onclick = function (e) {
//     if (e.target == popup) {
//         popup.style.display='none';
//     }
// }

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


// // function watchAll(startElement) {
// //
// //     let children = startElement.children;
// //     for (const child of children) {
// //         if (child != 0) {
// //             console.log(child.tagName);
// //         }
// //         watchAll(child);
// //     }
// // }
// //
// // console.log(watchAll(document.body));
//
// let allTags = [];
// function watchAll(startElement) {
//
//     let children = startElement.children;
//     for (const child of children) {
//             allTags.push(child.tagName);
//         watchAll(child);
//     }
// }
//
// watchAll(document.body);
// console.log(allTags);
//
// // function makeIterator(allTags){
// //     var nextIndex = 0;
// //     allTags;
// //     return {
// //         next: function(){
// //             return nextIndex < allTags.length ?
// //                 {value: allTags[nextIndex++], done: false} :
// //                 {done: true};
// //         }
// //     }
// // }
//
//
// // allTags[Symbol.iterator] = function() {
// //
// //     let current = allTags[0];
// //
// //     // метод должен вернуть объект с методом next()
// //     return {
// //         next() {
// //             if (current <= allTags.length-1) {
// //                 return {
// //                     done: false,
// //                     value: current++
// //                 };
// //             } else {
// //                 return {
// //                     done: true
// //                 };
// //             }
// //         }
// //
// //     }
// // };
//
// // function makeIterator(array){
// //     var nextIndex = 0;
// //
// //     return {
// //         next: function(){
// //             return nextIndex < array.length ?
// //                 {value: array[nextIndex++], done: false} :
// //                 {done: true};
// //         }
// //     }
// // };
//
//
//
// let buttonGo = document.createElement('button');
// buttonGo.innerText = 'Вперед';
// document.body.appendChild(buttonGo);
//
// // for (let i = 0; i < allTags.length; i++) {
// //     buttonGo.onclick = function () {
// //         console.log(allTags.i);;
// //     };
// // }
//
// // buttonGo.onclick = function () {
// // let i = 0;
// //     i += 1;
// //         console.log(allTags[i]);
// //     };
//
// // while (confirm(){})
//
// // buttonGo.onclick = function () {
// //     for (let i = 0; i < allTags.length; i++) {
// //         let divForTag = document.createElement('div');
// //         divForTag.innerHTML = allTags[i];
// //         document.body.appendChild(divForTag);
// //     }
// // };
//
// // buttonGo.onclick = function () {
// //     while(confirm ('Які елементи є на сторінці. Виводимо по одному:') {
// //         for (let i = 0; i < allTags.length; i++) {
// //             console.log(allTags[i]);
// //     });
// // };
//
// // buttonGo.onclick = function () {
// //     for (let i = 0; i < allTags.length; i++) {
// //         alert(allTags[i]);
// //     }
// // };
//
//
// // for (let value of allTags) {
// //     let nextIndex = 0;
// //     buttonGo.onclick = function () {
// //         console.log(allTags.value);;
// //     };
// // };
//
//
// // for (const tag of allTags) {
// //
// // }
//

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}


// Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// let p=document.createElement('p')
// document.body.append(p)
// p.innerText='Как то так'
// p.onmouseup=function (){
//     this.style.fontWeight='bold'
// }
//
// document.onselectionchange = function() {
//     let selection = document.getSelection();
//     selection.onmouseup=function (){
//     this.style.fontWeight='bold'
// }
//
// let madeBoldText = function() {
//     let highlight = window.getSelection().toString();
//     let span = '<span class="bold">'+ `${highlight}` +'</span>';
// };
//
//
// let selection = window.getSelection();
// let text = selection.toString();
// let parent = $(selection.focusNode.parentElement);
// let oldHtml = parent.html();
// let newHtml = oldHtml.replace(text, "<span class='highlight'>"+text+"</span>");
// parent.html( newHtml );
// function boldText(){
//     let target = document.getElementById("all");
//     if( target.style.fontWeight == "bold" ) {
//         target.style.fontWeight = "normal";
//     } else {
//         target.style.fontWeight = "bold";
//     }
// }
//
// let range = "";
//
// function getSelected() {
//     let selection = window.getSelection()
//     rande = selection.getRandeAt(0);
// }
//
// function myFunction() {
//     // document.getElementById("demo").style.fontWeight = "900";
//     var highlight = window.getSelection();
//     this.style.fontWeight='bold'
// }
//
// p.onmouseup = function () {
//     this.style.fontWeight='bold'
// }
// $(document).ready(function() {
//     $('#jBold').click(function() {
//         document.execCommand('bold');
//     });
// });
//
// let p=document.createElement('p')
// document.body.append(p)
// p.innerText='Как то так'
// p.onmouseup=function (){
//     this.style.fontWeight='bold'
// }
//
// function getSelectionText() {
//     this.document.selection.str.bold;
// }
//
// document.write(worldString.bold());
//
// function getSelected() {
//     let selectedText = window.getSelection().bold();
//     // let boldText = selectedText.bold();
// };
//
// let str = 'Hello';
//
// document.write(str.bold());
//
// function changeSelected(){
//     if (window.getSelection() == '') {
//         return false;
//     }
//     var range = window.getSelection().getRangeAt(0);
//     var selectionContents = range.extractContents();
//     var span = document.createElement("span");
//     span.appendChild(selectionContents);
//     span.setAttribute("class", "selected");
//     span.style.backgroundColor = "yellow";
//     span.style.color = "green";
//     range.insertNode(span);
// }
//
// function getSelected() {
//     let selObj = window.getSelection();
//     let selectedText = selObj.toString();
//     console.log(selObj);
//     let last = selectedText.bold();
// }
//
// function foo() {
//     var selObj = window.getSelection();
//     document.write(selObj);
//     var selRange = selObj.getRangeAt(0);
//     // вернёт диапазон Range
//     document.write(selRange);
// }
//
// function getSelectionText() {
//     var txt = '';
//     if (txt = window.getSelection) { // Не IE, используем метод getSelection
//         txt = window.getSelection().toString();
//     } else { // IE, используем объект selection
//         txt = document.selection.createRange().text;
//     }
//     return txt;
// }
//
//
// iframeNode.execCommand("bold");
//
// let tag = select.focusNode.parentNode.execCommand("bold");
//
// function makeBold(){
//     var highlight = window.getSelection();
//
//     var span = '<span style="font-weight:bold;">' + highlight + '</span>';
//
//     document.body.innerHTML = document.body.innerHTML.replace(new RegExp(highlight , 'g'), span);
// }
//
// function makeBold(){
//
//     var span = '<span style="font-weight:bold;">' + highlight + '</span>';
//
//     var selected, range;
//     if (window.getSelection) {
//         selected= window.getSelection();
//         if (selected.rangeCount) {
//             range = selected.getRangeAt(0);
//             range.deleteContents();
//             range.insertNode(document.createTextNode(span));
//         }
//     } else if (document.selection && document.selection.createRange) {
//         range = document.selection.createRange();
//         range.text = span;
//     }
//
// }
//
// function getSelectionHtml() {
//     var sel, range, node;
//     if (window.getSelection) {
//         sel = window.getSelection();
//         if (sel.getRangeAt && sel.rangeCount) {
//             range = window.getSelection().getRangeAt(0);
//
//             var html = '<span style="font-weight:bold;">' + range + '</span>'
//             range.deleteContents();
//
//             var el = document.createElement("div");
//             el.innerHTML = html;
//             var frag = document.createDocumentFragment(), node, lastNode;
//             while ( (node = el.firstChild) ) {
//                 lastNode = frag.appendChild(node);
//             }
//             range.insertNode(frag);
//         }
//     } else if (document.selection && document.selection.createRange) {
//         range = document.selection.createRange();
//         range.collapse(false);
//         range.pasteHTML(html);
//     }
//
// }
//
// let bold : boolean = documenteditor.selection.characterFormat.bold;
// //Sets bold formatting for selected text.
// documenteditor.selection.characterFormat.bold = true;
//
// documenteditor.editor.toggleBold();


