// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let name = document.forms.userForm.name;
let age = document.forms.userForm.age;
let btn = document.getElementById('btn');
let key = 'key';

let save = (userName, userAge) => {
    let user = {
        name: userName,
        age: userAge
    };
    localStorage.setItem(key, JSON.stringify(user));
};

btn.onclick = () => {
    save(name.value, age.value);
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let carsArray =  JSON.parse(localStorage.getItem('cars')) || [];

document.forms.carForm.onsubmit = function (e) {
    e.preventDefault();
    let model = e.target.model.value;
    let type = e.target.type.value;
    let volume = e.target.volume.value;
    let car = {model, type, volume};
    carsArray.push(car);
    localStorage.setItem('cars', JSON.stringify(carsArray));
};