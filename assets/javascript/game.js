// Psuedo Code
// Create an array of words
// Create Underscore word based on length of word chosen
// Get the users guess
// Check if guess is right
// Check if guess is wrong
// If correct push to underscore word
// If wrong push to letters guessed 


	// Data variables
	var wordBank = ["PEACOCK", "GIRAFFE", "POLARBEAR", "ARCTICFOX", "BLUEWHALE", "TIGER", "SEAOTTER", "LEOPARD", "GORILLA", "PANDA", "CRANE", "ORANGUTAN", "REDWOLF", "ARMADILLO", "BROWNBEAR", "HONEYBEE","KILLERWHALE", "SEAHORSE", "SLOTH", "ZEBRA", "WOMBAT"];
	var winCount = 0;  
	var lossCount = 0; 
	var lettersGuessed = [];                   
	var guessesRemaining = 10;
	var hangmanWord = "";
	var underscoreWord = [];
	var hangManWordString = "";
	
 
	// function convertToString(word) {
	// 	hangManWordString = underscoreword.join('');
	// }


	// Hang Man Word
	function setHangmanWord() {
		hangmanWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	}

	// New Underscore Word
	function newUnderscoreWord() {
		var underscoreArray = []
		for (var i = 0 ; i < hangmanWord.length; i++) {
			underscoreArray.push("_");
		}
		underscoreWord = underscoreArray;
	}


	// User Win Count
	function applyWinCount() {
		winCount++;
	}

	
	// User Loss Count
	function applyLossCount() {
		lossCount++;
	}


	// Decrease Guesses Remaining
	function decreaseGuessesRemaining() {
		guessesRemaining--;
	}


	// Check If User Won
	function didUserWin() {
		var underscoreString = underscoreWord.join('');
		if (underscoreString === hangmanWord) {
			return true;
		} else {
			return false;
		}
	}


	// Check If User Lost
	function didUserLose() {
		if (guessesRemaining === 0) {
			return true;
		} else {
			return false;
		}
	}


	//I s User Correct
	function isGuessCorrect(guess) {
		if (hangmanWord.indexOf(guess) !== -1) {
			return true;
		} else {
			return false;
		}
	}


	function isGuessAccurate(guess) {
		if (underscoreWord.indexOf(guess) === -1 && 
			lettersGuessed.indexOf(guess) === -1) {	 
			return true;
		} else {
			return false;
		}
	}

	function isGuessALetter(guess) {
		var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		if (alphabet.indexOf(guess) !== -1) {
			return true;
		} else {
			return false;
		}
	}


	// Replaces Underscore
	function replaceUnderscore(guess) {
		for (var i = 0; i < hangmanWord.length; i++) {
			if (guess === hangmanWord[i]) {
				underscoreWord[i] = guess;
			}
		}
	}


	// Push The Letters to Replace Underscore
	function pushToLettersGuessed(guess) {
		lettersGuessed.push(guess);
	}



	// New Round
	function newRound() {
		guessesRemaining = 10;
		lettersGuessed = [];
		setHangmanWord();
		newUnderscoreWord();
		inputToBrowser();
	}


	// Get My Elements
	function inputToBrowser() {
		document.getElementById('wincount').innerHTML = winCount;
		document.getElementById('losscount').innerHTML = lossCount;
		document.getElementById('underscoreword').innerHTML = underscoreWord.join('');
		document.getElementById('lettersguessed').innerHTML = lettersGuessed;
		document.getElementById('guessesremaining').innerHTML = guessesRemaining;
		// document.getElementById('resetGame').innerHTML = 
	}



	//Game Management 
	function manageGamePlay(guess) {
		// Is Guess a Letter
		if (isGuessALetter(guess)) {

			// Is Guess Accurate
			if (isGuessAccurate(guess)) {

				// Is Guess Correct 
				if (isGuessCorrect(guess)) {

					// Replace Underscore 
					replaceUnderscore(guess);
					inputToBrowser()
				} else { 
					// Add letter to Array
					pushToLettersGuessed(guess);
					decreaseGuessesRemaining(guess);
					inputToBrowser()
				}
			}
		}


    // Win Or Loss
    	if (didUserWin()) {
    		applyWinCount();
    		console.log("YOU WIN");
    		newRound();
   	 	}

    	if (didUserLose()) {
    		applyLossCount();
    		console.log("YOU MIGHT BE A LOSER");
    		newRound();
    	}
	}

			
	newRound();

	// Event Listener
	document.addEventListener('keyup', function(event) {
		var guess = event.key.toUpperCase();

		manageGamePlay(guess);
	});





















	











