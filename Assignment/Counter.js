// First we get the elements.
let count1 = 0;
let count2 = 0;
let count3 = 480;
let counter1 = document.querySelector(".counter1");
let counter2 = document.querySelector(".counter2");
let counter3 = document.querySelector(".counter3");

console.log(counter1);

function x1() {
    if (count1 <= 70) {
        counter1.innerHTML = count1++;
    }
}
setInterval(x1, 33.333);

function x2() {
    if (count2 < 11) {
        counter2.innerHTML = count2++;
    }
}
setInterval(x2, 212);

function x3() {
    if (count3 <= 500) {
        counter3.innerHTML = count3++;
    }
}
setInterval(x3, 111);