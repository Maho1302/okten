setTimeout(() => {
    let counter = 1;
    console.log(counter, 'Прокинутися');
    setTimeout(() => {
        counter++;
        console.log(counter, 'Почитати новини');
        setTimeout(() => {
            counter++;
            console.log(counter, 'Водні процедури');
            setTimeout(() => {
                counter++;
                console.log(counter, 'Поснідати');
                setTimeout(() => {
                    counter++;
                    console.log(counter, 'Почитати новини');
                    setTimeout(() => {
                        counter++;
                        console.log(counter, 'Використати кішку як антистрес');
                        setTimeout(() => {
                            counter++;
                            console.log(counter, 'Домашні завдання від okten ніхто не відміняв');
                            setTimeout(() => {
                                counter++;
                                console.log(counter, 'Знову новини');
                                setTimeout(() => {
                                    counter++;
                                    console.log(counter, 'Чекнути всіх своїх');
                                    setTimeout(() => {
                                        counter++;
                                        console.log(counter, 'Обід');
                                        setTimeout(() => {
                                            counter++;
                                            console.log(counter, 'Знову okten');
                                            setTimeout(() => {
                                                counter++;
                                                console.log(counter, 'Вечеря');
                                                setTimeout(() => {
                                                    counter++;
                                                    console.log(counter, 'Водні процедури');
                                                    setTimeout(() => {
                                                        counter++;
                                                        console.log(counter, 'Новини');
                                                        setTimeout(() => {
                                                            counter++;
                                                            console.log(counter, 'Не збожеволіти');
                                                            setTimeout(() => {
                                                                counter++;
                                                                console.log(counter, 'Спроби заснути');
                                                            }, 1000)
                                                        }, 1000)
                                                    }, 1000)
                                                }, 1000)
                                            }, 1000)
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)




// let promise = new Promise((resolve, reject) => {
//     let counter = 0;
//     setTimeout(() => {
//         console.log(counter, 'TODO:');
//         counter++;
//         resolve(counter);
//     }, 1000);
// });
//
// promise
//     .then(counter => {
//     return new Promise((resolve, reject) =>
//     setTimeout(() => {
//         console.log(counter, 'Прокинутися');
//         counter++;
//         resolve(counter);
//         }, 1000)
//     )
// })
// .then(counter => {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => {
//             console.log(counter, 'Почитати новини');
//             counter++;
//             resolve(counter);
//         }, 1000)
//     )
// })
// .then(counter => {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => {
//             console.log(counter, 'Водні процедури');
//             counter++;
//             resolve(counter)
//         }, 1000)
//     )
// })
// .then(counter => {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => {
//             console.log(counter, 'Поснідати');
//             counter++;
//             resolve(counter)
//         }, 1000)
//     )
// })
// .then(counter => {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => {
//             console.log(counter, 'Почитати новини');
//             counter++;
//             resolve(counter)
//         }, 1000)
//     )
// })
// .then(counter => {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => {
//             console.log(counter, 'Використати кішку як антистрес');
//             counter++;
//             resolve(counter)
//         }, 1000)
//     )
// })
// .then(counter => {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => {
//             console.log(counter, 'Домашні завдання від okten ніхто не відміняв');
//             counter++;
//             resolve(counter)
//         }, 1000)
//     )
// })
// .then(counter => {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => {
//             console.log(counter, 'Знову новини');
//             counter++;
//             resolve(counter)
//         }, 1000)
//     )
// })
// .then(counter => {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => {
//             console.log(counter, 'Чекнути всіх своїх');
//             counter++;
//             resolve(counter)
//         }, 1000)
//     )
// })
// .then(counter => {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => {
//             console.log(counter, 'Обід');
//             counter++;
//             resolve(counter)
//         }, 1000)
//     )
// })
// .then(counter => {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => {
//             console.log(counter, 'Знову okten');
//             counter++;
//             resolve(counter)
//         }, 1000)
//     )
// })
// .then(counter => {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => {
//             console.log(counter, 'Вечеря');
//             counter++;
//             resolve(counter)
//         }, 1000)
//     )
// })
// .then(counter => {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => {
//             console.log(counter, 'Водні процедури');
//             counter++;
//             resolve(counter)
//         }, 1000)
//     )
// })
// .then(counter => {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => {
//             console.log(counter, 'Новини');
//             counter++;
//             resolve(counter)
//         }, 1000)
//     )
// })
// .then(counter => {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => {
//             console.log(counter, 'Не збожеволіти');
//             counter++;
//             resolve(counter)
//         }, 1000)
//     )
// })
// .then(counter => {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => {
//             console.log(counter, 'Спроби заснути');
//             counter++;
//             resolve(counter)
//         }, 1000)
//     )
// })
// .then(counter => {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => {
//             console.log(counter, 'Почитати Сніговика');
//             counter++;
//             if (counter > 16) {
//                 reject('На сьогодні досить!')
//             }
//             resolve(counter)
//         }, 1000)
//     )
// })
// .catch(reason => console.log(reason));
