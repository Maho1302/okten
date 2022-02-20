// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

let conten = document.getElementById('content');
console.log(conten);

// -- отримує текст з блоку з id "rules"

let rules = document.getElementById('rules');
console.log(rules);

// -- замініть текст параграфа з id 'content' на будь-який інший

content.innerText = 'Another text';

// -- замініть текст параграфа з id 'rules' на будь-який інший

rules.innerHTML = '<p>This was a triumph</p>'

// -- змініть кожному елементу колір фону на червоний

let bgColor =  document.body.children;
for (const child of bgColor) {
    child.style.backgroundColor = 'red';
}

// -- змініть кожному елементу колір тексту на синій

let elementColor=  document.body.children;
for (const child of elementColor) {
    child.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let rulesId = document.getElementById('rules');
console.log(rulesId.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fcRules = document.getElementsByClassName('fc_rules');
for (const child of fcRules) {
    child.style.color = 'red'
}