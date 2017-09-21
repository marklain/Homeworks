var age;
yearOfBorn.onchange = function(){
   var year = +yearOfBorn.value;

   if (isNaN(year)) {
   alert('УПС! Ошибочка выходит, как же вы словами год рождения то пытаетесь ввести? Не пойдет, давайте цифрами!')

 } else if(year > 100 && year < 1900) {
   alert('Вы либо еще не роделись, либо вас уже нет(извините, так уж получилось) Введите год рождения в формате YYYY либо YY. Спасибо :)')

 } else if (year < 100 && year > 17) {
   age = 117 - year;
   alert('Вам ' + age + ' лет!');

 } else if(year <17){
   age = 17 - year;
   alert('Вам ' + age + ' лет!');

 } else if (year > 100) {
   age = 2017 - year;
   alert('Вам ' + age + ' лет!')
 }
};

// END OF TASK1
secondValue.onchange = function(){
  var a = +firstValue.value;
  var b = +secondValue.value;
  if (a > b) {
    alert('Максимальное число из двух, которые вы ввели = ' + a)
  } else if (a < b) {
    alert('Максимальное число из двух, которые вы ввели = ' + b)
  } else {
    alert('Эти два числа равны')
  };
};

// END OF TASK 2

numberOfFlat.onchange = function(){
  var flat = +numberOfFlat.value;
  if (isNaN(flat)) {
    alert('УПС! Ошибочка выходит, как же вы словами номер квартиры то пытаетесь ввести? Не пойдет, давайте цифрами!')
  } else if (flat >= 1 && flat <= 20) {
    alert('Это первый подъезд!')
  } else if (flat >= 21 && flat <= 64) {
    alert('Это второй подъезд!')
  } else if (flat >= 65 && flat <= 80) {
    alert('Это третий подъезд!')
  } else {
    alert('Это уже другой дом!')
  }
};

// END OF TASK3

password.onchange = function(){
  var login = userName.value;
  var pass = password.value;
  if (login == 'ivan' && pass == '333' || login == 'ssss' && pass == '666' || login == 'gibs' && pass == '0000') {
    alert('Добро пожаловать!')
  } else {
    alert('Ошибка')
  };
};

// END OF TASK4

thirdNumber.onchange = function(){
  x = +firstNumber.value;
  y = +secondNumber.value;
  z = +thirdNumber.value;
  if (x > y && x > z) {
    alert('Максимальное число - ' + x)
  } else if (y > x && y > z) {
    alert('Максимальное число - ' + y)
  } else if (z > x && z > y){
    alert('Максимальное число - ' + z)
  }
};

// END OF TASK 5

document.write('<br/>Task №6 <br/> <br/>')
for (var i = 0; i < 101; i++) {
  document.write(i + ', ');
}

// END OF TASK 6

document.write('<br/><br/>Task №7<br/><br/>');
for (var j = 200; j > 0; j--) {
  document.write(j + ' ');
}

// END OF TASK 7

document.write('<br/><br/>Task №8<br/><br/>');
var sum = 0, k;
for (k = 0; k <= 100; k++) {
  sum += k;
}
document.write('Сумма чисел от 0 до 100 включительно = ' + sum);

// END OF TASK 8

degreeTask9.onchange = function() {
  var n = numberTask9.value,
      m = degreeTask9.value,
      resultTask9 = n;
  for (var h = 1; h < m; h++) {
    resultTask9 *= n;
  }
  alert('Результат - ' + resultTask9);
}

// END OF TASK 9

document.write('<br/><br/>Task №10<br/><br/>');
var operand1 = 7, resultTask10;
for (var operand2 = 1; operand2 <= 9; operand2++) {
  resultTask10 = operand1 * operand2;
  document.write(operand1 + ' * ' + operand2 + ' = ' + resultTask10 + '<br/>');
}

// END OF TASK 10

document.write('<br/><br/>Task №11<br/><br/>');
var resultTask11 = 1;
for (var l = 1; l < 50; l++) {
  resultTask11 *= l;
}
document.write('произведение чисел от 1 до 50 = ' + resultTask11);

// END OF TASK 11

document.write('<br/><br/>Task №12<br/><br/>');
for (var symb = 1000; symb < 2000; symb++) {
  document.write('&#' + symb + ', ');
}
