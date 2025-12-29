// Like Buttons for 3 Products.
let Likebtn1 = document.getElementById("LikeBtn1");
let Likebtn2 = document.getElementById("LikeBtn2");
let Likebtn3 = document.getElementById("LikeBtn3");
let Likebtns = document.querySelectorAll(".fa-heart");
console.log(Likebtns)

// Product Container.
let Product1 = document.querySelector(".Product1");
let Product2 = document.querySelector(".Product2");
let Product3 = document.querySelector(".Product3");

// Quantity of products.
let quantity1 = document.querySelector(".number1");
let quantity2 = document.querySelector(".number2");
let quantity3 = document.querySelector(".number3");

// Price of products.
let price1 = document.querySelector(".price1");
let price2 = document.querySelector(".price2");
let price3 = document.querySelector(".price3");

// Quantity Counters.
let count1 = 1;
let count2 = 1;
let count3 = 1;

// Unit price of products.
let unitPrice1 = 549;
let unitPrice2 = 870;
let unitPrice3 = 349;

// For Deleting product from the card.
function dlt1() {
    Product1.style.display = "none";
}

function dlt2() {
    Product2.style.display = "none";
}

function dlt3() {
    Product3.style.display = "none";
}

for(let btn of Likebtns) {
    btn.addEventListener("click", function(){
        let currentColor = window.getComputedStyle(this).color;
        if (currentColor === "rgb(128, 128, 128)") {
            this.style.color = "red";
        }
        else {
            this.style.color = "gray";
        }
    });
}

// For giving like to the product from the card.
// function like1() {
//     if (Likebtn1.style.color === "gray") {
//         Likebtn1.style.color = "red";
//     }
//     else {
//         Likebtn1.style.color = "gray";
//     }
// }

// function like2() {
//     if (Likebtn2.style.color === "gray") {
//         Likebtn2.style.color = "red";
//     }
//     else {
//         Likebtn2.style.color = "gray";
//     }
// }

// function like3() {
//     if (Likebtn3.style.color === "gray") {
//         Likebtn3.style.color = "red";
//     }
//     else {
//         Likebtn3.style.color = "gray";
//     }
// }

// Increase the quantity of the products and update the prices.
function plus1() {
    if (count1 < 5) {
        count1++;
        quantity1.innerHTML = count1;
        price1.innerHTML = "$" + (unitPrice1 * count1);
    }
}

function plus2() {
    if (count2 < 5) {
        count2++;
        quantity2.innerHTML = count2;
        price2.innerHTML = "$" + (unitPrice2 * count2);
    }
}

function plus3() {
    if (count3 < 5) {
        count3++;
        quantity3.innerHTML = count3;
        price3.innerHTML = "$" + (unitPrice3 * count3);
    }
}

// Decrease the quantity of the products and update the prices.
function minus1() {
    if (count1 > 1) {
        count1--;
        quantity1.innerHTML = count1;
        price1.innerHTML = "$" + (unitPrice1 * count1);
    }
}

function minus2() {
    if (count2 > 1) {
        count2--;
        quantity2.innerHTML = count2;
        price2.innerHTML = "$" + (unitPrice2 * count2);
    }
}

function minus3() {
    if (count3 > 1) {
        count3--;
        quantity3.innerHTML = count3;
        price3.innerHTML = "$" + (unitPrice3 * count3);
    }
}