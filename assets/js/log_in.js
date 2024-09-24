document.getElementById('main-form').addEventListener("submit", checkData);

function checkData() {


    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password_with_out_space = password.replaceAll(' ', '')



    var error = "";


     if(email == ''  || password == '' )
        error = "Введите все данные";
    else if (!email.includes('@') || !email.includes('.'))
        error = "Неверный формат электронной почты"
    else if(password_with_out_space.length < 8 )
        error = "Пароль слишком короткий";
    else if(password_with_out_space.length == 0 )
        error = "Пароль не может состоять из пробелов";

    if(error != '') {
        alert(error)
    } else {
        alert("Вы успешно вошли")
        window.location = '.../index.html';
    }

    return false;

}