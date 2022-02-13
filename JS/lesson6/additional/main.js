// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let str = 'наслаждение';
// let cutString0 = str.match(/.{1,3}/g);
// console.log(cutString0);

let cutString0 = (str, n) => {
    let newArr = [];
    for (let i = 0, cutStr = str.length; i < cutStr; i += n) {
        newArr.push(str.substring(i, i + n));
    }
    return newArr;
};
console.log(cutString0(str, 3));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

function ValidateEmailAddress(emailString) {
    // данні до знака равлика(@), наявність равлика
    let atSymbol = emailString.indexOf("@");
    if(atSymbol < 1) return false;
   //крапку яка знаходиться не меньше ніж на 2 символ далі після равлика
    let dot = emailString.lastIndexOf(".");
    if(dot <= atSymbol + 2) return false;
    // чи знаходиться крапка у самому кінці
    if (dot === emailString.length - 1) return false;

    return true;
};

console.log(ValidateEmailAddress('someemail@gmail.com'));
console.log(ValidateEmailAddress('someeMAIL@gmail.com'));
console.log(ValidateEmailAddress('someeMAIL@i.ua'));
console.log(ValidateEmailAddress('some.email@gmail.com'));

// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

console.log(coursesArray.sort(function (course, next) {
    return next.modules.length - course.modules.length;
}));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let str2 = "Астрономия это наука о небесных объектах";
let count = (str, stringsearch) => {
    return str.split(stringsearch).length - 1;
};
console.log(count(str2,'о'));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let str3 = "Сила тяжести приложена к центру масс тела";
let cutString = (str, n) => {
    return str.split(" ").splice(0, n).join(" ");
}
console.log(cutString(str3, 5));
