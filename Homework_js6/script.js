var form = document.getElementById('firstTaskForm');
var whatOption;
var secondTaskOut = document.querySelector('.second-task-out');

function colorizer(e) {
    if (this.className == '') {
        this.classList.add('task5-red');
    } else if (this.className != '') {
        this.classList.remove(this.className);
    }
}
function attributeCheker(event, atr, str, element) {
    if (atr != '') {
        atr = str + '= ' + atr + '<br>';
    } else {
        atr = str + '= <span class="error">Атрибут отсутствует</span><br>';
        element.style.border = '2px solid red';
    }
    return atr;
}
document.querySelector('#inputAdder').addEventListener('click', function(e) {
    // this.insertAdjacentHTML('afterEnd', '<input type="text"><button id="inputDeleter">-</button>');
    if (form.querySelectorAll('.firstTaskInput').length > 4) {
        alert('Превышено количество допустимых INPUT');
        return;
    }
    var inputFirstTask = document.createElement('input');
    var buttonDeleter = document.createElement('button');
    var inputBlock = document.createElement('div');

    inputFirstTask.type = 'text';
    inputFirstTask.className = 'firstTaskInput'

    buttonDeleter.className = 'inputDeleter';
    buttonDeleter.innerHTML = '-';
    buttonDeleter.addEventListener('click', function(e) {
        this.parentNode.remove();
    });
    inputBlock.className = 'blockFirstTask'
    inputBlock.appendChild(inputFirstTask);
    inputBlock.appendChild(buttonDeleter);
    form.insertBefore(inputBlock, getInfoFirstTask);
});


document.querySelector('#getInfoFirstTask').addEventListener('click', function(e) {
    var inputs = document.querySelectorAll('.firstTaskInput');
    var out = document.querySelector('#firstTaskOut');
    var outString = '';

    function erorrer(arr) {
        arr[i].classList.add('error-task1');
        arr[i].placeholder = 'Заполните поле!';
    }
    function adder(arr) {
        outString += arr[i].value + '<br>';
        arr[i].classList.remove('error-task1');
    }
    if (document.querySelector('#oddRadio').checked == true) {
            for (var i = 0; i < inputs.length; i++) {
                if (i % 2 == 0) {
                    if (inputs[i].value != '') {
                        adder(inputs);
                    } else {
                        erorrer(inputs);
                        return;
                    }
                }
            }
        } else if (document.querySelector('#evenRadio').checked == true) {

            for (var i = 0; i < inputs.length; i++) {
                if (i % 2 != 0) {
                    if (inputs[i].value != '') {
                        adder(inputs);
                    } else {
                        erorrer(inputs);
                        return;
                    }
                }
            }
        } else {
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].value != '') {
                    adder(inputs);
                } else {
                    erorrer(inputs);
                    return;
                }
            }
        }
    out.innerHTML = outString;
});
// END OF 1-3 TASKS

