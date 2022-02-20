// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, ' +
// 'максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increasemaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Cars(model, manufacturer, year, maxSpeed, capacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.capacity = capacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`);
        }
    };
    this.increasemaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

let car = new Cars('Subaru Impreza WRX', 'Japan', 2006, 255, 2.0);

console.log(car);
car.drive();
car.info();
car.increasemaxSpeed(5);
car.drive();
car.changeYear(2007)
car.info();
car.addDriver('BabyOnDrive');
console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//     додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Cars2 {
    constructor(model, manufacturer, year, maxSpeed, capacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.capacity = capacity;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info() {
        for (const key in this) {
            console.log(`${key} - ${this[key]}`)
        }
    }
    newMaxSpeed (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    changeYear (newValue) {
        this.year = newValue;
    }
    addDriver (driver) {
        this.driver = driver;
    }
}

let car2 = new Cars2('Mitsubishi EvoX', 'Japan', 2010, 240, 2.0);
console.log(car2);
car2.drive();
car2.info();
car2.newMaxSpeed(2);
car2.drive();
car2.changeYear(2015)
car2.info();
car2.addDriver('BabyOnFire');
console.log(car2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Popelushka {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

let popelushkaArray = [
    new Popelushka('Akakii', 26, 43),
    new Popelushka('Anna', 24, 37),
    new Popelushka('Maria', 25, 38),
    new Popelushka('Aleksandra', 26, 39),
    new Popelushka('Aleksandr', 27, 44),
    new Popelushka('Katya', 30, 36),
    new Popelushka('Lydmila', 29, 38),
    new Popelushka('Natlia', 33, 38),
    new Popelushka('Savako', 22, 36),
    new Popelushka('Alina', 27, 40),
];
console.log(popelushkaArray);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Princ {
    constructor(name, age, findShose) {
        this.name = name;
        this.age = age;
        this.findShose = findShose;
    }
}

let prince = new Princ('Ganz', 38, 43);

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let Princess = (popelushkaArray, prince) => {
    for (let item of popelushkaArray) {
        if (item.footsize === prince.findShose) {
            return `your Princess is ${item.name}`
        }
    }
};

console.log(Princess(popelushkaArray, prince));

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let newPrincess = popelushkaArray.find((item) => item.footsize === prince.findShose);
console.log(newPrincess);