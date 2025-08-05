let pTag = document.getElementById('p1');
let hidebtn = document.getElementById("b1");
let showbtn = document.getElementById("b2");
let hidebtn2 = document.getElementById("b3");
let i1 = document.querySelector("#i1");
let i2 = document.getElementById('i2');
let i3 = document.getElementById('i3');
let getimg = document.getElementById('b4');
let Changeimg = document.getElementById('b5');
let swapimg = document.getElementById('b6');

console.log(pTag);

function hidePara() {
    pTag.style.display = "none";
}

function showPara() {
    pTag.style.display = "block";
}

function HideShowPara() {
    if (hidebtn2.textContent === "Hide") {
        if (pTag.style.display === "none") {
            alert("The Paragraph is already Hidden!");
            return;
        }
        pTag.style.display = "none";
        hidebtn2.textContent = "Show";
    }
    else {
        pTag.style.display = "block";
        hidebtn2.textContent = "Hide";
    }
}

function changeimg() {
    if (i2.src.includes("i2.jpg")) {
        i2.src = "Images/i3.jpg";
    }

    else {
        i2.src = "Images/i2.jpg";
    }
}

function Swapimg() {
    let temp = i2.src;
    i2.src = i3.src;
    i3.src = temp;

    if (i2.src == i3.src) {
        alert("Images are same it can not be swaped.");
        return;
    }
}

let priceInput = document.getElementById('priceInput');
let priceSelector = document.getElementById('priceSelector');

function select(){
    const selectedValue = parseInt(priceSelector.value);
    if (!isNaN(selectedValue)) {
        priceInput.value = selectedValue * 200;
    } else {
        priceInput.value = "";
    }
};