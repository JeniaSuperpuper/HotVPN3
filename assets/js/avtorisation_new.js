document.getElementById('main-form').addEventListener("submit", checkData);

function checkData() {


    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var repassword = document.getElementById('repassword').value;
    let password_with_out_space = password.replaceAll(' ', '')

    var error = "";

    if(email == '' || name == '' || password == '' || repassword == '' )
        error = "Введите все данные";
    else if (!email.includes('@') || !email.includes('.'))
        error = "Неверный формат электронной почты"
    else if(name.length <= 1 || name.length > 50 )
        error = "Неправильное имя";
    else if(password != repassword)
        error = "Пароли не совпадают";
    else if(password_with_out_space.length == 0 )
        error = "Пароль не может состоять из пробелов";
    else if(password_with_out_space.length < 8 )
        error = "Пароль слишком короткий";

    if(error != '') {
        alert(error)
    } else {
        alert("Вы зарегистрированы")
        window.location = '.../index.html';
    }

    return false;

}