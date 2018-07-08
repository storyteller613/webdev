//ask user for guess
var number = Number(prompt("Guess a number!"));

//create answer
var answer = 4;

// check if too high
if (number > answer) {
	alert("Too high. Try again.")
	number = Number(prompt("Try again"))
}

//check if too low
else if (number < answer){
	alert("Too low. Try again")
	number = Number(prompt("Try again"))
}

//checif if right
else{
	alert("You guessed it!!!")
}