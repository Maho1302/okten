// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id,
    this.name = name,
    this.surname = surname,
    this.email = email,
    this.phone = phone
};

let userArr = [
    new User(11, 'Akakii', 'Biba', 'a@gmail.com', 380670000001),
    new User(2, 'Boris', 'Boba', 'b@gmail.com', 380670000002),
    new User(31, 'Vlad', 'Chepesh', 'c@gmail.com', 380670000003),
    new User(4, 'Goga', 'Gogaryan', 'd@gmail.com', 380670000004),
    new User(51, 'Dmitrii', 'Babich', 'e@gmail.com', 380670000005),
    new User(6, 'Evgenii', 'Nosov', 'f@gmail.com', 380670000006),
    new User(71, 'Ivan', 'Ivanov', 'g@gmail.com', 380670000007),
    new User(8, 'Constantine', 'Vasev', 'h@gmail.com', 380670000008),
    new User(91, 'Leonid', 'Mironov', 'i@gmail.com', 380670000009),
    new User(10, 'Maksim', 'Pevchik', 'j@gmail.com', 380670000010)
];

console.log(userArr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUser = userArr.filter((user) => {
    if (user.id % 2 === 0){
    return user
    }});
console.log(filterUser);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(userArr.sort((current, next) => current.id - next.id));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
};

let arrWithClients = [
    new Client(11, 'Akakii', 'Biba', 'a@gmail.com', 380670000001, ['heart', 'apple', 'cat']),
    new Client(2, 'Boris', 'Boba', 'b@gmail.com', 380670000002, ['brain', 'some', 'new']),
    new Client(31, 'Vlad', 'Chepesh', 'c@gmail.com', 380670000003, ['enigma', 'another']),
    new Client(4, 'Goga', 'Gogaryan', 'd@gmail.com', 380670000004, ['portal', 'fractal', 'traimph']),
    new Client(51, 'Dmitrii', 'Babich', 'e@gmail.com', 380670000005, ['dog', 'bamboleiyo']),
    new Client(6, 'Evgenii', 'Nosov', 'f@gmail.com', 380670000006, ['bag']),
    new Client(71, 'Ivan', 'Ivanov', 'g@gmail.com', 380670000007, ['bilbo', 'beggins', 'frodo', 'gendalf', 'sem']),
    new Client(8, 'Constantine', 'Vasev', 'h@gmail.com', 380670000008, ['not', 'the', 'same']),
    new Client(91, 'Leonid', 'Mironov', 'i@gmail.com', 380670000009, ['shark']),
    new Client(10, 'Maksim', 'Pevchik', 'j@gmail.com', 380670000010, ['happiness'])
];
console.log(arrWithClients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(arrWithClients.sort((current, next) => current.order.length - next.order.length));

