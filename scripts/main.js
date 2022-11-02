function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
  }
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/blackhole.png') {
        myImage.setAttribute ('src', 'images/jameswebb.png');
    
    } else {
        myImage.setAttribute ('src', 'images/blackhole.png');
    }
}
var myButton = document.querySelector('button');
var myHedaing = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHedaing.innerHTML = 'Hi, ' + myName + ', this is a picture of a black hole';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHedaing.innerHTML = 'Hi, ' + storedName + ', this is a picture of a black hole';
}

myButton.onclick = function() {
    setUserName();
}