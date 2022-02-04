// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
//     до якої четверті години попадає число (в першу, другу, третю или четверту частину години).

let time = +prompt('Введіть кількість хвилин від 0 до 59');

if (time>=0 && time <=15) {
    document.write('Це перша четверть години!');
} else if (time>=16 && time <=30) {
    document.write('Це друга четверть години!');
} else if (time>=31 && time <=45) {
    document.write('Це третя четверть години!');
}  else if (time>=46 && time <=59) {
    document.write('Це четверта четверть години!');
} else {
    document.write('Ви мабуть щось переплутали. Спробуйте ще раз!');
};

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('Введіть дату від 1 до 31');

if (day>=1 && day<= 10) {
    document.write('Це перша декада місяця.');
} else if(day>=11 && day<= 20) {
    document.write('Це друга декада місяця.');
} else if(day>=21 && day<=31) {
    document.write('Це третя декада місяця.');
} else {
    document.write('Такої дати не буває!');
};

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта
// - з коротким записом(тернаркою)

let test = true ? 'Неправильно' : 'Вірно';
console.log(test);

 test = false ? 'Неправильно' : 'Вірно';
console.log(test);

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = 0;

if (a === 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
};

 a = 1;

if (a === 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
};

 a = -3;

if (a === 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
};

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер
//     дня тижня і на екрані відображається інфа що заплановано на цей день.

let monday = {
   1: 'викупати кішку',
   2: 'привести доладу шафу'
};

let tuesday = {
   1: 'сходити в банк',
   2: 'купити кішці корм'
};

let wednesday = {
    1: 'розсортувати книжки',
    2: 'напекти печіва'
};

let thuesday = {
    1: 'скласти розклад на місяць',
    2: 'переосмислити буття'
};

let friday = {
    1: 'підготуватися до вихідних',
    2: 'палити свічки'
};

let saturday = {
    1: 'скласти список пріоритетів',
    2: 'полити кімнатні рослини'
};

let sunday = {
    1: 'виспатися',
    2: 'дочитати книгу'
};

let dayOfWeek = prompt('Введітьпорядковий номер дня тиждня:');

switch (dayOfWeek) {
    case '1': console.log(monday);
    break;
    case '2': console.log(tuesday);
    break;
    case '3': console.log(wednesday);
    break;
    case '4': console.log(thuesday);
    break;
    case '5': console.log(friday);
    break;
    case '6': console.log(saturday);
    break;
    case '7': console.log(sunday);
    break;
    default: console.log('Такого дня не існує!');
    break;
}

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let whatYear = prompt('Введіть кількість днів в році який вас цікавить:');

if(whatYear % 4 === 0){
    console.log('Це високосний рік!');
}else {
    console.log('Це невисокосний рік!');
}

// if (whatYear == 366) {
//     console.log('Це високосний рік!');
// } else if (whatYear == 365) {
//     console.log('Це невисокосний рік!');
// } else {
//     console.log('Стільки днів в році не буває!')
// };
//
// let febDays = prompt('Введіть кількість днів в лютому того року який вас цікавить:');
//
// if (febDays == 29) {
//     console.log('Це високосний рік!');
// } else if (febDays == 28) {
//     console.log('Це невисокосний рік!');
// } else {
//     console.log('Стільки днів у лютому не буває!')
// };

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let nameOfJavaScript = prompt('Яка «офіційна» назва JavaScript?');

if (nameOfJavaScript === 'ECMAScript' || nameOfJavaScript === 'ecmascript') {
    console.log('Правильно!');
} else {
    console.log('Не знаєте? ECMAScript!')
};



