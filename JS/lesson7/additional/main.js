// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

class User {
    constructor(id, name, username, email, address, phone, website, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
};

class AddAddress {
    constructor(street, suite, city, zipcode, geo) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}

class AddGeo {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}

class AddCompany {
    constructor(name, catchPhrase, bs) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}

let geo = new AddGeo('-37.3159', '81.1496');

let address = new AddAddress('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', geo);

let company = new AddCompany('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');

let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', address, '1-770-736-8031 x56442', 'hildegard.org', company);

console.log(user);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class Tags  {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
};

// class SetAttrs {
//     constructor(titleOfAttr, actionOfAttr) {
//         {this.titleOfAttr = titleOfAttr;
//         this.actionOfAttr = actionOfAttr;}
//         {this.titleOfAttr2 = titleOfAttr2;
//         this.actionOfAttr2 = actionOfAttr2;}
//     }
// }

let attrs2 = new SetAttrs('href','Задает адрес документа, на который следует перейти');
let attrs = new SetAttrs('href','Задает адрес документа, на который следует перейти', 'name', 'Устанавливает имя якоря внутри документа');

let aTag = new Tags('\<a\>', 'Является одним из важных элементов HTML и предназначен для создания ссылок', ['href','Задает адрес документа, на который следует перейти']);
console.log(aTag);


// [{titleOfAttr: titleOfAttr, actionOfAttr: actionOfAttr}, {titleOfAttr: titleOfAttr, actionOfAttr: actionOfAttr}]
// ,{name, Устанавливает имя якоря внутри документа}]?
