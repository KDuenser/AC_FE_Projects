// JS files needs to do the following
// 1. Assign 2 options (labels, pictures) to 3 variables (2 goat, 1 car) 
// 2. Randomly assing variables to 3 door variables (door1,door2,door3)
// 3. Allow User to click one door; 1 of 2 goat doors open
// 4. Allow user to click again; open other door
// 5. reset button to reload script

// Strategy
// Script runs -> assigns class randomly (goat 1, goat 2, car) to Door 1, Door 2, Door 3
// Classes assign are goat, car to 3 doors (Door 1, Door 2, Door 3)

// On click -> if class = goat 1 -> open goat 2 (and vice versa) 
// if goat 1, open goat 2, if goat 2, open goat 1, if car (randomly open goat 1 or goat 2)
// check which door was opened (eg. 1, 2, 3)
// on 2nd click, check door # (1, 2, 3), OLD open door (from first click), and find the last door to open
// 

console.log("hello world!")

goat_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQth_TfKmvk5IucOA6O6MkLxQ1ehgpZlCzi7_ToBhXx-u9nS772";
car_url = "https://i2-prod.mirror.co.uk/incoming/article11879413.ece/ALTERNATES/s615/Boot-of-car-packed-with-inflatable-toy-balls-and-stereo.jpg";

car_assignment = Math.floor(Math.random()*(3)+1);
	
if (car_assignment == 1) {
		door1pic = car_url;
	}
else {
		door1pic = goat_url;
	}

if (car_assignment == 2) {
		door2pic = car_url;
	}
else {
		door2pic = goat_url;
	}

if (car_assignment == 2) {
		door3pic = car_url;
	}
else {
		door3pic = goat_url;
	}
	


// greet = function(func) {console.log(func)};
// greet2 = function(input1,input2) { 
// 	checker = 0;
// 	checks = input2.length; 
// 	for (i=1; i <= checks; i++) {
// 		if (input2[i-1] == input1) {
// 			string = "hello " + input1 + "!";
// 			greet(string);
// 			checker = 1;
// 		}
// 		else {
// 		}
// 	}
// 	if (checker != 1) {
// 		greet("Hello!")
// 	}
// }

// greet2(name,name_array);

// // h1_tag = document.querySelector("h1");
// // h1_tag

// // 2nd function

// timeprint = function() {

// var currentdate = new Date(); 
// var datetime =  currentdate.getDate() + "/"
//                 + (currentdate.getMonth()+1)  + "/" 
//                 + currentdate.getFullYear() + " @ "  
//                 + currentdate.getHours() + ":"  
//                 + currentdate.getMinutes() + ":" 
//                 + currentdate.getSeconds();

// console.log(datetime);
// }

// timeprint();