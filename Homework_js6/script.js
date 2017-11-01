var form = document.getElementById('firstTaskForm');
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
                }
                else {
                    inputs[i].style.border = '1px solid red';
                    inputs[i].placeholder = 'Заполните поле!';
                }
            }
        }
    } else if (document.querySelector('#evenRadio').checked == true) {

        for (var i = 0; i < inputs.length; i++) {
            if (i % 2 == 0) {
                if (inputs[i].value != '') {
                    outString += inputs[i].value + '<br>';
                    inputs[i].style.border = '1px solid #77A1D3';
                }
                else {
                    inputs[i].style.border = '1px solid red';
                    inputs[i].placeholder = 'Заполните поле!';
                }
            }
        }
    }
    else {
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value != '') {
                outString += inputs[i].value + '<br>';
                inputs[i].style.border = '1px solid #77A1D3';
            }
            else {
                inputs[i].style.border = '1px solid red';
                inputs[i].placeholder = 'Заполните поле!';
            }
        }
    }

    out.innerHTML = outString;
    console.log(outString);
});
function errorOuter(arr, i, outString) {
    if (arr[i].value != '') {
        outString += inputs[i].value + '<br>';
        inputs[i].style.border = '1px solid #77A1D3';
    }
    else {
        inputs[i].style.border = '1px solid red';
        inputs[i].placeholder = 'Заполните поле!';
    }
}
