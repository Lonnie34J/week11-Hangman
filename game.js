console.log("in working condition");

var myHangwords = require("./word.js");

function randomWord() {
	var currentWord = myHangwords.hangwords[Math.floor(Math.random()*hangwords.length)];

	if (err){
		throw err;
	}

	console.log(currentWord);

}