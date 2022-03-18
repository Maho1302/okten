// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на
// сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let div = document.createElement('div');
div.innerText = 'Форма товару';
document.body.appendChild(div);
let form = document.createElement('form');
form.setAttribute('name', 'form');
div.appendChild(form);
let inputOne = document.createElement('input');
inputOne.setAttribute('name', 'inputOne');
let inputTwo = document.createElement('input');
inputTwo.setAttribute('name', 'inputTwo');
let inputThree = document.createElement('input');
inputThree.setAttribute('name', 'inputThree');
let inputFour = document.createElement('input');
inputFour.setAttribute('name', 'inputFour');
form.append(inputOne, inputTwo, inputThree, inputFour);

let button = document.createElement('button');
button.innerText = 'Зберегти в LocalStorage';
document.body.appendChild(button);

let products = [];
button.addEventListener('click', function (e){
    let products = JSON.parse(localStorage.getItem('products')) || [];
    e.preventDefault();
let product = {'name:', document.forms.form.inputOne.value; 'quantity:', document.forms.form.inputTwo.value; 'price:', document.forms.form.inputThree.value; 'href:', document.forms.form.inputFour.value};
        // localStorage.setItem('name', JSON.stringify(document.forms.form.inputOne.value));
        // localStorage.setItem('quantity', JSON.stringify(document.forms.form.inputTwo.value));
        // localStorage.setItem('price', JSON.stringify(document.forms.form.inputThree.value));
        // localStorage.setItem('href', JSON.stringify(document.forms.form.inputFour.value));
    localStorage.setItem('product', JSON.stringify(product));
});


// let btn = document.createElement('button');
// btn.innerHTML = 'Зберегти в LocalStorage';
// let products = JSON.parse(localStorage.getItem('products')) || [];
//     btn.onclick = function (e) {
//         products.push(product);
//         localStorage.setItem('products', JSON.stringify(products));
//     };
