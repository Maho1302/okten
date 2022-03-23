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

let products = [];
let name = document.forms.form.name;
let quantity = document.forms.form.quantity;
let price = document.forms.form.price;
let href = document.forms.form.href;
let button = document.getElementById('button');

let save = (productName, productQuantity, productPrice, productHref) => {
    let product = {
        name: productName,
        quantity: productQuantity,
        price: productPrice,
        href: productHref
    };
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
};

button.addEventListener('click', function (e){
    e.preventDefault();
        save(name.value, quantity.value, price.value, href.value);
});

