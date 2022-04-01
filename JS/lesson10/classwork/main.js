// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
// інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let divOne = document.createElement('div');
divOne.innerText = 'Перша форма';
document.body.appendChild(divOne);
let formOne = document.createElement('form');
formOne.setAttribute('name', 'formOne');
divOne.appendChild(formOne);
let inputOne = document.createElement('input');
inputOne.setAttribute('name', 'inputOne');
let inputTwo = document.createElement('input');
inputTwo.setAttribute('name', 'inputTwo');
formOne.append(inputOne,inputTwo);

let divTwo = document.createElement('div');
divTwo.innerText = 'Друга форма';
document.body.appendChild(divTwo);
let formTwo = document.createElement('form');
formTwo.setAttribute('name', 'formTwo');
divTwo.appendChild(formTwo);
let inputThree = document.createElement('input');
inputThree.setAttribute('name', 'inputThree');
let inputFour = document.createElement('input');
inputFour.setAttribute('name', 'inputFour');
formTwo.append(inputThree,inputFour);

let button = document.createElement('button');
button.innerText = 'Усьо в консоль';
document.body.appendChild(button);

button.addEventListener('click', function (){
    console.log(document.forms.form.inputOne.value);
    console.log(document.forms.form.inputTwo.value);
    console.log(document.forms.form.inputThree.value);
    console.log(document.forms.form.inputFour.value);
})

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let hr = document.createElement('hr');
let input1 = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = 'Створи таблицю';
document.body.append(hr, input1, input2, input3, btn);

btn.addEventListener('click', function () {
    let tr = input1.value;
    let td = input2.value;
    let text = input3.value;

    function generationTable(tr, td, inner) {
        let table = document.createElement('table');
        let divTable = document.createElement('div');

        table.style.border = '1px solid black';
        divTable.appendChild(table);
        document.body.appendChild(divTable);

        for (let i = 0; i < tr; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < td; j++) {
                let td = document.createElement('td');
                td.style.border = '1px solid black';
                td.innerText = `${inner}`;
                table.appendChild(tr);
                tr.appendChild(td);
            }
        }
    }
    generationTable(tr, td, text);
})

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let badWords = ['йолоп', 'еблан', 'василіса', 'парась', 'дідько'];
let hr2 = document.createElement('hr');
let input = document.createElement('input');
let btn2 = document.createElement('button');
btn2.innerText = 'Відправити';
document.body.append(hr2, input, btn2);

btn2.addEventListener('click', function () {
    let valueInput = input.value;

    for (let word of badWords) {
        if (word === valueInput) {
            alert('Не лайся!');
            input.value = '';
            return;
        }
    }

    if (valueInput) {
        alert('Ok');
        input.value = '';
    }
})

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

let hr3 = document.createElement('hr');
let inputSecond = document.createElement('input');
let btn3 = document.createElement('button');
btn3.innerText = 'Відправити';
document.body.append(hr3, inputSecond, btn3);

btn3.addEventListener('click', function () {
    let valueInput = inputSecond.value;

    for (let word of badWords) {
        if (valueInput.includes(word)) {
            alert('Не лайся!');
            inputSecond.value = '';
            return;
        }
    }

    if (valueInput) {
        alert('Ok');
        inputSecond.value = '';
    }
})