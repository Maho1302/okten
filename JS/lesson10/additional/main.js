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

// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе
// так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

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

let arrayForFilters = usersWithAddress;
let usersDiv = document.getElementById('users');
let checkbox1 = document.getElementById('status_false');
let checkbox2 = document.getElementById('age_29');
let checkbox3 = document.getElementById('city_Kyiv');

for (let user of arrayForFilters) {
    let userDiv = document.createElement('div')
    userDiv.innerText = `id: ${user.id}, name: ${user.name}, age: ${user.age}, status: ${user.status}, address: city: ${user.address.city}, street: ${user.address.street}, number: ${user.address.number}`
    usersDiv.append(userDiv)
}

let filtersForForm = () => {
    let arrayForFilters = usersWithAddress
    if (checkbox1.checked) {
        prevDiv = usersDiv.querySelectorAll('div');
        for (let i = 0, length = prevDiv.length; i < length; i++) {
            prevDiv[i].parentNode.removeChild(prevDiv[i]);
        }
        arrayForFilters = arrayForFilters.filter(value => !value.status)
        for (let user of arrayForFilters) {
            let userDiv = document.createElement('div')
            userDiv.innerText = `id: ${user.id}, name: ${user.name}, age: ${user.age}, status: ${user.status}, address: city: ${user.address.city}, street: ${user.address.street}, number: ${user.address.number}`
            usersDiv.append(userDiv)
        }
        if (!checkbox1.checked) {
            prevDiv = usersDiv.querySelectorAll('div');
            for (let i = 0, llength = prevDiv.length; i < length; i++) {
                prevDiv[i].parentNode.removeChild(prevDiv[i]);
            }

            for (let user of arrayForFilters) {
                let userDiv = document.createElement('div')
                userDiv.innerText = `id: ${user.id}, name: ${user.name}, age: ${user.age}, status: ${user.status}, address: city: ${user.address.city}, street: ${user.address.street}, number: ${user.address.number}`
                usersDiv.append(userDiv)
            }
        }
    }
    if (checkbox2.checked) {
        prevDiv = usersDiv.querySelectorAll('div');
        for (let i = 0, length = prevDiv.length; i < length; i++) {
            prevDiv[i].parentNode.removeChild(prevDiv[i]);
        }
        arrayForFilters = arrayForFilters.filter(value => value.age > 28)
        for (let user of arrayForFilters) {
            let userDiv = document.createElement('div')
            userDiv.innerText = `id: ${user.id}, name: ${user.name}, age: ${user.age}, status: ${user.status}, address: city: ${user.address.city}, street: ${user.address.street}, number: ${user.address.number}`
            usersDiv.append(userDiv)
        }
    }
    if (!checkbox2.checked) {
        prevDiv = usersDiv.querySelectorAll('div');
        for (let i = 0, length = prevDiv.length; i < length; i++) {
            prevDiv[i].parentNode.removeChild(prevDiv[i]);
        }

        for (let user of arrayForFilters) {
            let userDiv = document.createElement('div')
            userDiv.innerText = `id: ${user.id}, name: ${user.name}, age: ${user.age}, status: ${user.status}, address: city: ${user.address.city}, street: ${user.address.street}, number: ${user.address.number}`
            usersDiv.append(userDiv)
        }
    }

    if (checkbox3.checked) {
        prevDiv = usersDiv.querySelectorAll('div');
        for (let i = 0, length = prevDiv.length; i < length; i++) {
            prevDiv[i].parentNode.removeChild(prevDiv[i]);
        }
        arrayForFilters = arrayForFilters.filter(value => value.address.city === 'Kyiv')
        for (let user of arrayForFilters) {
            let userDiv = document.createElement('div')
            userDiv.innerText = `id: ${user.id}, name: ${user.name}, age: ${user.age}, status: ${user.status}, address: city: ${user.address.city}, street: ${user.address.street}, number: ${user.address.number}`
            usersDiv.append(userDiv)
        }
    }
    if (!checkbox3.checked) {
        prevDiv = usersDiv.querySelectorAll('div');
        for (let i = 0, length = prevDiv.length; i < length; i++) {
            prevDiv[i].parentNode.removeChild(prevDiv[i]);
        }

        for (let user of arrayForFilters) {
            let userDiv = document.createElement('div')
            userDiv.innerText = `id: ${user.id}, name: ${user.name}, age: ${user.age}, status: ${user.status}, address: city: ${user.address.city}, street: ${user.address.street}, number: ${user.address.number}`
            usersDiv.append(userDiv)
        }
    }
};







