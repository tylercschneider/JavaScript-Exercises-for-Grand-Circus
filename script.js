
var userChoice = "no";
var toughQuestions = ["Enter A Number!", 
					"Do you want to play?", 
					"Enter your word", 
					"Do you want to play again?", 
					"Would you like to print your name?",
					"What is your name?",
					"Would you like to print your name again?", 
					"What time of day is it?"] ;

var direction = ["Enter number here.", "Enter yes or no here.", "Enter word here.", "Enter name here.", "Enter 'morning', 'afternoon', or 'evening'"];

function questionAsker(q1,d1) {
	var userInput = prompt(toughQuestions[q1], direction[d1]);
	return userInput;
}

///////////////
//Excercise 1 /////////////////////////////////
//////////////
function factorialCalculator (userNumber) {
	var calculation = 0;
	for (i=1; i<=userNumber; i++) {
		calculation += i;
	}
	console.log(calculation);
}
function exerciseOne(){
	var chosenNumber = questionAsker(0,0);
	if (!isNaN(chosenNumber)){
		factorialCalculator(chosenNumber);
		console.log("I've done my job. That should be the right answer. Click on someone else.");
	}	
	else {
		console.log("Click the button again and enter a number. Not a word or whatever you just put in that window.");
	}
}

///////////////
//Excercise 2 /////////////////////////////////
//////////////
function wordBuilder(wordArray) {
	userChoice = userChoice.toLowerCase();

	if(userChoice === "yes" || userChoice === "y") {
		var wordToAdd = questionAsker(2,2);

		wordArray.push(wordToAdd);
		userChoice = questionAsker(3, 1);
		wordBuilder(wordArray);
		return wordArray;
	}
	else if(userChoice === "no" || userChoice === "n"){
		return
	}
	else{
		console.log("I couldn't comprehend what you entered.");
		userChoice = questionAsker(1, 1);
		wordBuilder(wordArray);
		return wordArray;
	}
}

function outputWord(wordArray) {
	var wordOutput = wordArray[0];
	var i=1
	if(wordArray.length > 1){
		do {
			wordOutput = wordOutput + " " + wordArray[i];
			i++;
		}
		while(i < wordArray.length);
	}	
	console.log(wordOutput);
}


function exerciseTwo() {
	var wordArray = []
	userChoice = questionAsker(1, 1);
	wordBuilder(wordArray);

	if(wordArray.length > 0) {
		outputWord(wordArray);
		console.log("That was easy =)")
	}

	else {
		console.log("Good luck with life. :|");
	}
}

///////////////
//Excercise 3 /////////////////////////////////
//////////////
function namePrinter(nameThread, userChoice) {
	
	while(userChoice === "yes" || userChoice === "y") {
		console.log(nameThread);
		nameThread += "!";
		userChoice = questionAsker(6,1);
		userChoice = userChoice.toLowerCase();
		userChoice = namePrinter(nameThread, userChoice);

	}
	return userChoice;
}
function exerciseThree() {
	var nameThread = "Hello. My name is ";
	userChoice = questionAsker(4,1);
	userChoice = userChoice.toLowerCase();
	if(userChoice ==="yes") {
		var name = questionAsker(5,3);
		nameThread += name;
		namePrinter(nameThread, userChoice);
	}
	console.log("cool. have a nice day. I'm done.")

}

///////////////
//Excercise 4 /////////////////////////////////
//////////////
var timeOfDay = {
		"morning": ["morning", "breakfast", "eggs and toast"],
		"afternoon": ["afternoon", "lunch", "a salad"],
		"evening": ["evening", "dinner", "chicken and rice"],
	};
function exerciseFour() {
	userChoice = questionAsker(7, 4);
	userChoice = userChoice.toLowerCase();

	if(userChoice === "morning" || userChoice==="afternoon" || userChoice==="evening"){
		console.log("Since it is " + timeOfDay[userChoice][0] + ", you should be eating " + timeOfDay[userChoice][1] + ". We suggest " + timeOfDay[userChoice][2] + ".");
	}
	else{
		console.log("No idea what you chose... Click the button to try again. This is the real world bud...spelling matters.")
	}
}
////////////////
//Click handlers to run exercise functions /////////////////
////////////////
document.getElementById("ex1").addEventListener("click", exerciseOne);
document.getElementById("ex2").addEventListener("click", exerciseTwo);
document.getElementById("ex3").addEventListener("click", exerciseThree);
document.getElementById("ex4").addEventListener("click", exerciseFour);