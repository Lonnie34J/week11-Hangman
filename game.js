var characters = ["ryu","ken","sagat","chunli","mbison","balrog","ehonda","guile","zangief","cammy","vega","dhalsim","blanka"];
var userWins = 0;
var triesRemaining = 6;
var currentWord;
var placeholder;
var correctGuess;
var losses = 0;
var userGuesses = [];


function randomWord() {
	currentWord = characters[Math.floor(Math.random()*characters.length)];
	console.log(currentWord);