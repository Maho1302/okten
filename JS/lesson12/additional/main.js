// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

let usersContainer = document.getElementsByClassName('users')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then (value => {
        for (const user of value) {
            let userContainer = document.createElement('div');
            userContainer.classList.add('user');
            userContainer.innerHTML = `<h5>Id: ${user.id}</h5> <h4>name: ${user.name} ${user.username}</h4> <h5>email: ${user.email}</h5> <h5>address:</h5> <h5>street: ${user.address.street}</h5> <h5>suite: ${user.address.suite}</h5> <h5>city: ${user.address.city}</h5> <h5>zipcode: ${user.address.zipcode}</h5> <h5>geo:</h5> <h5>lat: ${user.address.geo.lat}</h5> <h5>lng: ${user.address.geo.lng}</h5> <h5>phone: ${user.phone}</h5> <h5>website: ${user.website}</h5> <h5>company:</h5> <h5>name: ${user.company.name}</h5> <h5>catchPhrase: ${user.company.catchPhrase}</h5> <h5>bs: ${user.company.bs}</h5>`;

            usersContainer.appendChild(userContainer);

            let postsButton = document.createElement('button');
            postsButton.innerText = "User's posts";
            userContainer.appendChild(postsButton);

            let postsContainer = document.createElement('div');
            postsContainer.classList.add('posts');
            userContainer.appendChild(postsContainer);

            postsButton.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(value => value.json())
                    .then(posts => {
                        for (const postItem of posts) {
                            let postContainer = document.createElement('div');
                            postContainer.classList.add('post');
                            postContainer.innerHTML = `<h4>userId: ${postItem.userId}</h4> <h4>id: ${postItem.id}</h4> <h4>title: ${postItem.title}</h4> <p>body: ${postItem.body}</p>`;

                            postsContainer.appendChild(postContainer);

                            let commentButton = document.createElement('button');
                            commentButton.innerText = "Post's comment";
                            commentButton.classList.add('comments');
                            postContainer.appendChild(commentButton);

                            let commentsContainer = document.createElement('div');
                            commentsContainer.classList.add('divcom');
                            postContainer.appendChild(commentsContainer);

                            commentButton.onclick = function () {
                                fetch(`https://jsonplaceholder.typicode.com/posts/${postItem.id}/comments`)
                                    .then(value => value.json())
                                    .then(value => {
                                        console.log(value);
                                        for (const commentItem of value) {
                                            let commentContainer = document.createElement('div');
                                            commentContainer.classList.add('comment');
                                            commentContainer.innerHTML = `<h4>postId: ${postItem.postId}</h4> <h4>id: ${postItem.d}</h4> <h4>name: ${postItem.name}</h4> <h4>email: ${postItem.email}</h4> <p>body: ${postItem.body}</p>`;
                                            commentsContainer.appendChild(commentContainer);
                                        }
                                    });
                                commentButton.disabled = true;
                            }
                        }
                        ;

                    });
                postsButton.disabled = true;
            }
            };

    });

