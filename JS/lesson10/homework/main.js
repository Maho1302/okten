// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку
// исчезал элемент с id="text".

let divId = document.createElement('div');
divId.id = 'text';
document.body.appendChild(divId);
divId.style.height = '100px';
divId.style.backgroundColor = 'grey';
let btn = document.createElement("button");
btn.innerText = 'Click here';
document.body.appendChild(btn);

btn.onclick = function () {
    document.getElementById('text').hidden = true;
}

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let btn2 = document.createElement('button');
btn2.innerText = 'ERASE MYSELF';
btn2.id = 'btn2';
document.body.appendChild(btn2);
btn2.onclick = function () {
    document.getElementById('btn2').hidden = true;
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let inputAge = document.createElement('input');
inputAge.id = 'age';
let button = document.createElement('button');
button.id = 'button';
button.innerText = 'Перевірити вік';
document.body.append(inputAge, button);

document.getElementById('button').onclick = function () {
    let age =   document.getElementById('age').value;
    if (!age) {
        alert('Введіть свій вік');
    } else if (+age < 18) {
        alert('Ви замолодий для цього контенту');
    } else {
        alert('Доступ до контенту отримано');
    }
};

// - Создайте меню, которое раскрывается/сворачивается при клике

let menuElement = document.querySelector('.menu');
let titleElement = menuElement.querySelector('.title');

titleElement.onclick = function () {
    menuElement.classList.toggle('hidden');
};

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {name: 'Comment 1', body: 'Comment"s 1 body'},
    {name: 'Comment 2', body: 'Comment"s 2 body'},
    {name: 'Comment 3', body: 'Comment"s 3 body'},
    {name: 'Comment 4', body: 'Comment"s 4 body'},
    {name: 'Comment 5', body: 'Comment"s 5 body'}
];

let commentBlock = document.createElement('div');
for (const item of comments) {
    let div = document.createElement('div');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    let btn = document.createElement('button');

    h4.innerText = item.name;
    p.innerHTML = item.body;
    btn.innerHTML = 'Згорнути коментарій'

    btn.onclick = () => {
        p.classList.add('hiddenComment');
    }
    div.append(h4, p, btn);
    commentBlock.append(div);
}
document.body.appendChild(commentBlock)
