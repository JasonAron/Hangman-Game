






	// Data variables
	var wordBank = ['Peacock', 'Giraffe', 'Polar Bear', 'Arctic Fox', 'Blue Whale', 'Tiger', 'Sea Otter', 'Snow Leopard', 'Gorilla'];

function startGame() {
	var winCount = 0;   
	var lettersGuessed = [];                   
	var livesLeft = 10;
	var hangmanWord = "";
	var underscoreWord = [];
	var alphabet = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

	var userGuessDiv = document.getElementById("userGuess");

	//Game logic




	function setHangmanWord() {
		hangmanWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	};


	function newUnderscoreWord() {
		for (var i = 0 ; i < hangmanWord.length; i++) {
			underscoreWord.push("_")
		}
	};


	function replaceUnderScore(guess) {
		for (var i = 0; i < hangmanword.length; i++)
			if (guess === hangmanWord[i]) {
				underscoreWord[i] = guess;
		}
	};


	function decreaseLivesLeft() {
		livesLeft--;
	};

	function increasewWinCount() {
		winCount++;
	};

	function checkLives() {
		if (livedLeft === 0) {
			return true;
		} else {
			return false;
		}
	};

	function pushToLettersGuessed(guess) {
		lettersGuessed.push(guess);
	};



	document.addEventListener('keyup', event => {
		var userGuess = event.key.toUpperCase();
			manageGamePlay(userGuess);
	});

	function isGuessCorrect(guess) {
		if (hangmanWord.indexOf(guess) !== -1) {
			return true;
		} else {
			return false;
		}
	};

	startGame();

	function manageGamePlay(guess) {

	if (alphabet.indexOf(guess) !== -1) {

	

	//screen letters already guessed
	if (lettersGuessed.indexOf(guess) === -1 && 
	underscoreWord.indexOf(guess) === -1) {
	


	if(isGuessCorrect(guess)) {
		replaceUnderScore(guess);
			userGuessDiv.innerHTML() = newUnderscoreWord; 
		} else {
		decreaseLivesLeft();
		pushToLettersGuessed();
	
		} else {
		}
	}











