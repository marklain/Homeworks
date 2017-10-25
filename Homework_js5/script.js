document.querySelector('#firstTaskBlock').addEventListener('mousemove', function(e) {
    var out = document.querySelector('#firstTaskOut');
    console.log(e);
    out.innerHTML = 'X = ' + e.offsetX + '<br>' + 'Y = ' + e.offsetY;
});
// END OF FIRST TASK
document.querySelector('#secondTaskBlock').addEventListener('dblclick', function(e) {
    if (this.style.backgroundImage == '') {
        this.style.backgroundImage = 'url(img/opened.svg)';
    } else if (this.style.backgroundImage == 'url("img/opened.svg")') {
        this.style.backgroundImage = 'url(img/closed.svg)';
    } else if (this.style.backgroundImage == 'url("img/closed.svg")') {
        this.style.backgroundImage = 'url(img/opened.svg)';
    }
});

// END OF SECOND TASK
document.querySelector('#blockAdder').addEventListener('click', function(e) {
    for (var i = 0; i < 343; i++) {
        document.querySelector('#blockAdder').insertAdjacentHTML('afterEnd', '<div id="thirdTaskBlock"></div>');
    }
    var secondTaskDivs = document.querySelectorAll('#thirdTaskBlock');
    secondTaskDivs.forEach(function(elem) {
        elem.addEventListener('mouseenter', function(e) {
            this.style.borderRadius = '50%';
        });
    });
});

// END OF THITD TASK
var fourthTaskDiv = document.querySelector('#fourthTaskDiv');
var fourthTaskImgs = document.querySelectorAll('.fourth-task-img');
fourthTaskImgs.forEach(function(elem) {
    elem.addEventListener('click', function(e) {
        fourthTaskDiv.style.backgroundImage = 'url(' + elem.src + ')';
    });
})

// END OF FOURTH TASK

var topCounter = 0;
document.querySelector('#fifthTaskBlock').addEventListener('click', function(e) {
    topCounter += 100;
    fifthTaskBlock.style.marginTop = topCounter + 'px';
});
// END OF FIFTH TASK
var triggerCounter = 0;
document.querySelector('#trigger').addEventListener('click', function(e) {
    if (triggerCounter == 0) {
        this.style.left = '105px';
        triggerCounter = 1;
        console.log(triggerCounter);
    } else if (triggerCounter == 1) {
        this.style.left = '205px';
        triggerCounter = 2;
        console.log(triggerCounter);
    } else if (triggerCounter == 2) {
        this.style.left = '5px';
        triggerCounter = 0;
        console.log(triggerCounter);
    }
});
