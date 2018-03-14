loadButtonClick = function () {

  button = document.querySelector("button");

  button.addEventListener("click", function () {
    button.innerHTML = Date().toString();
  });
}

// attempt 1

// no_inputs = document.querySelectorAll("input");

// header_back_color = no_inputs[0];
// header_text_color = no_inputs[1];
// sidebar_color = no_inputs[2];
// content_cont_color = no_inputs[3];
// content_text_color = no_inputs[4];

// fillColor1 = function (select_input) {
// 	selector = select_input;
// 	target = document.querySelector("h1")

// 	selector.addEventListener("input", function () {
// 	    target.style.backgroundColor = selector.value;
// 	  });
// }

// also works

fillColor= function () {

  selector = document.querySelector(".sidebar-button-background");
  target = document.querySelector("h1")

  selector.addEventListener("input", function () {
    target.style.backgroundColor = selector.value;
    console.log("input called");
  });
}

document.addEventListener('DOMContentLoaded', fillColor);

function changeFont(obj) {
    document.getElementById("titletext").style.Color = obj.value;
}

function changeBackground(obj) {
    document.getElementById("coltext").style.backgroundColor = obj.value;
}

function changeBackground2(obj2) {
    document.getElementById("coltext2").style.backgroundColor = obj2.value;
}

function changeBackground3(obj3) {
    document.getElementById("coltext3").style.backgroundColor = obj3.value;
}

function changeBackground4(obj4) {
    document.getElementById("coltext4").style.backgroundColor = obj4.value;
}

function changeBackground5(obj5) {
    document.getElementById("coltext5").style.backgroundColor = obj5.value;
}

function changeBackground6(obj6) {
    document.getElementById("coltext6").style.backgroundColor = obj6.value;
}

//Code works: 

// fillColor= function () {

//   selector = document.querySelector("input");
//   target = document.querySelector("h1")

//   selector.addEventListener("input", function () {
//     target.style.backgroundColor = selector.value;
//     console.log("input called");
//   });
// }

// document.addEventListener('DOMContentLoaded', fillColor);
