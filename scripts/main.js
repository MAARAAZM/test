
function reset() {
    var mySrc = myImage.getAttribute('src');
    if(!(mySrc === 'images/choice.jpg')) {
        myImage.setAttribute ('src','images/choice.jpg');
        myHeading.innerHTML = 'Подумай хорошо и ответь'
    }
}

function vilkoj() {
    myImage.setAttribute ('src','images/pirat.jpg');
    myHeading.innerHTML = 'Арррррррррррррррр'
}

function pidor() {
    myImage.setAttribute ('src','images/pidor.jpg');
    myHeading.innerHTML = 'Коментарии излишни';
    counter()
}

function counter() {
    a += 1;
    myCounter.innerHTML = 'Количество пид..ов:  ' + a
}


var myImage = document.querySelector('img');
var myButton = document.querySelectorAll('button')[0];
var myButton2 = document.querySelectorAll('button')[1];
var myButton3 = document.querySelectorAll('button')[2];
var myHeading = document.querySelector('h1');
var myCounter = document.querySelector('h2');
var a=0;


myButton.onclick = function() {
    vilkoj();
};

myButton2.onclick = function() {
    pidor();
};

myButton3.onclick = function() {
   reset()
};