document.querySelector('.openerWindow').addEventListener('click', function(e) {
    function stylize(elem) {
        elem.style.width = '300px';
        elem.style.border = '1px solid #77A1D3';
        elem.style.boxShadow = '0px 0px 10px #77A1D3';
        elem.style.fontFamily = '"Roboto", sans-serif';
        elem.style.borderRadius = '5px';
        elem.style.padding = '15px';
        elem.style.background = 'none';
        elem.style.color = '#a5caf6';
        elem.style.fontWeight = '300';
        elem.style.fontSize = '13px';
        elem.style.marginLeft = '40px';
        elem.style.marginTop = '40px';
        elem.style.cursor = 'pointer';
    }

    var secondTaskOut = document.createElement('p');
    secondTaskOut.className = 'second-task-out';
    secondTaskOut.addEventListener('click', function(e) {
        this.remove();
    });

    var windowSecondTask = window.open('about:blank', 'Choose option', 'width=400,height=260,top=300, left=600');

    var firstOptionButton = windowSecondTask.document.createElement('button');
    firstOptionButton.className = 'new-window';
    firstOptionButton.innerHTML = 'Можешь нажать на меня например, я первый';
    firstOptionButton.addEventListener('click', function(e) {
        document.body.insertBefore(secondTaskOut, captionTask5);
        secondTaskOut.innerHTML = 'Вы нажали на первую кнопку, я угадал? :)<br> И если результат вы уже увидели, то можете нажать на меня чтобы я вам не мешал';
        windowSecondTask.close()
        return whatOption;
    });

    var secondOptionButton = windowSecondTask.document.createElement('button');
    secondOptionButton.innerHTML = 'Или на меня нажать можешь например, я второй';
    secondOptionButton.addEventListener('click', function(e) {
        document.body.insertBefore(secondTaskOut, captionTask5);
        secondTaskOut.innerHTML = 'Вы нажали на вторую кнопку, я угадал? :) <br> И если результат вы уже увидели, то можете нажать на меня чтобы я вам не мешал';
        windowSecondTask.close()
        return whatOption;
    });

    stylize(firstOptionButton);
    stylize(secondOptionButton);

    windowSecondTask.document.body.style.backgroundImage = 'linear-gradient(to right, #16222A 0%, #3A6073 51%, #16222A 100%)';
    //
    windowSecondTask.document.body.appendChild(firstOptionButton);
    windowSecondTask.document.body.appendChild(secondOptionButton);

});
// END OF FOURTH TASK

fifthTaskList.querySelectorAll('li').forEach(function  (element) {
    element.addEventListener('click', colorizer);
})
document.querySelector('#elementListAdder').addEventListener('click', function(e) {
    var li = document.createElement('li');
        li.addEventListener('click', colorizer);

        liText = document.querySelector('#elementListEnter').value;
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
        var src = attributeCheker(event, this.src, 'src', elem),
            alt = attributeCheker(event, this.alt, 'alt', elem);

        blockInfoTask7.innerHTML = 'tag = ' + this.tagName + '<br>' + src + alt;
        document.querySelectorAll('.task-wrap')[1].appendChild(blockInfoTask7);
    });
    elem.addEventListener('mouseleave', function(e) {
        this.style.border = 'none';
    });
})
document.querySelectorAll('.link-task-7').forEach(function (elem) {
    elem.addEventListener('mouseenter', function(e) {
        var href = attributeCheker(event, this.href, 'href', elem),
            title = attributeCheker(event, this.title, 'title', elem),
            target = attributeCheker(event, this.target, 'target', elem);
    elem.addEventListener('mouseleave', function(e) {
        this.style.border = 'none';
    });
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
        outStr = '',
        out = document.querySelector('#nineTaskOut'),
        meta = document.querySelectorAll('meta'),
        title, description, keywords = '';

    function captionChecker(tag, out, tagStr) {
        (tag.length != 0) ? outStr += 'На странице '+ tagStr + ' - ' + tag.length + ' штук.<br>' : outStr += '<span class="error">На странице ' + tagStr + ' отсутствуют.</span><br>';
        return outStr;
    }
    function metaChecker(atr, out, attrStr) {
        (atr != '') ? out.innerHTML += 'Длина meta ' + attrStr + ' = ' + atr.length + '<br>' : out.innerHTML += '<span class="error">meta '+ attrStr +' отсутствует</span><br>';
    }
    captionChecker(h1, outStr, 'h1');
    captionChecker(h2, outStr, 'h2');
    captionChecker(h3, outStr, 'h3');
    captionChecker(h4, outStr, 'h4');
    captionChecker(h5, outStr, 'h5');
    captionChecker(h5, outStr, 'h5');

    out.innerHTML = outStr;


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
    metaChecker(title, out, 'title');
    metaChecker(description, out, 'description');
    metaChecker(keywords, out, 'keywords');
});
