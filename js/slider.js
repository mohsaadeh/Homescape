window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle('sticky',window.scrollY > 0);
});

var menu =document.querySelector('.menu');
var menuBtn =document.querySelector('.menu-btn');
var closeBtn =document.querySelector('.close-btn');

menuBtn.addEventListener("click",() =>{
    menu.classList.add('active');
});

closeBtn.addEventListener("click",() =>{
    menu.classList.remove('active');
});


var container = document.getElementById('sale-container2')
var slider2 = document.getElementById('sale-slider2');
var slides2 = document.getElementsByClassName('sale-slide2').length;
var buttons2 = document.getElementsByClassName('sale-btn2');


var currentPosition2 = 0;
var currentMargin2 = 0;
var slidesPerPage2 = 0;
var slidesCount2 = slides2 - slidesPerPage2;
var containerWidth2 = container.offsetWidth;
var prevKeyActive2 = false;
var nextKeyActive2 = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
containerWidth2 = container.offsetWidth;
setParams2(containerWidth2);
}

function setParams2(w) {
if (w < 551) {
slidesPerPage2 = 1;
} else {
if (w < 901) {
slidesPerPage2 = 2;
} else {
if (w < 1101) {
slidesPerPage2 = 3;
} else {
slidesPerPage2 = 4;
}
}
}
slidesCount2 = slides2 - slidesPerPage2;
if (currentPosition2 > slidesCount2) {
currentPosition2 -= slidesPerPage2;
};
currentMargin2 = - currentPosition2 * (100 / slidesPerPage2);
slider2.style.marginLeft = currentMargin2 + '%';
if (currentPosition2 > 0) {
buttons2[0].classList.remove('inactive');
}
if (currentPosition2 < slidesCount2) {
buttons2[1].classList.remove('inactive');
}
if (currentPosition2 >= slidesCount2) {
buttons2[1].classList.add('inactive');
}
}

setParams2();

function slideRight2() {
if (currentPosition2 != 0) {
slider2.style.marginLeft = currentMargin2 + (100 / slidesPerPage2) + '%';
currentMargin2 += (100 / slidesPerPage2);
currentPosition2--;
};
if (currentPosition2 === 0) {
buttons2[0].classList.add('inactive');
}
if (currentPosition2 < slidesCount2) {
buttons2[1].classList.remove('inactive');
}
};

function slideLeft2() {
if (currentPosition2 != slidesCount2) {
slider2.style.marginLeft = currentMargin2 - (100 / slidesPerPage2) + '%';
currentMargin2 -= (100 / slidesPerPage2);
currentPosition2++;
};
if (currentPosition2 == slidesCount2) {
buttons2[1].classList.add('inactive');
}
if (currentPosition2 > 0) {
buttons2[0].classList.remove('inactive');
}
};








var container = document.getElementById('sale-container')
var slider = document.getElementById('sale-slider');
var slides = document.getElementsByClassName('sale-slide').length;
var buttons = document.getElementsByClassName('sale-btn');


var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
containerWidth = container.offsetWidth;
setParams(containerWidth);
}

function setParams(w) {
if (w < 551) {
slidesPerPage = 1;
} else {
if (w < 901) {
slidesPerPage = 2;
} else {
if (w < 1101) {
slidesPerPage = 3;
} else {
slidesPerPage = 4;
}
}
}
slidesCount = slides - slidesPerPage;
if (currentPosition > slidesCount) {
currentPosition -= slidesPerPage;
};
currentMargin = - currentPosition * (100 / slidesPerPage);
slider.style.marginLeft = currentMargin + '%';
if (currentPosition > 0) {
buttons[0].classList.remove('inactive');
}
if (currentPosition < slidesCount) {
buttons[1].classList.remove('inactive');
}
if (currentPosition >= slidesCount) {
buttons[1].classList.add('inactive');
}
}

setParams();

function slideRight() {
if (currentPosition != 0) {
slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
currentMargin += (100 / slidesPerPage);
currentPosition--;
};
if (currentPosition === 0) {
buttons[0].classList.add('inactive');
}
if (currentPosition < slidesCount) {
buttons[1].classList.remove('inactive');
}
};

function slideLeft() {
if (currentPosition != slidesCount) {
slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
currentMargin -= (100 / slidesPerPage);
currentPosition++;
};
if (currentPosition == slidesCount) {
buttons[1].classList.add('inactive');
}
if (currentPosition > 0) {
buttons[0].classList.remove('inactive');
}
};