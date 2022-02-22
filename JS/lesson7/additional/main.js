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

let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', new AddAddress('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', new AddGeo('-37.3159', '81.1496')), '1-770-736-8031 x56442', 'hildegard.org', new AddCompany('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets'));

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

class Tag  {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
};

class SetAttrs {
    constructor(titleOfAttr, actionOfAttr, titleOfAttr2, actionOfAttr2) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
    }
}

let aTag = new Tag('<a>', 'Является одним из важных элементов HTML и предназначен для создания ссылок', [new SetAttrs('href','Задает адрес документа, на который следует перейти'), new SetAttrs('name', 'Устанавливает имя якоря внутри документа')]);
console.log(aTag);

let divTag = new Tag('<div>', 'Является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого', [new SetAttrs('align', 'Задает выравнивание содержимого тега <div>.'), new SetAttrs('title', 'Добавляет всплывающую подсказку к содержимому.')]);
console.log(divTag);

let h1Tag = new Tag('<h1>', 'Представляет собой наиболее важный заголовок первого уровня', [new SetAttrs('align','Определяет выравнивание заголовка.')]);
console.log(h1Tag);

let spanTag = new Tag('<span>', 'Предназначен для определения строчных элементов документа', [new SetAttrs('class','Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'), new SetAttrs('id','Указывает имя стилевого идентификатора.')]);
console.log(spanTag);

let inputTag = new Tag('<input>', 'является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', [new SetAttrs('form','Связывает поле с формой по её идентификатору.'), new SetAttrs('name','Имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать.')]);
console.log(inputTag);

let formTag = new Tag('<form>', 'Устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.', [new SetAttrs('action','Адрес программы или документа, который обрабатывает данные формы.'), new SetAttrs('target','Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.'), new SetAttrs('name','Имя формы.')]);
console.log(formTag);

let optionTag = new Tag('<option>', 'Определяет отдельные пункты списка, создаваемого с помощью контейнера select', [new SetAttrs('label','Указание метки пункта списка.'), new SetAttrs('value','Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.')]);
console.log(optionTag);

let selectTag = new Tag('<select>', 'Позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором.', [new SetAttrs('form','Связывает список с формой.'), new SetAttrs('name','Имя элемента для отправки на сервер или обращения через скрипты.')]);
console.log(selectTag);

