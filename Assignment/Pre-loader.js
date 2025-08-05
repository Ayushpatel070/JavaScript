// function load(){
//   setTimeout(() => {
//     document.body.classList.add('loaded');
//   }, 5000);
// };

let page = document.getElementById('page');
let preloader = document.getElementById('preloader');

page.style.display = "none";

function getpage() {
  page.style.display = "block";
  preloader.style.display = "none";
}

setTimeout("getpage()", 5000);