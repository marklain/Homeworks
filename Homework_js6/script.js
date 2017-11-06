var form = document.getElementById('firstTaskForm');
var whatOption;
var secondTaskOut = document.querySelector('.second-task-out');
document.querySelector('#inputAdder').addEventListener('click', function(e) {
    // this.insertAdjacentHTML('afterEnd', '<input type="text"><button id="inputDeleter">-</button>');
    var inputFirstTask = document.createElement('input');
    var buttonDeleter = document.createElement('button');
    inputFirstTask.type = 'text';
    inputFirstTask.className = 'firstTaskInput'
    buttonDeleter.className = 'inputDeleter';
    buttonDeleter.innerHTML = '-';
    buttonDeleter.addEventListener('click', function(e) {
        inputFirstTask.remove();
        this.remove();
    });
    if (form.querySelectorAll('.firstTaskInput').length > 4) {
        alert('Превышено количество допустимых INPUT');
        return;
    }
    form.insertBefore(inputFirstTask, getInfoFirstTask);
    form.insertBefore(buttonDeleter, getInfoFirstTask);
});
document.querySelector('#getInfoFirstTask').addEventListener('click', function(e) {
    var outString = '';
    var inputs = document.querySelectorAll('.firstTaskInput');
    var out = document.querySelector('#firstTaskOut');


    if (document.querySelector('#oddRadio').checked == true) {

        for (var i = 0; i < inputs.length; i++) {
            if (i % 2 != 0) {
                if (inputs[i].value != '') {
                    outString += inputs[i].value + '<br>';
                    inputs[i].style.border = 'border: 1px solid #77A1D3';
                    inputs[i].style.boxShadow = '0px 0px 10px #77A1D3';
                } else {
                    inputs[i].style.border = '1px solid red';
                    inputs[i].style.boxShadow = '0px 0px 10px red';
                    inputs[i].placeholder = 'Заполните поле!';
                    return;
                }
            }
        }
    } else if (document.querySelector('#evenRadio').checked == true) {

        for (var i = 0; i < inputs.length; i++) {
            if (i % 2 == 0) {
                if (inputs[i].value != '') {
                    outString += inputs[i].value + '<br>';
                    inputs[i].style.border = '1px solid #77A1D3';
                    inputs[i].style.boxShadow = '0px 0px 10px #77A1D3';
                } else {
                    inputs[i].style.border = '1px solid red';
                    inputs[i].style.boxShadow = '0px 0px 10px red';
                    inputs[i].placeholder = 'Заполните поле!';
                    return;
                }
            }
        }
    } else {
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value != '') {
                outString += inputs[i].value + '<br>';
                inputs[i].style.border = '1px solid #77A1D3';
                inputs[i].style.boxShadow = '0px 0px 10px #77A1D3';
            } else {
                inputs[i].style.border = '1px solid red';
                inputs[i].style.boxShadow = '0px 0px 10px red';
                inputs[i].placeholder = 'Заполните поле!';
                return;
            }
        }
    }

    out.innerHTML = outString;
    console.log(outString);
});
// END OF 1-3 TASKS

