var par = document.getElementsByTagName('p');
var clickers = document.querySelectorAll('button');
var counter = 0;
var massive = [1, 33, 574, 'Hello', true, 233, 'element']
var numberForCheck = document.getElementById('numberForCheck');
var randomOut = document.getElementById('randomOut');
var tryCounter = 0;
var countToOver = 3;
var randomNum = Math.round((Math.random() * 10));

function SetBackground() {
    for (var i = 0; i < par.length; i++) {
        par[i].style.background = '#ff0000';
    }
}
function makeShadowForImages() {
    var img = document.getElementsByTagName('img')
    for (var i = 0; i < img.length; i++) {
        img[i].style.boxShadow = '2px 2px 3px #000';
    }
}
function numberingOfParagraphs() {
    j = 1;
    for (var i = 0; i < par.length; i++) {
        par[i].insertAdjacentHTML('afterBegin', j + ' ');
        j++;
    }
}
function counterOfClicking() {
    ++counter;
    document.getElementById('targetCounter').innerHTML = counter;
}
clickers.forEach(function(button) {
    button.addEventListener('click', counterOfClicking);
})

function exponentiation() {
    var number = +document.getElementById('num').value,
    exponent = +document.getElementById('exp').value,
    result;
    result = Math.pow(number, exponent);
    alert('Результат = ' + result);
}

function addBorderBot() {
    var tag = document.getElementById('tagBorderBot').value;
    var tagsOnPage = document.getElementsByTagName(tag);
    for (var i = 0; i < tagsOnPage.length; i++) {
        tagsOnPage[i].style.borderBottom = '5px solid black';
    }
}
function ageChecker() {
    var age = +document.getElementById('userAge').value;
    if (age > 16) {
        alert('Добро пожаловать!');
        console.log(age);
    } else if (age === 0) {
        alert('Введите возраст!');
        console.log(age);
    } else if (isNaN(age)) {
        alert('Эээ, не! введите возраст циферками :)');
        console.log(age);
    } else if (age <= 16) {
        alert('вы еще молоды!');
        console.log(age);
    }
}

function masLengthCounter(mas) {
    if (mas == undefined) {
        alert('ОШИБКА!');
    } alert('Длина массива = ' + mas.length);
}
function numberChecker() {
    var number = +numberForCheck.value;
    if (number > 10) {
        return alert(Math.pow(number, 2));
    } else if (number < 7) {
        alert('Число меньше 7');
    } else if (number < 8) {
        return alert(number);
    } else if (number <9) {
        return alert(number);
    }
}
function checkRandomNumber() {
    var userNum = document.getElementById('userVariantOfNumber').value;
    tryCounter += 1;
    countToOver -= 1;

    if (randomNum == userNum) {
        alert('Поздравляем! Вы угадали!');
        location.reload();
    } else if (tryCounter == 3) {
        alert('Вы не угадали, попытки кончились, GAME OVER, грустьпечалька');
        location.reload();
    } else if (randomNum != userNum) {
        randomOut.innerHTML = countToOver;
        if (userNum > randomNum) {
            alert('Вы ввели число, которое больше загаданного');
        } else alert('Вы ввели число, которое меньше загаданного');
    }
}

numberForCheck.onchange = numberChecker;

console.log(randomNum);
SetBackground();
makeShadowForImages();
numberingOfParagraphs();
