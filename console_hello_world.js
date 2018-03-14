console.log("hello world!")

name = "Kurt";
name_array = ["Kurt", "yuki", "alvin"];

greet = function(func) {console.log(func)};
greet2 = function(input1,input2) { 
	checker = 0;
	checks = input2.length; 
	for (i=1; i <= checks; i++) {
		if (input2[i-1] == input1) {
			string = "hello " + input1 + "!";
			greet(string);
			checker = 1;
		}
		else {
		}
	}
	if (checker != 1) {
		greet("Hello!")
	}
}

greet2(name,name_array);

// h1_tag = document.querySelector("h1");
// h1_tag

// 2nd function

timeprint = function() {

var currentdate = new Date(); 
var datetime =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

console.log(datetime);
}

timeprint();

// WEilang

checkTime = function() {
	console.log(Date());
}

checkTime();

// button code

loadButtonClick = function () {

  button = document.querySelector("button");

  button.addEventListener("click", function () {
    //button.innerHTML = checkTime();
    button.innerHTML = Date().toString();
  });
}

document.addEventListener('DOMContentLoaded', loadButtonClick);