document.querySelector('.openerWindow').addEventListener('click', function(e) {
    var secondTaskOut = document.createElement('p');
    secondTaskOut.className = 'second-task-out';
    var windowSecondTask = window.open('about:blank', 'Choose option', 'width=400,height=260,top=300, left=600');
    var firstOptionButton = windowSecondTask.document.createElement('button');
    var secondOptionButton = windowSecondTask.document.createElement('button');
    firstOptionButton.innerHTML = 'Можешь нажать на меня например, я первый';
    firstOptionButton.style.width = '300px';
    firstOptionButton.style.border = '1px solid #77A1D3';
    firstOptionButton.style.boxShadow = '0px 0px 10px #77A1D3';
    firstOptionButton.style.fontFamily = '"Roboto", sans-serif';
    firstOptionButton.style.borderRadius = '5px';
    firstOptionButton.style.padding = '15px';
    firstOptionButton.style.background = 'none';
    firstOptionButton.style.color = '#a5caf6';
    firstOptionButton.style.fontWeight = '300';
    firstOptionButton.style.fontSize = '13px';
    firstOptionButton.style.marginLeft = '40px';
    firstOptionButton.style.marginTop = '40px';
    firstOptionButton.style.cursor = 'pointer';

    secondOptionButton.innerHTML = 'Или на меня нажать можешь например, я второй';
    secondOptionButton.style.width = '300px';
    secondOptionButton.style.border = '1px solid #77A1D3';
    secondOptionButton.style.boxShadow = '0px 0px 10px #77A1D3';
    secondOptionButton.style.fontFamily = '"Roboto", sans-serif';
    secondOptionButton.style.borderRadius = '5px';
    secondOptionButton.style.padding = '15px';
    secondOptionButton.style.background = 'none';
    secondOptionButton.style.color = '#a5caf6';
    secondOptionButton.style.fontWeight = '300';
    secondOptionButton.style.fontSize = '13px';
    secondOptionButton.style.marginLeft = '40px';
    secondOptionButton.style.marginTop = '40px';
    secondOptionButton.style.cursor = 'pointer';
    windowSecondTask.document.body.style.backgroundImage = 'linear-gradient(to right, #16222A 0%, #3A6073 51%, #16222A 100%)';
    //
    windowSecondTask.document.body.appendChild(firstOptionButton);
    windowSecondTask.document.body.appendChild(secondOptionButton);
    firstOptionButton.addEventListener('click', function(e) {
        document.body.insertBefore(secondTaskOut, captionTask5);
        secondTaskOut.innerHTML = 'Вы нажали на первую кнопку, я угадал? :)<br> И если результат вы уже увидели, то можете нажать на меня чтобы я вам не мешал';
        windowSecondTask.close()
        return whatOption;
    });
    secondOptionButton.addEventListener('click', function(e) {
        document.body.insertBefore(secondTaskOut, captionTask5);
        secondTaskOut.innerHTML = 'Вы нажали на вторую кнопку, я угадал? :) <br> И если результат вы уже увидели, то можете нажать на меня чтобы я вам не мешал';
        windowSecondTask.close()
        return whatOption;
    });
    secondTaskOut.addEventListener('click', function(e) {
        this.remove();
    });
});
// END OF FOURTH TASK

fifthTaskList.querySelectorAll('li').forEach(function  (element) {
    element.addEventListener('click', function (e) {
        if (this.className == '') {
            this.classList.add('task5-red');
        } else if (this.className != '') {
            this.classList.remove(this.className);
        }
    });
})
document.querySelector('#elementListAdder').addEventListener('click', function(e) {
    var li = document.createElement('li');
        liText = document.querySelector('#elementListEnter').value;
        li.addEventListener('click', function(e) {
            if (this.className == '') {
                this.classList.add('task5-red');
            } else if (this.className != '') {
                this.classList.remove(this.className);
            }
        });
        if (liText != '') {
            li.innerHTML = liText;
        }
        else {
            alert('Воу, воу! Добавлять пустой элемент негоже!')
            return;
        }
        fifthTaskList.appendChild(li);
});
// END OF FIFTH TASK

document.querySelector('#sixTaskWrap').addEventListener('mouseenter', function(e) {
    document.querySelector('.six-task-block').classList.add('six-task-block-hide');
    setTimeout(function() {
        document.querySelector('.six-task-block').innerHTML = 'Нажми на меня<br>И полетим на ютуб';
    }, 50);
});
document.querySelector('#sixTaskWrap').addEventListener('mouseleave', function(e) {
    document.querySelector('.six-task-block').classList.remove('six-task-block-hide');
    setTimeout(function() {
        document.querySelector('.six-task-block').innerHTML = '';
    }, 300);
});
document.querySelector('.six-task-block').addEventListener('click', function(e) {
    window.open('http://youtube.com');
});
// END OF SIXTH TASK

var blockInfoTask7 = document.createElement('p');
blockInfoTask7.className = 'block-info-task-7';

