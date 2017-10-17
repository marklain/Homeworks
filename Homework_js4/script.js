var submit = document.querySelector('#submiter');
submit.addEventListener('click', function(e) {
    var str = document.querySelector('#strFirstTask').value;
    var p = document.querySelector('#outFirstTask');
    p.innerHTML = 'Length of string is ' + '&laquo;' + str.length + '&raquo;';
});

// END OF FIRST TASK

var images = ['hulk.png', 'im.png', 'thor.png'];

function getImg() {
    var out = document.querySelector('#outImages');
    for (var i = 0; i < images.length; i++) {
        out.innerHTML += '<img src="images/' + images[i] + '">';
    }
}
document.querySelector('#imgOuter').addEventListener('click', getImg);

// END OF SECOND TASK

document.querySelector('#domainGenerator').addEventListener('click', function(e) {
    var urlHolder = document.querySelector('#urlHolder');
    var domainOut = document.querySelector('#domainOut');
    var regexpHttp = /http/i;
    var regexpHttps = /https/i;
    // domainOut.innerHTML = urlHolder.value.replace('http://', '');
    // метод вывода 1
    // domainOut.innerHTML = urlHolder.value.slice(7);
    // метод вывода 2
    if (regexpHttps.test(urlHolder.value)) {
        domainOut.innerHTML = urlHolder.value.slice(8);
    } else if (regexpHttp.test(urlHolder.value)) {
        domainOut.innerHTML = urlHolder.value.slice(7);
    } else domainOut.innerHTML = 'Ошибка! Введите URL в правильном формате HTTP или HTTPS';
});

// END OF THIRD TASK
document.querySelector('#siteShower').addEventListener('click', function(e) {
    var site = document.querySelector('#siteUrl').value;
    var out = document.querySelector('#siteOut');
    var regexpHttp = /'http/i;
    var regexpHttps = /https/i;
    if (~site.indexOf('https://www.')) {
        out.innerHTML = site.slice(12);
    } else if (~site.indexOf('http://www.')) {
        out.innerHTML = site.slice(11);
    } else if (~site.indexOf('https://')) {
        out.innerHTML = site.slice(8);
    } else if (~site.indexOf('http://')) {
        out.innerHTML = site.slice(7);
    } else out.innerHTML = 'Вы ввели неправильный формат, :)';
});

// END OF FOURTH TASK
document.querySelector('#register').addEventListener('click', function(e) {
    user = {
        name : document.querySelector('#userName').value.trim(),
        surName : document.querySelector('#userSurname').value.trim(),
        password : document.querySelector('#userPassword').value,
        email : document.querySelector('#userEmail').value.trim()
    }
    if (user.name == '') {
        alert('Введите имя');
        return false;
    } else if (user.surName == '') {
        alert('Введите фамилию');
        return false;
    } else if (user.password.length < 5) {
        alert('Пароль слишком короткий введите пароль, который состоит более чем из 5 символов.');
        return false;
    } else if (user.email == '') {
        alert('Введите email');
        return false;
    }


    var position = user.email.indexOf('@');
    if (position == -1) alert('Введите правильный формат email');
    position++;

    for (position; position < user.email.length; position++) {
        if (~user.email.indexOf('@', position)) {
            alert('Вы ввели неправильный email, должен быть только один символ @');
            return false;
        }
    }
    // добавим от себя, надеюсь не наругают, пусть еще вся информация(если она введена корректно) выводится красивенько в параграф :)
    var out = document.querySelector('#userOut');
    for (var key in user) {
        out.innerHTML += key + ': ' + user[key] + '<br>';
    }
    return true;
});
// END OF FIFTH TASK
var codeIn = document.querySelector('#codeIn');
    codeIn.addEventListener('keypress', function(e) {
    var out = document.querySelector('#codeOut');
    out.innerHTML = e.keyCode;
    console.log(codeIn);
    if (codeIn.value.length > 0) {
        codeIn.value = '';
    }
});
