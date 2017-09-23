"use strict"
var m1 = [99, 33, 'Hello', 5344, 4569];
var p = document.getElementById('new');
console.log(p);

function pow() {
  for (var i = 0; i < m1.length; i++) {
    p.innerHTML += m1[i] + '<br/> ';
  }
}
pow();