document.querySelectorAll('.img-task-7').forEach(function (elem) {
    elem.addEventListener('mouseenter', function(e) {
        var src, alt;

        (this.src != '') ? src = 'src = ' + this.src + '<br>' : src = 'src = <span class="error">Атрибут отсутствует</span><br>';
        if (this.alt != '') {
            alt = 'alt = ' + this.alt + '<br>';
        }
        else {
            alt = 'alt = <span class="error">Атрибут отсутствует</span><br>';
            this.style.border = '2px solid red';
        }
         (this.alt != '') ? alt = 'alt = ' + this.alt + '<br>' : alt = 'alt = <span class="error">Атрибут отсутствует</span><br>';
        blockInfoTask7.innerHTML = 'tag = ' + this.tagName + '<br>' + src + alt;
        document.querySelectorAll('.task-wrap')[1].appendChild(blockInfoTask7);
    });
    elem.addEventListener('mouseleave', function(e) {
        this.style.border = 'none';
    });
})
document.querySelectorAll('.link-task-7').forEach(function (elem) {
    elem.addEventListener('mouseenter', function(e) {
        var href, title, target;

        (this.href != '') ? href = 'href = ' + this.href + '<br>' : href = 'href = <span class="error">Атрибут отсутствует</span><br>';
        (this.title != '') ? title = 'title = ' + this.title + '<br>' : title = 'title = <span class="error">Атрибут отсутствует</span><br>';
        (this.target != '') ? target = 'target = ' + this.target + '<br>' : target = 'target = <span class="error">Атрибут отсутствует</span><br>';

        blockInfoTask7.innerHTML = 'tag = ' + this.tagName + '<br>' + href + title + target;
        document.querySelectorAll('.task-wrap')[1].appendChild(blockInfoTask7);
    });
})
// END OF 7-8 TASK

document.querySelector('#chekerOfHeading').addEventListener('click', function(e) {
    var h1 = document.querySelectorAll('h1'),
        h2 = document.querySelectorAll('h2'),
        h3 = document.querySelectorAll('h3'),
        h4 = document.querySelectorAll('h4'),
        h5 = document.querySelectorAll('h5'),
        h6 = document.querySelectorAll('h6'),
        out = document.querySelector('#nineTaskOut'),
        meta = document.querySelectorAll('meta'),
        title, description, keywords = '';
    (h1.length != 0) ? out.innerHTML += 'На странице h1 - ' + h1.length + ' штук.<br>' : out.innerHTML += '<span class="error">На странице h1 отсутствуют.</span><br>';
    (h2.length != 0) ? out.innerHTML += 'На странице h2 - ' + h2.length + ' штук.<br>' : out.innerHTML += '<span class="error">На странице h2 отсутствуют.</span><br>';
    (h3.length != 0) ? out.innerHTML += 'На странице h3 - ' + h3.length + ' штук.<br>' : out.innerHTML += '<span class="error">На странице h3 отсутствуют.</span><br>';
    (h4.length != 0) ? out.innerHTML += 'На странице h4 - ' + h4.length + ' штук.<br>' : out.innerHTML += '<span class="error">На странице h4 отсутствуют.</span><br>';
    (h5.length != 0) ? out.innerHTML += 'На странице h5 - ' + h5.length + ' штук.<br>' : out.innerHTML += '<span class="error">На странице h5 отсутствуют.</span><br>';
    (h6.length != 0) ? out.innerHTML += 'На странице h6 - ' + h6.length + ' штук.<br>' : out.innerHTML += '<span class="error">На странице h6 отсутствуют.</span><br>';
    // END OF TASK 9

    meta.forEach(function (elem) {
        if (elem.title != '') {
            title = elem.title;
            return title;
        } else if (elem.name = 'description') {
            description = elem.content;
            return description;
        } else if (elem.name = 'keywords') {
            keywords = elem.content;
            return keywords;
        }
    });
    (title != '') ? out.innerHTML += 'Длина meta title = ' + title.length + '<br>' : out.innerHTML += '<span class="error">meta title отсутствует</span><br>';
    (description != '') ? out.innerHTML += 'Длина meta description = ' + description.length + '<br>' : out.innerHTML += '<span class="error">meta description отсутствует</span><br>';
    (keywords != '') ? out.innerHTML += 'keywords = ' + keywords + '<br>' : out.innerHTML += '<span class="error">meta keywords отсутствует</span><br>';
});
