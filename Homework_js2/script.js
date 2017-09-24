var mas = [99, 33, 'Hello', 5344];
function masOut() {
    var p = document.getElementById('new'),
        str = '';
    for (var i = 0; i < mas.length; i++) {
      str += mas[i] + '<br/> ';
    }
    p.innerHTML = str;
}
function elementAdder() {
    var ind = +document.getElementById('indexOfElementInArray').value,
        val = document.getElementById('valueOfElementInArray').value;
    mas[ind] = val;
    masOut();
}
function pow1() {
    mas.pop();
    masOut();
}
function pow2() {
    mas.shift();
    masOut();
}
function pow3() {
    var whatAddByPush = document.getElementById('valueOfPushAdder').value;
    mas.push(whatAddByPush);
    masOut();
}
