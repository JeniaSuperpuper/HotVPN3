let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let submit_password = document.querySelector("#submit_password");
let btn = document.querySelector('#btn');

let users = {};

function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}

function createId(users) {
    return Object.keys(users).length;
}

btn.addEventListener('click', () => {
    const nameUser = name.value;
    const emailUser = email.value;
    const passwordUser = password.value;

    const user = new User(nameUser, emailUser, passwordUser);

    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log (users);

    alert(`${nameUser}, вы успешно зарегистированы`);
});


