let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let addressArr = [];
// for (user of users) {
//     addressArr.push(user.address);
// }
// console.log(addressArr);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Всі данні в одному блоці.

// for (user of users) {
//     let userDiv = document.createElement('div');
//     userDiv.innerText = `${user.name} ${user.age}
//     ${user.status}
//     ${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`;
//     document.body.appendChild(userDiv);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//     розділивши всі властивості по своїм блокам (div>div*4)

// for (user of users) {
//     let userDiv = document.createElement('div');
//     let name = document.createElement('div');
//     name.innerText = user.name;
//     let age = document.createElement('div');
//     age.innerText = user.age;
//     let status = document.createElement('div');
//     status.innerText = user.status;
//     let address = document.createElement('div');
//     address.innerText = `${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`;
//
//     userDiv.append(name, age, status, address);
//     document.body.appendChild(userDiv);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//     розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (user of users) {
//     let userDiv = document.createElement('div');
//     let name = document.createElement('div');
//     name.innerText = user.name;
//     let age = document.createElement('div');
//     age.innerText = user.age;
//     let status = document.createElement('div');
//     status.innerText = user.status;
//     let address = document.createElement('div');
//
//     for (const addressItem in user.address) {
//         let addressElement = document.createElement('div');
//         addressElement.innerText = user.address[addressItem];
//         address.appendChild(addressElement);
//     }
//     userDiv.append(name, age, status, address);
//     document.body.appendChild(userDiv);
// }


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана
// в параграфі.
// створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того,
// що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// let div = document.getElementById('content');
// let ul = document.createElement('ul');
// div.appendChild(ul);
//
// let getH2 = document.getElementsByTagName('h2');
// let arrH2 = [];
// for(let i=0; i < getH2.length;i++ ){
//     arrH2.push(getH2[i].innerText)
// }
// // console.log(arrH2);
// for (let i = 0, ln = arrH2.length; i < ln; i++) {
//     let li = document.createElement('li');
//     li.innerHTML = arrH2[i];
//     ul.appendChild(li);
// }

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

// for (rule of rules) {
//     let divRule = document.createElement('div');
//     let h2Rule = document.createElement('h2');
//     h2Rule.innerText = rule.title;
//     let pRule = document.createElement('p');
//     pRule.innerText = rule.body;
//     document.body.appendChild(divRule);
//     divRule.appendChild(h2Rule);
//     divRule.appendChild(pRule);
// };