// function filterByStatus() {
//     let checkBox = document.getElementById("status_false");
//     if (checkBox.checked == true){
//         let filter = usersWithAddress.filter (value => value.status === false);
//         for (const item of filter) {
//             let li = document.createElement('li');
//             li.innerText = `${item.id} ${item.name} ${item.age} ${item.status} ${item.address.city} ${item.address.street} ${item.address.number}`
//             status_result.append(li);
//         }
//     }
// }
//
// function filterByAge() {
//     let checkBox = document.getElementById("age_29");
//     if (checkBox.checked == true){
//         let filter = usersWithAddress.filter (value => value.age >=29);
//         for (const item of filter) {
//             let li = document.createElement('li');
//             li.innerText = `${item.id} ${item.name} ${item.age} ${item.status} ${item.address.city} ${item.address.street} ${item.address.number}`
//             age_result.append(li);
//         }
//     }
// }
//
// function filterByCity() {
//     let checkBox = document.getElementById("city_Kyiv");
//     if (checkBox.checked == true){
//         let filter = usersWithAddress.filter (value => value.address.city === 'Kyiv');
//         for (const item of filter) {
//             let li = document.createElement('li');
//             li.innerText = `${item.id} ${item.name} ${item.age} ${item.status} ${item.address.city} ${item.address.street} ${item.address.number}`
//             city_result.append(li);
//         }
//     }
// }

// let ul = document.createElement('ul');
// document.body.appendChild(ul);
// ul.id = 'result';
//
// let ul1 = document.createElement('ul');
// document.body.appendChild(ul1);
// ul1.id = 'result1';
//
// let ul2 = document.createElement('ul');
// document.body.appendChild(ul2);
// ul2.id = 'result2';



// let checkEle = document.querySelectorAll(".check");
// let resArr = usersWithAddress;
//
// function filterArr() {
//     checkEle.forEach((item, index) => {
//         if (item.checked && index == 0) {
//             resArr = resArr.filter(value => value.status === false);
//             for (const user of resArr) {
//                 let li = document.createElement('li');
//                 li.classList.add('status0');
//                 li.innerText = `${user.id} ${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.street} ${user.address.number}`
//                 result.append(li);
//             }
//         } else if (item.checked && index == 1) {
//             resArr = resArr.filter(value => value.age >= 29);
//             for (const user of resArr) {
//                 let li = document.createElement('li');
//                 li.classList.add('status1');
//                 li.innerText = `${user.id} ${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.street} ${user.address.number}`
//                 result1.append(li);
//             }
//         }
//     else
//         if (item.checked && index == 2) {
//             resArr = resArr.filter(value => value.address.city === 'Kyiv');
//             for (const item of resArr) {
//                 let li = document.createElement('li');
//                 li.classList.add('status2');
//                 li.innerText = `${item.id} ${item.name} ${item.age} ${item.status} ${item.address.city} ${item.address.street} ${item.address.number}`
//                 result2.append(li);
//             }
//         }
//     });
//     function removeDuplicates(ul) {
//         const map = {};
//         for (let i = 0; i < ul.children.length; i++) {
//             const child = ul.children[i];
//             if (child.innerHTML in map) child.remove();
//             else map[child.innerHTML] = true;
//         }
//     };
//     filter = document.getElementById('result');
//     removeDuplicates(filter);
//     console.log(filter);
//     function removeDuplicates(ul) {
//         const map = {};
//         for (let i = 0; i < ul.children.length; i++) {
//             const child = ul.children[i];
//             if (child.innerHTML in map) child.remove();
//             else map[child.innerHTML] = true;
//         }
//     };
//     filter = document.getElementById('result1');
//     removeDuplicates(filter);
//     console.log(filter);
//     function removeDuplicates(ul) {
//         const map = {};
//         for (let i = 0; i < ul.children.length; i++) {
//             const child = ul.children[i];
//             if (child.innerHTML in map) child.remove();
//             else map[child.innerHTML] = true;
//         }
//     };
//     filter = document.getElementById('result2');
//     removeDuplicates(filter);
//     console.log(filter);
// }





// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в
// боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему
// дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит
// первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на
// одном уровне

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

let form = document.createElement('form');
let butBack = document.createElement('button');
let butNext = document.createElement('button');
butBack.innerText = 'BACK';
butNext.innerText = 'NEXT';
document.body.append(form);
form.append(butBack);
form.append(butNext);

let arrayOfTags = [];
let allTags = document.getElementsByClassName('page');

let counter = 0;
let highligthTag = (array) => {
    for (let element of array) {
        arrayOfTags.push(element)
        highligthTag(element.children)
    }
}
highligthTag(allTags)
butNext.addEventListener('click', e => {
        e.preventDefault()
        if (counter < arrayOfTags.length - 1) {
            counter += 1
        } else counter = 0

        arrayOfTags[counter].style.background = 'red'
        if (counter !== 0) {
            arrayOfTags[counter - 1].style.background = 'none'
        } else {
            arrayOfTags[arrayOfTags.length - 1].style.background = 'none'
        }
    }
)
butBack.addEventListener('click', e => {
        e.preventDefault()
        if (counter > 0) {
            --counter
        } else counter = arrayOfTags.length - 1

        arrayOfTags[counter].style.background = 'red'
        if (counter !== arrayOfTags.length - 1) {
            arrayOfTags[counter + 1].style.background = 'none'
        } else {
            arrayOfTags[0].style.background = 'none'
        }
    }
)

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


