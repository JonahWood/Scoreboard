let home = 0
let away = 0

function homeButton1(){
console.log("home", home++);
let homeElem = document.getElementById('home')
homeElem.innerText = home
}

function homeButton3(){
(home++);
(home++);
console.log("home", home++);
let homeElem = document.getElementById('home')
homeElem.innerText = home
}

function homeButton6(){
(home++);
(home++);
(home++);
(home++);
(home++);
console.log("home", home++);
let homeElem = document.getElementById('home')
homeElem.innerText = home
}

function awayButton1(){
console.log("away", away++);
let awayElem = document.getElementById('away')
awayElem.innerText = away
}

function awayButton3(){
(away++);
(away++);
console.log("away", away++);
let awayElem = document.getElementById('away')
awayElem.innerText = away
}

function awayButton6(){
(away++);
(away++);
(away++);
(away++);
(away++);
console.log("away", away++);
let awayElem = document.getElementById('away')
awayElem.innerText = away
}

// SECTION Reset button //

function resetButton(){
    let awayElem = document.getElementById('away')
}